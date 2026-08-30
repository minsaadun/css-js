import React, { useState } from 'react';
import { NavSection } from '../types';
import { useProgress } from '../context/ProgressContext';
import { Menu, BookOpen, CheckCircle, Info, Sparkles, X } from 'lucide-react';

interface HeaderProps {
  currentSection: NavSection;
  onOpenMobile: () => void;
  onSelectSection: (section: NavSection) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentSection, onOpenMobile, onSelectSection }) => {
  const { overallPercentage } = useProgress();
  const [showCloModal, setShowCloModal] = useState(false);

  const getSectionTitle = (section: NavSection) => {
    switch (section) {
      case 'home':
        return { title: 'Home Dashboard', sub: 'Ringkasan & Mula Belajar' };
      case 'comparison':
        return { title: 'HTML vs CSS vs JavaScript', sub: 'Kefahaman Konsep Teras & Analogi Manusia' };
      case 'css-basics':
        return { title: '3.1 CSS Basics & Syntax', sub: 'Cascading Style Sheets & Anatomy of Rules' };
      case 'style-sheets':
        return { title: '3.2 Types of Style Sheets', sub: 'Inline, Internal & External CSS Visualizer' };
      case 'selectors':
        return { title: '3.3 CSS Selectors', sub: 'Tag, ID & Class Selectors Simulator' };
      case 'properties':
        return { title: '3.4 Properties Lab', sub: '7 Kategori Utama CSS Properties' };
      case 'box-model':
        return { title: '3.4.4 CSS Box Model', sub: 'Margin, Border, Padding & Content Visualizer' };
      case 'css-playground':
        return { title: '3.5 CSS Playground & Makeover', sub: 'Live Code Editor & Web Makeover' };
      case 'javascript':
        return { title: '3.6.1 - 3.6.4 Asas JavaScript & Alert', sub: 'Embedding & Popup Box Simulator' };
      case 'events':
        return { title: '3.6.5 JavaScript Events', sub: 'onclick, onchange, onsubmit & Event Matcher' };
      case 'form-validation':
        return { title: '3.6.6 Form Validation', sub: 'Interactive Validation Simulator & Flowchart' };
      case 'predict-output':
        return { title: 'Predict the Output Lab', sub: '6 Cabaran Ramal Hasil Kod Amali' };
      case 'debug-lab':
        return { title: 'Debug Lab (Cari & Baiki Ralat)', sub: 'Kesalahan Sintaks Pemula & Penyelesaian' };
      case 'quiz':
        return { title: 'Quick Quiz (15 Soalan)', sub: 'Uji Kefahaman Topik 3.0 CSS & JS' };
      case 'mini-challenge':
        return { title: 'Mini Challenge: Profile Card', sub: 'Transform Plain Website ke Interaktif' };
      case 'class-activity':
        return { title: 'Aktiviti Kumpulan (4 Orang)', sub: 'Website Makeover Challenge Kolaboratif' };
      case 'final-challenge':
        return { title: 'Final Challenge: Static to Interactive', sub: 'Projek Lengkap 6-Langkah & Sijil' };
      case 'progress-tips':
        return { title: 'Progress & Developer Tips', sub: 'Rekod Kemajuan, Kesilapan Lazim & Tips Industri' };
      default:
        return { title: 'CSS & JS LAB', sub: 'STM21673 Web Development' };
    }
  };

  const { title, sub } = getSectionTitle(currentSection);

  return (
    <>
      <header id="main-header" className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 lg:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            id="mobile-menu-btn"
            onClick={onOpenMobile}
            className="lg:hidden p-2 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 focus:outline-hidden"
            aria-label="Buka Menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-emerald-400 font-mono">STM21673</span>
              <span className="text-slate-600">•</span>
              <h2 className="text-sm lg:text-base font-bold text-white tracking-tight">{title}</h2>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">{sub}</p>
          </div>
        </div>

        {/* Action pills */}
        <div className="flex items-center space-x-2.5">
          <button
            onClick={() => setShowCloModal(true)}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-semibold hover:bg-indigo-900/60 transition-all"
            title="Maklumat CLO1 Kursus"
          >
            <Info className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden sm:inline">CLO1 (P3)</span>
          </button>

          <button
            onClick={() => onSelectSection('quiz')}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-semibold hover:bg-emerald-900/60 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Quiz</span>
          </button>

          <div className="flex items-center space-x-2 pl-2 border-l border-slate-800">
            <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-emerald-400 font-mono">
              {overallPercentage}%
            </div>
          </div>
        </div>
      </header>

      {/* CLO Information Modal */}
      {showCloModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 max-w-lg w-full text-slate-100 shadow-2xl relative">
            <button
              onClick={() => setShowCloModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-2xl border border-emerald-500/30">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400">STM21673 WEB DEVELOPMENT</span>
                <h3 className="text-lg font-extrabold text-white">Course Learning Outcome</h3>
              </div>
            </div>

            <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 mb-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-400 text-sm">CLO1 (P3, PLO3)</span>
                <span className="text-[11px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-semibold">
                  Psikomotor Level 3
                </span>
              </div>
              <p className="text-xs text-slate-300 italic">
                &ldquo;Construct dynamic websites using appropriate web development tools and technologies.&rdquo;
              </p>
            </div>

            <div className="space-y-2 mb-5">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Prinsip Amali Pelajar:</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-slate-800/50 rounded-xl border border-slate-800 flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>SEE (Lihat Kod & Rupa)</span>
                </div>
                <div className="p-2.5 bg-slate-800/50 rounded-xl border border-slate-800 flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>EDIT (Ubah Nilai CSS)</span>
                </div>
                <div className="p-2.5 bg-slate-800/50 rounded-xl border border-slate-800 flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>CLICK (Uji Event JS)</span>
                </div>
                <div className="p-2.5 bg-slate-800/50 rounded-xl border border-slate-800 flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>FIX (Baiki Ralat Debug)</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowCloModal(false)}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-xs text-white transition-colors"
            >
              Faham & Mula Belajar
            </button>
          </div>
        </div>
      )}
    </>
  );
};
