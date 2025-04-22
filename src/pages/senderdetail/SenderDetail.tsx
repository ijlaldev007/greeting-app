import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from '../../components/input/TextInput';
import Button from '../../components/button/Button';
import mashaImage from '../../assets/images/side-masha.png';
import { senderDetailsSchema } from '../../utils/validationSchemas';
import { showSingleErrorToast } from '../../utils/toastUtils';

const GreeterNameScreen = () => {
  const navigate = useNavigate();
  const [senderName, setSenderName] = useState('');
  const handleNameChange = (value: string) => {
    setSenderName(value);
  };

  const handleNext = async () => {
    try {
      // Validate form data against schema
      await senderDetailsSchema.validate({ senderName }, { abortEarly: false });

      // If validation passes, navigate to next page
      navigate('/greeting-location');
    } catch (error) {
      // Handle validation errors with type assertion for Yup error
      const yupError = error as { inner?: { path: string; message: string }[] };
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
    <div className='min-h-screen w-full flex flex-col justify-between px-6 py-8 relative overflow-hidden'>
      <div>
        {/* Heading Section */}
        <div className='text-center mt-8 z-10 relative'>
          <h1 className='text-[22px] font-bold text-gray-900 font-montserrat'>
            Who is sending the video greeting
          </h1>
          <p className='text-base text-gray-700 mt-2'>Type your name here</p>
        </div>

        {/* Input Field (on top of background image) */}
        <div className='relative w-full max-w-md mx-auto mt-6 z-10'>
          <TextInput
            placeholder="Greeter's name here (default name)"
            type='text'
            className='bg-white relative z-10'
            value={senderName}
            onChange={handleNameChange}
          />
        </div>
      </div>

      {/* Background Image (Masha) */}
      <div
        className='
    absolute bottom-0 right-0
    w-[180px]
    sm:w-[300px] sm:h-auto
    md:w-[400px]
    lg:w-[400px]
    z-0 opacity-100
    pointer-events-none select-none
    transition-all duration-300 ease-in-out
  '
      >
        <img
          src={mashaImage}
          alt='Masha'
          className='w-full h-auto object-contain'
        />
      </div>

      {/* Button */}
      <div className='mt-8 w-full px-4 sm:px-0 max-w-md mx-auto z-10'>
        <Button
          text='Next'
          onClick={handleNext}
          disabled={!senderName.trim()}
          bgColor='#C90082'
          textColor='#FFFFFF'
          className='w-full py-3 rounded-full text-base font-semibold'
        />
      </div>
    </div>
  );
};

export default GreeterNameScreen;
