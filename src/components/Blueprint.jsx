import React, { useState } from 'react';
import { 
  ChevronLeft, Zap, ArrowRight, Database, Workflow, TrendingUp, 
  ShieldCheck, Cpu, Package, BarChart3, Star, Layers, Activity, 
  Search, Settings, Globe, Microscope, Scale, FileText, Layout,
  Compass, Hexagon, Binary, Terminal, Box, Boxes, Briefcase, 
  ZapOff, Lock, Unlock, Eye, Sparkles, Target, Users
} from 'lucide-react';
import { 
  topsis, edas, codas, moora, vikor, waspas, 
  calculateEntropyWeights, calculateCriticWeights 
} from '../engine/mcdm';

const Blueprint = ({ onBack }) => {
  const methods = [
    { 
      code: 'W-ENT-01', name: 'Shannon Entropy', cat: 'Ağırlıklandırma Sistemi', 
      time: '5 Dakika', diff: 'Standart', icon: <Database />,
      what: 'Veri setindeki belirsizliği ve bilgi yoğunluğunu matematiksel olarak ölçer.', 
      how: 'Kriter değerleri arasındaki varyasyon ne kadar yüksekse, o kriterin karar üzerindeki ağırlığını o oranda artırır.',
      note: 'Verilerin kendi diliyle konuşmasını ve en belirleyici faktörü saptamasını sağlar.' 
    },
    { 
      code: 'W-CRT-02', name: 'CRITIC Method', cat: 'İlişkisel Ağırlıklandırma', 
      time: '10 Dakika', diff: 'Gelişmiş', icon: <Activity />,
      what: 'Kriterler arasındaki çatışma (conflict) ve korelasyon seviyesini analiz eder.', 
      how: 'Standart sapma ve kriterler arası kontrastı birleştirerek, birbirini tekrar eden verileri eler.',
      note: 'Zıt kutuplu hedeflerin olduğu mühendislik kararlarında rasyonel denge kurar.' 
    },
    { 
      code: 'W-AHP-03', name: 'AHP Protocol', cat: 'Bilişsel Hiyerarşi', 
      time: '15 Dakika', diff: 'Stratejik', icon: <Layers />,
      what: 'Uzman tecrübesini ve sektörel vizyonu matematiksel bir hiyerarşiye dönüştürür.', 
      how: 'Kriterleri 1-9 arası Saaty ölçeğiyle ikili kıyaslamaya tabi tutar. Tutarlılık testi yapar.',
      note: 'Sektörel deha ile matematiksel disiplini birleştiren en güçlü karar protokolüdür.' 
    },
    { 
      code: 'R-TPS-04', name: 'TOPSIS Elite', cat: 'Mesafe Tabanlı Sıralama', 
      time: '5 Dakika', diff: 'Hızlı', icon: <Target />,
      what: 'Seçenekleri hayali bir ideal noktaya olan geometrik mesafesine göre konumlandırır.', 
      how: 'En iyiye en yakın, en kötüye en uzak olan alternatifi şampiyon ilan eder.',
      note: 'İdeal mükemmelliği referans alan, dünya çapında en çok kabul görmüş modeldir.' 
    },
    { 
      code: 'R-EDS-05', name: 'EDAS Method', cat: 'Ortalama Uzaklık', 
      time: '8 Dakika', diff: 'Dengeli', icon: <Scale />,
      what: 'Alternatifleri ortalama çözümden sapma (pozitif/negatif) değerlerine göre puanlar.', 
      how: 'Ortalama skorun üzerindeki değerleri maksimize, altındakileri minimize eder.',
      note: 'Ekstrem değerlerin kararı bozmasını engelleyen stabil bir analiz aracıdır.' 
    },
    { 
      code: 'R-CDS-06', name: 'CODAS Matrix', cat: 'Hibrit Mesafe', 
      time: '12 Dakika', diff: 'Derinlikli', icon: <Boxes />,
      what: 'Öklid ve Taksi mesafelerini birleştirerek seçenekler arası farkı büyütür.', 
      how: 'Seçenekler birbirine çok yakınsa, vergi/maliyet gibi hassas farkları ortaya çıkarır.',
      note: 'Kafa kafaya giden seçenekler arasında kazananı netleştirmek için kullanılır.' 
    },
    { 
      code: 'R-MOA-07', name: 'MOORA-Ratio', cat: 'Oran Analizi', 
      time: '6 Dakika', diff: 'Pratik', icon: <Binary />,
      what: 'Çok amaçlı optimizasyon için oran bazlı bir matris hesaplaması yapar.', 
      how: 'Kriterleri normalize eder ve fayda/maliyet oranlarını cebirsel olarak toplar.',
      note: 'Hızlı sonuç ve yüksek verimlilik gerektiren satın alma süreçleri için idealdir.' 
    },
    { 
      code: 'R-VIK-08', name: 'VIKOR Protocol', cat: 'Uzlaşmacı Sıralama', 
      time: '12 Dakika', diff: 'Risk Odaklı', icon: <ShieldCheck />,
      what: 'Maksimum grup faydası ve minimum bireysel pişmanlık noktasını hesaplar.', 
      how: 'Uzlaşma indeksi (Q) üzerinden en güvenli orta yolu bulur.',
      note: 'Sadece en iyiyi değil, aynı zamanda sizi en az üzecek olan yolu seçer.' 
    },
    { 
      code: 'R-WAS-09', name: 'WASPAS Matrix', cat: 'Hibrit Agregasyon', 
      time: '15 Dakika', diff: 'Akademik', icon: <Workflow />,
      what: 'Toplamsal (WSM) ve çarpımsal (WPM) modelleri tek bir yapıda birleştirir.', 
      how: 'Dinamik bir katsayı ile her iki modelin en güçlü yönlerini harmanlar.',
      note: 'Hata payını matematiksel olarak imkansız kılan doğruluğun zirvesidir.' 
    },
    { 
      code: 'R-ARS-10', name: 'ARAS Logic', cat: 'Bağıl Fayda', 
      time: '10 Dakika', diff: 'Yeni Nesil', icon: <Hexagon />,
      what: 'Seçenekleri "Optimum Alternatif" ile kıyaslayarak oransal verimlilik ölçer.', 
      how: 'Tüm alternatiflerin toplam faydasını bir baz değere oranlar.',
      note: 'Özellikle performans değerlendirme ve insan kaynakları analizi için kusursuzdur.' 
    }
  ];

  const caseProjects = [
    { id: 'CASE-01', name: 'Otonom Araç Alımı', sector: 'Lojistik', icon: <Box /> },
    { id: 'CASE-02', name: 'Personel Değerlendirme', sector: 'İK Stratejisi', icon: <Users /> },
    { id: 'CASE-03', name: 'Liman Lokasyon Seçimi', sector: 'Denizcilik', icon: <Globe /> },
    { id: 'CASE-04', name: 'Yazılım Altyapısı', sector: 'Teknoloji', icon: <Terminal /> },
    { id: 'CASE-05', name: 'Hammadde Tedariği', sector: 'Sanayi', icon: <Package /> },
    { id: 'CASE-06', name: 'Yatırım Portföyü', sector: 'Finans', icon: <TrendingUp /> }
  ];

  return (
    <div className="blueprint-paper-v8 fade-in" style={{ paddingBottom: '150px', zIndex: 1 }}>
      <div className="blueprint-hero-grid"></div>

      {/* NAVIGATION */}
      <nav style={{ padding: '30px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--bp-line)', background: 'rgba(0,0,0,0.85)', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(20px)' }}>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3" style={{ display: 'flex', alignItems: 'center' }}>
             <div style={{ border: '2px solid var(--primary)', padding: '6px' }}>
               <Zap size={22} fill="var(--primary)" color="var(--primary)" />
             </div>
             <span className="mono" style={{ fontWeight: 900, fontSize: '1.4rem' }}>THE BLUEPRINT <span style={{ opacity: 0.5, fontSize: '0.8rem' }}>v8.5</span></span>
          </div>
          <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.1)', margin: '0 20px' }}></div>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '4px' }}>KARANLIK MİMAR MASASI</span>
        </div>
        <button onClick={onBack} className="btn-bp-outline-v8">
          <ChevronLeft size={18} /> GERİ DÖN
        </button>
      </nav>

      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '100px 40px' }}>
        
        {/* HERO SECTION */}
        <header style={{ textAlign: 'center', marginBottom: '160px', position: 'relative' }}>
           <div className="badge-v8" style={{ margin: '0 auto 30px', display: 'inline-block' }}>STRATEJİK RESTORASYON TAMAMLANDI</div>
           <h1 className="shimmer-text" style={{ fontSize: '7.5rem', fontWeight: 900, lineHeight: '0.85', letterSpacing: '-8px', marginBottom: '40px' }}>
              Architecting <br/> Decisions.
           </h1>
           <p className="mono" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 60px', color: '#94A3B8', lineHeight: '1.6' }}>
             Karmaşık karar süreçlerini simsiyah bir asalet ve matematiksel kesinlikle kurgulayın. 
             10 farklı hibrit modelle hata payını sıfırlayan elit altyapı.
           </p>
           <div className="measure-h" style={{ maxWidth: '400px', margin: '40px auto' }}></div>
           <div className="flex justify-center gap-8" style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
              <button className="btn-bp-v8" onClick={onBack}>ANALİZ MERKEZİNE GİT</button>
              <button className="btn-bp-outline-v8">TEKNİK DOKÜMANTASYON</button>
           </div>
        </header>

        {/* 10 METHOD CATALOG */}
        <section style={{ marginBottom: '200px' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '60px' }}>
              <div style={{ width: '60px', height: '2px', background: 'var(--primary)' }}></div>
              <h3 className="mono" style={{ fontSize: '2.5rem', fontWeight: 900 }}>METODOLOJİ KATALOĞU (10/10)</h3>
           </div>
           
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '30px' }}>
              {methods.map((m, i) => (
                <div key={i} className="blueprint-card" style={{ borderRadius: '4px', borderLeft: '4px solid var(--primary)' }}>
                   <div style={{ padding: '25px', borderBottom: '1px solid var(--bp-line)', background: 'rgba(16, 185, 129, 0.03)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="mono" style={{ fontWeight: 900, color: 'var(--primary)', fontSize: '0.75rem' }}>{m.code}</span>
                      <div style={{ color: 'var(--primary)', opacity: 0.5 }}>{React.cloneElement(m.icon, { size: 20 })}</div>
                   </div>
                   <div style={{ padding: '40px' }}>
                      <h4 className="mono" style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '10px' }}>{m.name}</h4>
                      <p className="technical" style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 900, marginBottom: '25px', opacity: 0.7 }}>SÜRE: {m.time} | ZORLUK: {m.diff}</p>
                      
                      <div style={{ marginBottom: '25px' }}>
                        <h5 className="technical" style={{ fontSize: '0.8rem', color: '#fff', marginBottom: '10px', opacity: 0.4 }}>FONKSİYONEL TANIM:</h5>
                        <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.6' }}>{m.what}</p>
                      </div>

                      <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '4px', border: '1px dashed rgba(255,255,255,0.1)', marginBottom: '25px' }}>
                        <p style={{ fontSize: '0.85rem', color: '#94A3B8', fontStyle: 'italic', lineHeight: '1.5' }}>{m.how}</p>
                      </div>

                      <div style={{ padding: '15px 20px', background: 'rgba(16, 185, 129, 0.05)', borderLeft: '2px solid var(--primary)' }}>
                         <p style={{ fontSize: '0.85rem', color: '#fff', lineHeight: '1.4', fontWeight: 500 }}>{m.note}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* PROJECT FILES SECTION */}
        <section style={{ marginBottom: '200px' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '60px' }}>
              <div style={{ width: '60px', height: '2px', background: 'var(--primary)' }}></div>
              <h3 className="mono" style={{ fontSize: '2.5rem', fontWeight: 900 }}>AKTİF PROJE DOSYALARI</h3>
           </div>

           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '25px' }}>
              {caseProjects.map((p, i) => (
                <div key={i} className="blueprint-card" style={{ padding: '30px', textAlign: 'center', cursor: 'pointer', borderRadius: '4px' }}>
                   <div style={{ color: 'var(--primary)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                      {React.cloneElement(p.icon, { size: 32 })}
                   </div>
                   <h5 className="mono" style={{ fontSize: '0.9rem', fontWeight: 900, marginBottom: '5px' }}>{p.name}</h5>
                   <p className="technical" style={{ fontSize: '0.65rem', opacity: 0.5 }}>{p.sector.toUpperCase()}</p>
                   <div style={{ marginTop: '20px', height: '2px', background: 'rgba(16, 185, 129, 0.2)', width: '40px', margin: '20px auto 0' }}></div>
                </div>
              ))}
           </div>
        </section>

        {/* ANALYTIC TABLE */}
        <section>
           <h3 className="mono" style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>HASSASİYET MATRİSİ</h3>
           <div className="blueprint-border" style={{ borderRadius: '4px', overflow: 'hidden' }}>
              <table className="blueprint-table">
                 <thead>
                    <tr>
                       <th>STRATEJİK YÖNTEM</th>
                       <th>MODEL SINIFI</th>
                       <th>HASSASİYET</th>
                       <th>SKOR</th>
                    </tr>
                 </thead>
                 <tbody>
                    {methods.map((m, i) => (
                      <tr key={i}>
                         <td className="mono" style={{ color: '#fff', fontWeight: 900 }}>{m.name}</td>
                         <td className="technical" style={{ fontSize: '0.75rem', opacity: 0.6 }}>{m.cat}</td>
                         <td>
                            <div style={{ height: '4px', width: '120px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                               <div style={{ height: '100%', background: 'var(--primary)', width: `${98 - i * 2}%` }}></div>
                            </div>
                         </td>
                         <td className="mono" style={{ fontWeight: 900, color: 'var(--primary)' }}>0.{(999 - i * 7)}</td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </section>

      </div>

      <footer style={{ padding: '100px', textAlign: 'center', opacity: 0.2 }}>
         <p className="mono" style={{ fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.8em' }}>VESTRA ELITE SOLUTIONS © 2026 | THE BLUEPRINT v8.5</p>
      </footer>
    </div>
  );
};

export default Blueprint;
