import React, { useState } from 'react';
import Card from '../ui/card';

interface Location {
  id: string;
  name: string;
  thumbnailUrl: string;
  videoUrl: string;
}

interface GreetingLocationVideoProps {
  locations: Location[];
  onSelect: (location: Location) => void;
}

const GreetingLocationVideo: React.FC<GreetingLocationVideoProps> = ({
  locations,
  onSelect,
}) => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null,
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSelect = (location: Location) => {
    setSelectedLocation(location);
    onSelect(location);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className='space-y-4'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {locations.map((location) => (
          <Card
            key={location.id}
            className={`cursor-pointer transition-transform hover:scale-105 
              ${
                selectedLocation?.id === location.id
                  ? 'ring-2 ring-purple-500'
                  : ''
              }`}
            onClick={() => handleSelect(location)}
          >
            <div className='relative aspect-video'>
              <img
                src={location.thumbnailUrl}
                alt={location.name}
                className='w-full h-full object-cover rounded-lg'
              />
              <button
                onClick={handlePlay}
                className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40'
              >
                <svg
                  className='w-12 h-12 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
                  />
                </svg>
              </button>
            </div>
            <h3 className='mt-2 text-center font-medium'>{location.name}</h3>
          </Card>
        ))}
      </div>

      {isPlaying && selectedLocation && (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
          <div className='relative w-full max-w-4xl'>
            <button
              onClick={() => setIsPlaying(false)}
              className='absolute -top-10 right-0 text-white hover:text-gray-300'
            >
              Close
            </button>
            <video
              src={selectedLocation.videoUrl}
              className='w-full rounded-lg'
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GreetingLocationVideo;
