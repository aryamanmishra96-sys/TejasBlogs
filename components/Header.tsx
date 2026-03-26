'use client'

import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

interface HeaderProps {
  onNavigate: (section: 'home' | 'about') => void
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="border-b border-border bg-card">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Masthead */}
        <div className="mb-6">
          <button
            onClick={() => onNavigate('home')}
            className="mb-4 hover:opacity-70 transition-opacity"
          >
            <h1 className={`${playfair.className} text-6xl font-bold text-primary`}>
              TejasBlogs
            </h1>
          </button>
          <p className="text-muted-foreground text-lg">
            Thoughts, Articles, and Insights
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex gap-8 pt-4 border-t border-border">
          <button
            onClick={() => onNavigate('home')}
            className="text-primary hover:text-accent transition-colors font-semibold tracking-wide"
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="text-primary hover:text-accent transition-colors font-semibold tracking-wide"
          >
            About
          </button>
        </nav>
      </div>
    </header>
  )
}