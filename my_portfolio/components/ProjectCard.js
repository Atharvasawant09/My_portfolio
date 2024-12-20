"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-stone-700 rounded-lg shadow-md p-4 flex flex-col justify-between h-full"
    >
      {/* Display Project Image */}
      {project.imageSrc && (
        <img
          src={project.imageSrc}
          alt={`${project.name} image`}
          className="w-full h-[22rem] object-cover rounded-lg mb-4"
        />
      )}
      <h2 className="text-xl font-semibold text-white">{project.name}</h2>
      <p className="text-stone-200 mb-4">{project.description}</p>
      <div className="flex justify-between mt-auto">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          View on GitHub
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          Live Demo
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
