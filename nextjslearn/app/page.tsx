'use client'
import { useEffect } from "react";
import React from "react";


export default function Home() {
  
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="home-body">
        <div style={{marginTop : '5%',marginLeft : '5%',display : 'flex' ,flexDirection : 'column'}}>
        <span>Hey, I'm Yadhu!!</span>
        <span>I'm a Frontend Engineer.</span>
        <div className='home-aboutme'>
          <p>
          I am a passionate React Developer with 3 years of experience in building dynamic web applications. My expertise includes developing CRM systems and various front-end projects. I excel in React.js, JavaScript (ES6+), HTML, and CSS, creating responsive and user-friendly interfaces. I enjoy collaborating with cross-functional teams to deliver high-quality software solutions. My goal is to continue growing as a developer and contributing to innovative projects.
          </p>
        </div>
        </div>
        <div></div>
      </div>
    </main>
  );
}
