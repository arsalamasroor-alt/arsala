
import React, { useState, useCallback } from 'react';
import { GameState, User, Answer } from './types';
import { QUIZ_TITLE, QUESTIONS } from './constants';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';

function App() {
  const [gameState, setGameState] = useState<GameState>(GameState.Welcome);
  const [user, setUser] = useState<User | null>(null);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [score, setScore] = useState<number>(0);

  const handleStartQuiz = useCallback((newUser: User) => {
    setUser(newUser);
    setGameState(GameState.Quiz);
  }, []);

  const handleSubmitQuiz = useCallback((finalAnswers: Record<number, Answer>) => {
    let currentScore = 0;
    QUESTIONS.forEach((q, index) => {
      const userAnswer = finalAnswers[index];
      if (q.type === 'multiple-choice') {
        if (userAnswer === q.correctAnswer) {
          currentScore++;
        }
      } else if (q.type === 'matching') {
        let correctMatches = 0;
        const totalMatches = Object.keys(q.correctPairs).length;
        if (typeof userAnswer === 'object') {
          for (const key in q.correctPairs) {
            if (q.correctPairs[key] === userAnswer[key]) {
              correctMatches++;
            }
          }
        }
        if (correctMatches === totalMatches) {
          currentScore++;
        }
      }
    });
    setAnswers(finalAnswers);
    setScore(currentScore);
    setGameState(GameState.Results);
  }, []);

  const handleRestartQuiz = useCallback(() => {
    setAnswers({});
    setScore(0);
    setGameState(GameState.Welcome);
  }, []);

  const renderContent = () => {
    switch (gameState) {
      case GameState.Quiz:
        return <QuizScreen onSubmit={handleSubmitQuiz} />;
      case GameState.Results:
        return <ResultsScreen score={score} totalQuestions={QUESTIONS.length} onRestart={handleRestartQuiz} />;
      case GameState.Welcome:
      default:
        return <WelcomeScreen onStart={handleStartQuiz} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 to-amber-200 text-stone-800 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900">{QUIZ_TITLE}</h1>
          {user && gameState !== GameState.Welcome && <p className="text-lg text-stone-700 mt-2">Welcome, {user.name} ({user.class})</p>}
        </header>
        <main className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-10 transition-all duration-500">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
