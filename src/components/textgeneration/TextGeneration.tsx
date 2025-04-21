import React from 'react';
import './TextGeneration.css';

export interface Placeholder {
  id: string;
  text: string;
  value: string;
}

export interface TextGenerationProps {
  initialText: string;
  placeholders: Placeholder[];
  onGenerate?: () => void;
  greetingType?: string;
}

const TextGeneration: React.FC<TextGenerationProps> = ({
  initialText,
  placeholders,
  onGenerate,
  greetingType,
}) => {
  // Format greeting type for display
  const formatGreetingType = (type?: string) => {
    if (!type) return '';
    return type
      .replace('_', ' ')
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  // Replace placeholders in text with highlighted spans
  const renderTextWithPlaceholders = () => {
    let result = initialText;

    // Sort placeholders by their position in the text (to avoid replacing parts of already replaced text)
    const sortedPlaceholders = [...placeholders].sort(
      (a, b) =>
        initialText.indexOf(`[${a.id}]`) - initialText.indexOf(`[${b.id}]`),
    );

    // Replace each placeholder with a highlighted span
    sortedPlaceholders.forEach((placeholder) => {
      const placeholderTag = `[${placeholder.id}]`;
      const displayValue = placeholder.value || placeholder.text;

      result = result.replace(
        placeholderTag,
        `<span class="placeholder">${displayValue}</span>`,
      );
    });

    return result;
  };

  const handleGenerateClick = () => {
    if (onGenerate) {
      onGenerate();
    }
  };

  return (
    <div className='text-generation-container'>
      {greetingType && (
        <div className='greeting-type-header'>
          <h3>{formatGreetingType(greetingType)}</h3>
        </div>
      )}

      <div className='text-content'>
        <p dangerouslySetInnerHTML={{ __html: renderTextWithPlaceholders() }} />
      </div>

      <div className='text-generation-actions'>
        <button className='generate-button' onClick={handleGenerateClick}>
          <svg
            className='refresh-icon'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M17.65 6.35C16.2 4.9 14.21 4 12 4C7.58 4 4.01 7.58 4.01 12C4.01 16.42 7.58 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z'
              fill='currentColor'
            />
          </svg>
          Generate different text
        </button>
      </div>
    </div>
  );
};

export default TextGeneration;
