import React from 'react';

interface ImageEmbedProps {
  src: string;
  alt: string;
  caption?: string;
  width?: string;
  height?: string;
}

export default function ImageEmbed({ src, alt, caption, width = "100%", height = "auto" }: ImageEmbedProps) {
  return (
    <div className="my-6 space-y-2">
      <div className="overflow-hidden rounded-lg border border-border">
        <img 
          src={src} 
          alt={alt}
          style={{ width, height }}
          className="w-full h-auto object-cover"
        />
      </div>
      {caption && (
        <p className="text-sm text-text-muted text-center italic">
          {caption}
        </p>
      )}
    </div>
  );
}