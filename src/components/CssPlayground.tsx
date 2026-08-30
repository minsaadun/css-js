import React, { useState, useMemo } from 'react';
import { useProgress } from '../context/ProgressContext';
import { Sparkles, Play, RotateCcw, HelpCircle, Code, CheckCircle2, Eye, Award } from 'lucide-react';

const DEFAULT_HTML = `<div class="card">
  <h2>STM Web Development</h2>
  <p>Saya sedang belajar CSS.</p>
  <button class="btn">Learn More</button>
</div>`;

const DEFAULT_CSS = `.card {
  padding: 20px;
  border: 2px solid #334155;
  background-color: #1e293b;
  color: #ffffff;
  text-align: center;
  border-radius: 16px;
}

h2 {
  color: #38bdf8;
  font-size: 22px;
  margin-bottom: 8px;
}

p {
  color: #94a3b8;
  font-size: 14px;
  margin-bottom: 16px;
}

.btn {
  background-color: #10b981;
  color: #042f2e;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}`;

const EXAMPLE_CSS = `.card {
  padding: 30px;
  border: 3px solid #818cf8;
  background: linear-gradient(135deg, #1e1b4b, #312e81);
  color: #ffffff;
  text-align: center;
  border-radius: 24px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
}

h2 {
  color: #38bdf8;
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 10px;
}

p {
  color: #cbd5e1;
  font-size: 15px;
  margin-bottom: 20px;
}

.btn {
  background-color: #38bdf8;
  color: #0f172a;
  padding: 10px 20px;
  border: none;
  border-radius: 12px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
}`;

