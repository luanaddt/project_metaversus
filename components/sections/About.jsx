"use client"

import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from "@/utils"
import TypingText from "../shared/TypingText"
import Image from "next/image"

const About = () => {
  return (
    <section className="padding relative z-10">
      <div className="gradient-02 z-0" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        className="max-width flex-center flex-col"
      >
        <TypingText title="| About Metaverus" />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-2 font-normal sm:text-[32px] text-[20px] text-secondary-white text-center"
        >
          <span className="font-extrabold text-white">Metaverse</span>{" "}
          is a new thing in the future, where you can enjoy the virtual world by feeling like it&#39;s really real, you can feel what you feel in this metaverse world, because this is really the{" "}
          <span className="font-extrabold text-white">madness of the metaverse</span>{" "}
          of today, using only{" "}
          <span className="font-extrabold text-white">VR</span>{" "}
          devices you can easily explore the metaverse world you want, turn your dreams into reality. Let&#39;s{" "}
          <span className="font-extrabold text-white">explore</span>{" "}
          the madness of the metaverse by scrolling down
        </motion.p>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="mt-7"
        >
          <Image 
            src="/assets/icons/arrow-down.svg"
            alt="arrow down"
            width={18}
            height={28}
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About