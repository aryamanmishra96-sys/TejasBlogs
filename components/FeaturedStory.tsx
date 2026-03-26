'use client'

import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

export default function FeaturedStory() {
  return (
    <section className="border-b border-border bg-accent/5">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Featured Image */}
          <div className="lg:col-span-1">
            <img
              src="/synesthetic-brain.jpg"
              alt="Synesthetic brain visualization showing neural cross-sensory connections"
              className="w-full h-64 lg:h-80 object-cover border border-border"
            />
          </div>

          {/* Featured Content */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <span className="text-muted-foreground text-sm tracking-widest uppercase">
                Featured Story
              </span>
              <h2 className={`${playfair.className} text-4xl lg:text-5xl font-bold text-primary mt-3 mb-4`}>
                The Intersection of Music and Synthesia
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Explore how synesthesia—the fascinating neurological phenomenon where one sense triggers another—is revolutionizing music creation and perception. From Duke Ellington to Billie Eilish, discover how the world&apos;s greatest musicians experience sound as color.
              </p>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <span>March 26, 2026</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </div>
            <Link
              href="/article/music-synthesia"
              className="mt-6 inline-flex px-6 py-3 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-semibold tracking-wide uppercase text-sm w-fit"
            >
              Read Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
