import React from 'react';

const Content = () => {
  return (
    <div className="flex flex-col items-center p-24">
      <div className="text-4xl text-white text-center mb-28">Elevating User Experiences, One Component at a Time.</div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-col text-white space-y-4">
          <div className="text-5xl flex flex-col justify-center items-center">Hi, I am</div>
          <div className="text-7xl flex flex-col justify-center items-center text-transparent bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text cursor-pointer">Atharva Sawant</div>
          <div className="text-3xl flex flex-col justify-center items-center">Full Stack Developer</div>
        </div>
        <img
          className="w-[37%] h-auto rounded-full"
          src="https://i.pinimg.com/originals/e8/a6/9a/e8a69aee737e7702b817bd0462e0489c.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default Content;
