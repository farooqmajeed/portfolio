import React from 'react'
import { motion } from 'framer-motion';

type Props = {
    directionLeft?: boolean;
    skillImage?: string;
    experience?: string;
}

function Skill({ directionLeft, skillImage, experience }: Props) {
    return (
        <div className=' group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -499 : 499,
                    opacity: 0
                }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                src={skillImage}
                className='rounded-full border object-contain border-gray-500 w-24 h-24 md:w-24
                md:h-24 xl:w-24 xl:h-24  filter group-hover:grayscale transition duration-300 ease-in-out
                '
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-24 md:w-24 xl:w-24 xl:h-24 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>{experience}</p>
                </div>
            </div>
        </div>
    )
}

export default Skill