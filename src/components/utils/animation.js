export const bounceUp = (delay = 0) => ({
    variants: {
      hidden: { y: 100, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    },
    initial: "hidden",
    whileInView: "visible",
    transition: {
      type: "spring",
      delay,
      stiffness: 20,  // controls speed (lower = slower)
      damping: 10,    // controls bounce (lower = more bounce)
      mass: 0.6       // optional: feels lighter
    },
  });

/* The way things arrive everywhere on this site: up from below, out of a blur,
   on a soft spring. These are the home page hero's numbers — the cards use it
   so a grid arriving reads as the same gesture as the name and the links.
   Nothing changes size, which is what made the old grid animation feel cheap. */
export const arriveIn = (delay = 0) => ({
    variants: {
      hidden: { y: 40, opacity: 0, filter: "blur(10px)" },
      visible: { y: 0, opacity: 1, filter: "blur(0px)" },
    },
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.25 },
    transition: {
      type: "spring",
      delay,
      stiffness: 60,
      damping: 14,
      mass: 0.8
    },
  });

export const riseIn = (delay = 0) => ({
    variants: {
      hidden: { y: 80, opacity: 0, scale: 0.92, filter: "blur(8px)" },
      visible: { y: 0, opacity: 1, scale: 1, filter: "blur(0px)" },
    },
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.2 }, // fires when 20% of the card is on screen
    transition: {
      type: "spring",
      delay,
      stiffness: 32,  // lower = slower glide into place
      damping: 15,
      mass: 0.9
    },
  });

  const menuVariants = {
    hidden: {
      opacity: 0,
      x: '100%', // starts off-screen to the right
    },
    visible: {
      opacity: 1,
      x: 0, // slides in
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.3 }
    }
  };
  