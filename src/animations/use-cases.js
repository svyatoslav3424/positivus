import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { POSITION, initScrollTrigger } from "./global";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

gsap.fromTo(".logo-icon", POSITION.FROM.LEFT, {
  ...initScrollTrigger(".logo-icon"),
  ...POSITION.TO.MIDDLE,
});

gsap.fromTo(".burger-menu", POSITION.FROM.TOP, {
  ...initScrollTrigger(".burger-menu"),
  ...POSITION.TO.MIDDLE,
});

gsap.fromTo(
  ".hero-title",
  { ...POSITION.FROM.RIGHT, ...POSITION.FROM.TOP },
  POSITION.TO.MIDDLE
);

gsap.fromTo(
  ".hero-text",
  { ...POSITION.FROM.RIGHT, ...POSITION.FROM.BOTTOM },
  POSITION.TO.MIDDLE
);

gsap.fromTo(".quote-btn", POSITION.FROM.RIGHT, {
  ...initScrollTrigger(".quote-btn"),
  ...POSITION.TO.MIDDLE,
});

gsap.fromTo(".nav-list", POSITION.FROM.TOP, {
  ...initScrollTrigger(".nav-list"),
  ...POSITION.TO.MIDDLE,
});

gsap.fromTo(
  ".hero-image-illustration",
  {
    scale: 0.7,
    x: -20,
    y: -20,
  },
  { scale: 1, duration: 1.2, x: 0, y: 0 }
);

gsap.fromTo(
  ".hero-background",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 1.6,
  }
);

gsap.fromTo(
  ".story-card",
  { scale: 0.5, opacity: 0.8 },
  {
    ...initScrollTrigger(".story-card"),
    scale: 1,
    opacity: 1,
    duration: 0.7,
    ease: "power2.out",
  }
);

gsap.fromTo(
  ".story-card-left",
  { opacity: 0 },
  {
    ...initScrollTrigger(".story-card-left"),
    opacity: 1,
    delay: 0.6,
  }
);

// gsap.utils.toArray(".story-card-description").forEach((item) => {
// const isLeft = item.classList.contains("framer-right");

//   gsap.fromTo(item, isLeft ? POSITION.FROM.RIGHT : POSITION.FROM.BOTTOM, {
//     ...initScrollTrigger(item),
//     ...POSITION.TO.MIDDLE,
//   });
// });

gsap.utils.toArray(".badge").forEach((badge) => {
  gsap.fromTo(badge, POSITION.FROM.LEFT, {
    ...initScrollTrigger(badge),
    ...POSITION.TO.MIDDLE,
  });
});

gsap.utils.toArray(".badge").forEach((badge) => {
  gsap.fromTo(badge, POSITION.FROM.TOP, {
    ...initScrollTrigger(badge),
    ...POSITION.TO.MIDDLE,
  });
});

gsap.utils.toArray(".badge-label").forEach((badge) => {
  gsap.fromTo(badge, POSITION.FROM.RIGHT, {
    ...initScrollTrigger(badge),
    ...POSITION.TO.MIDDLE,
  });
});

gsap.fromTo(".story-card-title", POSITION.FROM.LEFT, {
  ...POSITION.TO.MIDDLE,
  ...initScrollTrigger(".story-card-title"),
});

gsap.fromTo(".story-card-description", POSITION.FROM.RIGHT, {
  ...POSITION.TO.MIDDLE,
  ...initScrollTrigger(".story-card-description"),
});

gsap.fromTo(".grid-container", POSITION.FROM.HIDDEN, {
  ...initScrollTrigger(".grid-container"),
  ...POSITION.TO.VISIBLE,
});

gsap.utils.toArray(".card").forEach((item, index) => {
  gsap.fromTo(item, POSITION.FROM.LEFT, {
    ...initScrollTrigger(".card"),
    ...POSITION.TO.MIDDLE,
    delay: 0.2 + index * 0.2,
  });
});

gsap.utils.toArray(".stat").forEach((item, index) => {
  gsap.fromTo(item, POSITION.FROM.LEFT, {
    ...initScrollTrigger(item),
    ...POSITION.TO.MIDDLE,
    delay: 0.6 + index * 0.2,
  });
});

gsap.fromTo(".story-card-link", POSITION.FROM.BOTTOM, {
  ...initScrollTrigger(".story-card-link"),
  ...POSITION.TO.MIDDLE,
});

gsap.fromTo(".swiper-2", POSITION.FROM.RIGHT, {
  ...initScrollTrigger(".swiper-2"),
  ...POSITION.TO.MIDDLE,
});

gsap.fromTo(".cta-title", POSITION.FROM.LEFT, {
  ...initScrollTrigger(".cta-title"),
  ...POSITION.TO.MIDDLE,
});

gsap.fromTo(".cta-icon", POSITION.FROM.RIGHT, {
  ...initScrollTrigger(".cta-icon"),
  ...POSITION.TO.MIDDLE,
});

gsap.fromTo(".footer-wrapper", POSITION.FROM.TOP, {
  ...initScrollTrigger(".footer-wrapper"),
  ...POSITION.TO.MIDDLE,
});

gsap.fromTo(".footer-list", POSITION.FROM.RIGHT, {
  ...initScrollTrigger(".footer-list"),
  ...POSITION.TO.MIDDLE,
});
