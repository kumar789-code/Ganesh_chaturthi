import { motion } from "framer-motion";

export default function AuraGlow({ isChantPlaying }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: "250px",
        height: "250px",
        background: "radial-gradient(circle, rgba(255,215,0,0.6), transparent)",
        zIndex: -1
      }}
      animate={
        isChantPlaying
          ? { scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }
          : { scale: 1, opacity: 0.6 }
      }
      transition={{ repeat: Infinity, duration: 3 }}
    />
  );
}
