import React from 'react';
import { X } from 'lucide-react';
import LoginPage from '../pages/Login';
import SignupPage from '../pages/Signup';

interface AuthModalProps {
  authType: 'login' | 'signup';
  onClose: () => void;
  onSwitch: () => void;
  onSuccess: () => void;
}

export default function AuthModal({ authType, onClose, onSwitch, onSuccess }: AuthModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close authentication modal"
        >
          <X className="w-6 h-6" />
        </button>
        
        {authType === 'login' ? (
          <LoginPage onSwitch={onSwitch} onSuccess={onSuccess} />
        ) : (
          <SignupPage onSwitch={onSwitch} onSuccess={onSuccess} />
        )}
      </div>
    </div>
  );
}