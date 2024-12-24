'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Testimonials } from './testimonials'

export function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showTestimonials, setShowTestimonials] = useState(false)
  const [wheelDelta, setWheelDelta] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      setWheelDelta(prev => {
        const newDelta = prev + e.deltaY
        if (newDelta > 400) { // Threshold for showing testimonials
          setShowTestimonials(true)
        } else if (newDelta < 0) {
          setShowTestimonials(false)
        }
        return Math.max(0, newDelta)
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('wheel', handleWheel, { passive: false })
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return (
    <>
      <Testimonials mousePosition={mousePosition} isVisible={showTestimonials} />
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none mix-blend-difference z-50
                   bg-purple-400 dark:bg-gray-400"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5
        }}
      />
    </>
  )
}
