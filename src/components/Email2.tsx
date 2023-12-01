import React from "react";
import { motion } from "framer-motion";
function Email2() {
  return (
    <motion.div
      className="email2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <a href="mailto:melquisedecgonzalez74@gmail.com" className="email2-link">
      melquisedecgonzalez74@gmail.com
      </a>
    </motion.div>
  );
}

export default Email2;
