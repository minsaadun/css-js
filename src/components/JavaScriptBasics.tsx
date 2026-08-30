import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { Zap, MessageSquare, Play, Sparkles, CheckCircle2, Code2, AlertTriangle } from 'lucide-react';

export const JavaScriptBasics: React.FC = () => {
  const { markModuleComplete } = useProgress();

  const [alertMessage, setAlertMessage] = useState('Selamat Datang ke STM21673!');
  const [activeTab, setActiveTab] = useState<'intro' | 'embedding' | 'popup'>('intro');
  const [testButtonClickCount, setTestButtonClickCount] = useState(0);
  const [customPopupShown, setCustomPopupShown] = useState<string | null>(null);

  const handleRunAlert = () => {
    // Show real browser alert & track progress
    alert(alertMessage);
    markModuleComplete('javascript');
  };

  const handleRunCustomModal = () => {
    setCustomPopupShown(alertMessage);
    markModuleComplete('javascript');
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* 3.6.1 Overview Header */}
      <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-amber-400">SUBTOPIK 3.6</span>
              <h2 className="text-xl lg:text-2xl font-black text-white">3.6 Apply Basic JavaScript</h2>
            </div>
          </div>

          <div className="flex gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 text-xs font-bold">
            <button
              onClick={() => setActiveTab('intro')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${activeTab === 'intro' ? 'bg-amber-500 text-slate-950' : 'text-slate-400'}`}
            >
              3.6.1 Definisi JS
            </button>
            <button
              onClick={() => setActiveTab('embedding')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${activeTab === 'embedding' ? 'bg-amber-500 text-slate-950' : 'text-slate-400'}`}
            >
              3.6.2 Embedding JS
            </button>
            <button
              onClick={() => setActiveTab('popup')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${activeTab === 'popup' ? 'bg-amber-500 text-slate-950' : 'text-slate-400'}`}
            >
              3.6.3 Popup Boxes
            </button>
          </div>
        </div>

        <p className="text-sm text-slate-300">
          <strong>JavaScript</strong> ialah bahasa pengaturcaraan berasaskan teks yang digunakan untuk menjadikan laman web <strong>dinamik dan interaktif</strong> kepada tindakan pengguna.
        </p>
      </section>

      {/* 20.0 INTRO & ANALOGY */}
      {activeTab === 'intro' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Analogi & Button Demo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Without JS */}
            <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-bold font-mono text-rose-400">1. BUTTON TANPA JAVASCRIPT</span>
                <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded">Statik</span>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center space-y-3">
                <button
                  onClick={() => alert('Tiada JavaScript dipasang! Butang ini mati (tidak melakukan apa-apa dalam HTML biasa).')}
                  className="px-4 py-2 bg-slate-700 text-slate-300 rounded-xl text-xs font-bold cursor-pointer"
                >
                  [CLICK ME (TANPA JS)]
                </button>
                <p className="text-xs text-slate-400">
                  Hasil: Tiada sebarang tindakan atau respon interaktif.
                </p>
              </div>

              <div className="text-xs text-slate-300 leading-relaxed">
                HTML hanya menyediakan rupa butang. Tanpa JavaScript, butang tidak mampu memproses sebarang arahan logik.
              </div>
            </div>

            {/* With JS */}
            <div className="bg-slate-900 rounded-3xl p-6 border border-emerald-500/30 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-bold font-mono text-emerald-400">2. BUTTON DENGAN JAVASCRIPT</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">Interaktif</span>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center space-y-3">
                <button
                  onClick={() => {
                    setTestButtonClickCount((prev) => prev + 1);
                    markModuleComplete('javascript');
                  }}
                  className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 rounded-xl text-xs font-black shadow-lg shadow-emerald-950 cursor-pointer active:scale-95 transition-all"
                >
                  [CLICK ME (DENGAN JS)]
                </button>
                <p className="text-xs font-bold text-emerald-400 font-mono">
                  Tahniah! Anda telah klik sebanyak: {testButtonClickCount} kali.
                </p>
              </div>

              <div className="text-xs text-slate-300 leading-relaxed">
                JavaScript mengesan klik (event), memproses kiraan, dan mengemas kini paparan skrin secara dinamik!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 21.0 JAVASCRIPT EMBEDDING */}
      {activeTab === 'embedding' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-black text-white">3.6.2 Embedding JavaScript dalam Dokumen HTML</h3>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Kod JavaScript dimasukkan ke dalam dokumen HTML menggunakan tag <code className="text-amber-400">&lt;script&gt; ... &lt;/script&gt;</code>. Tag ini boleh diletakkan di bahagian <code className="text-sky-300">&lt;head&gt;</code> atau sebelum penutup tag <code className="text-sky-300">&lt;/body&gt;</code>.
            </p>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
              <div className="text-slate-500">&lt;!-- Struktur Asas HTML dengan JavaScript --&gt;</div>
              <div>&lt;!DOCTYPE html&gt;</div>
              <div>&lt;html&gt;</div>
              <div className="pl-4">&lt;head&gt;</div>
              <div className="pl-8">&lt;title&gt;Laman Web STM&lt;/title&gt;</div>
              <div className="pl-4">&lt;/head&gt;</div>
              <div className="pl-4">&lt;body&gt;</div>
              <div className="pl-8">&lt;h1&gt;Selamat Datang&lt;/h1&gt;</div>
              <div className="pl-8 bg-amber-950/60 p-3 rounded-xl border border-amber-500/50 text-amber-300 my-2">
                <span className="text-white font-bold">&lt;script&gt;</span><br />
                &nbsp;&nbsp;<span className="text-sky-300">alert</span>(<span className="text-amber-200">&quot;Hello STM! Web ini menggunakan JavaScript.&quot;</span>);<br />
                <span className="text-white font-bold">&lt;/script&gt;</span>
              </div>
              <div className="pl-4">&lt;/body&gt;</div>
              <div>&lt;/html&gt;</div>
            </div>
          </div>
        </div>
      )}

      {/* 22.0 POPUP BOXES & ALERT() SIMULATOR */}
      {activeTab === 'popup' && (
        <div className="space-y-6 animate-fadeIn">
          {/* 3 Popup Boxes Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900 p-5 rounded-2xl border border-amber-500/40 shadow-lg space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-amber-400 text-xs font-mono">1. alert()</span>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-bold">Fokus Silibus</span>
              </div>
              <p className="text-xs text-slate-300">
                Memaparkan kotak mesej amaran ringkas dengan satu butang <strong>[OK]</strong>.
              </p>
              <div className="bg-slate-950 p-2 rounded-lg font-mono text-[11px] text-amber-300">
                alert(&quot;Mesej anda&quot;);
              </div>
            </div>

            <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2 opacity-80">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sky-400 text-xs font-mono">2. confirm()</span>
                <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded">Tambahan</span>
              </div>
              <p className="text-xs text-slate-300">
                Memaparkan soalan pengesahan dengan butang <strong>[OK]</strong> dan <strong>[Cancel]</strong>.
              </p>
              <div className="bg-slate-950 p-2 rounded-lg font-mono text-[11px] text-sky-300">
                confirm(&quot;Adakah anda pasti?&quot;);
              </div>
            </div>

            <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2 opacity-80">
              <div className="flex items-center justify-between">
                <span className="font-bold text-indigo-400 text-xs font-mono">3. prompt()</span>
                <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded">Tambahan</span>
              </div>
              <p className="text-xs text-slate-300">
                Memaparkan kotak input teks meminta maklumat daripada pengguna.
              </p>
              <div className="bg-slate-950 p-2 rounded-lg font-mono text-[11px] text-indigo-300">
                prompt(&quot;Masukkan nama:&quot;);
              </div>
            </div>
          </div>

          {/* 22.0 Interactive ALERT() Simulator */}
          <div className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-black text-white">22.0 alert() Method Simulator</h3>
              </div>
              <span className="text-xs font-mono text-slate-400">Live Code Generator</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              {/* Message Input & Action */}
              <div className="md:col-span-6 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Tulis Teks Mesej Popup (Message):
                  </label>
                  <input
                    type="text"
                    value={alertMessage}
                    onChange={(e) => setAlertMessage(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:border-amber-500 focus:outline-hidden font-mono"
                    placeholder="Masukkan mesej..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <button
                    onClick={handleRunAlert}
                    className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-lg shadow-amber-950 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-slate-950" />
                    <span>[RUN BROWSER ALERT]</span>
                  </button>

                  <button
                    onClick={handleRunCustomModal}
                    className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 cursor-pointer"
                  >
                    Custom Modal
                  </button>
                </div>
              </div>

              {/* Generated Script Code */}
              <div className="md:col-span-6 bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between font-mono text-xs space-y-3">
                <div>
                  <div className="text-slate-500 text-[11px] mb-2">// Kod JavaScript yang Dihasilkan:</div>
                  <div className="text-white">&lt;script&gt;</div>
                  <div className="pl-4 text-sky-400">
                    alert(<span className="text-amber-300 font-bold">&quot;{alertMessage}&quot;</span>);
                  </div>
                  <div className="text-white">&lt;/script&gt;</div>
                </div>

                <div className="p-2.5 bg-slate-900 rounded-xl text-[11px] text-slate-400 font-sans border border-slate-800">
                  💡 <strong>Nota:</strong> Pastikan teks di dalam <code className="text-amber-300">alert(&quot;...&quot;)</code> sentiasa diapit tanda petik.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Popup Modal for preview */}
      {customPopupShown && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-slate-900 border-2 border-amber-500 rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl space-y-4 animate-scaleUp">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto text-2xl">
              💬
            </div>
            <h4 className="font-bold text-white text-sm font-mono">JavaScript alert() Dialog</h4>
            <p className="text-xs text-slate-200 bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono">
              &quot;{customPopupShown}&quot;
            </p>
            <button
              onClick={() => setCustomPopupShown(null)}
              className="w-full py-2 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs hover:bg-amber-400 transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
