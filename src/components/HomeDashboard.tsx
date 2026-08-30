import React, { useState } from 'react';
import { NavSection } from '../types';
import { useProgress } from '../context/ProgressContext';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Palette, 
  Box, 
  Zap, 
  MousePointerClick, 
  CheckSquare, 
  Bug, 
  HelpCircle, 
  Award, 
  TrendingUp,
  FileCode,
  Target
} from 'lucide-react';

interface HomeDashboardProps {
  onNavigate: (section: NavSection) => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({ onNavigate }) => {
  const { overallPercentage } = useProgress();
  const [quickAlertMsg, setQuickAlertMsg] = useState('Selamat Datang ke STM! Jom mula belajar.');
  const [activeAnalogy, setActiveAnalogy] = useState<'html' | 'css' | 'js'>('css');
  const [boxPadding, setBoxPadding] = useState(20);
  const [boxMargin, setBoxMargin] = useState(12);

  const learningOutcomes = [
    '1. Menerangkan fungsi CSS dalam mereka bentuk web.',
    '2. Membezakan Inline, Internal dan External CSS.',
    '3. Menggunakan Tag, ID dan Class selector.',
    '4. Menggunakan CSS properties (Type, Background, Block, List, Border, Positioning).',
    '5. Mengubah reka bentuk halaman menggunakan CSS & Box Model.',
    '6. Menggunakan asas JavaScript & kaedah alert().',
    '7. Menggunakan JavaScript events (onclick, onchange, onsubmit).',
    '8. Melaksanakan basic form validation sebelum submit.',
  ];

  return (
    <div id="home-dashboard" className="space-y-6 max-w-7xl mx-auto">
      {/* Bento Grid Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* Main Hero Card (8 cols) */}
        <section className="md:col-span-8 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/80 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-extrabold tracking-wide">
                STM21673 • TOPIC 3.0
              </span>
              <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-3 py-1 rounded-full text-xs font-semibold">
                Sijil Teknologi Maklumat (STM)
              </span>
              <span className="bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded-full font-mono">
                Sem 2 Kolej Komuniti
              </span>
            </div>

            <div>
              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                CSS & JS LAB
              </h1>
              <p className="text-base sm:text-lg font-bold text-emerald-400 mt-1">
                Style It • Click It • Make It Interactive
              </p>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
              Platform pembelajaran amali interaktif untuk menguasai <strong>Cascading Style Sheets (CSS)</strong> bagi penggayaan visual dan <strong>JavaScript</strong> bagi tindak balas interaktif laman web.
            </p>

            {/* Pipeline Visual */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
              <div className="bg-slate-950/70 p-3 rounded-2xl border border-slate-800 text-center">
                <div className="text-lg">🦴</div>
                <div className="text-xs font-bold text-slate-300">HTML</div>
                <div className="text-[10px] text-slate-400">Plain Website</div>
              </div>
              <div className="bg-emerald-950/40 p-3 rounded-2xl border border-emerald-500/30 text-center">
                <div className="text-lg">🎨</div>
                <div className="text-xs font-bold text-emerald-300">CSS</div>
                <div className="text-[10px] text-emerald-400">Beautiful Website</div>
              </div>
              <div className="bg-indigo-950/40 p-3 rounded-2xl border border-indigo-500/30 text-center">
                <div className="text-lg">⚡</div>
                <div className="text-xs font-bold text-indigo-300">JavaScript</div>
                <div className="text-[10px] text-indigo-400">Interactive Website</div>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-6 flex flex-wrap items-center gap-3">
            <button
              id="start-lab-btn"
              onClick={() => onNavigate('comparison')}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-emerald-900/40 flex items-center gap-2 transform active:scale-95 transition-all cursor-pointer"
            >
              <span>MULA CSS & JS LAB</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('css-basics')}
              className="px-5 py-3 rounded-2xl bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-all cursor-pointer"
            >
              Terus ke 3.1 CSS Basics
            </button>
            <button
              onClick={() => onNavigate('quiz')}
              className="px-4 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-xs border border-slate-800 transition-all cursor-pointer"
            >
              Uji Diri (Quiz)
            </button>
          </div>
        </section>

        {/* Human Analogy Bento Card (4 cols) */}
        <section className="md:col-span-4 bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl flex flex-col justify-between relative">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <span>🧠</span> Analogi Manusia
              </h3>
              <span className="text-[10px] font-mono text-slate-400 uppercase bg-slate-800 px-2 py-0.5 rounded-full">
                Konsep Teras
              </span>
            </div>

            {/* Interactive Selector Tabs */}
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950 rounded-xl mb-4 text-xs font-bold">
              <button
                onClick={() => setActiveAnalogy('html')}
                className={`py-1.5 rounded-lg transition-all ${
                  activeAnalogy === 'html' ? 'bg-slate-800 text-emerald-400 shadow-xs' : 'text-slate-400'
                }`}
              >
                HTML
              </button>
              <button
                onClick={() => setActiveAnalogy('css')}
                className={`py-1.5 rounded-lg transition-all ${
                  activeAnalogy === 'css' ? 'bg-slate-800 text-sky-400 shadow-xs' : 'text-slate-400'
                }`}
              >
                CSS
              </button>
              <button
                onClick={() => setActiveAnalogy('js')}
                className={`py-1.5 rounded-lg transition-all ${
                  activeAnalogy === 'js' ? 'bg-slate-800 text-amber-400 shadow-xs' : 'text-slate-400'
                }`}
              >
                JS
              </button>
            </div>

            {/* Analogy Dynamic Content */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 min-h-[140px] flex flex-col justify-center">
              {activeAnalogy === 'html' && (
                <div className="space-y-1.5 animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🦴</span>
                    <h4 className="font-extrabold text-emerald-400 text-sm">HTML (Structure)</h4>
                  </div>
                  <p className="text-xs text-slate-300">
                    <strong>Ibarat rangka tulang badan manusia.</strong>
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Menyediakan tulang belakang seperti teks tajuk &lt;h1&gt;, perenggan &lt;p&gt;, dan butang &lt;button&gt;.
                  </p>
                </div>
              )}
              {activeAnalogy === 'css' && (
                <div className="space-y-1.5 animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">👕</span>
                    <h4 className="font-extrabold text-sky-400 text-sm">CSS (Presentation)</h4>
                  </div>
                  <p className="text-xs text-slate-300">
                    <strong>Ibarat pakaian, gaya rambut dan warna kulit.</strong>
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Mencantikkan rupa dengan warna background, saiz font, border bergaya, dan susun atur rapi.
                  </p>
                </div>
              )}
              {activeAnalogy === 'js' && (
                <div className="space-y-1.5 animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🏃</span>
                    <h4 className="font-extrabold text-amber-400 text-sm">JavaScript (Behavior)</h4>
                  </div>
                  <p className="text-xs text-slate-300">
                    <strong>Ibarat otot dan pergerakan/tindakan manusia.</strong>
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Membolehkan butang bertindak bila diklik, semak borang, dan paparkan popup mesej.
                  </p>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => onNavigate('comparison')}
            className="w-full mt-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Buka Sandbox Perbandingan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </section>
      </div>

      {/* Bento Middle Row: Box Model Quick Visualizer, Live Code Panel, and JS Alert Sandbox */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* CSS Box Model Visualizer Bento Card (4 cols) */}
        <section className="md:col-span-4 bg-slate-900 rounded-3xl p-5 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-orange-500/20 text-orange-400">
                  <Box className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-white text-sm">3.4.4 Box Model Preview</h3>
              </div>
              <button
                onClick={() => onNavigate('box-model')}
                className="text-[11px] font-bold text-emerald-400 hover:underline"
              >
                Lab Penuh &rarr;
              </button>
            </div>

            {/* Interactive mini Diagram */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center justify-center">
              <div
                className="bg-orange-500/20 border-2 border-dashed border-orange-500/80 rounded-xl transition-all flex items-center justify-center relative"
                style={{ padding: `${boxMargin}px` }}
              >
                <span className="absolute top-1 left-2 text-[9px] font-bold text-orange-400 uppercase">Margin</span>
                <div
                  className="bg-emerald-500/20 border-2 border-emerald-400 rounded-lg transition-all flex items-center justify-center relative"
                  style={{ padding: `${boxPadding}px` }}
                >
                  <span className="absolute top-0.5 left-1 text-[9px] font-bold text-emerald-400 uppercase">Padding</span>
                  <div className="bg-blue-600 text-white font-mono font-bold text-[10px] px-2 py-1 rounded shadow-xs">
                    CONTENT
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-3 mt-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-emerald-400 font-medium">Padding (Dalam)</span>
                  <span className="font-mono text-white text-xs">{boxPadding}px</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="35"
                  value={boxPadding}
                  onChange={(e) => setBoxPadding(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 accent-emerald-500 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-orange-400 font-medium">Margin (Luar)</span>
                  <span className="font-mono text-white text-xs">{boxMargin}px</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="25"
                  value={boxMargin}
                  onChange={(e) => setBoxMargin(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 accent-orange-500 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 p-2 bg-slate-950 rounded-xl font-mono text-[11px] text-slate-300 border border-slate-800 flex justify-between">
            <span className="text-emerald-400">padding: {boxPadding}px;</span>
            <span className="text-orange-400">margin: {boxMargin}px;</span>
          </div>
        </section>

        {/* Live Code Preview Bento Card (4 cols) */}
        <section className="md:col-span-4 bg-slate-900 rounded-3xl p-5 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-sky-500/20 text-sky-400">
                  <FileCode className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-white text-sm">3.5 CSS Playground</h3>
              </div>
              <button
                onClick={() => onNavigate('css-playground')}
                className="text-[11px] font-bold text-sky-400 hover:underline"
              >
                Buka Editor &rarr;
              </button>
            </div>

            {/* Code Window */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden">
              <div className="bg-slate-800/80 px-3 py-1.5 flex items-center justify-between border-b border-slate-800">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <span className="text-[10px] font-mono text-slate-400">style.css</span>
              </div>
              <div className="p-3 font-mono text-xs text-slate-300 space-y-0.5 overflow-x-auto">
                <div><span className="text-indigo-400">.card</span> &#123;</div>
                <div className="pl-4"><span className="text-sky-300">background</span>: <span className="text-amber-300">#0f172a</span>;</div>
                <div className="pl-4"><span className="text-sky-300">padding</span>: <span className="text-emerald-300">20px</span>;</div>
                <div className="pl-4"><span className="text-sky-300">border-radius</span>: <span className="text-emerald-300">16px</span>;</div>
                <div className="pl-4"><span className="text-sky-300">color</span>: <span className="text-amber-300">#10b981</span>;</div>
                <div>&#125;</div>
              </div>
            </div>

            <p className="text-xs text-slate-400 mt-3 leading-relaxed">
              Cuba ubah kod CSS dan lihat kesan live preview pada elemen HTML serta merta dalam playground khas.
            </p>
          </div>

          <button
            onClick={() => onNavigate('css-playground')}
            className="w-full mt-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-950 transition-all flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mula Edit Kod Live</span>
          </button>
        </section>

        {/* Quick JS Alert Sandbox Bento Card (4 cols) */}
        <section className="md:col-span-4 bg-slate-900 rounded-3xl p-5 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-white text-sm">3.6.4 JS Alert() Method</h3>
              </div>
              <button
                onClick={() => onNavigate('javascript')}
                className="text-[11px] font-bold text-emerald-400 hover:underline"
              >
                Lab JS &rarr;
              </button>
            </div>

            <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 space-y-2.5">
              <label className="text-[11px] text-slate-400 font-semibold block">Tulis Mesej Dialog:</label>
              <input
                type="text"
                value={quickAlertMsg}
                onChange={(e) => setQuickAlertMsg(e.target.value)}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-hidden font-mono"
                placeholder="Mesej alert..."
              />
              <div className="bg-slate-900/80 p-2 rounded-lg font-mono text-[11px] text-emerald-400">
                &lt;script&gt;<br />
                &nbsp;&nbsp;alert(&quot;{quickAlertMsg}&quot;);<br />
                &lt;/script&gt;
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              alert(quickAlertMsg);
            }}
            className="w-full mt-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md shadow-emerald-950 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <MousePointerClick className="w-4 h-4" />
            <span>TEKAN UNTUK TEST ALERT()</span>
          </button>
        </section>
      </div>

      {/* Course Learning Outcomes (CLO) Card */}
      <section className="bg-slate-900/90 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2.5 py-0.5 rounded-md border border-emerald-500/30">
                CLO1 (P3)
              </span>
              <h3 className="text-lg font-black text-white">Objektif Pembelajaran Topik 3.0</h3>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Setiap modul amali disusun untuk memenuhi hasil pembelajaran kursus STM21673.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">Status Amali:</span>
            <span className="text-sm font-black text-emerald-400 font-mono bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
              {overallPercentage}% Selesai
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {learningOutcomes.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-xs text-slate-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Navigation Bento Grid for all Core Modules */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
        {[
          { id: 'style-sheets' as NavSection, title: '3.2 Style Sheets', icon: Layers, desc: 'Inline, Internal, External', color: 'from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400' },
          { id: 'selectors' as NavSection, title: '3.3 Selectors', icon: Target, desc: 'Tag, ID & Class', color: 'from-indigo-500/20 to-indigo-600/10 border-indigo-500/30 text-indigo-400' },
          { id: 'properties' as NavSection, title: '3.4 Properties Lab', icon: Palette, desc: '7 Kategori CSS', color: 'from-sky-500/20 to-sky-600/10 border-sky-500/30 text-sky-400' },
          { id: 'events' as NavSection, title: '3.6.5 JS Events', icon: MousePointerClick, desc: 'onclick, onchange, onsubmit', color: 'from-amber-500/20 to-amber-600/10 border-amber-500/30 text-amber-400' },
          { id: 'form-validation' as NavSection, title: '3.6.6 Validation', icon: CheckSquare, desc: 'Flowchart & Simulator', color: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 text-emerald-400' },
          { id: 'debug-lab' as NavSection, title: 'Debug Lab', icon: Bug, desc: 'Cari & Baiki Ralat', color: 'from-rose-500/20 to-rose-600/10 border-rose-500/30 text-rose-400' },
        ].map((mod) => {
          const Icon = mod.icon;
          return (
            <button
              key={mod.id}
              onClick={() => onNavigate(mod.id)}
              className={`p-4 rounded-2xl bg-gradient-to-br ${mod.color} border bg-slate-900/90 text-left hover:scale-[1.02] active:scale-95 transition-all flex flex-col justify-between space-y-2 cursor-pointer`}
            >
              <Icon className="w-5 h-5" />
              <div>
                <div className="font-bold text-white text-xs">{mod.title}</div>
                <div className="text-[10px] text-slate-400 truncate">{mod.desc}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
