"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Content from "@/components/Content";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectsSection from "@/components/ProjectsSection";
import Hackathon from "@/components/Hackathon";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <div className="min-h-screen bg-transparent text-white">
        <motion.section 
          id="content" 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Content />
        </motion.section>
        
        <motion.section 
          id="about"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <About />
        </motion.section>
        
        <motion.section 
          id="hackathon"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Hackathon />
        </motion.section>
        
        <motion.section 
          id="skills"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Skills />
        </motion.section>
        
        <motion.section 
          id="projects"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <ProjectsSection />
        </motion.section>
        
        <motion.section 
          id="contact"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Contact />
        </motion.section>
      </div>
    </motion.div>
  );
}
