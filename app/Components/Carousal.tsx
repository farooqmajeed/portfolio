'use client'
import React, { useState } from 'react'
import { motion, useAnimate, usePresence } from 'framer-motion'
import Image from 'next/image';
import back from "../../public/back.svg";

type Props = {
    backColor?: string;
    imgSrc?: string;
    headline?: string;
    // setExpand?: void;
    // isExpand?: boolean;
    sequence?: string;
}


function Carousal({ imgSrc, backColor, headline, sequence }: Props) {
    const [isExpand, setExpand] = useState(false);

    return (
        <motion.div
            key={headline}
            // initial={{
            //     x: 500,
            //     opacity: 0,
            //     scale: 0.5,
            // }}
            transition={{
                layout: {
                    duration: 2,
                    type: "spring",
                    ease: "easeOut",
                    // width: "100%",
                }
            }}
            exit={{
                height: 0,
                opacity: 0,
            }}

            style={{ backgroundColor: backColor, width: isExpand ? "100vw" : "" }}
            className={`h-screen data-te-collapse-horizontal flex flex-col items-center space-y-7 flex-shrink-0  snap-center p-10 hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden ${isExpand ? 'min-w-full ease-in-out' : 'w-[200px] md:w-[300px] xl:w-[500px]'} overflow-x-hidden`}>

            {!isExpand && (
                <>
                <motion.h3
                                    initial={{
                                        x: -100,
                                        opacity: 0
                                    }}
                                    transition={{
                                        duration: 1
                                    }}
                                    whileInView={{ opacity: 1,x:0, y: 10 }}
                                    viewport={{ once: true }}
                                    layout="position"
                                    className='text-3xl font-mono font-semibold '>{sequence}</motion.h3>
                    <motion.h3
                     initial={{
                        x: -100,
                        opacity: 0
                    }}
                    transition={{
                        duration: 1
                    }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1,x:0, y: 10 }}
                        transition={{
                            duration: 1
                        }}
                        layout="position" className='text-3xl font-semibold font-mono'>
                        {headline}
                    </motion.h3>
                    <motion.img

                        initial={{
                            x: -300,
                            opacity: 1,
                            y: 150,
                        }}
                        transition={{
                            duration: 1
                        }}
                        animate={{
                            x: 200,
                            y: 200,
                            opacity: 1,
                            scale: 1,
                        }}
                        whileInView={{ opacity: 1, y: 150 }}
                        viewport={{ once: true }}
                        layout="position"
                        onClick={() => setExpand(!isExpand)}
                        className='h-48 w-48 absolute object-fill color-[black] rounded-xl' src={imgSrc} />
                    <motion.p
                        initial={{
                            x: -100,
                            opacity: 0,
                            y: 400
                        }}
                        transition={{
                            duration: 1
                        }}
                        whileInView={{ opacity: 1, x: 0, y: 400 }}
                        viewport={{ once: true }}
                        layout="position"
                        className='font-light text-2xl text-center'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique voluptatibus quae ex dolores at aspernatur vitae perferendis, ad in reprehenderit aliquam ipsam id, rem laboriosam rerum nobis quos officia minima.
                    </motion.p>

                </>
            )
            }
            {isExpand && (
                <>
                    <motion.div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">

                        <motion.div
                            initial={{
                                x: 500,
                                opacity: 0,
                                scale: 0.5,
                            }}
                            transition={{
                                layout: {
                                    duration: 2,
                                    type: "spring",
                                    ease: "easeOut",
                                }
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                scale: 1,
                            }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            layout="position"
                            className='h-screen w-full flex m-0'
                            style={{ backgroundColor: backColor }}
                        >
                            <Image
                                onClick={() => setExpand(!isExpand)}
                                priority
                                src={back}
                                alt="Follow us on Twitter"
                            />
                            <motion.div
                                initial={{
                                    x: -500,
                                    opacity: 0,
                                    scale: 0.5,
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    scale: 1,
                                }}
                                transition={{
                                    duration: 1
                                }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                // layout="position"
                                className='w-1/2 bg-slate-600 flex flex-col  items-center justify-evenly px-20'>
                                <motion.h3
                                    initial={{
                                        y: -100,
                                        opacity: 0
                                    }}
                                    transition={{
                                        layout: {
                                            duration: 2,
                                            type: "spring",
                                            ease: "easeOut",
                                        }
                                    }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    layout="position"
                                    className='text-3xl font-mono font-semibold '>{sequence}</motion.h3>
                                <motion.h3
                                    initial={{
                                        y: -100,
                                        opacity: 0
                                    }}
                                    transition={{
                                        layout: {
                                            duration: 2,
                                            type: "spring",
                                            ease: "easeOut",
                                        }
                                    }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    layout="position"
                                    className='text-3xl font-semibold font-mono'>
                                    {headline} { ' '}
                                    Lorem ipsum dolor
                                </motion.h3>
                                <motion.p
                                    initial={{
                                        y: -100,
                                        opacity: 0
                                    }}
                                    transition={{
                                        layout: {
                                            duration: 2,
                                            type: "spring",
                                            ease: "easeOut",
                                        }
                                    }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    layout="position"
                                    className='font-light text-lg text-center'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique voluptatibus quae ex dolores at aspernatur vitae perferendis, ad in reprehenderit aliquam ipsam id, rem laboriosam rerum nobis quos officia minima.
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique voluptatibus quae ex dolores at aspernatur vitae perferendis, ad in reprehenderit aliquam ipsam id, rem laboriosam rerum nobis quos officia minima.
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique voluptatibus quae ex dolores at aspernatur vitae perferendis, ad in reprehenderit aliquam ipsam id, rem laboriosam rerum nobis quos officia minima.
                                </motion.p>
                            </motion.div>
                            <motion.div
                                initial={{
                                    x: 500,
                                    opacity: 0,
                                    scale: 0.5,
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    scale: 1,
                                }}
                                transition={{
                                    duration: 1
                                }}
                                whileInView={{ opacity: 1, x: 0, }}
                                viewport={{ once: true }}
                                layout="position"
                                className='w-1/2 bg-neutral-700 flex items-center justify-end'>
                                <motion.img

                                    initial={{
                                        y: -100,
                                        opacity: 0
                                    }}
                                    transition={{
                                        layout: {
                                            duration: 2,
                                            type: "spring",
                                            ease: "easeOut",
                                        }
                                    }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    layout="position"
                                    className='h-full w-full  object-cover   color-[black] ' src={imgSrc} />
                            </motion.div>


                        </motion.div>
                    </motion.div>
                </>
            )
            }
        </motion.div >
    )
}

export default Carousal