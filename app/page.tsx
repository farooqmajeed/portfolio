'use client'
import Image from 'next/image'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Experience from './Components/Experience'
import Skills from './Components/skills'
import Carousal from './Components/Carousal'
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"


export default function Home() {
  return (
    <AnimatePresence>
      <div className="h-screen w-full bg-slate-800 text-white snap-y snap-mandatory z-0 overflow-x-hidden">
        <Header />
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>
      <section id="experience" className='snap-center'>
        <Experience />
      </section>
      <section id="skills" className='snap-start'>
        <Skills />
      </section>
      {/* <section id="skills" className=' flex snap-start'>
      <Carousal sequence={'01'} backColor="gray" headline='JavaScript' imgSrc='https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' />
          <Carousal sequence={'02'} backColor="#3D2B2B" headline="React" imgSrc='https://plus.unsplash.com/premium_photo-1674581215484-e6242a37c51e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' />
          <Carousal sequence={'03'} backColor="aqua-blue" headline='Firebase' imgSrc="https://images.unsplash.com/photo-1554047310-ab6170fc7b10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" />
          <Carousal sequence={'04'} backColor="#3D2B2B" headline='TypeScript' imgSrc="https://images.unsplash.com/photo-1579838333277-8b1b1f9d7856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
      </section> */}
      </div>
    </AnimatePresence>
  )
}
