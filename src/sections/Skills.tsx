import Link from "next/link";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Skills() {
 
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Skills</h2>
      </div>
      <div className="container">
      <div className="container-info">
          
          <div className="container-info-list">
           
            <div className="container-info-list-item">
              <Image src={"/react-javascript-js-framework-facebook-svgrepo-com.svg"} alt="" width={"65"} height={"65"}/>
              <p>React</p>
            </div>
            <div className="container-info-list-item">
              <Image src={"/javascript-svgrepo-com(1).svg"} alt="" width={"65"} height={"65"}/>
              <p>Javascript</p>
            </div>
          
            <div className="container-info-list-item">
              <Image src={"/node-js-svgrepo-com.svg"} alt="" width={"65"} height={"65"}/>
              <p>Node.js</p>
            </div>
          
            <div className="container-info-list-item">
              <Image src={"/postgresql-logo-svgrepo-com.svg"} alt="" width={"65"} height={"65"}/>
              <p>PostgreSQL</p>
            </div>
          
            <div className="container-info-list-item">
              <Image src={"/css-svgrepo-com.svg"} alt="" width={"65"} height={"65"}/>
              <p>Css</p>
            </div>
            <div className="container-info-list-item">
              <Image src={"/cpp-svgrepo-com.svg"} alt="" width={"65"} height={"65"}/>
              <p>C++</p>
            </div>
            <div className="container-info-list-item">
              <Image src={"/java.png"} alt="" width={"65"} height={"65"}/>
              <p>Java</p>
            </div>
            <div className="container-info-list-item">
              <Image src={"/mongodb-icon-1.svg"} alt="" width={"65"} height={"65"}/>
              <p>MongoDB</p>
            </div>
            <div className="container-info-list-item">
              <Image src={"/html-svgrepo-com.svg"} alt="" width={"65"} height={"65"}/>
              <p>HTML</p>
            </div>
            <div className="container-info-list-item">
              <Image src={"/figma-svgrepo-com(4).svg"} alt="" width={"65"} height={"65"}/>
              <p>Figma</p>
            </div>
          
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
