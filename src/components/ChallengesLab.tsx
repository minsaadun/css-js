import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { Award, Users, Rocket, CheckCircle2, Play, Sparkles, RefreshCw, Clock } from 'lucide-react';

export const ChallengesLab: React.FC = () => {
  const { markModuleComplete } = useProgress();

  const [activeTab, setActiveTab] = useState<'profile' | 'team' | 'final'>('profile');

  // 34.0 Mini Challenge State
  const [profileName, setProfileName] = useState('Ahmad Hakimi');
  const [profileRole, setProfileRole] = useState('Pelajar STM Semester 2');
  const [profileBg, setProfileBg] = useState('#1e293b');
  const [profileRadius, setProfileRadius] = useState(20);
  const [profileBorderColor, setProfileBorderColor] = useState('#38bdf8');
  const [profileAlertMsg, setProfileAlertMsg] = useState('Salam perkenalan! Saya pelajar Web Development Kolej Komuniti.');

  // 35.0 Station Timer
  const [stationTime, setStationTime] = useState<number>(300); // 5 mins
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [activeStation, setActiveStation] = useState<number>(1);

  // 36.0 Final Challenge steps state
  const [finalSteps, setFinalSteps] = useState({
    cssLinked: false,
    boxModelStyled: false,
    onclickAdded: false,
    validationActive: false,
  });

  const toggleFinalStep = (key: keyof typeof finalSteps) => {
    setFinalSteps((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      if (Object.values(next).every(Boolean)) {
        markModuleComplete('challenges');
      }
      return next;
    });
  };

  const handleRunProfileCardAlert = () => {
    alert(profileAlertMsg);
    markModuleComplete('challenges');
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Challenges Overview Header */}
      <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-amber-400">AMALI & CABARAN</span>
              <h2 className="text-xl lg:text-2xl font-black text-white">Cabaran Amali & Aktiviti Berkumpulan</h2>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 text-xs font-bold">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${activeTab === 'profile' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400'}`}
            >
              34.0 Profile Card
            </button>
            <button
              onClick={() => setActiveTab('team')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${activeTab === 'team' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400'}`}
            >
              35.0 Aktiviti Stesen
            </button>
            <button
              onClick={() => setActiveTab('final')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${activeTab === 'final' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400'}`}
            >
              36.0 Final Challenge
            </button>
          </div>
        </div>

        <p className="text-sm text-slate-300">
          Gabungkan semua pengetahuan CSS dan JavaScript untuk membina aplikasi sebenar, menyelesaikan tugasan stesen bersama rakan sekelas, dan menyempurnakan cabaran akhir.
        </p>
      </section>

      {/* 34.0 MINI CHALLENGE: BINA PROFILE CARD INTERAKTIF */}
      {activeTab === 'profile' && (
        <div className="space-y-6 animate-fadeIn">
          <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400">34.0 MINI CHALLENGE</span>
                <h3 className="text-lg font-black text-white">Bina Interactive Profile Card</h3>
              </div>
              <span className="text-xs text-slate-400">Gabungan CSS + JS onclick</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Card Controls (5 cols) */}
              <div className="lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3.5 text-xs">
                <h4 className="font-bold text-slate-300 uppercase tracking-wider">Tetapan Kad Profil:</h4>

                <div>
                  <label className="text-slate-400 block mb-1">Nama Profil:</label>
                  <input
                    type="text"
                    value={profileName}
                    onChange={(e) => setProfileName(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white focus:border-amber-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Peranan / Jawatan:</label>
                  <input
                    type="text"
                    value={profileRole}
                    onChange={(e) => setProfileRole(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white focus:border-amber-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Mesej alert() Bila Butang Ditekan:</label>
                  <input
                    type="text"
                    value={profileAlertMsg}
                    onChange={(e) => setProfileAlertMsg(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white focus:border-amber-500 focus:outline-hidden font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="text-slate-400 block mb-1">Warna Kad:</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={profileBg}
                        onChange={(e) => setProfileBg(e.target.value)}
                        className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
                      />
                      <span className="font-mono text-slate-400">{profileBg}</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1">Warna Border:</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={profileBorderColor}
                        onChange={(e) => setProfileBorderColor(e.target.value)}
                        className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
                      />
                      <span className="font-mono text-slate-400">{profileBorderColor}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-400">Border Radius:</span>
                    <span className="font-mono text-amber-400 font-bold">{profileRadius}px</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="36"
                    value={profileRadius}
                    onChange={(e) => setProfileRadius(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 accent-amber-500 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Live Render (7 cols) */}
              <div className="lg:col-span-7 bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center space-y-4">
                <div
                  className="w-full max-w-sm p-6 text-center space-y-4 shadow-2xl transition-all"
                  style={{
                    backgroundColor: profileBg,
                    borderRadius: `${profileRadius}px`,
                    border: `3px solid ${profileBorderColor}`,
                    boxShadow: `0 12px 30px rgba(0,0,0,0.6)`,
                  }}
                >
                  <div className="w-20 h-20 bg-gradient-to-tr from-sky-500 to-indigo-600 rounded-full mx-auto flex items-center justify-center text-2xl font-black text-white shadow-md">
                    {profileName.charAt(0)}
                  </div>

                  <div>
                    <h4 className="text-lg font-black text-white">{profileName}</h4>
                    <p className="text-xs text-sky-300 font-medium mt-0.5">{profileRole}</p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed bg-black/20 p-3 rounded-xl">
                    &ldquo;Kemahiran: HTML5 Structure, CSS Presentation, & JavaScript Interactivity.&rdquo;
                  </p>

                  <button
                    id="profile-alert-btn"
                    onClick={handleRunProfileCardAlert}
                    className="w-full py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all cursor-pointer"
                  >
                    Hubungi Saya (onclick)
                  </button>
                </div>

                <span className="text-[11px] text-slate-400">
                  Kad di atas menggabungkan <strong>CSS Box Model & Border</strong> dengan <strong>JavaScript onclick alert</strong>.
                </span>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* 35.0 CLASS TEAM ACTIVITY: STESEN PEMBELAJARAN */}
      {activeTab === 'team' && (
        <div className="space-y-6 animate-fadeIn">
          <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-400" />
                <div>
                  <span className="text-xs font-mono font-bold text-indigo-400">35.0 AKTIVITI KELAS BERKUMPULAN</span>
                  <h3 className="text-lg font-black text-white">Stesen Pembelajaran (Station Rotation)</h3>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-xs font-mono">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="text-slate-300">Cadangan Masa Stesen: 10 Minit</span>
              </div>
            </div>

            {/* Team Roles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-center space-y-1">
                <div className="text-base">👑</div>
                <div className="text-xs font-bold text-amber-400">1. Ketua Kumpulan</div>
                <div className="text-[10px] text-slate-400">Memastikan masa dan arahan dipatuhi</div>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-center space-y-1">
                <div className="text-base">💻</div>
                <div className="text-xs font-bold text-sky-400">2. Coder / Jurutera</div>
                <div className="text-[10px] text-slate-400">Menaip kod dalam editor makmal</div>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-center space-y-1">
                <div className="text-base">🔍</div>
                <div className="text-xs font-bold text-rose-400">3. Bug Tester</div>
                <div className="text-[10px] text-slate-400">Menguji ralat dan semakan visual</div>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-center space-y-1">
                <div className="text-base">🎤</div>
                <div className="text-xs font-bold text-emerald-400">4. Pembentang</div>
                <div className="text-[10px] text-slate-400">Menerangkan dapatan stesen</div>
              </div>
            </div>

            {/* 4 Station Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              {[
                { id: 1, name: 'Stesen 1: CSS Selectors' },
                { id: 2, name: 'Stesen 2: CSS Box Model' },
                { id: 3, name: 'Stesen 3: JS Event & Alert' },
                { id: 4, name: 'Stesen 4: Form Validation' },
              ].map((stn) => (
                <button
                  key={stn.id}
                  onClick={() => setActiveStation(stn.id)}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    activeStation === stn.id
                      ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {stn.name}
                </button>
              ))}
            </div>

            {/* Station Details Card */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3 text-xs leading-relaxed">
              {activeStation === 1 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-black text-indigo-400">Misi Stesen 1: Kuasai CSS Selectors</h4>
                  <p className="text-slate-300">
                    Bincang bersama kumpulan dan buat 3 peraturan CSS: satu untuk tag <code>&lt;p&gt;</code>, satu untuk <code>#tajuk</code>, dan satu untuk <code>.info</code>.
                  </p>
                  <div className="p-3 bg-slate-900 rounded-xl font-mono text-emerald-300">
                    p &#123; color: blue; &#125; <br />
                    #tajuk &#123; font-size: 28px; &#125; <br />
                    .info &#123; background-color: yellow; &#125;
                  </div>
                </div>
              )}

              {activeStation === 2 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-black text-indigo-400">Misi Stesen 2: Simulasi Box Model</h4>
                  <p className="text-slate-300">
                    Laraskan padding dan margin pada kotak. Lukiskan rajah konsentrik 4 lapisan (Margin, Border, Padding, Content) di atas kertas mini whiteboard kumpulan anda.
                  </p>
                </div>
              )}

              {activeStation === 3 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-black text-indigo-400">Misi Stesen 3: Cipta Butang Interaktif</h4>
                  <p className="text-slate-300">
                    Bina sebuah tag <code>&lt;button&gt;</code> dengan atribut <code>onclick=&quot;salam()&quot;</code> dan buat fungsi JavaScript yang memaparkan <code>alert(&quot;Selamat Maju Jaya STM!&quot;)</code>.
                  </p>
                </div>
              )}

              {activeStation === 4 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-black text-indigo-400">Misi Stesen 4: Sahkan Borang Pelajar</h4>
                  <p className="text-slate-300">
                    Bina logik semakan di mana jika kotak no pendaftaran kosong, sistem akan memaparkan mesej amaran dan menghentikan penghantaran form menggunakan <code>return false;</code>.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      )}

      {/* 36.0 FINAL CHALLENGE: TUKAR WEB STATIK MENJADI INTERAKTIF */}
      {activeTab === 'final' && (
        <div className="space-y-6 animate-fadeIn">
          <section className="bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400">36.0 CABARAN AKHIR</span>
                <h3 className="text-lg font-black text-white">Tukar Web Statik Menjadi Interaktif</h3>
              </div>
              <span className="text-xs text-slate-400">CLO1 Practical Integration</span>
            </div>

            <p className="text-xs text-slate-300">
              Laman pendaftaran di bawah bermula sebagai dokumen HTML statik yang tiada gaya atau interaktiviti. Aktifkan setiap lapisan di bawah untuk menjadikannya web aplikasi interaktif yang lengkap:
            </p>

            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => toggleFinalStep('cssLinked')}
                className={`p-4 rounded-2xl border text-left text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  finalSteps.cssLinked
                    ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                <div>
                  <div className="text-white">Langkah 1: Pautkan External CSS</div>
                  <div className="text-[10px] font-mono opacity-80">&lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;</div>
                </div>
                <CheckCircle2 className={`w-5 h-5 ${finalSteps.cssLinked ? 'text-emerald-400' : 'text-slate-700'}`} />
              </button>

              <button
                onClick={() => toggleFinalStep('boxModelStyled')}
                className={`p-4 rounded-2xl border text-left text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  finalSteps.boxModelStyled
                    ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                <div>
                  <div className="text-white">Langkah 2: Gayakan Box Model & Border</div>
                  <div className="text-[10px] font-mono opacity-80">padding: 24px; border-radius: 16px;</div>
                </div>
                <CheckCircle2 className={`w-5 h-5 ${finalSteps.boxModelStyled ? 'text-emerald-400' : 'text-slate-700'}`} />
              </button>

              <button
                onClick={() => toggleFinalStep('onclickAdded')}
                className={`p-4 rounded-2xl border text-left text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  finalSteps.onclickAdded
                    ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                <div>
                  <div className="text-white">Langkah 3: Tambah JavaScript onclick & alert</div>
                  <div className="text-[10px] font-mono opacity-80">&lt;button onclick=&quot;salam()&quot;&gt;</div>
                </div>
                <CheckCircle2 className={`w-5 h-5 ${finalSteps.onclickAdded ? 'text-emerald-400' : 'text-slate-700'}`} />
              </button>

              <button
                onClick={() => toggleFinalStep('validationActive')}
                className={`p-4 rounded-2xl border text-left text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  finalSteps.validationActive
                    ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                <div>
                  <div className="text-white">Langkah 4: Tambah Form onsubmit Validation</div>
                  <div className="text-[10px] font-mono opacity-80">onsubmit=&quot;return semak()&quot;</div>
                </div>
                <CheckCircle2 className={`w-5 h-5 ${finalSteps.validationActive ? 'text-emerald-400' : 'text-slate-700'}`} />
              </button>
            </div>

            {/* Interactive Final App Preview */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex justify-center">
              <div
                className="w-full max-w-md transition-all duration-300"
                style={{
                  backgroundColor: finalSteps.cssLinked ? '#0f172a' : '#ffffff',
                  color: finalSteps.cssLinked ? '#ffffff' : '#000000',
                  padding: finalSteps.boxModelStyled ? '24px' : '8px',
                  borderRadius: finalSteps.boxModelStyled ? '20px' : '0px',
                  border: finalSteps.boxModelStyled ? '2px solid #38bdf8' : '1px solid #94a3b8',
                  fontFamily: finalSteps.cssLinked ? "'Plus Jakarta Sans', sans-serif" : 'Times New Roman',
                  boxShadow: finalSteps.boxModelStyled ? '0 10px 25px rgba(0,0,0,0.5)' : 'none',
                }}
              >
                <h4
                  style={{
                    color: finalSteps.cssLinked ? '#38bdf8' : '#000000',
                    fontSize: finalSteps.cssLinked ? '18px' : '14px',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                  }}
                >
                  Pendaftaran Kursus Web STM21673
                </h4>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (finalSteps.validationActive) {
                      alert('✓ Form Validation Berjaya! Data pendaftaran sah.');
                    } else if (finalSteps.onclickAdded) {
                      alert('Form dihantar terus tanpa semakan.');
                    }
                  }}
                  className="space-y-3 text-xs"
                >
                  <div>
                    <label className="block mb-1" style={{ color: finalSteps.cssLinked ? '#cbd5e1' : '#000' }}>
                      Nama Pelajar:
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan nama..."
                      defaultValue="Ahmad Razif"
                      className="w-full p-2 border rounded"
                      style={{
                        backgroundColor: finalSteps.cssLinked ? '#1e293b' : '#fff',
                        borderColor: finalSteps.cssLinked ? '#475569' : '#000',
                        color: finalSteps.cssLinked ? '#fff' : '#000',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full font-bold cursor-pointer transition-all"
                    style={{
                      backgroundColor: finalSteps.cssLinked ? '#10b981' : '#e2e8f0',
                      color: finalSteps.cssLinked ? '#022c22' : '#000',
                      padding: finalSteps.boxModelStyled ? '10px' : '4px',
                      borderRadius: finalSteps.boxModelStyled ? '10px' : '2px',
                      border: finalSteps.cssLinked ? 'none' : '1px solid #000',
                    }}
                  >
                    Daftar Sekarang
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
