import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import ButtonContainer from '../../components/button/ButtonContainer';
import mashaImage from '../../assets/images/signup img.png';

const GreetingDone = () => {
  const navigate = useNavigate();

  const handleDone = () => {
    navigate('/greeting-summary');
  };

  return (
    <div className='min-h-screen w-full flex justify-between flex-col items-center px-4 sm:px-6 md:px-10 pt-6 pb-0'>
      <div>
        {/* Mobile view Heading */}
        <h1 className='mb-4 text-center text-gray-800 text-[25px] md:text-[32px] font-semibold font-montserrat leading-[100%] block md:hidden'>
          Yey!
          <br />
          Masha is creating
          <br />
          your greeting!
        </h1>

        {/* Tablet and Web view Heading */}
        <h1 className='mb-4 text-center text-gray-800 text-[25px] md:text-[32px] font-semibold font-montserrat leading-[100%] hidden md:block'>
          Yey! Masha is creating your greeting!
        </h1>

        {/* Paragraphs with larger text on md+ screens */}
        <p className='text-[16px] md:text-[18px] text-center text-gray-700'>
          It takes Masha up to 48 hours to record a greeting.
        </p>
        <p className='text-[16px] md:text-[18px] text-center text-gray-700 mt-1'>
          Once the greeting is ready you will get a link for viewing and sharing
          via email
        </p>

        <a
          href='mailto:MashaGreeting@Support.ai'
          className='mt-3 text-white border-b border-white inline-block mx-auto font-medium text-[16px] md:text-[18px]'
        >
          MashaGreeting@Support.ai
        </a>
      </div>

      {/* Masha Image */}
      <div className='mt-6'>
        <img
          src={mashaImage}
          alt='Masha'
          className='w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:w-[300px] lg:h-[300px] object-contain'
        />
      </div>

      {/* Continue Button */}
      <ButtonContainer>
        <Button
          text='Done'
          onClick={handleDone}
          bgColor='#C90082'
          textColor='#FFFFFF'
        />
      </ButtonContainer>
    </div>
  );
};

export default GreetingDone;
