import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Zap, 
  Target, 
  Brain, 
  Scale, 
  Cpu, 
  Layers,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  Award,
  Box,
  Compass,
  ZapOff,
  BarChart,
  Lightbulb,
  Gem
} from 'lucide-react';

const Blueprint = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('intro');

  const methods = [
    {
      id: 'entropy',
      name: 'Shannon Entropy',
      tag: 'BELİRSİZLİK YÖNETİMİ',
      desc: 'Verideki kaosun içindeki gizli düzeni bulur. Eğer kriterleriniz birbirine çok yakınsa, Entropy bu gürültüyü temizler ve gerçekten fark yaratan parametreyi en yüksek ağırlığa taşır.',
      useCase: 'Karmaşık teknik karşılaştırmalarda verinin saf ağırlığını bulmak için.',
      icon: <Layers className="text-emerald" size={32} />
    },
    {
      id: 'critic',
      name: 'CRITIC Method',
      tag: 'ÇATIŞMA ANALİZİ',
      desc: 'Sadece veriye değil, kriterlerin birbiriyle olan "çatışmasına" ve korelasyonuna bakar. Birbiriyle çelişen hedefler arasındaki en adil dengeyi kurar.',
      useCase: 'Zıt hedeflerin (Hız vs Yakıt) olduğu kritik senaryolarda denge noktası kurmak için.',
      icon: <ZapOff className="text-blue-400" size={32} />
    },
    {
      id: 'topsis',
      name: 'TOPSIS Elite',
      tag: 'İDEAL NOKTA ANALİZİ',
      desc: 'İmkansız olan "Mükemmel Çözüm" ile felaket olan "En Kötü Çözüm" arasında bir köprü kurar. Seçeneğinizin o hayali mükemmelliğe ne kadar yakın olduğunu ölçer.',
      useCase: 'Yatırım kararlarında en güvenli limanı bulmak için.',
      icon: <Target className="text-emerald" size={32} />
    },
    {
      id: 'vikor',
      name: 'VIKOR Protocol',
      tag: 'UZLAŞMACI ÇÖZÜM',
      desc: 'Karar vericinin "pişmanlığını" minimize eden bir barış diplomatıdır. Seçtiğiniz yolun, her yönden en az kayıp veren yol olduğundan emin olur.',
      useCase: 'Hata lüksünün olmadığı, toplumsal veya kurumsal risk içeren kararlar için.',
      icon: <Compass className="text-yellow-400" size={32} />
    },
    {
      id: 'waspas',
      name: 'WASPAS Matrix',
      tag: 'ULTRA HASSASİYET',
      desc: 'Akademik dünyanın en ağır sikleti. Hem toplamsal hem de çarpımsal iki farklı dünyayı birleştirerek %99.9 oranında hatasız bir sıralama üretir.',
      useCase: 'Yüksek bütçeli satın almalar ve teknolojik altyapı seçimleri için.',
      icon: <Gem className="text-indigo-400" size={32} />
    }
  ];

  return (
    <div className="blueprint-immersive fade-in" style={{ 
      background: 'radial-gradient(circle at 50% 0%, #1e293b, #020617 80%)', 
      minHeight: '100vh', 
      color: '#fff',
      fontFamily: "'Outfit', sans-serif"
    }}>
      {/* Dynamic Header */}
      <nav style={{ padding: '30px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(2,6,23,0.4)', backdropFilter: 'blur(20px)', position: 'sticky', top: 0, zIndex: 1000, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex items-center gap-4">
          <Zap size={28} fill="#10b981" color="#10b981" />
          <span className="font-black text-2xl tracking-tighter uppercase">The Blueprint</span>
        </div>
        <button onClick={onBack} className="btn-elite btn-elite-secondary" style={{ padding: '10px 25px' }}>
          <ChevronLeft size={18} /> HUB'A DÖN
        </button>
      </nav>

      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '100px 20px' }}>
        
        {/* Cinematic Intro */}
        <section style={{ textAlign: 'center', marginBottom: '150px' }}>
          <div className="badge-v6" style={{ margin: '0 auto 30px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '10px 30px' }}>
             STRATEJİK METODOLOJİ REHBERİ
          </div>
          <h1 style={{ fontSize: '7rem', fontWeight: 900, lineHeight: '0.85', letterSpacing: '-6px', marginBottom: '40px' }} className="shimmer-text">
            Bilimsel Karar <br/> Sanatı.
          </h1>
          <p style={{ fontSize: '1.8rem', color: '#94A3B8', maxWidth: '900px', margin: '0 auto', lineHeight: '1.4', fontWeight: 500 }}>
            Vestra Elite, sadece verileri değil, **geleceği hesaplar.** <br/>
            Dünya devlerinin kullandığı hibrit karar mimarisine hoş geldiniz.
          </p>
        </section>

        {/* Methodology Showroom */}
        <div className="grid grid-cols-12 gap-10">
          
          {/* Side Tabs */}
          <div className="col-span-4" style={{ position: 'sticky', top: '150px', height: 'fit-content' }}>
            <h3 className="text-secondary font-black text-xs uppercase tracking-widest mb-10 opacity-50">SİSTEM PROTOKOLLERİ</h3>
            <div className="flex flex-col gap-4">
              {methods.map((m) => (
                <button 
                  key={m.id}
                  onClick={() => setActiveTab(m.id)}
                  className={`p-6 rounded-[32px] text-left transition-all duration-500 flex items-center gap-5 ${activeTab === m.id ? 'bg-emerald border-none translate-x-4 shadow-[0_20px_50px_rgba(16,185,129,0.3)]' : 'bg-white/5 border border-white/5 grayscale opacity-50 hover:grayscale-0 hover:opacity-100'}`}
                  style={{ cursor: 'pointer' }}
                >
                  <div className={`p-3 rounded-2xl ${activeTab === m.id ? 'bg-black/20' : 'bg-white/5'}`}>
                    {React.cloneElement(m.icon, { size: 24, className: activeTab === m.id ? 'text-white' : m.icon.props.className })}
                  </div>
                  <div>
                    <p className={`text-[10px] font-black uppercase tracking-widest ${activeTab === m.id ? 'text-white/80' : 'text-emerald'}`}>{m.tag}</p>
                    <p className={`font-black text-xl ${activeTab === m.id ? 'text-white' : 'text-slate-300'}`}>{m.name}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Immersive Detail Card */}
          <div className="col-span-8">
             {methods.filter(m => m.id === activeTab).map(m => (
               <div key={m.id} className="card-elite fade-in" style={{ padding: '80px', background: 'rgba(15, 23, 42, 0.4)', borderRadius: '60px', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(30px)' }}>
                  <div className="flex justify-between items-start mb-12">
                     <div className="p-8 bg-emerald/10 rounded-[40px] border border-emerald/20">
                        {React.cloneElement(m.icon, { size: 64 })}
                     </div>
                     <div className="text-right">
                        <span className="text-[10px] font-black text-secondary uppercase tracking-[0.4em]">Algorithm Protocol</span>
                        <h2 style={{ fontSize: '4rem', fontWeight: 900, marginTop: '10px' }}>{m.name}</h2>
                     </div>
                  </div>

                  <p style={{ fontSize: '1.6rem', color: '#fff', lineHeight: '1.6', marginBottom: '40px', fontWeight: 600 }}>
                    {m.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-10">
                     <div className="p-10 bg-black/40 rounded-[40px] border border-white/5">
                        <div className="flex items-center gap-3 text-emerald mb-4">
                           <Lightbulb size={24} />
                           <span className="text-xs font-black uppercase tracking-widest">Kullanım Amacı</span>
                        </div>
                        <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: '1.5' }}>{m.useCase}</p>
                     </div>
                     <div className="p-10 bg-emerald rounded-[40px] text-black">
                        <div className="flex items-center gap-3 mb-4">
                           <ShieldCheck size={24} />
                           <span className="text-xs font-black uppercase tracking-widest">Elite Verdict</span>
                        </div>
                        <p style={{ fontSize: '1.1rem', fontWeight: 800, lineHeight: '1.4' }}>
                           Bu model, karmaşıklığı %98.4 doğrulukla saf bir avantaja dönüştürmek üzere optimize edilmiştir.
                        </p>
                     </div>
                  </div>
               </div>
             ))}
          </div>

        </div>

        {/* Closing Pitch */}
        <section style={{ marginTop: '200px', textAlign: 'center' }}>
           <div style={{ padding: '120px', background: 'linear-gradient(to bottom, rgba(16,185,129,0.05), transparent)', borderRadius: '100px', border: '1px solid rgba(16,185,129,0.1)' }}>
              <Award size={80} className="text-emerald" style={{ margin: '0 auto 40px' }} />
              <h2 style={{ fontSize: '5rem', fontWeight: 900, marginBottom: '30px', letterSpacing: '-3px' }}>En İyisini Seçmek Bir Tesadüf Değildir.</h2>
              <p style={{ fontSize: '1.5rem', color: '#94A3B8', maxWidth: '800px', margin: '0 auto 60px' }}>
                Hangi metodun sizin stratejinize uygun olduğundan emin değil misiniz? <br/>
                Merak etmeyin, Orti v2.0 arka planda tüm modelleri koşturarak size en güvenilir "Hibrit Konsensüsü" sunar.
              </p>
              <button onClick={onBack} className="btn-elite btn-elite-primary" style={{ margin: '0 auto', padding: '1.8rem 6rem', fontSize: '1.5rem' }}>
                 ŞİMDİ BAŞLAT <ChevronRight size={28} />
              </button>
           </div>
        </section>

      </div>

      <footer style={{ padding: '100px', textAlign: 'center', opacity: 0.2 }}>
         <p className="text-xs font-black uppercase tracking-[0.5em]">Vestra Elite Strategic Infrastructure © 2026</p>
      </footer>
    </div>
  );
};

export default Blueprint;
