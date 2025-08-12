import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  width?: string;
  height?: string;
}

export default function YouTubeEmbed({ videoId, title = "YouTube video", width = "100%", height = "315" }: YouTubeEmbedProps) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  
  return (
    <div className="my-6">
      <div className="relative overflow-hidden rounded-lg border border-border" style={{ paddingBottom: '56.25%', height: 0 }}>
        <iframe
          src={embedUrl}
          title={title}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}