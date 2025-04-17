import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../ui/card';
import RadioCheckboxGroup from '../ui/radio-checkbox-group';
import NameInput from '../ui/name-input';
import { NextButton } from '../ui/button';

const GREETING_TYPES = [
  { id: '1', label: 'Happy Birthday', value: 'birthday' },
  { id: '2', label: 'Merry Christmas', value: 'christmas' },
  { id: '3', label: 'Happy Anniversary', value: 'anniversary' },
  { id: '4', label: 'Congratulations', value: 'congratulations' },
];

const RECIPIENT_TYPES = [
  { id: '1', label: 'Friend', value: 'friend' },
  { id: '2', label: 'Family Member', value: 'family' },
  { id: '3', label: 'Colleague', value: 'colleague' },
  { id: '4', label: 'Other', value: 'other' },
];

const GreetingSelection: React.FC = () => {
  const navigate = useNavigate();
  const [greetingType, setGreetingType] = useState('');
  const [recipientType, setRecipientType] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [senderName, setSenderName] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!greetingType) newErrors.greetingType = 'Please select a greeting type';
    if (!recipientType)
      newErrors.recipientType = 'Please select a recipient type';
    if (!recipientName.trim())
      newErrors.recipientName = 'Please enter recipient name';
    if (!senderName.trim()) newErrors.senderName = 'Please enter your name';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Store the selection data
      const greetingData = {
        greetingType,
        recipientType,
        recipientName,
        senderName,
      };
      localStorage.setItem('greetingData', JSON.stringify(greetingData));

      // Navigate to location selection
      navigate('/location-selection');
    }
  };

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4'>
      <div className='max-w-2xl mx-auto space-y-6'>
        <Card>
          <h1 className='text-2xl font-bold text-center mb-6'>
            Create Your Greeting
          </h1>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <h2 className='text-lg font-semibold mb-3'>
                Select Greeting Type
              </h2>
              <RadioCheckboxGroup
                options={GREETING_TYPES}
                value={greetingType}
                onChange={setGreetingType}
                name='greetingType'
              />
              {errors.greetingType && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.greetingType}
                </p>
              )}
            </div>

            <div>
              <h2 className='text-lg font-semibold mb-3'>
                Select Recipient Type
              </h2>
              <RadioCheckboxGroup
                options={RECIPIENT_TYPES}
                value={recipientType}
                onChange={setRecipientType}
                name='recipientType'
              />
              {errors.recipientType && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.recipientType}
                </p>
              )}
            </div>

            <div className='space-y-4'>
              <NameInput
                label="Recipient's Name"
                value={recipientName}
                onChange={setRecipientName}
                placeholder="Enter recipient's name"
                error={errors.recipientName}
              />

              <NameInput
                label='Your Name'
                value={senderName}
                onChange={setSenderName}
                placeholder='Enter your name'
                error={errors.senderName}
              />
            </div>

            <NextButton type='submit' className='w-full'>
              Choose Location
            </NextButton>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default GreetingSelection;
