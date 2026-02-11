import { motion } from "framer-motion";
import "./loader.css";

export default function Loader({ onDone }) {
  return (
    <motion.div
      className="loaderWrap"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={() => setTimeout(onDone, 600)}
    >
      <div className="noise" />
      <div className="scanlines" />
      <motion.div
        className="loaderText"
        initial={{ y: 22, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65 }}
      >
        <span className="glitch" data-text="SKYRIO WEBSITE">
          SKYRIO WEBSITE
        </span>
        <div className="sub muted">Booting personal hub...</div>
      </motion.div>
    </motion.div>
  );
}
