"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Circle, Square, Triangle, Donut } from "@/components/ui/shapes"

type ShapeType = "circle" | "square" | "triangle" | "donut"

interface FloatingElementProps {
  shape: ShapeType
  color: string
  size: number
  top?: string
  left?: string
  right?: string
  bottom?: string
  duration?: number
  delay?: number
}

const shapeComponents = {
  circle: Circle,
  square: Square,
  triangle: Triangle,
  donut: Donut,
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  shape,
  color,
  size,
  top,
  left,
  right,
  bottom,
  duration = 20,
  delay = 0,
}) => {
  const ShapeComponent = shapeComponents[shape]

  return (
    <motion.div
      className="absolute z-0"
      style={{ top, left, right, bottom }}
      animate={{
        y: ["0%", "10%", "-10%", "0%"],
        x: ["0%", "-10%", "10%", "0%"],
        rotate: [0, 45, -45, 0],
      }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        delay,
      }}
    >
      <ShapeComponent width={size} height={size} fill={color} />
    </motion.div>
  )
}

