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

gsap.fromTo(".image-section", POSITION.FROM.LEFT, {
  ...initScrollTrigger(".image-section"),
  ...POSITION.TO.MIDDLE,
});

gsap.fromTo(".content-section", POSITION.FROM.RIGHT, {
  ...initScrollTrigger(".content-section"),
  ...POSITION.TO.MIDDLE,
});

gsap.fromTo(".author-section", POSITION.FROM.BOTTOM, {
  ...initScrollTrigger(".author-section"),
  ...POSITION.TO.MIDDLE,
});

gsap.fromTo(".text-item", POSITION.FROM.TOP, {
  ...initScrollTrigger(".text-item"),
  ...POSITION.TO.MIDDLE,
});

gsap.utils.toArray(".fact-title").forEach((item, index) => {
  gsap.fromTo(item, POSITION.FROM.LEFT, {
    ...initScrollTrigger(item),
    ...POSITION.TO.MIDDLE,
    delay: 0.2 + index * 0.2,
  });
});

gsap.utils.toArray(".text-wrapper").forEach((item, index) => {
  gsap.fromTo(item, POSITION.FROM.LEFT, {
    ...initScrollTrigger(item),
    ...POSITION.TO.MIDDLE,
    delay: 0.2 + index * 0.2,
  });
});

gsap.utils.toArray(".card").forEach((item, index) => {
  gsap.fromTo(item, POSITION.FROM.LEFT, {
    ...initScrollTrigger(item),
    ...POSITION.TO.MIDDLE,
    delay: 0.2 + index * 0.2,
  });
});

gsap.fromTo(".quote-text", POSITION.FROM.LEFT, {
  ...initScrollTrigger(".quote-text"),
  ...POSITION.TO.MIDDLE,
});

gsap.fromTo(".text", POSITION.FROM.RIGHT, {
  ...initScrollTrigger(".text"),
  ...POSITION.TO.MIDDLE,
});

gsap.utils.toArray(".card").forEach((item, index) => {
  gsap.fromTo(item, POSITION.FROM.LEFT, {
    ...initScrollTrigger(item),
    ...POSITION.TO.MIDDLE,
    delay: 0.2 + index * 0.2,
  });
});
