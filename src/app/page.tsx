import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { TestimonialsMobile } from '@/components/testimonials-mobile'

export default function Home() {
  return (
    <main className="md:h-screen md:overflow-hidden">
      <Header />
      <Hero />
      <div className="md:hidden">
        <TestimonialsMobile />
      </div>
    </main>
  )
}

