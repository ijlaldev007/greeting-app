import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import ButtonContainer from '../../components/button/ButtonContainer';
import VideoComponent from '../../components/videoscroller/VideoScroller';

export default function GreetingLocationPage() {
  const navigate = useNavigate();

  // Navigate to greeting details page
  const handleNext = () => {
    navigate('/greeting-details');
  };

  return (
    <div className='w-full sm:w-full lg:w-1/2 min-h-screen flex flex-col items-center justify-evenly px-4'>
      {/* Heading */}
      <h1 className='text-2xl sm:text-3xl font-bold text-center leading-tight mb-4'>
        Choose the <br className='sm:hidden' />
        greeting location
      </h1>

      {/* Video Component */}
      <VideoComponent />

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
