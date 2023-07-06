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
      <div>
        
      </div>
    </article>
  )
}

export default ExperienceCard