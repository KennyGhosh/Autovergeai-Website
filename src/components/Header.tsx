import React from 'react';

interface HeaderProps {
  onGetInTouchClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onGetInTouchClick }) => {
  return (
    <header className="absolute top-0 left-0 right-0 z-40 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-center py-6">
          <img 
            src="/autoverge-logo.png" 
            alt="AutoVerge AI" 
            className="h-20 w-auto sm:h-20 drop-shadow-sm"
          />
        </div>
      </div>
    </header>
  );
};