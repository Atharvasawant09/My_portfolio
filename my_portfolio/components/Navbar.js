"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaBars, FaTimes, FaCode, FaUser, FaBrain, FaRocket, FaEnvelope, FaHome } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHologramMode, setIsHologramMode] = useState(true);
  const navRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const navY = useTransform(scrollYProgress, [0, 0.1], [0, -10]);
  const navOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 0.95, 0.95, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Detect active section
      const sections = ['content', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection === 'content' ? 'home' : currentSection);
      }
    };

    const handleMouseMove = (e) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navItems = [
    { href: "#content", label: "Home", id: "home", icon: <FaHome />, color: "#3B82F6" },
    { href: "#about", label: "About", id: "about", icon: <FaUser />, color: "#8B5CF6" },
    { href: "#skills", label: "Skills", id: "skills", icon: <FaBrain />, color: "#06B6D4" },
    { href: "#projects", label: "Projects", id: "projects", icon: <FaRocket />, color: "#10B981" },
    { href: "#contact", label: "Contact", id: "contact", icon: <FaEnvelope />, color: "#F59E0B" }
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <motion.header 
      ref={navRef}
      variants={navVariants}
      initial="hidden"
      animate="visible"
      style={{ y: navY, opacity: navOpacity }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/20 backdrop-blur-xl border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}
    >
      {/* Holographic Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: isHologramMode ? `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(59, 130, 246, 0.3) 0%, 
                rgba(139, 92, 246, 0.2) 25%, 
                rgba(6, 182, 212, 0.1) 50%, 
                transparent 70%)
            ` : 'transparent'
          }}
          animate={{
            background: isHologramMode ? [
              `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.2) 25%, rgba(6, 182, 212, 0.1) 50%, transparent 70%)`,
              `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3) 0%, rgba(6, 182, 212, 0.2) 25%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)`,
            ] : 'transparent'
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {navItems.map((item, i) => 
            navItems.slice(i + 1).map((otherItem, j) => (
              <motion.line
                key={`${i}-${j}`}
                x1={`${20 + i * 15}%`}
                y1="50%"
                x2={`${20 + (i + j + 1) * 15}%`}
                y2="50%"
                stroke="url(#neuralGradient)"
                strokeWidth="1"
                opacity={activeSection === item.id || activeSection === otherItem.id ? 0.6 : 0.2}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.2 }}
              />
            ))
          )}
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center relative z-10">
        {/* Logo with 3D Effect */}
        <motion.a 
          href="#content"
          variants={logoVariants}
          className="flex title-font font-medium items-center mb-4 md:mb-0 group"
          whileHover={{ scale: 1.05, rotateY: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="relative"
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.6 }}
          >
            
          </motion.div>
          
          <motion.h1 
            className="ml-3 text-2xl font-bold relative"
            whileHover={{ 
              textShadow: "0px 0px 20px rgba(59, 130, 246, 0.8)"
            }}
          >
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">
              Atharva Sawant
            </span>
            {/* Holographic shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.h1>
        </motion.a>

        

        {/* Desktop Navigation - Neural Network Style */}
        <nav className="md:ml-auto hidden md:flex items-center space-x-2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              variants={itemVariants}
              className="relative group"
            >
              <motion.a
                href={item.href}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-white bg-white/10 backdrop-blur-md border border-white/20'
                    : 'text-neutral-300 hover:text-white'
                }`}
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  boxShadow: `0 10px 30px ${item.color}40`
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Neural Node */}
                <motion.div
                  className="w-8 h-8 rounded-full flex items-center justify-center border-2 backdrop-blur-md"
                  style={{
                    borderColor: activeSection === item.id ? item.color : 'rgba(255,255,255,0.2)',
                    background: activeSection === item.id 
                      ? `radial-gradient(circle, ${item.color}40, ${item.color}10)`
                      : 'rgba(255,255,255,0.05)'
                  }}
                  animate={{
                    boxShadow: activeSection === item.id 
                      ? [`0 0 20px ${item.color}60`, `0 0 40px ${item.color}80`, `0 0 20px ${item.color}60`]
                      : `0 0 10px ${item.color}30`
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    style={{ color: item.color }}
                    animate={{ rotate: activeSection === item.id ? 360 : 0 }}
                    transition={{ duration: 2, repeat: activeSection === item.id ? Infinity : 0, ease: "linear" }}
                  >
                    {item.icon}
                  </motion.div>
                </motion.div>

                <span className="hidden lg:block">{item.label}</span>

                {/* Holographic underline */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: activeSection === item.id ? '100%' : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Pulse effect for active item */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2"
                    style={{ borderColor: item.color }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.8, 0, 0.8]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.a>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button - 3D Hamburger */}
        <motion.button
          className="md:hidden text-white text-2xl ml-auto relative"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotateY: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-8 h-8 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotateZ: -90, opacity: 0 }}
                  animate={{ rotateZ: 0, opacity: 1 }}
                  exit={{ rotateZ: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotateZ: 90, opacity: 0 }}
                  animate={{ rotateZ: 0, opacity: 1 }}
                  exit={{ rotateZ: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Navigation - Holographic Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -20, rotateX: -90 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-t border-cyan-500/20"
            style={{ transformOrigin: 'top' }}
          >
            <nav className="flex flex-col items-center py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 text-lg font-semibold cursor-pointer transition-all duration-300 px-6 py-3 rounded-full hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    x: 10,
                    boxShadow: `0 5px 20px ${item.color}40`
                  }}
                  style={{ color: item.color }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    {item.icon}
                  </motion.div>
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
        style={{ width: `${scrollYProgress.get() * 100}%` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.header>
  );
};

export default Navbar;
