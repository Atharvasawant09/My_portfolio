import React from 'react';

const Hackathon = () => {
  return (
    <>
      {/* Hackathon Section */}
      <div className="p-8 mt-24">
        <div className="bg-stone-700 p-7 rounded-lg min-w-48 h-auto shadow-stone-700 shadow-lg">
          <h1 className="text-4xl text-center font-semibold p-5">Hackathons</h1>

          {/* Foss Hack 2024 */}
          <div className="flex items-center mt-12 space-x-4">
            {/* Circular Frame for Logo */}
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white flex items-center justify-center">
              <img
                src="https://fossunited.org/files/Foss%20United%20Logo%20Black.svg"
                alt="FOSS United Logo"
                className="bg-white w-16 h-16"
              />
            </div>

            {/* Hackathon Details */}
            <div className="flex flex-grow items-center justify-between text-white">
              <div>
                <h2 className="text-xl font-semibold">Foss Hack 2024</h2>
                <p className="text-lg">Developed a web application that combined code sharing with broadcasting.</p>
              </div>
              <span className="text-lg whitespace-nowrap">2024</span>
            </div>
          </div>

          {/* Techvortex 2.0 */}
          <div className="flex items-center mt-12 space-x-4">
            {/* Circular Frame for Logo */}
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white flex items-center justify-center">
              <img
                src="./hack1.png"
                alt="Techvortex 2.0 Logo"
                className="bg-white w-16 h-16"
              />
            </div>

            {/* Hackathon Details */}
            <div className="flex flex-grow items-center justify-between text-white">
              <div>
                <h2 className="text-xl font-semibold">Techvortex 2.0</h2>
                <p className="text-lg">Developed a crowdfunding web application with seamless payment gateway.</p>
              </div>
              <span className="text-lg whitespace-nowrap">2024</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hackathon;
