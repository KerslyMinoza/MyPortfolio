import './projectdeck.css';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import wrapDistance from '../../utils/wrapDistance.js';

const MotionLink = motion.create(Link);

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

/* One straight row. A card's signed distance from the centre is the only thing
   that positions it: the whole deck is a single continuous function of that
   number, so the stack reads the same mid-scroll as it does at rest.

   The cards you haven't reached yet stack off to the right, each one peeking
   out past the edge of the one in front. Travel has two parts. LEAD is the gap
   the front card opens up as it pulls clear of the pack — it arrives almost at
   once, which is what makes the centre card read as the featured one. TRAIL is
   the steady gap every card behind keeps from its neighbour, so the tail
   recedes in even slivers instead of collapsing into a single edge. Both are
   fractions of the card's own width, so the row reads identically on a 13"
   laptop and a 32" monitor. */
const LEAD = 0.19; // × card width — how far the front card separates
const LEAD_SOFT = 0.4; // cards travelled before that separation is complete
const TRAIL = 0.147; // × card width — the gap held between the cards behind

/* Size falls away steeply, so a sliver reads as depth rather than as a second
   card competing with the one at the front. */
const MIN_SCALE = 0.08; // size the deepest cards approach
const SCALE_FALLOFF = 1.2; // how sharply size drops off with depth

/* The row only recedes one way, so a card that reaches the centre and passes it
   has nowhere left to stack: it slips off to the left and fades out over EXIT
   cards. ENTER is that fade run backwards — how a card arrives at the far end
   of the row, which is also where the list closes on itself, so the loop's one
   unavoidable jump lands on something already invisible. */
const EXIT = 0.9;
const ENTER = 0.9;

/* ---------------------------------------------------------------------------
   The card face — shared by the scroll-driven deck and the mobile list so both
   render exactly the same visual.
--------------------------------------------------------------------------- */
export function DeckCardFace({ project, captionOpacity }) {
  return (
    <>
      <img className="deck_card_img" src={project.image} alt={project.title} />
      <div className="deck_card_scrim" />
      <motion.div className="deck_card_caption" style={captionOpacity ? { opacity: captionOpacity } : undefined}>
        <span className="deck_card_title">{project.title}</span>
        <span className="deck_card_types">{project.type?.join(' · ')}</span>
      </motion.div>
    </>
  );
}

/* ---------------------------------------------------------------------------
   One card in the stack. Everything is derived from `distance` — how far this
   card sits from the card currently at the centre — so the whole deck is one
   continuous function of scroll rather than a set of discrete steps.
--------------------------------------------------------------------------- */
function DeckCard({ project, index, position, cardSize, total }) {
  // 0 is the centre of the hero; positive is still to come, off to the right
  const distance = useTransform(position, (p) => wrapDistance(index - p, total));

  // every card stays sharp — depth comes from size and overlap, not blur
  const x = useTransform(distance, (d) => {
    const lead = Math.sign(d) * LEAD * (1 - Math.exp(-Math.abs(d) / LEAD_SOFT));
    return (lead + TRAIL * d) * cardSize.width;
  });
  const scale = useTransform(
    distance,
    (d) => MIN_SCALE + (1 - MIN_SCALE) / (1 + Math.abs(d) * SCALE_FALLOFF)
  );
  // the row stays solid from the centre rightwards; a card only goes once it
  // has been passed, or once it is far enough right to be where the loop closes
  const opacity = useTransform(distance, (d) =>
    clamp((d + EXIT) / EXIT, 0, 1) * clamp((total / 2 - d) / ENTER, 0, 1)
  );
  const zIndex = useTransform(distance, (d) => Math.round(100 - Math.abs(d) * 10));
  // only the card at the centre is clickable
  const pointerEvents = useTransform(distance, (d) => (Math.abs(d) < 0.5 ? 'auto' : 'none'));
  const captionOpacity = useTransform(distance, (d) => clamp(1 - Math.abs(d) * 2.4, 0, 1));
  const glow = useTransform(distance, (d) => {
    const strength = clamp(1 - Math.abs(d), 0, 1);
    const spread = cardSize.height / 445; // shadows scale with the card, like the row
    return `0 ${(14 + strength * 30) * spread}px ${(34 + strength * 56) * spread}px rgba(20, 20, 24, ${
      0.08 + strength * 0.14
    })`;
  });

  return (
    <motion.div
      className="deck_card"
      style={{ x, scale, opacity, zIndex, pointerEvents }}>
      <MotionLink
        to={project.path}
        state={{ projectId: project.id }}
        className="deck_card_link"
        style={{ boxShadow: glow }}
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}>
        <DeckCardFace project={project} captionOpacity={captionOpacity} />
      </MotionLink>
    </motion.div>
  );
}

/* One dot on the progress rail, swelling as its card reaches the centre. The
   dot itself is small enough to be hard to hit, so the button around it — a
   transparent pad the size of a fingertip — is what you actually click. */
function RailDot({ project, index, position, onSelect }) {
  const distance = useTransform(position, (p) => Math.abs(index - p));
  const scale = useTransform(distance, (d) => 1 + clamp(1 - d, 0, 1) * 0.35);
  const opacity = useTransform(distance, (d) => 0.22 + clamp(1 - d, 0, 1) * 0.78);

  return (
    <button
      type="button"
      className="deck_rail_hit"
      aria-label={`Show ${project.title}`}
      onClick={() => onSelect(index)}>
      <motion.span className="deck_rail_dot" style={{ scale, opacity }} />
    </button>
  );
}

/* ---------------------------------------------------------------------------
   The deck. `position` is a motion value that walks from 0 → projects.length-1
   as the hero section scrolls, driven by Hero.jsx.
--------------------------------------------------------------------------- */
function ProjectDeck({ projects, position, onSeek }) {
  // the card sizes off viewport units, so the travel of the row has to be
  // measured rather than hard-coded
  const stageRef = useRef(null);
  const [cardSize, setCardSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const observer = new ResizeObserver(([entry]) =>
      setCardSize({ width: entry.contentRect.width, height: entry.contentRect.height })
    );
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  // pointer parallax, applied to the whole stage so the cards keep their own tilt
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springs = { stiffness: 110, damping: 20, mass: 0.6 };
  const stageRotateY = useSpring(useTransform(pointerX, [-1, 1], [-6, 6]), springs);
  const stageRotateX = useSpring(useTransform(pointerY, [-1, 1], [4, -4]), springs);

  const handlePointerMove = (event) => {
    const box = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - box.left) / box.width) * 2 - 1);
    pointerY.set(((event.clientY - box.top) / box.height) * 2 - 1);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  /* Clicking a dot takes the short way round: the card two above the centre is
     two steps back, never four steps forward through the rest of the list. The
     card we count from is the one the viewer can actually see at the centre,
     which is where the deck has settled to rather than where a half-finished
     flick was heading. */
  const handleSelect = (index) => {
    const front = Math.round(position.get());
    onSeek(front + wrapDistance(index - front, projects.length));
  };

  return (
    <div className="deck" onMouseMove={handlePointerMove} onMouseLeave={handlePointerLeave}>
      <motion.div
        ref={stageRef}
        className="deck_stage"
        style={{ rotateY: stageRotateY, rotateX: stageRotateX }}>
        {projects.map((project, index) => (
          <DeckCard
            key={project.id}
            project={project}
            index={index}
            position={position}
            cardSize={cardSize}
            total={projects.length}
          />
        ))}
      </motion.div>

      <div className="deck_rail">
        {projects.map((project, index) => (
          <RailDot
            key={project.id}
            project={project}
            index={index}
            position={position}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectDeck;
