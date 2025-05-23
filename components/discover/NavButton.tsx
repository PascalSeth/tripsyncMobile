// NavButton.tsx
import React from 'react';
import tw from 'twrnc';

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, label, isActive, onClick }) => {
  return (
    <button 
      style={tw`flex flex-col items-center p-2 ${isActive ? 'bg-green-500/10 rounded-lg' : ''}`}
      onClick={onClick}
    >
      <div style={tw`w-10 h-10 flex items-center justify-center rounded-full ${isActive ? 'bg-green-500' : 'bg-gray-700'}`}>
        {icon}
      </div>
      <span style={tw`text-xs mt-1 ${isActive ? 'text-green-500' : 'text-gray-400'}`}>{label}</span>
    </button>
  );
};

export default NavButton;