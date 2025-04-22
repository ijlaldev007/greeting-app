import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GreetingSelection from '../../components/greetingselection/GreetingSelection';
import Button from '../../components/button/Button';
import ButtonContainer from '../../components/button/ButtonContainer';
import { greetings } from '../../constants/greetings';
import { useGreeting } from '../../context/GreetingContext';

export default function GreetingDetailsPage() {
  const navigate = useNavigate();
  const { state, setGreetingType } = useGreeting();
  const [selectedId, setSelectedId] = useState<number>(
    state.selectedGreetingId || 4,
  );

  // Initialize with data from context if available
  useEffect(() => {
    if (state.selectedGreetingId) {
      setSelectedId(state.selectedGreetingId);
    }
  }, [state.selectedGreetingId]);

  const handleSelectGreeting = (id: number) => {
    setSelectedId(id);
  };

  // Navigate to greeting receiving page
  const handleNext = () => {
    // Find the selected greeting
    const selectedGreeting = greetings.find(
      (greeting) => greeting.id === selectedId,
    );

    if (selectedGreeting) {
      // Save to context
      setGreetingType(selectedGreeting.name, selectedId);
    }

    navigate('/sender-details');
  };

  return (
    <div className='w-full sm:w-full md:w-3/4 lg:w-1/2 min-h-screen flex flex-col items-center justify-between px-4 pt-6 pb-0'>
      {/* Heading */}
      <h1 className='typography-heading mb-4 md:mb-6'>
        What do you want to congratulate with?
      </h1>

      {/* Greeting Selection Component */}
      <div className='w-full flex-1'>
        <GreetingSelection
          options={greetings}
          defaultSelectedId={selectedId}
          onSelect={handleSelectGreeting}
        />
      </div>

      {/* Next Button */}
      <ButtonContainer>
        <Button
          text='Next'
          onClick={handleNext}
          bgColor='#C90082'
          textColor='#FFFFFF'
        />
      </ButtonContainer>
    </div>
  );
}
