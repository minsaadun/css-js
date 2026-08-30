import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { DEBUG_ITEMS, COMMON_MISTAKES } from '../data/learningContent';
import { Bug, CheckCircle2, AlertTriangle, Wrench, RefreshCw, Sparkles, HelpCircle } from 'lucide-react';

export const DebugLab: React.FC = () => {
  const { markModuleComplete } = useProgress();

  const [activeItemIdx, setActiveItemIdx] = useState(0);
  const [fixedItemIds, setFixedItemIds] = useState<string[]>([]);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [userEditedCode, setUserEditedCode] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);

  const currentItem = DEBUG_ITEMS[activeItemIdx];
  const isFixed = fixedItemIds.includes(currentItem.id);
  const currentCode = userEditedCode[currentItem.id] ?? currentItem.buggyCode;

  const handleFixCode = () => {
    // Check if fixed or auto-apply fix
    if (!fixedItemIds.includes(currentItem.id)) {
      const nextFixed = [...fixedItemIds, currentItem.id];
      setFixedItemIds(nextFixed);
      setUserEditedCode((prev) => ({ ...prev, [currentItem.id]: currentItem.fixedCode }));
      if (nextFixed.length === DEBUG_ITEMS.length) {
        markModuleComplete('debug');
      }
    }
    setFeedback({
      isCorrect: true,
      text: `✓ TAHNIAH! Bug berjaya dibaiki. ${currentItem.explanation}`,
    });
  };

  const handleNextBug = () => {
    if (activeItemIdx < DEBUG_ITEMS.length - 1) {
      setActiveItemIdx((prev) => prev + 1);
      setShowHint(false);
      setFeedback(null);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* 32.0 Header */}
      <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/30">
              <Bug className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-rose-400">LAB 32.0</span>
              <h2 className="text-xl lg:text-2xl font-black text-white">Debug Lab (Beginner Errors)</h2>
            </div>
          </div>

          <div className="bg-slate-950 px-3.5 py-1.5 rounded-2xl border border-slate-800 text-xs font-mono font-bold text-emerald-400">
            Bug Selesai: {fixedItemIds.length} / {DEBUG_ITEMS.length}
          </div>
        </div>

        <p className="text-sm text-slate-300">
          Setiap pembangun web pasti pernah menghadapi ralat (bugs). Pelajari 5 ralat lazim pelajar baru dan baiki kod tersebut secara interaktif.
        </p>

        {/* Bug Selection Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
          {DEBUG_ITEMS.map((item, idx) => {
            const done = fixedItemIds.includes(item.id);
            const active = activeItemIdx === idx;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItemIdx(idx);
                  setShowHint(false);
                  setFeedback(null);
                }}
                className={`p-3 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between cursor-pointer ${
                  active
                    ? 'bg-rose-600 border-rose-400 text-white shadow-lg'
                    : done
                    ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <span>Bug #{idx + 1}</span>
                {done && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
              </button>
            );
          })}
        </div>
      </section>

      {/* Active Bug Playground */}
      <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-5 animate-fadeIn">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-mono font-bold text-rose-400">
              RALAT #{activeItemIdx + 1}: {currentItem.title}
            </span>
            <h3 className="text-sm font-bold text-slate-300 mt-0.5">{currentItem.description}</h3>
          </div>
          <span className="text-[10px] bg-slate-950 px-2.5 py-1 rounded-lg text-slate-400 font-mono">
            {currentItem.category}
          </span>
        </div>

        {/* Broken vs Fixed Code Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          {/* Buggy Code */}
          <div className="bg-slate-950 p-4 rounded-2xl border border-rose-500/40 space-y-2">
            <div className="text-rose-400 text-[11px] font-bold flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>KOD BERMASALAH (BUG):</span>
            </div>
            <pre className="text-rose-200 overflow-x-auto whitespace-pre-wrap leading-relaxed bg-rose-950/20 p-3 rounded-xl border border-rose-900/50">
              {currentItem.buggyCode}
            </pre>
          </div>

          {/* Current Code State */}
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 flex flex-col justify-between">
            <div>
              <div className="text-emerald-400 text-[11px] font-bold flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-sky-400" />
                  <span>KOD SELEPAS PEMBAIKAN:</span>
                </span>
                {isFixed && (
                  <span className="bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded text-[10px]">
                    ✓ Diperbaiki
                  </span>
                )}
              </div>
              <pre className={`overflow-x-auto whitespace-pre-wrap leading-relaxed p-3 rounded-xl border mt-2 ${isFixed ? 'bg-emerald-950/30 text-emerald-300 border-emerald-500/50' : 'bg-slate-900 text-slate-400 border-slate-800'}`}>
                {currentCode}
              </pre>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setShowHint(!showHint)}
                className="px-3 py-2 bg-slate-900 hover:bg-slate-800 text-amber-400 rounded-xl text-xs font-bold border border-slate-800 flex items-center gap-1 cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5" /> Hint
              </button>

              <button
                onClick={handleFixCode}
                className="flex-1 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black rounded-xl text-xs shadow-md cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>[BAIKI KOD & RUN]</span>
              </button>
            </div>
          </div>
        </div>

        {/* Hint Box */}
        {showHint && (
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs rounded-xl animate-fadeIn">
            💡 <strong>Petunjuk:</strong> {currentItem.hint}
          </div>
        )}

        {/* Feedback Alert */}
        {feedback && (
          <div
            className={`p-4 rounded-2xl text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fadeIn ${
              feedback.isCorrect
                ? 'bg-emerald-950/70 border border-emerald-500/40 text-emerald-300'
                : 'bg-rose-950/70 border border-rose-500/40 text-rose-300'
            }`}
          >
            <div>
              <strong className="block font-bold">
                {feedback.isCorrect ? '✓ BUG BERJAYA DILERAISKAN!' : 'Cuba Semak'}
              </strong>
              <span className="text-[11px] text-slate-300">{feedback.text}</span>
            </div>

            {activeItemIdx < DEBUG_ITEMS.length - 1 && (
              <button
                onClick={handleNextBug}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shrink-0 cursor-pointer"
              >
                Bug Seterusnya &rarr;
              </button>
            )}
          </div>
        )}
      </section>

      {/* Common Mistakes Cheatsheet */}
      <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <span>📚</span> Senarai Ralat Lazim (Common Mistakes Cheatsheet)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          {COMMON_MISTAKES.map((mistake, mIdx) => (
            <div key={mIdx} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs space-y-1">
              <div className="font-bold text-sky-400">{mistake.topic}</div>
              <div className="font-mono text-rose-400 line-through">❌ {mistake.wrong}</div>
              <div className="font-mono text-emerald-400">✓ {mistake.correct}</div>
              <div className="text-slate-400 text-[11px] pt-1">{mistake.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
