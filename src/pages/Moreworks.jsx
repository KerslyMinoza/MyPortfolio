import './about.css';
import { motion } from 'framer-motion';
import SiteNav from '../components/layout/SiteNav/SiteNav.jsx';
import SiteFooter from '../components/layout/SiteFooter/SiteFooter.jsx';
import AboutmeGif from '../assets/images/aboutme/aboutme.gif';

/* The moodboard lives in public/, so it is served straight off the root. The
   filenames carry a space, which has to be encoded to survive being a URL.
   There is no image 25 — the run is 24, then 26 to 42. */
const PIN_FILES = [24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42];

/* Where each pin lands on the twelve-column scatter: the column it starts at,
   how many it spans, how far down the page it drops in multiples of --pin-step,
   and how far it is knocked off square. Columns deliberately overlap — that is
   what makes it a collage rather than a grid, and DOM order decides which pin
   sits on top of which. */
const PIN_LAYOUT = [
  { col: 2, span: 3, drop: 0, tilt: -2.5 },
  { col: 6, span: 3, drop: 0.7, tilt: 1.8 },
  { col: 9, span: 3, drop: 0, tilt: -1.2 },
  { col: 1, span: 3, drop: 2.6, tilt: 2.2 },
  { col: 4, span: 3, drop: 3.4, tilt: -1.5 },
  { col: 7, span: 2, drop: 2.9, tilt: 1.4 },
  { col: 9, span: 3, drop: 2.2, tilt: -2 },
  { col: 1, span: 3, drop: 5.2, tilt: -1 },
  { col: 3, span: 4, drop: 5.9, tilt: 1.6 },
  { col: 7, span: 2, drop: 5.4, tilt: -1.8 },
  { col: 9, span: 3, drop: 6.1, tilt: 1.2 },
  { col: 2, span: 3, drop: 8.3, tilt: 1.5 },
  { col: 5, span: 3, drop: 7.9, tilt: -1.3 },
  { col: 8, span: 3, drop: 8.6, tilt: 2 },
  { col: 1, span: 2, drop: 10.6, tilt: -2.2 },
  { col: 4, span: 3, drop: 11, tilt: 1 },
  { col: 7, span: 3, drop: 10.4, tilt: -1.6 },
  { col: 10, span: 2, drop: 11.2, tilt: 1.8 },
];

const PINS = PIN_FILES.map((file, index) => ({
  src: `/images/moodboard/image%20${file}.png`,
  ...PIN_LAYOUT[index],
}));

/* Held as a value rather than written inline, so JSX cannot mistake the query
   string's ampersand for the start of an HTML entity */
const SPOTIFY_EMBED =
  'https://open.spotify.com/embed/artist/5xSOIue8FHKMFSw4E05zMM?utm_source=generator&si=75d90021a21c4901';

const arrive = {
  hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
  visible: { y: 0, opacity: 1, filter: 'blur(0px)' },
};

const arriveTransition = { type: 'spring', stiffness: 60, damping: 14, mass: 0.8 };

const inView = {
  variants: arrive,
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.3 },
  transition: arriveTransition,
};

