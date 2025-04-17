import React from 'react';
import Card from './card';

interface DynamicTextPreviewProps {
  template: string;
  variables: Record<string, string>;
  onRegenerate?: () => void;
}

const DynamicTextPreview: React.FC<DynamicTextPreviewProps> = ({
  template,
  variables,
  onRegenerate,
}) => {
  const replaceVariables = (text: string) => {
    return text.replace(/\{(\w+)\}/g, (match, key) => variables[key] || match);
  };

  return (
    <Card className='text-center'>
      <div className='space-y-4'>
        <div className='prose dark:prose-invert mx-auto'>
          <p className='text-lg'>{replaceVariables(template)}</p>
        </div>
        {onRegenerate && (
          <button
            onClick={onRegenerate}
            className='text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300'
          >
            ↺ Regenerate Message
          </button>
        )}
      </div>
    </Card>
  );
};

export default DynamicTextPreview;
