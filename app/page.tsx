'use client'

import { useState } from 'react'
import { Playfair_Display } from 'next/font/google'
import Header from '@/components/Header'
import FeaturedStory from '@/components/FeaturedStory'
import BlogGrid from '@/components/BlogGrid'
import About from '@/components/About'

const playfair = Playfair_Display({ subsets: ['latin'] })

export default function Home() {
  const [currentSection, setCurrentSection] = useState<'home' | 'about'>('home')

  return (
    <main className="min-h-screen bg-background">
      <Header onNavigate={setCurrentSection} />
      
      {currentSection === 'home' ? (
        <>
          <FeaturedStory />
          <BlogGrid />
        </>
      ) : (
        <About />
      )}
    </main>
  )
}
