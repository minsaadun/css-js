import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { MousePointerClick, CheckCircle2, ArrowDown, Sparkles, RefreshCw, Award } from 'lucide-react';

export const EventsLab: React.FC = () => {
  const { markModuleComplete } = useProgress();

  const [activeTab, setActiveTab] = useState<'onclick' | 'onchange' | 'onsubmit' | 'matcher'>('onclick');

  // 24.0 Onclick state
  const [clickCount, setClickCount] = useState(0);
  const [clickMsg, setClickMsg] = useState<string | null>(null);

  // 25.0 Onchange state
  const [selectedColor, setSelectedColor] = useState('blue');
  const [changeLog, setChangeLog] = useState<string>('Pilih warna dari dropdown untuk mencetuskan onchange.');

  // 26.0 Onsubmit state
  const [submitName, setSubmitName] = useState('');
  const [submitFlowStep, setSubmitFlowStep] = useState<number>(0);
  const [submitResultMsg, setSubmitResultMsg] = useState<string | null>(null);

  // 27.0 Matcher Game state
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [matchScore, setMatchScore] = useState<number>(0);

  const actions = [
    { id: 'act-click', label: '1. Pengguna menekan (klik) pada button', correctEvent: 'onclick' },
    { id: 'act-change', label: '2. Pengguna menukar pilihan dalam dropdown <select>', correctEvent: 'onchange' },
    { id: 'act-submit', label: '3. Pengguna menekan butang Hantar dalam <form>', correctEvent: 'onsubmit' },
  ];

  const eventsList = [
    { id: 'onclick', name: 'onclick', desc: 'Dicetuskan oleh klik tetikus' },
    { id: 'onchange', name: 'onchange', desc: 'Dicetuskan oleh pertukaran nilai input' },
    { id: 'onsubmit', name: 'onsubmit', desc: 'Dicetuskan apabila form dihantar' },
  ];

  const handleActionSelect = (actId: string) => {
    setSelectedAction(actId);
  };

  const handleEventSelect = (eventId: string) => {
    if (!selectedAction) return;

    const actionObj = actions.find((a) => a.id === selectedAction);
    if (actionObj && actionObj.correctEvent === eventId) {
      setMatchedPairs((prev) => ({ ...prev, [selectedAction]: eventId }));
      setMatchScore((prev) => prev + 1);
      setSelectedAction(null);
      markModuleComplete('events');
    } else {
      alert('✗ Belum sepadan. Sila pilih event yang tepat untuk tindakan tersebut.');
      setSelectedAction(null);
    }
  };

  const handleResetMatcher = () => {
    setMatchedPairs({});
    setSelectedAction(null);
    setMatchScore(0);
  };

  const handleRunSubmitSimulation = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitFlowStep(1); // onsubmit triggered
    setSubmitResultMsg('Memeriksa input...');

    setTimeout(() => {
      setSubmitFlowStep(2); // validate check
      if (submitName.trim() === '') {
        setSubmitFlowStep(3); // Error stop
        setSubmitResultMsg('❌ Ralat: Nama kosong! submission dihentikan (return false)');
      } else {
        setSubmitFlowStep(4); // Success allow
        setSubmitResultMsg(`✓ Berjaya: Nama "${submitName}" sah! Form dihantar (return true)`);
      }
      markModuleComplete('events');
    }, 1000);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* 23.0 Event Overview */}
      <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <MousePointerClick className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-amber-400">SUBTOPIK 3.6.5</span>
              <h2 className="text-xl lg:text-2xl font-black text-white">3.6.5 JavaScript Events</h2>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 text-xs font-bold">
            <button
              onClick={() => setActiveTab('onclick')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${activeTab === 'onclick' ? 'bg-emerald-600 text-white' : 'text-slate-400'}`}
            >
              24.0 onclick Lab
            </button>
            <button
              onClick={() => setActiveTab('onchange')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${activeTab === 'onchange' ? 'bg-sky-600 text-white' : 'text-slate-400'}`}
            >
              25.0 onchange Lab
            </button>
            <button
              onClick={() => setActiveTab('onsubmit')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${activeTab === 'onsubmit' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
            >
              26.0 onsubmit Lab
            </button>
            <button
              onClick={() => setActiveTab('matcher')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${activeTab === 'matcher' ? 'bg-amber-500 text-slate-950' : 'text-slate-400'}`}
            >
              27.0 Matching Game
            </button>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          <strong>EVENT</strong> ialah sebarang aktiviti atau tindakan yang dilakukan oleh pengguna (contohnya menekan butang, menukar dropdown, menghantar borang) yang menyebabkan skrip JavaScript mula bertindak.
        </p>

        {/* Visual Event Pipeline */}
        <div className="grid grid-cols-4 gap-2 pt-2 text-center text-xs">
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
            <div className="font-bold text-slate-300">1. USER ACTION</div>
            <div className="text-[10px] text-slate-400">Pengguna klik/taip</div>
          </div>
          <div className="p-3 bg-amber-950/50 rounded-xl border border-amber-500/40 text-amber-300">
            <div className="font-bold">2. EVENT</div>
            <div className="text-[10px] text-amber-400">onclick / onchange</div>
          </div>
          <div className="p-3 bg-indigo-950/50 rounded-xl border border-indigo-500/40 text-indigo-300">
            <div className="font-bold">3. JAVASCRIPT</div>
            <div className="text-[10px] text-indigo-400">Jalankan fungsi</div>
          </div>
          <div className="p-3 bg-emerald-950/50 rounded-xl border border-emerald-500/40 text-emerald-300">
            <div className="font-bold">4. RESULT</div>
            <div className="text-[10px] text-emerald-400">Kemas kini skrin</div>
          </div>
        </div>
      </section>

      {/* 24.0 ONCLICK LAB */}
      {activeTab === 'onclick' && (
        <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400">24.0 ONCLICK EVENT</span>
              <h3 className="text-lg font-black text-white">Klik Butang & Jalankan Fungsi</h3>
            </div>
            <span className="text-xs text-slate-400">&lt;button onclick=&quot;...&quot;&gt;</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Interactive button */}
            <div className="md:col-span-6 bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center text-center space-y-4">
              <button
                id="onclick-test-btn"
                onClick={() => {
                  setClickCount((prev) => prev + 1);
                  setClickMsg(`✓ Anda telah klik button sebanyak ${clickCount + 1} kali!`);
                  markModuleComplete('events');
                }}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black text-sm shadow-lg shadow-emerald-950 transform active:scale-95 transition-all cursor-pointer"
              >
                Klik Saya (onclick)
              </button>

              {clickMsg && (
                <div className="p-3 bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-xs font-bold rounded-xl animate-fadeIn">
                  {clickMsg}
                </div>
              )}
            </div>

            {/* Code Breakdown */}
            <div className="md:col-span-6 bg-slate-950 p-5 rounded-2xl border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
              <div className="text-slate-500 text-[11px] mb-1">// Kod HTML & JavaScript:</div>
              <div className="text-white">&lt;button <span className="text-amber-400 font-bold">onclick=&quot;showMessage()&quot;</span>&gt;</div>
              <div className="pl-4 text-slate-400">Klik Saya</div>
              <div className="text-white">&lt;/button&gt;</div>

              <div className="pt-2 text-indigo-400">&lt;script&gt;</div>
              <div className="pl-4 text-sky-300">function showMessage() &#123;</div>
              <div className="pl-8 text-amber-200">alert(&quot;Anda telah klik button!&quot;);</div>
              <div className="pl-4 text-sky-300">&#125;</div>
              <div className="text-indigo-400">&lt;/script&gt;</div>
            </div>
          </div>
        </section>
      )}

      {/* 25.0 ONCHANGE LAB */}
      {activeTab === 'onchange' && (
        <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono font-bold text-sky-400">25.0 ONCHANGE EVENT</span>
              <h3 className="text-lg font-black text-white">Tukar Pilihan & Kemas Kini Skrin</h3>
            </div>
            <span className="text-xs text-slate-400">&lt;select onchange=&quot;...&quot;&gt;</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-6 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              <label className="text-xs font-bold text-slate-300 block">Pilih Warna Tema:</label>
              <select
                value={selectedColor}
                onChange={(e) => {
                  const val = e.target.value;
                  setSelectedColor(val);
                  setChangeLog(`✓ Event onchange dicetuskan! Nilai bertukar kepada: ${val}`);
                  markModuleComplete('events');
                }}
                className="w-full bg-slate-900 border border-slate-700 text-white p-3 rounded-xl text-xs font-bold focus:border-sky-500 focus:outline-hidden cursor-pointer"
              >
                <option value="blue">Blue (Biru)</option>
                <option value="emerald">Emerald (Hijau)</option>
                <option value="purple">Purple (Ungu)</option>
                <option value="amber">Amber (Kuning/Oren)</option>
                <option value="rose">Rose (Merah)</option>
              </select>

              {/* Dynamic Theme Preview Box */}
              <div
                className={`p-6 rounded-2xl text-center text-xs font-bold text-white shadow-lg transition-all duration-300 ${
                  selectedColor === 'blue'
                    ? 'bg-blue-600'
                    : selectedColor === 'emerald'
                    ? 'bg-emerald-600'
                    : selectedColor === 'purple'
                    ? 'bg-purple-600'
                    : selectedColor === 'amber'
                    ? 'bg-amber-600 text-slate-950'
                    : 'bg-rose-600'
                }`}
              >
                Tema Terpilih: {selectedColor.toUpperCase()}
              </div>

              <div className="text-xs text-slate-400 font-mono text-center">
                {changeLog}
              </div>
            </div>

            <div className="md:col-span-6 bg-slate-950 p-5 rounded-2xl border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
              <div className="text-slate-500 text-[11px] mb-1">// Kod HTML & JavaScript:</div>
              <div className="text-white">&lt;select <span className="text-amber-400 font-bold">onchange=&quot;tukarWarna(this.value)&quot;</span>&gt;</div>
              <div className="pl-4">&lt;option value=&quot;blue&quot;&gt;Blue&lt;/option&gt;</div>
              <div className="pl-4">&lt;option value=&quot;emerald&quot;&gt;Emerald&lt;/option&gt;</div>
              <div className="text-white">&lt;/select&gt;</div>

              <div className="pt-2 text-indigo-400">&lt;script&gt;</div>
              <div className="pl-4 text-sky-300">function tukarWarna(warna) &#123;</div>
              <div className="pl-8 text-slate-300">document.getElementById(&quot;box&quot;).style.backgroundColor = warna;</div>
              <div className="pl-4 text-sky-300">&#125;</div>
              <div className="text-indigo-400">&lt;/script&gt;</div>
            </div>
          </div>
        </section>
      )}

      {/* 26.0 ONSUBMIT LAB */}
      {activeTab === 'onsubmit' && (
        <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono font-bold text-indigo-400">26.0 ONSUBMIT EVENT</span>
              <h3 className="text-lg font-black text-white">Semak Borang Sebelum Dihantar</h3>
            </div>
            <span className="text-xs text-slate-400">&lt;form onsubmit=&quot;...&quot;&gt;</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-6 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              <form onSubmit={handleRunSubmitSimulation} className="space-y-3">
                <div>
                  <label className="text-xs text-slate-300 block mb-1 font-semibold">Nama Pelajar:</label>
                  <input
                    type="text"
                    value={submitName}
                    onChange={(e) => setSubmitName(e.target.value)}
                    placeholder="Cuba biarkan kosong atau isi nama..."
                    className="w-full bg-slate-900 border border-slate-700 text-white px-3 py-2 rounded-xl text-xs focus:border-indigo-500 focus:outline-hidden"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer"
                >
                  [SUBMIT FORM]
                </button>
              </form>

              {/* Animated Flow Steps */}
              <div className="space-y-2 pt-2 text-xs font-mono">
                <div className={`p-2 rounded-lg ${submitFlowStep >= 1 ? 'bg-indigo-950/80 text-indigo-300 border border-indigo-500/40' : 'text-slate-600'}`}>
                  1. onsubmit tercetus pada &lt;form&gt;
                </div>
                <div className={`p-2 rounded-lg ${submitFlowStep >= 2 ? 'bg-indigo-950/80 text-indigo-300 border border-indigo-500/40' : 'text-slate-600'}`}>
                  2. JavaScript memeriksa nilai input nama
                </div>
                {submitResultMsg && (
                  <div className={`p-2.5 rounded-lg font-bold ${submitFlowStep === 3 ? 'bg-rose-950 text-rose-300 border border-rose-500' : 'bg-emerald-950 text-emerald-300 border border-emerald-500'}`}>
                    {submitResultMsg}
                  </div>
                )}
              </div>
            </div>

            <div className="md:col-span-6 bg-slate-950 p-5 rounded-2xl border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
              <div className="text-slate-500 text-[11px] mb-1">// Kod HTML onsubmit:</div>
              <div className="text-white">&lt;form <span className="text-amber-400 font-bold">onsubmit=&quot;return validateForm()&quot;</span>&gt;</div>
              <div className="pl-4">&lt;input type=&quot;text&quot; id=&quot;nama&quot;&gt;</div>
              <div className="pl-4">&lt;button type=&quot;submit&quot;&gt;Hantar&lt;/button&gt;</div>
              <div className="text-white">&lt;/form&gt;</div>

              <div className="pt-2 text-indigo-400">&lt;script&gt;</div>
              <div className="pl-4 text-sky-300">function validateForm() &#123;</div>
              <div className="pl-8 text-slate-300">let n = document.getElementById(&quot;nama&quot;).value;</div>
              <div className="pl-8 text-rose-300">if (n == &quot;&quot;) &#123; alert(&quot;Isi nama!&quot;); return false; &#125;</div>
              <div className="pl-8 text-emerald-300">return true;</div>
              <div className="pl-4 text-sky-300">&#125;</div>
              <div className="text-indigo-400">&lt;/script&gt;</div>
            </div>
          </div>
        </section>
      )}

      {/* 27.0 EVENT MATCHING GAME */}
      {activeTab === 'matcher' && (
        <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono font-bold text-amber-400">27.0 EVENT MATCHING GAME</span>
              <h3 className="text-lg font-black text-white">Padankan Tindakan Pengguna dengan Event Yang Betul</h3>
            </div>
            <div className="bg-slate-950 px-3 py-1 rounded-xl text-xs font-mono font-bold text-emerald-400 border border-slate-800">
              Padanan: {matchScore} / {actions.length}
            </div>
          </div>

          <p className="text-xs text-slate-300">
            Langkah 1: Klik satu <strong>Tindakan Pengguna</strong> di sebelah kiri. <br />
            Langkah 2: Klik <strong>Event JavaScript</strong> yang sepadan di sebelah kanan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {/* Left: Actions */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Tindakan Pengguna:</h4>
              {actions.map((act) => {
                const isMatched = !!matchedPairs[act.id];
                const isSelected = selectedAction === act.id;
                return (
                  <button
                    key={act.id}
                    disabled={isMatched}
                    onClick={() => handleActionSelect(act.id)}
                    className={`w-full p-4 rounded-xl text-left text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                      isMatched
                        ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 opacity-80 cursor-default'
                        : isSelected
                        ? 'bg-indigo-600 text-white ring-4 ring-indigo-500/30'
                        : 'bg-slate-950 text-slate-200 hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    <span>{act.label}</span>
                    {isMatched && <span className="font-mono text-emerald-400 text-[11px]">&rarr; {matchedPairs[act.id]}</span>}
                  </button>
                );
              })}
            </div>

            {/* Right: Events */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Event JavaScript:</h4>
              {eventsList.map((evt) => {
                return (
                  <button
                    key={evt.id}
                    onClick={() => handleEventSelect(evt.id)}
                    className="w-full p-4 rounded-xl text-left font-mono text-xs font-bold bg-slate-950 text-amber-300 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 transition-all flex items-center justify-between cursor-pointer"
                  >
                    <div>
                      <div className="text-sm font-black text-amber-400">{evt.name}</div>
                      <div className="text-[10px] text-slate-400 font-sans">{evt.desc}</div>
                    </div>
                    <span className="text-slate-500 text-sm">&larr; Pilih</span>
                  </button>
                );
              })}
            </div>
          </div>

          {matchScore === actions.length && (
            <div className="p-4 bg-emerald-500/20 rounded-2xl border border-emerald-500/40 text-center space-y-2 animate-fadeIn">
              <div className="text-lg">🎉</div>
              <h4 className="font-bold text-white text-sm">Tahniah! Semua Event Telah Dipadankan Dengan Betul!</h4>
              <button
                onClick={handleResetMatcher}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold inline-flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Main Semula
              </button>
            </div>
          )}
        </section>
      )}
    </div>
  );
};
