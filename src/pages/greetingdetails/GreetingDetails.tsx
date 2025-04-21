import { useNavigate } from 'react-router-dom';
import GreetingSelection from '../../components/greetingselection/GreetingSelection';
import Button from '../../components/button/Button';
import ButtonContainer from '../../components/button/ButtonContainer';
import { greetings } from '../../constants/greetings';

export default function GreetingDetailsPage() {
  const navigate = useNavigate();

  const handleSelectGreeting = (id: number) => {
    console.log('Selected Greeting ID:', id);
  };

  // Navigate to greeting receiving page
  const handleNext = () => {
    navigate('/greeting-receiving');
  };

  return (
    <div className='w-full sm:w-full lg:w-1/2 min-h-screen flex flex-col items-center justify-between px-4 pt-6 pb-0'>
      {/* Heading */}
      <h1 className='text-3xl font-bold text-center mb-4'>
        What do you want to congratulate with?
      </h1>

      {/* Greeting Selection Component */}
      <div className='w-full flex-1'>
        <GreetingSelection
          options={greetings}
          defaultSelectedId={4} // Optional: Default to "Merry Christmas"
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
