// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 text-stone-600 body-font bg-zinc-900 z-50">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <h1 className="ml-3 text-2xl text-white cursor-pointer">Atharva Sawant</h1>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#content" className="mr-5 text-lg text-neutral-300 font-semibold cursor-pointer hover:text-white">Home</a>
            <a href="#about" className="mr-5 text-lg text-neutral-300 font-semibold cursor-pointer hover:text-white">About</a>
            <a href="#skills" className="mr-5 text-lg text-neutral-300 font-semibold cursor-pointer hover:text-white">Skills</a>
            <a href="#projects" className="mr-5 text-lg text-neutral-300 font-semibold cursor-pointer hover:text-white">Projects</a>
            <a href="#contact" className="mr-5 text-lg text-neutral-300 font-semibold cursor-pointer hover:text-white">Contact</a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
