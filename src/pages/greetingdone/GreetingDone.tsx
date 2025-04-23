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
        <h1 className='typography-heading mb-4 block md:hidden'>
          Yey!
          <br />
          Masha is creating
          <br />
          your greeting!
        </h1>

        {/* Tablet and Web view Heading */}
        <h1 className='typography-heading mb-4 hidden md:block'>
          Yey! Masha is creating your greeting!
        </h1>

        {/* Paragraphs with larger text on md+ screens */}
        <p className='typography-subheading'>
          It takes Masha up to 48 hours to record a greeting.
        </p>
        <p className='typography-subheading mt-1'>
          Once the greeting is ready you will get a link for viewing and sharing
          via email
        </p>

        <a
          href='mailto:MashaGreeting@Support.ai'
          className='mt-3 text-white border-b border-white inline-block mx-auto typography-greeting-item'
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
