import React, { useState } from 'react';
import { ProgressProvider } from './context/ProgressContext';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { HomeDashboard } from './components/HomeDashboard';
import { ComparisonSandbox } from './components/ComparisonSandbox';
import { CssBasics } from './components/CssBasics';
import { StyleSheets } from './components/StyleSheets';
import { SelectorsLab } from './components/SelectorsLab';
import { PropertiesLab } from './components/PropertiesLab';
import { BoxModelLab } from './components/BoxModelLab';
import { CssPlayground } from './components/CssPlayground';
import { JavaScriptBasics } from './components/JavaScriptBasics';
import { EventsLab } from './components/EventsLab';
import { ValidationLab } from './components/ValidationLab';
import { PredictOutputLab } from './components/PredictOutputLab';
import { DebugLab } from './components/DebugLab';
import { QuizLab } from './components/QuizLab';
import { ChallengesLab } from './components/ChallengesLab';

export function AppContent() {
  const [currentSection, setCurrentSection] = useState<string>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <HomeDashboard onNavigate={setCurrentSection} />;
      case 'comparison':
        return <ComparisonSandbox />;
      case 'cssBasics':
        return <CssBasics />;
      case 'styleSheets':
        return <StyleSheets />;
      case 'selectors':
        return <SelectorsLab />;
      case 'properties':
        return <PropertiesLab />;
      case 'boxModel':
        return <BoxModelLab />;
      case 'cssPlayground':
        return <CssPlayground />;
      case 'javascript':
        return <JavaScriptBasics />;
      case 'events':
        return <EventsLab />;
      case 'validation':
        return <ValidationLab />;
      case 'predict':
        return <PredictOutputLab />;
      case 'debug':
        return <DebugLab />;
      case 'quiz':
        return <QuizLab />;
      case 'challenges':
        return <ChallengesLab />;
      default:
        return <HomeDashboard onNavigate={setCurrentSection} />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-slate-950 text-slate-100 font-sans antialiased overflow-hidden">
      {/* Responsive Sidebar */}
      <Sidebar
        currentSection={currentSection}
        onSelectSection={(sectionId) => {
          setCurrentSection(sectionId);
          setIsSidebarOpen(false);
        }}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        {/* Top Header */}
        <Header
          currentSection={currentSection}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          onNavigate={setCurrentSection}
        />

        {/* Scrollable Workspace */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 custom-scrollbar">
          {renderSection()}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ProgressProvider>
      <AppContent />
    </ProgressProvider>
  );
}
