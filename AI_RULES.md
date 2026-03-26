# TejasBlogs AI Development Rules

## Tech Stack Overview
- **Framework**: Next.js 16 (App Router) with React 19.
- **Language**: TypeScript for all components and utilities.
- **Styling**: Tailwind CSS v4 utilizing the "Newspaper" theme variables defined in `globals.css`.
- **Components**: Radix UI primitives via a comprehensive shadcn/ui implementation.
- **Icons**: Lucide React for all iconography.
- **Typography**: Playfair Display (Headings) and Lora (Body) via `next/font/google`.
- **State & Forms**: React Hook Form with Zod validation for any data entry.
- **Feedback**: Sonner for toast notifications.
- **Analytics**: Vercel Analytics integrated into the root layout.

## Library Usage Rules

### 1. Styling & Theming
- **Tailwind Only**: Do not use CSS modules or inline styles. Use Tailwind classes exclusively.
- **Theme Variables**: Always use theme-aware colors (e.g., `text-primary`, `bg-background`, `border-accent`) to ensure compatibility with the newspaper aesthetic and dark mode.
- **Typography**: Use `playfair.className` for headlines and the default body font (Lora) for paragraphs.

### 2. Component Architecture
- **UI Components**: Use existing components in `components/ui/`. Do not reinvent buttons, inputs, or dialogs.
- **Icons**: Always import icons from `lucide-react`.
- **Toasts**: Use `sonner` for notifications. Avoid using the older `use-toast` hook if `sonner` is available.

### 3. Article System (Crucial)
- **File-Based**: This app does NOT use a database for articles.
- **New Articles**: 
  1. Create a new component in `components/articles/ArticleName.tsx`.
  2. Use the `MediaEmbed` components (`MediaImage`, `MediaAudio`, `MediaVideo`) for all article media.
  3. Map the new slug in `app/article/[slug]/page.tsx`.
  4. Add the article metadata to the `blogPosts` array in `components/BlogGrid.tsx`.

### 4. Media Handling
- **Public Folder**: All local assets (images, audio, video) must be placed in the `/public` directory.
- **Embedding**: Use the wrappers in `components/MediaEmbed.tsx` to ensure media is styled correctly with borders and captions consistent with the newspaper theme.

### 5. Navigation
- **Routing**: Use Next.js `Link` for navigation.
- **Home Sections**: The home page uses a simple state-based toggle between 'home' and 'about' views.

## Development Principles
- **Maintain Aesthetic**: Keep the "Newspaper" look (high contrast, serif fonts, thick borders).
- **No Placeholders**: When generating content, provide full, meaningful text rather than "Lorem Ipsum".
- **Accessibility**: Ensure all images have descriptive `alt` text and interactive elements are keyboard accessible via Radix primitives.