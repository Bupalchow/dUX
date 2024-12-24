'use client'

import { motion } from 'framer-motion'
import { Stats } from './stats'
import { CTA } from './cta'

export function Hero() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)] px-4 md:px-8 gap-4 lg:gap-0 bg-white dark:bg-gray-900">
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="flex-1 flex flex-col justify-between py-4 lg:py-8"
      >
        <div className="space-y-4 lg:space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-[8vw] font-bold leading-tight text-center md:text-right">
            Elevating<br />Design
          </h1>
          <p className="text-base lg:text-lg max-w-md text-justify md:text-right md:ml-auto">
            We specialize in crafting elegant, minimalist user experiences that elevate your digital presence with attention to detail, thoughtful interactions, and grand design principles.
          </p>
        </div>
        <div className="mt-8 md:mb-8 flex flex-col items-center md:items-end space-y-6">
          <CTA />
          <Stats />
        </div>
      </motion.div>

      <motion.div 
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="flex-1 relative min-h-[400px] lg:min-h-0"
      >
        <div className="absolute top-0 right-0 w-full lg:w-[90%] h-[90%] bg-purple-400 dark:bg-gray-400 rounded-[2rem] overflow-hidden mt-4">
          <img
            src="https://www.pngmart.com/files/15/Aesthetic-Artwork-PNG-Picture.png"
            alt="Photographer with vintage camera"
            className="object-cover"
          />
          <img
            src="https://th.bing.com/th/id/R.49f66331fb5c6094442fbd15c0759b88?rik=fml7T1f27oH7IQ&riu=http%3a%2f%2fclipart-library.com%2fimages%2f8i65EKBLT.png&ehk=0y7mqD8Mns3Cq%2flIfgriPDGLlUeMvFdpCLKL2bDG9Ps%3d&risl=&pid=ImgRaw&r=0"
            alt="Signature"
            width={200}
            height={100}
            className="absolute top-8 right-8"
          />

        </div>
      </motion.div>
    </div>
  )
}

