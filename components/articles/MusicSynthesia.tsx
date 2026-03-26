'use client';

import { MediaImage, MediaAudio, MediaVideo } from '@/components/MediaEmbed';

export function MusicSynthesiaArticle() {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">
      <header className="mb-12 border-b-4 border-accent pb-8">
        <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
          The Intersection of Music and Synthesia
        </h1>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <span>By Tejas</span>
          <span>March 26, 2026</span>
        </div>
      </header>

      <div className="space-y-6 text-foreground leading-relaxed">
        <p className="text-lg italic text-accent">
          Synthesia—the neurological phenomenon where one sense triggers another—has become
          an unexpected gateway into understanding how we experience music. From musicians who
          see colors to producers who hear shapes, this fascinating crossing of sensory pathways
          is revolutionizing how artists create and audiences listen.
        </p>

        <h2 className="text-3xl font-serif font-bold mt-8 mb-4 border-l-4 border-accent pl-4">
          What is Synthesia?
        </h2>

        <p>
          Synthesia is a neurological condition where stimulation of one sensory pathway leads to
          automatic, involuntary experiences in another. The most common form is chromesthesia—the
          association of sounds with colors. For a synthete listening to a symphony, each note
          isn&apos;t just heard; it&apos;s seen as a distinct hue, creating a deeply immersive
          experience that most of us can only imagine.
        </p>

        <p>
          Rather than being a disorder, synthesia is increasingly recognized as a gift that
          enhances creative thinking. Studies suggest that synesthetes have increased connectivity
          between brain regions, allowing them to make unique conceptual leaps that non-synesthetes
          might miss.
        </p>

        <MediaImage
          src="/synesthetic-brain.jpg"
          alt="Scientific illustration of a synesthetic brain with neural cross-sensory pathways"
          caption="The synesthetic brain exhibits unique neural connections between sensory regions, enabling cross-sensory perception"
        />

        <MediaImage
          src="/color-spectrum.jpg"
          alt="Beautiful musical color spectrum visualization with flowing gradients and musical notes"
          caption="A visual representation of chromesthesia—how musicians with synesthesia perceive colors within different musical frequencies"
        />

        <h2 className="text-3xl font-serif font-bold mt-8 mb-4 border-l-4 border-accent pl-4">
          Famous Musicians with Synthesia
        </h2>

        <p>
          Throughout music history, some of the greatest composers and performers have been
          synesthetes. Duke Ellington famously referred to chords by their colors, calling certain
          progressions &quot;blue&quot; or &quot;purple.&quot; Franz Liszt would ask orchestras to
          play &quot;a little bluer&quot; or &quot;a little pinker.&quot; Pharrell Williams has
          spoken about his color-sound associations, while Billie Eilish has described seeing
          colors with music.
        </p>

        <p>
          These artists didn&apos;t just talk about their synthesia—they built it into their
          creative process, using their unique sensory wiring as a tool for composition and
          arrangement. The result has been some of the most innovative and emotionally resonant
          music in modern history.
        </p>

        <h2 className="text-3xl font-serif font-bold mt-8 mb-4 border-l-4 border-accent pl-4">
          Technology Meets Synesthesia
        </h2>

        <p>
          Modern technology is allowing producers and artists to translate synthesia into tools
          that everyone can experience. Music production software now includes plugins that
          generate real-time visualizations synchronized to audio. These aren&apos;t mere
          animations—they&apos;re sophisticated systems trained on how synesthetes actually perceive
          sound.
        </p>

        <p>
          Some of the most exciting developments come from VR and immersive experiences, where
          audiences can enter a synesthetic landscape while music plays. What was once an isolated
          neurological phenomenon is becoming a shared artistic experience that bridges the gap
          between sound and sight in ways previous generations could only dream of.
        </p>

        <MediaImage
          src="/music-producer.jpg"
          alt="Modern music producer at studio setup with synthesizers and colorful visualizations"
          caption="Contemporary producers leverage synesthetic principles and visualization technology to enhance their creative process"
        />

        <h2 className="text-3xl font-serif font-bold mt-8 mb-4 border-l-4 border-accent pl-4">
          The Creative Implications
        </h2>

        <p>
          For non-synesthetes, exploring synthesia offers a powerful tool for artistic growth.
          By consciously associating sounds with colors, shapes, and textures, musicians and
          producers can deepen their emotional connection to their work. This practice has been
          adopted by contemporary composers like Arca and Jon Hopkins, who use visual-sound
          associations to push the boundaries of their sound design.
        </p>

        <p>
          The implications extend beyond music too. Synesthesia research has influenced visual
          artists, dancers, and filmmakers who are creating multimedia experiences that engage
          multiple senses simultaneously. It&apos;s a reminder that the boundaries between art
          forms are far more porous than we typically assume.
        </p>

        <h2 className="text-3xl font-serif font-bold mt-8 mb-4 border-l-4 border-accent pl-4">
          Looking Forward
        </h2>

        <p>
          As neuroscience continues to uncover the mysteries of synesthesia, and as technology
          becomes more sophisticated, we can expect even more groundbreaking applications in music
          production and performance. The conversation about synthesia is shifting from
          &quot;What is this phenomenon?&quot; to &quot;How can we all experience the world the way
          synesthetes do?&quot;
        </p>

        <p>
          The intersection of music and synthesia isn&apos;t just a curiosity of neurology—it&apos;s
          a frontier of artistic expression. And as more creators explore these connections, we&apos;re
          entering an era where the music we hear might also be something we see, feel, and
          experience in ways we&apos;ve never imagined before.
        </p>

        {/* ============================================= */}
        {/* CUSTOMIZE MEDIA BELOW */}
        {/* ============================================= */}
        {/* 
          Add images, audio, or videos from your /public folder.
          The components will automatically style them to fit the newspaper theme.
          
          EXAMPLES:
          
          // Images with captions
          <MediaImage 
            src="/your-image.jpg" 
            alt="Describe the image for accessibility" 
            caption="Optional caption below the image"
          />
          
          // Audio player
          <MediaAudio 
            src="/your-audio.mp3"
            title="Optional audio title"
          />
          
          // Video player
          <MediaVideo 
            src="/your-video.mp4"
            title="Optional video title"
          />
          
          To add your own media:
          1. Upload files (images, audio, video) to the /public folder
          2. Reference them here using the components above
          3. The paths should start with "/" (e.g., "/my-file.mp3")
        */}
      </div>

      <footer className="mt-12 pt-8 border-t-4 border-accent">
        <p className="text-sm text-muted-foreground">
          This article explores the fascinating connection between music perception and synesthesia,
          examining how neurological differences enhance creative expression.
        </p>
      </footer>
    </article>
  );
}
