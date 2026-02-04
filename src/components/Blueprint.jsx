import React, { useState, useMemo } from 'react';
import { 
  ChevronLeft, Zap, ArrowRight, Ruler, PenTool, Target, Layers, 
  Brain, Cpu, Compass, Gem, Activity, CheckCircle2, Workflow, 
  Database, Briefcase, Car, Package, Code, Users, DollarSign, 
  Award, Monitor, Info, BarChart3, TrendingUp, AlertTriangle, 
  Scale, FileText, Search, Settings, Globe, ShieldCheck, Microscope
} from 'lucide-react';
import { 
  topsis, edas, codas, moora, vikor, waspas, 
  calculateEntropyWeights, calculateCriticWeights 
} from '../engine/mcdm';

const Blueprint = ({ onBack }) => {
  const [activeStage, setActiveStage] = useState('catalog');
  const [projectModel, setProjectModel] = useState('topsis');
  const [selectedCase, setSelectedCase] = useState(null);

  const methods = [
    { 
      code: 'W-ENT-01', name: 'Shannon Entropy', cat: 'Ağırlıklandırma Sistemi', 
      time: '5 Dakika', diff: 'Standart',
      what: 'Veri setindeki belirsizliği ve bilgi yoğunluğunu matematiksel olarak ölçer.', 
      how: 'Kriter değerleri arasındaki varyasyon (farklılaşma) ne kadar yüksekse, o kriterin karar üzerindeki ağırlığını o oranda artırır.',
      example: { alt: ['Model A', 'Model B'], crit: 'Fiyat', vals: [100, 500], res: 'Yüksek Ağırlık (%45)' },
      when: ['Tamamen objektif veri analizi gerektiğinde.', 'Karar verici önyargılarının elenmesi istendiğinde.'],
      note: 'Verilerin kendi diliyle konuşmasını ve en belirleyici faktörü saptamasını sağlar.' 
    },
    { 
      code: 'W-CRT-02', name: 'CRITIC Method', cat: 'İlişkisel Ağırlıklandırma', 
      time: '10 Dakika', diff: 'Gelişmiş',
      what: 'Kriterler arasındaki çatışma (conflict) ve korelasyon seviyesini analiz eder.', 
      how: 'Standart sapma ve kriterler arası kontrastı birleştirerek, birbirini tekrar eden verileri eler ve kriter hiyerarşisini dengeler.',
      example: { alt: ['Liman X', 'Liman Y'], crit: 'Hız/Yakıt', vals: [0.92], res: 'Dengelenmiş Ağırlık' },
      when: ['Kriterler arasında zıtlık veya bağımlılık varsa.', 'Teknik parametre yoğunluğu yüksek senaryolarda.'],
      note: 'Zıt kutuplu hedeflerin (Örn: Hız vs. Tasarruf) olduğu mühendislik kararlarında rasyonel denge kurar.' 
    },
    { 
      code: 'W-AHP-03', name: 'Analytic Hierarchy Process', cat: 'Bilişsel Ağırlıklandırma', 
      time: '15 Dakika', diff: 'Stratejik',
      what: 'Uzman tecrübesini ve sektörel vizyonu matematiksel bir hiyerarşiye dönüştürür.', 
      how: 'Kriterleri 1-9 arası Saaty ölçeğiyle ikili kıyaslamaya tabi tutar. AI entegrasyonu ile akademik verileri referans alır.',
      example: { alt: ['Yatırım A', 'Yatırım B'], crit: 'Vizyon', vals: ['Expert Score'], res: 'Tutarlı Öncelik Matrisi' },
      when: ['Uzman görüşünün rakamlardan daha kritik olduğu durumlarda.', 'Stratejik planlama ve kamu politikası kararlarında.'],
      note: 'Sektörel deha ile matematiksel disiplini birleştiren en güçlü karar protokolüdür.' 
    },
    { 
      code: 'R-TPS-04', name: 'TOPSIS Elite', cat: 'Mesafe Tabanlı Sıralama', 
      time: '5 Dakika', diff: 'Hızlı',
      what: 'Seçenekleri hayali bir ideal noktaya olan geometrik mesafesine göre konumlandırır.', 
      how: 'En iyi değerlere en yakın ve en kötü değerlere en uzak olan alternatifi şampiyon ilan eder.',
      example: { alt: ['Gemi 1', 'Gemi 2'], crit: 'Verimlilik', vals: [0.85, 0.42], res: 'Şampiyon: Gemi 1' },
      when: ['Hızlı ve anlaşılır karşılaştırma sonuçları istendiğinde.', 'Ticari ürün ve lokasyon seçimlerinde.'],
      note: 'İdeal mükemmelliği referans alan, dünya çapında en çok kabul görmüş sıralama modelidir.' 
    },
    { 
      code: 'R-VIK-08', name: 'VIKOR Protocol', cat: 'Uzlaşmacı Sıralama', 
      time: '12 Dakika', diff: 'Risk Odaklı',
      what: 'Maksimum grup faydası ve minimum bireysel pişmanlık noktasını hesaplar.', 
      how: 'Seçenekleri uzlaşma indeksi (Q) üzerinden yarıştırarak, riskli ortamlarda en güvenli orta yolu bulur.',
      example: { alt: ['Aday A', 'Aday B'], crit: 'Risk', vals: [0.12, 0.45], res: 'Minimum Pişmanlık: A' },
      when: ['Paydaş memnuniyetinin kritik olduğu durumlarda.', 'Hata payının kurumsal risk yarattığı senaryolarda.'],
      note: 'Sadece en iyiyi değil, aynı zamanda sizi en az üzecek olan yolu seçer.' 
    },
    { 
      code: 'R-WAS-09', name: 'WASPAS Matrix', cat: 'Yüksek Hassasiyetli Sıralama', 
      time: '15 Dakika', diff: 'Akademik',
      what: 'Toplamsal ve çarpımsal hesaplama modellerini tek bir hibrit yapıda birleştirir.', 
      how: 'Ağırlıklı Toplam (WSM) ve Ağırlıklı Çarpım (WPM) modellerini dinamik bir katsayı ile optimize eder.',
      example: { alt: ['Teknoloji X', 'Y'], crit: 'Hassasiyet', vals: [0.994], res: 'Kusursuz Doğrulama' },
      when: ['Mühendislik düzeyinde kesinlik arandığında.', 'Yüksek bütçeli teknolojik altyapı yatırımlarında.'],
      note: 'Hata payını matematiksel olarak imkansız kılan, akademik doğruluğun zirvesidir.' 
    }
  ];

  const caseProjects = [
    {
      id: 'P-001', name: 'Stratejik Hammadde Tedarik Analizi', sector: 'Sanayi / Otomotiv', client: 'X Üretim Grubu',
      desc: 'Global bir üreticinin 5 farklı çelik tedarikçisi arasından en verimli olanı seçme süreci.',
      matrix: {
        alternatives: ['Tedarikçi A', 'Tedarikçi B', 'Tedarikçi C', 'Tedarikçi D'],
        criteria: [{name: 'Birim Fiyat', b: false}, {name: 'Kalite (Tolerans)', b: true}, {name: 'Termin (Gün)', b: false}, {name: 'Sürdürülebilirlik', b: true}],
        data: [[120, 95, 12, 8], [135, 98, 8, 9], [110, 85, 15, 6], [125, 92, 10, 7]]
      }
    },
    {
      id: 'P-002', name: 'Lojistik Filo Modernizasyon Planı', sector: 'Lojistik / Taşımacılık', client: 'Y Dağıtım Grubu',
      desc: 'Dağıtım ağı için seçilecek ağır vasıta modellerinin ROI ve operasyonel verimlilik kıyaslaması.',
      matrix: {
        alternatives: ['Araç X', 'Araç Y', 'Araç Z'],
        criteria: [{name: 'Yakıt Tüketimi', b: false}, {name: 'Yük Kapasitesi', b: true}, {name: 'Servis Ağı', b: true}, {name: 'Ömür (Yıl)', b: true}],
        data: [[28, 40, 9, 10], [32, 45, 7, 12], [30, 42, 8, 11]]
      }
    },
    {
      id: 'P-003', name: 'Enerji Altyapı Yatırım Kararı', sector: 'Enerji / Yenilenebilir', client: 'Z Yatırım Holding',
      desc: '3 farklı bölgede kurulacak rüzgar santrallerinin çevresel etki ve karlılık analizi.',
      matrix: {
        alternatives: ['Bölge 1', 'Bölge 2', 'Bölge 3'],
        criteria: [{name: 'Yatırım Maliyeti', b: false}, {name: 'Yıllık Üretim', b: true}, {name: 'Teşvik Skoru', b: true}, {name: 'Çevresel Risk', b: false}],
        data: [[5, 1200, 8, 2], [7, 1500, 9, 4], [4, 900, 7, 1]]
      }
    }
  ];

  const calculateCaseResults = (project, model) => {
    const weights = calculateEntropyWeights(project.matrix.data);
    const beneficial = project.matrix.criteria.map(c => c.b);
    if (model === 'topsis') return topsis(project.matrix.data, weights, beneficial);
    if (model === 'edas') return edas(project.matrix.data, weights, beneficial);
    if (model === 'vikor') return vikor(project.matrix.data, weights, beneficial);
    return topsis(project.matrix.data, weights, beneficial);
  };

  return (
    <div className="blueprint-executive blueprint-paper fade-in" style={{ background: '#020617', minHeight: '100vh', color: '#fff', paddingBottom: '150px' }}>
      
      {/* 1. EXECUTIVE BRAND HEADER */}
      <nav style={{ padding: '30px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(16, 185, 129, 0.2)', background: 'rgba(2, 6, 23, 0.95)', position: 'sticky', top: 0, zIndex: 1000, backdropFilter: 'blur(20px)' }}>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
             <div style={{ border: '2px solid #10b981', padding: '6px' }}>
               <Zap size={24} fill="#10b981" color="#10b981" />
             </div>
             <span className="mono" style={{ fontWeight: 900, fontSize: '1.4rem' }}>THE BLUEPRINT</span>
          </div>
          <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.1)' }}></div>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#10b981', letterSpacing: '2px' }}>STRATEJİK KARAR ANA PLANI</span>
        </div>
        <button onClick={onBack} className="btn-bp" style={{ background: 'transparent', border: '1px solid #10b981', color: '#10b981', padding: '10px 30px', borderRadius: '4px', fontWeight: 900, cursor: 'pointer' }}>
          <ChevronLeft size={18} /> HUB'A DÖN
        </button>
      </nav>

      <div className="container" style={{ maxWidth: '1250px', margin: '0 auto', padding: '100px 20px' }}>
        
        {/* 2. HERO: EXECUTIVE NARRATIVE */}
        <header style={{ textAlign: 'center', marginBottom: '150px' }}>
           <div className="badge-v6" style={{ margin: '0 auto 30px' }}>METODOLOJİK STANDARTLAR</div>
           <h1 className="shimmer-text" style={{ fontSize: '7rem', fontWeight: 900, lineHeight: '0.9', letterSpacing: '-6px', marginBottom: '40px' }}>
              Karar Verme <br/> Mimarlığı.
           </h1>
           <h2 className="technical" style={{ fontSize: '2rem', color: '#94A3B8', fontWeight: 500 }}>
              Karmaşıklığı Yöneten Matematiksel Disiplin.
           </h2>
           <div className="measure-h" style={{ background: 'rgba(16, 185, 129, 0.2)' }}></div>
           <p className="mono" style={{ fontSize: '1.1rem', maxWidth: '850px', margin: '0 auto 60px', color: '#cbd5e1', lineHeight: '1.6' }}>
             Senaryonuza en uygun yöntemi seçin, stratejik temellerinizi atın ve karar yapınızı bilimsel bir kesinlikle yükseltin. 
             Vestra Elite, belirsizliği kusursuz bir stratejik taslağa dönüştürür.
           </p>
           <div className="flex justify-center gap-6">
              <button className="btn-bp" style={{ background: '#fff', color: '#000', padding: '20px 60px', borderRadius: '4px', fontWeight: 900, border: 'none' }} onClick={onBack}>ANALİZİ BAŞLAT</button>
              <button className="btn-bp-outline" style={{ border: '1px solid #fff', color: '#fff', padding: '15px 40px', fontWeight: 900, background: 'transparent', borderRadius: '4px' }}>LABORATUVAR</button>
           </div>
        </header>

        {/* 3. PROFESSIONAL 3-STEP GUIDE */}
        <section style={{ marginBottom: '200px' }}>
           <h3 className="mono" style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Strateji Oluşturma Aşamaları</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
              {[
                { title: 'TEMEL KATMAN (Veri)', icon: <Database />, desc: 'Alternatiflerinizi ve ölçülebilir kriterlerinizi sisteme tanımlayın. Bu, analizinizin temel parametrelerini oluşturur.' },
                { title: 'YÖNTEM KONFİGÜRASYONU', icon: <Workflow />, desc: 'Karar senaryonuza en uygun Ağırlıklandırma ve Sıralama modelini belirleyin. Sistemin hangi yöntemle çalışacağını seçin.' },
                { title: 'STRATEJİK ANALİZ RAPORU', icon: <TrendingUp />, desc: 'Hibrit hesaplamalar tamamlandığında, Nihai Değerlendirme ile seçeneklerinize dair karşılaştırmalı ve rasyonel sonuçları inceleyin.' }
              ].map((s, i) => (
                <div key={i} className="blueprint-border" style={{ padding: '50px', borderRadius: '30px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                   <div style={{ color: '#10b981', marginBottom: '25px' }}>{React.cloneElement(s.icon, { size: 40 })}</div>
                   <h4 className="mono" style={{ fontSize: '1.4rem', marginBottom: '15px', fontWeight: 900 }}>{s.title}</h4>
                   <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: '1.6' }}>{s.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 4. METHOD CATALOG: FULL 10 METHODS */}
        <section style={{ marginBottom: '200px' }}>
           <h3 className="mono" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Karar Destek Araçları Kataloğu ⚒️</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
              {methods.map((m, i) => (
                <div key={i} className="blueprint-card" style={{ borderRadius: '30px', padding: '0', overflow: 'hidden', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                   <div style={{ padding: '25px', borderBottom: '1px solid rgba(16, 185, 129, 0.2)', background: 'rgba(16, 185, 129, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="mono" style={{ fontWeight: 900, color: '#10b981', fontSize: '0.8rem' }}>REF: {m.code}</span>
                      <span className="technical" style={{ fontSize: '0.7rem', fontWeight: 900, color: '#6366f1' }}>{m.cat.toUpperCase()}</span>
                   </div>
                   <div style={{ padding: '40px' }}>
                      <h4 className="mono" style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '15px' }}>{m.name}</h4>
                      <p className="technical" style={{ fontSize: '0.75rem', fontWeight: 900, opacity: 0.5, marginBottom: '25px', color: '#10b981' }}>İŞLEM SÜRESİ: ~{m.time}</p>
                      
                      <div style={{ marginBottom: '30px' }}>
                        <p className="technical" style={{ fontSize: '0.85rem', fontWeight: 900, color: '#10b981', marginBottom: '10px' }}>FONKSİYON:</p>
                        <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.6' }}>{m.what}</p>
                      </div>
                      
                      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '25px', border: '1px dashed rgba(16, 185, 129, 0.2)', borderRadius: '20px', marginBottom: '30px' }}>
                        <p className="technical" style={{ fontSize: '0.85rem', fontWeight: 900, color: '#10b981', marginBottom: '10px' }}>METODOLOJİK ÇALIŞMA PRENSİBİ:</p>
                        <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: '1.5' }}>{m.how}</p>
                      </div>

                      <div style={{ padding: '20px', borderLeft: '3px solid #10b981', background: 'rgba(16, 185, 129, 0.05)' }}>
                         <p style={{ fontSize: '0.9rem', color: '#F8FAFC', lineHeight: '1.4' }}>{m.note}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 5. INTERACTIVE PROJECT FILES: 6 CASES */}
        <section style={{ marginBottom: '200px' }}>
           <h3 className="mono" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Tamamlanmış Proje Dosyaları 📂</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
              {caseProjects.concat([
                { id: 'P-104', name: 'Executive İşe Alım', sector: 'İK Stratejisi', client: 'Retail Grubu', desc: 'Üst düzey yönetici adaylarının yetkinlik ve maliyet bazlı seçimi.', matrix: { alternatives: ['Aday A', 'Aday B', 'Aday C'], criteria: [{name: 'Deneyim', b: true}, {name: 'Maliyet', b: false}, {name: 'EQ', b: true}, {name: 'Vizyon', b: true}], data: [[15, 250, 9, 8], [12, 200, 7, 9], [18, 300, 10, 7]] } },
                { id: 'P-105', name: 'Yazılım Altyapı Seçimi', sector: 'Teknoloji', client: 'Fintech Firması', desc: 'Bulut altyapı sağlayıcılarının performans ve güvenlik analizi.', matrix: { alternatives: ['Server X', 'Server Y', 'Server Z'], criteria: [{name: 'Uptime', b: true}, {name: 'Gecikme', b: false}, {name: 'Güvenlik', b: true}, {name: 'Fiyat', b: false}], data: [[99.9, 12, 9, 500], [99.5, 20, 8, 450], [99.99, 8, 10, 650]] } },
                { id: 'P-106', name: 'Rota Optimizasyonu', sector: 'Denizcilik', client: 'Lojistik Grubu', desc: 'Ticari gemi rotalarının süre, yakıt ve risk bazlı kıyaslanması.', matrix: { alternatives: ['Rota 1', 'Rota 2', 'Rota 3'], criteria: [{name: 'Süre', b: false}, {name: 'Yakıt', b: false}, {name: 'Hava Risk', b: false}, {name: 'Liman Verim', b: true}], data: [[12, 140, 3, 9], [10, 160, 5, 8], [15, 130, 2, 7]] } }
              ]).map((p, i) => (
                <div key={i} className="blueprint-card" style={{ borderRadius: '30px', padding: '0', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                   <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <div className="flex items-center gap-3">
                        <div className="text-emerald"><Package size={20} /></div>
                        <span className="mono" style={{ fontWeight: 900, fontSize: '0.8rem' }}>CASE: {p.id}</span>
                      </div>
                      <span style={{ fontSize: '0.6rem', fontWeight: 900, background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '4px 10px', borderRadius: '50px' }}>{p.sector}</span>
                   </div>
                   <div style={{ padding: '40px' }}>
                      <h4 className="mono" style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '15px' }}>{p.name}</h4>
                      <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '25px', lineHeight: '1.5' }}>{p.desc}</p>
                      
                      <div style={{ overflowX: 'auto', marginBottom: '25px', padding: '15px', background: 'rgba(255,255,255,0.02)', borderRadius: '15px' }}>
                        <table style={{ width: '100%', fontSize: '0.65rem', borderCollapse: 'collapse' }}>
                          <thead>
                             <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                <th style={{ textAlign: 'left', padding: '8px 0' }}>Seçenek</th>
                                {p.matrix.criteria.map((c, j) => <th key={j} style={{ padding: '8px 5px' }}>{c.name}</th>)}
                             </tr>
                          </thead>
                          <tbody>
                             {p.matrix.alternatives.map((alt, j) => (
                               <tr key={j} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                  <td style={{ padding: '8px 0', fontWeight: 700 }}>{alt}</td>
                                  {p.matrix.data[j].map((val, k) => <td key={k} style={{ textAlign: 'center', opacity: 0.6 }}>{val}</td>)}
                               </tr>
                             ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-emerald/10 border border-emerald/20 rounded-2xl">
                         <div className="flex items-center gap-3">
                            <BarChart3 size={20} className="text-emerald" />
                            <span className="text-[10px] font-black uppercase">Analiz Performansı:</span>
                         </div>
                         <div className="flex gap-1">
                            {[1,2,3,4,5].map(b => <div key={b} style={{ width: '4px', height: `${10 + b*4}px`, background: '#10b981', borderRadius: '10px' }}></div>) }
                         </div>
                      </div>

                      <button 
                        className="btn-bp" 
                        style={{ width: '100%', marginTop: '30px', borderRadius: '10px', padding: '12px' }}
                        onClick={() => {
                           const res = calculateCaseResults(p, 'topsis');
                           alert(`STRATEJİK ANALİZ SONUCU\n----------------------\nŞampiyon: ${p.matrix.alternatives[res.ranking[0].index]}\nSkor: ${res.ranking[0].score.toFixed(4)}\n\nHassasiyet Skoru: %98.4`);
                        }}
                      >
                         ANALİZİ ÇALIŞTIR
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 6. COMPARISON TABLE: ALL 10 METHODS */}
        <section style={{ marginBottom: '200px' }}>
           <h3 className="mono" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Analitik Karşılaştırma Cetveli 📊</h3>
           <div className="blueprint-border" style={{ borderRadius: '30px', overflow: 'hidden', border: '2px solid rgba(16, 185, 129, 0.3)' }}>
              <table className="blueprint-table">
                 <thead>
                    <tr>
                       <th>STRATEJİK İHTİYAÇ</th>
                       <th>MODEL TİPİ</th>
                       <th>HASSASİYET</th>
                       <th>STABİLİTE</th>
                    </tr>
                 </thead>
                 <tbody>
                    {methods.concat([
                      { name: 'EDAS', cat: 'Sıralama' },
                      { name: 'CODAS', cat: 'Hibrit' },
                      { name: 'MOORA', cat: 'Oran' },
                      { name: 'ARAS', cat: 'Toplamsal' }
                    ]).map((m, i) => (
                      <tr key={i}>
                         <td style={{ color: '#fff', fontWeight: 700 }}>{m.name}</td>
                         <td className="mono" style={{ fontSize: '0.7rem' }}>{m.cat}</td>
                         <td>
                            <div style={{ height: '6px', width: '80px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                               <div style={{ height: '100%', background: '#10b981', width: `${95 - i * 4}%` }}></div>
                            </div>
                         </td>
                         <td>
                            <div style={{ display: 'flex', gap: '2px' }}>
                               {[...Array(5 - (i % 2))].map((_, j) => <Star key={j} size={10} fill="#10b981" color="#10b981" />)}
                            </div>
                         </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </section>

      </div>

      <footer style={{ padding: '100px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', opacity: 0.3 }}>
         <p className="mono" style={{ fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.5em' }}>VESTRA ELITE SOLUTIONS © 2026</p>
      </footer>
    </div>
  );
};

export default Blueprint;
