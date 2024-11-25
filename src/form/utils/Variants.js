export const landingVariantOne = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.9, 1],
    opacity: 1,
  },
  transition: { duration: 3, ease: "easeInOut", delay: 6.5 },
};

export const slideUpVariant = {
  hidden: { y: 20000, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  transition: {
    duration: 3,
    delay: 2.5,
    ease: "easeInOut",
    type: "spring",
    stiffness: 50,
  },
};

export const rightSlideVariant = {
  hidden: { x: -25000, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  transition: {
    duration: 10,
    delay: 6,
    ease: "easeInOut",
    type: "spring",
    stiffness: 700,
  },
};

export const leftSlideVariant = {
  hidden: { x: 25000, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  transition: {
    duration: 10,
    delay: 5,
    ease: "ease",
  },
};

export const slideDownVariant = {
  hidden: { y: -20000, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  transition: {
    duration: 15,
    delay: 10,
    ease: "easeInOut",
    type: "spring",
    stiffness: 50,
  },
};
