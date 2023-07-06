import React from 'react';
import { motion } from 'framer-motion'


type Props = {}

function ExperienceCard({ }: Props) {
  return (
    <article className='flex'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src="/profile.jpeg"
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'> Teamlead Frontend at Createch Global Solutions</h4>
        <p className='font-bold text-2xl mt-1'> Createch Global Solutions</p>
        <div className='flex space-x-2 my-2 '>
          <img className='h-10 w-20 rounded-full'
          src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"
          />
          <img className='h-10 w-20 rounded-full'
          src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg"
          />
          <img className='h-10 w-20 rounded-full'
          src="https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg"
          />
          <img className='h-10 w-20 rounded-full'
          src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"
          />
          <img className='h-10 w-20 rounded-full'
         src="https://www.vectorlogo.zone/logos/gitlab/gitlab-ar21.svg"
          />



        </div>

      </div>
    </article>
  )
}

export default ExperienceCard