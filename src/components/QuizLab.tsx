import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { QUIZ_QUESTIONS } from '../data/learningContent';
import { CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, BookOpen } from 'lucide-react';

export const QuizLab: React.FC = () => {
  const { setQuizScore, userProgress, markModuleComplete } = useProgress();

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const currentQ = QUIZ_QUESTIONS[currentIdx];
  const isAnswered = selectedAnswers[currentQ.id] !== undefined;
  const selectedChoice = selectedAnswers[currentQ.id];

  const handleSelectOption = (optionIndex: number) => {
    if (isAnswered) return;

    const nextAnswers = {
      ...selectedAnswers,
      [currentQ.id]: optionIndex,
    };
    setSelectedAnswers(nextAnswers);

    // Calculate interim score
    let correctCount = 0;
    Object.entries(nextAnswers).forEach(([qId, ans]) => {
      const q = QUIZ_QUESTIONS.find((item) => item.id === Number(qId));
      if (q && q.correctIndex === ans) {
        correctCount += 1;
      }
    });

    if (Object.keys(nextAnswers).length === QUIZ_QUESTIONS.length) {
      setQuizScore(correctCount);
      setIsQuizCompleted(true);
      markModuleComplete('quiz');
    }
  };

  const handleNext = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setIsQuizCompleted(true);
      markModuleComplete('quiz');
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedAnswers({});
    setIsQuizCompleted(false);
  };

  // Total correct calculation
  const totalCorrect = Object.entries(selectedAnswers).reduce((acc, [qId, ans]) => {
    const q = QUIZ_QUESTIONS.find((item) => item.id === Number(qId));
    return q && q.correctIndex === ans ? acc + 1 : acc;
  }, 0);

  const percentage = Math.round((totalCorrect / QUIZ_QUESTIONS.length) * 100);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Quiz Header */}
      <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-indigo-400">PENILAIAN 33.0</span>
              <h2 className="text-xl lg:text-2xl font-black text-white">Kuiz Pantas STM21673 (15 Soalan)</h2>
            </div>
          </div>

          <div className="bg-slate-950 px-3.5 py-1.5 rounded-2xl border border-slate-800 text-xs font-mono font-bold text-emerald-400">
            Skor Tertinggi: {userProgress.quizScore} / {QUIZ_QUESTIONS.length}
          </div>
        </div>

        <p className="text-sm text-slate-300">
          Uji pemahaman menyeluruh anda merangkumi CSS Types, Selectors, Box Model, Properties, JavaScript Events dan Form Validation.
        </p>

        {/* Progress bar */}
        <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
          <div
            className="bg-gradient-to-r from-indigo-500 to-emerald-500 h-full transition-all duration-300"
            style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
          />
        </div>
      </section>

      {/* Active Question View */}
      {!isQuizCompleted ? (
        <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
            <span className="font-mono font-bold text-sky-400">
              Soalan {currentIdx + 1} daripada {QUIZ_QUESTIONS.length}
            </span>
            <span className="bg-slate-950 px-2.5 py-1 rounded-lg text-slate-400 font-mono">
              {currentQ.category}
            </span>
          </div>

          {/* Question Text */}
          <h3 className="text-base sm:text-lg font-black text-white leading-relaxed">
            {currentQ.question}
          </h3>

          {/* Options Grid */}
          <div className="space-y-2.5 pt-1">
            {currentQ.options.map((option, optIdx) => {
              const isSelected = selectedChoice === optIdx;
              const isCorrect = optIdx === currentQ.correctIndex;

              let optionStyle = 'bg-slate-950 border-slate-800 text-slate-200 hover:border-slate-700';

              if (isAnswered) {
                if (isCorrect) {
                  optionStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold';
                } else if (isSelected && !isCorrect) {
                  optionStyle = 'bg-rose-950/80 border-rose-500 text-rose-300 font-bold';
                } else {
                  optionStyle = 'bg-slate-950/40 border-slate-800 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${optionStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-slate-900 text-slate-400 font-mono font-bold flex items-center justify-center text-xs shrink-0">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span>{option}</span>
                  </div>

                  {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation & Next */}
          {isAnswered && (
            <div
              className={`p-4 rounded-2xl text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fadeIn ${
                selectedChoice === currentQ.correctIndex
                  ? 'bg-emerald-950/70 border border-emerald-500/40 text-emerald-300'
                  : 'bg-rose-950/70 border border-rose-500/40 text-rose-300'
              }`}
            >
              <div>
                <strong className="block font-bold">
                  {selectedChoice === currentQ.correctIndex ? '✓ Jawapan Tepat!' : '✗ Kurang Tepat'}
                </strong>
                <span className="text-slate-300 text-[11px]">{currentQ.explanation}</span>
              </div>

              <button
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shrink-0 cursor-pointer flex items-center gap-1.5 shadow-md"
              >
                <span>{currentIdx < QUIZ_QUESTIONS.length - 1 ? 'Soalan Seterusnya' : 'Tamat Kuiz'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </section>
      ) : (
        /* Quiz Results Card */
        <section className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl text-center space-y-6 animate-fadeIn">
          <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-4xl shadow-lg">
            {percentage >= 80 ? '🌟' : percentage >= 50 ? '👍' : '📚'}
          </div>

          <div>
            <h3 className="text-2xl font-black text-white">Keputusan Kuiz Anda</h3>
            <p className="text-xs text-slate-400 mt-1">STM21673: Cascading Style Sheets & JavaScript</p>
          </div>

          <div className="flex justify-center gap-6 py-2 font-mono">
            <div className="bg-slate-950 px-5 py-3 rounded-2xl border border-slate-800">
              <span className="text-xs text-slate-400 block font-sans">Jumlah Betul</span>
              <span className="text-xl font-bold text-emerald-400">{totalCorrect} / {QUIZ_QUESTIONS.length}</span>
            </div>
            <div className="bg-slate-950 px-5 py-3 rounded-2xl border border-slate-800">
              <span className="text-xs text-slate-400 block font-sans">Peratusan</span>
              <span className="text-xl font-bold text-sky-400">{percentage}%</span>
            </div>
          </div>

          <p className="text-xs text-slate-300 max-w-md mx-auto">
            {percentage >= 80
              ? 'Tahniah! Anda telah menguasai konsep asas CSS dan JavaScript dengan cemerlang!'
              : 'Teruskan latihan! Anda boleh mengulangi semula kuiz atau mencuba lab interaktif untuk mengukuhkan kefahaman.'}
          </p>

          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={handleRestart}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs inline-flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <RotateCcw className="w-4 h-4" /> Ulang Semula Kuiz
            </button>
          </div>
        </section>
      )}
    </div>
  );
};
