
import React, { useState } from 'react';
import type { User } from '../types';

interface WelcomeScreenProps {
  onStart: (user: User) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [error, setError] = useState('');

  const handleStart = () => {
    if (name.trim() && className.trim()) {
      onStart({ name, class: className });
    } else {
      setError('Please enter your name and class to begin.');
    }
  };

  return (
    <div className="flex flex-col items-center text-center animate-fade-in">
      <h2 className="text-3xl font-bold mb-4">Welcome, Student!</h2>
      <p className="text-stone-600 mb-8 max-w-md">
        Test your knowledge of D.H. Lawrence's masterful poem, "Snake". Enter your details below to begin the quiz.
      </p>
      <div className="w-full max-w-sm space-y-4">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 bg-white border-2 border-stone-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
        />
        <input
          type="text"
          placeholder="Enter your class (e.g., English 11)"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          className="w-full px-4 py-3 bg-white border-2 border-stone-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button
          onClick={handleStart}
          className="w-full bg-stone-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-stone-700 active:scale-95 transform transition-all duration-300"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
