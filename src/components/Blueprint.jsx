import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Zap, 
  ArrowRight, 
  Settings, 
  Activity, 
  Maximize2,
  ChevronDown
} from 'lucide-react';

const Blueprint = ({ onBack }) => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      title: "01. Veri Ekosistemi",
      subtitle: "Ham Veriden Dijital Matrise",
      description: "Karar verme süreci, kaotik verilerin disipline edilmesiyle başlar. Vestra, 'Magic Link' teknolojisiyle Amazon, Tesla veya teknik dökümanlardaki parametreleri anında yakalar.",
      details: [
        { label: "Otonom Kazıma", value: "Saniyeler içinde yüzlerce teknik veriyi çeker." },
        { label: "Standardizasyon", value: "Farklı birimleri (Knot, $, km) ortak dile çevirir." }
      ],
      icon: (
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-80">
          <rect x="40" y="40" width="120" height="120" fill="none" stroke="#10b981" strokeWidth="2" rx="10" />
          <path d="M40 80 H160 M40 120 H160 M80 40 V160 M120 40 V160" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
          <circle cx="60" cy="60" r="4" fill="#10b981" />
          <circle cx="100" cy="100" r="4" fill="#6366f1" />
          <circle cx="140" cy="140" r="4" fill="#10b981" />
          <path d="M20 20 L50 50" stroke="#10b981" strokeWidth="2" strokeDasharray="4" />
          <circle cx="20" cy="20" r="3" fill="#10b981" />
        </svg>
      )
    },
    {
      title: "02. Ağırlık Katmanı",
      subtitle: "Zekanın Öncelik Sıralaması",
      description: "Her kriter eşit değildir. Shannon Entropy ile verideki belirsizliği, CRITIC ile kriterler arasındaki çatışmayı ölçerek matematiksel 'Ağırlık Merkezi'ni buluruz.",
      details: [
        { label: "Shannon Entropy", value: "Objektif belirsizlik ölçümü." },
        { label: "CRITIC", value: "Kriterler arası korelasyon dengesi." }
      ],
      icon: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="60" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="4" />
          <line x1="100" y1="40" x2="100" y2="160" stroke="#6366f1" strokeWidth="2" />
          <line x1="40" y1="100" x2="160" y2="100" stroke="#6366f1" strokeWidth="2" />
          <circle cx="100" cy="100" r="30" fill="#6366f1" fillOpacity="0.2" stroke="#6366f1" strokeWidth="2" />
          <path d="M70 70 L130 130" stroke="#10b981" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "03. Hibrit Motor",
      subtitle: "MCDM Algoritmalar Konsensüsü",
      description: "Vestra, tek bir sonuçla yetinmez. TOPSIS, VIKOR, EDAS ve WASPAS modellerini aynı anda çalıştırarak çapraz doğrulama yapar. Hata payı matematiksel olarak elenir.",
      details: [
        { label: "TOPSIS", value: "İdeal noktaya olan mesafeyi ölçer." },
        { label: "VIKOR", value: "Maksimum fayda, minimum pişmanlık." }
      ],
      icon: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M100 20 L160 60 V140 L100 180 L40 140 V60 Z" fill="none" stroke="#10b981" strokeWidth="2" />
          <path d="M100 20 V180 M40 60 L160 140 M40 140 L160 60" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
          <circle cx="100" cy="100" r="40" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="2" />
        </svg>
      )
    }
  ];

  return (
    <div className="blueprint-v7" style={{ background: '#020617', minHeight: '100vh', color: '#fff', fontFamily: "'Outfit', sans-serif" }}>
      {/* Header Navigation */}
      <nav style={{ padding: '30px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'sticky', top: 0, background: 'rgba(2,6,23,0.9)', backdropFilter: 'blur(20px)', zIndex: 1000 }}>
        <div className="flex items-center gap-4">
          <Zap size={28} fill="#10b981" color="#10b981" />
          <span className="font-black text-2xl tracking-tighter uppercase">The Blueprint</span>
        </div>
        <button onClick={onBack} className="flex items-center gap-2 text-secondary hover:text-white font-bold transition-all" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <ChevronLeft size={20} /> ANALİZ HUB'INA DÖN
        </button>
      </nav>

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 20px' }}>
        
        {/* Intro Section */}
        <section style={{ marginBottom: '150px' }}>
          <div style={{ display: 'inline-block', padding: '8px 20px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '100px', border: '1px solid rgba(16, 185, 129, 0.2)', marginBottom: '30px' }}>
            <span className="text-emerald text-xs font-black tracking-widest uppercase">Metodoloji ve Bilim</span>
          </div>
          <h1 style={{ fontSize: '5.5rem', fontWeight: 900, lineHeight: '0.9', letterSpacing: '-4px', marginBottom: '40px' }}>
            Karar Vermek Artık <br/> Bir <span className="shimmer-text">Refleks</span> Değil, <br/> Bir <span className="shimmer-text">Hesaptır.</span>
          </h1>
          <p style={{ fontSize: '1.4rem', color: '#94A3B8', maxWidth: '700px', lineHeight: '1.6' }}>
            Vestra Elite, Apple standartlarında bir duruşla, karmaşık verileri hibrit MCDM algoritmalarıyla işleyerek liderler için "Sıfır Hata" sinyali üretir.
          </p>
        </section>

        {/* Methodology Flow */}
        <div className="grid grid-cols-12 gap-20">
          <div className="col-span-4" style={{ position: 'sticky', top: '150px', height: 'fit-content' }}>
            <h3 className="text-secondary font-black text-sm uppercase tracking-widest mb-8">İşlem Basamakları</h3>
            <div className="flex flex-col gap-2">
              {stages.map((s, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveStage(i)}
                  className={`flex items-center gap-4 p-5 rounded-2xl transition-all text-left ${activeStage === i ? 'bg-white/5 border border-white/10 text-white' : 'text-secondary hover:text-white'}`}
                  style={{ background: activeStage === i ? 'rgba(255,255,255,0.05)' : 'transparent', border: '1px solid transparent', cursor: 'pointer' }}
                >
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full font-black text-xs ${activeStage === i ? 'bg-emerald text-black' : 'bg-white/5'}`}>{i+1}</span>
                  <span className="font-bold text-lg">{s.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="col-span-8">
            <div className="card-elite" style={{ padding: '60px', background: 'rgba(15, 23, 42, 0.3)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '40px' }}>
               <div style={{ width: '200px', height: '200px', marginBottom: '40px' }}>
                  {stages[activeStage].icon}
               </div>
               <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '15px' }}>{stages[activeStage].subtitle}</h2>
               <p style={{ fontSize: '1.2rem', color: '#94A3B8', lineHeight: '1.8', marginBottom: '40px' }}>
                  {stages[activeStage].description}
               </p>
               <div className="grid grid-cols-2 gap-8">
                  {stages[activeStage].details.map((d, i) => (
                    <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/5">
                      <p className="text-[10px] font-black text-emerald uppercase tracking-widest mb-2">{d.label}</p>
                      <p className="text-sm font-medium text-white">{d.value}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>

        {/* Final Statement */}
        <section style={{ marginTop: '200px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '100px' }}>
          <div className="badge-v6" style={{ margin: '0 auto 30px' }}>PROTOCOL STATUS: ACTIVE</div>
          <h2 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '30px' }}>Hazırsan, Başlayalım.</h2>
          <button onClick={onBack} className="btn-elite btn-elite-primary" style={{ margin: '0 auto', padding: '1.5rem 5rem' }}>
            ANALYST HUB'I BAŞLAT <ArrowRight size={24} />
          </button>
        </section>

      </div>

      <footer style={{ padding: '60px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', opacity: 0.5 }}>
        <p className="text-xs font-black uppercase tracking-[0.4em]">Vestra Elite Strategic Solutions © 2026</p>
      </footer>
    </div>
  );
};

export default Blueprint;
