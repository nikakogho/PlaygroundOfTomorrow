'use client';

import React from 'react';
import MultipleChoice from './interactive/MultipleChoice';
import FillInTheBlank from './interactive/FillInTheBlank';
import ImageEmbed from './interactive/ImageEmbed';
import YouTubeEmbed from './interactive/YouTubeEmbed';

interface MDXRendererProps {
  content: string;
  isComplete: boolean;
  onComplete: () => void;
}

// Simple MDX-style parser for our content
export function MDXRenderer({ content, isComplete, onComplete }: MDXRendererProps) {
  const parseContent = (text: string) => {
    const parts = [];
    let currentIndex = 0;
    
    // Find interactive components
    const multipleChoiceRegex = /<MultipleChoice correctAnswer=\{(\d+)\}>(.*?)<\/MultipleChoice>/gs;
    const fillInBlankRegex = /<FillInTheBlank correctAnswer=(?:\{(.+?)\}|(".+?")) .*?\/>/gs;
    const imageEmbedRegex = /<ImageEmbed src=(?:\{(.+?)\}|"(.+?)") alt=(?:\{(.+?)\}|"(.+?)")(?: caption=(?:\{(.+?)\}|"(.+?)"))?.*?\/>/gs;
    const youtubeEmbedRegex = /<YouTubeEmbed videoId=(?:\{(.+?)\}|"(.+?)")(?: title=(?:\{(.+?)\}|"(.+?)"))?.*?\/>/gs;
    
    let match;
    
    // Handle MultipleChoice
    while ((match = multipleChoiceRegex.exec(text)) !== null) {
      // Add text before component
      if (match.index > currentIndex) {
        const beforeText = text.slice(currentIndex, match.index);
        if (beforeText.trim()) {
          parts.push({ type: 'text', content: beforeText });
        }
      }
      
      const correctAnswer = parseInt(match[1]);

      const optionsText = match[2];
      const options = optionsText.split('<p>').filter(p => p.includes('</p>')).map(p => 
        p.replace('</p>', '').trim()
      );
      
      parts.push({
        type: 'multipleChoice',
        correctAnswer,
        options,
        isComplete,
        onComplete
      });
      
      currentIndex = match.index + match[0].length;
    }
    
    // Reset regex
    multipleChoiceRegex.lastIndex = 0;
    fillInBlankRegex.lastIndex = 0;
    imageEmbedRegex.lastIndex = 0;
    youtubeEmbedRegex.lastIndex = 0;
    
    // Handle FillInTheBlank  
    while ((match = fillInBlankRegex.exec(text)) !== null) {
      if (match.index > currentIndex) {
        const beforeText = text.slice(currentIndex, match.index);
        if (beforeText.trim()) {
          parts.push({ type: 'text', content: beforeText });
        }
      }
      
      console.log('Match found:', match);

      let correctAnswer = match[1] || match[2];
      console.log('Correct answer found:', correctAnswer);

      // Handle array format ["answer1", "answer2"]
      if (correctAnswer.startsWith('[') && correctAnswer.endsWith(']')) {
        correctAnswer = JSON.parse(correctAnswer);
      } else if (correctAnswer.startsWith('"') && correctAnswer.endsWith('"')) {
        correctAnswer = correctAnswer.slice(1, -1);
      }
      
      parts.push({
        type: 'fillInBlank',
        correctAnswer,
        isComplete,
        onComplete
      });
      
      currentIndex = match.index + match[0].length;
    }
    
    // Handle ImageEmbed
    while ((match = imageEmbedRegex.exec(text)) !== null) {
      if (match.index > currentIndex) {
        const beforeText = text.slice(currentIndex, match.index);
        if (beforeText.trim()) {
          parts.push({ type: 'text', content: beforeText });
        }
      }
      
      const src = match[1] || match[2];
      const alt = match[3] || match[4];
      const caption = match[5] || match[6];
      
      parts.push({
        type: 'imageEmbed',
        src,
        alt,
        caption
      });
      
      currentIndex = match.index + match[0].length;
    }
    
    // Handle YouTubeEmbed
    while ((match = youtubeEmbedRegex.exec(text)) !== null) {
      if (match.index > currentIndex) {
        const beforeText = text.slice(currentIndex, match.index);
        if (beforeText.trim()) {
          parts.push({ type: 'text', content: beforeText });
        }
      }
      
      const videoId = match[1] || match[2];
      const title = match[3] || match[4];
      
      parts.push({
        type: 'youtubeEmbed',
        videoId,
        title
      });
      
      currentIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (currentIndex < text.length) {
      const remainingText = text.slice(currentIndex);
      if (remainingText.trim()) {
        parts.push({ type: 'text', content: remainingText });
      }
    }
    
    return parts.length > 0 ? parts : [{ type: 'text', content: text }];
  };

  const renderMarkdown = (text: string) => {
    // Simple markdown parsing
    let html = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/^- (.*$)/gm, '<li>$1</li>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/^(.+)$/gm, '<p>$1</p>')
      .replace(/<p><h([1-6])>/g, '<h$1>')
      .replace(/<\/h([1-6])><\/p>/g, '</h$1>')
      .replace(/<p><li>/g, '<ul><li>')
      .replace(/<\/li><\/p>/g, '</li></ul>');

    return <div className="prose-learning" dangerouslySetInnerHTML={{ __html: html }} />;
  };

  const parts = parseContent(content);

  return (
    <div className="space-y-4">
      {parts.map((part, index) => {
        switch (part.type) {
          case 'multipleChoice':
            return (
              <MultipleChoice 
                key={index} 
                correctAnswer={part.correctAnswer} 
                isComplete={part.isComplete}
                onComplete={part.onComplete}
              >
                {part.options.map((option: string, optIndex: number) => (
                  <p key={optIndex}>{option}</p>
                ))}
              </MultipleChoice>
            );
          case 'fillInBlank':
            return (
              <FillInTheBlank
                key={index}
                correctAnswer={part.correctAnswer}
                isComplete={part.isComplete}
                onComplete={part.onComplete}
              />
            );
          case 'imageEmbed':
            return (
              <ImageEmbed
                key={index}
                src={part.src}
                alt={part.alt}
                caption={part.caption}
              />
            );
          case 'youtubeEmbed':
            return (
              <YouTubeEmbed
                key={index}
                videoId={part.videoId}
                title={part.title}
              />
            );
          default:
            return <div key={index}>{renderMarkdown(part.content)}</div>;
        }
      })}
    </div>
  );
}