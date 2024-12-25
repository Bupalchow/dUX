'use client'

import { motion } from 'framer-motion'

interface TestimonialsProps {
  mousePosition: { x: number; y: number }
  isVisible: boolean
}

export function Testimonials({ mousePosition, isVisible }: TestimonialsProps) {
  return (
    <motion.div
      initial={{ clipPath: `circle(0px at ${mousePosition.x}px ${mousePosition.y}px)` }}
      animate={{
        clipPath: isVisible 
          ? `circle(150% at ${mousePosition.x}px ${mousePosition.y}px)`
          : `circle(0px at ${mousePosition.x}px ${mousePosition.y}px)`
      }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 bg-purple-100 dark:bg-gray-800 z-40"
    >
      <div className="max-w-4xl mx-auto pt-32 px-4">
        <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <p className="text-lg mb-4">"Incredible attention to detail and user experience."</p>
              <div className="font-bold">Client {i}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
