import React, { useState } from 'react';
import { 
  ChevronLeft, Zap, ArrowRight, Ruler, PenTool, Target, Layers, 
  Brain, Cpu, Compass, Gem, Star, ShieldCheck, Activity, Search, 
  Clock, CheckCircle2, Info, Workflow, Database, Maximize2, MousePointer2,
  Box, Terminal, Layout, Briefcase, Car, Package, Code, Users, DollarSign
} from 'lucide-react';

const Blueprint = ({ onBack }) => {
  const [scannerStep, setScannerStep] = useState(0);
  const [scannerData, setScannerData] = useState({ source: '', type: '' });

  const methods = [
    { code: 'ENT-01', name: 'Shannon Entropy', type: 'Foundation Layer', desc: 'Verideki belirsizliği ölçerek objektif ağırlık temelleri atarsın.', emoji: '🎲', when: 'Veriler konuşsun istendiğinde.', icon: <Layers size={40} /> },
    { code: 'CRT-02', name: 'CRITIC Method', type: 'Foundation Layer', desc: 'Kriterler arası gizli ilişkileri bularak bilgi tekrarını önlersin.', emoji: '⚖️', when: 'Çatışan kriterler varlığı.', icon: <Activity size={40} /> },
    { code: 'AHP-03', name: 'AHP Protocol', type: 'Foundation Layer', desc: 'Uzman görüşlerini matematiksel tutarlılıkla temele dökersin.', emoji: '🧠', when: 'Vizyon ve tecrübe odaklı kararlarda.', icon: <Brain size={40} /> },
    { code: 'TPS-04', name: 'TOPSIS Elite', type: 'Structure Layer', desc: 'İdeal çözüme en yakın noktayı geometrik olarak bulur.', emoji: '🎯', when: 'Genel seçim ve yatırım analizlerinde.', icon: <Target size={40} /> },
    { code: 'EDA-05', name: 'EDAS Robust', type: 'Structure Layer', desc: 'Ortalama performanstan sapma analiziyle sağlam yapılar kurar.', emoji: '📈', when: 'Volatilite ve uç değerler varsa.', icon: <Compass size={40} /> },
    { code: 'WAS-09', name: 'WASPAS Matrix', type: 'Structure Layer', desc: 'Hibrit modellerle %99.4 akademik hassasiyete ulaşır.', emoji: '💎', when: 'Maksimum teknik doğruluk gerektiğinde.', icon: <Gem size={40} /> }
  ];

  const scannerQuestions = [
    { 
      key: 'source', 
      q: 'Temel malzemeniz nedir? (Data Source)', 
      opts: [
        { l: 'Sadece rakamsal veri', v: 'Entropy' },
        { l: 'İlişkili kriterler', v: 'CRITIC' },
        { l: 'Uzman görüşü/tecrübe', v: 'AHP' }
      ] 
    },
    { 
      key: 'type', 
      q: 'Yapı türünüz ne olacak? (Decision Type)', 
      opts: [
        { l: 'En iyiyi bulmalıyım', v: 'TOPSIS' },
        { l: 'Ekip memnuniyeti', v: 'VIKOR' },
        { l: 'Güvenli adımlar', v: 'EDAS' }
      ] 
    }
  ];

  return (
    <div className="blueprint-paper fade-in">
      {/* 1. TECHNICAL NAV */}
      <nav style={{ padding: '25px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--bp-line)', background: 'rgba(2, 6, 23, 0.9)', position: 'sticky', top: 0, zIndex: 1000, backdropFilter: 'blur(20px)' }}>
        <div className="flex items-center gap-4">
          <Zap size={28} fill="var(--bp-primary)" color="var(--bp-primary)" />
          <div className="flex flex-col">
            <span className="mono" style={{ fontWeight: 900, fontSize: '1.4rem', color: '#fff' }}>THE BLUEPRINT 📐</span>
            <span style={{ fontSize: '0.6rem', fontWeight: 800, color: 'var(--bp-primary)', letterSpacing: '0.3em' }}>STRATEJİK KARAR MİMARİSİ</span>
          </div>
        </div>
        <button onClick={onBack} className="btn-bp" style={{ padding: '10px 25px', fontSize: '0.75rem', borderRadius: '4px' }}>
          <ChevronLeft size={16} /> KOMUTA MERKEZİ
        </button>
      </nav>

      <div className="container" style={{ maxWidth: '1250px', padding: '100px 20px' }}>
        
        {/* 2. HERO: DARK ARCHITECT */}
        <header style={{ textAlign: 'center', marginBottom: '150px' }}>
           <div className="mono" style={{ margin: '0 auto 30px', border: '1px solid var(--bp-primary)', color: 'var(--bp-primary)', padding: '8px 25px', background: 'rgba(16,185,129,0.05)' }}>
              SPEC NO: 2026-V10-ELITE
           </div>
           <h1 className="shimmer-text" style={{ fontSize: '7rem', fontWeight: 900, lineHeight: '0.85', letterSpacing: '-6px' }}>
              Kararın <br/> Mimarisini Çiz.
           </h1>
           <h2 className="technical" style={{ fontSize: '1.8rem', marginTop: '30px', color: '#94A3B8', fontWeight: 500 }}>
              Karanlık Mod: Stratejik Karar Mimarlığı.
           </h2>
           <div className="measure-h"></div>
           <p className="mono" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 60px', color: '#cbd5e1', lineHeight: '1.6' }}>
             Senaryona en uygun yöntemi seç, temelini at ve stratejik yapını kur. 
             Vestra Elite ile her seçim artık matematiksel bir taslaktır.
           </p>
           <div className="flex justify-center gap-6">
              <button className="btn-bp" onClick={onBack}>PLANIMI ÇİZ</button>
              <button className="btn-bp-outline">DEMO İNCELE</button>
           </div>
        </header>

        {/* 3. INTERACTIVE SCANNER */}
        <section style={{ marginBottom: '200px' }}>
           <div className="blueprint-border" style={{ padding: '80px', textAlign: 'center', borderRadius: '40px' }}>
              <h3 className="mono" style={{ fontSize: '2.5rem', marginBottom: '60px', color: 'var(--bp-primary)' }}>PROJE TARAYICI 🔬</h3>
              
              {scannerStep < scannerQuestions.length ? (
                <div className="fade-in">
                   <p className="technical" style={{ fontSize: '1.3rem', marginBottom: '50px', color: '#fff' }}>[{scannerStep + 1}/2] {scannerQuestions[scannerStep].q}</p>
                   <div className="flex justify-center gap-4 flex-wrap">
                      {scannerQuestions[scannerStep].opts.map((o, i) => (
                        <button 
                          key={i} 
                          className="btn-bp-outline hover:bg-emerald/10 transition-all"
                          style={{ borderRadius: '100px' }}
                          onClick={() => {
                            setScannerData({ ...scannerData, [scannerQuestions[scannerStep].key]: o.v });
                            setScannerStep(scannerStep + 1);
                          }}
                        >
                           {o.l}
                        </button>
                      ))}
                   </div>
                </div>
              ) : (
                <div className="fade-in">
                   <div style={{ maxWidth: '550px', margin: '0 auto', border: '2px solid var(--bp-primary)', padding: '50px', background: 'rgba(16,185,129,0.05)', borderRadius: '30px' }}>
                      <div style={{ textAlign: 'left', marginBottom: '30px' }}>
                        <p className="mono" style={{ fontWeight: 900, color: 'var(--bp-primary)', fontSize: '1.2rem' }}>🗂 SİZİN BLUEPRINT PLANINIZ:</p>
                        <div className="measure-h" style={{ margin: '15px 0' }}></div>
                      </div>
                      <div className="technical" style={{ textAlign: 'left', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <p><strong>TEMEL (Weight):</strong> <span className="text-emerald">{scannerData.source}</span></p>
                        <p><strong>YAPI (Rank):</strong> <span className="text-emerald">{scannerData.type}</span></p>
                        <p style={{ marginTop: '20px', fontWeight: 900, background: 'var(--bp-primary)', color: '#000', padding: '10px', textAlign: 'center' }}>
                           KOMBİNASYON: {scannerData.source}-{scannerData.type}
                        </p>
                      </div>
                      <button className="btn-bp" style={{ width: '100%', marginTop: '40px', borderRadius: '10px' }} onClick={() => setScannerStep(0)}>YENİDEN PLANLA</button>
                   </div>
                </div>
              )}
           </div>
        </section>

        {/* 4. METHOD CATALOG */}
        <section style={{ marginBottom: '200px' }}>
           <h3 className="mono" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Çizim Araçları Kataloğu ⚒️</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
              {methods.map((m, i) => (
                <div key={i} className="blueprint-card" style={{ borderRadius: '30px', padding: '0', overflow: 'hidden' }}>
                   <div style={{ padding: '25px', borderBottom: '1px solid var(--bp-line)', background: 'rgba(255,255,255,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="mono" style={{ fontWeight: 900, color: 'var(--bp-primary)', fontSize: '0.8rem' }}>CODE: {m.code}</span>
                      <div className="flex gap-1">
                        {[...Array(m.diff)].map((_, j) => <Star key={j} size={14} fill="var(--bp-primary)" color="var(--bp-primary)" />)}
                      </div>
                   </div>
                   <div style={{ padding: '40px' }}>
                      <div style={{ color: 'var(--bp-primary)', marginBottom: '25px' }}>{m.icon}</div>
                      <h4 className="mono" style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '15px' }}>{m.name} {m.emoji}</h4>
                      <p className="technical" style={{ fontSize: '0.75rem', fontWeight: 900, opacity: 0.5, marginBottom: '20px' }}>TİP: {m.type.toUpperCase()}</p>
                      <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '30px' }}>{m.what}</p>
                      
                      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '25px', border: '1px dashed var(--bp-line)', borderRadius: '20px' }}>
                        <p className="technical" style={{ fontSize: '0.8rem', fontWeight: 900, color: 'var(--bp-primary)', marginBottom: '10px' }}>NASIL ÇALIŞIR?</p>
                        <p style={{ fontSize: '0.85rem', color: '#94A3B8' }}>{m.how}</p>
                      </div>

                      <div style={{ marginTop: '30px', padding: '20px', borderLeft: '3px solid var(--bp-primary)', background: 'rgba(16,185,129,0.03)' }}>
                         <p style={{ fontSize: '0.9rem', italic: 'true', opacity: 0.8 }}>"Kanki, {m.note}"</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 5. COMPARISON TABLE */}
        <section style={{ marginBottom: '200px' }}>
           <h3 className="mono" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Teknik Karşılaştırma Cetveli 📊</h3>
           <div className="blueprint-border" style={{ borderRadius: '30px', overflow: 'hidden', border: '2px solid var(--bp-line)' }}>
              <table className="blueprint-table">
                 <thead>
                    <tr>
                       <th>İHTİYACINIZ</th>
                       <th>TEMEL (WEIGHT)</th>
                       <th>YAPI (RANK)</th>
                       <th>MİMARİ NOT</th>
                       <th>HASSASİYET</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr><td>Tam Objektiflik</td><td className="mono">Entropy</td><td className="mono">TOPSIS</td><td className="technical">Duygusuz analiz</td><td>████░░</td></tr>
                    <tr><td>Zıt Hedefler</td><td className="mono">CRITIC</td><td className="mono">CODAS</td><td className="technical">Denge odaklı</td><td>█████░</td></tr>
                    <tr><td>Kişisel Vizyon</td><td className="mono">AHP</td><td className="mono">VIKOR</td><td className="technical">En az pişmanlık</td><td>████░░</td></tr>
                    <tr><td>Maks. Doğruluk</td><td className="mono">CRITIC</td><td className="mono">WASPAS</td><td className="technical">Akademik zirve</td><td>██████</td></tr>
                 </tbody>
              </table>
           </div>
        </section>

      </div>

      <footer style={{ padding: '80px', textAlign: 'center', opacity: 0.3 }}>
         <p className="mono" style={{ fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.5em' }}>VESTRA ELITE - ARCHITECTURAL DECISION SCIENCE © 2026</p>
      </footer>
    </div>
  );
};

export default Blueprint;
