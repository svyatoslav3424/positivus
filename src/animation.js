import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

gsap.set("h1", { opacity: 1 });

const initScrollTrigger = (trigger) => {
  const scrollTrigger = {
    toggleActions: "play none none none",
    start: "top 90%",
    trigger,
  };

  return { scrollTrigger };
};

const POSITION = {
  FROM_LEFT: { x: -30, opacity: 0 },
  FROM_RIGHT: { x: 30, opacity: 0 },
  FROM_TOP: { y: -30, opacity: 0 },
  FROM_BOTTOM: { y: 30, opacity: 0 },
  TO: {
    MIDDLE: {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1.6,
      ease: "power2.out",
    },
  },
};

let split = SplitText.create(".hero-title", { type: "chars" });
gsap.from(split.chars, {
  y: 20,
  autoAlpha: 0,
  stagger: 0.03,
  duration: 0.8,
});

gsap.fromTo(".logo-icon", POSITION.FROM_LEFT, POSITION.TO.MIDDLE);

gsap.utils.toArray(".badge").forEach((badge) => {
  gsap.fromTo(
    badge,
    {
      x: -30,
      opacity: 0,
    },
    {
      ...initScrollTrigger(badge),
      x: 0,
      opacity: 1,
      duration: 1.6,
      ease: "power2.out",
    }
  );
});

gsap.utils.toArray(".badge-label").forEach((badge) => {
  gsap.fromTo(badge, POSITION.FROM_RIGHT, {
    ...initScrollTrigger(badge),
    ...POSITION.TO.MIDDLE,
  });
});

gsap.fromTo(".burger-menu", POSITION.FROM_TOP, POSITION.TO.MIDDLE);

gsap.fromTo(
  ".hero-text",
  { y: 20, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1.6,
    ease: "power2.out",
  }
);

gsap.to(".hero-btn", {
  opacity: 1,
  y: 0,
  keyframes: {
    scale: [0.5, 1.06, 1],
    times: [0, 0.4, 1],
    ease: "power2.out",
  },
  duration: 2,
  ease: "power2.out",
});

gsap.fromTo(
  ".hero-image-illustration",
  { x: 30, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 1.6,
    ease: "power2.out",
  }
);

gsap.utils.toArray(".service-card").forEach((card) => {
  const isLeft = card.classList.contains("framer-left");

  gsap.fromTo(
    card,
    {
      x: isLeft ? -30 : 30,
      opacity: 0,
    },
    {
      ...initScrollTrigger(card),
      x: 0,
      opacity: 1,
      duration: 1.6,
      ease: "power2.out",
    }
  );
});

// gsap.fromTo(
//   ".service-card-icon-wrapper", // your button class
//   {
//     opacity: 0,
//     y: 30, // start lower
//     scale: 0.7, // slightly smaller
//   },
//   {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     duration: 1,
//     ease: "power2.out", // or "elastic.out(1, 0.5)"
//   }
// );

gsap.fromTo(
  ".cta-content",
  { y: 30, opacity: 0 },
  {
    ...initScrollTrigger(".cta-content"),
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power2.out",
  }
);

gsap.fromTo(
  ".cta-button",
  {
    opacity: 0,
    x: -30,
    scale: 0.7,
  },
  {
    ...initScrollTrigger(".cta-button"),
    opacity: 1,
    x: 0,
    scale: 1,
    duration: 1,
    ease: "power2.out",
  }
);

gsap.utils.toArray(".case-study").forEach((card) => {
  const isLeft = card.classList.contains("framer-left");

  gsap.fromTo(
    card,
    {
      x: isLeft ? -30 : 30,
      y: 30,
      opacity: 0,
    },
    {
      ...initScrollTrigger(card),
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1.6,
      ease: "power2.out",
    }
  );
});

gsap.fromTo(
  ".learn-more", // your button class
  {
    opacity: 0,
    y: 30, // start lower
    scale: 0.7, // slightly smaller
  },
  {
    ...initScrollTrigger(".learn-more"),

    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1,
    ease: "power2.out", // or "elastic.out(1, 0.5)"
  }
);

gsap.utils.toArray(".accordion-item").forEach((item) => {
  const isLeft = item.classList.contains("framer-left");

  gsap.fromTo(
    item,
    {
      x: isLeft ? -30 : 30,
      opacity: 0,
    },
    {
      ...initScrollTrigger(item),
      x: 0,
      opacity: 1,
      duration: 1.6,
      ease: "power2.out",
    }
  );
});

gsap.fromTo(
  ".profile-card", // your button class
  {
    opacity: 0,
    y: 30, // start lower
    scale: 0.7, // slightly smaller
  },
  {
    ...initScrollTrigger(".profile-card"),

    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1,
    ease: "power2.out", // or "elastic.out(1, 0.5)"
  }
);

gsap.fromTo(
  ".profile-btn", // your button class
  {
    opacity: 0,
    y: 30, // start lower
    scale: 0.7, // slightly smaller
  },
  {
    ...initScrollTrigger(".profile-btn"),
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1,
    ease: "power2.out", // or "elastic.out(1, 0.5)"
  }
);

gsap.fromTo(
  ".swiper-2",
  { y: 30, opacity: 0 },
  {
    ...initScrollTrigger(".swiper-2"),

    y: 0,
    opacity: 1,
    duration: 1.6,
    ease: "power2.out",
  }
);

gsap.fromTo(
  ".form-content",
  { y: 30, opacity: 0 },
  {
    ...initScrollTrigger(".form-content"),

    y: 0,
    opacity: 1,
    duration: 1.6,
    ease: "power2.out",
  }
);

gsap.fromTo(
  ".btn",
  { y: 30, opacity: 0 },
  {
    ...initScrollTrigger(".btn"),

    y: 0,
    opacity: 1,
    duration: 1.6,
    ease: "power2.out",
  }
);

gsap.fromTo(
  ".footer-wrapper",
  { y: 30, opacity: 0 },
  {
    ...initScrollTrigger(".footer-wrapper"),

    y: 0,
    opacity: 1,
    duration: 1.6,
    ease: "power2.out",
  }
);
