import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { Palette, Sparkles, CheckCircle2, XCircle, Sliders, ArrowLeftRight } from 'lucide-react';

export const CssBasics: React.FC = () => {
  const { markModuleComplete } = useProgress();

  // 3.1 Live Color & Font size states
  const [headingColor, setHeadingColor] = useState('#10b981');
  const [headingSize, setHeadingSize] = useState(32);
  const [headingAlign, setHeadingAlign] = useState<'left' | 'center' | 'right'>('center');

  // Before / After Slider state (0 to 100%)
  const [sliderPos, setSliderPos] = useState(50);

  // 5.0 Syntax interactive activity
  const [selectedSyntaxPart, setSelectedSyntaxPart] = useState<'selector' | 'property' | 'value' | null>(null);
  const [syntaxQuizTarget, setSyntaxQuizTarget] = useState<'property' | 'selector' | 'value'>('property');
  const [syntaxQuizFeedback, setSyntaxQuizFeedback] = useState<string | null>(null);

  const handleSyntaxClick = (part: 'selector' | 'property' | 'value') => {
    setSelectedSyntaxPart(part);
    if (part === syntaxQuizTarget) {
      setSyntaxQuizFeedback(`✓ TAHNIAH! Anda telah klik ${part.toUpperCase()} dengan tepat.`);
      markModuleComplete('cssBasics');
    } else {
      setSyntaxQuizFeedback(`✗ Belum tepat. Anda telah klik ${part.toUpperCase()}. Sila cari ${syntaxQuizTarget.toUpperCase()}.`);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* 3.1 Describe CSS Overview */}
      <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Palette className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-emerald-400">SUBTOPIK 3.1</span>
            <h2 className="text-xl lg:text-2xl font-black text-white">Apa itu CSS (Cascading Style Sheets)?</h2>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          <strong>CSS (Cascading Style Sheets)</strong> ialah bahasa penggayaan (styling language) yang digunakan untuk mereka bentuk dan mengawal persembahan visual, warna, fon, jarak serta susun atur elemen dalam dokumen HTML.
        </p>

        {/* Live Color / Slider Demo */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-2">
          {/* Controls */}
          <div className="md:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <Sliders className="w-4 h-4" />
              <span>Cuba Ubah Nilai CSS:</span>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">Pilih Warna (color):</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={headingColor}
                  onChange={(e) => {
                    setHeadingColor(e.target.value);
                    markModuleComplete('cssBasics');
                  }}
                  className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0"
                />
                <span className="font-mono text-xs text-slate-300">{headingColor}</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300 font-medium">Saiz Font (font-size):</span>
                <span className="font-mono text-emerald-400 font-bold">{headingSize}px</span>
              </div>
              <input
                type="range"
                min="18"
                max="48"
                value={headingSize}
                onChange={(e) => setHeadingSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 accent-emerald-500 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">Jajaran Teks (text-align):</label>
              <div className="grid grid-cols-3 gap-2">
                {(['left', 'center', 'right'] as const).map((align) => (
                  <button
                    key={align}
                    onClick={() => setHeadingAlign(align)}
                    className={`py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
                      headingAlign === align
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    {align}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Live Preview and Generated CSS */}
          <div className="md:col-span-7 space-y-4">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 min-h-[140px] flex items-center justify-center">
              <h1
                style={{
                  color: headingColor,
                  fontSize: `${headingSize}px`,
                  textAlign: headingAlign,
                  width: '100%',
                  fontWeight: 'bold',
                  transition: 'all 0.15s ease',
                }}
              >
                Hello STM Web Development!
              </h1>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 font-mono text-xs space-y-1">
              <div className="text-slate-500">// Generated CSS Rule:</div>
              <div className="text-indigo-400">h1 &#123;</div>
              <div className="pl-4 text-sky-300">color: <span className="text-amber-300 font-bold">{headingColor}</span>;</div>
              <div className="pl-4 text-sky-300">font-size: <span className="text-amber-300 font-bold">{headingSize}px</span>;</div>
              <div className="pl-4 text-sky-300">text-align: <span className="text-amber-300 font-bold">{headingAlign}</span>;</div>
              <div className="text-indigo-400">&#125;</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.0 BEFORE CSS vs AFTER CSS (Interactive Split Comparison Slider) */}
      <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ArrowLeftRight className="w-5 h-5 text-emerald-400" />
            <h3 className="text-lg font-black text-white">4.0 Before CSS vs After CSS (Drag to Compare)</h3>
          </div>
          <span className="text-xs font-mono text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
            Tarik Slider untuk Banding
          </span>
        </div>

        <p className="text-xs text-slate-300">
          Gerakkan slider ke kiri dan ke kanan untuk melihat perbezaan ketara antara laman web <strong>TANPA CSS</strong> (plain HTML) berbanding laman web <strong>DENGAN CSS</strong> (styled).
        </p>

        {/* Interactive Comparison Container */}
        <div className="relative h-80 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl select-none">
          {/* Right Side: WITH CSS (Background) */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-indigo-950 p-6 flex flex-col justify-between text-white font-sans">
            <div className="flex items-center justify-between border-b border-indigo-500/30 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <h4 className="font-extrabold text-base text-emerald-300">Kolej Komuniti Portal</h4>
              </div>
              <span className="bg-emerald-500/20 text-emerald-300 text-xs px-2.5 py-1 rounded-full font-bold border border-emerald-500/30">
                WITH CSS (Modern & Styled)
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 my-2">
              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700/80 shadow-md">
                <h5 className="font-bold text-sm text-sky-400">Kursus STM21673</h5>
                <p className="text-xs text-slate-300 mt-1">Cascading Style Sheet & JavaScript.</p>
                <div className="mt-3 inline-block px-3 py-1 bg-emerald-600 text-white rounded-lg text-xs font-bold">
                  Daftar Sekarang
                </div>
              </div>
              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700/80 shadow-md">
                <h5 className="font-bold text-sm text-amber-400">Kemahiran TVET</h5>
                <p className="text-xs text-slate-300 mt-1">Hands-on practical based learning.</p>
                <div className="mt-3 inline-block px-3 py-1 bg-indigo-600 text-white rounded-lg text-xs font-bold">
                  Lihat Modul
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 flex justify-between">
              <span>Status: Aktif</span>
              <span>Hakcipta Terpelihara Kolej Komuniti</span>
            </div>
          </div>

          {/* Left Side: WITHOUT CSS (Clipped by sliderPos) */}
          <div
            className="absolute inset-0 bg-white text-black p-6 flex flex-col justify-between font-serif overflow-hidden border-r-2 border-emerald-400"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="border-b border-black pb-2">
              <h4 className="font-bold text-xl underline">Kolej Komuniti Portal</h4>
              <p className="text-xs text-gray-700">WITHOUT CSS (Plain HTML Elements)</p>
            </div>

            <div className="space-y-2 my-2">
              <div>
                <h5 className="font-bold text-sm">Kursus STM21673</h5>
                <p className="text-xs">Cascading Style Sheet & JavaScript.</p>
                <button className="border border-black px-2 py-0.5 text-xs mt-1 bg-gray-200">Daftar Sekarang</button>
              </div>
              <div>
                <h5 className="font-bold text-sm">Kemahiran TVET</h5>
                <p className="text-xs">Hands-on practical based learning.</p>
                <button className="border border-black px-2 py-0.5 text-xs mt-1 bg-gray-200">Lihat Modul</button>
              </div>
            </div>

            <div className="text-[10px] text-gray-600">
              Plain Text • Default Times New Roman • No Colors
            </div>
          </div>

          {/* Draggable Divider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-emerald-400 cursor-ew-resize flex items-center justify-center"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center shadow-lg border-2 border-white">
              &#8596;
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>&larr; Tarik ke kiri (Lebih Banyak CSS)</span>
          <input
            type="range"
            min="5"
            max="95"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="w-48 sm:w-72 h-2 bg-slate-800 accent-emerald-500 rounded-lg appearance-none cursor-pointer"
          />
          <span>Tarik ke kanan (Lebih Banyak Plain HTML) &rarr;</span>
        </div>
      </section>

      {/* 5.0 CSS SYNTAX & INTERACTIVE ANATOMY */}
      <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-indigo-400">ANATOMI SINTAKS CSS</span>
            <h3 className="text-lg lg:text-xl font-black text-white">5.0 Struktur Asas Peraturan CSS (CSS Rule)</h3>
          </div>
        </div>

        <p className="text-xs text-slate-300">
          Setiap peraturan CSS terdiri daripada 3 bahagian utama: <strong>Selector</strong>, <strong>Property</strong>, dan <strong>Value</strong>.
        </p>

        {/* Interactive Clickable Diagram */}
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
          <div className="text-center text-xs font-bold text-slate-400 mb-4">
            Klik pada mana-mana bahagian kod di bawah untuk memeriksa peranannya:
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-lg sm:text-2xl font-mono py-4">
            {/* Selector */}
            <button
              onClick={() => handleSyntaxClick('selector')}
              className={`px-3 py-2 rounded-xl transition-all font-bold cursor-pointer ${
                selectedSyntaxPart === 'selector'
                  ? 'bg-emerald-500 text-slate-950 ring-4 ring-emerald-500/30'
                  : 'bg-slate-900 text-emerald-400 hover:bg-slate-800 border border-emerald-500/40'
              }`}
            >
              h1
            </button>

            <span className="text-slate-500">&#123;</span>

            {/* Property */}
            <button
              onClick={() => handleSyntaxClick('property')}
              className={`px-3 py-2 rounded-xl transition-all font-bold cursor-pointer ${
                selectedSyntaxPart === 'property'
                  ? 'bg-sky-500 text-slate-950 ring-4 ring-sky-500/30'
                  : 'bg-slate-900 text-sky-400 hover:bg-slate-800 border border-sky-500/40'
              }`}
            >
              color
            </button>

            <span className="text-slate-400">:</span>

            {/* Value */}
            <button
              onClick={() => handleSyntaxClick('value')}
              className={`px-3 py-2 rounded-xl transition-all font-bold cursor-pointer ${
                selectedSyntaxPart === 'value'
                  ? 'bg-amber-500 text-slate-950 ring-4 ring-amber-500/30'
                  : 'bg-slate-900 text-amber-400 hover:bg-slate-800 border border-amber-500/40'
              }`}
            >
              blue
            </button>

            <span className="text-slate-400">;</span>
            <span className="text-slate-500">&#125;</span>
          </div>

          {/* Visual Indicators */}
          <div className="grid grid-cols-3 gap-2 max-w-md mx-auto mt-3 text-center text-xs font-mono">
            <div className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
              <div className="font-bold">SELECTOR</div>
              <div className="text-[10px] text-slate-400">Elemen yang dipilih</div>
            </div>
            <div className="p-2 rounded-xl bg-sky-950/40 border border-sky-500/30 text-sky-300">
              <div className="font-bold">PROPERTY</div>
              <div className="text-[10px] text-slate-400">Ciri yang ingin diubah</div>
            </div>
            <div className="p-2 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-300">
              <div className="font-bold">VALUE</div>
              <div className="text-[10px] text-slate-400">Nilai / tetapan baru</div>
            </div>
          </div>
        </div>

        {/* Immediate Quiz Activity */}
        <div className="bg-slate-950/80 p-4 rounded-2xl border border-indigo-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span>🎯</span> Aktiviti Pantas:
            </h4>
            <div className="flex gap-2 text-[11px]">
              <button
                onClick={() => { setSyntaxQuizTarget('property'); setSyntaxQuizFeedback(null); }}
                className={`px-2 py-1 rounded-lg ${syntaxQuizTarget === 'property' ? 'bg-sky-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'}`}
              >
                Cari PROPERTY
              </button>
              <button
                onClick={() => { setSyntaxQuizTarget('selector'); setSyntaxQuizFeedback(null); }}
                className={`px-2 py-1 rounded-lg ${syntaxQuizTarget === 'selector' ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'}`}
              >
                Cari SELECTOR
              </button>
              <button
                onClick={() => { setSyntaxQuizTarget('value'); setSyntaxQuizFeedback(null); }}
                className={`px-2 py-1 rounded-lg ${syntaxQuizTarget === 'value' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'}`}
              >
                Cari VALUE
              </button>
            </div>
          </div>

          <p className="text-xs text-slate-300">
            Tugasan Semasa: Sila klik pada kotak kod di atas yang merupakan <strong>{syntaxQuizTarget.toUpperCase()}</strong>.
          </p>

          {syntaxQuizFeedback && (
            <div
              className={`p-3 rounded-xl text-xs font-bold flex items-center gap-2 ${
                syntaxQuizFeedback.startsWith('✓')
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
              }`}
            >
              {syntaxQuizFeedback.startsWith('✓') ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
              )}
              <span>{syntaxQuizFeedback}</span>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
