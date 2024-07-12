'use client'
import { useState, useEffect } from 'react';

function ScrollPercent() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full z-50 fixed top-0">
      <div className="h-[0.02rem] bg-black w-full">
        <div className="h-[0.09rem] bg-sky-500" style={{ width: `${scrollPercent}%` }}>
          {/* hello.................... */}
        </div>
      </div>
    </div>
  );
}

export default ScrollPercent;
