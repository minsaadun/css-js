import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { ShieldCheck, CheckCircle2, XCircle, ArrowRight, Play, Wrench, AlertCircle } from 'lucide-react';

export const ValidationLab: React.FC = () => {
  const { markModuleComplete } = useProgress();

  const [activeTab, setActiveTab] = useState<'flowchart' | 'simulator' | 'fixit'>('flowchart');

  // Simulator state
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [validationErrors, setValidationErrors] = useState<{ name?: string; email?: string } | null>(null);
  const [validationSuccess, setValidationSuccess] = useState(false);
  const [traceStep, setTraceStep] = useState<number>(0);

  // Fix It Challenge state
  const [selectedFixOption, setSelectedFixOption] = useState<number | null>(null);
  const [fixFeedback, setFixFeedback] = useState<{ isCorrect: boolean; msg: string } | null>(null);

  const handleTestValidation = (e: React.FormEvent) => {
    e.preventDefault();
    setTraceStep(1); // 1. onsubmit triggered
    setValidationSuccess(false);

    setTimeout(() => {
      setTraceStep(2); // 2. Reading values
      const errors: { name?: string; email?: string } = {};

      if (!inputName.trim()) {
        errors.name = 'Nama tidak boleh dibiarkan kosong!';
      }
      if (!inputEmail.trim()) {
        errors.email = 'Email tidak boleh dibiarkan kosong!';
      } else if (!inputEmail.includes('@')) {
        errors.email = 'Format email mestilah mengandungi simbol @';
      }

      if (Object.keys(errors).length > 0) {
        setTraceStep(3); // 3. Stop submission
        setValidationErrors(errors);
        alert(`❌ Ralat Pengesahan Form:\n${Object.values(errors).join('\n')}`);
      } else {
        setTraceStep(4); // 4. Return true
        setValidationErrors({});
        setValidationSuccess(true);
        markModuleComplete('validation');
      }
    }, 600);
  };

  const handleFixItSelect = (optionIdx: number) => {
    setSelectedFixOption(optionIdx);
    if (optionIdx === 2) {
      setFixFeedback({
        isCorrect: true,
        msg: '✓ TEPAT! Kita mesti menggunakan operator perbandingan (=== atau ==) dan memastikan fungsi mengembalikan "return false;" untuk menghentikan form daripada dihantar.',
      });
      markModuleComplete('validation');
    } else {
      setFixFeedback({
        isCorrect: false,
        msg: '✗ Belum tepat. Perhatikan penggunaan operator assignment (=) berbanding operator perbandingan (==) dan nilai pulangan return.',
      });
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* 3.6.6 Overview Header */}
      <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400">SUBTOPIK 3.6.6</span>
              <h2 className="text-xl lg:text-2xl font-black text-white">3.6.6 Validation of Form</h2>
            </div>
          </div>

          <div className="flex gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 text-xs font-bold">
            <button
              onClick={() => setActiveTab('flowchart')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${activeTab === 'flowchart' ? 'bg-emerald-600 text-white' : 'text-slate-400'}`}
            >
              28.0 Flowchart
            </button>
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${activeTab === 'simulator' ? 'bg-emerald-600 text-white' : 'text-slate-400'}`}
            >
              29.0 Simulator
            </button>
            <button
              onClick={() => setActiveTab('fixit')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${activeTab === 'fixit' ? 'bg-amber-500 text-slate-950' : 'text-slate-400'}`}
            >
              30.0 Fix It Challenge
            </button>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          <strong>Form Validation</strong> ialah proses menyemak sama ada data yang diisi oleh pengguna dalam borang adalah lengkap dan sah sebelum dihantar ke pelayan (server).
        </p>
      </section>

      {/* 28.0 FLOWCHART VISUAL */}
      {activeTab === 'flowchart' && (
        <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black text-white">28.0 Carta Alir (Flowchart) Pengesahan Borang</h3>
            <span className="text-xs font-mono text-slate-400">Logik Pengesahan Client-Side</span>
          </div>

          {/* Interactive Flowchart Steps */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col items-center space-y-3 font-mono text-xs">
            {/* Step 1 */}
            <div className="p-3 bg-slate-900 border border-slate-700 rounded-xl text-center w-64 text-slate-200">
              [1] Pengguna Tekan Submit
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 rotate-90" />

            {/* Step 2 */}
            <div className="p-3 bg-indigo-950/80 border border-indigo-500/50 rounded-xl text-center w-64 text-indigo-300 font-bold">
              [2] JavaScript Baca Input Form
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 rotate-90" />

            {/* Step 3 (Decision diamond representation) */}
            <div className="p-4 bg-amber-950/80 border border-amber-500/60 rounded-2xl text-center w-72 text-amber-300 font-bold shadow-lg">
              [3] Adakah Input Kosong? (name == &quot;&quot;)
            </div>

            {/* Branching outputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl pt-2">
              {/* Branch YES */}
              <div className="p-4 bg-rose-950/60 border border-rose-500/50 rounded-xl text-rose-300 space-y-1 text-center">
                <div className="font-bold text-sm">YA (Ralat!)</div>
                <div className="text-[11px] text-slate-300">1. Papar alert(&quot;Sila isi nama&quot;)</div>
                <div className="text-[11px] font-bold text-rose-400">2. return false; (Henti Form)</div>
              </div>

              {/* Branch NO */}
              <div className="p-4 bg-emerald-950/60 border border-emerald-500/50 rounded-xl text-emerald-300 space-y-1 text-center">
                <div className="font-bold text-sm">TIDAK (Lengkap)</div>
                <div className="text-[11px] text-slate-300">1. Data disahkan selamat</div>
                <div className="text-[11px] font-bold text-emerald-400">2. return true; (Hantar Form)</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 29.0 VALIDATION SIMULATOR */}
      {activeTab === 'simulator' && (
        <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400">29.0 FORM VALIDATION SIMULATOR</span>
              <h3 className="text-lg font-black text-white">Uji Pengesahan Nama & Email</h3>
            </div>
            <span className="text-xs text-slate-400">Simulasi Interaktif</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Form to test (6 cols) */}
            <div className="lg:col-span-6 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              <form onSubmit={handleTestValidation} className="space-y-3">
                <div>
                  <label className="text-xs text-slate-300 font-bold block mb-1">
                    Nama Penuh (Wajib):
                  </label>
                  <input
                    type="text"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    placeholder="Contoh: Muhammad Ali"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-hidden"
                  />
                  {validationErrors?.name && (
                    <span className="text-[11px] text-rose-400 font-mono mt-1 block">
                      ⚠ {validationErrors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label className="text-xs text-slate-300 font-bold block mb-1">
                    Alamat Emel (Wajib & ada @):
                  </label>
                  <input
                    type="text"
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                    placeholder="Contoh: ali@kolejkomuniti.edu.my"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-hidden"
                  />
                  {validationErrors?.email && (
                    <span className="text-[11px] text-rose-400 font-mono mt-1 block">
                      ⚠ {validationErrors.email}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-emerald-950 cursor-pointer flex items-center justify-center gap-2 mt-2"
                >
                  <Play className="w-4 h-4 fill-slate-950" />
                  <span>[SEMAK & HANTAR BORANG]</span>
                </button>
              </form>

              {validationSuccess && (
                <div className="p-3 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-bold rounded-xl flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Tahniah! Semua data sah. Borang berjaya dihantar ke pelayan!</span>
                </div>
              )}
            </div>

            {/* Live JS Code & Execution Tracer (6 cols) */}
            <div className="lg:col-span-6 bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between font-mono text-xs space-y-3">
              <div className="space-y-1 text-slate-300">
                <div className="text-slate-500 text-[11px]">// Kod Fungsi JavaScript:</div>
                <div className="text-indigo-400">function validateForm() &#123;</div>
                <div className={`pl-4 py-0.5 rounded ${traceStep === 2 ? 'bg-amber-500/30 text-amber-300' : ''}`}>
                  let name = document.getElementById(&quot;nama&quot;).value;
                </div>
                <div className={`pl-4 py-0.5 rounded ${traceStep === 3 ? 'bg-rose-500/30 text-rose-300 font-bold' : ''}`}>
                  if (name === &quot;&quot;) &#123;
                </div>
                <div className="pl-8 text-rose-300">alert(&quot;Nama diperlukan!&quot;);</div>
                <div className="pl-8 text-rose-400 font-bold">return false; // Henti</div>
                <div className="pl-4">&#125;</div>
                <div className={`pl-4 py-0.5 rounded ${traceStep === 4 ? 'bg-emerald-500/30 text-emerald-300 font-bold' : ''}`}>
                  return true; // Sah & Hantar
                </div>
                <div className="text-indigo-400">&#125;</div>
              </div>

              <div className="p-3 bg-slate-900 rounded-xl text-[11px] text-slate-400 font-sans border border-slate-800">
                Status Aliran: {traceStep === 0 ? 'Menunggu input form...' : traceStep === 1 ? 'Menjalankan onsubmit...' : traceStep === 2 ? 'Membaca pemboleh ubah...' : traceStep === 3 ? '❌ Ralat dikesan: return false' : '✓ Sah: return true'}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 30.0 FORM VALIDATION FIX IT CHALLENGE */}
      {activeTab === 'fixit' && (
        <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono font-bold text-amber-400">30.0 FIX IT CHALLENGE</span>
              <h3 className="text-lg font-black text-white">Cari & Betulkan Ralat Pengesahan Form</h3>
            </div>
            <span className="text-xs text-slate-400">Uji Kemahiran Debugging</span>
          </div>

          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-start gap-2 text-xs text-rose-300 bg-rose-950/40 p-3 rounded-xl border border-rose-500/30 font-mono">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
              <span>
                <strong>Kod Ralat:</strong> Borang tetap dihantar walaupun kotak nama dibiarkan kosong, dan nilai tidak disemak dengan betul!
              </span>
            </div>

            <div className="bg-slate-900 p-4 rounded-xl font-mono text-xs text-slate-300 border border-slate-800">
              <div className="text-rose-400 font-bold">// Kod yang mempunyai 'bug':</div>
              <div className="text-indigo-400">function checkForm() &#123;</div>
              <div className="pl-4">let x = document.getElementById(&quot;name&quot;).value;</div>
              <div className="pl-4 text-rose-400 bg-rose-950/60 p-1 rounded">if (x = &quot;&quot;) &#123; alert(&quot;Isi nama&quot;); &#125;</div>
              <div className="text-indigo-400">&#125;</div>
            </div>

            <p className="text-xs font-bold text-slate-200">
              Pilihan kod pembaikan yang manakah paling tepat untuk membetulkan fungsi di atas?
            </p>

            <div className="space-y-2">
              {[
                {
                  id: 1,
                  code: 'if (x = "") { alert("Isi nama"); return true; }',
                  desc: 'A. Menggunakan return true pada if (x = "")',
                },
                {
                  id: 2,
                  code: 'if (x == "") { alert("Isi nama"); return false; } return true;',
                  desc: 'B. Menggunakan operator perbandingan (==), return false untuk henti, dan return true di akhir fungsi.',
                },
                {
                  id: 3,
                  code: 'if (x > 0) { alert("Isi nama"); return false; }',
                  desc: 'C. Menggunakan operator lebih besar (>)',
                },
              ].map((opt) => {
                const isSelected = selectedFixOption === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleFixItSelect(opt.id)}
                    className={`w-full p-4 rounded-xl text-left font-mono text-xs transition-all border cursor-pointer ${
                      isSelected
                        ? opt.id === 2
                          ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                          : 'bg-rose-950/80 border-rose-500 text-rose-300'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-indigo-500'
                    }`}
                  >
                    <div className="font-sans font-bold text-white mb-1">{opt.desc}</div>
                    <div className="text-amber-300 text-[11px]">{opt.code}</div>
                  </button>
                );
              })}
            </div>

            {fixFeedback && (
              <div
                className={`p-4 rounded-xl text-xs flex items-start gap-2 animate-fadeIn ${
                  fixFeedback.isCorrect
                    ? 'bg-emerald-950/80 border border-emerald-500/50 text-emerald-300'
                    : 'bg-rose-950/80 border border-rose-500/50 text-rose-300'
                }`}
              >
                {fixFeedback.isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
                )}
                <span>{fixFeedback.msg}</span>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};
