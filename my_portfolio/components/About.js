"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode, FaRocket, FaPlay, FaPause, FaExpand, FaCompress } from 'react-icons/fa';

const About = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const sections = [
    {
      id: 'about',
      title: 'Neural Profile',
      icon: <FaCode />,
      color: 'from-blue-500 to-cyan-500',
      content: {
        title: "Digital Architect & Code Alchemist",
        description: "Passionate and adaptive full-stack developer with hands-on experience building scalable web applications using modern technologies like React, Next.js, Node.js, and MongoDB. Proven ability to deliver secure, user-friendly solutions and collaborate effectively in agile teams.",
        current: "Currently working as a Software Developer at DreamSkrin, contributing to Vasavi fashion web application with Next.js, Tailwind CSS, Meta Pixel integration, and Razorpay payments.",
        expertise: "My expertise spans across full-stack development, AI/ML, 3D graphics and designing. Always eager to learn new technologies and contribute to innovative projects."
      }
    },
    {
      id: 'experience',
      title: 'Mission Log',
      icon: <FaBriefcase />,
      color: 'from-purple-500 to-pink-500',
      content: {
        role: "Software Developer",
        company: "DreamSkrin (Remote)",
        period: "Mar 2025 - Present",
        description: "Building the future of fashion e-commerce with cutting-edge web technologies",
        achievements: [
          "Architected responsive UI components with Next.js & Tailwind CSS",
          "Integrated Meta Pixel tracking for advanced analytics",
          "Implemented secure Razorpay payment gateway",
          "Optimized application performance by 40%"
        ]
      }
    },
    {
      id: 'education',
      title: 'Knowledge Matrix',
      icon: <FaGraduationCap />,
      color: 'from-cyan-500 to-blue-500',
      content: {
        institution: "Symbiosis Institute of Technology",
        degree: "Bachelor of Technology - Computer Science Engineering",
        period: "2022 - 2026",
        cgpa: "7.1",
        focus: "Specializing in modern web technologies, AI/ML, and software engineering principles"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      style={{ y, opacity }}
      className="min-h-screen relative overflow-hidden bg-black"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #3B82F6 0%, #8B5CF6 25%, #06B6D4 50%, transparent 70%)`
          }}
          animate={{
            background: isPlaying ? [
              `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #3B82F6 0%, #8B5CF6 25%, #06B6D4 50%, transparent 70%)`,
              `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #8B5CF6 0%, #06B6D4 25%, #3B82F6 50%, transparent 70%)`,
              `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #06B6D4 0%, #3B82F6 25%, #8B5CF6 50%, transparent 70%)`
            ] : undefined
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Floating geometric shapes */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div
              className={`w-4 h-4 ${
                i % 3 === 0 ? 'bg-blue-500/20' : 
                i % 3 === 1 ? 'bg-purple-500/20' : 'bg-cyan-500/20'
              } ${
                i % 4 === 0 ? 'rounded-full' : 
                i % 4 === 1 ? 'rounded-none rotate-45' : 
                i % 4 === 2 ? 'rounded-lg' : 'rounded-full'
              }`}
            />
          </motion.div>
        ))}
      </div>

      {/* Control Panel */}
      <motion.div
        className="fixed top-24 right-8 z-50 glass-card p-4 rounded-2xl border border-blue-500/20"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex flex-col gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`p-3 rounded-xl transition-all duration-300 ${
              isPlaying ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
            }`}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300"
          >
            {isExpanded ? <FaCompress /> : <FaExpand />}
          </button>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`px-4 md:px-12 lg:px-24 py-16 transition-all duration-500 ${
          isExpanded ? 'scale-110' : 'scale-100'
        }`}
      >
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-7xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text"
            animate={{
              backgroundPosition: isPlaying ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%'
            }}
            transition={{ duration: 3, repeat: isPlaying ? Infinity : 0 }}
          >
            Neural Biography
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my journey through interactive data nodes and immersive storytelling
          </p>
        </motion.div>

        {/* Section Navigator */}
        <motion.div
          variants={sectionVariants}
          className="flex justify-center mb-16"
        >
          <div className="glass-card p-2 rounded-2xl border border-blue-500/20">
            <div className="flex space-x-2">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeSection === section.id
                      ? `bg-gradient-to-r ${section.color} text-white shadow-lg`
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.icon}
                  {section.title}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Dynamic Content Area */}
        <AnimatePresence mode="wait">
          {sections.map((section) => (
            activeSection === section.id && (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -50, rotateX: 15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="perspective-1000"
              >
                {section.id === 'about' && (
                  <div className="glass-card p-10 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 transform-gpu">
                    <motion.div
                      className="space-y-8"
                      style={{
                        transform: `rotateY(${(mousePosition.x - 50) * 0.1}deg) rotateX(${(mousePosition.y - 50) * 0.05}deg)`
                      }}
                    >
                      <motion.h2
                        className={`text-4xl font-bold text-transparent bg-gradient-to-r ${section.color} bg-clip-text mb-6`}
                        animate={{ scale: isPlaying ? [1, 1.02, 1] : 1 }}
                        transition={{ duration: 2, repeat: isPlaying ? Infinity : 0 }}
                      >
                        {section.content.title}
                      </motion.h2>

                      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div
                          className="md:col-span-2 space-y-4"
                          whileHover={{ scale: 1.02 }}
                        >
                          <p className="text-lg text-gray-200 leading-relaxed">
                            {section.content.description}
                          </p>
                          <p className="text-lg text-gray-300 leading-relaxed">
                            {section.content.current}
                          </p>
                          <p className="text-lg text-gray-300 leading-relaxed">
                            {section.content.expertise}
                          </p>
                        </motion.div>

                        <motion.div
                          className="glass-card p-6 rounded-2xl border border-cyan-500/20"
                          whileHover={{ rotateY: 10, scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <h3 className="text-xl font-bold text-cyan-400 mb-4">Quick Stats</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Experience:</span>
                              <span className="text-white font-semibold">3+ Years</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Projects:</span>
                              <span className="text-white font-semibold">25+</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Technologies:</span>
                              <span className="text-white font-semibold">20+</span>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                )}

                {section.id === 'experience' && (
                  <div className="glass-card p-10 rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500">
                    <motion.div
                      style={{
                        transform: `rotateY(${(mousePosition.x - 50) * 0.1}deg) rotateX(${(mousePosition.y - 50) * 0.05}deg)`
                      }}
                    >
                      <div className="flex items-center gap-6 mb-8">
                        <motion.div
                          className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center"
                          animate={{ rotate: isPlaying ? 360 : 0 }}
                          transition={{ duration: 8, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
                        >
                          <FaRocket className="text-white text-3xl" />
                        </motion.div>
                        <div>
                          <h2 className="text-4xl font-bold text-purple-300">{section.content.role}</h2>
                          <p className="text-2xl text-pink-300 font-semibold">{section.content.company}</p>
                          <p className="text-lg text-gray-400">{section.content.period}</p>
                        </div>
                      </div>

                      <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                        {section.content.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.content.achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            className="glass-card p-4 rounded-xl border border-purple-500/20"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.05, x: 10 }}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                              <p className="text-gray-300">{achievement}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )}

                {section.id === 'education' && (
                  <div className="glass-card p-10 rounded-3xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500">
                    <motion.div
                      style={{
                        transform: `rotateY(${(mousePosition.x - 50) * 0.1}deg) rotateX(${(mousePosition.y - 50) * 0.05}deg)`
                      }}
                    >
                      <div className="flex items-center gap-6 mb-8">
                        <motion.div
                          className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center"
                          animate={{ 
                            scale: isPlaying ? [1, 1.1, 1] : 1,
                            rotate: isPlaying ? [0, 5, -5, 0] : 0
                          }}
                          transition={{ duration: 3, repeat: isPlaying ? Infinity : 0 }}
                        >
                          <FaGraduationCap className="text-white text-3xl" />
                        </motion.div>
                        <div>
                          <h2 className="text-3xl font-bold text-cyan-300">{section.content.institution}</h2>
                          <p className="text-xl text-blue-300">{section.content.degree}</p>
                          <div className="flex gap-4 mt-2">
                            <span className="text-gray-400">{section.content.period}</span>
                            <span className="text-cyan-400 font-semibold">CGPA: {section.content.cgpa}</span>
                          </div>
                        </div>
                      </div>

                      <motion.div
                        className="glass-card p-6 rounded-2xl border border-blue-500/20"
                        whileHover={{ scale: 1.02 }}
                      >
                        <p className="text-lg text-gray-200 leading-relaxed">
                          {section.content.focus}
                        </p>
                      </motion.div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Interactive Timeline */}
        <motion.div
          variants={sectionVariants}
          className="mt-20"
        >
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>
            
            <div className="space-y-16">
              {['2022', '2024', '2025'].map((year, index) => (
                <motion.div
                  key={year}
                  className="flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg border-4 border-white/20"
                    animate={{
                      boxShadow: isPlaying ? [
                        "0 0 20px rgba(59, 130, 246, 0.5)",
                        "0 0 40px rgba(139, 92, 246, 0.8)",
                        "0 0 20px rgba(59, 130, 246, 0.5)"
                      ] : "0 0 20px rgba(59, 130, 246, 0.5)"
                    }}
                    transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, delay: index * 0.5 }}
                  >
                    {year}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Fixed Cursor Follower */}
      <motion.div
        className="fixed w-6 h-6 bg-blue-400/30 rounded-full pointer-events-none z-30 mix-blend-difference"
        animate={{
          x: mousePosition.x * (windowSize.width / 100) - 12,
          y: mousePosition.y * (windowSize.height / 100) - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </motion.div>
  );
};

export default About;
