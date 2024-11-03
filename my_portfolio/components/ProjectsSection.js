"use client";
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    name: 'The Nameless Patron',
    description: 'This website is a crowdfunding platform for creators, where you can support your favorite content creators.',
    githubUrl: 'https://github.com/Atharvasawant09/TheNamelessPatron.git',
    liveUrl: 'https://yourwebsite.com/project-one',
  },
  {
    name: 'CodeDrop',
    description: 'CodeDrop allows you to easily paste and share code snippets with others. Set expiration times for automatic deletion and ensure secure, temporary sharing.',
    githubUrl: 'https://github.com/Atharvasawant09/CodeDrop.git',
    liveUrl: 'https://codedrop.vercel.app/',
  },
  {
    name: 'Snake Game',
    description: 'This is a classic snake game made in JavaScript with all functionalities.',
    githubUrl: 'https://github.com/Atharvasawant09/Snake-game.git',
    liveUrl: 'https://atharvasawant09.github.io/Snake-game/',
  },
  {
    name: 'Todo List',
    description: 'This is a to-do list website made in React to record all day-to-day tasks.',
    githubUrl: 'https://github.com/Atharvasawant09/Todo-list-using-React.git',
    liveUrl: 'https://atharvasawant09.github.io/Todo-list-using-React/',
  },
  
];

const ProjectsSection = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl text-white text-center font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
