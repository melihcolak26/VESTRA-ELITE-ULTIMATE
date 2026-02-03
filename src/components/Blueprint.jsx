import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Zap, 
  ArrowRight, 
  Compass, 
  Layers, 
  Layout, 
  ShieldCheck, 
  Cpu, 
  Target, 
  MousePointer2, 
  LineChart, 
  Box,
  Ruler,
  PenTool,
  Grid
} from 'lucide-react';

const Blueprint = ({ onBack }) => {
  const [activeTool, setActiveTool] = useState('objective');

  return (
    <div className="blueprint-architect fade-in" style={{ 
      background: '#020617', 
      minHeight: '100vh', 
      color: '#fff', 
      fontFamily: "'Outfit', sans-serif",
      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.05) 1px, transparent 0)`,
      backgroundSize: '40px 40px'
    }}>
      {/* Technical Header */}
      <nav style={{ padding: '25px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(16, 185, 129, 0.2)', position: 'sticky', top: 0, background: 'rgba(2,6,23,0.9)', zIndex: 1000, backdropFilter: 'blur(10px)' }}>
        <div className="flex items-center gap-3">
          <div style={{ border: '2px solid #10b981', padding: '5px' }}>
            <Zap size={24} fill="#10b981" color="#10b981" />
          </div>
          <div className="flex flex-col">
            <span style={{ fontWeight: 900, fontSize: '1.2rem', letterSpacing: '1px' }}>THE BLUEPRINT <span style={{ color: '#10b981' }}>v7.8</span></span>
            <span style={{ fontSize: '0.5rem', fontWeight: 800, opacity: 0.5, letterSpacing: '0.3em' }}>TECHNICAL SPECIFICATIONS</span>
          </div>
        </div>
        <button onClick={onBack} className="btn-elite btn-elite-secondary" style={{ padding: '8px 25px', borderRadius: '4px', border: '1px solid #10b981', color: '#10b981' }}>
          <ChevronLeft size={16} /> KOMUTA MERKEZİNE DÖN
        </button>
      </nav>

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
        
        {/* Hero: The Architect's View */}
        <section style={{ textAlign: 'center', marginBottom: '120px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)', opacity: 0.1 }}>
             <Grid size={400} strokeWidth={0.5} color="#10b981" />
          </div>
          <div className="badge-v6" style={{ margin: '0 auto 20px', border: '1px solid #10b981', color: '#10b981', borderRadius: '0', padding: '5px 20px' }}>
             STRATEJİK PLANLAMA ÜSSÜ
          </div>
          <h1 style={{ fontSize: '6rem', fontWeight: 900, lineHeight: '1', letterSpacing: '-4px', marginBottom: '30px' }} className="shimmer-text">
            The Blueprint.
          </h1>
          <h2 style={{ fontSize: '1.8rem', color: '#94A3B8', fontWeight: 400, marginBottom: '50px' }}>
            Her Büyük Karar Bir Plan ile Başlar.
          </h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 60px', opacity: 0.7, lineHeight: '1.6' }}>
            Arabadan tedarikçiye, yatırımdan personel seçimine - doğru kararın mimarisini birlikte çizelim. 
            Vestra Elite, belirsizliği matematiksel bir taslağa dönüştürür.
          </p>
          <div className="flex gap-4 justify-center">
             <button className="btn-elite btn-elite-primary" style={{ borderRadius: '0', padding: '15px 40px' }} onClick={onBack}>PLANIMI ÇİZ</button>
             <button className="btn-elite btn-elite-secondary" style={{ borderRadius: '0', padding: '15px 40px' }}>DEMO İNCELE</button>
          </div>
        </section>

        {/* 3 Step Construction */}
        <h3 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 900, marginBottom: '60px' }}>PLANINIZI 3 ADIMDA ÇİZİN</h3>
        <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', marginBottom: '150px' }}>
           
           <div className="card-elite" style={{ padding: '40px', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '0', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '0.6rem', opacity: 0.3 }}>SEC-01 / FOUNDATION</div>
              <Ruler size={32} color="#10b981" style={{ marginBottom: '20px' }} />
              <h4 style={{ fontWeight: 900, fontSize: '1.4rem', marginBottom: '15px' }}>ADIM 1: TEMELİ ATIN</h4>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: '1.5' }}>
                 Alternatifleri ve kriterleri tanımlayın. Bu, planınızın taşıyıcı kolonlarıdır. 
                 <br/><br/>
                 <span style={{ color: '#10b981', fontWeight: 800 }}>Örn: 5 Gemi, 8 Teknik Kriter.</span>
              </p>
           </div>

           <div className="card-elite" style={{ padding: '40px', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '0', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '0.6rem', opacity: 0.3 }}>SEC-02 / ARCHITECTURE</div>
              <PenTool size={32} color="#10b981" style={{ marginBottom: '20px' }} />
              <h4 style={{ fontWeight: 900, fontSize: '1.4rem', marginBottom: '15px' }}>ADIM 2: MİMARİYİ BELİRLEYİN</h4>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: '1.5' }}>
                 Hangi araçlarla inşa edeceksiniz? Ağırlıklandırma ve Sıralama modellerini seçin.
                 <br/><br/>
                 <span style={{ color: '#10b981', fontWeight: 800 }}>Örn: Entropy + WASPAS Hibriti.</span>
              </p>
           </div>

           <div className="card-elite" style={{ padding: '40px', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '0', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '0.6rem', opacity: 0.3 }}>SEC-03 / INSIGHT</div>
              <Target size={32} color="#10b981" style={{ marginBottom: '20px' }} />
              <h4 style={{ fontWeight: 900, fontSize: '1.4rem', marginBottom: '15px' }}>ADIM 3: PLANI YORUMLAYIN</h4>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: '1.5' }}>
                 Çizimler tamamlandı, karar net! Orti Elite Verdict ile karşılaştırmalı analizi inceleyin.
                 <br/><br/>
                 <span style={{ color: '#10b981', fontWeight: 800 }}>Sonuç: %98.4 Karar Güvenliği.</span>
              </p>
           </div>

        </div>

        {/* The Toolkit Matrix */}
        <section style={{ padding: '80px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(16,185,129,0.1)' }}>
           <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '20px', textAlign: 'center' }}>MİMAR ARAÇ SETİ 🧰</h3>
           <p style={{ textAlign: 'center', color: '#94A3B8', marginBottom: '60px' }}>Hangi Aracı Ne Zaman Kullanmalı?</p>

           <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '60px' }}>
              <button onClick={() => setActiveTool('objective')} style={{ background: activeTool === 'objective' ? '#10b981' : 'transparent', border: '1px solid #10b981', color: activeTool === 'objective' ? '#000' : '#10b981', padding: '10px 30px', fontWeight: 900, cursor: 'pointer' }}>OBJEKTİF VERİLER</button>
              <button onClick={() => setActiveTool('subjective')} style={{ background: activeTool === 'subjective' ? '#10b981' : 'transparent', border: '1px solid #10b981', color: activeTool === 'subjective' ? '#000' : '#10b981', padding: '10px 30px', fontWeight: 900, cursor: 'pointer' }}>KİŞİSEL ÖNCELİKLER</button>
              <button onClick={() => setActiveTool('hybrid')} style={{ background: activeTool === 'hybrid' ? '#10b981' : 'transparent', border: '1px solid #10b981', color: activeTool === 'hybrid' ? '#000' : '#10b981', padding: '10px 30px', fontWeight: 900, cursor: 'pointer' }}>HİBRİT YAKLAŞIM</button>
           </div>

           <div className="card-elite" style={{ padding: '60px', borderRadius: '0', border: '1px dashed rgba(16,185,129,0.5)' }}>
              {activeTool === 'objective' && (
                <div className="fade-in">
                   <h4 style={{ fontSize: '2rem', fontWeight: 900, color: '#10b981', marginBottom: '20px' }}>Entropy & CRITIC Modülü</h4>
                   <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#94A3B8' }}>
                      Kanki, eğer elinde sadece rakamlar varsa ve "benim fikrim değil, veriler konuşsun" diyorsan bu set tam sana göre. 
                      Sistem verideki çeşitliliği (Entropy) ve kriter çatışmalarını (CRITIC) ölçerek sana matematiksel bir ağırlık merkezi çıkarır.
                   </p>
                </div>
              )}
              {activeTool === 'subjective' && (
                <div className="fade-in">
                   <h4 style={{ fontSize: '2rem', fontWeight: 900, color: '#10b981', marginBottom: '20px' }}>AHP & VIKOR Modülü</h4>
                   <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#94A3B8' }}>
                      "Tecrübem her şeyden önemli ama AI da beni desteklesin" dediğin an bu seti çekiyoruz. 
                      AHP ile senin (veya Kimi AI'nın) uzman görüşünü ikili kıyaslamalarla sisteme işliyor, VIKOR ile en az pişmanlık duyacağın noktayı buluyoruz.
                   </p>
                </div>
              )}
              {activeTool === 'hybrid' && (
                <div className="fade-in">
                   <h4 style={{ fontSize: '2rem', fontWeight: 900, color: '#10b981', marginBottom: '20px' }}>CRITIC & WASPAS Modülü</h4>
                   <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#94A3B8' }}>
                      En "Elite" yaklaşım budur kanki. Hem veriler arası ilişkiyi koruyor, hem de akademik hassasiyeti en yüksek olan WASPAS ile final sıralamasını yapıyoruz. 
                      Hata payının sıfıra en çok yaklaştığı bölge burasıdır.
                   </p>
                </div>
              )}
           </div>
        </section>

        {/* Final Architectural Note */}
        <div style={{ marginTop: '100px', textAlign: 'left', padding: '40px', borderLeft: '4px solid #10b981', background: 'rgba(16,185,129,0.02)' }}>
           <p style={{ fontSize: '0.8rem', fontWeight: 900, color: '#10b981', marginBottom: '10px' }}>MİMARIN NOTU:</p>
           <p style={{ fontSize: '1.1rem', italic: 'true', opacity: 0.8 }}>
              "Karar vermek, bir binayı inşa etmek gibidir kanki. Eğer temelinde (Veri) ve iskeletinde (Algoritma) hata varsa, o karar çöker. 
              Vestra Elite ile biz, senin için en sağlam kaleleri inşa ediyoruz."
           </p>
        </div>

      </div>

      <footer style={{ padding: '60px', textAlign: 'center', opacity: 0.2, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
         <p style={{ fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.5em' }}>VESTRA ELITE - MASTERING THE CHOICE © 2026</p>
      </footer>
    </div>
  );
};

export default Blueprint;
