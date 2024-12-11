"use client"
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Importing icons
import { motion } from 'framer-motion'; // Importing motion from Framer Motion

const SocialLinks = () => {
  return (
    <>

    <div className="flex justify-center items-center text-4xl font-bold p-7">Contact Me</div>

    <div className="footer flex justify-center items-center text-lg text-slate-300 p-3">atharva.sawant1919@gmail.com</div>
    <div className="flex justify-center space-x-8 mt-8">
      {/* LinkedIn Icon */}
      <motion.a
        href="https://www.linkedin.com/in/atharva-sawant-46aab12ab/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="text-white text-3xl"
      >
        <FaLinkedin />
      </motion.a>

      {/* GitHub Icon */}
      <motion.a
        href="https://github.com/Atharvasawant09"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="text-white text-3xl"
      >
        <FaGithub />
      </motion.a>

    </div>
    <div className="flex justify-center items-center text-4xl font-bold p-4 mt-28">Get in touch</div>
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <img className='w-[80%] h-auto ml-8 rounded-xl' src="/git.gif" alt="contact" />
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-stone-700 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 mr-7">
            <h2 className="text-white text-2xl font-semibold title-font mb-5">Get In Touch</h2>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-black"></label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                placeholder='Name'
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600"></label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                placeholder='Email'
              />
            </div>
            <div className="relative mb-4">
              <textarea 
                id="message" 
                name="message" 
                className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                placeholder='Message'
                rows="5" 
              />
            </div>
            <button className="text-white bg-neutral-500 border-0 py-2 px-8 focus:outline-none hover:bg-neutral-400 rounded text-lg font-semibold">
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>

    <div className="footer flex justify-center items-center text-lg text-slate-300 p-7">©Atharva Sawant 2024 . All rights reserved</div>
    </>
  );
};

export default SocialLinks;
