import './aboutme.css'; // still carries .masonry, which the testimonials use
import './career.css';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import SiteNav from '../components/layout/SiteNav/SiteNav.jsx';
import Testimonials from '../components/features/Testimonials/Testimonials.jsx';
import { CLIENTS } from '../data/clients.js';
import FigmaMark from '../assets/images/tools/figma.svg';
import ClaudeMark from '../assets/images/tools/claude.svg';
import ReactMark from '../assets/react.svg';
import IllustratorMark from '../assets/images/tools/illustrator.svg';
import PhotoshopMark from '../assets/images/tools/photoshop.svg';

/* Oldest first, so the rail fills the way the years run. The dates are written
   with en dashes rather than hyphens, which is what the rest of the site's
   display type uses.

   EVERY `note` BELOW IS PLACEHOLDER COPY — written to show the shape and
   length the line wants, not from anything you told me. Replace before this
   page goes anywhere near a reader. */
const EXPERIENCE = [
  {
    years: '2017–2018',
    role: 'Software Engineer at IdeaRobin',
    note: 'Built and maintained client web apps alongside a small in-house team.',
  },
  {
    years: '2018–2021',
    role: 'Graphic Designer/Illustrator at Goodhangups',
    note: 'Illustration, packaging and campaign artwork for a consumer brand.',
  },
  {
    years: '2021–2022',
    role: 'UI UX Designer at AXIS Martial Arts',
    note: 'Designed the booking and membership flows for a training studio.',
  },
  {
    years: '2024–2025 (Part time)',
    role: 'UI/UX Designer at ORCAA',
    note: 'Part-time design support across marketing pages and product screens.',
  },
  {
    years: '2022–2026',
    role: 'UI/UX Designer at Nodies',
    note: 'Product and marketing design for an RPC infrastructure company.',
  },
  {
    years: '2026–Present',
    role: 'UI/UX Designer at /Send',
    note: 'Designing the product end to end, from research to shipped interface.',
  },
];

/* Dark plates so each mark can keep its own colour — which is how React and
   the two Adobe apps are presented anyway. Swap any `mark` for an official SVG
   and nothing else has to change. */
const TOOLS = [
  { name: 'Figma', mark: FigmaMark },
  { name: 'Claude', mark: ClaudeMark },
  { name: 'React', mark: ReactMark },
  { name: 'Adobe Illustrator', mark: IllustratorMark },
  { name: 'Adobe Photoshop', mark: PhotoshopMark },
];

const DOT_RESTING = 'rgba(20, 20, 24, 0.18)';
const DOT_REACHED = '#060606';

/* Everything on this page arrives the same way: up from below, out of a blur,
   as it comes into view. Reading down the page is the journey, so nothing
   announces itself before you have got to it. */
const rise = {
  hidden: { y: 44, opacity: 0, filter: 'blur(8px)' },
  visible: { y: 0, opacity: 1, filter: 'blur(0px)' },
};

const riseTransition = { type: 'spring', stiffness: 42, damping: 16, mass: 0.9 };

const inView = {
  variants: rise,
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.4 },
  transition: riseTransition,
};

/* ---------------------------------------------------------------------------
   One stop on the timeline. Its dot darkens as the rail reaches it, which is
   what ties the entries to the line running down past them.
--------------------------------------------------------------------------- */
function CareerStop({ entry, index, total, travelled }) {
  /* where this stop sits along the rail. The short run-up before it is what
     makes the dot darken as the line arrives rather than the instant it does */
  const at = total > 1 ? index / (total - 1) : 0;
  const background = useTransform(
    travelled,
    [at - 0.08, at],
    [DOT_RESTING, DOT_REACHED]
  );

  return (
    <motion.div className="career_stop" {...inView}>
      <motion.span className="career_dot" style={{ background }} />

      <div>
        <p className="career_years">{entry.years}</p>
        <p className="career_role">{entry.role}</p>
        {entry.note && <p className="career_note">{entry.note}</p>}
      </div>
    </motion.div>
  );
}

function Aboutme() {
  const timelineRef = useRef(null);

  /* The rail fills against the timeline's own progress through the viewport,
     measured from a line a little below centre — so it tracks the entry you
     are actually reading rather than the top edge of the screen. */
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 65%', 'end 65%'],
  });

  const travelled = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.5,
  });

  return (
    <>
      <SiteNav />

      <div className="career">
        {/* Education opens the page now, so it carries the h1 — a page with no
            top-level heading reads as headless to a screen reader */}
        <section className="career_section">
          <motion.div {...inView}>
            <h1 className="career_label">Education</h1>
            {/* the degree stays the bold part — the school sits in the lighter
                weight so it reads as context rather than competing with it */}
            <p className="career_line">
              Finished my <strong>Masters Degree in Information Technology</strong>{' '}
              at Cebu Institute of Technology - University, Philippines.
            </p>
          </motion.div>
        </section>

        <section className="career_section">
          <motion.h2 className="career_heading" {...inView}>
            Work Experiences
          </motion.h2>

          <div className="career_timeline" ref={timelineRef}>
            <div className="career_rail">
              <motion.div
                className="career_rail_fill"
                style={{ scaleY: travelled }}
              />
            </div>

            {EXPERIENCE.map((entry, index) => (
              <CareerStop
                key={`${entry.role}-${entry.years}`}
                entry={entry}
                index={index}
                total={EXPERIENCE.length}
                travelled={travelled}
              />
            ))}
          </div>
        </section>

        <section className="career_section">
          <motion.h2 className="career_heading" {...inView}>
            Tools &amp; Skills
          </motion.h2>

          <div className="career_tools">
            {TOOLS.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="career_tool"
                variants={rise}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ ...riseTransition, delay: index * 0.09 }}>
                <img className="career_tool_mark" src={tool.mark} alt={tool.name} />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="career_section">
          <motion.h2 className="career_heading" {...inView}>
            What They Say
          </motion.h2>

          {/* the cards animate themselves, one at a time — see Testimonials */}
          <div className="masonry">
            {CLIENTS.map((clients, index) => (
              <Testimonials key={clients.id ?? index} clients={clients} index={index} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Aboutme;
