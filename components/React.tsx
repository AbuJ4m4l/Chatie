import { moderniz } from "@/config/fonts";
import { motion } from "framer-motion";

export default function React() {
  const text = "React";
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.04 * i,
        delay: 2, // Add a 2-second delay to the container transition
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <div className="mt-2">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-container"
      >
        {letters.map((letter, index) => (
          <motion.span
            className={`${moderniz.className} bg-clip-text text-transparent bg-gradient-to-br from-primary to-[#00b7ff] text-2xl md:text-3xl`}
            key={index}
            variants={child}
          >
            {letter === " " ? "\u00A0" : letter}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
