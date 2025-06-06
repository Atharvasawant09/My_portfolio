"use client";
import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaPython, FaGitAlt, FaAws, FaPlay, FaPause, FaCuttlefish, FaJava } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress, SiTailwindcss, SiNextdotjs, SiPostman, SiCplusplus, SiFigma, SiFlask, SiTensorflow, SiPytorch } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';

const skills = [
  // Programming Languages
  { name: 'Python', icon: <FaPython />, color: '#3776AB', level: 88, category: 'Languages', description: 'Data Science & Backend', experience: '3 years', projects: 15 },
  { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', level: 90, category: 'Languages', description: 'Full-Stack Development', experience: '4 years', projects: 25 },
  { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26', level: 90, category: 'Languages', description: 'Web Structure & Markup', experience: '4 years', projects: 30 },
  { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6', level: 85, category: 'Languages', description: 'Styling & Animation', experience: '4 years', projects: 28 },
  { name: 'C++', icon: <SiCplusplus />, color: '#00599C', level: 82, category: 'Languages', description: 'Algorithms & DSA', experience: '2 years', projects: 12 },
  { name: 'C', icon: <FaCuttlefish />, color: '#00599C', level: 75, category: 'Languages', description: 'System Programming', experience: '1.5 years', projects: 8 },
  { name: 'Java', icon: <FaJava />, color: '#007396', level: 75, category: 'Languages', description: 'Object-Oriented Programming', experience: '2 years', projects: 10 },
  
  // Frontend Frameworks
  { name: 'React', icon: <FaReact />, color: '#61DAFB', level: 92, category: 'Frontend', description: 'Component-based UI', experience: '3 years', projects: 20 },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000', level: 90, category: 'Frontend', description: 'Full-Stack React', experience: '2 years', projects: 12 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38B2AC', level: 90, category: 'Frontend', description: 'Utility-first CSS', experience: '2 years', projects: 18 },
  
  // Backend & APIs
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933', level: 87, category: 'Backend', description: 'Server-side JavaScript', experience: '3 years', projects: 18 },
  { name: 'Express', icon: <SiExpress />, color: '#000000', level: 85, category: 'Backend', description: 'Web Framework', experience: '3 years', projects: 16 },
  { name: 'Flask', icon: <SiFlask />, color: '#000000', level: 80, category: 'Backend', description: 'Python Web Framework', experience: '2 years', projects: 8 },
  
  // Databases
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', level: 85, category: 'Database', description: 'NoSQL Database', experience: '2 years', projects: 14 },
  { name: 'MySQL', icon: <SiMysql />, color: '#00758F', level: 78, category: 'Database', description: 'Relational Database', experience: '2 years', projects: 10 },
  
  // AI/ML
  { name: 'TensorFlow', icon: <SiTensorflow />, color: '#FF6F00', level: 75, category: 'AI/ML', description: 'Deep Learning', experience: '1.5 years', projects: 8 },
  { name: 'PyTorch', icon: <SiPytorch />, color: '#EE4C2C', level: 72, category: 'AI/ML', description: 'Neural Networks', experience: '1 year', projects: 6 },
  
  // Tools & Cloud
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032', level: 90, category: 'Tools', description: 'Version Control', experience: '4 years', projects: 35 },
  { name: 'Postman', icon: <SiPostman />, color: '#FF6C37', level: 85, category: 'Tools', description: 'API Testing', experience: '2 years', projects: 20 },
  { name: 'AWS', icon: <FaAws />, color: '#FF9900', level: 75, category: 'Cloud', description: 'Cloud Services', experience: '2 years', projects: 10 },
  { name: 'Figma', icon: <SiFigma />, color: '#F24E1E', level: 78, category: 'Design', description: 'UI/UX Design', experience: '2 years', projects: 15 }
];

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [viewMode, setViewMode] = useState('constellation');
  const [isPlaying, setIsPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 }); // Default fallback values
  const [isMounted, setIsMounted] = useState(false);

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
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const getLayoutStyle = (index) => {
    const total = skills.length;
    switch (viewMode) {
      case 'constellation':
        const angle = (index / total) * 2 * Math.PI;
        const radius = 180 + (index % 4) * 60;
        return {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          rotate: angle * (180 / Math.PI)
        };
      case 'matrix':
        const cols = 6;
        const row = Math.floor(index / cols);
        const col = index % cols;
        return {
          x: col * 200 - 500,
          y: row * 150 - 200,
          rotate: 0
        };
      case 'spiral':
        const spiralAngle = index * 0.6;
        const spiralRadius = index * 20;
        return {
          x: Math.cos(spiralAngle) * spiralRadius,
          y: Math.sin(spiralAngle) * spiralRadius,
          rotate: spiralAngle * (180 / Math.PI)
        };
      case 'neural':
        const neuralAngle = (index / total) * 2 * Math.PI;
        const layers = 4;
        const layer = index % layers;
        const neuralRadius = 120 + layer * 80;
        return {
          x: Math.cos(neuralAngle + layer) * neuralRadius,
          y: Math.sin(neuralAngle + layer) * neuralRadius,
          rotate: 0
        };
      case 'galaxy':
        const galaxyAngle = (index / total) * 4 * Math.PI;
        const galaxyRadius = 100 + index * 15;
        return {
          x: Math.cos(galaxyAngle) * galaxyRadius,
          y: Math.sin(galaxyAngle) * galaxyRadius,
          rotate: galaxyAngle * (180 / Math.PI)
        };
      default:
        return { x: 0, y: 0, rotate: 0 };
    }
  };

  // Don't render until mounted to avoid hydration issues
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading Neural Network...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        {/* Fixed floating particles using windowSize state */}
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            animate={{
              x: [Math.random() * windowSize.width, Math.random() * windowSize.width],
              y: [Math.random() * windowSize.height, Math.random() * windowSize.height],
            }}
            transition={{
              duration: Math.random() * 25 + 15,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      {/* Fixed Control Panel - Top Right */}
      <div className="fixed top-20 right-8 z-50 bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-blue-500/20">
        <div className="flex flex-col gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`p-3 rounded-xl transition-all duration-300 ${
              isPlaying ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
            }`}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          
          <div className="flex flex-col gap-2">
            {['constellation', 'matrix', 'spiral', 'neural', 'galaxy'].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  viewMode === mode 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Network Stats - Bottom Left */}
      <div className="fixed bottom-8 left-8 z-50 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20">
        <h3 className="text-lg font-bold text-white mb-4">Network Stats</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Total Skills:</span>
            <span className="text-blue-400 font-semibold">{skills.length}</span>
          </div>
          {/* <div className="flex justify-between">
            <span className="text-gray-400">Avg Level:</span>
            <span className="text-purple-400 font-semibold">
              {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
            </span>
          </div> */}
          {/* <div className="flex justify-between">
            <span className="text-gray-400">Total Projects:</span>
            <span className="text-cyan-400 font-semibold">
              {skills.reduce((acc, skill) => acc + skill.projects, 0)}
            </span>
          </div> */}
          <div className="flex justify-between">
            <span className="text-gray-400">Mode:</span>
            <span className="text-green-400 font-semibold capitalize">{viewMode}</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <motion.div 
        className="relative z-10 text-center pt-20 pb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-7xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text"
          animate={{ 
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Neural Skills Network
        </motion.h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore my technical expertise through an interactive neural network visualization
        </p>
      </motion.div>

      {/* Skills Network */}
      <div className="relative flex items-center justify-center min-h-[700px]">
        <motion.div
          className="relative w-full h-full flex items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {skills.map((skill, i) => 
              skills.slice(i + 1).map((otherSkill, j) => {
                const pos1 = getLayoutStyle(i);
                const pos2 = getLayoutStyle(i + j + 1);
                const distance = Math.sqrt(Math.pow(pos2.x - pos1.x, 2) + Math.pow(pos2.y - pos1.y, 2));
                
                if (distance < 250) {
                  return (
                    <motion.line
                      key={`${i}-${i + j + 1}`}
                      x1={pos1.x + 600}
                      y1={pos1.y + 350}
                      x2={pos2.x + 600}
                      y2={pos2.y + 350}
                      stroke="url(#gradient)"
                      strokeWidth="1"
                      opacity={0.4}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: isPlaying ? 1 : 0.6 }}
                      transition={{ duration: 2, repeat: isPlaying ? Infinity : 0 }}
                    />
                  );
                }
                return null;
              })
            )}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Skill Nodes */}
          {skills.map((skill, index) => {
            const layout = getLayoutStyle(index);
            return (
              <motion.div
                key={skill.name}
                className="absolute cursor-pointer"
                animate={{
                  x: layout.x,
                  y: layout.y,
                  rotate: layout.rotate,
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 20,
                  duration: 1.2 
                }}
                whileHover={{ 
                  scale: 1.6, 
                  rotate: layout.rotate + 360,
                  transition: { duration: 0.3 }
                }}
                onClick={() => setSelectedSkill(selectedSkill === skill ? null : skill)}
              >
                <motion.div
                  className="relative w-16 h-16 rounded-full flex items-center justify-center border-2 border-white/20 backdrop-blur-md"
                  style={{
                    background: `radial-gradient(circle, ${skill.color}50, ${skill.color}15)`,
                    boxShadow: `0 0 25px ${skill.color}70`
                  }}
                  animate={{
                    boxShadow: isPlaying 
                      ? [`0 0 25px ${skill.color}70`, `0 0 50px ${skill.color}90`, `0 0 25px ${skill.color}70`]
                      : `0 0 25px ${skill.color}70`
                  }}
                  transition={{ duration: 2, repeat: isPlaying ? Infinity : 0 }}
                >
                  <motion.div
                    className="text-2xl"
                    style={{ color: skill.color }}
                    animate={{ rotate: isPlaying ? 360 : 0 }}
                    transition={{ duration: 4, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
                  >
                    {skill.icon}
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 rounded-full border-2"
                    style={{ borderColor: skill.color }}
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.8, 0, 0.8]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.15
                    }}
                  />

                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                    <div className="text-xs font-bold text-white bg-black/60 px-2 py-1 rounded-full backdrop-blur-sm">
                      {skill.level}%
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="text-xs font-semibold text-white whitespace-nowrap bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                    {skill.name}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Skill Detail Panel */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex items-center justify-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              className="bg-black/50 backdrop-blur-xl p-8 rounded-3xl border border-blue-500/20 max-w-2xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-6 mb-8">
                <motion.div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: `radial-gradient(circle, ${selectedSkill.color}40, ${selectedSkill.color}10)`,
                    boxShadow: `0 0 30px ${selectedSkill.color}60`
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <div className="text-4xl" style={{ color: selectedSkill.color }}>
                    {selectedSkill.icon}
                  </div>
                </motion.div>
                
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">{selectedSkill.name}</h2>
                  <p className="text-xl text-gray-300">{selectedSkill.description}</p>
                  <p className="text-sm text-gray-400 mt-1">Category: {selectedSkill.category}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{selectedSkill.level}%</div>
                  <div className="text-gray-400">Proficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{selectedSkill.experience}</div>
                  <div className="text-gray-400">Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{selectedSkill.projects}</div>
                  <div className="text-gray-400">Projects</div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Skill Level</span>
                  <span>{selectedSkill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ 
                      background: `linear-gradient(90deg, ${selectedSkill.color}, ${selectedSkill.color}80)` 
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedSkill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </div>

              <button
                onClick={() => setSelectedSkill(null)}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed Mouse Follower */}
      <motion.div
        className="fixed w-4 h-4 bg-blue-400/50 rounded-full pointer-events-none z-30 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </div>
  );
};

export default SkillsSection;
