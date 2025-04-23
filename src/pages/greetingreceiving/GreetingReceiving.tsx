import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GreetingSelection from '../../components/greetingselection/GreetingSelection';
import Button from '../../components/button/Button';
import ButtonContainer from '../../components/button/ButtonContainer';
import TextInput from '../../components/input/TextInput';
import { relations } from '../../constants//Relations';
import { recipientDetailsSchema } from '../../utils/validationSchemas';
import { showSingleErrorToast } from '../../utils/toastUtils';
import { useGreeting } from '../../context/GreetingContext';

export default function GreetingReceivingPage() {
  const navigate = useNavigate();
  const { state, setRecipientDetails } = useGreeting();
  const [step, setStep] = useState(1); // Step 1: Name input, Step 2: Relationship selection
  const [recipientName, setRecipientName] = useState(state.recipientName || '');
  const [selectedRelationId, setSelectedRelationId] = useState(4); // Default relation ID

  // Initialize with data from context if available
  useEffect(() => {
    if (state.recipientName) {
      setRecipientName(state.recipientName);
    }

    // If we have relationship data and we're in step 2, set the selected relation ID
    if (state.recipientRelationship && step === 2) {
      const relationObj = relations.find(
        (rel) => rel.name === state.recipientRelationship,
      );
      if (relationObj) {
        setSelectedRelationId(relationObj.id);
      }
    }
  }, [state.recipientName, state.recipientRelationship, step]);

  const handleSelectGreeting = (id: number) => {
    setSelectedRelationId(id);
    console.log('Selected Relation ID:', id);
  };

  // Handle recipient name input
  const handleNameChange = (value: string) => {
    setRecipientName(value);
  };

  // Handle next button
  const handleNextStep = async () => {
    try {
      if (step === 1) {
        // Validate recipient name before proceeding to step 2
        await recipientDetailsSchema.validate(
          { recipientName, relationship: 'temp' }, // Add temp value for relationship
          { abortEarly: false },
        );

        // If validation passes, move to relationship selection step
        setStep(2);
      } else {
        // Validate both recipient name and relationship before navigating
        await recipientDetailsSchema.validate(
          {
            recipientName,
            relationship: selectedRelationId.toString(),
          },
          { abortEarly: false },
        );

        // Find the selected relation
        const selectedRelation = relations.find(
          (relation) => relation.id === selectedRelationId,
        );

        if (selectedRelation) {
          // Save to context
          setRecipientDetails(recipientName, selectedRelation.name);
        }

        // If validation passes, navigate to greeting location page
        navigate('/greeting-location');
      }
    } catch (error) {
      // Handle validation errors with type assertion for Yup error
      const yupError = error as {
        inner?: { path: string; message: string }[];
      };
      if (yupError.inner && yupError.inner.length > 0) {
        // Show a single toast for the first error
        showSingleErrorToast(yupError.inner[0].message);
      } else {
        // Handle unexpected errors
        showSingleErrorToast('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className='min-h-screen w-full flex flex-col justify-between'>
      <div>
        {/* Heading Section */}
        <div className='text-center mt-8'>
          {/* Responsive Heading - stays on one line for larger screens */}
          <h1 className='typography-heading mb-4 whitespace-normal sm:whitespace-nowrap'>
            Who is receiving the video greeting?
          </h1>

          {/* Light grey instruction */}
          <p className='typography-subheading mt-2'>Type recipient's name</p>
        </div>

        {/* Input Field */}
        <div className='relative w-full max-w-md mx-auto mt-6'>
          <TextInput
            placeholder="Recipient's name here..."
            className='bg-white typography-placeholder text-heading'
            value={recipientName}
            onChange={handleNameChange}
            maxLength={50}
          />
        </div>
      </div>

      {/* Step 2: Relationship Selection (only shown in step 2) */}
      {step === 2 && (
        <>
          {/* Subheading */}
          <h2 className='typography-label w-full max-w-md mx-auto text-center mt-4'>
            The recipient is your:
          </h2>

          {/* Greeting Selection */}
          <div className='w-full max-w-md mx-auto flex-1 mb-2'>
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
