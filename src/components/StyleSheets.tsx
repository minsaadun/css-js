import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { SCENARIOS } from '../data/learningContent';
import { FileCode, CheckCircle2, HelpCircle, Layers, ArrowRight } from 'lucide-react';

export const StyleSheets: React.FC = () => {
  const { markModuleComplete } = useProgress();
  const [activeVisualizer, setActiveVisualizer] = useState<'inline' | 'internal' | 'external'>('inline');
  const [scenarioAnswers, setScenarioAnswers] = useState<Record<number, number>>({});

  const handleScenarioSelect = (questionId: number, optionIndex: number) => {
    setScenarioAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
    markModuleComplete('styleSheets');
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* 3.2 Introduction to 3 Types */}
      <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
            <FileCode className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-blue-400">SUBTOPIK 3.2</span>
            <h2 className="text-xl lg:text-2xl font-black text-white">3.2 Differentiate Types of Style Sheets</h2>
          </div>
        </div>

        <p className="text-sm text-slate-300">
          CSS boleh dimasukkan ke dalam dokumen HTML melalui <strong>3 kaedah utama</strong> mengikut keperluan projek anda:
        </p>

        {/* 3 Interactive Detail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* 3.2.1 Inline CSS */}
          <div
            onClick={() => setActiveVisualizer('inline')}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              activeVisualizer === 'inline'
                ? 'bg-slate-950 border-emerald-500 ring-2 ring-emerald-500/30 shadow-lg'
                : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold font-mono text-emerald-400">3.2.1 INLINE CSS</span>
              <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400">Terus pada Tag</span>
            </div>
            <div className="bg-slate-900 p-3 rounded-xl font-mono text-xs text-slate-200 border border-slate-800 space-y-1 mb-3">
              <span className="text-slate-500">&lt;</span><span className="text-rose-400">h1</span> <span className="text-sky-300">style</span>=<span className="text-amber-300">&quot;color: red;&quot;</span><span className="text-slate-500">&gt;</span><br />
              &nbsp;&nbsp;Hello STM<br />
              <span className="text-slate-500">&lt;/</span><span className="text-rose-400">h1</span><span className="text-slate-500">&gt;</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Penerangan:</strong> CSS ditulis secara terus di dalam atribut <code className="text-emerald-400">style=&quot;...&quot;</code> pada elemen HTML itu sendiri.
            </p>
          </div>

          {/* 3.2.2 Internal CSS */}
          <div
            onClick={() => setActiveVisualizer('internal')}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              activeVisualizer === 'internal'
                ? 'bg-slate-950 border-sky-500 ring-2 ring-sky-500/30 shadow-lg'
                : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold font-mono text-sky-400">3.2.2 INTERNAL CSS</span>
              <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400">&lt;style&gt; Tag</span>
            </div>
            <div className="bg-slate-900 p-3 rounded-xl font-mono text-xs text-slate-200 border border-slate-800 space-y-1 mb-3">
              <span className="text-sky-400">&lt;style&gt;</span><br />
              &nbsp;&nbsp;<span className="text-indigo-400">h1</span> &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-300">color</span>: <span className="text-amber-300">red</span>;<br />
              &nbsp;&nbsp;&#125;<br />
              <span className="text-sky-400">&lt;/style&gt;</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Penerangan:</strong> CSS ditulis dalam tag <code className="text-sky-400">&lt;style&gt;</code> di bahagian <code className="text-slate-300">&lt;head&gt;</code> dalam fail HTML yang sama.
            </p>
          </div>

          {/* 3.2.3 External CSS */}
          <div
            onClick={() => setActiveVisualizer('external')}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              activeVisualizer === 'external'
                ? 'bg-slate-950 border-indigo-500 ring-2 ring-indigo-500/30 shadow-lg'
                : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold font-mono text-indigo-400">3.2.3 EXTERNAL CSS</span>
              <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400">style.css Fail</span>
            </div>
            <div className="bg-slate-900 p-3 rounded-xl font-mono text-xs text-slate-200 border border-slate-800 space-y-1 mb-3">
              <span className="text-slate-500">&lt;</span><span className="text-indigo-400">link</span> <span className="text-sky-300">rel</span>=<span className="text-amber-300">&quot;stylesheet&quot;</span> <span className="text-sky-300">href</span>=<span className="text-emerald-300">&quot;style.css&quot;</span><span className="text-slate-500">&gt;</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Penerangan:</strong> CSS disimpan dalam fail berasingan (contoh: <code className="text-emerald-400">style.css</code>) dan dipautkan menggunakan tag <code className="text-indigo-400">&lt;link&gt;</code>.
            </p>
          </div>
        </div>
      </section>

      {/* 7.0 STYLE SHEET VISUALIZER SIMULATOR */}
      <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-400" />
            <h3 className="text-lg font-black text-white">7.0 Style Sheet Visualizer (Di Mana Lokasi Kod?)</h3>
          </div>
          <span className="text-xs font-mono text-slate-400">Pilih Jenis untuk Simulasi Visual</span>
        </div>

        {/* Tab Controls */}
        <div className="flex gap-2">
          {(['inline', 'internal', 'external'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setActiveVisualizer(type)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeVisualizer === type
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-950 text-slate-400 hover:bg-slate-800'
              }`}
            >
              {type} Simulator
            </button>
          ))}
        </div>

        {/* Dynamic Visualizer Architecture */}
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
          {activeVisualizer === 'inline' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                <span>📍 INLINE CSS: Kod berada tepat pada baris elemen dalam fail HTML</span>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 font-mono text-xs space-y-1">
                <div className="text-slate-500">&lt;!-- fail: index.html --&gt;</div>
                <div className="text-slate-400">&lt;body&gt;</div>
                <div className="pl-4 bg-emerald-950/60 p-2 rounded-lg border border-emerald-500/50 text-emerald-300">
                  &lt;h1 <span className="bg-emerald-500 text-slate-950 font-bold px-1.5 py-0.5 rounded">style=&quot;color: red; font-size: 24px;&quot;</span>&gt;Selamat Datang&lt;/h1&gt;
                </div>
                <div className="text-slate-400">&lt;/body&gt;</div>
              </div>
            </div>
          )}

          {activeVisualizer === 'internal' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-400">
                <span>📍 INTERNAL CSS: Kod berada di bahagian &lt;head&gt; fail HTML</span>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 font-mono text-xs space-y-1">
                <div className="text-slate-500">&lt;!-- fail: index.html --&gt;</div>
                <div className="text-slate-400">&lt;head&gt;</div>
                <div className="pl-4 bg-sky-950/60 p-2 rounded-lg border border-sky-500/50 text-sky-300">
                  <span className="text-white font-bold">&lt;style&gt;</span><br />
                  &nbsp;&nbsp;h1 &#123; color: red; font-size: 24px; &#125;<br />
                  <span className="text-white font-bold">&lt;/style&gt;</span>
                </div>
                <div className="text-slate-400">&lt;/head&gt;</div>
                <div className="text-slate-400">&lt;body&gt;</div>
                <div className="pl-4 text-slate-300">&lt;h1&gt;Selamat Datang&lt;/h1&gt;</div>
                <div className="text-slate-400">&lt;/body&gt;</div>
              </div>
            </div>
          )}

          {activeVisualizer === 'external' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-400">
                <span>📍 EXTERNAL CSS: Dua fail berasingan dihubungkan dengan tag &lt;link&gt;</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 font-mono text-xs space-y-1">
                  <div className="text-emerald-400 font-bold text-[11px] mb-2 flex items-center justify-between">
                    <span>📄 1. index.html</span>
                    <span className="text-slate-500 text-[10px]">HTML File</span>
                  </div>
                  <div className="text-slate-400">&lt;head&gt;</div>
                  <div className="pl-2 bg-indigo-950/60 p-1.5 rounded border border-indigo-500/50 text-indigo-300">
                    &lt;link rel=&quot;stylesheet&quot; <span className="bg-indigo-600 text-white px-1 rounded">href=&quot;style.css&quot;</span>&gt;
                  </div>
                  <div className="text-slate-400">&lt;/head&gt;</div>
                  <div className="text-slate-400">&lt;body&gt;</div>
                  <div className="pl-2 text-slate-300">&lt;h1&gt;Selamat Datang&lt;/h1&gt;</div>
                  <div className="text-slate-400">&lt;/body&gt;</div>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 font-mono text-xs space-y-1">
                  <div className="text-sky-400 font-bold text-[11px] mb-2 flex items-center justify-between">
                    <span>🎨 2. style.css</span>
                    <span className="text-slate-500 text-[10px]">CSS File Berasingan</span>
                  </div>
                  <div className="text-indigo-400">h1 &#123;</div>
                  <div className="pl-4 text-sky-300">color: red;</div>
                  <div className="pl-4 text-sky-300">font-size: 24px;</div>
                  <div className="text-indigo-400">&#125;</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 8.0 WHICH CSS SHOULD I USE? (Mini Scenario Game) */}
      <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-amber-400">8.0 MINI GAME SENARIO</span>
            <h3 className="text-lg lg:text-xl font-black text-white">Which CSS Should I Use?</h3>
          </div>
        </div>

        <p className="text-xs text-slate-300">
          Uji pemahaman anda dengan memilih jenis CSS yang paling sesuai bagi setiap senario situasi di bawah:
        </p>

        <div className="space-y-4">
          {SCENARIOS.map((item) => {
            const selectedIdx = scenarioAnswers[item.id];
            const isAnswered = selectedIdx !== undefined;

            return (
              <div
                key={item.id}
                className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3"
              >
                <div className="flex items-start gap-2">
                  <span className="bg-indigo-900/60 text-indigo-300 text-xs px-2.5 py-0.5 rounded-md font-bold shrink-0 mt-0.5">
                    Senario {item.id}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-100 leading-snug">
                    {item.scenario}
                  </h4>
                </div>

                {/* Option Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                  {item.options.map((opt, oIdx) => {
                    const isSelected = selectedIdx === oIdx;
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleScenarioSelect(item.id, oIdx)}
                        className={`p-3 rounded-xl text-xs font-semibold text-left transition-all cursor-pointer ${
                          isSelected
                            ? opt.correct
                              ? 'bg-emerald-600 text-white shadow-md'
                              : 'bg-rose-600 text-white shadow-md'
                            : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                        }`}
                      >
                        <div className="font-bold">{opt.type} CSS</div>
                        <div className="text-[11px] opacity-90 truncate">{opt.label}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Feedback Box */}
                {isAnswered && (
                  <div
                    className={`p-3.5 rounded-xl text-xs flex items-start gap-2 animate-fadeIn ${
                      item.options[selectedIdx].correct
                        ? 'bg-emerald-950/60 border border-emerald-500/50 text-emerald-300'
                        : 'bg-rose-950/60 border border-rose-500/50 text-rose-300'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold">
                        {item.options[selectedIdx].correct ? '✓ Pilihan Tepat!' : 'Perhatian:'}
                      </strong>
                      <span>{item.options[selectedIdx].explanation}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
