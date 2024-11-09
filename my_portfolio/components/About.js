import React from 'react';

const About = () => {
  return (
    <>
      {/* About Me Section */}
      <div className="bg-stone-700 p-7 rounded-lg min-w-48 h-auto ml-[12rem] mr-[12rem] shadow-stone-700 shadow-lg">
        <h1 className="text-4xl font-bold text-white text-center">About Me</h1>
        <p className="text-lg text-white pl-38 pr-38 pt-9">
          Hello! I&apos;m Atharva Sawant, a third-year B.Tech Computer Science student and a dedicated full-stack developer with a strong focus on crafting efficient and engaging web applications. With experience in modern web development technologies such as React, Next.js, Node.js, Express.js, and MongoDB, I thrive on building solutions that are both user-friendly and scalable.
        </p>
        <p className="text-lg text-white pl-38 pr-38 pt-9">
          I am always eager to learn new technologies, solve complex problems, and bring innovative ideas to life. My projects reflect my commitment to quality and a passion for technology-driven solutions that elevate user experiences. Whether it's backend logic or frontend interfaces, I aim to deliver well-rounded, high-performance applications.
        </p>
      </div>

      {/* Education Section */}
      <div className="bg-stone-700 p-7 m-8 rounded-lg min-w-48 h-auto shadow-stone-700 shadow-lg mt-24">
        <h1 className="text-4xl text-center font-semibold p-2">Education</h1>

        {/* College Education */}
        <div className="flex items-center mt-12 space-x-4">
          {/* Circular Frame for College Logo */}
          <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white flex items-center justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaH45lGxuFnmEQivkUlVVaUJN36f6S8-r88w&s"
              alt="Symbiosis Institute of Technology Logo"
              className="w-16 h-16"
            />
          </div>

          {/* College Details */}
          <div className="flex flex-grow items-center justify-between text-white">
            <div>
              <h2 className="text-xl font-semibold whitespace-nowrap">Symbiosis Institute of Technology</h2>
              <p className="text-lg whitespace-nowrap">Bachelor&apos;s Degree in Computer Science and Engineering</p>
            </div>
            <span className="text-lg whitespace-nowrap">2022 - 2026</span>
          </div>
        </div>

        {/* High School Education */}
        <div className="flex items-center mt-12 space-x-4">
          {/* Circular Frame for School Logo */}
          <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white flex items-center justify-center">
            <img
              src="https://teachmint.storage.googleapis.com/profile_images/469a52e5-0fa2-4b59-bbb4-f4ac0d686bb3.jpg"
              alt="Shri Shivaji Vidya Mandir Logo"
              
            />
          </div>

          {/* School Details */}
          <div className="flex flex-grow items-center justify-between text-white">
            <div>
              <h2 className="text-xl font-semibold whitespace-nowrap">Shri Shivaji Vidya Mandir</h2>
              <p className="text-lg whitespace-nowrap">HSC (Science)</p>
            </div>
            <span className="text-lg whitespace-nowrap">2020 - 2022</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
