import { MusicSynthesiaArticle } from '@/components/articles/MusicSynthesia';
import { MyConnectionMusicArticle } from '@/components/articles/MyConnectionMusic';
import Link from 'next/link';

export function generateStaticParams() {
  return [
    { slug: 'music-synthesia' },
    { slug: 'my-connection-music' }
  ];
}

export const metadata = {
  title: 'Article | TejasBlogs',
  description: 'Exploring music, technology, and the intersections between them.',
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const articles: Record<string, React.ComponentType> = {
    'music-synthesia': MusicSynthesiaArticle,
    'my-connection-music': MyConnectionMusicArticle,
  };

  const ArticleComponent = articles[slug];

  if (!ArticleComponent) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The article you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b-2 border-border bg-card sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="text-accent hover:text-primary font-semibold transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <ArticleComponent />
      </main>

      <footer className="bg-card border-t-2 border-border mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-serif text-xl font-bold text-foreground">TejasBlogs</h3>
              <p className="text-sm text-muted-foreground">
                Exploring music, technology, and the intersections between them.
              </p>
            </div>
            <Link
              href="/"
              className="text-accent hover:text-primary font-semibold transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}