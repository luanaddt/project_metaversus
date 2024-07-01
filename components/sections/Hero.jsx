"use client"

import { motion } from "framer-motion"
import { staggerContainer, textVariant, slideIn } from "@/utils"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="padding-y 2xl:pl-0 sm:pl-16 pl-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        className="max-width flex flex-col"
      >
        <div className="flex-center flex-col relative z-10">
          <motion.h1
            variants={textVariant(1.1)}
            className="hero-heading"
          >
            METAVERSE
          </motion.h1>

          <motion.div
            variants={textVariant(1.2)}
            className="flex-center"
          >
            <h1 className="hero-heading">
              MA
            </h1>

            <div className="hero-d-text" />

            <h1 className="hero-heading">
              NESS
            </h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-5 -mt-3"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] -top-[30px] z-0" />

          <div className="w-full sm:h-[500px] h-[350px] relative z-10">
            <Image 
              src="/assets/images/cover.png"
              alt="cover"
              fill
              className="object-cover rounded-tl-[140px]"
            />
          </div>

          <div className="w-full flex-end sm:-mt-[70px] -mt-[50px] pr-10 relative z-10">
            <Link href="#explore">
              <Image 
                src="/assets/images/stamp.png"
                alt="stamp"
                width={155}
                height={155}
                className="max-sm:size-[100px] object-contain"
              />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero