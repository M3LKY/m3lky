import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      {/* <h2 className="contact-sub-title">Get In Touch</h2> */}
      <div className="contact-cta">
        <Button link="mailto:melquisedecgonzalez74@gmail.com" text="Get In Touch" />
      </div>
    </motion.div>
  );
}

export default Contact;
