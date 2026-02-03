import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Zap, 
  ArrowRight, 
  Target, 
  Brain, 
  Cpu, 
  Layers,
  Compass,
  ZapOff,
  Lightbulb,
  Gem,
  CheckCircle2,
  Activity,
  Ruler,
  PenTool,
  Grid,
  Star,
  FileText,
  Clock,
  Settings,
  HelpCircle,
  Briefcase,
  Users,
  DollarSign,
  Car,
  Package,
  Code
} from 'lucide-react';

const Blueprint = ({ onBack }) => {
  const [activeTool, setActiveTool] = useState('objective');

  const methods = [
    { id: 'entropy', name: 'ENTROPY', emoji: '🎲', type: 'Ağırlıklandırma', diff: 2, time: '5', what: 'Verideki çeşitliliği ölçer.', how: 'Varyasyon yüksekse ağırlık artar.', case: 'Objektif analiz, hızlı sonuç.', note: 'Veriler konuşsun istiyorsanız bu araç tam size göre!' },
    { id: 'critic', name: 'CRITIC', emoji: '⚖️', type: 'İlişkisel Ağırlık', diff: 3, time: '10', what: 'Kriter çatışmalarını ölçer.', how: 'Korelasyon ve sapmayı dengeler.', case: 'Çelişkili hedeflerin yönetimi.', note: 'Kriterler birbiriyle kavga ediyorsa barışı bu sağlar.' },
    { id: 'ahp', name: 'AHP', emoji: '🧠', type: 'Subjektif Ağırlık', diff: 4, time: '15', what: 'Uzman aklını matrise döker.', how: 'İkili kıyaslama ve AI muhakemesi.', case: 'Kişisel öncelik ve vizyon kararları.', note: 'Kimi AI ile birleşince dünyanın en akıllı uzmanı olur.' },
    { id: 'topsis', name: 'TOPSIS', emoji: '🎯', type: 'Sıralama Aracı', diff: 2, time: '5', what: 'İdeal noktayı bulur.', how: 'En iyiye yakınlık, en kötüye uzaklık.', case: 'Hızlı ve güvenilir yatırım seçimi.', note: 'Karar biliminin en popüler ve sağlam aracıdır.' },
    { id: 'vikor', name: 'VIKOR', emoji: '🛡️', type: 'Uzlaşmacı Sıralama', diff: 4, time: '12', what: 'Minimum pişmanlığı hedefler.', how: 'Grup faydası optimizasyonu.', case: 'Yüksek riskli stratejik dönüşümler.', note: 'Hata lüksünüz yoksa bu protokole güvenin.' },
    { id: 'waspas', name: 'WASPAS', emoji: '💎', type: 'Hibrit Sıralama', diff: 5, time: '15', what: 'Ultra hassas sıralama yapar.', how: 'Toplamsal ve çarpımsal birleşim.', case: 'Akademik ve teknik satın almalar.', note: 'Hata payını matematiksel olarak imkansız kılar.' }
  ];

  const projects = [
    { id: '001', name: 'ARAÇ ALIMI', icon: <Car size={20} />, client: 'Bireysel', criteria: 5, alts: 4, weight: 'Entropy', rank: 'TOPSIS', time: '5', result: 'Model B (%87)' },
    { id: '002', name: 'TEDARİKÇİ SEÇİMİ', icon: <Package size={20} />, client: 'Kurumsal', criteria: 8, alts: 12, weight: 'CRITIC', rank: 'MOORA', time: '8', result: 'Supplier 4 (%92)' },
    { id: '003', name: 'YATIRIM KARARI', icon: <Briefcase size={20} />, client: 'Yatırımcı', criteria: 6, alts: 5, weight: 'AHP + Kimi', rank: 'VIKOR', time: '20', result: 'Estate A (%84)' },
    { id: '004', name: 'YAZILIM SEÇİMİ', icon: <Code size={20} />, client: 'Teknoloji', criteria: 10, alts: 6, weight: 'Entropy', rank: 'WASPAS', time: '12', result: 'Cloud X (%98)' },
    { id: '005', name: 'PERSONEL DEĞ.', icon: <Users size={20} />, client: 'İK Birimi', criteria: 7, alts: 15, weight: 'AHP', rank: 'EDAS', time: '15', result: 'Aday 3 (%89)' },
    { id: '006', name: 'PROJE ÖNCELİK.', icon: <Grid size={20} />, client: 'Ürün Yönetimi', criteria: 4, alts: 20, weight: 'CRITIC', rank: 'CODAS', time: '10', result: 'Task Alpha (%95)' }
  ];

  const table = [
    { need: 'Objektiflik', w: 'Entropy', r: 'TOPSIS', d: 2, t: "5'", acc: 70 },
    { need: 'Çatışma Var', w: 'CRITIC', r: 'CODAS', d: 3, t: "10'", acc: 85 },
    { need: 'Kişisel Önc.', w: 'AHP', r: 'VIKOR', d: 4, t: "15'", acc: 80 },
    { need: 'Maks. Doğruluk', w: 'CRITIC', r: 'WASPAS', d: 5, t: "12'", acc: 100 },
    { need: 'Hızlı Karar', w: 'CRITIC', r: 'MOORA', d: 2, t: "5'", acc: 75 },
    { need: 'Belirsizlik', w: 'Entropy', r: 'EDAS', d: 3, t: "8'", acc: 80 }
  ];

  return (
    <div className="blueprint-architect fade-in" style={{ 
      background: '#020617', 
      minHeight: '100vh', 
      color: '#fff', 
      fontFamily: "'Outfit', sans-serif",
      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.05) 1px, transparent 0)`,
      backgroundSize: '40px 40px',
      paddingBottom: '150px'
    }}>
      {/* Technical Header */}
      <nav style={{ padding: '25px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(16, 185, 129, 0.2)', position: 'sticky', top: 0, background: 'rgba(2,6,23,0.9)', zIndex: 1000, backdropFilter: 'blur(20px)' }}>
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
        
        {/* Hero */}
        <section style={{ textAlign: 'center', marginBottom: '120px' }}>
          <div className="badge-v6" style={{ margin: '0 auto 20px', border: '1px solid #10b981', color: '#10b981', borderRadius: '0', padding: '5px 20px' }}>
             STRATEJİK PLANLAMA ÜSSÜ
          </div>
          <h1 style={{ fontSize: '6rem', fontWeight: 900, lineHeight: '1', letterSpacing: '-4px', marginBottom: '30px' }} className="shimmer-text">
            The Blueprint.
          </h1>
          <h2 style={{ fontSize: '1.8rem', color: '#94A3B8', fontWeight: 400 }}>Her Büyük Karar Bir Plan ile Başlar.</h2>
        </section>

        {/* 3 Step Construction */}
        <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', marginBottom: '150px' }}>
           <div className="card-elite" style={{ padding: '40px', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '0' }}>
              <Ruler size={32} color="#10b981" style={{ marginBottom: '20px' }} />
              <h4 style={{ fontWeight: 900, fontSize: '1.4rem', marginBottom: '15px' }}>ADIM 1: TEMELİ ATIN</h4>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Alternatifleri ve kriterleri tanımlayın. Bu, planınızın taşıyıcı kolonlarıdır.</p>
           </div>
           <div className="card-elite" style={{ padding: '40px', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '0' }}>
              <PenTool size={32} color="#10b981" style={{ marginBottom: '20px' }} />
              <h4 style={{ fontWeight: 900, fontSize: '1.4rem', marginBottom: '15px' }}>ADIM 2: MİMARİYİ SEÇİN</h4>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Hangi araçlarla inşa edeceksiniz? Ağırlıklandırma ve Sıralama seçimi.</p>
           </div>
           <div className="card-elite" style={{ padding: '40px', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '0' }}>
              <Target size={32} color="#10b981" style={{ marginBottom: '20px' }} />
              <h4 style={{ fontWeight: 900, fontSize: '1.4rem', marginBottom: '15px' }}>ADIM 3: PLANI YORUMLAYIN</h4>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Çizimler tamamlandı, karar net! Orti Elite Verdict ile sonucu inceleyin.</p>
           </div>
        </div>

        {/* Catalog */}
        <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Çizim Araçları Kataloğu 📐</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px', marginBottom: '150px' }}>
          {methods.map((m, i) => (
            <div key={i} className="card-elite" style={{ padding: '0', borderRadius: '0', border: '1px solid #10b981', background: 'transparent' }}>
               <div style={{ padding: '20px', borderBottom: '1px solid #10b981', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 900, fontSize: '1.2rem' }}>{m.name} {m.emoji}</span>
                  <div className="flex gap-1">
                    {[...Array(m.diff)].map((_, i) => <Star key={i} size={12} fill="#10b981" color="#10b981" />)}
                  </div>
               </div>
               <div style={{ padding: '25px' }}>
                  <p style={{ fontSize: '0.7rem', fontWeight: 900, color: '#94A3B8', marginBottom: '15px' }}>TİP: {m.type} | SÜRE: ~{m.time} dk</p>
                  <div style={{ marginBottom: '20px' }}>
                     <p style={{ fontSize: '0.8rem', fontWeight: 900, color: '#10b981' }}>📐 NE YAPAR?</p>
                     <p style={{ fontSize: '0.85rem', color: '#94A3B8' }}>{m.what}</p>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                     <p style={{ fontSize: '0.8rem', fontWeight: 900, color: '#10b981' }}>🔍 NASIL ÇALIŞIR?</p>
                     <p style={{ fontSize: '0.85rem', color: '#94A3B8' }}>{m.how}</p>
                  </div>
                  <div style={{ padding: '15px', background: 'rgba(16,185,129,0.05)', border: '1px dashed rgba(16,185,129,0.3)', marginTop: '20px' }}>
                     <p style={{ fontSize: '0.7rem', fontWeight: 900, opacity: 0.6 }}>💡 MİMAR NOTU:</p>
                     <p style={{ fontSize: '0.8rem', italic: 'true' }}>"{m.note}"</p>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* Project Examples */}
        <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Tamamlanmış Projeler 🏗</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '150px' }}>
          {projects.map((p, i) => (
            <div key={i} className="card-elite" style={{ padding: '0', borderRadius: '0', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
               <div style={{ padding: '15px 25px', background: 'rgba(255,255,255,0.05)', display: 'flex', itemsCenter: 'center', gap: '15px' }}>
                  {p.icon}
                  <span style={{ fontWeight: 900, fontSize: '0.9rem' }}>PROJE #{p.id}: {p.name}</span>
               </div>
               <div style={{ padding: '25px', fontSize: '0.8rem' }}>
                  <p style={{ marginBottom: '5px' }}><span style={{ opacity: 0.5 }}>MÜŞTERİ:</span> {p.client}</p>
                  <p style={{ marginBottom: '5px' }}><span style={{ opacity: 0.5 }}>YAPI:</span> {p.criteria} Kriter, {p.alts} Alternatif</p>
                  <div style={{ margin: '20px 0', padding: '15px', borderLeft: '2px solid #10b981', background: 'rgba(255,255,255,0.02)' }}>
                     <p style={{ fontWeight: 900, fontSize: '0.7rem', color: '#10b981', marginBottom: '5px' }}>SEÇİLEN MİMARİ:</p>
                     <p>├─ {p.weight}</p>
                     <p>└─ {p.rank}</p>
                  </div>
                  <p style={{ fontWeight: 900, color: '#10b981' }}>SONUÇ: {p.result}</p>
                  <button className="btn-elite btn-elite-primary" style={{ width: '100%', marginTop: '20px', padding: '10px', fontSize: '0.7rem' }}>PLANLI İNCELE</button>
               </div>
            </div>
          ))}
        </div>

        {/* Architect Desk */}
        <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Mimar Masası: Araç Karşılaştırma 📊</h3>
        <div className="card-elite" style={{ padding: '0', borderRadius: '0', border: '1px solid rgba(255,255,255,0.1)', overflowX: 'auto' }}>
           <table className="elite-table" style={{ borderCollapse: 'collapse', width: '100%' }}>
              <thead>
                 <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <th style={{ textAlign: 'left', padding: '20px' }}>İHTİYACINIZ</th>
                    <th>AĞIRLIK</th>
                    <th>SIRALAMA</th>
                    <th>ZORLUK</th>
                    <th>SÜRE</th>
                    <th>DOĞRULUK</th>
                 </tr>
              </thead>
              <tbody>
                 {table.map((row, i) => (
                   <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ textAlign: 'left', padding: '20px', fontWeight: 900 }}>{row.need}</td>
                      <td>{row.w}</td>
                      <td>{row.r}</td>
                      <td>
                        <div className="flex justify-center gap-1">
                          {[...Array(row.d)].map((_, i) => <Star key={i} size={10} fill="#10b981" color="#10b981" />)}
                        </div>
                      </td>
                      <td>{row.t}</td>
                      <td style={{ padding: '20px' }}>
                        <div style={{ height: '8px', width: '100px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden', margin: '0 auto' }}>
                           <div style={{ height: '100%', background: '#10b981', width: `${row.acc}%` }}></div>
                        </div>
                      </td>
                   </tr>
                 ))}
              </tbody>
           </table>
        </div>

        {/* FAQ Section */}
        <div style={{ marginTop: '150px' }}>
          <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Teknik Şartname (SSS) ❓</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
             <div className="card-elite" style={{ padding: '40px', borderRadius: '0', border: '1px solid rgba(16,185,129,0.3)' }}>
                <p style={{ fontWeight: 900, fontSize: '0.8rem', color: '#10b981', marginBottom: '10px' }}>SORU 1: AHP'de uzman görüşü nereden gelecek?</p>
                <p style={{ color: '#94A3B8' }}>
                   Kanki, Vestra Elite'de iki opsiyonun var: Ya kendi tecrübenle kıyaslamaları manuel yaparsın, ya da "Kimi AI Expert" modunu açarsın. AI arka planda akademik verileri süzerek senin için en mantıklı kıyaslama matrisini hazırlar.
                </p>
             </div>
             <div className="card-elite" style={{ padding: '40px', borderRadius: '0', border: '1px solid rgba(16,185,129,0.3)' }}>
                <p style={{ fontWeight: 900, fontSize: '0.8rem', color: '#10b981', marginBottom: '10px' }}>SORU 2: Hangi modeli seçeceğimi bilemezsem ne olur?</p>
                <p style={{ color: '#94A3B8' }}>
                   Merak etme! Sistem varsayılan olarak "Entropy + TOPSIS" hibritini önerir. Ancak "Analyze with All" dersen, Orti tüm modelleri aynı anda koşturur ve sana aralarındaki tutarlılık skorunu (Consensus Score) raporlar.
                </p>
             </div>
          </div>
        </div>

        {/* Final CTA */}
        <div style={{ marginTop: '150px', textAlign: 'center' }}>
          <button onClick={onBack} className="btn-elite btn-elite-primary" style={{ padding: '20px 80px', fontSize: '1.2rem', borderRadius: '0' }}>
            ŞİMDİ KENDİ PLANINI ÇİZ <ArrowRight size={24} />
          </button>
        </div>

      </div>

      <footer style={{ padding: '100px', textAlign: 'center', opacity: 0.2, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
         <p style={{ fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.5em' }}>VESTRA ELITE - MASTERING THE CHOICE © 2026</p>
      </footer>
    </div>
  );
};

export default Blueprint;
