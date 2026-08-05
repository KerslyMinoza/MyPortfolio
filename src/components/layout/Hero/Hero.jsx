import './hero.css';
import '../SiteNav/sitenav.css'; // the links themselves are shared with the top-of-page row
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SITE_LINKS } from '../../../data/siteLinks.js';
import useMediaQuery from '../../utils/useMediaQuery.js';

/* ---------------------------------------------------------------------------
   The scroll-driven project deck is parked, not deleted. Everything it needs
   is still in place — ProjectDeck.jsx, projectdeck.css, the wheel and touch
   wiring that used to live in this file, and the --deck-* custom properties in
   hero.css. Putting it back means restoring HeroStack and its scroll handlers
   from git history and rendering <ProjectDeck /> below the masthead again.

   import { useEffect, useRef } from 'react';
   import { useMotionValue, useSpring } from 'framer-motion';
   import { PROJECT } from '../../../data/projects.js';
   import ProjectDeck, { DeckCardFace } from '../../features/ProjectStack/ProjectDeck.jsx';
   import useStackMode from '../../utils/useStackMode.js';
--------------------------------------------------------------------------- */

/* the name breaks around the reel, so each half is its own word */
const NAME_WORDS = ['Kersly', 'Miñoza'];

/* The row under the masthead is the whole navigation on this page, minus Home:
   that link would only point back here. Everything else — the labels, the
   routes and the stretches of clip each one drives — lives in siteLinks.js,
   so this row and the one along the top of every other page cannot drift. */
const LINKS = SITE_LINKS.filter((link) => link.to !== '/');

const introItem = {
  hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
  visible: { y: 0, opacity: 1, filter: 'blur(0px)' },
};

const introTransition = { type: 'spring', stiffness: 60, damping: 14, mass: 0.8 };

/* the stretch that runs when nothing in the row is hovered — forwards, then
   back to the start, over and over */
const IDLE_FROM = 0;
const IDLE_UNTIL = 1.02;

