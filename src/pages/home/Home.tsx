import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';

const Home: React.FC = () => {
  // Define the application flow
  const appFlow = [
    { path: '/splash', label: 'Splash Screen', description: 'Initial app loading screen' },
    { path: '/onboarding', label: 'Onboarding', description: 'Introduction to the app' },
    { path: '/signup', label: 'Sign Up', description: 'User registration' },
    { path: '/sender-details', label: 'Sender Details', description: 'Information about the greeting sender' },
    { path: '/greeting-location', label: 'Greeting Location', description: 'Choose where the greeting takes place' },
    { path: '/greeting-details', label: 'Greeting Details', description: 'Customize greeting content' },
    { path: '/greeting-receiving', label: 'Greeting Receiving', description: 'Recipient information' },
    { path: '/greeting-done', label: 'Greeting Done', description: 'Confirmation screen' },
  ];
  
  // Define demo pages
  const demoPages = [
    { path: '/demo/video-scroller', label: 'Video Scroller Demo', description: 'Demo of the video selection component' },
    { path: '/demo/text-generation', label: 'Text Generation Demo', description: 'Demo of the text generation component' },
  ];

  return (
    <PageLayout className="py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Greeting App</h1>
        <p className="text-gray-600">Navigate through the app using the links below</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Main App Flow */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-pink-600">Main Application Flow</h2>
          <div className="space-y-3">
            {appFlow.map((item, index) => (
              <div key={item.path} className="flex items-center">
                <span className="bg-pink-100 text-pink-800 rounded-full w-6 h-6 flex items-center justify-center mr-3">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <Link 
                    to={item.path}
                    className="text-pink-600 hover:text-pink-800 font-medium"
                  >
                    {item.label}
                  </Link>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Demo Pages */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Demo Components</h2>
          <div className="space-y-4">
            {demoPages.map((item) => (
              <div key={item.path} className="border-b border-gray-100 pb-3">
                <Link 
                  to={item.path}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {item.label}
                </Link>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
