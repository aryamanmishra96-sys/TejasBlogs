import type { Metadata } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'TejasBlogs',
  description: 'A classic newspaper-style blog by Tejas',
  generator: 'v0.app',
  icons: {
    icon: '/profile.jpg',
    apple: '/profile.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lora.className} antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
