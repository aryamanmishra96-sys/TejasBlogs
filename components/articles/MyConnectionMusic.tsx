'use client';

import { MediaImage } from '@/components/MediaEmbed';

export function MyConnectionMusicArticle() {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">
      <header className="mb-12 border-b-4 border-accent pb-8">
        <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
          My Connection with Music
        </h1>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <span>By Tejas</span>
          <span>May 15, 2026</span>
        </div>
      </header>

      <div className="space-y-6 text-foreground leading-relaxed">
        <p className="text-lg italic text-accent">
          Music has never been just background noise to me. It is a language I started learning 
          before I even realized I was speaking it. It began with a beat-up acoustic guitar 
          in the corner of my room, a gift that I didn't know would eventually define my world.
        </p>

        <h2 className="text-3xl font-serif font-bold mt-8 mb-4 border-l-4 border-accent pl-4">
          The First Spark: The Guitar
        </h2>

        <p>
          The guitar was my first love. There is something incredibly tactile about holding a 
          wooden body against your chest and feeling the vibrations of the strings through 
          your fingertips. I remember the early days of sore callouses and frustrated 
          attempts at clean barre chords. But once that first song clicked, everything changed.
        </p>

        <p>
          Whether it is the bright chime of an electric or the warm resonance of an acoustic, 
          the guitar allows for a level of expression that feels almost vocal. It has been 
          my companion through late nights and early mornings, a tool for processing 
          emotions that words couldn't quite capture.
        </p>

        <MediaImage
          src="https://images.unsplash.com/photo-1550291652-6ea9114a47b1?q=80&w=1000&auto=format&fit=crop"
          alt="A vintage electric guitar leaning against an amplifier in a dimly lit room"
          caption="The guitar remains the primary vessel for my musical thoughts and creative exploration."
        />

        <h2 className="text-3xl font-serif font-bold mt-8 mb-4 border-l-4 border-accent pl-4">
          Finding the Groove: The Bass
        </h2>

        <p>
          Picking up the bass was a humbling experience. It taught me that music isn't just 
          about the melody; it is about the foundation. While the guitar often demands 
          attention, the bass demands respect. It is the heartbeat of the song, the 
          bridge between the rhythm and the harmony.
        </p>

        <p>
          Playing bass changed how I listen to music. I stopped just hearing the top line 
          and started feeling the movement underneath. It requires a different kind of 
          discipline, a focus on timing and pocket that makes everything else fall into place.
        </p>


        <h2 className="text-3xl font-serif font-bold mt-8 mb-4 border-l-4 border-accent pl-4">
          The Harmonic Playground: The Keyboard
        </h2>

        <p>
          The keyboard opened up a whole new dimension of theory and arrangement for me. 
          Unlike the guitar, where shapes can be moved around, the keyboard lays everything 
          out in a linear, logical fashion. It is where I go when I want to understand 
          the &quot;why&quot; behind a chord progression.
        </p>

        <p>
          There is a certain peace in sitting down at a piano or a synth. It allows for 
          complex harmonies and layers that can turn a simple idea into a cinematic 
          experience. It has become my favorite tool for songwriting, providing a 
          canvas that feels infinite in its possibilities.
        </p>

        <MediaImage
          src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1000&auto=format&fit=crop"
          alt="A modern digital piano setup with studio monitors and a laptop"
          caption="The keyboard is my laboratory for harmony and the starting point for many of my compositions."
        />

        <h2 className="text-3xl font-serif font-bold mt-8 mb-4 border-l-4 border-accent pl-4">
          A Lifelong Journey
        </h2>

        <p>
          Being a multi-instrumentalist isn't about mastering every single note. It is 
          about perspective. Each instrument offers a different lens through which to 
          view music. The guitar gives me fire, the bass gives me ground, and the 
          keyboard gives me space.
        </p>

        <p>
          Music is a journey with no final destination, and I am perfectly happy 
          spending my life exploring the paths these instruments lay out for me. 
          It is a connection that grows deeper with every session, every mistake, 
          and every breakthrough.
        </p>
      </div>

      <footer className="mt-12 pt-8 border-t-4 border-accent">
        <p className="text-sm text-muted-foreground">
          A personal reflection on the instruments that have shaped my musical identity 
          and the lessons learned along the way.
        </p>
      </footer>
    </article>
  );
}