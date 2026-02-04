import React, { useState } from 'react';
import { 
  ChevronLeft, Zap, ArrowRight, Target, Brain, Cpu, Layers, Compass, 
  ShieldCheck, Award, Box, Ruler, PenTool, Grid, Star, FileText, 
  Clock, HelpCircle, Briefcase, Users, DollarSign, Car, Package, 
  Code, Info, MousePointer2, CheckCircle2, Layout, Activity, Monitor
} from 'lucide-react';

const Blueprint = ({ onBack }) => {
  const methods = [
    { code: 'ENT-01', name: 'ENTROPY', emoji: '🎲', type: 'Ağırlıklandırma Aracı', diff: 2, time: '5', what: 'Verideki çeşitliliği ölçer.', how: 'Kriterdeki varyasyon yüksekse o kritere yüksek ağırlık verir.', example: 'Fiyatlar çok yakınsa %5, çok farklıysa %45 ağırlık.', when: ['Tamamen objektif analiz', 'Hızlı ağırlıklandırma'], note: 'Verileriniz konuşsun istiyorsanız bu araç tam size göre!' },
    { code: 'CRT-02', name: 'CRITIC', emoji: '⚖️', type: 'İlişkisel Ağırlık', diff: 3, time: '10', what: 'Kriter çatışmalarını ölçer.', how: 'Korelasyon ve standart sapma dengesini kurar.', example: 'Hız ve yakıt arasındaki çelişkiyi dengeleyerek ağırlık atar.', when: ['Çatışan kriterler varlığı', 'Kriterler arası yoğunluk'], note: 'Kriterler birbiriyle kavga ediyorsa barışı bu sağlar.' },
    { code: 'AHP-03', name: 'AHP', emoji: '🧠', type: 'Subjektif Ağırlık', diff: 4, time: '15', what: 'Uzman aklını matrise döker.', how: 'İkili kıyaslama ve tutarlılık analizi yapar.', example: 'Kalite fiyattan 3 kat daha önemli gibi uzman kararları.', when: ['Kişisel öncelikler kritikse', 'Vizyon odaklı seçimler'], note: 'Kimi AI ile birleşince dünyanın en akıllı uzmanı olur.' },
    { code: 'TPS-04', name: 'TOPSIS', emoji: '🎯', type: 'Sıralama Aracı', diff: 2, time: '5', what: 'İdeal noktaya mesafeyi ölçer.', how: 'Euclidean mesafe algoritmasıyla en iyiyi bulur.', example: 'Mükemmel gemiye en yakın olanı şampiyon yapar.', when: ['Genel seçim senaryoları', 'Yatırım kıyaslama'], note: 'Karar biliminin en sağlam ve popüler aracıdır.' },
    { id: 'vikor', name: 'VIKOR', emoji: '🛡️', type: 'Uzlaşmacı Sıralama', diff: 4, time: '12', what: 'Minimum pişmanlığı hedefler.', how: 'Maksimum grup faydası optimizasyonu yapar.', example: 'Tüm paydaşları orta noktada en mutlu eden seçimi bulur.', when: ['Grup kararları', 'Yüksek riskli dönüşümler'], note: 'Hata lüksünüz yoksa bu protokole güvenin.' },
    { code: 'WAS-09', name: 'WASPAS', emoji: '💎', type: 'Hibrit Sıralama', diff: 5, time: '15', what: 'Ultra hassas sıralama yapar.', how: 'Toplamsal ve çarpımsal modellerin %99.4 birleşimidir.', example: 'En teknik ve akademik tutarlılık gerektiren seçimler.', when: ['Maksimum doğruluk ihtiyacı', 'Teknik satın almalar'], note: 'Hata payını matematiksel olarak imkansız kılar.' }
  ];

  const projects = [
    { id: '001', name: 'ARAÇ ALIMI', icon: <Car size={20} />, client: 'Bireysel', criteria: 5, alts: 4, weight: 'Entropy', rank: 'TOPSIS', result: 'Model B (%87)' },
    { id: '002', name: 'TEDARİKÇİ SEÇİMİ', icon: <Package size={20} />, client: 'Kurumsal', criteria: 8, alts: 12, weight: 'CRITIC', rank: 'MOORA', result: 'Supplier 4 (%92)' },
    { id: '003', name: 'YATIRIM KARARI', icon: <DollarSign size={20} />, client: 'Yatırımcı', criteria: 6, alts: 5, weight: 'AHP + AI', rank: 'VIKOR', result: 'Estate A (%84)' }
  ];

  const comparisonTable = [
    { need: 'Objektiflik', w: 'Entropy', r: 'TOPSIS', diff: 2, time: "5'", acc: 70 },
    { need: 'Çatışma Var', w: 'CRITIC', r: 'CODAS', diff: 3, time: "10'", acc: 85 },
    { need: 'Kişisel Önc.', w: 'AHP', r: 'VIKOR', diff: 4, time: "15'", acc: 80 },
    { need: 'Maks. Doğruluk', w: 'CRITIC', r: 'WASPAS', diff: 5, time: "12'", acc: 100 },
    { need: 'Hızlı Karar', w: 'CRITIC', r: 'MOORA', diff: 2, time: "5'", acc: 75 }
  ];

  return (
    <div className="blueprint-master blueprint-grid-bg fade-in" style={{ minHeight: '100vh', paddingBottom: '100px' }}>
      
      {/* Blueprint Header */}
      <nav style={{ padding: '25px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid var(--blueprint-primary)', background: 'var(--blueprint-bg)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div className="flex items-center gap-3">
          <Zap size={28} color="var(--blueprint-primary)" fill="var(--blueprint-primary)" />
          <span className="mono" style={{ fontWeight: 900, fontSize: '1.4rem', color: 'var(--blueprint-primary)' }}>THE BLUEPRINT 📐</span>
        </div>
        <button onClick={onBack} className="btn-elite btn-blueprint">
          <ChevronLeft size={18} /> HUB'A DÖN
        </button>
      </nav>

      <div className="container" style={{ maxWidth: '1200px' }}>
        <header style={{ textAlign: 'center', padding: '100px 0', borderBottom: '1px dashed var(--blueprint-primary)' }}>
           <h1 className="mono" style={{ fontSize: '4.5rem', fontWeight: 900, color: 'var(--blueprint-primary)', marginBottom: '20px' }}>THE BLUEPRINT</h1>
           <h2 className="technical" style={{ fontSize: '1.5rem', color: 'var(--blueprint-dark)', marginBottom: '40px', fontWeight: 700 }}>Her Büyük Karar Bir Plan ile Başlar</h2>
           <p className="mono" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 60px', opacity: 0.8, lineHeight: '1.6' }}>
             Arabadan tedarikçiye, yatırımdan personel seçimine - doğru kararın mimarisini birlikte çizelim. 
             Vestra Elite, belirsizliği teknik bir taslağa dönüştürür.
           </p>
           <div className="flex gap-4 justify-center">
              <button className="btn-elite btn-blueprint" style={{ padding: '15px 40px' }} onClick={onBack}>PLANIMI ÇİZ</button>
              <button className="btn-elite" style={{ border: '2px solid var(--blueprint-primary)', color: 'var(--blueprint-primary)', background: 'transparent' }}>DEMO İNCELE</button>
           </div>
        </header>

        {/* Quick Start */}
        <section style={{ padding: '100px 0' }}>
           <h3 className="mono" style={{ fontSize: '2rem', marginBottom: '60px', textAlign: 'center' }}>Planınızı 3 Adımda Çizin</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
              {[
                { step: '01', title: 'TEMELİ ATIN', icon: <Ruler />, desc: 'Alternatifleri ve kriterleri tanımlayın. Planınızın taşıyıcı kolonları!' },
                { step: '02', title: 'MİMARİYİ BELİRLEYİN', icon: <PenTool />, desc: 'Hangi araçlarla inşa edeceksiniz? Ağırlıklandırma + Sıralama.' },
                { step: '03', title: 'PLANI YORUMLAYIN', icon: <Target />, desc: 'Çizimler tamamlandı, karar net! Karşılaştırmalı analizi inceleyin.' }
              ].map((s, i) => (
                <div key={i} className="blueprint-border" style={{ padding: '30px', background: 'white' }}>
                   <div style={{ fontSize: '0.7rem', fontWeight: 900, marginBottom: '20px', opacity: 0.5 }}>ADIM {s.step} / {s.title}</div>
                   <div style={{ color: 'var(--blueprint-primary)', marginBottom: '20px' }}>{s.icon}</div>
                   <h4 className="mono" style={{ fontSize: '1.2rem', marginBottom: '15px' }}>{s.title}</h4>
                   <p style={{ fontSize: '0.9rem', color: 'var(--blueprint-dark)', lineHeight: '1.5' }}>{s.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Method Catalog */}
        <section style={{ padding: '100px 0' }}>
           <h3 className="mono" style={{ fontSize: '2rem', marginBottom: '60px', textAlign: 'center' }}>Çizim Araçları Kataloğu ⚒️</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
              {methods.map((m, i) => (
                <div key={i} className="blueprint-card" style={{ padding: '0' }}>
                   <div style={{ padding: '20px', borderBottom: '2px solid var(--blueprint-primary)', background: 'rgba(30, 64, 175, 0.05)', display: 'flex', justifyContent: 'space-between' }}>
                      <span className="mono" style={{ fontWeight: 900 }}>{m.name} {m.emoji}</span>
                      <div className="flex gap-1">
                        {[...Array(m.diff)].map((_, j) => <Star key={j} size={12} fill="var(--blueprint-primary)" color="var(--blueprint-primary)" />)}
                      </div>
                   </div>
                   <div style={{ padding: '25px' }}>
                      <div className="technical" style={{ fontSize: '0.7rem', marginBottom: '20px', opacity: 0.6 }}>TİP: {m.type} | SÜRE: ~{m.time} dk</div>
                      <div style={{ marginBottom: '20px' }}>
                         <p className="mono" style={{ fontSize: '0.8rem', fontWeight: 900, color: 'var(--blueprint-primary)' }}>📐 NE YAPAR?</p>
                         <p style={{ fontSize: '0.85rem' }}>{m.what}</p>
                      </div>
                      <div style={{ marginBottom: '20px' }}>
                         <p className="mono" style={{ fontSize: '0.8rem', fontWeight: 900, color: 'var(--blueprint-primary)' }}>🔍 NASIL ÇALIŞIR?</p>
                         <p style={{ fontSize: '0.85rem' }}>{m.how}</p>
                      </div>
                      <div style={{ padding: '15px', background: 'var(--blueprint-bg)', border: '1px dashed var(--blueprint-primary)', marginTop: '20px' }}>
                         <p className="technical" style={{ fontSize: '0.7rem', fontWeight: 900 }}>💡 MİMAR NOTU:</p>
                         <p style={{ fontSize: '0.85rem', fontStyle: 'italic' }}>"{m.note}"</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* Projects */}
        <section style={{ padding: '100px 0' }}>
           <h3 className="mono" style={{ fontSize: '2rem', marginBottom: '60px', textAlign: 'center' }}>Tamamlanmış Projeler 🏗️</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
              {projects.map((p, i) => (
                <div key={i} className="blueprint-border" style={{ background: 'white', padding: '0' }}>
                   <div style={{ padding: '15px 25px', borderBottom: '1px solid var(--blueprint-primary)', background: 'var(--blueprint-bg)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                      {p.icon}
                      <span className="mono" style={{ fontSize: '0.8rem', fontWeight: 900 }}>PROJE #{p.id}: {p.name}</span>
                   </div>
                   <div style={{ padding: '25px', fontSize: '0.8rem' }}>
                      <p style={{ marginBottom: '5px' }}><span className="technical">MÜŞTERİ:</span> {p.client}</p>
                      <p style={{ marginBottom: '5px' }}><span className="technical">YAPI:</span> {p.criteria} Kriter, {p.alts} Seçenek</p>
                      <div style={{ margin: '20px 0', padding: '15px', background: 'var(--blueprint-bg)', borderLeft: '3px solid var(--blueprint-primary)' }}>
                         <p className="mono" style={{ fontSize: '0.7rem', color: 'var(--blueprint-primary)', fontWeight: 900 }}>SEÇİLEN MİMARİ:</p>
                         <p className="technical">├─ {p.weight}</p>
                         <p className="technical">└─ {p.rank}</p>
                      </div>
                      <p style={{ fontWeight: 900, color: 'var(--blueprint-primary)' }}>SONUÇ: {p.result}</p>
                      <button className="btn-elite btn-blueprint" style={{ width: '100%', marginTop: '20px', padding: '10px', fontSize: '0.7rem', borderRadius: '0' }}>PLANI İNCELE</button>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* Comparison Table */}
        <section style={{ padding: '100px 0' }}>
           <h3 className="mono" style={{ fontSize: '2rem', marginBottom: '60px', textAlign: 'center' }}>Mimar Masası: Araç Karşılaştırma 📊</h3>
           <div className="blueprint-card" style={{ padding: '0', borderRadius: '0', overflow: 'hidden' }}>
              <table className="blueprint-table">
                 <thead>
                    <tr>
                       <th>İHTİYACINIZ</th>
                       <th>AĞIRLIK</th>
                       <th>SIRALAMA</th>
                       <th>ZORLUK</th>
                       <th>SÜRE</th>
                       <th>DOĞRULUK</th>
                    </tr>
                 </thead>
                 <tbody>
                    {comparisonTable.map((row, i) => (
                      <tr key={i}>
                         <td style={{ fontWeight: 900 }}>{row.need}</td>
                         <td className="technical">{row.w}</td>
                         <td className="technical">{row.r}</td>
                         <td>
                            <div className="flex gap-1">
                               {[...Array(row.diff)].map((_, j) => <Star key={j} size={10} fill="var(--blueprint-primary)" color="var(--blueprint-primary)" />)}
                            </div>
                         </td>
                         <td>{row.time}</td>
                         <td>
                            <div style={{ height: '8px', width: '100px', background: 'var(--blueprint-grid)', borderRadius: '10px', overflow: 'hidden' }}>
                               <div style={{ height: '100%', background: 'var(--blueprint-primary)', width: `${row.acc}%` }}></div>
                            </div>
                         </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </section>

      </div>

      <footer style={{ padding: '60px', textAlign: 'center', opacity: 0.5 }}>
         <p className="technical" style={{ fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.5em' }}>VESTRA ELITE - ARCHITECTURAL DECISION SCIENCE © 2026</p>
      </footer>
    </div>
  );
};

export default Blueprint;
