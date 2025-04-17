import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../ui/card';
import DynamicTextPreview from '../ui/dynamic-text-preview';
import AgreeToShareCheckbox from '../ui/agree-to-share-checkbox';
import { NextButton } from '../ui/button';

interface GreetingData {
  greetingType: string;
  recipientType: string;
  recipientName: string;
  senderName: string;
}

const PreviewScreen: React.FC = () => {
  const navigate = useNavigate();
  const [greetingData, setGreetingData] = useState<GreetingData | null>(null);
  const [agreesToShare, setAgreesToShare] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('greetingData');
    if (savedData) {
      setGreetingData(JSON.parse(savedData));
    }
  }, []);

  const generateTemplate = (data: GreetingData) => {
    const templates = {
      birthday:
        'Dear {recipientName}, Wishing you a wonderful birthday filled with joy and happiness! From, {senderName}',
      christmas:
        'Merry Christmas {recipientName}! May your holiday season be filled with warmth and cheer! Best wishes, {senderName}',
      anniversary:
        'Happy Anniversary {recipientName}! Celebrating your special day with you! With love, {senderName}',
      congratulations:
        'Congratulations {recipientName}! So proud of your achievement! Best regards, {senderName}',
    };
    return (
      templates[data.greetingType as keyof typeof templates] ||
      templates.birthday
    );
  };

  const handleFinalize = () => {
    // Here you would typically save the greeting to your backend
    // For now, we'll just show a success message
    alert('Greeting created successfully!');
    navigate('/');
  };

  if (!greetingData) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4'>
      <div className='max-w-2xl mx-auto space-y-6'>
        <Card>
          <h1 className='text-2xl font-bold text-center mb-6'>
            Preview Your Greeting
          </h1>

          <div className='space-y-6'>
            <DynamicTextPreview
              template={generateTemplate(greetingData)}
              variables={{
                recipientName: greetingData.recipientName,
                senderName: greetingData.senderName,
              }}
              onRegenerate={() => {
                // In a real app, you might generate alternative messages here
                alert('This would generate a new message variation');
              }}
            />

            <div className='border-t pt-4'>
              <AgreeToShareCheckbox
                checked={agreesToShare}
                onChange={setAgreesToShare}
              />
            </div>

            <NextButton onClick={handleFinalize} className='w-full'>
              Create Greeting
            </NextButton>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PreviewScreen;
