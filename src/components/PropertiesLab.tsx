import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { Sliders, Type, Image, LayoutGrid, List, Square, Move } from 'lucide-react';

export const PropertiesLab: React.FC = () => {
  const { markModuleComplete } = useProgress();
  const [activeTab, setActiveTab] = useState<
    'type' | 'background' | 'block' | 'list' | 'border' | 'position'
  >('type');

  // Type properties state
  const [fontSize, setFontSize] = useState(24);
  const [textAlign, setTextAlign] = useState<'left' | 'center' | 'right' | 'justify'>('center');
  const [fontWeight, setFontWeight] = useState<'normal' | 'bold'>('bold');
  const [textDecoration, setTextDecoration] = useState<'none' | 'underline' | 'line-through'>('none');
  const [textColor, setTextColor] = useState('#38bdf8');

  // Background properties state
  const [bgColor, setBgColor] = useState('#0f172a');
  const [bgGradient, setBgGradient] = useState(false);

  // Block properties state
  const [blockDisplay, setBlockDisplay] = useState<'block' | 'inline' | 'inline-block'>('block');
  const [blockWidth, setBlockWidth] = useState(80);
  const [lineHeight, setLineHeight] = useState(1.5);

  // List properties state
  const [listStyle, setListStyle] = useState<'disc' | 'circle' | 'square' | 'decimal' | 'none'>('disc');

  // Border properties state
  const [borderWidth, setBorderWidth] = useState(3);
  const [borderStyle, setBorderStyle] = useState<'solid' | 'dashed' | 'dotted' | 'double'>('solid');
  const [borderColor, setBorderColor] = useState('#10b981');
  const [borderRadius, setBorderRadius] = useState(16);

  // Positioning properties state
  const [positionType, setPositionType] = useState<'static' | 'relative' | 'absolute'>('relative');
  const [posX, setPosX] = useState(20);
  const [posY, setPosY] = useState(10);

  const handleControlChange = () => {
    markModuleComplete('properties');
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Overview Header */}
      <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
            <Sliders className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-sky-400">SUBTOPIK 3.4</span>
            <h2 className="text-xl lg:text-2xl font-black text-white">3.4 Describe Types of CSS Properties</h2>
          </div>
        </div>

        <p className="text-sm text-slate-300">
          Silibus STM21673 menggariskan <strong>7 kategori utama properties CSS</strong>. Pilih kategori di bawah untuk meneroka definisi, contoh dan demo interaktif secara langsung:
        </p>

        {/* 6 Category Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-2">
          {[
            { id: 'type', label: '3.4.1 Type', icon: Type },
            { id: 'background', label: '3.4.2 Background', icon: Image },
            { id: 'block', label: '3.4.3 Block', icon: LayoutGrid },
            { id: 'list', label: '3.4.5 List', icon: List },
            { id: 'border', label: '3.4.6 Border', icon: Square },
            { id: 'position', label: '3.4.7 Positioning', icon: Move },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  handleControlChange();
                }}
                className={`p-3 rounded-2xl border text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-sky-600 border-sky-400 text-white shadow-lg shadow-sky-950'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="truncate">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Interactive Sub-Playgrounds */}

      {/* 3.4.1 TYPE PROPERTIES */}
      {activeTab === 'type' && (
        <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono font-bold text-sky-400">3.4.1 TYPE PROPERTIES</span>
              <h3 className="text-lg font-black text-white">Typography & Text Styling</h3>
            </div>
            <span className="text-xs text-slate-400">Mengawal fon, saiz, jajaran & rupa teks</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Controls */}
            <div className="md:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3.5">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">font-size:</span>
                  <span className="font-mono text-sky-400 font-bold">{fontSize}px</span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="44"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 accent-sky-500 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">text-align:</label>
                <div className="grid grid-cols-3 gap-1.5 text-xs font-mono">
                  {(['left', 'center', 'right'] as const).map((align) => (
                    <button
                      key={align}
                      onClick={() => setTextAlign(align)}
                      className={`py-1.5 rounded-lg font-bold capitalize ${textAlign === align ? 'bg-sky-600 text-white' : 'bg-slate-900 text-slate-400'}`}
                    >
                      {align}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">font-weight:</label>
                <div className="grid grid-cols-2 gap-1.5 text-xs font-mono">
                  {(['normal', 'bold'] as const).map((w) => (
                    <button
                      key={w}
                      onClick={() => setFontWeight(w)}
                      className={`py-1.5 rounded-lg font-bold capitalize ${fontWeight === w ? 'bg-sky-600 text-white' : 'bg-slate-900 text-slate-400'}`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">text-decoration:</label>
                <div className="grid grid-cols-3 gap-1.5 text-xs font-mono">
                  {(['none', 'underline', 'line-through'] as const).map((d) => (
                    <button
                      key={d}
                      onClick={() => setTextDecoration(d)}
                      className={`py-1.5 rounded-lg font-bold capitalize ${textDecoration === d ? 'bg-sky-600 text-white' : 'bg-slate-900 text-slate-400'}`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">color:</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-8 h-8 rounded-md cursor-pointer bg-transparent border-0"
                  />
                  <span className="font-mono text-xs text-slate-300">{textColor}</span>
                </div>
              </div>
            </div>

            {/* Preview & Code */}
            <div className="md:col-span-7 space-y-4">
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 min-h-[160px] flex items-center justify-center">
                <p
                  style={{
                    fontSize: `${fontSize}px`,
                    textAlign,
                    fontWeight,
                    textDecoration,
                    color: textColor,
                    width: '100%',
                    transition: 'all 0.15s ease',
                  }}
                >
                  Selamat Datang ke STM
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 font-mono text-xs text-slate-300">
                <div className="text-slate-500">// Generated CSS:</div>
                <div className="text-sky-400">p &#123;</div>
                <div className="pl-4">font-size: <span className="text-amber-300">{fontSize}px</span>;</div>
                <div className="pl-4">text-align: <span className="text-amber-300">{textAlign}</span>;</div>
                <div className="pl-4">font-weight: <span className="text-amber-300">{fontWeight}</span>;</div>
                <div className="pl-4">text-decoration: <span className="text-amber-300">{textDecoration}</span>;</div>
                <div className="pl-4">color: <span className="text-amber-300">{textColor}</span>;</div>
                <div className="text-sky-400">&#125;</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3.4.2 BACKGROUND PROPERTIES */}
      {activeTab === 'background' && (
        <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono font-bold text-sky-400">3.4.2 BACKGROUND PROPERTIES</span>
              <h3 className="text-lg font-black text-white">Background Color & Gradients</h3>
            </div>
            <span className="text-xs text-slate-400">Mengawal warna latar belakang elemen</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
              <div>
                <label className="text-xs text-slate-300 block mb-1">background-color:</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0"
                  />
                  <span className="font-mono text-xs text-slate-300">{bgColor}</span>
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">Pilihan Warna Pantas:</label>
                <div className="flex flex-wrap gap-2">
                  {['#0f172a', '#064e3b', '#1e1b4b', '#7c2d12', '#3b0764', '#172554'].map((color) => (
                    <button
                      key={color}
                      onClick={() => setBgColor(color)}
                      className="w-8 h-8 rounded-lg border border-slate-700 cursor-pointer"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={bgGradient}
                    onChange={(e) => setBgGradient(e.target.checked)}
                    className="accent-emerald-500 rounded"
                  />
                  <span>Gunakan Linear Gradient</span>
                </label>
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <div
                className="p-8 rounded-2xl border border-slate-700 min-h-[160px] flex flex-col items-center justify-center text-center transition-all"
                style={{
                  background: bgGradient
                    ? `linear-gradient(135deg, ${bgColor}, #3b82f6)`
                    : bgColor,
                }}
              >
                <h4 className="text-lg font-bold text-white">Kad Preview Background</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Warna latar belakang berubah secara langsung mengikut kod CSS.
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 font-mono text-xs text-slate-300">
                <div className="text-slate-500">// Generated CSS:</div>
                <div className="text-indigo-400">.card &#123;</div>
                <div className="pl-4">
                  background-color: <span className="text-amber-300 font-bold">{bgColor}</span>;
                </div>
                {bgGradient && (
                  <div className="pl-4">
                    background: <span className="text-amber-300">linear-gradient(135deg, {bgColor}, #3b82f6)</span>;
                  </div>
                )}
                <div className="text-indigo-400">&#125;</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3.4.3 BLOCK PROPERTIES */}
      {activeTab === 'block' && (
        <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono font-bold text-sky-400">3.4.3 BLOCK PROPERTIES</span>
              <h3 className="text-lg font-black text-white">Display, Width & Line Height</h3>
            </div>
            <span className="text-xs text-slate-400">Mengawal jenis paparan elemen blok</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
              <div>
                <label className="text-xs text-slate-300 block mb-1">display property:</label>
                <div className="grid grid-cols-3 gap-1.5 text-xs font-mono">
                  {(['block', 'inline', 'inline-block'] as const).map((d) => (
                    <button
                      key={d}
                      onClick={() => setBlockDisplay(d)}
                      className={`py-1.5 rounded-lg font-bold ${blockDisplay === d ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-slate-400'}`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">width (Lebar):</span>
                  <span className="font-mono text-emerald-400 font-bold">{blockWidth}%</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="100"
                  value={blockWidth}
                  onChange={(e) => setBlockWidth(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 accent-emerald-500 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">line-height:</span>
                  <span className="font-mono text-emerald-400 font-bold">{lineHeight}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="2.5"
                  step="0.1"
                  value={lineHeight}
                  onChange={(e) => setLineHeight(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 accent-emerald-500 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 min-h-[160px]">
                <div
                  style={{
                    display: blockDisplay,
                    width: blockDisplay === 'inline' ? 'auto' : `${blockWidth}%`,
                    lineHeight,
                    backgroundColor: '#1e293b',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid #334155',
                    color: '#f8fafc',
                    fontSize: '13px',
                  }}
                >
                  Teks Elemen Blok ({blockDisplay}) dengan line-height {lineHeight}. Elemen blok mengambil ruang penuh baris manakala inline hanya mengambil ruang teks.
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 font-mono text-xs text-slate-300">
                <div className="text-slate-500">// Generated CSS:</div>
                <div className="text-indigo-400">div &#123;</div>
                <div className="pl-4">display: <span className="text-amber-300">{blockDisplay}</span>;</div>
                <div className="pl-4">width: <span className="text-amber-300">{blockWidth}%</span>;</div>
                <div className="pl-4">line-height: <span className="text-amber-300">{lineHeight}</span>;</div>
                <div className="text-indigo-400">&#125;</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3.4.5 LIST PROPERTIES */}
      {activeTab === 'list' && (
        <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono font-bold text-sky-400">3.4.5 LIST PROPERTIES</span>
              <h3 className="text-lg font-black text-white">list-style-type</h3>
            </div>
            <span className="text-xs text-slate-400">Mengawal simbol penanda senarai &lt;ul&gt; dan &lt;ol&gt;</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
              <label className="text-xs text-slate-300 block mb-1">list-style-type:</label>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {(['disc', 'circle', 'square', 'decimal', 'none'] as const).map((style) => (
                  <button
                    key={style}
                    onClick={() => setListStyle(style)}
                    className={`py-2 px-3 rounded-xl font-bold ${listStyle === style ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-slate-400'}`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 min-h-[160px] flex items-center">
                <ul
                  style={{
                    listStyleType: listStyle,
                    paddingLeft: listStyle === 'none' ? '0px' : '24px',
                    color: '#e2e8f0',
                    fontSize: '14px',
                    lineHeight: '1.8',
                  }}
                >
                  <li>Topik 1: Pengenalan HTML5</li>
                  <li>Topik 2: Format & Struktur Web</li>
                  <li>Topik 3: Cascading Style Sheets (CSS)</li>
                  <li>Topik 4: JavaScript & Interaktiviti</li>
                </ul>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 font-mono text-xs text-slate-300">
                <div className="text-slate-500">// Generated CSS:</div>
                <div className="text-indigo-400">ul &#123;</div>
                <div className="pl-4">list-style-type: <span className="text-amber-300 font-bold">{listStyle}</span>;</div>
                <div className="text-indigo-400">&#125;</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3.4.6 BORDER PROPERTIES */}
      {activeTab === 'border' && (
        <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono font-bold text-sky-400">3.4.6 BORDER PROPERTIES</span>
              <h3 className="text-lg font-black text-white">Border Width, Style & Radius</h3>
            </div>
            <span className="text-xs text-slate-400">Mengawal garisan sempadan & lengkung bucu</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3.5">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">border-width:</span>
                  <span className="font-mono text-emerald-400 font-bold">{borderWidth}px</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={borderWidth}
                  onChange={(e) => setBorderWidth(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 accent-emerald-500 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">border-style:</label>
                <div className="grid grid-cols-2 gap-1.5 text-xs font-mono">
                  {(['solid', 'dashed', 'dotted', 'double'] as const).map((style) => (
                    <button
                      key={style}
                      onClick={() => setBorderStyle(style)}
                      className={`py-1.5 rounded-lg font-bold ${borderStyle === style ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-slate-400'}`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">border-radius:</span>
                  <span className="font-mono text-emerald-400 font-bold">{borderRadius}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="40"
                  value={borderRadius}
                  onChange={(e) => setBorderRadius(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 accent-emerald-500 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">border-color:</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={borderColor}
                    onChange={(e) => setBorderColor(e.target.value)}
                    className="w-8 h-8 rounded-md cursor-pointer bg-transparent border-0"
                  />
                  <span className="font-mono text-xs text-slate-300">{borderColor}</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 min-h-[160px] flex items-center justify-center">
                <div
                  className="p-6 bg-slate-900 text-center transition-all"
                  style={{
                    borderWidth: `${borderWidth}px`,
                    borderStyle,
                    borderColor,
                    borderRadius: `${borderRadius}px`,
                  }}
                >
                  <h4 className="font-bold text-white text-sm">Kotak Border Interaktif</h4>
                  <p className="text-xs text-slate-400 mt-1">Perhatikan ketebalan dan kelengkungan bucu</p>
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 font-mono text-xs text-slate-300">
                <div className="text-slate-500">// Generated CSS:</div>
                <div className="text-indigo-400">.kotak &#123;</div>
                <div className="pl-4">border-width: <span className="text-amber-300">{borderWidth}px</span>;</div>
                <div className="pl-4">border-style: <span className="text-amber-300">{borderStyle}</span>;</div>
                <div className="pl-4">border-color: <span className="text-amber-300">{borderColor}</span>;</div>
                <div className="pl-4">border-radius: <span className="text-amber-300">{borderRadius}px</span>;</div>
                <div className="text-indigo-400">&#125;</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3.4.7 POSITIONING PROPERTIES */}
      {activeTab === 'position' && (
        <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono font-bold text-sky-400">3.4.7 POSITIONING PROPERTIES</span>
              <h3 className="text-lg font-black text-white">position (static, relative, absolute)</h3>
            </div>
            <span className="text-xs text-slate-400">Mengawal koordinat kedudukan elemen</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
              <div>
                <label className="text-xs text-slate-300 block mb-1">position type:</label>
                <div className="grid grid-cols-3 gap-1.5 text-xs font-mono">
                  {(['static', 'relative', 'absolute'] as const).map((pos) => (
                    <button
                      key={pos}
                      onClick={() => setPositionType(pos)}
                      className={`py-1.5 rounded-lg font-bold capitalize ${positionType === pos ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400'}`}
                    >
                      {pos}
                    </button>
                  ))}
                </div>
              </div>

              {positionType !== 'static' && (
                <>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">left (Koordinat X):</span>
                      <span className="font-mono text-indigo-400 font-bold">{posX}px</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="120"
                      value={posX}
                      onChange={(e) => setPosX(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 accent-indigo-500 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">top (Koordinat Y):</span>
                      <span className="font-mono text-indigo-400 font-bold">{posY}px</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="60"
                      value={posY}
                      onChange={(e) => setPosY(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 accent-indigo-500 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </>
              )}
            </div>

            <div className="md:col-span-7 space-y-4">
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 min-h-[180px] relative overflow-hidden">
                <div className="text-[10px] text-slate-500 mb-2 font-mono">Container (position: relative)</div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs text-slate-400 mb-2">
                  Elemen Rujukan Biasa
                </div>

                <div
                  className="p-3 bg-indigo-600 text-white rounded-lg font-mono text-xs font-bold shadow-lg transition-all"
                  style={{
                    position: positionType,
                    top: positionType !== 'static' ? `${posY}px` : undefined,
                    left: positionType !== 'static' ? `${posX}px` : undefined,
                  }}
                >
                  📍 Kotak ({positionType})
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 font-mono text-xs text-slate-300">
                <div className="text-slate-500">// Generated CSS:</div>
                <div className="text-indigo-400">.elemen &#123;</div>
                <div className="pl-4">position: <span className="text-amber-300 font-bold">{positionType}</span>;</div>
                {positionType !== 'static' && (
                  <>
                    <div className="pl-4">top: <span className="text-amber-300">{posY}px</span>;</div>
                    <div className="pl-4">left: <span className="text-amber-300">{posX}px</span>;</div>
                  </>
                )}
                <div className="text-indigo-400">&#125;</div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
