'use client'
import Head from "next/head"
import { useEffect, useState } from "react";
import AOS from 'aos';
import Headlines from "./Components/headlines"
import ScrollPercent from "./Components/ScrollPercent"
import Navbar from "./Components/navbar"
import ThinkIndiaInfo from "./Components/AboutThinkIndia"
import ThinkIndiaLogo from "./Components/ThinkIndiaLogo"
import Hero_section from "./Components/Hero_section"
import Team from "./Components/Team"
import Footer from "./Components/footer"
import Contact from "./Components/contact"
import Aos from "aos";
export default function Home() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [headlinesHeight, setHeadlinesHeight] = useState(0);
  const total_height1 = navbarHeight + headlinesHeight;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className='w-full display-block block sticky top-0 z-[100]'>
        <Headlines setHeadlinesHeight={setHeadlinesHeight} />
        <ScrollPercent />
        <Navbar setNavbarHeight={setNavbarHeight} top_margin={headlinesHeight} />
      </div>
      <ThinkIndiaLogo navbarHeight={navbarHeight} headlinesHeight={headlinesHeight} />
      <Hero_section total_height={total_height1} />
      <ThinkIndiaInfo />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
