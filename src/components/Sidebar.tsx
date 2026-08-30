import React from 'react';
import { NavSection } from '../types';
import { useProgress } from '../context/ProgressContext';
import { 
  Home, 
  Layers, 
  Palette, 
  FileCode, 
  Target, 
  Sliders, 
  Box, 
  Sparkles, 
  Zap, 
  MousePointerClick, 
  CheckSquare, 
  Bug, 
  HelpCircle, 
  Award, 
  Users, 
  TrendingUp,
  RotateCcw,
  BookOpen
} from 'lucide-react';

interface SidebarProps {
  currentSection: NavSection;
  onSelectSection: (section: NavSection) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentSection,
  onSelectSection,
  isOpenMobile,
  onCloseMobile,
}) => {
  const { overallPercentage, progress, resetProgress } = useProgress();

  const navGroups = [
    {
      groupName: 'UTAMA',
      items: [
        { id: 'home' as NavSection, label: 'Home Dashboard', icon: Home, badge: null, completed: true },
        { id: 'comparison' as NavSection, label: 'HTML vs CSS vs JS', icon: Layers, badge: 'Konsep', completed: progress.cssBasics },
      ],
    },
    {
      groupName: 'CASCADING STYLE SHEET (CSS)',
      items: [
        { id: 'css-basics' as NavSection, label: '3.1 CSS Basics & Syntax', icon: Palette, badge: 'Asas', completed: progress.cssBasics },
        { id: 'style-sheets' as NavSection, label: '3.2 Types of Style Sheets', icon: FileCode, badge: null, completed: progress.styleSheets },
        { id: 'selectors' as NavSection, label: '3.3 CSS Selectors', icon: Target, badge: null, completed: progress.selectors },
        { id: 'properties' as NavSection, label: '3.4 Properties Lab', icon: Sliders, badge: '7 Jenis', completed: progress.properties },
        { id: 'box-model' as NavSection, label: '3.4.4 CSS Box Model', icon: Box, badge: 'Visual', completed: progress.boxModel },
        { id: 'css-playground' as NavSection, label: '3.5 CSS Playground', icon: Sparkles, badge: 'Live', completed: progress.cssPlayground },
      ],
    },
    {
      groupName: 'JAVASCRIPT & EVENTS',
      items: [
        { id: 'javascript' as NavSection, label: '3.6.1 - 3.6.4 Basic JS & Alert', icon: Zap, badge: 'Asas', completed: progress.javascript },
        { id: 'events' as NavSection, label: '3.6.5 JavaScript Events', icon: MousePointerClick, badge: 'Interaktif', completed: progress.events },
        { id: 'form-validation' as NavSection, label: '3.6.6 Form Validation', icon: CheckSquare, badge: 'Simulator', completed: progress.formValidation },
      ],
    },
    {
      groupName: 'PRACTICE & CHALLENGES',
      items: [
        { id: 'predict-output' as NavSection, label: 'Predict the Output', icon: BookOpen, badge: '6 Task', completed: progress.predictOutput },
        { id: 'debug-lab' as NavSection, label: 'Debug Lab (Cari Ralat)', icon: Bug, badge: 'Fix', completed: progress.debugLab },
        { id: 'quiz' as NavSection, label: 'Quick Quiz (15 Soalan)', icon: HelpCircle, badge: progress.quizCompleted ? `${progress.quizScore}/15` : 'Ujian', completed: progress.quizCompleted },
        { id: 'mini-challenge' as NavSection, label: 'Mini Challenge (Profile)', icon: Award, badge: 'Hands-on', completed: progress.miniChallenge },
        { id: 'class-activity' as NavSection, label: 'Class Team Activity', icon: Users, badge: '4 Orang', completed: progress.classActivity },
        { id: 'final-challenge' as NavSection, label: 'Final Challenge (P3)', icon: Sparkles, badge: 'Projek', completed: progress.finalChallenge },
        { id: 'progress-tips' as NavSection, label: 'Progress & Industry Tips', icon: TrendingUp, badge: `${overallPercentage}%`, completed: overallPercentage === 100 },
      ],
    },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        id="app-sidebar"
        className={`fixed lg:static top-0 bottom-0 left-0 z-50 w-72 bg-slate-950 border-r border-slate-800 text-slate-200 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Brand Header */}
        <div className="p-5 border-b border-slate-800/80 bg-slate-950/80 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-emerald-900/30">
              &lt;/&gt;
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <h1 className="text-base font-extrabold text-white tracking-tight">CSS & JS LAB</h1>
                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-1.5 py-0.5 rounded border border-emerald-500/30">STM</span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">STM21673 • Sem 2 KK</p>
            </div>
          </div>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
          {navGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-1">
              <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                {group.groupName}
              </div>
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentSection === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`nav-${item.id}`}
                      onClick={() => {
                        onSelectSection(item.id);
                        onCloseMobile();
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-150 text-left ${
                        isActive
                          ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-md shadow-emerald-950/50'
                          : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5 truncate">
                        <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                        <span className="truncate">{item.label}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 shrink-0 ml-2">
                        {item.completed && !isActive && (
                          <span className="w-2 h-2 rounded-full bg-emerald-400" title="Selesai" />
                        )}
                        {item.badge && (
                          <span
                            className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                              isActive
                                ? 'bg-white/20 text-white'
                                : 'bg-slate-800 text-slate-300 border border-slate-700'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Progress Bento Card */}
        <div className="p-4 bg-slate-900/90 m-3 rounded-2xl border border-slate-800 shadow-inner">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-slate-400 font-medium flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Kemajuan Topik 3
            </span>
            <span className="text-emerald-400 font-bold font-mono">{overallPercentage}%</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden border border-slate-700/50">
            <div
              className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${overallPercentage}%` }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px]">
            <span className="text-slate-400">CLO1 (P3): Practical</span>
            <button
              onClick={() => {
                if (confirm('Adakah anda pasti mahu set semula (reset) semua progress amali anda?')) {
                  resetProgress();
                }
              }}
              className="text-slate-400 hover:text-rose-400 flex items-center gap-1 transition-colors"
              title="Reset Progress"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
