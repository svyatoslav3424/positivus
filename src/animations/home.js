import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { POSITION, initScrollTrigger } from "./global";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

let split = SplitText.create(".hero-title", { type: "chars" });
gsap.from(split.chars, {
  y: 20,
  autoAlpha: 0,
  stagger: 0.03,
  duration: 0.8,
});

gsap.fromTo(".logo", POSITION.FROM.LEFT, {
  ...initScrollTrigger(".logo"),
  ...POSITION.TO.MIDDLE,
});

gsap.fromTo(".burger-menu", POSITION.FROM.TOP, {
  ...initScrollTrigger(".burger-menu"),
  ...POSITION.TO.MIDDLE,
});

gsap.fromTo(".hero-text", POSITION.FROM.BOTTOM, POSITION.TO.MIDDLE);

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

gsap.fromTo(".quote-btn", POSITION.FROM.RIGHT, {
  ...initScrollTrigger(".quote-btn"),
  ...POSITION.TO.MIDDLE,
});

gsap.fromTo(".swiper-1", POSITION.FROM.TOP, {
  ...initScrollTrigger(".swiper-1"),
  ...POSITION.TO.MIDDLE,
});

gsap.fromTo(".nav-list", POSITION.FROM.TOP, POSITION.TO.MIDDLE);

gsap.utils.toArray(".profile-card").forEach((item, index) => {
  gsap.fromTo(item, POSITION.FROM.LEFT, {
    ...initScrollTrigger(item),
    ...POSITION.TO.MIDDLE,
    delay: 0.2 + index * 0.2,
  });
});

gsap.utils.toArray(".email-wrapper").forEach((item, index) => {
  gsap.fromTo(item, POSITION.FROM.RIGHT, {
    ...initScrollTrigger(item),
    ...POSITION.TO.MIDDLE,
    delay: 0.2 + index * 0.2,
  });
});

gsap.utils.toArray(".footer-info").forEach((item, index) => {
  gsap.fromTo(item, POSITION.FROM.RIGHT, {
    ...initScrollTrigger(item),
    ...POSITION.TO.MIDDLE,
    delay: 0.2 + index * 0.2,
  });
});

gsap.utils.toArray(".form-wrapper").forEach((item, index) => {
  gsap.fromTo(item, POSITION.FROM.HIDDEN, {
    ...initScrollTrigger(item),
    ...POSITION.TO.VISIBLE,
    delay: 0.2 + index * 0.2,
  });
});

gsap.utils.toArray(".radio-group").forEach((item, index) => {
  gsap.fromTo(item, POSITION.FROM.LEFT, {
    ...initScrollTrigger(item),
    ...POSITION.TO.MIDDLE,
    delay: 0.2 + index * 0.2,
  });
});

gsap.utils.toArray(".input-item").forEach((item, index) => {
  gsap.fromTo(item, POSITION.FROM.RIGHT, {
    ...initScrollTrigger(item),
    ...POSITION.TO.MIDDLE,
    delay: 0.2 + index * 0.2,
  });
});

gsap.utils.toArray(".message").forEach((item, index) => {
  gsap.fromTo(item, POSITION.FROM.RIGHT, {
    ...initScrollTrigger(item),
    ...POSITION.TO.MIDDLE,
    delay: 0.2 + index * 0.2,
  });
});

gsap.utils.toArray(".input-group-label").forEach((item, index) => {
  gsap.fromTo(item, POSITION.FROM.LEFT, {
    ...initScrollTrigger(item),
    ...POSITION.TO.MIDDLE,
    delay: 0.2 + index * 0.2,
  });
});

gsap.utils.toArray(".service-card").forEach((card) => {
  const isLeft = card.classList.contains("framer-left");

  gsap.fromTo(card, isLeft ? POSITION.FROM.LEFT : POSITION.FROM.RIGHT, {
    ...initScrollTrigger(card),
    ...POSITION.TO.MIDDLE,
  });
});

gsap.utils.toArray(".badge").forEach((badge) => {
  gsap.fromTo(badge, POSITION.FROM.LEFT, {
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

gsap.fromTo(".cta-content", POSITION.FROM.BOTTOM, {
  ...initScrollTrigger(".cta-content"),
  ...POSITION.TO.MIDDLE,
});

gsap.fromTo(".cta-button", POSITION.FROM.LEFT, {
  ...initScrollTrigger(".cta-button"),
  ...POSITION.TO.MIDDLE,
});

gsap.utils.toArray(".case-study").forEach((card) => {
  const isLeft = card.classList.contains("framer-left");

  gsap.fromTo(
    card,
    {
      ...(isLeft ? POSITION.FROM.LEFT : POSITION.FROM.RIGHT),
      ...POSITION.FROM.BOTTOM,
    },
    {
      ...initScrollTrigger(card),
      ...POSITION.TO.MIDDLE,
    }
  );
});

gsap.fromTo(".learn-more", POSITION.FROM.BOTTOM, {
  ...initScrollTrigger(".learn-more"),
  ...POSITION.TO.MIDDLE,
});

gsap.utils.toArray(".accordion-item").forEach((item) => {
  const isLeft = item.classList.contains("framer-left");

  gsap.fromTo(item, isLeft ? POSITION.FROM.LEFT : POSITION.FROM.RIGHT, {
    ...initScrollTrigger(item),
    ...POSITION.TO.MIDDLE,
  });
});

gsap.fromTo(".profile-btn", POSITION.FROM.BOTTOM, {
  ...initScrollTrigger(".profile-btn"),
  ...POSITION.TO.MIDDLE,
});

gsap.fromTo(".swiper-2", POSITION.FROM.BOTTOM, {
  ...initScrollTrigger(".swiper-2"),
  ...POSITION.TO.MIDDLE,
});

gsap.fromTo(".form-content", POSITION.FROM.BOTTOM, {
  ...initScrollTrigger(".form-content"),
  ...POSITION.TO.MIDDLE,
});

gsap.fromTo(".btn", POSITION.FROM.BOTTOM, {
  ...initScrollTrigger(".btn"),
  ...POSITION.TO.MIDDLE,
});

gsap.fromTo(".footer-wrapper", POSITION.FROM.BOTTOM, {
  ...initScrollTrigger(".footer-wrapper"),
  ...POSITION.TO.MIDDLE,
});

gsap.fromTo(".hero-image-illustration", POSITION.FROM.BOTTOM, {
  ...initScrollTrigger(".hero-image-illustration"),
  ...POSITION.TO.MIDDLE,
});
