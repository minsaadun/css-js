export type NavSection =
  | 'home'
  | 'comparison'
  | 'css-basics'
  | 'style-sheets'
  | 'selectors'
  | 'properties'
  | 'box-model'
  | 'css-playground'
  | 'javascript'
  | 'events'
  | 'form-validation'
  | 'predict-output'
  | 'debug-lab'
  | 'quiz'
  | 'mini-challenge'
  | 'class-activity'
  | 'final-challenge'
  | 'progress-tips';

export interface UserProgress {
  cssBasics: boolean;
  styleSheets: boolean;
  selectors: boolean;
  properties: boolean;
  boxModel: boolean;
  cssPlayground: boolean;
  javascript: boolean;
  events: boolean;
  formValidation: boolean;
  debugLab: boolean;
  predictOutput: boolean;
  quizScore: number; // out of 15
  quizTotal: number;
  quizCompleted: boolean;
  miniChallenge: boolean;
  classActivity: boolean;
  finalChallenge: boolean;
  completedTasks: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  type: 'multiple-choice' | 'true-false' | 'code-output' | 'find-error';
  options: string[];
  correctIndex: number;
  explanation: string;
  category: 'CSS Basics' | 'Style Sheets' | 'Selectors' | 'Box Model' | 'JavaScript' | 'Events' | 'Form Validation';
}

export interface DebugItem {
  id: string;
  title: string;
  category: 'CSS' | 'JavaScript' | 'Events';
  description: string;
  buggyCode: string;
  fixedCode: string;
  hint: string;
  explanation: string;
}

export interface ScenarioQuestion {
  id: number;
  scenario: string;
  options: { label: string; type: 'Inline' | 'Internal' | 'External'; explanation: string; correct: boolean }[];
}

export interface PredictQuestion {
  id: number;
  title: string;
  code: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
