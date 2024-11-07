"use client"; 
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaCuttlefish, FaNodeJs, FaReact, FaPython, FaJava, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress, SiTailwindcss, SiNextdotjs, SiPostman, SiCplusplus, SiMatlab } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
  { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
  { name: 'C', icon: <FaCuttlefish />, color: '#00599C' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'MySQL', icon: <SiMysql />, color: '#00758F' },
  { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
  { name: 'Java', icon: <FaJava />, color: '#007396' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'Express', icon: <SiExpress />, color: '#000000' },
  { name: 'Python', icon: <FaPython />, color: '#3776AB' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38B2AC' },
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
  { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
];


const SkillsSection = () => (
<>
<h1 className='text-4xl text-white flex justify-center items-center flex-col font-bold p-10'>Skills</h1>
  <div className="flex flex-wrap justify-center items-center gap-8 p-8">
    {skills.map((skill, index) => (
      <motion.div
        key={skill.name}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 500 }}
        className="flex flex-col items-center p-4 rounded-lg shadow-lg"
        style={{ backgroundColor: skill.color }}
      >
        <div className="text-6xl text-white">{skill.icon}</div>
        <p className="mt-2 text-white font-semibold text-lg">{skill.name}</p>
      </motion.div>
    ))}
  </div>
  </>
);

export default SkillsSection;
