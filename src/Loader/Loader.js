import { motion } from "framer-motion";
import { StyledLoader } from "./Loader.styled";

export const Loader = () => {
  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const loadingCircleVariants = {
    start: {
      y: "50%",
    },
    end: {
      y: "150%",
    },
  };

  const loadingCircleTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut",
  };
  return (
    <StyledLoader>
      <motion.div
        className="loadingContainer"
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <motion.span
          className="loadingCircle"
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          className="loadingCircle"
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          className="loadingCircle"
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </motion.div>
    </StyledLoader>
  );
};
