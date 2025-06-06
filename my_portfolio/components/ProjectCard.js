"use client";
import React, { useState, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye, FaStar, FaRocket, FaMagic } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  const [isActive, setIsActive] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = (e.clientX - centerX) / 20;
    const mouseY = (e.clientY - centerY) / 20;
    
    x.set(mouseX);
    y.set(mouseY);
    
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, [x, y]);

  const cardVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: 100,
      rotateX: -15,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }), [index]);

  // Enhanced tech colors with better contrast ratios
  const getTechColor = useCallback((tech) => {
    const colors = {
      'React': '#61DAFB', 
      'Next.js': '#FFFFFF',
      'Node.js': '#68A063',
      'Python': '#306998',
      'JavaScript': '#F0DB4F', 
      'TypeScript': '#007ACC',
      'MongoDB': '#4DB33D',
      'PostgreSQL': '#336791', 
      'AWS': '#FF9900',
      'Docker': '#0db7ed', 
      'Kubernetes': '#326CE5', 
      'GraphQL': '#E535AB',
      'Flask': '#FFFFFF',
      'Express': '#68A063',
      'Tailwind CSS': '#06B6D4',
      'HTML': '#E34F26',
      'CSS': '#1572B6',
      'Git': '#F05032',
      'Figma': '#F24E1E',
      'MySQL': '#00758F',
      'C++': '#00599C',
      'Java': '#ED8B00',
      'TensorFlow': '#FF6F00',
      'PyTorch': '#EE4C2C',
      'Postman': '#FF6C37',
      'Razorpay': '#3395FF',
      'NextAuth': '#FFFFFF',
      'SendGrid': '#1A82E2'
    };
    return colors[tech] || '#60A5FA';
  }, []);

  const getTechBackground = useCallback((tech) => {
    const backgrounds = {
      'React': 'rgba(97, 218, 251, 0.15)',
      'Next.js': 'rgba(255, 255, 255, 0.15)',
      'Node.js': 'rgba(104, 160, 99, 0.15)',
      'Python': 'rgba(48, 105, 152, 0.15)',
      'JavaScript': 'rgba(240, 219, 79, 0.15)',
      'TypeScript': 'rgba(0, 122, 204, 0.15)',
      'MongoDB': 'rgba(77, 179, 61, 0.15)',
      'PostgreSQL': 'rgba(51, 103, 145, 0.15)',
      'AWS': 'rgba(255, 153, 0, 0.15)',
      'Docker': 'rgba(13, 183, 237, 0.15)',
      'Kubernetes': 'rgba(50, 108, 229, 0.15)',
      'GraphQL': 'rgba(229, 53, 171, 0.15)',
      'Flask': 'rgba(255, 255, 255, 0.15)',
      'Express': 'rgba(104, 160, 99, 0.15)',
      'Tailwind CSS': 'rgba(6, 182, 212, 0.15)'
    };
    return backgrounds[tech] || 'rgba(96, 165, 250, 0.15)';
  }, []);

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => {
        setIsActive(false);
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateY: rotateY,
        rotateX: rotateX,
        transformStyle: "preserve-3d",
      }}
      className="group relative w-full h-[900px] cursor-pointer" // Increased height from 600px to 700px
    >
      <div className="relative w-full h-full rounded-3xl overflow-hidden">
        {/* Enhanced background with better contrast */}
        <motion.div 
          className="absolute inset-0 opacity-40 transition-all duration-700"
          style={{
            background: `
              radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, 
                rgba(99, 102, 241, 0.3) 0%, 
                rgba(168, 85, 247, 0.2) 30%, 
                rgba(59, 130, 246, 0.1) 60%, 
                transparent 100%)
            `
          }}
        />

        {/* Grid pattern with better visibility */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <defs>
            <pattern id={`grid-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
        </svg>

        {/* Floating particles with better visibility */}
        <AnimatePresence>
          {isActive && [...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-blue-400/70 rounded-full shadow-lg"
              initial={{ 
                x: Math.random() * 400,
                y: Math.random() * 600,
                opacity: 0 
              }}
              animate={{
                x: Math.random() * 400,
                y: Math.random() * 600,
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0]
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </AnimatePresence>

        {/* Main content with enhanced contrast */}
        <motion.div 
          className="relative z-10 w-full h-full bg-black/60 backdrop-blur-xl border border-white/20 rounded-3xl p-8 flex flex-col"
          style={{ transform: "translateZ(50px)" }}
        >
          {/* Header section */}
          <div className="flex justify-between items-start mb-6">
            {project.featured && (
              <motion.div
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-black font-bold text-sm shadow-lg"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(251, 191, 36, 0.5)",
                    "0 0 40px rgba(251, 191, 36, 0.8)",
                    "0 0 20px rgba(251, 191, 36, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaStar />
                <span>Featured</span>
              </motion.div>
            )}

            <div className="flex gap-3">
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white shadow-lg"
                whileHover={{ 
                  scale: 1.2, 
                  backgroundColor: "rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-500/30 backdrop-blur-sm rounded-full border border-blue-400/50 text-white shadow-lg"
                whileHover={{ 
                  scale: 1.2, 
                  backgroundColor: "rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaExternalLinkAlt />
              </motion.a>
            </div>
          </div>

          {/* SIGNIFICANTLY INCREASED IMAGE HEIGHT */}
          <motion.div 
            className="relative mb-6 rounded-2xl overflow-hidden border-2 border-white/30 shadow-xl"
            whileHover={{ scale: 1.02 }}
            style={{ transform: "translateZ(30px)" }}
          >
            {project.imageSrc && (
              <>
                <div className="relative bg-white/10 backdrop-blur-sm">
                  <img
                    src={project.imageSrc}
                    alt={project.name}
                    className="w-full h-72 object-cover opacity-90 hover:opacity-100 transition-opacity duration-300" // Increased from h-48 to h-72 (288px)
                    loading="lazy"
                    style={{
                      filter: 'brightness(1.1) contrast(1.1) saturate(1.1)',
                      objectPosition: 'center top' // Ensures the top of the image is visible
                    }}
                  />
                  
                  {/* Enhanced image overlay for better visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Holographic shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: isActive ? ['-100%', '100%'] : '-100%',
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: isActive ? Infinity : 0,
                    ease: "linear"
                  }}
                />
              </>
            )}
          </motion.div>

          {/* Project info section */}
          <motion.div 
            className="flex-1"
            style={{ transform: "translateZ(40px)" }}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-3 drop-shadow-lg"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(99, 102, 241, 0.8)"
              }}
            >
              {project.name}
            </motion.h3>

            <p className="text-gray-200 mb-6 leading-relaxed drop-shadow-sm">
              {project.description}
            </p>

            {/* Enhanced tech stack with better colors and contrast */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Tech Arsenal</h4>
              <div className="flex flex-wrap gap-3">
                {project.techStack?.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    className="relative group"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: techIndex * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div 
                      className="px-4 py-2 rounded-full text-sm font-semibold border-2 backdrop-blur-sm shadow-lg transition-all duration-300"
                      style={{
                        backgroundColor: getTechBackground(tech),
                        borderColor: getTechColor(tech),
                        color: getTechColor(tech),
                        textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                      }}
                    >
                      {tech}
                    </div>
                    
                    {/* Enhanced glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow: `0 0 25px ${getTechColor(tech)}80`,
                        filter: 'blur(8px)'
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced project metrics */}
            <div className="flex items-center gap-6 text-sm text-gray-300 mb-6">
              <div className="flex items-center gap-2">
                <FaRocket className="text-blue-400 drop-shadow-sm" />
                <span className="font-medium">{project.year || '2024'}</span>
              </div>
              
              {project.status && (
                <div className="flex items-center gap-2">
                  <motion.div 
                    className={`w-3 h-3 rounded-full shadow-lg ${
                      project.status === 'live' ? 'bg-green-400' : 'bg-yellow-400'
                    }`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="capitalize font-medium">{project.status}</span>
                </div>
              )}
              
              <div className="flex items-center gap-2">
                <FaMagic className="text-purple-400 drop-shadow-sm" />
                <span className="font-medium">{project.category}</span>
              </div>
            </div>
          </motion.div>

          {/* Enhanced action footer */}
          <motion.div 
            className="flex justify-between items-center pt-6 border-t border-white/20"
            style={{ transform: "translateZ(50px)" }}
          >
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-200 hover:text-white transition-colors duration-300 font-medium"
              whileHover={{ x: 5, scale: 1.05 }}
            >
              <FaCode className="text-lg drop-shadow-sm" />
              <span>Explore Code</span>
            </motion.a>

            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-semibold shadow-xl border border-white/20"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(99, 102, 241, 0.4)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEye />
              <span>Live Demo</span>
              <FaMagic className="ml-1" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Enhanced holographic border */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: `conic-gradient(from 0deg, 
              transparent, 
              rgba(99, 102, 241, 0.6), 
              transparent, 
              rgba(168, 85, 247, 0.6), 
              transparent)`,
            padding: '2px',
          }}
          animate={{
            rotate: isActive ? 360 : 0
          }}
          transition={{
            duration: 4,
            repeat: isActive ? Infinity : 0,
            ease: "linear"
          }}
        >
       </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