export const CssPlayground: React.FC = () => {
  const { markModuleComplete, toggleTask, isTaskComplete } = useProgress();

  const [activeTab, setActiveTab] = useState<'playground' | 'makeover'>('playground');
  const [htmlCode, setHtmlCode] = useState(DEFAULT_HTML);
  const [cssCode, setCssCode] = useState(DEFAULT_CSS);
  const [renderedCss, setRenderedCss] = useState(DEFAULT_CSS);
  const [activeHint, setActiveHint] = useState<string | null>(null);

  // Makeover challenge interactive checklist
  const [makeoverBg, setMakeoverBg] = useState(false);
  const [makeoverTypo, setMakeoverTypo] = useState(false);
  const [makeoverSpacing, setMakeoverSpacing] = useState(false);
  const [makeoverBorder, setMakeoverBorder] = useState(false);
  const [makeoverAlign, setMakeoverAlign] = useState(false);

  const handleRunCode = () => {
    setRenderedCss(cssCode);
    markModuleComplete('cssPlayground');
  };

  const handleReset = () => {
    setHtmlCode(DEFAULT_HTML);
    setCssCode(DEFAULT_CSS);
    setRenderedCss(DEFAULT_CSS);
    setActiveHint(null);
  };

  const handleLoadExample = () => {
    setCssCode(EXAMPLE_CSS);
    setRenderedCss(EXAMPLE_CSS);
  };

  // Safe Preview Sandbox with custom inline CSS injected into a shadow document
  const previewDoc = useMemo(() => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
            body { 
              background-color: #0f172a; 
              display: flex; 
              align-items: center; 
              justify-content: center; 
              min-height: 100vh; 
              padding: 20px; 
            }
            ${renderedCss}
          </style>
        </head>
        <body>
          ${htmlCode}
        </body>
      </html>
    `;
  }, [htmlCode, renderedCss]);

  const makeoverCount = [makeoverBg, makeoverTypo, makeoverSpacing, makeoverBorder, makeoverAlign].filter(Boolean).length;

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header & Sub-Tabs */}
      <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-indigo-400">SUBTOPIK 3.5</span>
              <h2 className="text-xl lg:text-2xl font-black text-white">3.5 Manipulate CSS in a Web Design</h2>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
            <button
              onClick={() => setActiveTab('playground')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'playground'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              18.0 CSS Playground
            </button>
            <button
              onClick={() => setActiveTab('makeover')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'makeover'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              19.0 CSS Makeover Challenge
            </button>
          </div>
        </div>

        <p className="text-sm text-slate-300">
          Uji kemahiran anda mengubah suai kod CSS secara langsung dalam editor interaktif dan lihat perubahan rupa bentuk web pada live preview panel.
        </p>
      </section>

      {/* 18.0 CSS PLAYGROUND VIEW */}
      {activeTab === 'playground' && (
        <div className="space-y-6 animate-fadeIn">
          {/* 5 Tasks checklist */}
          <div className="bg-slate-900 rounded-3xl p-5 border border-slate-800">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span>📋</span> Senarai Tugasan Amali (Tandakan Bila Selesai):
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
              {[
                { id: 'task-1', label: 'TASK 1: Tukar background color' },
                { id: 'task-2', label: 'TASK 2: Tukar warna heading (h2)' },
                { id: 'task-3', label: 'TASK 3: Tambah / tebalkan border' },
                { id: 'task-4', label: 'TASK 4: Tambah padding card' },
                { id: 'task-5', label: 'TASK 5: Ubah text alignment' },
              ].map((task) => {
                const done = isTaskComplete(task.id);
                return (
                  <button
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-start gap-2 cursor-pointer ${
                      done
                        ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${done ? 'text-emerald-400' : 'text-slate-600'}`} />
                    <span>{task.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Code Editor & Live Preview (Split Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Editor (7 cols) */}
            <div className="lg:col-span-7 bg-slate-900 rounded-3xl p-5 border border-slate-800 shadow-xl flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-emerald-400" />
                  <h3 className="font-bold text-white text-xs">HTML / CSS Code Editor</h3>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveHint(activeHint ? null : '💡 Hint: Untuk tukar background, edit "background-color: #warna;" dalam .card atau h2.')}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <HelpCircle className="w-3.5 h-3.5" /> Hint
                  </button>
                  <button
                    onClick={handleLoadExample}
                    className="px-2.5 py-1 rounded-lg bg-indigo-900/60 hover:bg-indigo-800 text-indigo-300 text-xs font-bold cursor-pointer"
                  >
                    Example
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Reset
                  </button>
                </div>
              </div>

              {activeHint && (
                <div className="p-3 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs rounded-xl">
                  {activeHint}
                </div>
              )}

              {/* CSS textarea */}
              <div>
                <label className="text-[11px] font-mono font-bold text-sky-400 block mb-1">
                  style.css (CSS Rules):
                </label>
                <textarea
                  value={cssCode}
                  onChange={(e) => setCssCode(e.target.value)}
                  rows={10}
                  className="w-full bg-slate-950 p-3.5 rounded-xl border border-slate-700 text-xs font-mono text-emerald-300 focus:border-emerald-500 focus:outline-hidden resize-none leading-relaxed"
                  spellCheck={false}
                />
              </div>

              {/* HTML textarea */}
              <div>
                <label className="text-[11px] font-mono font-bold text-slate-400 block mb-1">
                  index.html (HTML Structure):
                </label>
                <textarea
                  value={htmlCode}
                  onChange={(e) => setHtmlCode(e.target.value)}
                  rows={4}
                  className="w-full bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 focus:border-slate-600 focus:outline-hidden resize-none leading-relaxed"
                  spellCheck={false}
                />
              </div>

              {/* Run Code Button */}
              <button
                id="run-css-btn"
                onClick={handleRunCode}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs shadow-lg shadow-emerald-950 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>[RUN CODE & SEE KESAN]</span>
              </button>
            </div>

            {/* Live Preview (5 cols) */}
            <div className="lg:col-span-5 bg-slate-900 rounded-3xl p-5 border border-slate-800 shadow-xl flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-sky-400" />
                  <h3 className="font-bold text-white text-xs">Live Preview</h3>
                </div>
                <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono">
                  Sandbox View
                </span>
              </div>

              <div className="flex-1 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden min-h-[360px] relative shadow-inner">
                <iframe
                  title="CSS Preview"
                  srcDoc={previewDoc}
                  className="w-full h-full border-0 absolute inset-0"
                  sandbox="allow-scripts"
                />
              </div>

              <div className="text-[11px] text-slate-400 text-center">
                Tekan <strong>[RUN CODE]</strong> selepas membuat perubahan pada kod CSS.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 19.0 CSS MAKEOVER CHALLENGE VIEW */}
      {activeTab === 'makeover' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400">MISI AMALI 19.0</span>
                <h3 className="text-lg font-black text-white">Make This Website Better!</h3>
              </div>
              <div className="bg-slate-950 px-3 py-1 rounded-xl text-xs font-mono font-bold text-emerald-400 border border-slate-800">
                Langkah: {makeoverCount} / 5
              </div>
            </div>

            <p className="text-xs text-slate-300">
              Berikut ialah sebuah laman web dengan rekaan yang &ldquo;kurang kemas&rdquo; (tiada spacing, teks terlalu rapat, tiada border, latar belakang pudar). Aktifkan setiap elemen CSS di bawah untuk mentransformasikan laman web ini:
            </p>

            {/* Checklist of CSS Improvements */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
              <button
                onClick={() => setMakeoverBg(!makeoverBg)}
                className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  makeoverBg ? 'bg-emerald-600 text-white' : 'bg-slate-950 text-slate-300 border-slate-800'
                }`}
              >
                <span>1. Background</span>
                <span className="text-xs">{makeoverBg ? '✓' : '+'}</span>
              </button>

              <button
                onClick={() => setMakeoverTypo(!makeoverTypo)}
                className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  makeoverTypo ? 'bg-emerald-600 text-white' : 'bg-slate-950 text-slate-300 border-slate-800'
                }`}
              >
                <span>2. Typography</span>
                <span className="text-xs">{makeoverTypo ? '✓' : '+'}</span>
              </button>

              <button
                onClick={() => setMakeoverSpacing(!makeoverSpacing)}
                className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  makeoverSpacing ? 'bg-emerald-600 text-white' : 'bg-slate-950 text-slate-300 border-slate-800'
                }`}
              >
                <span>3. Spacing (Pad)</span>
                <span className="text-xs">{makeoverSpacing ? '✓' : '+'}</span>
              </button>

              <button
                onClick={() => setMakeoverBorder(!makeoverBorder)}
                className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  makeoverBorder ? 'bg-emerald-600 text-white' : 'bg-slate-950 text-slate-300 border-slate-800'
                }`}
              >
                <span>4. Border Radius</span>
                <span className="text-xs">{makeoverBorder ? '✓' : '+'}</span>
              </button>

              <button
                onClick={() => setMakeoverAlign(!makeoverAlign)}
                className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  makeoverAlign ? 'bg-emerald-600 text-white' : 'bg-slate-950 text-slate-300 border-slate-800'
                }`}
              >
                <span>5. Alignment</span>
                <span className="text-xs">{makeoverAlign ? '✓' : '+'}</span>
              </button>
            </div>
          </div>

          {/* Comparison Cards: Before vs Current Result */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Before card */}
            <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <h4 className="text-xs font-bold text-rose-400 uppercase font-mono">BEFORE (Tanpa CSS Rapi)</h4>
                <span className="text-[10px] text-slate-500">Unstyled Web</span>
              </div>
              <div className="bg-white text-black p-4 font-serif text-xs space-y-2 rounded-xl border border-gray-400">
                <h3 className="text-sm font-bold underline">Kolej Komuniti Events</h3>
                <p>Pertandingan Web Design Semester 2 2026.</p>
                <button className="border border-black px-1.5 py-0.5 text-xs bg-gray-200">Daftar</button>
              </div>
              <div className="text-[11px] text-slate-400">
                Masalah: Teks melekat, tiada warna menarik, saiz font kaku.
              </div>
            </div>

            {/* After (Dynamic) card */}
            <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <h4 className="text-xs font-bold text-emerald-400 uppercase font-mono">AFTER (Makeover Live)</h4>
                <span className="text-[10px] text-emerald-400 font-mono">{makeoverCount}/5 Ciri Aktif</span>
              </div>

              <div
                className="transition-all duration-300"
                style={{
                  backgroundColor: makeoverBg ? '#0f172a' : '#ffffff',
                  color: makeoverBg ? '#ffffff' : '#000000',
                  fontFamily: makeoverTypo ? "'Plus Jakarta Sans', sans-serif" : 'serif',
                  padding: makeoverSpacing ? '24px' : '8px',
                  borderRadius: makeoverBorder ? '20px' : '0px',
                  border: makeoverBorder ? '2px solid #38bdf8' : '1px solid #94a3b8',
                  textAlign: makeoverAlign ? 'center' : 'left',
                  boxShadow: makeoverSpacing ? '0 10px 25px rgba(0,0,0,0.3)' : 'none',
                }}
              >
                <h3
                  style={{
                    color: makeoverTypo ? '#38bdf8' : (makeoverBg ? '#ffffff' : '#000000'),
                    fontSize: makeoverTypo ? '18px' : '14px',
                    fontWeight: makeoverTypo ? 'bold' : 'normal',
                    marginBottom: makeoverSpacing ? '8px' : '2px',
                  }}
                >
                  Kolej Komuniti Events
                </h3>
                <p
                  style={{
                    color: makeoverBg ? '#94a3b8' : '#475569',
                    fontSize: '12px',
                    marginBottom: makeoverSpacing ? '16px' : '4px',
                  }}
                >
                  Pertandingan Web Design Semester 2 2026.
                </p>
                <button
                  style={{
                    backgroundColor: makeoverBg ? '#10b981' : '#e2e8f0',
                    color: makeoverBg ? '#022c22' : '#000000',
                    padding: makeoverSpacing ? '8px 16px' : '2px 6px',
                    borderRadius: makeoverBorder ? '10px' : '2px',
                    border: 'none',
                    fontWeight: 'bold',
                    fontSize: '11px',
                    cursor: 'pointer',
                  }}
                >
                  Daftar
                </button>
              </div>

              {makeoverCount === 5 ? (
                <div className="p-3 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-xl border border-emerald-500/40 text-center flex items-center justify-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>TAHNIAH! Laman web kini kelihatan profesional dan moden!</span>
                </div>
              ) : (
                <div className="text-[11px] text-slate-400 text-center">
                  Klik semua butang di atas untuk melengkapkan makeover.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
