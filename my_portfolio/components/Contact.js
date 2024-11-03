"use client"
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Importing icons
import { motion } from 'framer-motion'; // Importing motion from Framer Motion

const SocialLinks = () => {
  return (
    <>

    <div className="flex justify-center items-center text-4xl font-bold p-7">Contact Me</div>

    <div className="footer flex justify-center items-center text-lg text-slate-300 p-3">atharva.sawant1919@gmail.com</div>
    <div className="flex justify-center space-x-8 mt-8">
      {/* LinkedIn Icon */}
      <motion.a
        href="https://www.linkedin.com/in/atharva-sawant-46aab12ab/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="text-white text-3xl"
      >
        <FaLinkedin />
      </motion.a>

      {/* GitHub Icon */}
      <motion.a
        href="https://github.com/Atharvasawant09"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="text-white text-3xl"
      >
        <FaGithub />
      </motion.a>

    </div>



    <div className="footer flex justify-center items-center text-lg text-slate-300 p-7">©Atharva Sawant 2024 . All rights reserved</div>
    </>
  );
};

export default SocialLinks;
