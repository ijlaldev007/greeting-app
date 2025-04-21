import React, { useState } from 'react';
import './App.css';
import backgroundImage from './assets/images/background-pic.jpg';
import GreetingLocation from './pages/greetinglocation/GreetingLocation';
import VideoScroller from './components/videoscroller/VideoScroller';
import TextGenerationDemo from './components/textgeneration/TextGenerationDemo';

function App() {
  const [showVideoScroller, setShowVideoScroller] = useState(false);
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden p-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Toggle between components for demo purposes */}
      {showVideoScroller ? (
        <VideoScroller containerHeight={600} />
      ) : (
        <TextGenerationDemo />
      )}

      {/* Toggle button */}
      <button
        className='absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md'
        onClick={() => setShowVideoScroller(!showVideoScroller)}
      >
        Switch to {showVideoScroller ? 'Text
