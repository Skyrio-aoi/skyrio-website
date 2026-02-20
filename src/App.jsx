import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" duration={3000} onDone={() => setLoading(false)} />
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Blog />
          <Contact />
        </motion.div>
      )}
    </AnimatePresence>
  );
}