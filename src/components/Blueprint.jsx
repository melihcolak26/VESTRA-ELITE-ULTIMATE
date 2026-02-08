import React, { useState } from 'react';
import { 
  ChevronLeft, Zap, ArrowRight, Database, Workflow, TrendingUp, 
  ShieldCheck, Cpu, Package, BarChart3, Layers, Activity, 
  Globe, Scale, FileText, Binary, Terminal, Box, Boxes, 
  Lock, Target, Users, Network, ClipboardList, Info,
  CheckCircle2, AlertCircle, Maximize2, ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Blueprint = ({ onBack }) => {
  const [methodFilter, setMethodFilter] = useState('all');

  const methods = [
    { 
      id: 'entropy',
      type: 'weight',
      name: 'SHANNON ENTROPY', 
      cat: 'Ağırlıklandırma / Objektif Varyans Analizi', 
      complexity: 'Orta', 
      time: '5-7 Dakika', 
      accuracy: 'Yüksek',
      icon: <Database />,
      definition: 'Kriterlerin bilgi içeriğini istatistiksel olarak ölçer. Yüksek varyans gösteren kriterlere (karar vermede ayırt edici olan) daha yüksek ağırlık atanır. Veriye dayalı, uzman müdahalesi gerektirmez.',
      formula: 'ej = -k Σ pij ln(pij)',
      logic: [
        'Karar matrisinin normalize edilmesi (probabilistic dönüşüm)',
        'Her kriter için entropi değeri hesaplama',
        'Çeşitlilik katsayısı: dj = 1 - ej',
        'Normalize ağırlık: wj = dj / Σ dj'
      ],
      applications: ['Finansal portföy optimizasyonu', 'Tedarikçi performans değerlendirmesi', 'Kalite kontrol parametreleri'],
      strengths: ['Tamamen objektif, insan önyargısı yok', 'Hızlı hesaplama', 'Çok sayıda alternatif için uygun'],
      limitations: ['Stratejik önemi göz ardı edebilir', 'Veri kalitesine bağımlı'],
      optimal: 'Objektif karar gerektiğinde ve stratejik önceliklerin net olmadığı durumlarda tercih edilir.',
      combinations: 'TOPSIS, EDAS, MOORA'
    },
    { 
      id: 'critic',
      type: 'weight',
      name: 'CRITIC', 
      cat: 'Ağırlıklandırma / Korelasyon-Duyarlı Analiz', 
      complexity: 'Yüksek', 
      time: '10-12 Dakika', 
      accuracy: 'Çok Yüksek',
      icon: <Activity />,
      definition: 'Kriterler arasındaki korelasyonu (bilgi tekrarını) cezalandırır. Birbirine bağımlı kriterlerin ağırlığını düşürerek, bağımsız ve bilgi taşıyan kriterleri öne çıkarır.',
      formula: 'Cj = σj Σ (1 - rjk)',
      logic: [
        'Standardizasyon ve standart sapma hesabı',
        'Korelasyon matrisi oluşturma (Pearson katsayısı)',
        'Çatışma bilgisi hesaplama',
        'Ağırlıklandırma: wj = Cj / Σ Cj'
      ],
      applications: ['Ar-Ge projelerinde kriter karmaşasını önleme', 'İnsan kaynakları yetkinlik değerlendirmesi', 'Çok parametreli mühendislik tasarımları'],
      strengths: ['Kriterler arası çatışmayı tespit eder', 'Daha dengeli ağırlıklar verir'],
      limitations: ['Hesaplama yükü fazladır', 'Veri setinin yapısına hassastır'],
      optimal: 'Kriterlerin birbiriyle yüksek korelasyon gösterdiği durumlarda rasyonel denge kurar.',
      combinations: 'CODAS, WASPAS, MOORA'
    },
    { 
      id: 'ahp',
      type: 'weight',
      name: 'AHP Protocol', 
      cat: 'Ağırlıklandırma / Hiyerarşik Karşılaştırma', 
      complexity: 'Yüksek', 
      time: '15-20 Dakika', 
      accuracy: 'Yüksek',
      icon: <Layers />,
      definition: 'Niteliksel uzman değerlerini niceliksel ağırlıklara dönüştürür. İkili karşılaştırma matrisleri ve tutarlılık analizi ile güvenilir önceliklendirme sağlar.',
      formula: 'CR = CI / RI',
      logic: [
        'Saaty ölçeği (1-9) ile ikili karşılaştırma matrisi oluşturma',
        'Özvektör hesaplama (Eigenvector) ile yerel öncelikler',
        'Tutarlılık oranı (CR) kontrolü',
        'Global ağırlıkların hesaplanması'
      ],
      applications: ['Stratejik planlama', 'Lokasyon seçimi', 'Kamu politikaları', 'Yatırım kararları'],
      strengths: ['Kurum önceliklerini yansıtır', 'Nitel kriterleri sayısallaştırır'],
      limitations: ['Öznel yargı içerir', 'Büyük kriter setlerinde tutarlılık zordur'],
      optimal: 'Uzman görüşünün ve stratejik vizyonun kritik olduğu yapısal kararlarda kullanılır.',
      combinations: 'VIKOR, TOPSIS, MOORA'
    },
    { 
      id: 'topsis',
      type: 'rank',
      name: 'TOPSIS Elite', 
      cat: 'Sıralama / İdeal Uzaklık Metodu', 
      complexity: 'Orta', 
      time: '5-7 Dakika', 
      accuracy: 'Yüksek',
      icon: <Target />,
      definition: 'Pozitif-ideal (en iyi) ve negatif-ideal (en kötü) çözümlere olan Euclidean mesafelerini hesaplar. En iyiye en yakın ve en kötüye en uzak alternatifi belirler.',
      formula: 'Ci = Di- / (Di+ + Di-)',
      logic: [
        'Vektör normalizasyonu ve ağırlıklandırma',
        'İdeal (A+) ve anti-ideal (A-) çözümlerin belirlenmesi',
        'Euclidean mesafe hesabı',
        'Bağıl yakınlık katsayısı ile sıralama'
      ],
      applications: ['Ekipman seçimi', 'Yazılım karşılaştırmaları', 'Bina/lokasyon tercihleri'],
      strengths: ['En yaygın kullanılan metot', 'Anlaşılır sonuçlar', 'Dengeli yaklaşım'],
      limitations: ['Kriterler arası korelasyonu yok sayar'],
      optimal: 'Dengeli ve standart bir sıralama algoritması arandığında en güvenilir seçenektir.',
      combinations: 'Entropy, CRITIC, AHP'
    },
    { 
      id: 'edas',
      type: 'rank',
      name: 'EDAS Method', 
      cat: 'Sıralama / Ortalama Sapma Analizi', 
      complexity: 'Orta', 
      time: '8-10 Dakika', 
      accuracy: 'Yüksek',
      icon: <Scale />,
      definition: 'İdeal çözüm yerine ortalama çözüme olan uzaklığı temel alır. Uç değerlere (outlier) karşı daha robust (dayanıklı) sonuçlar üretir.',
      formula: 'PDA = max(0, (AV - x)/AV)',
      logic: [
        'Ortalama çözüm (AV) hesabı her kriter için',
        'Pozitif (PDA) ve Negatif (NDA) uzaklık hesabı',
        'Ağırlıklandırılmış toplam skorlar',
        'Normalizasyon ve değerlendirme skoru (AS)'
      ],
      applications: ['Riskli yatırım kararları', 'Volatil veri setleri', 'Finansal belirsizlik'],
      strengths: ['Outlier\'lara karşı dirençli', 'Stabil sonuçlar'],
      limitations: ['Ortalama değerin saptığı küçük örneklemlerde yanılabilir'],
      optimal: 'Veri setinde anomali veya aşırı uç değerler (aykırı veriler) olduğunda tercih edilir.',
      combinations: 'Entropy, CRITIC'
    },
    { 
      id: 'codas',
      type: 'rank',
      name: 'CODAS Matrix', 
      cat: 'Sıralama / Hibrit Mesafe Analizi', 
      complexity: 'Yüksek', 
      time: '10-12 Dakika', 
      accuracy: 'Çok Yüksek',
      icon: <Boxes />,
      definition: 'Euclidean ve Taxicab mesafelerini kombine ederek sıralama yapar. Özellikle seçenekler birbirine çok yakınsa, hassas farkları ortaya çıkarır.',
      formula: 'h_ik = (E_i - E_k) + ψ(E_i - E_k) * (T_i - T_k)',
      logic: [
        'Negatif ideal çözüme olan uzaklıkların belirlenmesi',
        'Öklid ve Taksi mesafelerinin hesaplanması',
        'Eşik değer üzerinden karşılaştırma matrisi',
        'Net değerlendirme skoru'
      ],
      applications: ['Kritik altyapı projeleri', 'Hassas mühendislik kararları', 'Yüksek riskli yatırımlar'],
      strengths: ['İki farklı mesafe metriki kullanımı', 'En güvenilir sonuçları verir'],
      limitations: ['Hesaplama yoğunluğu fazladır'],
      optimal: 'Alternatiflerin performans değerlerinin birbirine çok yakın olduğu hassas mühendislik kararlarında kullanılır.',
      combinations: 'CRITIC'
    },
    { 
      id: 'moora',
      type: 'rank',
      name: 'MOORA-Ratio', 
      cat: 'Sıralama / Oransal Optimizasyon', 
      complexity: 'Düşük', 
      time: '5-6 Dakika', 
      accuracy: 'Orta-Yüksek',
      icon: <Binary />,
      definition: 'Fayda kriterlerinin toplamını, maliyet kriterlerinin toplamına böler. Hesaplama karmaşıklığı düşük, yüksek performanslı hızlı sonuç üretir.',
      formula: 'Yi = Σ (Fayda) / Σ (Maliyet)',
      logic: [
        'Normalize matris üzerinden fayda ve maliyet ayrımı',
        'Oransal hesaplama',
        'Sıralama belirleme'
      ],
      applications: ['Lojistik operasyonlar', 'Hızlı tedarikçi değerlendirme', 'Operasyonel verimlilik analizi'],
      strengths: ['Basit, hızlı ve etkili', 'Endüstri standardı (özellikle SCM)'],
      limitations: ['Hiyerarşik yapıları desteklemez'],
      optimal: 'Hızın doğruluktan daha önemli olduğu acil operasyonel kararlarda idealdir.',
      combinations: 'CRITIC, AHP'
    },
    { 
      id: 'waspas',
      type: 'rank',
      name: 'WASPAS Matrix', 
      cat: 'Sıralama / Hibrit Hassasiyet Modeli', 
      complexity: 'Çok Yüksek', 
      time: '12-15 Dakika', 
      accuracy: 'Maksimum',
      icon: <Workflow />,
      definition: 'Toplamsal (WSM) ve çarpımsal (WPM) modellerin birleşimidir. İki yaklaşımın avantajlarını kapsar, yüksek doğruluklu akademik sonuçlar sunar.',
      formula: 'Qi = λ Σ wj xij + (1-λ) Π xij^wj',
      logic: [
        'WSM ve WPM skorlarının ayrı hesaplanması',
        'Birleşik skor: λ katsayısı ile agregasyon',
        'Hassasiyet doğrulaması'
      ],
      applications: ['Akademik araştırmalar', 'Yüksek hassasiyetli mühendislik seçimleri', 'Bilimsel karar destek sistemleri'],
      strengths: ['En yüksek doğruluk oranı', 'Tutarlı sonuçlar'],
      limitations: ['Matematiksel olarak en yoğun modeldir'],
      optimal: 'Hata payının sıfıra yakın olması gereken stratejik yatırım veya teknik tasarım kararlarında kullanılır.',
      combinations: 'CRITIC'
    }
  ];

  const comparisonData = [
    { type: 'Objektif Veri Odaklı', w: 'Entropy', r: 'TOPSIS', d: 'Orta', t: '5-7\'', a: 'Yüksek' },
    { type: 'Kriter Çatışması Mevcut', w: 'CRITIC', r: 'CODAS', d: 'Yüksek', t: '10-12\'', a: 'Çok Yüksek' },
    { type: 'Kurum Öncelikleri / Uzman', w: 'AHP', r: 'VIKOR', d: 'Yüksek', t: '15-20\'', a: 'Yüksek' },
    { type: 'Maksimum Bilimsel Hassasiyet', w: 'CRITIC', r: 'WASPAS', d: 'Çok Yüksek', t: '12-15\'', a: 'Maksimum' },
    { type: 'Hızlı Operasyonel Karar', w: 'CRITIC', r: 'MOORA', d: 'Düşük', t: '5-6\'', a: 'Orta-Yüksek' },
    { type: 'Yüksek Belirsizlik', w: 'Entropy', r: 'EDAS', d: 'Orta', t: '8-10\'', a: 'Yüksek' }
  ];

  const filteredMethods = methods.filter(m => methodFilter === 'all' || m.type === methodFilter);

  return (
    <div className="blueprint-paper-v8 fade-in" style={{ background: '#0a0e1a', color: '#f8fafc', paddingBottom: '100px' }}>
      <div className="blueprint-hero-grid" style={{ opacity: 0.05 }}></div>

      {/* HEADER */}
      <nav className="nav-premium" style={{ borderBottom: '1px solid #1e293b', background: 'rgba(10, 14, 26, 0.95)', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(10px)' }}>
        <div className="container d-flex justify-content-between align-items-center" style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', padding: '20px' }}>
          <div className="logo-container">
            <Zap size={24} color="#3b82f6" />
            <span className="logo-accent" style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 900 }}>VESTRA</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 900, letterSpacing: '8px', color: '#fff', opacity: 0.8 }}>THE BLUEPRINT</span>
            <p style={{ fontSize: '0.6rem', color: '#3b82f6', fontWeight: 800, marginTop: '4px', letterSpacing: '2px' }}>STRATEJİK KARAR ÇERÇEVESİ</p>
          </div>
          <button onClick={onBack} className="btn-premium" style={{ background: 'transparent', border: '1px solid #3b82f6', color: '#3b82f6', padding: '10px 25px', borderRadius: '8px', fontWeight: 800, cursor: 'pointer' }}>
            Karar Paneline Dön
          </button>
        </div>
      </nav>

      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* HERO SECTION */}
        <section className="hero-wrapper" style={{ padding: '100px 0', textAlign: 'center' }}>
           <div style={{ display: 'inline-block', padding: '6px 15px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '100px', color: '#3b82f6', fontSize: '0.75rem', fontWeight: 900, marginBottom: '25px', letterSpacing: '1px' }}>
              OPERASYONEL MÜKEMMELLİK ALTYAPISI
           </div>
           <h1 style={{ fontSize: '4.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '30px', color: '#fff' }}>
              HER BÜYÜK KARAR <br/> BİR PLAN İLE BAŞLAR
           </h1>
           <p style={{ fontSize: '1.25rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '45px', maxWidth: '850px', margin: '0 auto 60px' }}>
              Senaryonuza en uygun çok kriterli karar verme modelini belirleyin, analitik temellerinizi oluşturun ve sürdürülebilir operasyonel üstünlük elde edin.
           </p>
           <div className="d-flex justify-content-center gap-4">
              <button className="btn-action" style={{ background: '#3b82f6', color: '#fff' }} onClick={() => document.getElementById('methods').scrollIntoView({behavior:'smooth'})}>
                 Yöntemleri İncele
              </button>
              <button className="btn-action" style={{ background: 'transparent', border: '1px solid #1e293b', color: '#f8fafc' }} onClick={() => onBack()}>
                 Analize Başla
              </button>
           </div>
        </section>

        {/* 3 STEPS SECTION */}
        <section className="py-20" style={{ borderTop: '1px solid #1e293b', borderBottom: '1px solid #1e293b' }}>
            <div className="text-center mb-20">
               <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Sistematik Karar Altyapısı</h2>
               <p style={{ color: '#94a3b8', marginTop: '10px' }}>Kurumsal süreçler için optimize edilmiş 3 aşamalı analitik iş akışı.</p>
            </div>

            <div className="grid grid-cols-3 gap-8">
               <div className="glass-panel p-10 rounded-3xl border border-white/5 bg-[#1e293b]/40">
                  <div style={{ width: '56px', height: '56px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                     <Database size={28} color="#3b82f6" />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px' }}>Adım 1: Veri Girişi</h4>
                  <p style={{ fontSize: '1rem', color: '#94a3b8', lineHeight: 1.6 }}>Kullanıcılar karar matrislerini oluşturur. Alternatifler ve kriterler tanımlanır. Sistem, normalize edilmiş karar uzayını hazırlar.</p>
               </div>
               <div className="glass-panel p-10 rounded-3xl border border-white/5 bg-[#1e293b]/40">
                  <div style={{ width: '56px', height: '56px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                     <Network size={28} color="#06b6d4" />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px' }}>Adım 2: Algoritmik Analiz</h4>
                  <p style={{ fontSize: '1rem', color: '#94a3b8', lineHeight: 1.6 }}>Entropy, CRITIC veya AHP ile kriter önem düzeyleri belirlenir; TOPSIS, EDAS veya WASPAS ile alternatifler derecelendirilir.</p>
               </div>
               <div className="glass-panel p-10 rounded-3xl border border-white/5 bg-[#1e293b]/40">
                  <div style={{ width: '56px', height: '56px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                     <BarChart3 size={28} color="#10b981" />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px' }}>Adım 3: Raporlama</h4>
                  <p style={{ fontSize: '1rem', color: '#94a3b8', lineHeight: 1.6 }}>Farklı algoritmaların sonuçları karşılaştırılır. Duyarlılık analizi ile ağırlık değişimlerinin etkisi simüle edilerek nihai karar dokümante edilir.</p>
               </div>
            </div>
        </section>

        {/* METHODS CATALOG */}
        <section id="methods" className="py-20">
            <div className="d-flex justify-content-between align-items-end mb-16">
               <div>
                  <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Karar Verme Metodolojileri</h2>
                  <p style={{ color: '#94a3b8', marginTop: '10px' }}>Teknik yeterliliği yüksek, endüstri standardı 8 ana algoritma.</p>
               </div>
               <div className="d-flex gap-2">
                  <button className={`btn-filter ${methodFilter === 'all' ? 'active' : ''}`} onClick={() => setMethodFilter('all')}>Tümü</button>
                  <button className={`btn-filter ${methodFilter === 'weight' ? 'active' : ''}`} onClick={() => setMethodFilter('weight')}>Ağırlıklandırma</button>
                  <button className={`btn-filter ${methodFilter === 'rank' ? 'active' : ''}`} onClick={() => setMethodFilter('rank')}>Sıralama</button>
               </div>
            </div>

            <div className="grid grid-cols-12 gap-8">
               {filteredMethods.map((m, i) => (
                  <motion.div 
                    key={m.id} 
                    className="col-span-12 lg:col-span-6 glass-panel p-10 rounded-[40px] border border-white/5 bg-[#1e293b]/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ translateY: -8, borderColor: 'rgba(59, 130, 246, 0.4)' }}
                  >
                     <div className="d-flex justify-content-between mb-8">
                        <div className="d-flex gap-5">
                           <div style={{ color: '#3b82f6' }}>{React.cloneElement(m.icon, { size: 48 })}</div>
                           <div>
                              <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>{m.name}</h3>
                              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3b82f6', letterSpacing: '1px' }}>{m.cat.toUpperCase()}</span>
                           </div>
                        </div>
                        <div className="text-right">
                           <span style={{ fontSize: '0.65rem', color: '#94a3b8', display: 'block' }}>HASSASİYET</span>
                           <span style={{ fontSize: '0.8rem', fontWeight: 800, color: m.accuracy === 'Maksimum' ? '#10b981' : '#fff' }}>{m.accuracy}</span>
                        </div>
                     </div>

                     <div style={{ marginBottom: '35px' }}>
                        <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.6 }}>{m.definition}</p>
                     </div>

                     <div className="space-y-8">
                        <div className="p-6 bg-black/40 rounded-2xl border border-white/5 font-mono text-sm text-blue-400">
                           <span className="text-[10px] text-secondary d-block mb-2 uppercase font-black">Matematiksel Formül</span>
                           {m.formula}
                        </div>
                        
                        <div>
                           <h5 style={{ fontSize: '0.8rem', color: '#3b82f6', fontWeight: 800, marginBottom: '15px', textTransform: 'uppercase' }}>Nasıl Çalışır?</h5>
                           <ul style={{ fontSize: '0.95rem', color: '#94a3b8', paddingLeft: '15px', listStyleType: 'decimal' }}>
                              {m.logic.map((l, li) => <li key={li} style={{ marginBottom: '10px' }}>{l}</li>)}
                           </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                           <div>
                              <h5 style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 800, marginBottom: '15px', textTransform: 'uppercase' }}>Güçlü Yönler</h5>
                              <ul style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                                 {m.strengths.map((s, si) => <li key={si} style={{ marginBottom: '10px', display: 'flex', gap: '8px' }}><CheckCircle2 size={16} color="#10b981" /> {s}</li>)}
                              </ul>
                           </div>
                           <div>
                              <h5 style={{ fontSize: '0.8rem', color: '#ef4444', fontWeight: 800, marginBottom: '15px', textTransform: 'uppercase' }}>Sınırlamalar</h5>
                              <ul style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                                 {m.limitations.map((s, si) => <li key={si} style={{ marginBottom: '10px', display: 'flex', gap: '8px' }}><AlertCircle size={16} color="#ef4444" /> {s}</li>)}
                              </ul>
                           </div>
                        </div>
                     </div>

                     <div style={{ marginTop: '40px', padding: '25px', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '25px', borderLeft: '5px solid #3b82f6' }}>
                        <p style={{ fontSize: '1rem', color: '#fff', fontWeight: 600 }}>Optimal Kullanım: <span style={{ fontWeight: 400, color: '#94a3b8' }}>{m.optimal}</span></p>
                        <p style={{ fontSize: '0.8rem', color: '#3b82f6', fontWeight: 800, marginTop: '15px' }}>KOMBİNE EDİLEBİLİR: {m.combinations}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="py-20">
           <h2 className="text-center mb-16" style={{ fontSize: '2.5rem', fontWeight: 800 }}>Model Karşılaştırma Matrisi</h2>
           <div className="glass-panel overflow-hidden rounded-[40px] border border-white/5 bg-[#1e293b]/20">
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                 <thead>
                    <tr style={{ background: 'rgba(59, 130, 246, 0.1)' }}>
                       <th style={{ padding: '30px', textAlign: 'left', fontSize: '0.85rem', color: '#3b82f6', fontWeight: 900 }}>KARAR TÜRÜ</th>
                       <th style={{ padding: '30px', textAlign: 'left', fontSize: '0.85rem', color: '#3b82f6', fontWeight: 900 }}>AĞIRLIKLANDIRMA</th>
                       <th style={{ padding: '30px', textAlign: 'left', fontSize: '0.85rem', color: '#3b82f6', fontWeight: 900 }}>SIRALAMA</th>
                       <th style={{ padding: '30px', textAlign: 'left', fontSize: '0.85rem', color: '#3b82f6', fontWeight: 900 }}>KARMAŞIKLIK</th>
                       <th style={{ padding: '30px', textAlign: 'left', fontSize: '0.85rem', color: '#3b82f6', fontWeight: 900 }}>SÜRE</th>
                       <th style={{ padding: '30px', textAlign: 'left', fontSize: '0.85rem', color: '#3b82f6', fontWeight: 900 }}>DOĞRULUK</th>
                    </tr>
                 </thead>
                 <tbody>
                    {comparisonData.map((row, ri) => (
                       <tr key={ri} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '25px 30px', fontSize: '1rem', fontWeight: 700 }}>{row.type}</td>
                          <td style={{ padding: '25px 30px', fontSize: '1rem', color: '#94a3b8' }}>{row.w}</td>
                          <td style={{ padding: '25px 30px', fontSize: '1rem', color: '#94a3b8' }}>{row.r}</td>
                          <td style={{ padding: '25px 30px', fontSize: '1rem', color: '#94a3b8' }}>{row.d}</td>
                          <td style={{ padding: '25px 30px', fontSize: '1rem', color: '#94a3b8' }}>{row.t}</td>
                          <td style={{ padding: '25px 30px', fontSize: '1rem', color: ri === 3 ? '#10b981' : '#fff', fontWeight: ri === 3 ? 900 : 400 }}>{row.a}</td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </section>

      </div>

      <footer className="py-20 border-t border-white/5 text-center">
         <p style={{ color: '#475569', fontSize: '0.8rem', fontWeight: 900, letterSpacing: '15px', textTransform: 'uppercase' }}>
            VESTRA INTELLIGENCE PRO © 2026
         </p>
         <div style={{ marginTop: '20px', color: '#1e293b', fontSize: '0.65rem', fontWeight: 800 }}>
            PROFESYONEL ÇKKV KARAR REHBERİ - B2B KURUMSAL ÇERÇEVE
         </div>
      </footer>

      <style jsx>{`
        .btn-filter {
           padding: 10px 20px;
           background: transparent;
           border: 1px solid #1e293b;
           color: #94a3b8;
           border-radius: 10px;
           font-size: 0.8rem;
           font-weight: 700;
           cursor: pointer;
           transition: 0.3s;
        }
        .btn-filter.active { background: #3b82f6; color: #fff; border-color: #3b82f6; }
        .btn-action {
           padding: 18px 40px;
           border-radius: 14px;
           font-weight: 800;
           font-size: 1.1rem;
           cursor: pointer;
           transition: 0.3s;
           display: flex;
           align-items: center;
           gap: 12px;
           border: none;
        }
        .btn-action:hover { transform: translateY(-4px); box-shadow: 0 15px 30px rgba(59, 130, 246, 0.2); }
      `}</style>
    </div>
  );
};

export default Blueprint;
