
export enum GameState {
  Welcome = 'welcome',
  Quiz = 'quiz',
  Results = 'results',
}

export enum QuestionType {
  MultipleChoice = 'multiple-choice',
  Matching = 'matching',
}

export interface MultipleChoiceQuestion {
  type: QuestionType.MultipleChoice;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface MatchingQuestion {
  type: QuestionType.Matching;
  question: string;
  items: string[];
  matches: string[];
  correctPairs: Record<string, string>;
}

export type Question = MultipleChoiceQuestion | MatchingQuestion;

export type Answer = string | Record<string, string>;

export interface User {
  name: string;
  class: string;
}
