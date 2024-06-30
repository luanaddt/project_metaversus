"use client"

import { motion } from "framer-motion"
import { navVariants } from "@/utils"
import Image from "next/image"

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="visible"
      className="padding-x py-8 relative"
    >
      <div className="absolute w-1/2 inset-0 gradient-01" />

      <div className="max-width flex justify-between items-start relative">
        <Image 
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
          className="object-contain cursor-pointer"
        />

        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white uppercase">
          METAVERSUS
        </h2>

        <Image 
          src="/assets/icons/menu.svg"
          alt="menu"
          width={24}
          height={24}
          className="object-contain cursor-pointer"
        />
      </div>
    </motion.nav>
  )
}

export default Navbar