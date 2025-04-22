import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './SplashScreen.css';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-navigate to onboarding after 3 seconds
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 3000);

    // Clean up timer if component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='flex justify-center items-center w-full h-full'>
      <img
        src={logo}
        alt='Logo'
        className='pulse-animation max-w-[140%] sm:max-w-[100%] md:max-w-[100%] lg:max-w-[50%] object-contain'
      />
    </div>
  );
};

export default SplashScreen;
