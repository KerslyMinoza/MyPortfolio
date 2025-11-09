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
  