import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  // Define the application flow
  const appFlow = [
    { path: '/splash', label: 'Splash' },
    { path: '/onboarding', label: 'Onboarding' },
    { path: '/signup', label: 'Sign Up' },
    { path: '/sender-details', label: 'Sender Details' },
    { path: '/greeting-location', label: 'Greeting Location' },
    { path: '/greeting-details', label: 'Greeting Details' },
    { path: '/greeting-receiving', label: 'Greeting Receiving' },
    { path: '/greeting-done', label: 'Greeting Done' },
  ];
  
  // Define demo pages
  const demoPages = [
    { path: '/demo/video-scroller', label: 'Video Scroller Demo' },
    { path: '/demo/text-generation', label: 'Text Generation Demo' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-sm z-50 shadow-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-wrap items-center justify-between">
          {/* App Flow Navigation */}
          <div className="flex flex-wrap items-center space-x-1 text-xs">
            {appFlow.map((item, index) => (
              <React.Fragment key={item.path}>
                <Link
                  to={item.path}
                  className={`px-2 py-1 rounded ${
                    location.pathname === item.path
                      ? 'bg-pink-600 text-white'
                      : 'hover:bg-pink-100'
                  }`}
                >
                  {item.label}
                </Link>
                {index < appFlow.length - 1 && (
                  <span className="text-gray-400">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
          
          {/* Demo Pages Navigation */}
          <div className="flex items-center space-x-2 text-xs">
            {demoPages.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-2 py-1 rounded ${
                  location.pathname === item.path
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-blue-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
