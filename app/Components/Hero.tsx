"use client"

import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import { motion} from 'framer-motion'
    

type Props = {}

function Hero({ }: Props) {
const [text, count]= useTypewriter({
    words :[
        "Hi, The Name is Farooq Majeed",
        "Guy-who-love-coffee.tsx", 
        "<ButLovesToCodeMore />",
    
    ], loop: true,
    delaySpeed:2000
})
    return (
        <div>    
            <BackgroundCircles />   
            <h1>
                <span>{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>
        </div>
    )
}

export default Hero