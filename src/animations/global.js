import gsap from "gsap";

export const POSITION = {
  FROM: {
    LEFT: { x: -30, opacity: 0 },
    RIGHT: { x: 30, opacity: 0 },
    TOP: { y: -30, opacity: 0 },
    BOTTOM: { y: 30, opacity: 0 },
    HIDDEN: { opacity: 0 },
  },
  TO: {
    MIDDLE: {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1.6,
      ease: "power2.out",
    },
    VISIBLE: {
      opacity: 1,
      duration: 3,
      ease: "power2.out",
    },
  },
};

export const initScrollTrigger = (trigger) => {
  const scrollTrigger = {
    toggleActions: "play none none none",
    start: "top 90%",
    trigger,
  };

  return { scrollTrigger };
};

