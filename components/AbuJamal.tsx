import { moderniz } from "@/config/fonts";
import { motion } from "framer-motion";

export default function AbuJamal() {
  const text = "AbuJamal";
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
      animation: "glowAbuJamal 2s ease-in-out infinite",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const glowStyles = `
    @keyframes glowAbuJamal {
      0% {
        text-shadow:  0 0 70px #5e219b, 0 0 80px #5e219b, 0 0 100px #0004ff, 0 0 150px #0004ff;
      }
      50% {
        text-shadow: 0 0 35px #5e219b, 0 0 40px #5e219b, 0 0 50px #0004ff, 0 0 75px #0004ff;
      }
      100% {
        text-shadow:  0 0 70px #5e219b, 0 0 80px #5e219b, 0 0 100px #0004ff, 0 0 150px #0004ff;
      }
    }
  `;

  return (
    <div className="mt-2">
      <style>{glowStyles}</style>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-container"
      >
        {letters.map((letter, index) => (
          <motion.span
            className={`${moderniz.className} bg-clip-text text-transparent bg-gradient-to-br from-[#ee08e244] to-[#9900ff] text-2xl md:text-3xl`}
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
