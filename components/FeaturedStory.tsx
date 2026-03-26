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
              src="https://images.unsplash.com/photo-1550291652-6ea9114a47b1?q=80&w=1000&auto=format&fit=crop"
              alt="A vintage electric guitar leaning against an amplifier"
              className="w-full h-64 lg:h-80 object-cover border border-border"
            />
          </div>

          {/* Featured Content */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <span className="text-muted-foreground text-sm tracking-widest uppercase">
                Featured Article
              </span>
              <h2 className={`${playfair.className} text-4xl lg:text-5xl font-bold text-primary mt-3 mb-4`}>
                My Connection with Music
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                A personal journey through the strings and keys that shaped my life. From the first guitar chord to the deep groove of the bass and the harmonic space of the keyboard, explore how these instruments became my voice.
              </p>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <span>May 15, 2026</span>
                <span>•</span>
                <span>6 min read</span>
              </div>
            </div>
            <Link
              href="/article/my-connection-music"
              className="mt-6 inline-flex px-6 py-3 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-semibold tracking-wide uppercase text-sm w-fit"
            >
              Read Article
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}