import React, { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default PageLayout;
