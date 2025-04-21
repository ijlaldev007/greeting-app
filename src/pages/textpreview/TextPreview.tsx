import React from 'react';
import { useNavigate } from 'react-router-dom';
import TextGenerationDemo from '../../components/textgeneration/TextGenerationDemo';
import Button from '../../components/button/Button';
import ButtonContainer from '../../components/button/ButtonContainer';
import { GreetingType } from '../../constants/greetingTemplates';
import './TextPreview.css';

const TextPreview = () => {
  const navigate = useNavigate();

  // Function to handle "Great! Create my Greeting" button click
  const handleCreateGreeting = () => {
    navigate('/greeting-done');
  };

  // Function to handle "Change" button click
  const handleChange = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className='text-preview-page'>
      <h1 className='text-preview-title'>
        This is a text preview of your video greeting
      </h1>

      <div className='text-preview-content'>
        <TextGenerationDemo greetingType={GreetingType.BIRTHDAY} />
      </div>

      <ButtonContainer className='text-preview-actions'>
        <Button
          text='Great! Create my Greeting'
          onClick={handleCreateGreeting}
          bgColor='#C90082'
          textColor='#FFFFFF'
        />
        <Button
          text='Change'
          onClick={handleChange}
          bgColor='#FFFFFF'
          textColor='#333333'
        />
      </ButtonContainer>
    </div>
  );
};

export default TextPreview;
