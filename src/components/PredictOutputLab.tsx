import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { PREDICT_QUESTIONS } from '../data/learningContent';
import { HelpCircle, CheckCircle2, XCircle, RefreshCw, ArrowRight } from 'lucide-react';

export const PredictOutputLab: React.FC = () => {
  const { markModuleComplete } = useProgress();

  const [currentTaskIdx, setCurrentTaskIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState(0);
  const [showResultSummary, setShowResultSummary] = useState(false);

  const currentTask = PREDICT_QUESTIONS[currentTaskIdx];
  const selectedChoice = selectedAnswers[currentTask.id];
  const isAnswered = selectedChoice !== undefined;

  const handleSelectChoice = (choiceIdx: number) => {
    if (isAnswered) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentTask.id]: choiceIdx,
    }));

    if (choiceIdx === currentTask.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentTaskIdx < PREDICT_QUESTIONS.length - 1) {
      setCurrentTaskIdx((prev) => prev + 1);
    } else {
      setShowResultSummary(true);
      markModuleComplete('predict');
    }
  };

  const handleRestart = () => {
    setCurrentTaskIdx(0);
    setSelectedAnswers({});
    setScore(0);
    setShowResultSummary(false);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* 31.0 Header */}
      <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-indigo-400">LAB 31.0</span>
              <h2 className="text-xl lg:text-2xl font-black text-white">Predict The Output Lab (6 Tugasan)</h2>
            </div>
          </div>

          <div className="bg-slate-950 px-3.5 py-1.5 rounded-2xl border border-slate-800 text-xs font-mono font-bold text-emerald-400">
            Skor: {score} / {PREDICT_QUESTIONS.length}
          </div>
        </div>

        <p className="text-sm text-slate-300">
          Uji keupayaan anda membaca kod (code reading). Lihat kod yang diberikan, ramalkan apakah hasil atau output yang akan dipaparkan pada skrin sebelum menekan jawapan.
        </p>
      </section>

      {/* Interactive Task Container */}
      {!showResultSummary ? (
        <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
            <span className="font-mono font-bold text-sky-400">
              Tugasan {currentTaskIdx + 1} daripada {PREDICT_QUESTIONS.length}: {currentTask.title}
            </span>
            <span>Pilih 1 jawapan yang paling tepat</span>
          </div>

          {/* Given Code Box */}
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 font-mono text-xs space-y-2">
            <div className="text-slate-500 text-[11px]">// Kod Diberi:</div>
            <pre className="text-emerald-300 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {currentTask.code}
            </pre>
          </div>

          {/* Question / Prompt */}
          <h3 className="text-sm font-bold text-white">
            {currentTask.question}
          </h3>

          {/* Choices */}
          <div className="grid grid-cols-1 gap-2.5">
            {currentTask.options.map((option, idx) => {
              const isSelected = selectedChoice === idx;
              const isCorrect = idx === currentTask.correctIndex;

              let btnStyle = 'bg-slate-950 border-slate-800 text-slate-200 hover:border-indigo-500';

              if (isAnswered) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-300 font-bold';
                } else {
                  btnStyle = 'bg-slate-950/40 border-slate-800 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectChoice(idx)}
                  disabled={isAnswered}
                  className={`p-4 rounded-xl border text-left text-xs transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                >
                  <span>{option}</span>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-400 shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>

          {/* Feedback Box & Next Button */}
          {isAnswered && (
            <div
              className={`p-4 rounded-2xl text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fadeIn ${
                selectedChoice === currentTask.correctIndex
                  ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300'
                  : 'bg-rose-950/60 border border-rose-500/40 text-rose-300'
              }`}
            >
              <div>
                <strong className="block font-bold">
                  {selectedChoice === currentTask.correctIndex ? '✓ Ramalan Anda TEPAT!' : '✗ Kurang Tepat'}
                </strong>
                <span className="text-[11px] text-slate-300">{currentTask.explanation}</span>
              </div>

              <button
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shrink-0 cursor-pointer flex items-center gap-1.5 shadow-md"
              >
                <span>{currentTaskIdx < PREDICT_QUESTIONS.length - 1 ? 'Tugasan Seterusnya' : 'Lihat Rumusan'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </section>
      ) : (
        /* Result Summary Card */
        <section className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl text-center space-y-5 animate-fadeIn">
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-3xl">
            🏆
          </div>
          <h3 className="text-xl font-black text-white">Tahniah! Anda Selesai Menjawab Semua Tugasan!</h3>
          <p className="text-sm text-slate-300">
            Skor Akhir Predict The Output: <strong className="text-emerald-400 font-mono text-base">{score} / {PREDICT_QUESTIONS.length}</strong>
          </p>

          <div className="flex justify-center gap-3 pt-3">
            <button
              onClick={handleRestart}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold inline-flex items-center gap-2 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" /> Uji Sekali Lagi
            </button>
          </div>
        </section>
      )}
    </div>
  );
};
