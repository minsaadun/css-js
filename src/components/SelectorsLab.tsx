import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { Target, CheckCircle2, XCircle, Award, Sparkles, RefreshCw } from 'lucide-react';

export const SelectorsLab: React.FC = () => {
  const { markModuleComplete } = useProgress();

  // 10.0 Selector Visualizer active selector
  const [activeSelector, setActiveSelector] = useState<string>('h1');

  // 11.0 Selector Game state
  const gameQuestions = [
    {
      id: 1,
      rule: '.card { background: yellow; }',
      targetDesc: 'Elemen manakah yang akan bertukar latar belakang menjadi KUNING?',
      elements: [
        { id: 'el1', html: '<div class="card">Kotak A</div>', isCorrect: true, text: 'Kotak A' },
        { id: 'el2', html: '<div id="card">Kotak B</div>', isCorrect: false, text: 'Kotak B' },
        { id: 'el3', html: '<p class="info">Kotak C</p>', isCorrect: false, text: 'Kotak C' },
      ],
      explanation: '.card menggunakan simbol titik (.) yang bermaksud CLASS selector.',
    },
    {
      id: 2,
      rule: '#tajuk { color: red; }',
      targetDesc: 'Elemen manakah yang akan bertukar warna teks menjadi MERAH?',
      elements: [
        { id: 'el4', html: '<h1 class="tajuk">Tajuk 1</h1>', isCorrect: false, text: 'Tajuk 1' },
        { id: 'el5', html: '<h1 id="tajuk">Tajuk 2</h1>', isCorrect: true, text: 'Tajuk 2' },
        { id: 'el6', html: '<p id="info">Tajuk 3</p>', isCorrect: false, text: 'Tajuk 3' },
      ],
      explanation: '#tajuk menggunakan simbol tanda pagar (#) yang memilih atribut id="tajuk".',
    },
    {
      id: 3,
      rule: 'button { padding: 10px; }',
      targetDesc: 'Elemen manakah yang akan dipilih oleh TAG selector ini?',
      elements: [
        { id: 'el7', html: '<button id="btn1">Hantar</button>', isCorrect: true, text: 'Button Hantar' },
        { id: 'el8', html: '<div class="button">Bukan Tag</div>', isCorrect: false, text: 'Div Class Button' },
        { id: 'el9', html: '<a href="#">Pautan Link</a>', isCorrect: false, text: 'Link A' },
      ],
      explanation: 'button tanpa sebarang simbol . atau # merujuk kepada semua tag <button> HTML.',
    },
    {
      id: 4,
      rule: '.info { font-weight: bold; }',
      targetDesc: 'Elemen manakah yang akan ditebalkan?',
      elements: [
        { id: 'el10', html: '<span class="info">Status Aktif</span>', isCorrect: true, text: 'Span Class Info' },
        { id: 'el11', html: '<p id="info">Semester 2</p>', isCorrect: false, text: 'P ID Info' },
        { id: 'el12', html: '<div class="alert">Peringatan</div>', isCorrect: false, text: 'Div Class Alert' },
      ],
      explanation: 'Class .info memilih mana-mana elemen yang mempunyai atribut class="info".',
    },
    {
      id: 5,
      rule: 'p { color: blue; }',
      targetDesc: 'Elemen manakah yang akan berwarna BIRU?',
      elements: [
        { id: 'el13', html: '<p>Teks Perenggan</p>', isCorrect: true, text: 'Perenggan <p>' },
        { id: 'el14', html: '<h1>Tajuk Utama</h1>', isCorrect: false, text: 'Tajuk <h1>' },
        { id: 'el15', html: '<span>Teks Span</span>', isCorrect: false, text: 'Span <span>' },
      ],
      explanation: 'Tag selector p memilih semua elemen perenggan <p> dalam dokumen.',
    },
  ];

  const [currentGameIdx, setCurrentGameIdx] = useState(0);
  const [gameScore, setGameScore] = useState(0);
  const [gameFeedback, setGameFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);
  const [selectedElId, setSelectedElId] = useState<string | null>(null);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const currentQ = gameQuestions[currentGameIdx];

  const handleElementClickInGame = (elementId: string, isCorrect: boolean) => {
    if (gameFeedback) return; // already answered
    setSelectedElId(elementId);

    if (isCorrect) {
      setGameScore((prev) => prev + 1);
      setGameFeedback({
        isCorrect: true,
        text: `✓ TAHNIAH! Betul. ${currentQ.explanation}`,
      });
    } else {
      setGameFeedback({
        isCorrect: false,
        text: `✗ Kurang tepat. ${currentQ.explanation}`,
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentGameIdx < gameQuestions.length - 1) {
      setCurrentGameIdx((prev) => prev + 1);
      setSelectedElId(null);
      setGameFeedback(null);
    } else {
      setIsGameFinished(true);
      markModuleComplete('selectors');
    }
  };

  const handleRestartGame = () => {
    setCurrentGameIdx(0);
    setGameScore(0);
    setSelectedElId(null);
    setGameFeedback(null);
    setIsGameFinished(false);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* 3.3 Selectors Overview */}
      <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-indigo-400">SUBTOPIK 3.3</span>
            <h2 className="text-xl lg:text-2xl font-black text-white">3.3 Describe CSS Selectors</h2>
          </div>
        </div>

        <p className="text-sm text-slate-300">
          <strong>CSS Selector</strong> digunakan untuk &ldquo;mencari&rdquo; atau memilih elemen HTML yang ingin anda gayakan. Terdapat 3 pemilih teras dalam silibus:
        </p>

        {/* 3 Selector Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-sm text-emerald-400 font-mono">3.3.1 TAG SELECTOR</h3>
              <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded">Nama Tag</span>
            </div>
            <div className="bg-slate-900 p-2.5 rounded-xl font-mono text-xs text-slate-200">
              <span className="text-emerald-400">p</span> &#123; <span className="text-sky-300">color</span>: <span className="text-amber-300">blue</span>; &#125;
            </div>
            <p className="text-xs text-slate-300">
              Memilih <strong>SEMUA</strong> elemen yang menggunakan tag tersebut dalam dokumen HTML (contoh: semua &lt;p&gt; atau semua &lt;h1&gt;).
            </p>
          </div>

          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-sm text-rose-400 font-mono">3.3.2 ID SELECTOR</h3>
              <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded"># Simbol Pagar</span>
            </div>
            <div className="bg-slate-900 p-2.5 rounded-xl font-mono text-xs text-slate-200">
              <span className="text-rose-400">#tajuk</span> &#123; <span className="text-sky-300">color</span>: <span className="text-amber-300">red</span>; &#125;
            </div>
            <p className="text-xs text-slate-300">
              Memilih <strong>SATU elemen unik</strong> yang mempunyai atribut <code className="text-rose-400">id=&quot;tajuk&quot;</code>. ID mestilah eksklusif 1 sahaja.
            </p>
          </div>

          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-sm text-sky-400 font-mono">3.3.3 CLASS SELECTOR</h3>
              <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded">. Simbol Titik</span>
            </div>
            <div className="bg-slate-900 p-2.5 rounded-xl font-mono text-xs text-slate-200">
              <span className="text-sky-400">.card</span> &#123; <span className="text-sky-300">background</span>: <span className="text-amber-300">yellow</span>; &#125;
            </div>
            <p className="text-xs text-slate-300">
              Memilih <strong>KUMPULAN elemen</strong> yang mempunyai atribut <code className="text-sky-400">class=&quot;card&quot;</code>. Boleh diguna berulang kali.
            </p>
          </div>
        </div>
      </section>

      {/* 10.0 SELECTOR VISUALIZER */}
      <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-400">10.0 VISUALIZER SIMULATOR</span>
            <h3 className="text-lg font-black text-white">Selector Visualizer (Lihat Elemen Mana Terpilih)</h3>
          </div>
          <span className="text-xs text-slate-400">Klik selector di bawah untuk highlight elemen:</span>
        </div>

        {/* Clickable Selectors Bar */}
        <div className="flex flex-wrap gap-2">
          {[
            { sel: 'h1', label: 'Tag: h1', desc: 'Pilih semua <h1>' },
            { sel: '#tajuk', label: 'ID: #tajuk', desc: 'Pilih id="tajuk"' },
            { sel: '.info', label: 'Class: .info', desc: 'Pilih semua class="info"' },
            { sel: 'button', label: 'Tag: button', desc: 'Pilih semua <button>' },
            { sel: 'p', label: 'Tag: p', desc: 'Pilih semua <p>' },
          ].map((item) => (
            <button
              key={item.sel}
              onClick={() => {
                setActiveSelector(item.sel);
                markModuleComplete('selectors');
              }}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                activeSelector === item.sel
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-950 scale-105'
                  : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {item.sel}
            </button>
          ))}
        </div>

        {/* Live Mock Website with Reactive Highlighting */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-2">
          {/* HTML Code Structure */}
          <div className="md:col-span-6 bg-slate-950 p-4 rounded-2xl border border-slate-800 font-mono text-xs space-y-2">
            <div className="text-slate-500 text-[11px] mb-1">// Kod HTML Dokumen:</div>

            <div
              className={`p-2 rounded-lg transition-all ${
                activeSelector === 'h1' || activeSelector === '#tajuk'
                  ? 'bg-emerald-950/80 border border-emerald-400 text-emerald-300 font-bold'
                  : 'text-slate-400'
              }`}
            >
              &lt;h1 id=&quot;tajuk&quot;&gt;Kolej Komuniti&lt;/h1&gt;
            </div>

            <div
              className={`p-2 rounded-lg transition-all ${
                activeSelector === '.info' || activeSelector === 'p'
                  ? 'bg-emerald-950/80 border border-emerald-400 text-emerald-300 font-bold'
                  : 'text-slate-400'
              }`}
            >
              &lt;p class=&quot;info&quot;&gt;Web Development&lt;/p&gt;
            </div>

            <div
              className={`p-2 rounded-lg transition-all ${
                activeSelector === '.info' || activeSelector === 'p'
                  ? 'bg-emerald-950/80 border border-emerald-400 text-emerald-300 font-bold'
                  : 'text-slate-400'
              }`}
            >
              &lt;p class=&quot;info&quot;&gt;Semester 2&lt;/p&gt;
            </div>

            <div
              className={`p-2 rounded-lg transition-all ${
                activeSelector === 'button'
                  ? 'bg-emerald-950/80 border border-emerald-400 text-emerald-300 font-bold'
                  : 'text-slate-400'
              }`}
            >
              &lt;button&gt;Daftar&lt;/button&gt;
            </div>
          </div>

          {/* Live Preview Render */}
          <div className="md:col-span-6 bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-center space-y-3">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              Hasil Preview (Highlighted Elements):
            </div>

            {/* Element 1 */}
            <div
              className={`p-3 rounded-xl transition-all ${
                activeSelector === 'h1' || activeSelector === '#tajuk'
                  ? 'bg-emerald-500 text-slate-950 font-black shadow-lg ring-4 ring-emerald-500/30'
                  : 'bg-slate-900 text-white font-bold'
              }`}
            >
              <span className="text-base">Kolej Komuniti</span>
              {(activeSelector === 'h1' || activeSelector === '#tajuk') && (
                <span className="ml-2 text-[10px] bg-slate-950 text-emerald-300 px-2 py-0.5 rounded font-mono">
                  TERPILIH OLEH {activeSelector}
                </span>
              )}
            </div>

            {/* Element 2 */}
            <div
              className={`p-2.5 rounded-xl text-xs transition-all ${
                activeSelector === '.info' || activeSelector === 'p'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md ring-4 ring-emerald-500/30'
                  : 'bg-slate-900 text-slate-300'
              }`}
            >
              <span>Web Development</span>
              {(activeSelector === '.info' || activeSelector === 'p') && (
                <span className="ml-2 text-[9px] bg-slate-950 text-emerald-300 px-1.5 py-0.5 rounded font-mono">
                  TERPILIH
                </span>
              )}
            </div>

            {/* Element 3 */}
            <div
              className={`p-2.5 rounded-xl text-xs transition-all ${
                activeSelector === '.info' || activeSelector === 'p'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md ring-4 ring-emerald-500/30'
                  : 'bg-slate-900 text-slate-300'
              }`}
            >
              <span>Semester 2</span>
              {(activeSelector === '.info' || activeSelector === 'p') && (
                <span className="ml-2 text-[9px] bg-slate-950 text-emerald-300 px-1.5 py-0.5 rounded font-mono">
                  TERPILIH
                </span>
              )}
            </div>

            {/* Element 4 */}
            <div>
              <button
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeSelector === 'button'
                    ? 'bg-emerald-500 text-slate-950 font-black shadow-lg ring-4 ring-emerald-500/30'
                    : 'bg-slate-800 text-slate-300'
                }`}
              >
                Daftar
                {activeSelector === 'button' && (
                  <span className="ml-2 text-[9px] bg-slate-950 text-emerald-300 px-1.5 py-0.5 rounded font-mono">
                    TERPILIH
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 11.0 SELECTOR GAME: "SELECT THE CORRECT ELEMENT" */}
      <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-black text-white">11.0 Selector Game: Select the Correct Element</h3>
          </div>
          <div className="bg-slate-950 px-3 py-1 rounded-xl text-xs font-mono font-bold text-emerald-400 border border-slate-800">
            Skor: {gameScore} / {gameQuestions.length}
          </div>
        </div>

        {!isGameFinished ? (
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono font-bold text-indigo-400">Soalan {currentGameIdx + 1} daripada {gameQuestions.length}</span>
              <span>Klik pada kotak elemen yang betul</span>
            </div>

            {/* Rule display */}
            <div className="bg-slate-900 p-4 rounded-xl border border-indigo-500/40 text-center">
              <div className="text-xs text-slate-400 mb-1">Peraturan CSS Diberi:</div>
              <div className="font-mono text-base sm:text-lg font-bold text-amber-300">{currentQ.rule}</div>
              <div className="text-xs text-slate-200 mt-2 font-medium">{currentQ.targetDesc}</div>
            </div>

            {/* Elements options to click */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {currentQ.elements.map((el) => {
                const isSelected = selectedElId === el.id;
                return (
                  <button
                    key={el.id}
                    onClick={() => handleElementClickInGame(el.id, el.isCorrect)}
                    className={`p-4 rounded-xl border font-mono text-xs text-left transition-all cursor-pointer ${
                      isSelected
                        ? el.isCorrect
                          ? 'bg-emerald-600 border-emerald-400 text-white shadow-md'
                          : 'bg-rose-600 border-rose-400 text-white shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-200 hover:border-indigo-500'
                    }`}
                  >
                    <div className="text-slate-400 text-[10px] mb-1 font-sans">{el.text}</div>
                    <div className="font-bold truncate">{el.html}</div>
                  </button>
                );
              })}
            </div>

            {/* Game Feedback & Next */}
            {gameFeedback && (
              <div
                className={`p-4 rounded-xl text-xs flex items-center justify-between animate-fadeIn ${
                  gameFeedback.isCorrect
                    ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300'
                    : 'bg-rose-950/60 border border-rose-500/40 text-rose-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  {gameFeedback.isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                  ) : (
                    <XCircle className="w-5 h-5 shrink-0 text-rose-400" />
                  )}
                  <span className="font-medium">{gameFeedback.text}</span>
                </div>

                <button
                  onClick={handleNextQuestion}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shrink-0 cursor-pointer ml-3"
                >
                  {currentGameIdx < gameQuestions.length - 1 ? 'Soalan Seterusnya →' : 'Lihat Keputusan'}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-3xl">
              🏆
            </div>
            <h4 className="text-xl font-extrabold text-white">Selector Game Selesai!</h4>
            <p className="text-sm text-slate-300">
              Skor Anda: <strong className="text-emerald-400 font-mono text-base">{gameScore} / {gameQuestions.length}</strong>
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={handleRestartGame}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" /> Main Semula
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
