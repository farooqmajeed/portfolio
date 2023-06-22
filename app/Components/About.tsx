"use client"

import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({ }: Props) {
    return (
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.2}}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 1.2
                }}
                viewport={{ once: true }}
                src="/profile.jpeg"
                className=' mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[500px]'
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
                </h4>
                <p className='text-sm'>
                    A passionate developer who’s accumulated UI/UX skills from experience I have 5+ years of experience creating web and cross-platform mobile applications for start-ups and businesses. I have a bachelor's degree in computer science, a master's degree in data science from FAST National University of Computer and Emerging Sciences, Islamabad Campus. I enjoy holding training sessions, and planning get-togethers as a way of giving back to the community. I have a diverse skill set, am a self-starter, and am quick to pick things up. I want to work in a setting that pushes and encourages me to sharpen and enhance my abilities. ReactJS, NextJS, React Native,  Firebase, NodeJS, ExpressJS, and MongoDB are all tools I've used.
                </p>
            </div>
        </motion.div>
    )
}

export default About