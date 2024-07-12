'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logoImage from './ThinkIndiaLogo.jpg'; // Replace with actual image path

function ThinkIndiaLogo({ navbarHeight, headlinesHeight }) {
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsStuck(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navbarHeight, headlinesHeight]);

  return (
    <div className="hidden md:flex md:justify-center md:fixed md:top-0 md:w-full md:z-[100] md:bg-black">
      <Image
        src={logoImage}
        alt="Think India"
        className={`z-[100] transition-all absolute h-44 p-3 w-auto bg-black cursor-pointer`}
        style={{
          marginTop: `${navbarHeight}px`,
          borderRadius: "0 0 50% 50%",
          height: isStuck ? `${navbarHeight}px` : '', // Adjust sizes as needed
          marginTop:`${headlinesHeight}px`
        }}
      />
    </div>
  );
}

export default ThinkIndiaLogo;
