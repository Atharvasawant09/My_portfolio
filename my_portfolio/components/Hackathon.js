"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaTrophy, FaCode, FaUsers, FaShieldAlt, FaGlobe, FaFire, FaBolt, FaPlay, FaPause, FaExpand, FaCompress, FaGamepad, FaStar, FaMedal, FaCrown } from 'react-icons/fa';

const Hackathon = () => {
  const [selectedBattle, setSelectedBattle] = useState(null);
  const [isArenaMode, setIsArenaMode] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);

  useEffect(() => {
    // Fix for window is not defined error
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

  const hackathonBattles = [
    {
      id: 'foss-hack-2025',
      name: "FOSS Hack 2025",
      battleName: "The Encryption Wars",
      description: "Developed a secure LAN-based file transfer platform using Flask and JavaScript, featuring AES-256 encryption with real-time IP tracking.",
      logo: "https://fossunited.org/files/Foss%20United%20Logo%20Black.svg",
      achievement: "Security Champion",
      rank: "S-Rank",
      tech: ["Flask", "JavaScript", "AES-256", "CryptoJS"],
      gradient: "from-green-500 to-emerald-600",
      icon: <FaShieldAlt />,
      battleIcon: <FaBolt />, // Changed from FaSword to FaBolt
      difficulty: "Legendary",
      participants: 500,
      placement: "Participant",
      xpGained: 2500,
      skillsUnlocked: ["Encryption Mastery", "Real-time Systems", "Security Architecture"],
      battleStats: {
        attack: 95,
        defense: 98,
        speed: 85,
        intelligence: 92
      },
      year: "2025",
      duration: "48 hours",
      teamSize: 4
    },
    {
      id: 'techvortex-2024',
      name: "TechVortex 2.0",
      battleName: "The Crowdfunding Conquest",
      description: "Developed a crowdfunding web application with seamless payment gateway integration and advanced user analytics.",
      logo: "./hack1.png",
      achievement: "Innovation Master",
      rank: "A-Rank",
      tech: ["React", "Node.js", "MongoDB", "Razorpay"],
      gradient: "from-purple-500 to-pink-600",
      icon: <FaGlobe />,
      battleIcon: <FaFire />, // Using FaFire instead of FaSword
      difficulty: "Epic",
      participants: 300,
      placement: "Participant",
      xpGained: 3000,
      skillsUnlocked: ["Payment Integration", "Full-Stack Mastery", "UI/UX Excellence"],
      battleStats: {
        attack: 88,
        defense: 85,
        speed: 92,
        intelligence: 95
      },
      year: "2024",
      duration: "8 hours",
      teamSize: 4
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

  const battleVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const getRankColor = (rank) => {
    switch(rank) {
      case 'S-Rank': return 'from-yellow-400 to-orange-500';
      case 'A-Rank': return 'from-purple-400 to-pink-500';
      case 'B-Rank': return 'from-blue-400 to-cyan-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getRankIcon = (rank) => {
    switch(rank) {
      case 'S-Rank': return <FaCrown />;
      case 'A-Rank': return <FaMedal />;
      case 'B-Rank': return <FaStar />;
      default: return <FaTrophy />;
    }
  };

  return (
    <motion.div
      ref={containerRef}
      style={{ y, rotateX }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`min-h-screen relative overflow-hidden transition-all duration-500 ${
        isExpanded ? 'fixed inset-0 z-50' : 'px-4 md:px-12 lg:px-24 py-16'
      }`}
    >
      {/* Gaming Arena Background */}
      <div className="absolute inset-0">
        {/* Dynamic Battle Arena */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: isArenaMode ? `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(255, 215, 0, 0.3) 0%, 
                rgba(255, 69, 0, 0.2) 25%, 
                rgba(139, 69, 19, 0.1) 50%, 
                transparent 70%)
            ` : 'transparent'
          }}
          animate={{
            background: isArenaMode ? [
              `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 215, 0, 0.3) 0%, rgba(255, 69, 0, 0.2) 25%, rgba(139, 69, 19, 0.1) 50%, transparent 70%)`,
              `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 69, 0, 0.3) 0%, rgba(139, 69, 19, 0.2) 25%, rgba(255, 215, 0, 0.1) 50%, transparent 70%)`,
            ] : 'transparent'
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Battle Particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
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
          >
            <div
              className={`w-3 h-3 ${
                i % 4 === 0 ? 'bg-yellow-400/50' : 
                i % 4 === 1 ? 'bg-orange-500/50' : 
                i % 4 === 2 ? 'bg-red-500/50' : 'bg-purple-500/50'
              } ${
                i % 3 === 0 ? 'rounded-full' : 
                i % 3 === 1 ? 'rotate-45' : 'rounded-lg'
              }`}
            />
          </motion.div>
        ))}

        {/* Arena Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          {[...Array(100)].map((_, i) => (
            <motion.rect
              key={i}
              x={`${(i % 10) * 10}%`}
              y={`${Math.floor(i / 10) * 10}%`}
              width="1"
              height="1"
              fill="url(#arenaGradient)"
              animate={{
                opacity: selectedBattle ? [0.1, 0.5, 0.1] : 0.1,
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.05 }}
            />
          ))}
          <defs>
            <linearGradient id="arenaGradient">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#FF4500" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Battle Control Panel */}
      <motion.div
        className="fixed top-24 right-8 z-50 glass-card p-4 rounded-2xl border border-yellow-500/20"
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
              <FaGamepad className="text-yellow-400" />
            </motion.div>
            <span className="uppercase tracking-wider">Battle Arena</span>
          </div>
          
          <button
            onClick={() => setIsArenaMode(!isArenaMode)}
            className={`p-3 rounded-xl transition-all duration-300 ${
              isArenaMode ? 'bg-yellow-500 text-black' : 'bg-gray-700 text-gray-300'
            }`}
          >
            <FaFire />
          </button>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-3 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300"
          >
            {isExpanded ? <FaCompress /> : <FaExpand />}
          </button>
        </div>
      </motion.div>

      {/* Main Arena Interface */}
      <motion.div
        variants={battleVariants}
        className="text-center mb-16 relative z-10"
      >
        <motion.h1
          className="text-7xl font-bold mb-6"
          animate={{
            textShadow: isArenaMode ? [
              "0 0 20px rgba(255, 215, 0, 0.8)",
              "0 0 40px rgba(255, 69, 0, 0.8)",
              "0 0 20px rgba(255, 215, 0, 0.8)"
            ] : "none"
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text flex items-center justify-center gap-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <FaTrophy className="text-yellow-500" />
            </motion.div>
            Battle Arena Chronicles
          </span>
        </motion.h1>
        
        <motion.p
          className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          variants={battleVariants}
        >
          Legendary battles fought in the digital realm. Each hackathon conquered, 
          each challenge overcome, forged in the fires of innovation and creativity.
        </motion.p>
      </motion.div>

      {/* Battle Statistics Dashboard */}
      <motion.div
        variants={battleVariants}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 relative z-10"
      >
        <div className="glass-card p-6 rounded-2xl border border-yellow-500/20 text-center">
          <div className="text-3xl font-bold text-yellow-400 mb-2">
            {hackathonBattles.length}
          </div>
          <div className="text-gray-300 text-sm">Battles Engaged</div>
        </div>
        <div className="glass-card p-6 rounded-2xl border border-orange-500/20 text-center">
          <div className="text-3xl font-bold text-orange-400 mb-2">
            {hackathonBattles.reduce((acc, battle) => acc + battle.xpGained, 0)}
          </div>
          <div className="text-gray-300 text-sm">Total XP</div>
        </div>
        <div className="glass-card p-6 rounded-2xl border border-red-500/20 text-center">
          <div className="text-3xl font-bold text-red-400 mb-2">
            <span>60</span>
          </div>
          <div className="text-gray-300 text-sm">Hours Of Code</div>
        </div>
        <div className="glass-card p-6 rounded-2xl border border-purple-500/20 text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">
            {new Set(hackathonBattles.flatMap(b => b.skillsUnlocked)).size}
          </div>
          <div className="text-gray-300 text-sm">Skills Mastered</div>
        </div>
      </motion.div>

      {/* Battle Cards Arena */}
      <motion.div
        variants={containerVariants}
        className="space-y-8 relative z-10"
      >
        {hackathonBattles.map((battle, index) => (
          <motion.div
            key={battle.id}
            variants={battleVariants}
            className="group relative overflow-hidden glass-card rounded-3xl border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-500 cursor-pointer"
            whileHover={{ 
              scale: 1.02, 
              y: -10,
              rotateY: 2,
              boxShadow: "0 30px 60px rgba(255, 215, 0, 0.2)"
            }}
            onClick={() => setSelectedBattle(selectedBattle === battle ? null : battle)}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Battle Aura Effect */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${battle.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
              animate={{
                background: [
                  `linear-gradient(45deg, ${battle.gradient.split(' ')[1]}, ${battle.gradient.split(' ')[3]})`,
                  `linear-gradient(90deg, ${battle.gradient.split(' ')[3]}, ${battle.gradient.split(' ')[1]})`,
                  `linear-gradient(135deg, ${battle.gradient.split(' ')[1]}, ${battle.gradient.split(' ')[3]})`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="relative z-10 p-8">
              {/* Battle Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  {/* Rank Badge */}
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${getRankColor(battle.rank)} flex items-center justify-center shadow-lg`}
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(255, 215, 0, 0.5)",
                        "0 0 40px rgba(255, 215, 0, 0.8)",
                        "0 0 20px rgba(255, 215, 0, 0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    <motion.div
                      className="text-white text-2xl"
                      animate={{ rotate: isArenaMode ? 360 : 0 }}
                      transition={{ duration: 4, repeat: isArenaMode ? Infinity : 0, ease: "linear" }}
                    >
                      {getRankIcon(battle.rank)}
                    </motion.div>
                  </motion.div>

                  {/* Battle Logo */}
                  <motion.div
                    className="w-20 h-20 rounded-full overflow-hidden border-4 border-white flex items-center justify-center shadow-lg bg-white"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {battle.logo ? (
                      <img
                        src={battle.logo}
                        alt={`${battle.name} Logo`}
                        className="w-16 h-16 object-contain"
                      />
                    ) : (
                      <div className={`text-3xl bg-gradient-to-r ${battle.gradient} bg-clip-text text-transparent`}>
                        {battle.icon}
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Battle Stats Preview */}
                <div className="text-right">
                  <div className="text-2xl font-bold text-white mb-1">{battle.rank}</div>
                  <div className="text-sm text-gray-400">{battle.difficulty}</div>
                  <motion.div
                    className="text-xs text-yellow-400 font-semibold"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    +{battle.xpGained} XP
                  </motion.div>
                </div>
              </div>

              {/* Battle Info */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-white mb-2">{battle.battleName}</h2>
                  <h3 className="text-xl text-gray-300 mb-4">{battle.name}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{battle.description}</p>

                  {/* Tech Arsenal */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {battle.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-4 py-2 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 text-yellow-200 rounded-full text-sm border border-yellow-500/30 backdrop-blur-sm"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "rgba(255, 215, 0, 0.2)",
                          borderColor: "rgba(255, 215, 0, 0.8)"
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: techIndex * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Battle Achievements */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-green-400">
                      <FaTrophy />
                      <span>{battle.placement}</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-400">
                      <FaUsers />
                      <span>{battle.participants} Warriors</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-400">
                      <FaCode />
                      <span>{battle.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Battle Stats Radar */}
                <div className="glass-card p-6 rounded-2xl border border-yellow-500/20">
                  <h4 className="text-lg font-bold text-yellow-400 mb-4 text-center">Battle Stats</h4>
                  <div className="space-y-3">
                    {Object.entries(battle.battleStats).map(([stat, value]) => (
                      <div key={stat} className="flex items-center justify-between">
                        <span className="text-gray-300 capitalize">{stat}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-700 rounded-full h-2">
                            <motion.div
                              className="h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
                              initial={{ width: 0 }}
                              animate={{ width: `${value}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                          </div>
                          <span className="text-yellow-400 font-bold text-sm">{value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Holographic Border */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              animate={{
                background: [
                  "linear-gradient(45deg, transparent, rgba(255, 215, 0, 0.3), transparent)",
                  "linear-gradient(90deg, transparent, rgba(255, 69, 0, 0.3), transparent)",
                  "linear-gradient(135deg, transparent, rgba(255, 215, 0, 0.3), transparent)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Expanded Battle Details */}
      <AnimatePresence>
        {selectedBattle && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex items-center justify-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBattle(null)}
          >
            <motion.div
              className="max-w-4xl w-full glass-card rounded-3xl p-8 border border-yellow-500/20"
              initial={{ scale: 0.8, rotateY: -90 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.8, rotateY: 90 }}
              onClick={(e) => e.stopPropagation()}
              style={{ transformStyle: "preserve-3d" }}
            >
              <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center">
                {selectedBattle.battleName}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Skills Unlocked</h3>
                  <div className="space-y-2">
                    {selectedBattle.skillsUnlocked.map((skill, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3 p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/30"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <FaStar className="text-yellow-400" />
                        <span className="text-gray-300">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Battle Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Achievement:</span>
                      <span className="text-yellow-400 font-semibold">{selectedBattle.achievement}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Year:</span>
                      <span className="text-white">{selectedBattle.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white">{selectedBattle.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Team Size:</span>
                      <span className="text-white">{selectedBattle.teamSize} Warriors</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed Arena Cursor */}
      <motion.div
        className="fixed w-8 h-8 bg-yellow-400/30 rounded-full pointer-events-none z-30 mix-blend-difference"
        animate={{
          x: mousePosition.x * (windowSize.width / 100) - 16,
          y: mousePosition.y * (windowSize.height / 100) - 16,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <motion.div
          className="w-full h-full border-2 border-yellow-400 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 bg-yellow-400/50 rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Hackathon;
