'use client'
import React, { useState, useEffect, useRef } from 'react';
import ThinkIndiaLogo from './ThinkIndiaLogo';

function Navbar({ setNavbarHeight }) {
  const navRef = useRef(null);
  
  useEffect(() => {
    if (navRef.current) {
      setNavbarHeight(navRef.current.offsetHeight);
    }
  }, [setNavbarHeight]);

  const navlink = ['About Us', 'Team', 'Updates'];

  return (
    <div ref={navRef} className="bg-slate-500 items-center justify-between text-black font-bold text-xl lg:text-2xl xl:text-3xl p-4 sm:p-4 w-full transition-all ease-in-out bg-opacity-20 backdrop-blur-xl flex z-[50]">
      <div className="text-white border-l-4 pl-3 border-rose-600">
        <h2 className="animate-pulse">
          <span className="text-nowrap">
            <span className='moving'>Namaste User</span><br />
            Think India Welcomes You!
          </span>
        </h2>
      </div>
      <Button />
      <div className="lg:flex lg:items-center lg:justify-end lg:w-full hidden lg:text-2xl lg:p-4">
        <div className="flex items-center space-x-6 text-gray-400 underline-offset-4">
          {navlink.map((link, index) => (
            <a href={`#${link}`} key={index} className="hover:text-blue-500">
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

function Button() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  const navlink = ['About Us', 'Team', 'Updates'];

  return (
    <>
      <button
        onClick={toggleMenu}
        className="animate-pulse lg:hidden border focus:ring-[2.5px] focus:outline-none font-medium rounded-lg text-lg px-2.5 py-2.5 text-center items-center focus:ring-gray-500 flex justify-center bg-gray-800 border-gray-900 text-white hover:bg-gray-700 z-[106] mr-2"
        aria-label="Open Menu"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 20 20"
          aria-hidden="true"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-2/3 bg-slate-800 text-white p-4 z-[150] transform transition-all duration-300"
          style={{ width: '80vw', height: '100vh' }}
        >
          <button onClick={toggleMenu}>
            <Button />
          </button>
          <h2 className="text-blue-500 border-b-4 text-center font-bold border-rose-600">
            Think India <br />
            N.I.T. Patna
          </h2>
          <ul className="space-y-4 mt-12" >
            
            {navlink.map((link, index) => (
            <li className='cursor-pointer border-l-4 pl-4 border-sky-700 hover:text-blue-300' key={index}>
            <a href={`#${link}`} className="hover:text-blue-500">
              {link}
            </a>
            </li>
          ))}
            

          </ul>
        </div>
      )}
    </>
  );
}
