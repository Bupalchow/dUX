'use client'

import { motion } from 'framer-motion'

export function TestimonialsMobile() {
  return (
    <div className="bg-purple-100 dark:bg-gray-800 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <p className="text-lg mb-4">"Incredible attention to detail and user experience."</p>
              <div className="font-bold">Client {i}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
