'use client'
import Image from "next/image";
import Hero_Image from './Think_Image.png'
import React from 'react'

function Hero_section({total_height}) {

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="bg-gradient-to-br from-blue-500 to-orange-700 to-red-400 animate-color p-1" style={{ borderRadius: "0 0 50% 50%" }}> 
            <Image src={Hero_Image} alt="Think India" className={`h-auto w-full basis-1/2 p-3 rounded-2xl max-h-screen block roundd-xl aspect-square cursor-pointer`}
            style={{
                borderRadius: '0 0 50% 50%',
                zIndex: '10',
                height: `calc(100vh - ${total_height}px)`,
            }} 
            // style={{
            //     borderRadius:'0 0 50% 50%',
            //     zIndex:'10',
            // }}
             />
        </div>

      </div>
    </>
  )
}

export default Hero_section
