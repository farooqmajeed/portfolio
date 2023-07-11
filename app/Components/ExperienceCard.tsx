import React, { useEffect } from 'react';
import { motion, useAnimate, usePresence } from 'framer-motion'


type Props = {}

function ExperienceCard({ }: Props) {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate(scope.current,
          { opacity: [0, 1] },
          { duration: 0.5, delay: 0.2 }
        )
      }
    } else {
      const exitAnimation = async () => {
        await animate(scope.current,
          { opacity: [1, 0] },
          { duration: 0.5, delay: 0.2 }
        )
        safeToRemove()
      }
      exitAnimation()
    }
  }, [])

  return (
    <article className='flex flex-col rounded-lg  items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929]  p-10'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-18 h-18 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src="/createch.jpeg"
      />
      <div className='px-0 md:px-10 text-center'>
        <h4 className='text-3xl font-light'> Teamlead Frontend </h4>
        <p className='font-bold text-xl mt-1'> Createch Global Solutions</p>
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
      <p className=''> Started work ... - Ended...</p>
      <ul ref={scope} className='list-disc space-y-4 ml-5 text-lg'>
        <li> Summary points</li>
        <li> Summary points</li>
      </ul>
    </article>
  )
}

export default ExperienceCard