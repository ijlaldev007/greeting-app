import { useNavigate } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import NumberInput from '../../components/input/NumberInput';
import EmailInput from '../../components/input/TextInput';
import Button from '../../components/button/Button';
import ButtonContainer from '../../components/button/ButtonContainer';
import mashaImage from '../../assets/images/signup img.png';
import { signupSchema } from '../../utils/validationSchemas';
import { showSingleErrorToast } from '../../utils/toastUtils';
import { throttle } from 'lodash';
import { useGreeting } from '../../context/GreetingContext';

const SignUp = () => {
  const navigate = useNavigate();
  const { state, setRecipientInfo } = useGreeting();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Initialize form with data from context if available
  useEffect(() => {
    if (state.recipientEmail) {
      setEmail(state.recipientEmail);
    }
    if (state.recipientPhone) {
      setPhone(state.recipientPhone);
    }
  }, [state.recipientEmail, state.recipientPhone]);
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

        // Save data to context
        setRecipientInfo(email, phone);

        // If validation passes, navigate to sender details page
        navigate('/sender-details');
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
    <div className='min-h-screen w-full flex flex-col items-center justify-between px-4 pt-6 pb-0 sm:px-6 md:w-3/4 md:px-10 lg:w-1/2'>
      {/* Top Heading */}
      <div className='w-full text-center mb-4 md:mb-6'>
        <h1 className='typography-heading'>Sign Up</h1>
      </div>

      {/* Inputs */}
      <div className='w-full max-w-sm md:max-w-md lg:max-w-lg space-y-[30px]'>
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
          className='w-[30vh] h-[30vh] ipad:w-[40vh] ipad:h-[40vh] object-cover'
        />
      </div>

      {/* Below Image Heading */}
      <h2 className='typography-heading mt-4 px-2 sm:px-6'>
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
