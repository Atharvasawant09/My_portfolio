"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { FaRocket, FaFilter, FaCode, FaBrain, FaGlobe } from 'react-icons/fa';

const projects = [
  {
    name: 'Glacier Tide - ML Sea-Level Analysis',
    description: 'Built a 3D interactive globe with Three.js for sea-level data visualization, integrated ML models with Flask, and implemented secure authentication with SendGrid.',
    githubUrl: 'https://github.com/Atharvasawant09/GlacierTide.git',
    liveUrl: 'https://glacier-tide.vercel.app/',
    imageSrc: './glaciertide.png',
    techStack: ['React.js', 'Three.js', 'Node.js', 'MongoDB', 'Flask', 'SendGrid'],
    featured: true,
    category: 'AI/ML',
    year: '2025',
    status: 'live'
  },
  {
    name: 'The Nameless Patron - Crowdfunding Platform',
    description: 'Constructed and deployed a web-first crowdfunding platform with Next.js and Tailwind CSS, integrated Razorpay for secure payments, reducing transaction failures by 20%.',
    githubUrl: 'https://github.com/Atharvasawant09/TheNamelessPatron.git',
    liveUrl: 'https://thenamelesspatron.vercel.app/',
    imageSrc: './port1.png',
    techStack: ['Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'NextAuth', 'MongoDB', 'Razorpay'],
    category: 'Full Stack',
    year: '2024',
    status: 'live'
  },
  {
    name: 'Fresh Fold - Laundry Management System',
    description: 'Designed a responsive laundry management system with React.js and Tailwind CSS, reducing user task completion time by 20% with secure RESTful APIs.',
    githubUrl: 'https://github.com/Atharvasawant09/FreshFold.git',
    liveUrl: 'https://fresh-fold.vercel.app/',
    imageSrc: './freshfold.png',
    techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
    category: 'Full Stack',
    year: '2024',
    status: 'live'
  },
  {
    name: 'CodeDrop - Secure Code Sharing',
    description: 'CodeDrop allows you to easily paste and share code snippets with others. Set expiration times for automatic deletion and ensure secure, temporary sharing.',
    githubUrl: 'https://github.com/Atharvasawant09/CodeDrop.git',
    liveUrl: 'https://codedrop.vercel.app/',
    imageSrc: './port2.png',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    category: 'Web App',
    year: '2024',
    status: 'live'
  },
];

const categories = ['All', 'AI/ML', 'Full Stack', 'Web App'];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProjects = React.useMemo(() => {
    if (selectedCategory === 'All') {
      return projects;
    }
    return projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'AI/ML': return <FaBrain />;
      case 'Full Stack': return <FaCode />;
      case 'Web App': return <FaGlobe />;
      default: return <FaFilter />;
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="px-4 md:px-12 lg:px-24 py-16 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-cyan-900/5 rounded-3xl"></div>
      
      <motion.div 
        variants={titleVariants}
        className="text-center mb-16"
      >
        <motion.h1 
          className="text-6xl font-bold mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text flex items-center justify-center gap-4">
            <FaRocket className="text-purple-500" />
            Featured Projects
          </span>
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-300 max-w-3xl mx-auto"
          variants={titleVariants}
        >
          Showcasing innovative solutions built with modern technologies, from AI-powered applications to full-stack web platforms.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={titleVariants}
        className="flex justify-center mb-12"
      >
        <div className="glass-card p-2 rounded-2xl border border-blue-500/20">
          <div className="flex flex-wrap justify-center space-x-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {getCategoryIcon(category)}
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div 
        variants={titleVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
      >
        <div className="glass-card p-6 rounded-2xl border border-blue-500/20 text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">
            {selectedCategory === 'All' ? projects.length : filteredProjects.length}
          </div>
          <div className="text-gray-300">
            {selectedCategory === 'All' ? 'Total Projects' : `${selectedCategory} Projects`}
          </div>
        </div>
        <div className="glass-card p-6 rounded-2xl border border-purple-500/20 text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">
            {filteredProjects.filter(p => 
              p.techStack.some(tech => tech.includes('React') || tech.includes('Next'))
            ).length}
          </div>
          <div className="text-gray-300">React/Next.js</div>
        </div>
        <div className="glass-card p-6 rounded-2xl border border-cyan-500/20 text-center">
          <div className="text-3xl font-bold text-cyan-400 mb-2">
            {filteredProjects.filter(p => p.status === 'live').length}
          </div>
          <div className="text-gray-300">Live Projects</div>
        </div>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
        key={selectedCategory}
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard key={`${selectedCategory}-${project.name}`} project={project} index={index} />
          ))
        ) : (
          <motion.div 
            className="col-span-full text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl text-gray-600 mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </motion.div>
        )}
      </motion.div>

      <motion.div 
        className="text-center mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="glass-card p-8 rounded-3xl border border-purple-500/20 max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-4">
            Interested in Collaborating?
          </h3>
          <p className="text-gray-300 mb-8 text-lg">
            I&apos;m always excited to work on innovative projects. Let&apos;s build something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://github.com/Atharvasawant09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-semibold text-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket />
              <span>View All Projects</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-blue-500 rounded-full text-blue-400 font-semibold text-lg hover:bg-blue-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get In Touch</span>
            </motion.a>
            </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsSection;
