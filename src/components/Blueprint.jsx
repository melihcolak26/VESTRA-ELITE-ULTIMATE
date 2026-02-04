import React, { useState, useMemo } from 'react';
import { 
  ChevronLeft, Zap, ArrowRight, Ruler, PenTool, Target, Layers, 
  Brain, Cpu, Compass, Gem, ShieldCheck, Activity, 
  CheckCircle2, Workflow, Database, Briefcase, Car, Package, 
  Code, Users, DollarSign, Layout, Scale, TrendingUp, Info
} from 'lucide-react';
import { topsis, edas, codas, moora, vikor, waspas, calculateEntropyWeights, calculateCriticWeights } from '../engine/mcdm';

const Blueprint = ({ onBack }) => {
  const [activeProject, setActiveProject] = useState(null);
  const [projectModel, setProjectModel] = useState('topsis');

  const methods = [
    { 
      code: 'W-ENT', name: 'Shannon Entropy', cat: 'Ağırlıklandırma',
      what: 'Veri setindeki belirsizlik ve varyasyonu analiz eder.', 
      how: 'Kriter değerleri arasındaki dağılımı ölçer; varyasyonun en yüksek olduğu kriteri, karar üzerindeki en etkili sinyal olarak belirler.',
      note: 'Duygulardan arındırılmış, tamamen veriye dayalı bir önem sırası oluşturmak için temel araçtır.' 
    },
    { 
      code: 'W-CRT', name: 'CRITIC Method', cat: 'Ağırlıklandırma',
      what: 'Kriterler arasındaki çatışmayı ve yoğunluğu ölçer.', 
      how: 'Standart sapma ve korelasyon analizini birleştirerek, birbirini tekrar eden bilgileri eler ve kriterler arası dengeyi sağlar.',
      note: 'Zıt kutuplu teknik parametrelerin yönetilmesi gereken mühendislik kararlarında vazgeçilmezdir.' 
    },
    { 
      code: 'W-AHP', name: 'AHP Protocol', cat: 'Ağırlıklandırma',
      what: 'Hiyerarşik uzman görüşünü matematiksel matrise döker.', 
      how: 'Kriterleri ikili kıyaslama ölçeği (1-9) üzerinden değerlendirir. Kimi AI entegrasyonu ile sektörel verileri uzman görüşüyle harmanlar.',
      note: 'Stratejik vizyon ve sektörel tecrübenin, rakamların önüne geçtiği kritik kararlarda kullanılır.' 
    },
    { 
      code: 'R-TPS', name: 'TOPSIS Elite', cat: 'Sıralama',
      what: 'İdeal çözüme en yakın noktayı geometrik olarak bulur.', 
      how: 'Pozitif-ideal ve negatif-ideal hayali noktalar oluşturur; seçeneklerin bu noktalara olan Euclidean mesafelerini hesaplayarak en stabil tercihi sunar.',
      note: 'Karar biliminin en popüler ve çok yönlü sıralama algoritmasıdır.' 
    },
    { 
      code: 'R-VIK', name: 'VIKOR Protocol', cat: 'Sıralama',
      what: 'Uzlaşmacı çözüm ve minimum pişmanlık odaklıdır.', 
      how: 'Maksimum grup faydası ve minimum bireysel üzüntü noktasına odaklanarak, riskli ortamlarda en güvenli orta yolu bulur.',
      note: 'Hata toleransı düşük olan yüksek riskli kurumsal dönüşüm süreçleri için idealdir.' 
    },
    { 
      code: 'R-WAS', name: 'WASPAS Matrix', cat: 'Sıralama',
      what: 'Toplamsal ve çarpımsal modellerin %99.4 hassasiyetli hibritidir.', 
      how: 'Ağırlıklı Toplam Modeli (WSM) ile Ağırlıklı Çarpım Modeli\'ni (WPM) optimize edilmiş bir katsayı ile birleştirerek en yüksek doğruluğu hedefler.',
      note: 'Akademik düzeyde kesinlik ve mühendislik düzeyinde tutarlılık arayan kararlar için altın standarttır.' 
    }
  ];

  const caseProjects = [
    {
      id: 'P-101', name: 'Hammadde Tedarik Yönetimi', sector: 'Sanayi', client: 'X Global Üretim A.Ş.',
      desc: 'Bir otomotiv yan sanayi firması için 5 farklı çelik tedarikçisinin teknik ve mali analizi.',
      matrix: {
        alternatives: ['Tedarikçi A', 'Tedarikçi B', 'Tedarikçi C', 'Tedarikçi D'],
        criteria: [{name: 'Birim Fiyat', b: false}, {name: 'Kalite Skoru', b: true}, {name: 'Teslim Süresi', b: false}, {name: 'Sürdürülebilirlik', b: true}],
        data: [[120, 85, 12, 7], [135, 95, 8, 9], [110, 70, 15, 6], [125, 90, 10, 8]]
      }
    },
    {
      id: 'P-102', name: 'Lojistik Filo Modernizasyonu', sector: 'Lojistik', client: 'Y Dağıtım Grubu',
      desc: 'Dağıtım ağı için seçilecek ağır vasıta modellerinin verimlilik ve bakım maliyeti kıyaslaması.',
      matrix: {
        alternatives: ['Araç X', 'Araç Y', 'Araç Z'],
        criteria: [{name: 'Yakıt Tüketimi', b: false}, {name: 'Yük Kapasitesi', b: true}, {name: 'Servis Ağı', b: true}, {name: 'Amortisman', b: false}],
        data: [[28, 40, 9, 200], [32, 45, 7, 180], [30, 42, 8, 190]]
      }
    },
    {
      id: 'P-103', name: 'Enerji Altyapı Yatırımı', sector: 'Enerji', client: 'Z Yatırım Holding',
      desc: '3 farklı bölgede kurulacak yenilenebilir enerji santrallerinin ROI ve çevresel etki analizi.',
      matrix: {
        alternatives: ['Bölge 1', 'Bölge 2', 'Bölge 3'],
        criteria: [{name: 'Yatırım Maliyeti', b: false}, {name: 'Yıllık Üretim', b: true}, {name: 'Teşvik Oranı', b: true}, {name: 'Çevresel Risk', b: false}],
        data: [[5, 1200, 30, 2], [7, 1500, 40, 4], [4, 900, 20, 1]]
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
      
      {/* 1. EXECUTIVE HEADER */}
      <nav style={{ padding: '25px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(16, 185, 129, 0.2)', background: 'rgba(2, 6, 23, 0.95)', position: 'sticky', top: 0, zIndex: 1000, backdropFilter: 'blur(20px)' }}>
        <div className="flex items-center gap-4">
          <Zap size={32} color="#10b981" fill="#10b981" />
          <div className="flex flex-col">
            <span className="mono" style={{ fontWeight: 900, fontSize: '1.4rem', color: '#fff', letterSpacing: '-1px' }}>THE BLUEPRINT</span>
            <span style={{ fontSize: '0.6rem', fontWeight: 800, color: '#10b981', letterSpacing: '0.2em' }}>STRATEJİK KARAR PROTOKOLÜ</span>
          </div>
        </div>
        <button onClick={onBack} className="btn-bp" style={{ background: 'transparent', border: '1px solid #10b981', color: '#10b981', padding: '10px 30px', borderRadius: '4px', fontWeight: 900, cursor: 'pointer' }}>
          <ChevronLeft size={18} /> HUB'A DÖN
        </button>
      </nav>

      <div className="container" style={{ maxWidth: '1250px', margin: '0 auto', padding: '100px 20px' }}>
        
        {/* 2. HERO: EXECUTIVE NARRATIVE */}
        <header style={{ textAlign: 'center', marginBottom: '150px' }}>
           <div className="badge-v6" style={{ margin: '0 auto 30px', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#10b981', background: 'rgba(16, 185, 129, 0.05)', padding: '8px 25px', borderRadius: '100px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={14} /> <span style={{ fontSize: '0.7rem', fontWeight: 900 }}>METODOLOJİK KESİNLİK</span>
           </div>
           <h1 className="shimmer-text" style={{ fontSize: '7rem', fontWeight: 900, lineHeight: '0.9', letterSpacing: '-6px', marginBottom: '40px' }}>
              Karar Verme <br/> Mimarlığı.
           </h1>
           <h2 className="technical" style={{ fontSize: '2rem', color: '#94A3B8', fontWeight: 500 }}>
              Karmaşıklığı Yöneten Matematiksel Disiplin.
           </h2>
           <div className="measure-h" style={{ background: 'rgba(16, 185, 129, 0.2)' }}></div>
           <p className="mono" style={{ fontSize: '1.2rem', maxWidth: '850px', margin: '0 auto 60px', color: '#cbd5e1', lineHeight: '1.6' }}>
             Senaryonuza en uygun yöntemi seçin, stratejik temellerinizi atın ve karar yapınızı bilimsel bir kesinlikle yükseltin. 
             Vestra Elite, belirsizliği kusursuz bir stratejik taslağa dönüştürür.
           </p>
           <div className="flex justify-center gap-6">
              <button className="btn-bp" style={{ background: '#fff', color: '#000', padding: '20px 60px', fontSize: '1.1rem', fontWeight: 900, border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={onBack}>ANALİZİ BAŞLAT</button>
              <button className="btn-bp-outline" style={{ border: '1px solid #fff', color: '#fff', padding: '15px 40px', fontWeight: 900, background: 'transparent', borderRadius: '4px', cursor: 'pointer' }}>LABORATUVAR</button>
           </div>
        </header>

        {/* 3. PROFESSIONAL 3-STEP GUIDE */}
        <section style={{ marginBottom: '200px' }}>
           <h3 className="mono" style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Strateji Oluşturma Aşamaları</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
              {[
                { title: 'TEMEL KATMAN (Veri)', icon: <Database />, desc: 'Alternatiflerinizi ve ölçülebilir kriterlerinizi sisteme tanımlayın. Bu, analizinizin temel parametrelerini oluşturur.' },
                { title: 'MİMARİ SEÇİM (Metod)', icon: <Workflow />, desc: 'Karar senaryonuza en uygun Ağırlıklandırma ve Sıralama modelini belirleyin. Sistemin hangi zekayla çalışacağını seçin.' },
                { title: 'STRATEJİK ÇIKTI (Analiz)', icon: <TrendingUp />, desc: 'Hibrit hesaplamalar tamamlandığında, Orti Elite Verdict ile seçeneklerinize dair karşılaştırmalı ve rasyonel sonuçları inceleyin.' }
              ].map((s, i) => (
                <div key={i} className="blueprint-border" style={{ padding: '50px', borderRadius: '30px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                   <div style={{ color: '#10b981', marginBottom: '25px' }}>{React.cloneElement(s.icon, { size: 40 })}</div>
                   <h4 className="mono" style={{ fontSize: '1.4rem', marginBottom: '15px', fontWeight: 900 }}>{s.title}</h4>
                   <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: '1.6' }}>{s.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 4. METHOD CATALOG: PROFESSIONAL EDITION */}
        <section style={{ marginBottom: '200px' }}>
           <h3 className="mono" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Karar Destek Araçları Kataloğu ⚒️</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '30px' }}>
              {methods.map((m, i) => (
                <div key={i} className="blueprint-card" style={{ borderRadius: '30px', padding: '0', overflow: 'hidden', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                   <div style={{ padding: '25px', borderBottom: '1px solid rgba(16, 185, 129, 0.2)', background: 'rgba(16, 185, 129, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="mono" style={{ fontWeight: 900, color: '#10b981', fontSize: '0.8rem' }}>REF: {m.code}</span>
                      <span className="technical" style={{ fontSize: '0.7rem', fontWeight: 900, color: '#6366f1' }}>{m.cat.toUpperCase()}</span>
                   </div>
                   <div style={{ padding: '40px' }}>
                      <h4 className="mono" style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '15px' }}>{m.name} {m.emoji}</h4>
                      
                      <div style={{ marginBottom: '30px' }}>
                        <p className="technical" style={{ fontSize: '0.85rem', fontWeight: 900, color: '#10b981', marginBottom: '10px' }}>FONKSİYON:</p>
                        <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.6' }}>{m.what}</p>
                      </div>
                      
                      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '25px', border: '1px dashed rgba(16, 185, 129, 0.2)', borderRadius: '20px' }}>
                        <p className="technical" style={{ fontSize: '0.85rem', fontWeight: 900, color: '#10b981', marginBottom: '10px' }}>METODOLOJİK ÇALIŞMA PRENSİBİ:</p>
                        <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: '1.5' }}>{m.how}</p>
                      </div>

                      <div style={{ marginTop: '30px', padding: '20px', borderLeft: '3px solid #10b981', background: 'rgba(16, 185, 129, 0.05)' }}>
                         <p style={{ fontSize: '0.9rem', color: '#F8FAFC', lineHeight: '1.4' }}>{m.note}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 5. INTERACTIVE PROJECT FILES */}
        <section style={{ marginBottom: '200px' }}>
           <h3 className="mono" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Tamamlanmış Proje Dosyaları 🏗️</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
              {caseProjects.map((p, i) => (
                <div key={i} className="blueprint-card" style={{ borderRadius: '30px', padding: '0', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                   <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <div className="flex items-center gap-3">
                        <div className="text-emerald"><Package size={20} /></div>
                        <span className="mono" style={{ fontWeight: 900, fontSize: '0.8rem' }}>CASE: {p.id}</span>
                      </div>
                      <span style={{ fontSize: '0.6rem', fontWeight: 900, background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '4px 10px', borderRadius: '50px' }}>{p.sector}</span>
                   </div>
                   <div style={{ padding: '40px' }}>
                      <h4 className="mono" style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '15px' }}>{p.name}</h4>
                      <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '30px', lineHeight: '1.5' }}>{p.desc}</p>
                      
                      <div style={{ overflowX: 'auto', marginBottom: '30px' }}>
                        <table style={{ width: '100%', fontSize: '0.7rem', borderCollapse: 'collapse' }}>
                          <thead>
                             <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                <th style={{ textAlign: 'left', padding: '10px 0' }}>Alternatif</th>
                                {p.matrix.criteria.map((c, j) => <th key={j} style={{ padding: '10px 5px' }}>{c.name}</th>)}
                             </tr>
                          </thead>
                          <tbody>
                             {p.matrix.alternatives.map((alt, j) => (
                               <tr key={j} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                  <td style={{ padding: '10px 0', fontWeight: 700 }}>{alt}</td>
                                  {p.matrix.data[j].map((val, k) => <td key={k} style={{ textAlign: 'center', opacity: 0.7 }}>{val}</td>)}
                               </tr>
                             ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black text-secondary uppercase">Uygulanacak Mimari:</label>
                        <select 
                          className="input-elite" 
                          style={{ width: '100%', fontSize: '0.8rem', padding: '10px', border: '1px solid rgba(16, 185, 129, 0.3)' }}
                          onChange={(e) => setProjectModel(e.target.value)}
                        >
                          <option value="topsis">TOPSIS (Ideal Nokta)</option>
                          <option value="edas">EDAS (Sapma Analizi)</option>
                          <option value="vikor">VIKOR (Uzlaşma)</option>
                        </select>
                      </div>

                      <button 
                        className="btn-bp" 
                        style={{ width: '100%', marginTop: '30px', borderRadius: '10px', padding: '12px' }}
                        onClick={() => {
                          const res = calculateCaseResults(p, projectModel);
                          alert(`Proje Analizi Tamamlandı!\nEn İyi Seçenek: ${p.matrix.alternatives[res.ranking[0].index]}\nSkor: ${res.ranking[0].score.toFixed(4)}`);
                        }}
                      >
                         PLANI ÇALIŞTIR
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 6. COMPARISON TABLE: EXECUTIVE DESK */}
        <section style={{ marginBottom: '200px' }}>
           <h3 className="mono" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Analitik Karşılaştırma Cetveli 📊</h3>
           <div className="blueprint-border" style={{ borderRadius: '30px', overflow: 'hidden', border: '2px solid rgba(16, 185, 129, 0.3)' }}>
              <table className="blueprint-table">
                 <thead>
                    <tr>
                       <th>STRATEJİK İHTİYAÇ</th>
                       <th>AĞIRLIK MODELİ</th>
                       <th>SIRALAMA MODELİ</th>
                       <th>HASSASİYET SKORU</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr><td style={{ color: '#fff', fontWeight: 700 }}>Tam Veri Objektifliği</td><td className="mono">Entropy</td><td className="mono">TOPSIS</td><td>████░░ 70%</td></tr>
                    <tr><td style={{ color: '#fff', fontWeight: 700 }}>Çatışan Kriter Yönetimi</td><td className="mono">CRITIC</td><td className="mono">CODAS</td><td>█████░ 85%</td></tr>
                    <tr><td style={{ color: '#fff', fontWeight: 700 }}>Stratejik Vizyon & AI</td><td className="mono">AHP + AI</td><td className="mono">VIKOR</td><td>████░░ 80%</td></tr>
                    <tr><td style={{ color: '#fff', fontWeight: 700 }}>Maksimum Akademik Doğruluk</td><td className="mono">CRITIC</td><td className="mono">WASPAS</td><td>██████ 100%</td></tr>
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
