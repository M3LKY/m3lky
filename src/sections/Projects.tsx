import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/connecpic.png",
      projectName: "Connecto",
      projectDescription:
        "An application engineered for seamless sharing of moments, dynamic interaction, and real-time conversations. Crafted with technologies like React for a responsive UI, Node.js for a versatile backend, Cloudinary for efficient media storage, MongoDB for reliable data persistence, and Javascript for versatile functionality.",
      noteDescription:
        "For testing: { username: LeeSung, password: 123 }",
      projectTech: [
        "React",
        "Node.js",
        "Cloudinary",
        "MongoDB",
        "Javascript",
        "Sockets",
      ],

      projectExternalLinks: {
        github: "https://github.com/M3LKY/media.git",
        externalLink: "https://connecto-ec2t.onrender.com",
      },
    },
    {
      image: "/tech.png",
      projectName: "Tech-Store",
      projectDescription:
        "Tech-Store is an e-commerce platform with a user-friendly interface for browsing and purchasing a diverse range of technology products, from the latest gadgets to high-performance devices.",
      projectTech: ["React", "Node.js", "Stripe", "SASS"],

      projectExternalLinks: {
        github: "https://github.com/M3LKY/TShop.git",
        externalLink: "https://tech-store-hazel.vercel.app",
      },
    },
    
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Work</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectExternalLinks,
            projectName,
            projectTech,
            noteDescription
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}<br/><div style={{color:"lightpink"}}>{noteDescription}</div></p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link" target="_blank"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link" target="_blank"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
