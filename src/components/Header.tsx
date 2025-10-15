import React from 'react';
import { User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 relative z-30">
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold text-gray-900">
          Requests Generator
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <User className="w-4 h-4" />
            <span>dorontis</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;