
import React, { useState, useMemo } from 'react';
import { QUESTIONS } from '../constants';
import type { Answer, Question, MatchingQuestion, MultipleChoiceQuestion } from '../types';
import { QuestionType } from '../types';

interface QuizScreenProps {
  onSubmit: (answers: Record<number, Answer>) => void;
}

const ProgressBar: React.FC<{ current: number; total: number }> = ({ current, total }) => {
  const percentage = (current / total) * 100;
  return (
    <div className="w-full bg-stone-200 rounded-full h-2.5 mb-6">
      <div
        className="bg-amber-600 h-2.5 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

const QuizScreen: React.FC<QuizScreenProps> = ({ onSubmit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  const handleAnswerSelect = (answer: Answer) => {
    setAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handleSubmit = () => {
      onSubmit(answers);
  }

  const renderQuestion = (question: Question) => {
    switch (question.type) {
      case QuestionType.MultipleChoice:
        return <MultipleChoiceCard question={question} selectedAnswer={answers[currentQuestionIndex] as string} onAnswer={handleAnswerSelect} />;
      case QuestionType.Matching:
        return <MatchingCard question={question} currentAnswers={answers[currentQuestionIndex] as Record<string, string> || {}} onAnswer={handleAnswerSelect} />;
      default:
        return null;
    }
  };

  return (
    <div className="animate-fade-in">
      <ProgressBar current={currentQuestionIndex + 1} total={QUESTIONS.length} />
      <div className="mb-6">
        <p className="text-sm font-medium text-stone-600">Question {currentQuestionIndex + 1} of {QUESTIONS.length}</p>
        <h3 className="text-2xl font-bold mt-1">{currentQuestion.question}</h3>
      </div>
      
      {renderQuestion(currentQuestion)}
      
      <div className="mt-8 flex justify-end">
        {currentQuestionIndex < QUESTIONS.length - 1 ? (
          <button
            onClick={handleNext}
            disabled={!answers[currentQuestionIndex]}
            className="bg-stone-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-stone-700 active:scale-95 transform transition disabled:bg-stone-400 disabled:cursor-not-allowed"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!answers[currentQuestionIndex]}
            className="bg-amber-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-amber-500 active:scale-95 transform transition disabled:bg-amber-300 disabled:cursor-not-allowed"
          >
            Submit Quiz
          </button>
        )}
      </div>
    </div>
  );
};

const MultipleChoiceCard: React.FC<{ question: MultipleChoiceQuestion, selectedAnswer: string, onAnswer: (answer: string) => void }> = ({ question, selectedAnswer, onAnswer }) => (
    <div className="space-y-3">
        {question.options.map((option) => (
            <button
                key={option}
                onClick={() => onAnswer(option)}
                className={`w-full text-left p-4 border-2 rounded-lg transition-all duration-200 ${selectedAnswer === option ? 'bg-amber-500 border-amber-600 text-white shadow-md' : 'bg-white/50 border-stone-300 hover:bg-amber-100 hover:border-amber-400'}`}
            >
                {option}
            </button>
        ))}
    </div>
);

const MatchingCard: React.FC<{ question: MatchingQuestion, currentAnswers: Record<string, string>, onAnswer: (answers: Record<string, string>) => void }> = ({ question, currentAnswers, onAnswer }) => {
    const shuffledMatches = useMemo(() => [...question.matches].sort(() => Math.random() - 0.5), [question.matches]);

    const handleSelect = (item: string, match: string) => {
        const newAnswers = { ...currentAnswers, [item]: match };
        onAnswer(newAnswers);

        // Check if all items are matched to enable submit/next button
        if (Object.keys(newAnswers).length === question.items.length) {
            onAnswer(newAnswers);
        }
    };
    
    return (
        <div className="space-y-4">
            {question.items.map(item => (
                <div key={item} className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <p className="font-semibold p-3 bg-stone-100 rounded-md">{item}</p>
                    <select
                        value={currentAnswers[item] || ''}
                        onChange={(e) => handleSelect(item, e.target.value)}
                        className="w-full px-4 py-3 bg-white border-2 border-stone-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                    >
                        <option value="" disabled>Select a match...</option>
                        {shuffledMatches.map(match => (
                            <option key={match} value={match}>{match}</option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    );
};

export default QuizScreen;
