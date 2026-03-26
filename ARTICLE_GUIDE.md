# TejasBlogs Article Guide

## Overview
TejasBlogs is a simple, file-based blog system. Articles are stored as React components with no database needed. Add media files to the `/public` folder and embed them directly in your article components.

## Current Article Structure

### Single Article: Music and Synthesia
- **File**: `/components/articles/MusicSynthesia.tsx`
- **Route**: `/article/music-synthesia`
- **Status**: Fully editable, no database required

## How to Edit the Current Article

### 1. Edit Article Content
Open `/components/articles/MusicSynthesia.tsx` and update the text directly. The article is written in JSX with sections using these styles:

```tsx
// Main heading
<h1 className="text-5xl font-serif font-bold text-foreground mb-4">
  Your Title Here
</h1>

// Section heading
<h2 className="text-3xl font-serif font-bold mt-8 mb-4 border-l-4 border-accent pl-4">
  Section Title
</h2>

// Paragraphs
<p>Your paragraph text here</p>
```

### 2. Add Images
Place image files (JPG, PNG, etc.) in `/public` folder, then add them to the article:

```tsx
<MediaImage
  src="/your-image.jpg"
  alt="Description for accessibility (required)"
  caption="Optional caption below the image"
/>
```

### 3. Add Audio
Place MP3 files in `/public` folder:

```tsx
<MediaAudio
  src="/your-audio.mp3"
  title="Optional audio title"
/>
```

### 4. Add Video
Place MP4 files in `/public` folder:

```tsx
<MediaVideo
  src="/your-video.mp4"
  title="Optional video title"
/>
```

## Media Components

The `MediaEmbed.tsx` component provides three components for embedding media:

### MediaImage
- **Props**: `src`, `alt` (required), `caption` (optional), `width`, `height`
- **Styling**: Automatically rounded with borders, responsive width
- **Alt text**: Always required for accessibility and SEO

### MediaAudio
- **Props**: `src` (required), `title` (optional)
- **Features**: Native audio player with controls, full width responsive
- **Note**: Download is disabled for copyright protection

### MediaVideo
- **Props**: `src` (required), `title` (optional)
- **Styling**: Responsive with rounded corners and borders
- **Note**: Native video player with standard controls

## How to Create a New Article

1. **Create a new component file** in `/components/articles/` with the name of your article (e.g., `MyNewArticle.tsx`)

2. **Use this template**:
```tsx
'use client';

import { MediaImage, MediaAudio, MediaVideo } from '@/components/MediaEmbed';

export function MyNewArticleComponent() {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">
      <header className="mb-12 border-b-4 border-accent pb-8">
        <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
          Your Article Title
        </h1>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <span>By Tejas</span>
          <span>Your Date Here</span>
        </div>
      </header>

      <div className="space-y-6 text-foreground leading-relaxed">
        {/* Your article content here */}
      </div>

      <footer className="mt-12 pt-8 border-t-4 border-accent">
        <p className="text-sm text-muted-foreground">
          Article footer/summary text
        </p>
      </footer>
    </article>
  );
}
```

3. **Add the mapping** in `/app/article/[slug]/page.tsx`:
```tsx
const articles: Record<string, React.ComponentType> = {
  'music-synthesia': MusicSynthesiaArticle,
  'your-new-slug': MyNewArticleComponent,  // Add this line
};
```

4. **Update the blog grid** in `/components/BlogGrid.tsx` to add your article to the list:
```tsx
const blogPosts = [
  {
    id: 1,
    slug: "music-synthesia",
    title: "The Intersection of Music and Synthesia",
    excerpt: "...",
    date: "March 26, 2026",
    readTime: "8 min read",
    category: "Music",
    image: "https://images.unsplash.com/..."
  },
  // Add your new article here
]
```

## File Organization

```
/vercel/share/v0-project/
├── /components/
│   ├── articles/
│   │   └── MusicSynthesia.tsx       # Article content (editable)
│   ├── MediaEmbed.tsx               # Media components (don't edit)
│   ├── Header.tsx
│   ├── BlogGrid.tsx                 # Update when adding articles
│   ├── FeaturedStory.tsx
│   └── About.tsx
├── /public/
│   ├── profile.png                  # Profile image
│   └── synesthesia-visual.jpg       # Demo image (can be replaced)
├── /app/
│   ├── /article/
│   │   └── /[slug]/
│   │       └── page.tsx             # Article routing (update when adding articles)
│   ├── layout.tsx
│   ├── page.tsx                     # Home page
│   └── globals.css                  # Theme colors
└── ARTICLE_GUIDE.md                 # This file
```

## Styling Notes

- **Color scheme**: Uses CSS variables from `globals.css` (warm newspaper theme)
- **Typography**: Playfair Display for headings, Lora for body text
- **Responsive**: Mobile-first design, works on all screen sizes
- **Dark mode**: Automatically supported via CSS variables

## Tips

1. **Keep alt text descriptive** - It helps with SEO and accessibility
2. **Use captions** - They add context and improve readability
3. **Optimize media** - Compress images before adding to `/public`
4. **Test on mobile** - The layout is responsive, but always check on phones
5. **Update metadata** - When creating new articles, update the metadata in the route handler
