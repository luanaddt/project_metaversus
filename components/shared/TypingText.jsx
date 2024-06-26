"use client"

import { motion } from "framer-motion"
import { textContainer, textVariant2 } from "@/utils"

const TypingText = ({ title, textStyles }) => {
  return (
    <motion.p
      variants={textContainer}
      className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span
          key={index}
          variants={textVariant2}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  )
}

export default TypingText