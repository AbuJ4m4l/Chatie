import React from "react";
import { motion } from "framer-motion";

const HandLineAnimation = () => {
  const pathVariants = {
    initial: {
      pathLength: 0,
      opacity: 0,
    },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: false,
        repeatType: "reverse",
      },
    },
  };

  return (
    <div className="flex absolute -mt-16">
      <motion.svg
        width="300"
        height="300"
        viewBox="0 0 100 100"
        initial="initial"
        animate="animate"
      >
        <motion.path
          d="M10,50 Q10,30 80,50"
          stroke="#0066ff"
          strokeWidth="4"
          fill="none"
          variants={pathVariants}
        />
      </motion.svg>
    </div>
  );
};

export default HandLineAnimation;
