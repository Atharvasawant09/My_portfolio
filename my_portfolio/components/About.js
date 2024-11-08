import React from 'react';

const About = () => {
  return (
    <div className="p-8">
      <h1 className='text-4xl font-bold text-white text-center'>About Me</h1>
      <p className='text-lg text-white pl-80 pr-80 pt-9'>
        Hello! I'm Atharva Sawant, a third-year B.Tech Computer Science student and a dedicated full-stack developer with a strong focus on crafting efficient and engaging web applications. With experience in modern web development technologies such as React, Next.js, Node.js, Express.js, and MongoDB, I thrive on building solutions that are both user-friendly and scalable.
      </p>
      <p className='text-lg text-white pl-80 pr-80 pt-9'>
        I am always eager to learn new technologies, solve complex problems, and bring innovative ideas to life. My projects reflect my commitment to quality and a passion for technology-driven solutions that elevate user experiences. Whether it's backend logic or frontend interfaces, I aim to deliver well-rounded, high-performance applications.
      </p>
      
      {/* Education Section */}
      <div className="flex items-center justify-start mt-12">
        {/* Circular Frame for College Logo */}
        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white flex items-center justify-center mr-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaH45lGxuFnmEQivkUlVVaUJN36f6S8-r88w&s" // Replace with your college logo path
            alt="Symbiosis Institute of Technology Logo"
            width={89} // Adjust width to make the logo smaller
            height={89} // Adjust height to make the logo smaller
          />
        </div>
        <div className="text-white flex flex-col justify-start">
          <h2 className="text-xl font-semibold">Symbiosis Institute of Technology</h2>
          <div className="flex justify-between">
            <p className="text-lg">Bachelor's Degree in Computer Science and Engineering</p>
          </div>
        </div>
            <div className="text-lg mb-8 flex justify-end ml-[49rem]">2022 - 2026</div>
      </div>
    </div>
  );
}

export default About;
