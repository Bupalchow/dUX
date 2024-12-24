import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MouseFollower } from '@/components/mouse-follower'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'dUX',
  description: 'UX first design agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-black dark:text-white`}>
        <MouseFollower />
        {children}
      </body>
    </html>
  )
}

