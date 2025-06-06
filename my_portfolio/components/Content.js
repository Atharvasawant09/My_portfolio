"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaLaptopCode, FaBrain, FaDownload, FaEye } from 'react-icons/fa';

const Content = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const floatingIcons = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="flex flex-col items-center px-8 py-24 min-h-screen relative">
      {/* Floating Background Icons */}
      <motion.div 
        variants={floatingIcons}
        animate="animate"
        className="absolute top-20 left-20 text-blue-500/20 text-6xl"
      >
        <FaCode />
      </motion.div>
      <motion.div 
        variants={floatingIcons}
        animate="animate"
        style={{ animationDelay: '1s' }}
        className="absolute top-40 right-20 text-purple-500/20 text-5xl"
      >
        <FaBrain />
      </motion.div>
      <motion.div 
        variants={floatingIcons}
        animate="animate"
        style={{ animationDelay: '2s' }}
        className="absolute bottom-40 left-32 text-cyan-500/20 text-4xl"
      >
        <FaLaptopCode />
      </motion.div>

      <motion.div 
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="text-3xl md:text-4xl lg:text-5xl text-center mb-20 max-w-4xl"
      >
        <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text font-bold">
          Building the Future with AI & Full-Stack Innovation
        </span>
      </motion.div>

      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl gap-12">
        <motion.div 
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col text-white space-y-6 text-center lg:text-left"
        >
          <motion.div 
            className="text-4xl md:text-5xl lg:text-6xl font-light"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Hi, I am
          </motion.div>
          
          <motion.div 
            className="text-5xl md:text-6xl lg:text-8xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400 bg-clip-text cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              textShadow: "0px 0px 20px rgba(59, 130, 246, 0.5)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Atharva Sawant
          </motion.div>
          
          <motion.div 
            className="text-2xl md:text-3xl lg:text-4xl font-semibold"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              Full Stack Developer & AI/Graphics Enthusiast
            </span>
          </motion.div>

          <motion.div 
            className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Passionate about creating innovative web solutions with modern technologies and AI. 
            Currently working at DreamSkrin, specializing in React, Next.js, and machine learning applications.
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold shadow-lg flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEye />
              View Projects
            </motion.a>
            {/* <motion.a
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-3 border-2 border-blue-500 rounded-full text-blue-400 font-semibold hover:bg-blue-500/10 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              Download CV
            </motion.a> */}
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <motion.div
            className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-2xl relative"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 50px rgba(59, 130, 246, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"></div>
            <img
              className="w-full h-full object-cover relative z-10"
              src="https://media0.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3OGU1NzZpMnpxaDhtNzJtbHFqYmUybWo0YmRpdmN2ZWdxNHRibGhjMiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/OLPQ6z2hlHmwFc4Hso/giphy.webp"
              alt="Atharva Sawant"
            />
          </motion.div>
          
          {/* Floating particles around image */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full"
            animate={{
              y: [0, -15, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.div
            className="absolute top-1/2 -right-8 w-4 h-4 bg-cyan-500 rounded-full"
            animate={{
              x: [0, 10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Content;
