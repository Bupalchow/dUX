'use client'

import { motion } from 'framer-motion'

export function Stats() {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="flex flex-col sm:flex-row gap-8 sm:gap-16"
    >
      <div className="text-center sm:text-left">
      <h3 className="text-3xl md:text-5xl font-bold mb-2 md:text-right">5</h3>
      <p className="text-sm max-w-[200px] mx-auto sm:mx-0 md:text-right">
      Happy clients who trust our UX design expertise
      </p>
      </div>
      <div className="text-center sm:text-left">
      <h3 className="text-3xl md:text-5xl font-bold mb-2 md:text-right">+50</h3>
      <p className="text-sm max-w-[200px] mx-auto sm:mx-0 md:text-right">
      Projects completed, delivering exceptional user experiences
      </p>
      </div>
      <div className="text-center sm:text-left">
      <h3 className="text-3xl md:text-5xl font-bold mb-2 md:text-right">10</h3>
      <p className="text-sm max-w-[200px] mx-auto sm:mx-0 md:text-right">
      Awards won for our innovative design solutions
      </p>
      </div>
    </motion.div>
  )
}

