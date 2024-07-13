'use client'
import React, { useState, useRef, useEffect } from 'react';
import ScrollPercent from './ScrollPercent';

function Headlines({ setHeadlinesHeight }) {
  const updates = [
    'Think India Website Welcomes You',
    'Think India Updates',
    'Recent Updates',
    'Created with love by Aashish Kumar Singh',
    'Thank you for visiting this website',
  ];

  const [isHovered, setIsHovered] = useState(false);
  const headlineRef = useRef(null);

  useEffect(() => {
    if (headlineRef.current) {
      setHeadlinesHeight(headlineRef.current.offsetHeight);
    }
  }, [setHeadlinesHeight]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div ref={headlineRef} className=" select-none">
      <ScrollPercent className="z-[50]" />
      <div
        className="bg-slate-900 text-white p-4 shadow-md top-navbar overflow-hidden"
        style={{ zIndex: '50' }}
      >
        <ul
          className="flex justify-around space-x-4 gap-7 relative z-[100]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {updates.map((update, index) => (
            <li
              key={index}
              className={`cursor-pointer hover:text-blue-300 underline-offset-8 transition border-b-orange-300 border-l-4 order-red-300 p-1 text-nowrap morph ${
                isHovered ? 'morph-paused' : ''
              } text-start pl-4 border-rose-500`}
            >
              {update}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Headlines;
