import { useNavigate } from 'react-router-dom';
import GreetingSelection from '../../components/greetingselection/GreetingSelection';
import Button from '../../components/button/Button';
import ButtonContainer from '../../components/button/ButtonContainer';
import TextInput from '../../components/input/TextInput';
import { relations } from '../../constants//Relations';

export default function GreetingReceivingPage() {
  const navigate = useNavigate();

  const handleSelectGreeting = (id: number) => {
    console.log('Selected Relation ID:', id);
  };

  // Navigate to greeting done page
  const handleNext = () => {
    navigate('/greeting-done');
  };

  return (
    <div className='w-full sm:w-full lg:w-1/2 min-h-screen flex flex-col items-center justify-between px-4 py-10'>
      <div className='px-2 sm:px-4 py-4 w-full flex flex-col items-center gap-2'>
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
        />
      </div>

      {/* Subheading with varied font size */}
      <h2 className='text-base sm:text-lg md:text-xl font-semibold w-full max-w-md'>
        The recipient is your:
      </h2>

      {/* Greeting Selection */}
      <div className='w-full h-[300px] md:h-[600px] lg:h-[330px]'>
        <GreetingSelection
          options={relations}
          defaultSelectedId={4}
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
