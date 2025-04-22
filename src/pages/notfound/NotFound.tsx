import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';

const NotFound: React.FC = () => {
  return (
    <PageLayout className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <h1 className="text-6xl font-bold text-pink-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/"
        className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors"
      >
        Go Home
      </Link>
    </PageLayout>
  );
};

export default NotFound;
