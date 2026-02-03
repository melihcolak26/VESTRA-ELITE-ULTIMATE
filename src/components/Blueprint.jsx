import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Zap, 
  ArrowRight, 
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
  Gem,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const Blueprint = ({ onBack }) => {
  const [activeStage, setActiveStage] = useState(0);

  const sections = [
    {
      title: "STRATEJİK VİZYON",
      subtitle: "Karar Vermenin Yeni Anayasası",
      description: "Vestra Elite, geleneksel 'asistan' mantığını çöpe atarak yerine 'Strategic Partner' disiplinini koyar. Hibrit MCDM (Çok Kriterli Karar Verme) mimarimiz, insan önyargılarını matematiksel kesinlikle eler.",
      points: ["Hata Payı Sıfır: Çapraz doğrulama motoru.", "Executive-Grade: Apple standartlarında veri dili.", "Zeka Entegrasyonu: Kimi & Gemini hibrit çekirdek."],
      icon: (
        <svg viewBox="0 0 200 200" className="w-64 h-64 mx-auto mb-10 opacity-90">
          <circle cx="100" cy="100" r="80" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="4" />
          <path d="M100 20 V180 M20 100 H180" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.3" />
          <rect x="70" y="70" width="60" height="60" fill="none" stroke="#10b981" strokeWidth="3" rx="12" />
          <circle cx="100" cy="100" r="10" fill="#10b981">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite" />
          </circle>
          <path d="M40 40 L60 60 M140 140 L160 160 M160 40 L140 60 M40 160 L60 140" stroke="#10b981" strokeWidth="2" strokeOpacity="0.5" />
        </svg>
      )
    },
    {
      title: "AĞIRLIKLANDIRMA PROTOKOLLERİ",
      subtitle: "Kriterlere Hükmeden Zeka",
      description: "Karar verme sürecinin %70'i kriterlerin ne kadar önemli olduğunu belirlemektir. Vestra Elite, objektif ve subjektif iki farklı dünyayı birleştirir.",
      methods: [
        { name: "Shannon Entropy", type: "Objektif", desc: "Verideki belirsizliği ve kaos derecesini ölçer. Gürültüyü temizleyerek saf sinyali ağırlıklandırır." },
        { name: "CRITIC Method", type: "İlişkisel", desc: "Kriterler arasındaki çatışmayı analiz eder. Birbiriyle zıt özellikler arasındaki en adil ağırlık dengesini kurar." },
        { name: "AHP (Kimi AI Powered)", type: "Uzman Akıllı", desc: "İnsan aklını AI muhakemesiyle birleştirir. Kimi Engine, sektör analizlerini süzerek ideal kıyaslama matrisini sunar." }
      ],
      icon: (
        <svg viewBox="0 0 200 200" className="w-64 h-64 mx-auto mb-10">
          <path d="M40 160 L100 40 L160 160 Z" fill="none" stroke="#6366f1" strokeWidth="2" />
          <circle cx="100" cy="100" r="30" fill="#6366f1" fillOpacity="0.1" stroke="#6366f1" strokeWidth="2" />
          <line x1="100" y1="40" x2="100" y2="160" stroke="#6366f1" strokeWidth="1" strokeDasharray="4" />
          <circle cx="70" cy="130" r="5" fill="#10b981" />
          <circle cx="130" cy="130" r="5" fill="#10b981" />
          <circle cx="100" cy="70" r="5" fill="#10b981" />
        </svg>
      )
    },
    {
      title: "SIRALAMA ALGORİTMALARI",
      subtitle: "Zirveyi Matematik Belirler",
      description: "Doğru seçeneği bulmak için 12+ hibrit model eş zamanlı çalışır. Her model farklı bir perspektifle gerçeğe ulaşır.",
      grid: [
        { label: "TOPSIS & CODAS", meta: "GEOMETRİK", info: "İdeal mükemmelliğe en yakın ve felakete en uzak noktayı matematiksel koordinatlarla belirler." },
        { label: "VIKOR Protocol", meta: "UZLAŞMACI", info: "Maksimum grup faydası ve minimum bireysel pişmanlık noktasına odaklanır. En güvenli karardır." },
        { label: "EDAS & MOORA", meta: "VERİMLİLİK", info: "Ortalama çözümlerden pozitif yönde sapmaları analiz eder. Lojistik ve tedarik süreçleri için bir standarttır." },
        { label: "WASPAS Elite", meta: "HİBRİT KRAL", info: "Toplamsal ve çarpımsal modellerin %99.4 hassasiyetle birleşimidir. Akademik doğruluğun zirvesidir." }
      ],
      icon: (
        <svg viewBox="0 0 200 200" className="w-64 h-64 mx-auto mb-10">
          <rect x="50" y="50" width="100" height="100" fill="none" stroke="#10b981" strokeWidth="1" rx="20" />
          <path d="M50 85 H150 M50 115 H150 M85 50 V150 M115 50 V150" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.2" />
          <path d="M70 130 L100 100 L130 130" stroke="#10b981" strokeWidth="3" />
          <circle cx="100" cy="80" r="8" fill="#10b981" />
          <path d="M20 180 L180 180" stroke="#10b981" strokeWidth="1" strokeDasharray="5" />
        </svg>
      )
    }
  ];

  return (
    <div className="blueprint-master fade-in" style={{ 
      background: 'radial-gradient(circle at 50% -20%, #1e293b, #020617 90%)', 
      minHeight: '100vh', 
      color: '#fff',
      paddingBottom: '150px'
    }}>
      {/* Dynamic Nav */}
      <nav style={{ padding: '30px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(2,6,23,0.3)', backdropFilter: 'blur(30px)', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div className="flex items-center gap-4">
          <Zap size={32} fill="#10b981" color="#10b981" className="animate-pulse" />
          <div className="flex flex-col">
            <span className="font-black text-2xl tracking-tighter uppercase leading-none">The Blueprint</span>
            <span className="text-[10px] font-bold text-emerald opacity-60 mt-1 uppercase tracking-[0.3em]">Scientific Methodology v7.0</span>
          </div>
        </div>
        <button onClick={onBack} className="btn-elite btn-elite-secondary" style={{ padding: '12px 35px', borderRadius: '100px', fontSize: '0.8rem' }}>
          <ChevronLeft size={18} /> KOMUTA MERKEZİNE DÖN
        </button>
      </nav>

      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
        
        {/* Intro Header */}
        <header style={{ textAlign: 'center', paddingTop: '120px', marginBottom: '150px' }}>
          <div className="badge-v6" style={{ margin: '0 auto 40px', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '10px 40px' }}>
            <Activity size={14} className="text-emerald" /> STRATEJİK KARAR MİMARİSİ
          </div>
          <h1 style={{ fontSize: '8rem', fontWeight: 900, lineHeight: '0.8', letterSpacing: '-8px', marginBottom: '50px' }} className="shimmer-text">
            Mastering <br/> the Choice.
          </h1>
          <p style={{ fontSize: '2rem', color: '#94A3B8', maxWidth: '1000px', margin: '0 auto', lineHeight: '1.3', fontWeight: 500 }}>
            Vestra Elite, Apple hassasiyetinde bir disiplinle, hibrit MCDM algoritmalarını <br/>
            tek bir "Süper Motor"da birleştirerek stratejik hatayı imkansız kılar.
          </p>
        </header>

        {/* Section Journey */}
        {sections.map((section, idx) => (
          <section key={idx} style={{ marginBottom: '250px' }}>
             <div className="grid grid-cols-12 gap-20 items-center">
                
                {/* Left: Interactive Visual */}
                <div className={`col-span-6 ${idx % 2 === 1 ? 'order-last' : ''}`}>
                   <div className="card-elite" style={{ padding: '60px', borderRadius: '80px', background: 'rgba(15, 23, 42, 0.4)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5)' }}>
                      {section.icon}
                      <div className="flex justify-center gap-10 opacity-30">
                         <ShieldCheck size={24} />
                         <Cpu size={24} />
                         <Compass size={24} />
                      </div>
                   </div>
                </div>

                {/* Right: Narrative */}
                <div className="col-span-6">
                   <span className="text-emerald font-black text-sm tracking-[0.5em] mb-6 block uppercase">Phase 0{idx + 1}</span>
                   <h2 style={{ fontSize: '4.5rem', fontWeight: 900, lineHeight: '0.9', marginBottom: '20px', letterSpacing: '-3px' }}>{section.title}</h2>
                   <h3 style={{ fontSize: '1.8rem', color: '#6366f1', fontWeight: 700, marginBottom: '30px' }}>{section.subtitle}</h3>
                   <p style={{ fontSize: '1.4rem', color: '#94A3B8', lineHeight: '1.6', marginBottom: '50px' }}>{section.description}</p>
                   
                   {/* Contextual Elements */}
                   {section.points && (
                     <div className="flex flex-col gap-6">
                        {section.points.map((p, i) => (
                          <div key={i} className="flex items-center gap-5 p-6 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-all">
                             <CheckCircle2 size={24} className="text-emerald" />
                             <span className="text-lg font-bold text-slate-200">{p}</span>
                          </div>
                        ))}
                     </div>
                   )}

                   {section.methods && (
                     <div className="flex flex-col gap-4">
                        {section.methods.map((m, i) => (
                          <div key={i} className="p-8 bg-black/40 rounded-[40px] border border-white/5 hover:border-emerald/30 transition-all">
                             <div className="flex justify-between items-center mb-4">
                                <span className="font-black text-2xl text-emerald">{m.name}</span>
                                <span className="text-[10px] font-black border border-indigo/40 px-3 py-1 rounded-full text-indigo-400">{m.type}</span>
                             </div>
                             <p className="text-sm text-secondary leading-relaxed">{m.desc}</p>
                          </div>
                        ))}
                     </div>
                   )}

                   {section.grid && (
                     <div className="grid grid-cols-2 gap-4">
                        {section.grid.map((g, i) => (
                          <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/5 flex flex-col gap-3">
                             <span className="text-[10px] font-black text-secondary tracking-widest">{g.label}</span>
                             <span className="text-xs font-black text-emerald">{g.meta}</span>
                             <p className="text-[11px] text-secondary/80 leading-snug">{g.info}</p>
                          </div>
                        ))}
                     </div>
                   )}
                </div>

             </div>
          </section>
        ))}

        {/* Call to Action */}
        <section style={{ textAlign: 'center', marginTop: '100px' }}>
           <div style={{ padding: '150px 80px', background: 'linear-gradient(to bottom, rgba(16, 185, 129, 0.05), transparent)', borderRadius: '120px', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
              <Award size={100} className="text-emerald" style={{ margin: '0 auto 50px' }} />
              <h2 style={{ fontSize: '6rem', fontWeight: 900, marginBottom: '30px', letterSpacing: '-4px' }}>Karar Vermek Artık <br/> Bir Bilimdir.</h2>
              <p style={{ fontSize: '1.8rem', color: '#94A3B8', maxWidth: '900px', margin: '0 auto 80px' }}>
                Hata payını matematiksel olarak sıfırladık. <br/>
                Kimi AI ve Hibrit Motorlarımızla geleceği bugün inşa edin.
              </p>
              <button onClick={onBack} className="btn-elite btn-elite-primary" style={{ margin: '0 auto', padding: '2rem 8rem', fontSize: '1.8rem', borderRadius: '100px' }}>
                 ŞİMDİ BAŞLAT <ChevronRight size={32} />
              </button>
           </div>
        </section>

      </div>

      <footer style={{ padding: '100px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <div className="brand-v6 justify-center mb-6 opacity-30">
          <Zap size={24} fill="#10b981" color="#10b981" />
          <span className="font-black text-xl tracking-tighter uppercase">Vestra Elite</span>
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-20">Mastering the Science of Choice © 2026</p>
      </footer>
    </div>
  );
};

export default Blueprint;
