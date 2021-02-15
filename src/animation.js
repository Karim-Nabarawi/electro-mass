export const pageAnimation = {
  hidden: {
    // Initial Animation to play when entering the page
    opacity: 0,
    y: 300,
  },
  show: {
    // End Animation to play after entering the page
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren", // Use to make children animation run after page animation finish
      staggerChildren: 0.25, // Use to make chidren animation run one after another
    },
  },
  exit: {
    // Animation to play when exiting the page
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const moveTop = {
  hidden: { y: "-125%", transition: { duration: 0.75, ease: "easeOut" } },
  show: { y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

export const moveRight = {
  hidden: { x: "100%", transition: { duration: 0.75, ease: "easeOut" } },
  show: { x: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.75, ease: "easeOut" } },
};

export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.75, ease: "easeOut" } },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: { width: "100%", transition: { duration: 1 } },
};

export const sliderAnim = {
  hidden: { x: "-130%", skew: "45deg" },
  show: { x: "100%", skew: "0deg", transition: { duration: 1, ease: "easeOut" } },
};

export const sliderContainerAnim = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, ease: "easeOut" } },
};

export const scrollRevelAnim = {
  hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const popup = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.75 },
  },
};

export const scaleAnim = {
  hidden: { scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  show: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } },
};

export const selectAnim = {
  hidden: { backgroundColor: "#ffffff", color: "#000000", boxShadow: "0px 5px 20px rgba(0,0,0,0)", scale: 1 },
  show: {
    backgroundColor: "#ec4c4c",
    color: "#ffffff",
    boxShadow: "0px 5px 20px rgba(0,0,0,0.2)",
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};
