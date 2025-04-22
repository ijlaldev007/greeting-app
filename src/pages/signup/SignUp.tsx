import { useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';
import NumberInput from '../../components/input/NumberInput';
import EmailInput from '../../components/input/TextInput';
import Button from '../../components/button/Button';
import ButtonContainer from '../../components/button/ButtonContainer';
import mashaImage from '../../assets/images/signup img.png';
import { signupSchema } from '../../utils/validationSchemas';
import { showSingleErrorToast } from '../../utils/toastUtils';
import { throttle } from 'lodash';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // Handle email input change
  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  // Handle phone input change
  const handlePhoneChange = (value: string) => {
    setPhone(value);
  };

  // Navigate to greeting location page after validation with throttling
  const handleNext = useCallback(
    throttle(async () => {
      try {
        // Validate form data against schema
        await signupSchema.validate(
          { email, phoneNumber: phone },
          { abortEarly: false },
        );

        // If validation passes, navigate to next page
        navigate('/greeting-location');
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
    }, 1000),
    [email, phone, navigate],
  );

  return (
    <div className='min-h-screen flex flex-col items-center justify-between px-4 sm:px-6 md:px-10 pt-6 pb-0'>
      {/* Top Heading */}
      <h1 className='mb-4 text-center text-gray-800 text-[25px] font-semibold font-montserrat leading-[100%]'>
        Sign Up
      </h1>

      {/* Inputs */}
      <div className='w-full max-w-sm md:max-w-md lg:max-w-lg space-y-3'>
        <NumberInput value={phone} onChange={handlePhoneChange} />
        <EmailInput
          type='email'
          placeholder='Email'
          label='Email'
          value={email}
          onChange={handleEmailChange}
        />
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
          disabled={!email.trim() || !phone.trim()}
        />
      </ButtonContainer>
    </div>
  );
};

export default SignUp;
