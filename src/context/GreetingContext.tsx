import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of our context state
interface GreetingContextState {
  // Recipient info (from SignUp)
  recipientEmail: string;
  recipientPhone: string;

  // Sender info (from SenderDetail)
  senderName: string;

  // Greeting type (from GreetingDetails)
  greetingType: string;
  selectedGreetingId: number;

  // Greeting subtype (from GreetingSubtype)
  greetingSubtype: string;
  selectedSubtypeId: number;

  // Recipient details (from GreetingReceiving)
  recipientName: string;
  recipientRelationship: string;

  // Video selection (from GreetingLocation)
  selectedVideoId: string;
  selectedVideoSrc: string;
  selectedVideoTitle: string;
}

// Define the shape of our context (state + actions)
interface GreetingContextType {
  state: GreetingContextState;

  // Actions to update the state
  setRecipientInfo: (email: string, phone: string) => void;
  setSenderName: (name: string) => void;
  setGreetingType: (type: string, id: number) => void;
  setGreetingSubtype: (subtype: string, id: number) => void;
  setRecipientDetails: (name: string, relationship: string) => void;
  setSelectedVideo: (id: string, src: string, title: string) => void;
  resetData: () => void;
}

// Create the context with a default undefined value
const GreetingContext = createContext<GreetingContextType | undefined>(
  undefined,
);

// Initial state for the context
const initialState: GreetingContextState = {
  recipientEmail: '',
  recipientPhone: '',
  senderName: '',
  greetingType: '',
  selectedGreetingId: 0,
  greetingSubtype: '',
  selectedSubtypeId: 0,
  recipientName: '',
  recipientRelationship: '',
  selectedVideoId: '',
  selectedVideoSrc: '',
  selectedVideoTitle: '',
};

// Provider component that wraps the app and makes the context available
export const GreetingProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // State for all greeting data
  const [state, setState] = useState<GreetingContextState>(initialState);

  // Helper functions to update state
  const setRecipientInfo = (email: string, phone: string) => {
    setState((prevState) => ({
      ...prevState,
      recipientEmail: email,
      recipientPhone: phone,
    }));
  };

  const setSenderName = (name: string) => {
    setState((prevState) => ({
      ...prevState,
      senderName: name,
    }));
  };

  const setGreetingType = (type: string, id: number) => {
    setState((prevState) => ({
      ...prevState,
      greetingType: type,
      selectedGreetingId: id,
    }));
  };

  const setGreetingSubtype = (subtype: string, id: number) => {
    setState((prevState) => ({
      ...prevState,
      greetingSubtype: subtype,
      selectedSubtypeId: id,
    }));
  };

  const setRecipientDetails = (name: string, relationship: string) => {
    setState((prevState) => ({
      ...prevState,
      recipientName: name,
      recipientRelationship: relationship,
    }));
  };

  const setSelectedVideo = (id: string, src: string, title: string) => {
    setState((prevState) => ({
      ...prevState,
      selectedVideoId: id,
      selectedVideoSrc: src,
      selectedVideoTitle: title,
    }));
  };

  const resetData = () => {
    setState(initialState);
  };

  // Value object that will be passed to consumers
  const value = {
    state,
    setRecipientInfo,
    setSenderName,
    setGreetingType,
    setGreetingSubtype,
    setRecipientDetails,
    setSelectedVideo,

    resetData,
  };

  return (
    <GreetingContext.Provider value={value}>
      {children}
    </GreetingContext.Provider>
  );
};

// Custom hook to use the greeting context
export const useGreeting = () => {
  const context = useContext(GreetingContext);
  if (context === undefined) {
    throw new Error('useGreeting must be used within a GreetingProvider');
  }
  return context;
};
