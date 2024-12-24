'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  const navItems = ['Home', 'Testimonials', 'Projects',  'Contact']
  
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mt-1 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-2 space-y-2 md:space-y-0 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-purple-400 dark:before:bg-gray-400 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-purple-400 dark:after:bg-gray-400"
    >
      <Link href="/" className="text-3xl font-bold md:w-32">
        d<span className='font-bold'>UX</span>
      </Link>

      <nav className="flex items-center justify-center flex-1">
        {navItems.map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="text-sm hover:text-gray-600 transition-colors px-4"
          >
            {item}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2 md:gap-4 md:w-32 justify-end">
        <span className="text-sm whitespace-nowrap">
          <span className="text-purple-400 dark:text-purple-500">↗</span> Bupal Chowdary
        </span>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Globe className="w-5 h-5" />
        </button>
        <ThemeToggle />
      </div>
    </motion.header>
  )
}

