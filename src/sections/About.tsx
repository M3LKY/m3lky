import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      
      <div className="about-grid">
        <div className="about-grid-info">
        <div className="title">
        <h2>About Me</h2>
      </div>
          <p className="about-grid-info-text">
          Computer Systems Engineer student seeking my first tech opportunity. Passionate about gaining knowledge and making a positive impact. Excited about growing, learning, and contributing to innovative projects.
          </p>
          
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/profile.jpg" alt="profile" fill style={{borderRadius: "20px"}} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;