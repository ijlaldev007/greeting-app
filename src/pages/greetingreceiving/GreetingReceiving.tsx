import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import GreetingSelection from '../../components/greetingselection/GreetingSelection';
import Button from '../../components/button/Button';
import ButtonContainer from '../../components/button/ButtonContainer';
import TextInput from '../../components/input/TextInput';
import { relations } from '../../constants//Relations';

export default function GreetingReceivingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Step 1: Name input, Step 2: Relationship selection
  const [recipientName, setRecipientName] = useState('');
  const [selectedRelationId, setSelectedRelationId] = useState(4); // Default relation ID

  const handleSelectGreeting = (id: number) => {
    setSelectedRelationId(id);
    console.log('Selected Relation ID:', id);
  };

  // Handle recipient name input
  const handleNameChange = (value: string) => {
    setRecipientName(value);
  };

  // Handle next button in step 1
  const handleNextStep = () => {
    if (step === 1) {
      // Move to relationship selection step
      setStep(2);
    } else {
      // Navigate to greeting done page
      navigate('/greeting-done');
    }
  };

  return (
    <div className='w-full sm:w-full lg:w-1/2 min-h-screen flex flex-col items-center justify-between px-4 pt-6 pb-0'>
      {/* Step 1: Recipient Name Input */}
      <div className='w-full flex flex-col items-center gap-2'>
        {/* Responsive Heading - stays on one line for larger screens */}
        <h1 className='text-2xl sm:text-3xl font-bold text-center leading-tight whitespace-normal sm:whitespace-nowrap'>
          Who is receiving the video greeting?
        </h1>

        {/* Light grey instruction */}
        <p className='text-gray-400 text-sm text-center -mt-1'>
          Type recipient's name
        </p>

        {/* Text Input for recipient's name */}
        <TextInput
          placeholder="Recipient's name here..."
          className='w-full max-w-md text-gray-600 placeholder-gray-400'
          value={recipientName}
          onChange={handleNameChange}
        />
      </div>

      {/* Step 2: Relationship Selection (only shown in step 2) */}
      {step === 2 && (
        <>
          {/* Subheading with varied font size */}
          <h2 className='text-base sm:text-lg md:text-xl font-semibold w-full max-w-md mt-8'>
            The recipient is your:
          </h2>

          {/* Greeting Selection */}
          <div className='w-full flex-1'>
            <GreetingSelection
              options={relations}
              defaultSelectedId={selectedRelationId}
              onSelect={handleSelectGreeting}
            />
          </div>
        </>
      )}

      {/* Spacer div for step 1 to push button to bottom */}
      {step === 1 && <div className='flex-1'></div>}

      {/* Next Button */}
      <ButtonContainer>
        <Button
          text='Next'
          onClick={handleNextStep}
          bgColor='#C90082'
          textColor='#FFFFFF'
          disabled={step === 1 && recipientName.trim() === ''} // Disable if name is empty in step 1
        />
      </ButtonContainer>
    </div>
  );
}
