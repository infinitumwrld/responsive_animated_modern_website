'use client';

import { motion } from 'framer-motion';

import { fadeIn, staggerContainer } from '../utils/motion';

import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textSyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-center text-[14px] text-white ${textSyles}`}
  >

  {Array.from(title).map((letter, index) => (
    <motion.span variants={textVariant2} key={index} >
      {letter === '' ? '\u00a0' : letter }
    </motion.span>
  ))}
  </motion.p>  
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial='hidden'
    whileInView='show'
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`} 
  >
      {title}
  </motion.h2>
);
