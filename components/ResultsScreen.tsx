
import React, { useMemo } from 'react';

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ score, totalQuestions, onRestart }) => {
  const { message, comment, color } = useMemo(() => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage === 100) {
      return {
        message: 'Perfect Score!',
        comment: 'Outstanding! You have a deep understanding of the poem. Well done!',
        color: 'text-green-600',
      };
    }
    if (percentage >= 60) {
      return {
        message: 'Good Job!',
        comment: 'You have a solid grasp of the poem. A quick review of the text will surely perfect your knowledge!',
        color: 'text-yellow-600',
      };
    }
    return {
      message: 'Needs Improvement',
      comment: "Don't be discouraged. Re-reading the poem and paying close attention to its details will help you improve your score.",
      color: 'text-red-600',
    };
  }, [score, totalQuestions]);

  return (
    <div className="flex flex-col items-center text-center animate-fade-in">
      <h2 className={`text-4xl font-bold mb-2 ${color}`}>{message}</h2>
      <p className="text-6xl font-bold text-stone-800 my-4">
        {score} / {totalQuestions}
      </p>
      <p className="text-stone-600 mb-8 max-w-md">{comment}</p>
      <button
        onClick={onRestart}
        className="bg-stone-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-stone-700 active:scale-95 transform transition-all duration-300"
      >
        Try Again
      </button>
    </div>
  );
};

export default ResultsScreen;
