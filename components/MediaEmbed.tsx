'use client';

interface MediaImageProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

interface MediaAudioProps {
  src: string;
  title?: string;
}

interface MediaVideoProps {
  src: string;
  title?: string;
}

export function MediaImage({
  src,
  alt,
  caption,
  width = 800,
  height = 500,
}: MediaImageProps) {
  return (
    <figure className="my-8">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto rounded-lg border-2 border-border"
      />
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function MediaAudio({ src, title }: MediaAudioProps) {
  return (
    <div className="my-8 bg-card border border-border rounded-lg p-6">
      {title && (
        <h4 className="text-sm font-semibold mb-4 text-foreground">{title}</h4>
      )}
      <audio
        controls
        className="w-full"
        controlsList="nodownload"
      >
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export function MediaVideo({ src, title }: MediaVideoProps) {
  return (
    <div className="my-8">
      {title && (
        <h4 className="text-sm font-semibold mb-4 text-foreground">{title}</h4>
      )}
      <video
        controls
        className="w-full h-auto rounded-lg border-2 border-border"
        crossOrigin="anonymous"
      >
        <source src={src} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
