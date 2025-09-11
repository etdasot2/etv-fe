"use client"

import type React from "react"
import { motion } from "framer-motion"

type AnimationDirection = "top" | "bottom"

interface AnimationPageProps {
  children: React.ReactNode
  direction: AnimationDirection
}

const variants = {
  top: {
    initial: { y: -20, opacity: 1 },
    animate: { y: 0, opacity: 1 },
  },
  bottom: {
    initial: { y: 30},
    animate: { y: 0 },
  },
}

export default function AnimationPage({ children, direction }: AnimationPageProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants[direction]}
      transition={{
        duration: 0.3,
        ease: "easeOut",
        delay: 0.4, // Add a 0.3-second delay before animation starts
      }}
    >
      {children}
    </motion.div>
  )
}

