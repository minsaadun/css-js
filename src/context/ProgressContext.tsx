import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserProgress } from '../types';

const INITIAL_PROGRESS: UserProgress = {
  cssBasics: false,
  styleSheets: false,
  selectors: false,
  properties: false,
  boxModel: false,
  cssPlayground: false,
  javascript: false,
  events: false,
  formValidation: false,
  debugLab: false,
  predictOutput: false,
  quizScore: 0,
  quizTotal: 15,
  quizCompleted: false,
  miniChallenge: false,
  classActivity: false,
  finalChallenge: false,
  completedTasks: [],
};

const STORAGE_KEY = 'css_js_lab_stm21673_progress';

interface ProgressContextType {
  progress: UserProgress;
  markModuleComplete: (moduleKey: keyof Omit<UserProgress, 'quizScore' | 'quizTotal' | 'completedTasks'>) => void;
  saveQuizResult: (score: number, total: number) => void;
  toggleTask: (taskId: string) => void;
  isTaskComplete: (taskId: string) => boolean;
  resetProgress: () => void;
  overallPercentage: number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...INITIAL_PROGRESS, ...JSON.parse(saved) };
      }
    } catch {
      // ignore
    }
    return INITIAL_PROGRESS;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // ignore
    }
  }, [progress]);

  const markModuleComplete = (moduleKey: keyof Omit<UserProgress, 'quizScore' | 'quizTotal' | 'completedTasks'>) => {
    setProgress((prev) => ({
      ...prev,
      [moduleKey]: true,
    }));
  };

  const saveQuizResult = (score: number, total: number) => {
    setProgress((prev) => ({
      ...prev,
      quizScore: score,
      quizTotal: total,
      quizCompleted: true,
    }));
  };

  const toggleTask = (taskId: string) => {
    setProgress((prev) => {
      const exists = prev.completedTasks.includes(taskId);
      const next = exists
        ? prev.completedTasks.filter((id) => id !== taskId)
        : [...prev.completedTasks, taskId];
      return {
        ...prev,
        completedTasks: next,
      };
    });
  };

  const isTaskComplete = (taskId: string) => {
    return progress.completedTasks.includes(taskId);
  };

  const resetProgress = () => {
    setProgress(INITIAL_PROGRESS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  // Calculate percentage based on main modules
  const modulesToCheck: (keyof UserProgress)[] = [
    'cssBasics',
    'styleSheets',
    'selectors',
    'properties',
    'boxModel',
    'cssPlayground',
    'javascript',
    'events',
    'formValidation',
    'predictOutput',
    'debugLab',
    'quizCompleted',
    'miniChallenge',
    'classActivity',
    'finalChallenge',
  ];

  const completedCount = modulesToCheck.reduce((acc, key) => {
    return acc + (progress[key] ? 1 : 0);
  }, 0);

  const overallPercentage = Math.round((completedCount / modulesToCheck.length) * 100);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        markModuleComplete,
        saveQuizResult,
        toggleTask,
        isTaskComplete,
        resetProgress,
        overallPercentage,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
