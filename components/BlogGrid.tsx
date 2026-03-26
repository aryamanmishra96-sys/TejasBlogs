'use client'

import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

const blogPosts = [
  {
    id: 1,
    slug: "music-synthesia",
    title: "The Intersection of Music and Synthesia",
    excerpt: "Explore how synesthesia—the fascinating neurological phenomenon where one sense triggers another—is revolutionizing music creation and perception.",
    date: "March 26, 2026",
    readTime: "8 min read",
    category: "Music",
    image: "/synesthetic-brain.jpg"
  },
  {
    id: 2,
    slug: "my-connection-music",
    title: "My Connection with Music",
    excerpt: "A personal journey through the strings and keys that shaped my life. From the first guitar chord to the deep groove of the bass and the harmonic space of the keyboard.",
    date: "May 15, 2026",
    readTime: "6 min read",
    category: "Personal",
    image: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?q=80&w=1000&auto=format&fit=crop"
  }
]

export default function BlogGrid() {
  return (
    <section className="bg-background">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className={`${playfair.className} text-4xl font-bold text-primary mb-2`}>
            Latest Articles
          </h2>
          <div className="w-16 h-1 bg-accent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/article/${post.slug}`}
              className="block border border-border hover:border-accent transition-colors group"
            >
              <article>
                {/* Image */}
                <div className="overflow-hidden h-48 bg-muted">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 bg-card">
                  <span className="text-xs text-accent uppercase tracking-widest font-semibold">
                    {post.category}
                  </span>
                  <h3 className={`${playfair.className} text-xl font-bold text-primary mt-3 mb-2 line-clamp-2`}>
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="w-full px-4 py-3 bg-primary text-primary-foreground text-sm font-semibold tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read Article
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}