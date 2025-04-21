import { useNavigate } from 'react-router-dom';
import Video from '../../components/video/Video';
import Button from '../../components/button/Button';

const OnBoardingVideoScreen = () => {
  const navigate = useNavigate();

  // Navigate to signup page
  const handleNavigation = () => {
    navigate('/signup');
  };

  return (
    <div className='flex flex-col px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden'>
      {/* Centered Video */}
      <div className='flex justify-center'>
        <Video title='How Greeting App Works' />
      </div>

      {/* Bottom Buttons */}
      <div className='mt-8 flex flex-col items-center space-y-4 w-full max-w-sm mx-auto md:max-w-md'>
        <Button
          text='Next'
          onClick={handleNavigation}
          bgColor='#C90082'
          textColor='#FFFFFF'
        />
        <Button
          text='Skip'
          onClick={handleNavigation}
          bgColor='#FFFFFF'
          textColor='#C90082'
        />
      </div>
    </div>
  );
};

export default OnBoardingVideoScreen;
