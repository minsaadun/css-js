import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { Layers, Sparkles, Zap, Check, Heart, ShoppingBag, Eye } from 'lucide-react';

export const ComparisonSandbox: React.FC = () => {
  const { markModuleComplete } = useProgress();
  const [includeHtml] = useState(true);
  const [includeCss, setIncludeCss] = useState(false);
  const [includeJs, setIncludeJs] = useState(false);

  // JavaScript interactive states
  const [likes, setLikes] = useState(12);
  const [hasLiked, setHasLiked] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [bannerAlert, setBannerAlert] = useState<string | null>(null);

  const handleLike = () => {
    if (!includeJs) {
      alert('JavaScript BELUM diaktifkan! Butang HTML semata-mata tidak dapat bertindak balas tanpa kod JavaScript.');
      return;
    }
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
      triggerBanner('❤️ Anda telah menekan Like! (JavaScript Event: onclick)');
    }
    markModuleComplete('cssBasics');
  };

  const handleAddToCart = () => {
    if (!includeJs) {
      alert('JavaScript BELUM diaktifkan! Butang tidak dapat menambah barang ke troli.');
      return;
    }
    setCartCount((prev) => prev + 1);
    triggerBanner('🛍️ 1x Item ditambah ke Troli! (JavaScript DOM Update)');
    markModuleComplete('cssBasics');
  };

  const triggerBanner = (msg: string) => {
    setBannerAlert(msg);
    setTimeout(() => {
      setBannerAlert(null);
    }, 3500);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Top Banner */}
      <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
                <Layers className="w-4 h-4" />
              </span>
              <h2 className="text-lg font-black text-white">2.0 HTML vs CSS vs JavaScript</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Aktifkan suis di bawah secara berperingkat untuk memahami bagaimana 3 teknologi ini bekerjasama.
            </p>
          </div>

          {/* 3 Step Toggles */}
          <div className="flex items-center gap-2 bg-slate-950 p-2 rounded-2xl border border-slate-800">
            <button
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-800 text-emerald-400 border border-slate-700 flex items-center gap-1.5 cursor-default"
            >
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>1. [HTML] Wajib</span>
            </button>

            <button
              onClick={() => {
                setIncludeCss(!includeCss);
                markModuleComplete('cssBasics');
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                includeCss
                  ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-950'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>2. {includeCss ? '✓ CSS Aktif' : '+ Tambah CSS'}</span>
            </button>

            <button
              onClick={() => {
                setIncludeJs(!includeJs);
                markModuleComplete('cssBasics');
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                includeJs
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-950'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>3. {includeJs ? '✓ JS Aktif' : '+ Tambah JavaScript'}</span>
            </button>
          </div>
        </div>

        {/* 3 Pillars Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6 pt-4 border-t border-slate-800">
          <div className={`p-3.5 rounded-2xl border transition-all ${includeHtml ? 'bg-slate-950/80 border-emerald-500/30' : 'bg-slate-950/30 border-slate-800 opacity-60'}`}>
            <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-xs">
              <span className="text-base">🦴</span> HTML (Structure)
            </div>
            <p className="text-[11px] font-bold text-slate-300 mt-1">&ldquo;What is on the page?&rdquo;</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Menyusun teks, gambar, butang dan struktur asas halaman.</p>
          </div>

          <div className={`p-3.5 rounded-2xl border transition-all ${includeCss ? 'bg-sky-950/30 border-sky-500/50 shadow-sm' : 'bg-slate-950/30 border-slate-800 opacity-60'}`}>
            <div className="flex items-center gap-2 text-sky-400 font-extrabold text-xs">
              <span className="text-base">🎨</span> CSS (Presentation)
            </div>
            <p className="text-[11px] font-bold text-slate-300 mt-1">&ldquo;How does it look?&rdquo;</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Mengawal warna, jarak padding, border, saiz font dan kecantikan visual.</p>
          </div>

          <div className={`p-3.5 rounded-2xl border transition-all ${includeJs ? 'bg-amber-950/30 border-amber-500/50 shadow-sm' : 'bg-slate-950/30 border-slate-800 opacity-60'}`}>
            <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs">
              <span className="text-base">⚡</span> JavaScript (Behavior)
            </div>
            <p className="text-[11px] font-bold text-slate-300 mt-1">&ldquo;What can it do?&rdquo;</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Menjadikan butang boleh bertindak, mengira data, popup mesej, dan interaktif.</p>
          </div>
        </div>
      </div>

      {/* Mini Website Preview Sandbox */}
      <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-emerald-400" />
            <h3 className="text-sm font-bold text-white">Live Mini Website Preview Sandbox</h3>
          </div>
          <span className="text-[11px] font-mono text-slate-400">
            Mod Aktif: HTML {includeCss ? '+ CSS' : '(Plain)'} {includeJs ? '+ JS (Interactive)' : '(No JS)'}
          </span>
        </div>

        {/* Live dynamic banner */}
        {bannerAlert && (
          <div className="p-3 bg-amber-500/20 border border-amber-500/50 text-amber-300 text-xs font-bold rounded-xl animate-fadeIn flex items-center justify-between">
            <span>{bannerAlert}</span>
            <span className="text-[10px] font-mono bg-amber-500/30 px-2 py-0.5 rounded text-amber-200">LIVE ACTION</span>
          </div>
        )}

        {/* The Mock Website Container */}
        <div className="border border-slate-700 rounded-2xl overflow-hidden shadow-2xl transition-all">
          {/* Browser Header Bar */}
          <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <div className="bg-slate-900 px-4 py-1 rounded-md text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
              <span>https://kolejkomuniti.edu.my/stm-lab</span>
            </div>
            <div className="text-[10px] font-mono text-slate-400">Preview</div>
          </div>

          {/* Website Canvas: Changes according to includeCss and includeJs */}
          <div
            className={
              includeCss
                ? 'bg-slate-950 p-6 text-slate-100 font-sans transition-all duration-500'
                : 'bg-white p-6 text-black font-serif transition-all duration-500'
            }
          >
            {/* Header / Nav */}
            <div
              className={
                includeCss
                  ? 'flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-slate-800'
                  : 'mb-4'
              }
            >
              <div>
                <h1
                  className={
                    includeCss
                      ? 'text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400'
                      : 'text-2xl font-bold underline'
                  }
                >
                  Kolej Komuniti Mart
                </h1>
                <p className={includeCss ? 'text-xs text-slate-400' : 'text-sm text-gray-700'}>
                  Program Sijil Teknologi Maklumat (STM)
                </p>
              </div>

              <div className={includeCss ? 'flex items-center gap-3 mt-2 sm:mt-0' : 'mt-2'}>
                <div
                  className={
                    includeCss
                      ? 'bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 text-xs text-emerald-400 font-mono flex items-center gap-1.5'
                      : 'text-sm'
                  }
                >
                  <ShoppingBag className="w-3.5 h-3.5 inline" />
                  <span>Troli: <strong>{cartCount} item</strong></span>
                </div>
              </div>
            </div>

            {/* Product Card */}
            <div
              className={
                includeCss
                  ? 'bg-slate-900 rounded-2xl p-5 border border-slate-800 shadow-lg max-w-md mx-auto space-y-4'
                  : 'border border-black p-3 max-w-md mx-auto space-y-2'
              }
            >
              <div
                className={
                  includeCss
                    ? 'h-32 bg-gradient-to-tr from-emerald-950 to-indigo-950 rounded-xl flex items-center justify-center text-4xl border border-slate-800'
                    : 'h-24 bg-gray-200 border border-gray-400 flex items-center justify-center text-2xl'
                }
              >
                💻
              </div>

              <div>
                <div className={includeCss ? 'flex items-center justify-between' : ''}>
                  <h3 className={includeCss ? 'font-bold text-base text-white' : 'font-bold text-base'}>
                    Buku Amali STM21673
                  </h3>
                  <span className={includeCss ? 'text-xs font-bold text-emerald-400 font-mono' : 'text-sm'}>
                    RM 25.00
                  </span>
                </div>
                <p className={includeCss ? 'text-xs text-slate-400 mt-1' : 'text-xs text-gray-800 mt-1'}>
                  Modul lengkap Cascading Style Sheet dan JavaScript praktikal Kolej Komuniti.
                </p>
              </div>

              {/* Interactive buttons */}
              <div className={includeCss ? 'flex items-center gap-2 pt-2' : 'pt-2 space-x-2'}>
                <button
                  id="demo-like-btn"
                  onClick={handleLike}
                  className={
                    includeCss
                      ? `flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                          hasLiked
                            ? 'bg-rose-500 text-white shadow-md shadow-rose-950'
                            : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                        }`
                      : 'border border-black px-2 py-1 text-xs cursor-pointer'
                  }
                >
                  <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-white' : ''}`} />
                  <span>Suka ({likes})</span>
                </button>

                <button
                  id="demo-cart-btn"
                  onClick={handleAddToCart}
                  className={
                    includeCss
                      ? 'flex-1 py-2 px-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-950 transition-all flex items-center justify-center gap-1.5 cursor-pointer'
                      : 'border border-black px-2 py-1 text-xs cursor-pointer'
                  }
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>+ Beli</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
