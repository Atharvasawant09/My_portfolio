"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane, FaMapMarkerAlt, FaRocket, FaBrain, FaCode, FaPlay, FaPause, FaExpand, FaCompress, FaWifi, FaSignal } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    priority: 'normal',
    projectType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHologramMode, setIsHologramMode] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [connectionStatus, setConnectionStatus] = useState('connected');
  const [transmissionProgress, setTransmissionProgress] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 }); // Default fallback
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Handle window size and mounting
  useEffect(() => {
    setIsMounted(true);
    
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setConnectionStatus('transmitting');
    
    // Simulate neural transmission
    const interval = setInterval(() => {
      setTransmissionProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setConnectionStatus('success');
          setTimeout(() => {
            setIsSubmitting(false);
            setTransmissionProgress(0);
            setConnectionStatus('connected');
            setFormData({ name: '', email: '', message: '', priority: 'normal', projectType: '' });
          }, 2000);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const contactMethods = [
    {
      id: 'neural-link',
      title: 'Neural Link',
      subtitle: 'Direct Brain Interface',
      icon: <FaBrain />,
      color: 'from-purple-500 to-pink-500',
      description: 'Instant thought transmission',
      status: 'active'
    },
    {
      id: 'quantum-mail',
      title: 'Quantum Mail',
      subtitle: 'atharva.sawant1919@gmail.com',
      icon: <FaEnvelope />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Encrypted communication',
      status: 'active'
    },
    {
      id: 'location-beacon',
      title: 'Location Beacon',
      subtitle: 'Pune, Maharashtra',
      icon: <FaMapMarkerAlt />,
      color: 'from-green-500 to-emerald-500',
      description: 'Physical coordinates',
      status: 'active'
    },
    {
      id: 'project-status',
      title: 'Project Status',
      subtitle: 'Available for Missions',
      icon: <FaRocket />,
      color: 'from-orange-500 to-red-500',
      description: 'Ready for deployment',
      status: 'standby'
    }
  ];

  // Don't render until mounted to avoid hydration issues
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Initializing Neural Communication Hub...</div>
      </div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      style={{ y, opacity }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`min-h-screen relative overflow-hidden transition-all duration-500 ${
        isExpanded ? 'fixed inset-0 z-50' : 'px-4 md:px-12 lg:px-24 py-16'
      }`}
    >
      {/* Holographic Background System */}
      <div className="absolute inset-0">
        {/* Dynamic Neural Network */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: isHologramMode ? `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(139, 92, 246, 0.3) 0%, 
                rgba(59, 130, 246, 0.2) 25%, 
                rgba(6, 182, 212, 0.1) 50%, 
                transparent 70%)
            ` : 'transparent'
          }}
          animate={{
            background: isHologramMode ? [
              `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.2) 25%, rgba(6, 182, 212, 0.1) 50%, transparent 70%)`,
              `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.3) 0%, rgba(6, 182, 212, 0.2) 25%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)`,
            ] : 'transparent'
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Floating Data Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Neural Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {[...Array(50)].map((_, i) => (
            <motion.circle
              key={i}
              cx={`${(i % 10) * 10 + 5}%`}
              cy={`${Math.floor(i / 10) * 20 + 10}%`}
              r="1"
              fill="url(#neuralGradient)"
              animate={{
                r: connectionStatus === 'transmitting' ? [1, 3, 1] : 1,
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
          <defs>
            <linearGradient id="neuralGradient">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Neural Control Panel */}
      <motion.div
        className="fixed top-24 right-8 z-50 glass-card p-4 rounded-2xl border border-blue-500/20"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <FaWifi className={`text-${connectionStatus === 'connected' ? 'green' : connectionStatus === 'transmitting' ? 'yellow' : 'blue'}-400`} />
            </motion.div>
            <span className="uppercase tracking-wider">{connectionStatus}</span>
          </div>
          
          <button
            onClick={() => setIsHologramMode(!isHologramMode)}
            className={`p-3 rounded-xl transition-all duration-300 ${
              isHologramMode ? 'bg-purple-500 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            <FaBrain />
          </button>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300"
          >
            {isExpanded ? <FaCompress /> : <FaExpand />}
          </button>
        </div>
      </motion.div>

      {/* Main Interface */}
      <motion.div
        variants={itemVariants}
        className="text-center mb-16 relative z-10"
      >
        <motion.h1
          className="text-7xl font-bold mb-6"
          animate={{
            textShadow: isHologramMode ? [
              "0 0 20px rgba(139, 92, 246, 0.8)",
              "0 0 40px rgba(59, 130, 246, 0.8)",
              "0 0 20px rgba(139, 92, 246, 0.8)"
            ] : "none"
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text">
            Neural Communication Hub
          </span>
        </motion.h1>
        
        <motion.p
          className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Establish secure connection to initiate project collaboration. 
          All transmissions are encrypted and processed through advanced neural networks.
        </motion.p>
      </motion.div>

      {/* Communication Nodes */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10"
      >
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.id}
            className="glass-card p-6 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 relative overflow-hidden"
            whileHover={{ 
              y: -10, 
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Status Indicator */}
            <motion.div
              className="absolute top-4 right-4 w-3 h-3 rounded-full"
              style={{
                backgroundColor: method.status === 'active' ? '#10B981' : '#F59E0B'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Node Icon */}
            <motion.div
              className={`w-16 h-16 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center mb-4 mx-auto`}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(139, 92, 246, 0.3)",
                  "0 0 40px rgba(59, 130, 246, 0.5)",
                  "0 0 20px rgba(139, 92, 246, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              whileHover={{ rotate: 360 }}
            >
              <motion.div
                className="text-white text-2xl"
                animate={{ rotate: isHologramMode ? 360 : 0 }}
                transition={{ duration: 4, repeat: isHologramMode ? Infinity : 0, ease: "linear" }}
              >
                {method.icon}
              </motion.div>
            </motion.div>

            <h3 className="text-xl font-bold text-white text-center mb-2">{method.title}</h3>
            <p className="text-gray-300 text-center text-sm mb-2">{method.subtitle}</p>
            <p className="text-gray-400 text-center text-xs">{method.description}</p>

            {/* Holographic Shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Neural Network Links */}
      <motion.div
        variants={itemVariants}
        className="flex justify-center space-x-12 mb-16 relative z-10"
      >
        <motion.a
          href="https://www.linkedin.com/in/atharva-sawant-46aab12ab/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          whileHover={{ scale: 1.3, rotateY: 180 }}
          whileTap={{ scale: 0.9 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center shadow-lg relative"
            animate={{
              boxShadow: [
                "0 0 30px rgba(59, 130, 246, 0.5)",
                "0 0 60px rgba(59, 130, 246, 0.8)",
                "0 0 30px rgba(59, 130, 246, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaLinkedin className="text-white text-3xl" />
            
            {/* 3D Back Face */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center"
              style={{ 
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden"
              }}
            >
              <FaCode className="text-white text-3xl" />
            </motion.div>
          </motion.div>
          
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            LinkedIn Network
          </div>
        </motion.a>

        <motion.a
          href="https://github.com/Atharvasawant09"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          whileHover={{ scale: 1.3, rotateY: 180 }}
          whileTap={{ scale: 0.9 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="w-20 h-20 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center shadow-lg relative"
            animate={{
              boxShadow: [
                "0 0 30px rgba(107, 114, 128, 0.5)",
                "0 0 60px rgba(107, 114, 128, 0.8)",
                "0 0 30px rgba(107, 114, 128, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            <FaGithub className="text-white text-3xl" />
            
            {/* 3D Back Face */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-green-600 to-green-500 flex items-center justify-center"
              style={{ 
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden"
              }}
            >
              <FaRocket className="text-white text-3xl" />
            </motion.div>
          </motion.div>
          
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Code Repository
          </div>
        </motion.a>
      </motion.div>

      {/* Neural Transmission Interface */}
      <motion.section
        variants={itemVariants}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Holographic Display */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="glass-card p-8 rounded-3xl border border-cyan-500/20 relative overflow-hidden">
              <motion.img
                className="w-full h-auto rounded-2xl shadow-2xl"
                src="/git.gif"
                alt="Neural communication interface"
                animate={{
                  filter: isHologramMode ? [
                    "hue-rotate(0deg) brightness(1)",
                    "hue-rotate(180deg) brightness(1.2)",
                    "hue-rotate(360deg) brightness(1)"
                  ] : "none"
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Holographic Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-purple-500/20"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <div className="mt-6 text-center relative z-10">
                <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-4">
                  Neural Interface Ready
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Advanced AI-powered communication system ready for project collaboration. 
                  Secure, encrypted, and optimized for creative partnerships.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Transmission Form */}
          <motion.div
            className="glass-card p-8 rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 relative overflow-hidden"
            whileHover={{ y: -5, rotateY: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Transmission Progress */}
            {isSubmitting && (
              <motion.div
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500"
                initial={{ width: 0 }}
                animate={{ width: `${transmissionProgress}%` }}
                transition={{ duration: 0.3 }}
              />
            )}

            <h2 className="text-white text-3xl font-bold mb-8 text-center">
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
                Initiate Neural Link
              </span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                className="relative group"
                whileFocus={{ scale: 1.02, rotateX: 5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 backdrop-blur-sm rounded-xl border border-gray-600/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-base outline-none text-white py-4 px-6 leading-8 transition-all duration-300 placeholder-gray-400"
                  placeholder="Neural Identity Code"
                  required
                />
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ transform: "translateZ(-10px)" }}
                />
              </motion.div>

              <motion.div
                className="relative group"
                whileFocus={{ scale: 1.02, rotateX: 5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 backdrop-blur-sm rounded-xl border border-gray-600/50 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-base outline-none text-white py-4 px-6 leading-8 transition-all duration-300 placeholder-gray-400"
                  placeholder="Quantum Communication Channel"
                  required
                />
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ transform: "translateZ(-10px)" }}
                />
              </motion.div>

              <motion.div
                className="relative group"
                whileFocus={{ scale: 1.02, rotateX: 5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full bg-white/5 backdrop-blur-sm rounded-xl border border-gray-600/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-base outline-none text-white py-4 px-6 leading-8 transition-all duration-300"
                >
                  <option value="normal" className="bg-gray-800">Normal Priority</option>
                  <option value="urgent" className="bg-gray-800">Urgent Mission</option>
                  <option value="collaboration" className="bg-gray-800">Long-term Collaboration</option>
                </select>
              </motion.div>

              <motion.div
                className="relative group"
                whileFocus={{ scale: 1.02, rotateX: 5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 backdrop-blur-sm rounded-xl border border-gray-600/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-base outline-none text-white py-4 px-6 leading-8 transition-all duration-300 placeholder-gray-400 resize-none"
                  placeholder="Neural Data Transmission Content..."
                  rows="6"
                  required
                />
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ transform: "translateZ(-10px)" }}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 border-0 py-4 px-8 focus:outline-none hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 rounded-xl text-lg font-semibold flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                whileHover={{ 
                  scale: isSubmitting ? 1 : 1.05, 
                  y: isSubmitting ? 0 : -2,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
                }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Transmitting Neural Data...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Initiate Transmission</span>
                  </>
                )}

                {/* Holographic Button Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.button>
            </form>

            {/* Connection Status Display */}
            <motion.div
              className="mt-6 flex items-center justify-center gap-3 text-sm"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaSignal className={`text-${connectionStatus === 'connected' ? 'green' : connectionStatus === 'transmitting' ? 'yellow' : 'blue'}-400`} />
              <span className="text-gray-400 uppercase tracking-wider">
                Neural Link: {connectionStatus}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Neural Footer */}
      <motion.div
        variants={itemVariants}
        className="text-center mt-20 pt-8 border-t border-gray-700/50 relative z-10"
      >
        <motion.p
          className="text-gray-400 text-lg mb-2"
          animate={{
            textShadow: isHologramMode ? [
              "0 0 10px rgba(139, 92, 246, 0.5)",
              "0 0 20px rgba(59, 130, 246, 0.5)",
              "0 0 10px rgba(139, 92, 246, 0.5)"
            ] : "none"
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          © 2025 Atharva Sawant Neural Systems. All transmissions encrypted.
        </motion.p>
        <p className="text-gray-500 text-sm">
          Powered by Advanced AI • React • Next.js • Neural Networks
        </p>
      </motion.div>

      {/* Fixed Cursor Neural Tracker */}
      <motion.div
        className="fixed w-8 h-8 bg-purple-400/30 rounded-full pointer-events-none z-30 mix-blend-difference"
        animate={{
          x: mousePosition.x * (windowSize.width / 100) - 16,
          y: mousePosition.y * (windowSize.height / 100) - 16,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <motion.div
          className="w-full h-full border-2 border-purple-400 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Contact;
