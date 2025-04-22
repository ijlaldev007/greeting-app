import { useNavigate } from 'react-router-dom';
import NumberInput from '../../components/input/NumberInput';
import EmailInput from '../../components/input/TextInput';
import Button from '../../components/button/Button';
import ButtonContainer from '../../components/button/ButtonContainer';
import mashaImage from '../../assets/images/signup img.png';

const SignUp = () => {
  const navigate = useNavigate();

  // Navigate to greeting location page
  const handleNext = () => {
    navigate('/greeting-location');
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-between px-4 sm:px-6 md:px-10 pt-6 pb-0'>
      {/* Top Heading */}
      <h1 className='mb-4 text-center text-gray-800 text-[25px] font-semibold font-montserrat leading-[100%]'>
        Sign Up
      </h1>

      {/* Inputs */}
      <div className='w-full max-w-sm md:max-w-md lg:max-w-lg space-y-3'>
        <NumberInput />
        <EmailInput type='email' placeholder='Email' label='Email' />
      </div>

      {/* Masha Image */}
      <div className='mt-6'>
        <img
          src={mashaImage}
          alt='Masha'
          className='w-[160px] sm:w-[180px] h-[160px] sm:h-[180px] object-cover'
        />
      </div>

      {/* Below Image Heading */}
      <h2 className='mt-4 text-center text-gray-800 text-[20px] sm:text-[22px] md:text-[25px] font-semibold font-montserrat leading-[100%] px-2 sm:px-6'>
        The video greeting will be sent to this contact
      </h2>

      {/* Continue Button */}
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
};

export default SignUp;