function Hero() {
  const reelRef = useRef(null);

  /* The per-link stretches are a hover behaviour, and a touch screen has no
     hover — it fires the enter handler on tap instead, so the clip would jump
     as you go to follow a link. Where there is no pointer to hover with, the
     reel just runs its boomerang and is left alone. */
  const canHover = useMediaQuery('(hover: hover) and (pointer: fine)');

  /* the frame loop currently minding the clip. `timeupdate` would do the same
     watching but only fires every few hundred milliseconds, which is long
     enough to sail well past the end of a stretch */
  const watchRef = useRef(0);

  const play = (reel) => {
    const started = reel.play();
    // rejects if the browser declines to autoplay; nothing to recover from
    if (started) started.catch(() => {});
  };

  /* readyState 1 is metadata loaded, the point at which the clip has a
     duration to seek inside — before that a seek is thrown away */
  const takeReel = () => {
    const reel = reelRef.current;
    if (!reel || reel.readyState < 1) return null;
    cancelAnimationFrame(watchRef.current);
    return reel;
  };

  useEffect(() => () => cancelAnimationFrame(watchRef.current), []);

  /* Which link the clip is on, so the next one knows which way along the row
     it is being asked to travel. Cleared when the row is left, so arriving
     fresh always runs forwards whichever link you land on. */
  const fromIndexRef = useRef(null);

  /* Hovering a link runs the stretch belonging to the direction you crossed
     the row in: `out` going right, `back` going left. */
  const playSegment = (index) => {
    if (!canHover) return;

    const reel = takeReel();
    if (!reel) return;

    const link = LINKS[index];
    const backwards = fromIndexRef.current !== null && index < fromIndexRef.current;
    fromIndexRef.current = index;

    const { from, until } = backwards ? link.reel.back : link.reel.out;

    if (!backwards) {
      reel.currentTime = from;
      play(reel);

      const watch = () => {
        if (reel.currentTime >= until) {
          reel.pause();
          reel.currentTime = until; // trim the frame or two of overshoot
          return;
        }
        watchRef.current = requestAnimationFrame(watch);
      };
      watchRef.current = requestAnimationFrame(watch);
      return;
    }

    /* A back stretch runs from a later second to an earlier one, and there is
       nothing to play in that direction — video has no reverse gear — so it is
       scrubbed by hand. Against the wall clock rather than a fixed step per
       frame, so it takes as long as the same footage would take forwards. */
    reel.pause();
    reel.currentTime = from;

    let last = 0;

    const rewind = (now) => {
      if (!last) last = now;
      const next = reel.currentTime - (now - last) / 1000;
      last = now;

      if (next <= until) {
        reel.currentTime = until;
        return;
      }

      reel.currentTime = next;
      watchRef.current = requestAnimationFrame(rewind);
    };

    watchRef.current = requestAnimationFrame(rewind);
  };

  /* Off the row the clip belongs to nobody and runs as a boomerang, so the
     resting state of the page is always the same second of footage.

     Only the forward half can be played: video has no reverse gear, so the way
     back is scrubbed by hand, moving currentTime against the wall clock rather
     than a fixed step per frame — otherwise the rewind would run at whatever
     rate the display happened to refresh at. */
  const releaseReel = () => {
    const reel = takeReel();
    if (!reel) return;

    fromIndexRef.current = null;

    if (reel.currentTime < IDLE_FROM || reel.currentTime > IDLE_UNTIL) {
      reel.currentTime = IDLE_FROM;
    }

    let rewinding = false;
    let last = 0;

    const boomerang = (now) => {
      if (rewinding) {
        const elapsed = (now - last) / 1000;
        last = now;
        const next = reel.currentTime - elapsed;

        if (next <= IDLE_FROM) {
          reel.currentTime = IDLE_FROM;
          rewinding = false;
          play(reel);
        } else {
          reel.currentTime = next;
        }
      } else if (reel.currentTime >= IDLE_UNTIL) {
        reel.pause();
        reel.currentTime = IDLE_UNTIL;
        rewinding = true;
        last = now;
      }

      watchRef.current = requestAnimationFrame(boomerang);
    };

    play(reel);
    watchRef.current = requestAnimationFrame(boomerang);
  };

  return (
    <section className="hero_section">
      <motion.div
        className="hero_layout"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}>
        {/* the masthead shrinks to the width of the name, which is what gives
            the two taglines their left and right edges to hang off */}
        <div className="hero_masthead">
          <h1 className="hero_name">
            <motion.span
              className="hero_name_word"
              variants={introItem}
              transition={introTransition}>
              {NAME_WORDS[0]}
            </motion.span>

            {/* the oval is the mask and the clip sits inside it, so the two can
                be positioned against each other. The clip lives in public/, so
                it is served straight off the root — muted and inline are what
                let it play without being asked to */}
            <motion.span
              className="hero_reel"
              variants={introItem}
              transition={introTransition}>
              <video
                ref={reelRef}
                className="hero_reel_clip"
                src="/vid.mp4"
                autoPlay
                muted
                loop
                playsInline
                onLoadedMetadata={releaseReel}
              />
            </motion.span>

            <motion.span
              className="hero_name_word"
              variants={introItem}
              transition={introTransition}>
              {NAME_WORDS[1]}
            </motion.span>
          </h1>

          <motion.div
            className="hero_taglines"
            variants={introItem}
            transition={introTransition}>
            <p className="hero_tagline">UI/UX Designer for 8 years.</p>
            <p className="hero_tagline">I design, create prototype and vibe code.</p>
          </motion.div>
        </div>

        <motion.nav
          className="hero_links"
          onMouseLeave={releaseReel}
          variants={introItem}
          transition={introTransition}>
          {LINKS.map((link, index) => (
            <Link
              key={link.to}
              to={link.to}
              className="site_link"
              onMouseEnter={() => playSegment(index)}
              onFocus={() => playSegment(index)}
              onBlur={releaseReel}>
              {link.label}
            </Link>
          ))}
        </motion.nav>
      </motion.div>
    </section>
  );
}

export default Hero;
