'use client'

import { motion } from 'framer-motion'

export function CTA() {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-purple-100 dark:bg-purple-900 rounded-[50px] text-purple-900 dark:text-purple-100 
        text-base px-8 py-3 cursor-pointer transition-all duration-200 border-2 border-purple-200 dark:border-purple-600
        shadow-[inset_4px_4px_10px_#ddd6fe,inset_-4px_-4px_10px_#f5f3ff] 
        dark:shadow-[inset_4px_4px_10px_#4c1d95,inset_-4px_-4px_10px_#6d28d9]
        hover:shadow-[inset_2px_2px_5px_#ddd6fe,inset_-2px_-2px_5px_#f5f3ff,2px_2px_5px_#ddd6fe,-2px_-2px_5px_#f5f3ff]
        dark:hover:shadow-[inset_2px_2px_5px_#4c1d90,inset_-2px_-2px_5px_#6d28d9,2px_2px_5px_#4c1d95,-2px_-2px_5px_#6d28d9]
        focus:outline-none
        focus:shadow-[inset_2px_2px_5px_#ddd6fe,inset_-2px_-2px_5px_#f5f3ff,2px_2px_5px_#ddd6fe,-2px_-2px_5px_#f5f3ff]
        dark:focus:shadow-[inset_2px_2px_5px_#4c1d95,inset_-2px_-2px_5px_#6d28d9,2px_2px_5px_#4c1d95,-2px_-2px_5px_#6d28d9]"
    >
      Craft Your Dream
    </motion.button>
  )
}
