import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { Box, CheckCircle2, XCircle, HelpCircle, Sparkles } from 'lucide-react';

export const BoxModelLab: React.FC = () => {
  const { markModuleComplete } = useProgress();

  // Box Model Sliders state
  const [margin, setMargin] = useState(24);
  const [borderWidth, setBorderWidth] = useState(4);
  const [padding, setPadding] = useState(20);
  const [contentWidth, setContentWidth] = useState(180);

  // Box Model Challenge state
  const challenges = [
    {
      id: 1,
      task: 'Gerakkan teks kandungan (content) supaya mempunyai lebih banyak ruang bernafas di DALAM garisan sempadan (border).',
      options: ['Margin', 'Padding', 'Border'],
      correctOption: 'Padding',
      explanation: 'Padding ialah ruang dalaman antara kandungan (content) dengan garisan border.',
    },
    {
      id: 2,
      task: 'Tolak kotak atau elemen lain di LUAR sempadan supaya tidak melekat terlalu rapat dengan kotak ini.',
      options: ['Margin', 'Padding', 'Border'],
      correctOption: 'Margin',
      explanation: 'Margin ialah ruang luaran di sekeliling luar garisan border.',
    },
    {
      id: 3,
      task: 'Ubah ketebalan garisan bingkai sempadan di antara padding dan margin.',
      options: ['Margin', 'Padding', 'Border'],
      correctOption: 'Border',
      explanation: 'Border ialah garisan sempadan fizikal yang memisahkan ruang dalam (padding) dan ruang luar (margin).',
    },
  ];

  const [activeChallengeIdx, setActiveChallengeIdx] = useState(0);
  const [selectedChallengeAnswer, setSelectedChallengeAnswer] = useState<string | null>(null);
  const [challengeFeedback, setChallengeFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);

  const currentChal = challenges[activeChallengeIdx];

  const handleChallengeAnswer = (option: string) => {
    setSelectedChallengeAnswer(option);
    if (option === currentChal.correctOption) {
      setChallengeFeedback({
        isCorrect: true,
        text: `✓ TAHNIAH! Tepat sekali. ${currentChal.explanation}`,
      });
      markModuleComplete('boxModel');
    } else {
      setChallengeFeedback({
        isCorrect: false,
        text: `✗ Belum tepat. Anda memilih ${option}. Sila baca soalan dan cuba lagi.`,
      });
    }
  };

  const handleNextChallenge = () => {
    if (activeChallengeIdx < challenges.length - 1) {
      setActiveChallengeIdx((prev) => prev + 1);
      setSelectedChallengeAnswer(null);
      setChallengeFeedback(null);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* 3.4.4 Box Model Header */}
      <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-orange-500/20 text-orange-400 border border-orange-500/30">
            <Box className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-orange-400">SUBTOPIK 3.4.4</span>
            <h2 className="text-xl lg:text-2xl font-black text-white">CSS Box Model Visualizer</h2>
          </div>
        </div>

        <p className="text-sm text-slate-300">
          Dalam web development, setiap elemen HTML dianggap sebagai sebuah <strong>kotak empat segi (box)</strong> yang terdiri daripada 4 lapisan: <strong>Margin</strong>, <strong>Border</strong>, <strong>Padding</strong>, dan <strong>Content</strong>.
        </p>

        {/* The 4 Layer Key */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
          <div className="p-3 bg-orange-950/40 rounded-xl border border-orange-500/40 text-center">
            <div className="text-xs font-extrabold text-orange-400">1. MARGIN</div>
            <div className="text-[10px] text-slate-400">Ruang di luar border</div>
          </div>
          <div className="p-3 bg-amber-950/40 rounded-xl border border-amber-500/40 text-center">
            <div className="text-xs font-extrabold text-amber-400">2. BORDER</div>
            <div className="text-[10px] text-slate-400">Garisan sempadan</div>
          </div>
          <div className="p-3 bg-emerald-950/40 rounded-xl border border-emerald-500/40 text-center">
            <div className="text-xs font-extrabold text-emerald-400">3. PADDING</div>
            <div className="text-[10px] text-slate-400">Ruang di dalam border</div>
          </div>
          <div className="p-3 bg-blue-950/40 rounded-xl border border-blue-500/40 text-center">
            <div className="text-xs font-extrabold text-blue-400">4. CONTENT</div>
            <div className="text-[10px] text-slate-400">Teks atau imej sebenar</div>
          </div>
        </div>
      </section>

      {/* Visual Concentric Interactive Diagram & Sliders */}
      <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Sliders Panel (5 cols) */}
          <div className="lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span>🎛️</span> Laraskan Nilai Box Model:
            </h3>

            {/* Margin slider */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-bold text-orange-400">Margin (Ruang Luar):</span>
                <span className="font-mono text-white text-xs">{margin}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                value={margin}
                onChange={(e) => {
                  setMargin(Number(e.target.value));
                  markModuleComplete('boxModel');
                }}
                className="w-full h-2 bg-slate-800 accent-orange-500 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Border slider */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-bold text-amber-400">Border (Ketebalan Garisan):</span>
                <span className="font-mono text-white text-xs">{borderWidth}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="16"
                value={borderWidth}
                onChange={(e) => {
                  setBorderWidth(Number(e.target.value));
                  markModuleComplete('boxModel');
                }}
                className="w-full h-2 bg-slate-800 accent-amber-500 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Padding slider */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-bold text-emerald-400">Padding (Ruang Dalam):</span>
                <span className="font-mono text-white text-xs">{padding}px</span>
              </div>
              <input
                type="range"
                min="4"
                max="40"
                value={padding}
                onChange={(e) => {
                  setPadding(Number(e.target.value));
                  markModuleComplete('boxModel');
                }}
                className="w-full h-2 bg-slate-800 accent-emerald-500 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Content Width slider */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-bold text-blue-400">Content Width:</span>
                <span className="font-mono text-white text-xs">{contentWidth}px</span>
              </div>
              <input
                type="range"
                min="120"
                max="260"
                value={contentWidth}
                onChange={(e) => setContentWidth(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 accent-blue-500 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Generated CSS Box */}
            <div className="p-3 bg-slate-900 rounded-xl font-mono text-xs text-slate-300 border border-slate-800 space-y-0.5">
              <div className="text-slate-500">// Generated CSS:</div>
              <div className="text-indigo-400">.box &#123;</div>
              <div className="pl-4 text-orange-400">margin: <span className="text-white">{margin}px</span>;</div>
              <div className="pl-4 text-amber-400">border: <span className="text-white">{borderWidth}px solid #f59e0b</span>;</div>
              <div className="pl-4 text-emerald-400">padding: <span className="text-white">{padding}px</span>;</div>
              <div className="pl-4 text-blue-400">width: <span className="text-white">{contentWidth}px</span>;</div>
              <div className="text-indigo-400">&#125;</div>
            </div>
          </div>

          {/* Dynamic Visual Box Model Diagram (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 sm:p-8 bg-slate-950 rounded-2xl border border-slate-800 min-h-[360px] overflow-auto">
            {/* MARGIN LAYER (Orange) */}
            <div
              className="bg-orange-500/20 border-2 border-dashed border-orange-500 rounded-2xl transition-all relative flex items-center justify-center shadow-lg"
              style={{ padding: `${margin}px` }}
            >
              <div className="absolute top-1 left-2 text-[10px] font-black text-orange-400 uppercase tracking-wider font-mono">
                MARGIN ({margin}px)
              </div>

              {/* BORDER LAYER (Amber) */}
              <div
                className="bg-amber-500/20 rounded-xl transition-all relative flex items-center justify-center"
                style={{
                  border: `${borderWidth}px solid #f59e0b`,
                }}
              >
                {borderWidth > 0 && (
                  <div className="absolute -top-3 right-2 text-[9px] font-black text-amber-300 uppercase tracking-wider font-mono bg-slate-950 px-1.5 rounded border border-amber-500/40">
                    BORDER ({borderWidth}px)
                  </div>
                )}

                {/* PADDING LAYER (Emerald) */}
                <div
                  className="bg-emerald-500/25 border-2 border-dotted border-emerald-400/80 rounded-lg transition-all relative flex items-center justify-center"
                  style={{ padding: `${padding}px` }}
                >
                  <div className="absolute bottom-1 right-2 text-[9px] font-black text-emerald-300 uppercase tracking-wider font-mono">
                    PADDING ({padding}px)
                  </div>

                  {/* CONTENT LAYER (Blue) */}
                  <div
                    className="bg-gradient-to-tr from-blue-600 to-indigo-600 text-white rounded-md flex flex-col items-center justify-center text-center p-3 font-sans shadow-md transition-all"
                    style={{ width: `${contentWidth}px`, minHeight: '65px' }}
                  >
                    <span className="text-xs font-black tracking-wide">CONTENT</span>
                    <span className="text-[10px] opacity-90 font-mono mt-0.5">
                      {contentWidth}px &times; Auto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 17.0 BOX MODEL CHALLENGE */}
      <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-black text-white">17.0 Box Model Challenge</h3>
          </div>
          <span className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
            Cabaran {activeChallengeIdx + 1} / {challenges.length}
          </span>
        </div>

        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="text-xs text-indigo-400 font-bold uppercase tracking-wider">
            Tugasan Situasi:
          </div>
          <p className="text-sm font-bold text-slate-100">
            &ldquo;{currentChal.task}&rdquo;
          </p>

          <div className="text-xs text-slate-400 font-medium">
            Pilih property Box Model yang sepatutnya digunakan:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {currentChal.options.map((opt) => {
              const isSelected = selectedChallengeAnswer === opt;
              return (
                <button
                  key={opt}
                  onClick={() => handleChallengeAnswer(opt)}
                  className={`p-3.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                    isSelected
                      ? opt === currentChal.correctOption
                        ? 'bg-emerald-600 text-white shadow-lg'
                        : 'bg-rose-600 text-white shadow-lg'
                      : 'bg-slate-900 text-slate-200 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Feedback & Next Challenge */}
          {challengeFeedback && (
            <div
              className={`p-4 rounded-xl text-xs flex items-center justify-between animate-fadeIn ${
                challengeFeedback.isCorrect
                  ? 'bg-emerald-950/70 border border-emerald-500/40 text-emerald-300'
                  : 'bg-rose-950/70 border border-rose-500/40 text-rose-300'
              }`}
            >
              <div className="flex items-center gap-2">
                {challengeFeedback.isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                ) : (
                  <XCircle className="w-5 h-5 shrink-0 text-rose-400" />
                )}
                <span>{challengeFeedback.text}</span>
              </div>

              {activeChallengeIdx < challenges.length - 1 && (
                <button
                  onClick={handleNextChallenge}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shrink-0 cursor-pointer ml-3"
                >
                  Cabaran Seterusnya &rarr;
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