/* ---------------------------------------------------------------------------
   One photo on the board. The tilt is carried in the variants rather than in
   CSS, because framer writes the transform inline and a CSS rotate would be
   overwritten the moment the pin animates.
--------------------------------------------------------------------------- */
function MoodPin({ pin, index }) {
  return (
    <motion.img
      className="moodboard_pin"
      src={pin.src}
      alt=""
      loading="lazy"
      style={{ '--col': pin.col, '--span': pin.span, '--drop': pin.drop }}
      variants={{
        hidden: { ...arrive.hidden, rotate: pin.tilt },
        visible: { ...arrive.visible, rotate: pin.tilt },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      /* straightens and lifts clear of its neighbours, the way you would pull
         one photo off a pinboard to look at it */
      whileHover={{ rotate: 0, scale: 1.04, zIndex: 20 }}
      transition={{ ...arriveTransition, delay: (index % 4) * 0.08 }}
    />
  );
}

function Moreworks() {
  return (
    <>
      <SiteNav />

      <div className="about">
        <section className="about_section">
          <div className="about_intro">
            <div>
              <motion.h1 className="about_heading" {...inView}>
                Kamusta!
              </motion.h1>

              <motion.p className="about_copy" {...inView}>
                Hi, I&rsquo;m Kersly, but everyone calls me Kers. And yes&hellip;
                let&rsquo;s skip the age part. 😄 I prefer staying young at heart
                while (hopefully) getting a little wiser every year. You might also
                know me as Kersly Potter, a nickname that&rsquo;s stuck ever
                since my Harry Potter fanboy days. These days, I&rsquo;m the type of
                person who can&rsquo;t stay in just one creative lane. Whether
                it&rsquo;s designing interfaces, building websites, making music,
                writing songs, creating visuals, or experimenting with something
                completely new, I&rsquo;m probably already trying it. I guess
                &ldquo;jack of all trades&rdquo; is the closest description, and
                honestly, I enjoy it that way.
              </motion.p>

              <motion.p className="about_copy" {...inView}>
                I live in Cebu, Philippines, where beautiful white-sand beaches are
                never too far away. Whenever life gets a little too loud, the beach
                is where I hit the reset button. I love traveling too, mostly
                around Southeast Asia because, let&rsquo;s be honest, it&rsquo;s a
                lot friendlier on the wallet. 😄 Exploring new places, meeting
                different people, finding cozy caf&eacute;s, and collecting little
                moments inspire both my work and my life. I believe the best ideas
                often come when you step away from your desk and experience the
                world around you.
              </motion.p>
            </div>

            <motion.div className="about_polaroid" {...inView}>
              <img src={AboutmeGif} alt="Kersly Miñoza" />
            </motion.div>
          </div>
        </section>

        <section className="about_section">
          {/* kept on two lines: at the heading's full size the whole phrase runs
              about 1440px, which is wider than the 1240px column */}
          <motion.h2 className="about_heading" {...inView}>
            Judge Me thru
            <br />a moodboard
          </motion.h2>

          <div className="moodboard">
            {PINS.map((pin, index) => (
              <MoodPin key={pin.src} pin={pin} index={index} />
            ))}
          </div>
        </section>

        <section className="about_section">
          <motion.h2 className="about_heading" {...inView}>
            Music &amp; Arts
          </motion.h2>

          <motion.p className="about_copy" {...inView}>
            Lately, I&rsquo;ve been spending a lot of my free time writing songs and
            releasing them on Spotify. I&rsquo;m definitely not a famous
            artist, and that&rsquo;s perfectly okay with me. I simply love
            creating music and sharing it with the few people who genuinely connect
            with it. If even one person finds comfort, nostalgia, or meaning in a
            song I&rsquo;ve written, that&rsquo;s already enough for me. So far,
            I&rsquo;ve released two full-length albums and one EP, and I don&rsquo;t
            see myself slowing down anytime soon.
          </motion.p>

          <motion.div className="about_embed" {...inView}>
            <iframe
              title="Kersly Miñoza on Spotify"
              src={SPOTIFY_EMBED}
              width="100%"
              height="352"
              style={{ borderRadius: 12 }}
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </motion.div>

          <motion.p className="about_copy" {...inView}>
            Another creative outlet I&rsquo;ve recently fallen in love with is
            painting. Lately, I&rsquo;ve been deeply inspired by Indian
            culture: its vibrant colors, rich traditions, intricate patterns,
            and timeless architecture. Most of my paintings revolve around these
            themes, allowing me to explore a culture I genuinely admire while
            expressing my creativity on canvas. I&rsquo;m still learning with every
            brushstroke, but that&rsquo;s part of the fun. For me, creating art
            isn&rsquo;t about perfection. It&rsquo;s about appreciating beauty
            and telling stories through color.
          </motion.p>

          {/* the lift on hover is framer's rather than CSS's: framer writes the
              transform inline while animating in, and a CSS one would lose */}
          <motion.a
            className="about_link"
            href="https://kerslypotter.art"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            {...inView}>
            kerslypotter.art
          </motion.a>
        </section>
      </div>

      {/* outside .about deliberately — the footer runs the full width, and
          inside that container it would be held to the page's 1240px measure */}
      <SiteFooter />
    </>
  );
}

export default Moreworks;
