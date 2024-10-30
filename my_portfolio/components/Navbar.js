import React from 'react'

const Navbar = () => {
  return (
    <>
    <div>
      <header className="text-stone-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
           
            <h1 className="ml-3 text-2xl text-white cursor-pointer">Atharva Sawant</h1>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 text-lg text-sky-400 font-semibold cursor-pointer hover:text-white">Home</a>
            <a className="mr-5 text-lg text-sky-400 font-semibold cursor-pointer hover:text-white">About</a>
            <a className="mr-5 text-lg text-sky-400 font-semibold cursor-pointer hover:text-white">Skills</a>
            <a className="mr-5 text-lg text-sky-400 font-semibold cursor-pointer hover:text-white">Projects</a>
            <a className="mr-5 text-lg text-sky-400 font-semibold cursor-pointer hover:text-white">Contact</a>
          </nav>
         
        </div>
      </header>
    </div>

    </>
  )
}

export default Navbar
