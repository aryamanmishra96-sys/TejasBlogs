'use client'

import { useEffect, useState } from 'react'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

export default function About() {
  const [viewers, setViewers] = useState(0)
  const [articlesPublished, setArticlesPublished] = useState(1)

  useEffect(() => {
    // Initialize viewer count from localStorage
    const storedViewers = localStorage.getItem('tejasblogs_viewers')
    const currentViewers = storedViewers ? parseInt(storedViewers) : 0
    const newViewers = currentViewers + 1
    setViewers(newViewers)
    localStorage.setItem('tejasblogs_viewers', newViewers.toString())
  }, [])

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('tejasmishra876@gmail.com')
    alert('Email copied to clipboard: tejasmishra876@gmail.com')
  }

  return (
    <section className="bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className={`${playfair.className} text-5xl lg:text-6xl font-bold text-primary mb-4`}>
            About Me
          </h1>
          <div className="w-16 h-1 bg-accent"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Image */}
          <div className="lg:col-span-1">
            <img
              src="/profile.jpg"
              alt="Profile picture"
              className="w-full border-4 border-accent shadow-lg"
            />
            <div className="mt-6 p-6 bg-card border border-border">
              <h3 className="text-sm uppercase tracking-widest font-semibold text-primary mb-2">
                Quick Facts
              </h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✦</span>
                  <span>Passionate writer and storyteller</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✦</span>
                  <span>Exploring ideas at the intersection of tech and culture</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✦</span>
                  <span>Based in a coffee shop near you</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Biography */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className={`${playfair.className} text-3xl font-bold text-primary mb-4`}>
                Welcome to TejasBlogs
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                I'm a writer, thinker, and digital creator dedicated to exploring the stories that shape our world. Through TejasBlogs, I share insights on technology, design, culture, and the human experience.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Each article is carefully crafted to inform, inspire, and provoke thoughtful conversation. Whether you're here for deep dives into web technology, musings on design philosophy, or reflections on modern life, you'll find something worth your time.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className={`${playfair.className} text-2xl font-bold text-primary mb-3`}>
                My Mission
              </h3>
              <p className="text-foreground leading-relaxed">
                To create meaningful content that bridges the gap between technical complexity and human understanding. I believe great writing should educate without overwhelming, inspire without preaching, and resonate long after you've finished reading.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-6 bg-card border border-border">
                <div className={`${playfair.className} text-4xl font-bold text-accent mb-2`}>
                  {articlesPublished}
                </div>
                <p className="text-muted-foreground text-sm">Articles Published</p>
              </div>
              <div className="p-6 bg-card border border-border">
                <div className={`${playfair.className} text-4xl font-bold text-accent mb-2`}>
                  {viewers}
                </div>
                <p className="text-muted-foreground text-sm">Site Visitors</p>
              </div>
            </div>

            <div className="pt-6">
              <h3 className={`${playfair.className} text-2xl font-bold text-primary mb-4`}>
                Connect With Me
              </h3>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://www.instagram.com/tejasmishra876/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-semibold text-sm uppercase tracking-wide"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/tejas-mishra-5247b031a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-semibold text-sm uppercase tracking-wide"
                >
                  LinkedIn
                </a>
                <button
                  onClick={handleEmailCopy}
                  className="px-6 py-3 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-semibold text-sm uppercase tracking-wide cursor-pointer"
                >
                  Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
