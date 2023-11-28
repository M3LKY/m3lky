import Link from "next/link";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  // useEffect(() => {
  //   const transformSelected = () => {
  //     const underline = document.querySelector<HTMLElement>(".underline");
  //     underline!.style.top = `${selected * 2.5}rem`;
  //   };
  //   transformSelected();
  // }, [selected]);

  const expereinces = [
    {
      name: "Rapidops",
      role: "Full Stack Developer",
      url: "https://www.rapidops.com",
      start: "January 2021",
      end: "Present",
      shortDescription: [
        "I had experience working on a large codebase utilizing Kibana and Elasticsearch.",
        "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, TypeScript, Node.js, Hapi, and Elasticsearch, among others.",
        "I've also managed a small team that includes Frontend Developers, Backend Developers, and UI/UX Developers.",
        "Additionally, I've represented the company in client meetings, communicating effectively on their behalf.",
      ],
    },
    {
      name: "Youtube",
      role: "Content Creator",
      url: "https://www.youtube.com/kishansheth21",
      start: "April 2021",
      end: "Present",
      shortDescription: [
        "Upon graduating in 2021, I began creating content on YouTube, with the aim of enhancing my skills and working with the latest technologies, specifically React and Node.",
        "Over time, I have developed and shared over 50 projects using React on my channel.",
        "As a result, my channel has gained a substantial following, with over 11,000 subscribers to date. I have also had the pleasure of collaborating with various brands throughout my journey.",
      ],
    },
    {
      name: "ACES",
      role: "President",
      url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
      start: "November 2019",
      end: "November 2020",
      shortDescription: [
        "As the elected President of the ACES Departmental Club, I successfully led a team of board members and executive committee members to organize and execute multiple events throughout the year.",
        "Additionally, I secured sponsorships from reputable brands to support our events.",
        "Overall, it was a rewarding experience that allowed me to develop my leadership skills while contributing positively to the growth of the organization.",
      ],
    },
    {
      name: "ISTE",
      role: "Web Developer",
      url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
      start: "November 2019",
      end: "November 2020",
      shortDescription: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
      ],
    },
    {
      name: "Shashaan",
      role: "Founder",
      url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
      start: "November 2018",
      end: "November 2021",
      shortDescription: [
        "While still a student, I founded a web hosting company that offered affordable hosting services.",
        "With over 300 customers, the business thrived until I graduated and sold it to another company.",
      ],
    },
  ];
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
              <Image src={"/typescript-svgrepo-com.svg"} alt="" width={"65"} height={"65"}/>
              <p>Typescript</p>
            </div>
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
              <Image src={"/go-svgrepo-com.svg"} alt="" width={"65"} height={"65"}/>
              <p>Go</p>
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

export default Experience;
