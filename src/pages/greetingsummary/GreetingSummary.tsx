import { useGreeting } from '../../context/GreetingContext';
import Button from '../../components/button/Button';
import ButtonContainer from '../../components/button/ButtonContainer';
import { useNavigate } from 'react-router-dom';

const GreetingSummary = () => {
  const { state } = useGreeting();
  const navigate = useNavigate();

  return (
    <div className='min-h-screen w-full flex flex-col items-center px-4 py-8'>
      <h1 className='text-2xl font-bold mb-8'>Greeting Summary</h1>

      <div className='w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-4'>
        {/* Sender Section */}
        <div className='border-b pb-4'>
          <h2 className='text-xl font-semibold mb-3 text-pink-600'>
            Sender Details
          </h2>
          <p className='text-gray-700'>
            <span className='font-medium'>Name:</span> {state.senderName}
          </p>
        </div>

        {/* Recipient Section */}
        <div className='border-b pb-4'>
          <h2 className='text-xl font-semibold mb-3 text-pink-600'>
            Recipient Details
          </h2>
          <p className='text-gray-700'>
            <span className='font-medium'>Name:</span> {state.recipientName}
          </p>
          <p className='text-gray-700'>
            <span className='font-medium'>Relationship:</span>{' '}
            {state.recipientRelationship}
          </p>
          <p className='text-gray-700'>
            <span className='font-medium'>Email:</span> {state.recipientEmail}
          </p>
          <p className='text-gray-700'>
            <span className='font-medium'>Phone:</span> {state.recipientPhone}
          </p>
        </div>

        {/* Greeting Section */}
        <div className='border-b pb-4'>
          <h2 className='text-xl font-semibold mb-3 text-pink-600'>
            Greeting Details
          </h2>
          <p className='text-gray-700'>
            <span className='font-medium'>Type:</span> {state.greetingType}
          </p>
        </div>

        {/* Video Section */}
        <div className='pb-4'>
          <h2 className='text-xl font-semibold mb-3 text-pink-600'>
            Selected Video
          </h2>
          <p className='text-gray-700'>
            <span className='font-medium'>Title:</span> {state.selectedVideoSrc}
          </p>
        </div>
      </div>

      <ButtonContainer>
        <Button
          text='Back to Home'
          onClick={() => navigate('/')}
          bgColor='#C90082'
          textColor='#FFFFFF'
        />
      </ButtonContainer>
    </div>
  );
};

export default GreetingSummary;
