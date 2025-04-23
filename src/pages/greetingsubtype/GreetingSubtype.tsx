import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GreetingSelection from '../../components/greetingselection/GreetingSelection';
import Button from '../../components/button/Button';
import ButtonContainer from '../../components/button/ButtonContainer';
import { useGreeting } from '../../context/GreetingContext';
import {
  getSubtypesForGreeting,
  getSubtypeHeading,
} from '../../constants/greetingSubtypes';
import './GreetingSubtype.css';

export default function GreetingSubtype() {
  const navigate = useNavigate();
  const { state, setGreetingSubtype } = useGreeting();
  const [selectedId, setSelectedId] = useState<number>(
    state.selectedSubtypeId || 0,
  );
  const [subtypeOptions, setSubtypeOptions] = useState<
    Array<{ id: number; name: string }>
  >([]);
  const [pageHeading, setPageHeading] = useState<string>(
    'Select a specific option',
  );

  // Initialize with data from context and load subtypes
  useEffect(() => {
    // If we don't have a main greeting type selected, go back to greeting-details
    if (!state.selectedGreetingId) {
      navigate('/greeting-details');
      return;
    }

    // Get subtypes for the selected greeting type
    const subtypes = getSubtypesForGreeting(state.selectedGreetingId);
    setSubtypeOptions(subtypes);

    // Set the heading based on the greeting type
    const heading = getSubtypeHeading(state.selectedGreetingId);
    setPageHeading(heading);

    // If we already have a selected subtype, use it
    if (state.selectedSubtypeId) {
      setSelectedId(state.selectedSubtypeId);
    } else if (subtypes.length > 0) {
      // Otherwise select the first option by default
      setSelectedId(subtypes[0].id);
    }
  }, [state.selectedGreetingId, state.selectedSubtypeId, navigate]);

  const handleSelectSubtype = (id: number) => {
    setSelectedId(id);
  };

  // Navigate to greeting receiving page
  const handleNext = () => {
    // Find the selected subtype
    const selectedSubtype = subtypeOptions.find(
      (subtype) => subtype.id === selectedId,
    );

    if (selectedSubtype) {
      // Save to context
      setGreetingSubtype(selectedSubtype.name, selectedSubtype.id);
    }

    navigate('/greeting-receiving');
  };

  // Go back to greeting details
  const handleBack = () => {
    navigate('/greeting-details');
  };

  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-between px-4 pt-6 pb-0 sm:px-6 md:w-3/4 md:px-10 lg:w-1/2 subtype-page'>
      {/* Heading */}
      <div className='w-full text-center mb-4 md:mb-6'>
        <h1 className='typography-heading'>{pageHeading}</h1>
      </div>

      {/* Greeting Selection Component */}
      <div className='w-full flex-1'>
        {subtypeOptions.length > 0 ? (
          <GreetingSelection
            options={subtypeOptions}
            defaultSelectedId={selectedId}
            onSelect={handleSelectSubtype}
          />
        ) : (
          <div className='no-subtypes-message'>
            <p>No specific options available for this greeting type.</p>
          </div>
        )}
      </div>

      {/* Buttons */}
      <ButtonContainer>
        <Button
          text='Next'
          onClick={handleNext}
          bgColor='#C90082'
          textColor='#FFFFFF'
          disabled={subtypeOptions.length === 0}
        />
        <Button
          text='Back'
          onClick={handleBack}
          bgColor='#FFFFFF'
          textColor='#333333'
        />
      </ButtonContainer>
    </div>
  );
}
