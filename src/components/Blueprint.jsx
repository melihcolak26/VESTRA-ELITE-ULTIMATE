import React, { useState } from 'react';
import { 
  ChevronLeft, Zap, ArrowRight, Database, Workflow, TrendingUp, 
  ShieldCheck, Cpu, Package, BarChart3, Layers, Activity, 
  Globe, Scale, FileText, Binary, Terminal, Box, Boxes, 
  Lock, Target, Users, Network, ClipboardList, Info,
  Filter, CheckCircle2, AlertCircle, Maximize2, ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Blueprint = ({ onBack }) => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [methodFilter, setMethodFilter] = useState('all');

  const methods = [
    { 
      id: 'entropy',
      name: 'SHANNON ENTROPY', 
      cat: 'Objektif Kriter Ağırlıklandırma', 
      complexity: 'Orta', 
      time: '5-7 Dakika', 
      accuracy: 'Yüksek',
      icon: <Database />,
      definition: 'Shannon Entropy, bilgi teorisine dayanan objektif bir ağırlıklandırma yöntemidir. Veri setindeki değişkenlik (varyans) düzeyine göre kriter ağırlıklarını belirler. Düşük varyans = düşük önem.',
      logic: [
        'Karar matrisinin normalize edilmesi (probabilistic dönüşüm)',
        'Her kriter için entropi değeri hesaplama: ej = -k Σ pij ln(pij)',
        'Çeşitlilik katsayısı: dj = 1 - ej',
        'Normalize ağırlık: wj = dj / Σ dj'
      ],
      applications: ['Finansal Portföy Optimizasyonu', 'Tedarikçi Performans Değerlendirmesi', 'Kalite Kontrol Parametreleri'],
      strengths: ['Tamamen objektif, insan önyargısı yok', 'Hızlı hesaplama', 'Çok sayıda alternatif için uygun'],
      limitations: ['Stratejik önemi göz ardı edebilir', 'Veri kalitesine bağımlı'],
      optimal: 'Objektif karar gerektiğinde, veri setinde anlamlı varyasyon olduğunda ve stratejik önceliklerin net olmadığı durumlarda tercih edilir.',
      combinations: 'TOPSIS, EDAS, MOORA'
    },
    { 
      id: 'critic',
      name: 'CRITIC', 
      cat: 'Korelasyon-Duyarlı Ağırlıklandırma', 
      complexity: 'Yüksek', 
      time: '10-12 Dakika', 
      accuracy: 'Çok Yüksek',
      icon: <Activity />,
      definition: 'Kriterler arasındaki korelasyonu (bilgi tekrarını) cezalandırır. Birbirine bağımlı kriterlerin ağırlığını düşürerek, bağımsız ve bilgi taşıyan kriterleri öne çıkarır.',
      logic: [
        'Standardizasyon ve standart sapma hesabı',
        'Korelasyon matrisi oluşturma (Pearson katsayısı)',
        'Çatışma bilgisi: Cj = σj Σ (1 - rjk)',
        'Ağırlıklandırma: wj = Cj / Σ Cj'
      ],
      applications: ['Ar-Ge Projelerinde Kriter Karmaşasını Önleme', 'İnsan Kaynakları Yetkinlik Değerlendirmesi', 'Çok Parametreli Mühendislik Tasarımları'],
      strengths: ['Kriterler arası çatışmayı tespit eder', 'Dengeli ağırlıklar sağlar'],
      limitations: ['Hesaplama yükü fazladır', 'Veri setinin yapısına hassastır'],
      optimal: 'Kriterlerin birbiriyle çeliştiği ve korelasyonun yüksek olduğu karmaşık problemlerde kullanılır.',
      combinations: 'CODAS, WASPAS, MOORA'
    },
    { 
      id: 'ahp',
      name: 'AHP Protocol', 
      cat: 'Hiyerarşik / Uzman Görüşü', 
      complexity: 'Yüksek', 
      time: '15-20 Dakika', 
      accuracy: 'Yüksek',
      icon: <Layers />,
      definition: 'Niteliksel uzman değerlerini niceliksel ağırlıklara dönüştürür. İkili karşılaştırma matrisleri ve tutarlılık analizi ile güvenilir önceliklendirme sağlar.',
      logic: [
        'Saaty ölçeği (1-9) ile ikili karşılaştırma matrisi oluşturma',
        'Özvektör hesaplama (Eigenvector) ile yerel öncelikler',
        'Tutarlılık oranı (CR) kontrolü: CR = CI/RI',
        'Global ağırlıkların hesaplanması'
      ],
      applications: ['Stratejik Planlama', 'Lokasyon Seçimi', 'Kamu Politikaları', 'Yatırım Kararları'],
      strengths: ['Kurum önceliklerini yansıtır', 'Nitel kriterleri sayısallaştırır'],
      limitations: ['Öznel yargı içerir', 'Tutarlılık yakalamak zaman alıcıdır'],
      optimal: 'Uzman tecrübesinin ve kurum vizyonunun sayısal veriden daha öncelikli olduğu durumlarda kullanılır.',
      combinations: 'VIKOR, TOPSIS, MOORA'
    },
    { 
      id: 'topsis',
      name: 'TOPSIS Elite', 
      cat: 'İdeal Uzaklık Metodu', 
      complexity: 'Orta', 
      time: '5-7 Dakika', 
      accuracy: 'Yüksek',
      icon: <Target />,
      definition: 'Pozitif-ideal (en iyi) ve negatif-ideal (en kötü) çözümlere olan Euclidean mesafelerini hesaplar. En iyiye en yakın ve en kötüye en uzak alternatifi belirler.',
      logic: [
        'Vektör normalizasyonu ve ağırlıklandırma',
        'İdeal (A+) ve anti-ideal (A-) çözümlerin belirlenmesi',
        'Euclidean mesafe hesabı',
        'Bağıl yakınlık katsayısı ile sıralama'
      ],
      applications: ['Ekipman Seçimi', 'Yazılım Karşılaştırmaları', 'Genel Amaçlı Karar Problemleri'],
      strengths: ['En yaygın kullanılan yöntem', 'Anlaşılır sonuçlar', 'Dengeli yaklaşım'],
      limitations: ['Kriterler arası korelasyonu yok sayar'],
      optimal: 'Dengeli, standart ve kabul görmüş bir sıralama gerektiğinde ilk tercihtir.',
      combinations: 'Entropy, CRITIC, AHP'
    },
    { 
      id: 'edas',
      name: 'EDAS Method', 
      cat: 'Ortalama Sapma Analizi', 
      complexity: 'Orta', 
      time: '8-10 Dakika', 
      accuracy: 'Yüksek',
      icon: <Scale />,
      definition: 'İdeal çözüm yerine ortalama çözüme olan uzaklığı temel alır. Uç değerlere (outlier) karşı daha robust (dayanıklı) sonuçlar üretir.',
      logic: [
        'Ortalama çözüm (AV) hesabı her kriter için',
        'Pozitif (PDA) ve Negatif (NDA) sapma hesabı',
        'Ağırlıklandırılmış toplam skorlar',
        'Normalizasyon ve değerlendirme skoru (AS)'
      ],
      applications: ['Riskli Yatırım Kararları', 'Volatil Veri Setleri', 'Finansal Belirsizlik Altında Kararlar'],
      strengths: ['Outlier değerlere karşı dirençli', 'Stabil sonuçlar'],
      limitations: ['Ortalama değerin anlamsız olduğu küçük setlerde zayıftır'],
      optimal: 'Veri setinde aşırı uç değerler (aykırı veriler) olduğunda tercih edilir.',
      combinations: 'Entropy, CRITIC'
    },
    { 
      id: 'codas',
      name: 'CODAS Matrix', 
      cat: 'Hibrit Mesafe Analizi', 
      complexity: 'Yüksek', 
      time: '10-12 Dakika', 
      accuracy: 'Çok Yüksek',
      icon: <Boxes />,
      definition: 'Euclidean ve Taxicab mesafelerini kombine ederek sıralama yapar. Özellikle seçenekler birbirine çok yakınsa, hassas farkları ortaya çıkarır.',
      logic: [
        'Negatif ideal çözüme olan uzaklıkların belirlenmesi',
        'Öklid ve Taksi mesafelerinin hesaplanması',
        'Eşik değer (Tau) üzerinden karşılaştırma matrisi',
        'Net değerlendirme skoru'
      ],
      applications: ['Kritik Altyapı Projeleri', 'Hassas Mühendislik Kararları', 'Yüksek Riskli Yatırımlar'],
      strengths: ['İki farklı mesafe metriki kullanımı', 'Çok yüksek ayırt edicilik'],
      limitations: ['Eşik değer seçimine duyarlıdır'],
      optimal: 'Alternatiflerin performans değerlerinin birbirine çok yakın olduğu hassas durumlarda kullanılır.',
      combinations: 'CRITIC'
    },
    { 
      id: 'moora',
      name: 'MOORA-Ratio', 
      cat: 'Oransal Optimizasyon', 
      complexity: 'Düşük', 
      time: '5-6 Dakika', 
      accuracy: 'Orta-Yüksek',
      icon: <Binary />,
      definition: 'Fayda kriterlerinin toplamını, maliyet kriterlerinin toplamına böler. Hesaplama karmaşıklığı düşük, yüksek performanslı hızlı sonuç üretir.',
      logic: [
        'Normalize matris üzerinden fayda ve maliyet ayrımı',
        'Yi = Σ (Fayda) / Σ (Maliyet) formülasyonu',
        'Orana göre sıralama'
      ],
      applications: ['Lojistik Operasyonlar', 'Hızlı Tedarikçi Değerlendirme', 'Operasyonel Verimlilik'],
      strengths: ['Basit ve hızlı', 'Endüstri standardı performans'],
      limitations: ['Karmaşık hiyerarşileri modelleyemez'],
      optimal: 'Hızın doğruluktan bir adım önde olduğu acil operasyonel kararlarda idealdir.',
      combinations: 'CRITIC, AHP'
    },
    { 
      id: 'waspas',
      name: 'WASPAS Matrix', 
      cat: 'Hibrit Agregasyon Modeli', 
      complexity: 'Çok Yüksek', 
      time: '12-15 Dakika', 
      accuracy: 'Maksimum',
      icon: <Workflow />,
      definition: 'Toplamsal (WSM) ve çarpımsal (WPM) modellerin birleşimidir. İki yaklaşımın avantajlarını kapsar, yüksek doğruluklu akademik sonuçlar sunar.',
      logic: [
        'WSM skoru: Σ wj xij',
        'WPM skoru: Π xij^wj',
        'Birleşik skor: λ · WSM + (1-λ) · WPM (λ=0.5)'
      ],
      applications: ['Akademik Araştırmalar', 'Yüksek Hassasiyetli Mühendislik', 'Bilimsel Karar Destek'],
      strengths: ['En yüksek doğruluk oranı', 'Hata payını minimize eder'],
      limitations: ['Uygulama zorluğu ve matematiksel yoğunluk'],
      optimal: 'Hata payının kabul edilemez olduğu yüksek maliyetli veya hayati kararlarda kullanılır.',
      combinations: 'CRITIC'
    }
  ];

  const caseProjects = [
    { 
      id: 'PROJE #01', 
      name: 'Endüstriyel Hammadde Tedarik Seçimi', 
      sector: 'Üretim / Kimya', 
      description: '6 farklı çelik tedarikçisinin maliyet, kalite ve lojistik parametrelerine göre optimizasyonu.',
      icon: <Package />,
      matrix: [
        { alt: 'Tedarikçi A', cost: '45.50', time: '3', quality: '95', stock: '10.000' },
        { alt: 'Tedarikçi B', cost: '42.00', time: '5', quality: '88', stock: '15.000' },
        { alt: 'Tedarikçi C', cost: '48.75', time: '2', quality: '98', stock: '8.000' },
        { alt: 'Tedarikçi D', cost: '41.25', time: '7', quality: '85', stock: '20.000' }
      ],
      analysis: {
        weights: 'Entropy: Maliyet (0.35), Süre (0.28), Kalite (0.22), Kapasite (0.15)',
        topsis: '1. Tedarikçi C (0.78), 2. Tedarikçi A (0.72)',
        insight: 'Maliyet ve Kalite arasında negatif korelasyon (-0.82) tespit edildi. CRITIC bu kriterlere yüksek ayırt edicilik atadı.',
        gain: '%12 maliyet tasarrufu + %18 teslimat performans artışı.'
      }
    },
    { 
      id: 'PROJE #02', 
      name: 'Kurumsal Yatırım Portföyü', 
      sector: 'Finans', 
      description: 'Dengeli risk-getiri profili için 6 farklı finansal varlığın hiyerarşik analizi.',
      icon: <TrendingUp />,
      matrix: [
        { alt: 'Hisse A', return: '18.5%', vol: '22.3%', liq: '1', sharpe: '0.83', esg: '72' },
        { alt: 'Tahvil C', return: '8.5%', vol: '5.2%', liq: '3', sharpe: '1.63', esg: '90' },
        { alt: 'Fon D', return: '12.0%', vol: '12.5%', liq: '5', sharpe: '0.96', esg: '78' }
      ],
      analysis: {
        weights: 'AHP: Getiri (0.40), Risk (0.35), Likidite (0.25)',
        edas: 'Portföy Stabilitesi: Tahvil C ağırlıklı yapı önerildi.',
        insight: 'EDAS analizi uç değer (Kripto varlıklar) riskini elimine ederek robust bir yapı kurdu.',
        gain: '%14.2 beklenen getiri, %11.5 hedef volatilite.'
      }
    },
    { 
      id: 'PROJE #03', 
      name: 'Kara Taşımacılığı Partner Seçimi', 
      sector: 'Lojistik', 
      description: 'Maliyet, süre ve hasar oranlarına göre 6 ana nakliye firmasının değerlendirilmesi.',
      icon: <Globe />,
      matrix: [
        { alt: 'Firma X1', cost: '28.500', time: '48s', damage: '0.8', age: '3.5', sig: 'Tam' },
        { alt: 'Firma X3', cost: '31.000', time: '42s', damage: '0.3', age: '2.0', sig: 'Tam' },
        { alt: 'Firma X5', cost: '29.750', time: '45s', damage: '0.5', age: '2.8', sig: 'Tam' }
      ],
      analysis: {
        weights: 'CRITIC: Süre ve Hasar Oranı ana belirleyici.',
        moora: '1. Firma X3 (En iyi oransal performans)',
        insight: 'CODAS analizi Firma X4\'ün düşük performansını (outlier) kesin olarak saptadı.',
        gain: '%15 teslimat süresi iyileşmesi, %28 müşteri memnuniyeti artışı.'
      }
    }
  ];

  return (
    <div className="blueprint-paper-v8 fade-in" style={{ background: '#0a0e1a', color: '#f8fafc', paddingBottom: '100px' }}>
      <div className="blueprint-hero-grid" style={{ opacity: 0.05 }}></div>

      {/* HEADER */}
      <nav className="nav-premium" style={{ borderBottom: '1px solid #1e293b', background: 'rgba(10, 14, 26, 0.95)', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(10px)' }}>
        <div className="container d-flex justify-content-between align-items-center" style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', padding: '20px' }}>
          <div className="logo-container">
            <Zap size={24} color="#3b82f6" />
            <span className="logo-accent" style={{ color: '#fff', fontSize: '1.2rem' }}>VESTRA</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 900, letterSpacing: '8px', color: '#fff', opacity: 0.8 }}>THE BLUEPRINT</span>
            <p style={{ fontSize: '0.6rem', color: '#3b82f6', fontWeight: 800, marginTop: '4px', letterSpacing: '2px' }}>STRATEGIC DECISION ENGINE</p>
          </div>
          <button onClick={() => window.location.reload()} className="btn-premium" style={{ background: '#3b82f6', color: '#fff', padding: '10px 20px', borderRadius: '8px', fontWeight: 800 }}>
            Launch Analyst
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-wrapper" style={{ padding: '100px 0', borderBottom: '1px solid #1e293b' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
           <div className="grid grid-cols-12 gap-10 items-center">
              <motion.div 
                className="col-span-7"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                 <div style={{ display: 'inline-block', padding: '6px 15px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '100px', color: '#3b82f6', fontSize: '0.75rem', fontWeight: 900, marginBottom: '25px', letterSpacing: '1px' }}>
                    OPERASYONEL MÜKEMMELLİK ALTYAPISI
                 </div>
                 <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '30px', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    STRATEJİK SEÇİM <br/> MİMARİSİ
                 </h1>
                 <p style={{ fontSize: '1.2rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '45px', maxWidth: '600px' }}>
                    Senaryonuza en uygun çok kriterli karar verme modelini belirleyin, analitik temellerinizi oluşturun ve sürdürülebilir operasyonel üstünlük elde edin.
                 </p>
                 <div className="d-flex gap-4">
                    <button className="btn-action" style={{ background: '#3b82f6', color: '#fff' }} onClick={() => document.getElementById('methods').scrollIntoView({behavior:'smooth'})}>
                       Yöntemleri İncele
                    </button>
                    <button className="btn-action" style={{ background: 'transparent', border: '1px solid #1e293b', color: '#f8fafc' }} onClick={() => document.getElementById('scenarios').scrollIntoView({behavior:'smooth'})}>
                       Senaryo Analizi
                    </button>
                 </div>
              </motion.div>

              <div className="col-span-5 relative" style={{ display: 'flex', justifyContent: 'center' }}>
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 1 }}
                   className="glass-panel" 
                   style={{ padding: '30px', borderRadius: '40px', border: '1px solid rgba(59, 130, 246, 0.2)', background: 'rgba(30, 41, 59, 0.4)' }}
                 >
                    <svg width="300" height="260" viewBox="0 0 300 260" fill="none">
                       {/* Abstract Decision Tree SVG */}
                       <motion.path d="M150 40 L150 80" stroke="#3b82f6" strokeWidth="2" animate={{ strokeDashoffset: [100, 0] }} />
                       <circle cx="150" cy="40" r="6" fill="#3b82f6" />
                       <path d="M150 80 L80 140" stroke="#1e293b" strokeWidth="2" />
                       <path d="M150 80 L220 140" stroke="#1e293b" strokeWidth="2" />
                       <rect x="60" y="140" width="40" height="40" rx="8" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeWidth="1" />
                       <rect x="200" y="140" width="40" height="40" rx="8" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeWidth="1" />
                       <motion.path d="M80 180 L50 220" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                       <motion.path d="M80 180 L110 220" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                       <circle cx="50" cy="220" r="4" fill="#1e293b" />
                       <circle cx="110" cy="220" r="4" fill="#06b6d4" />
                    </svg>
                 </motion.div>
              </div>
           </div>
        </div>
      </section>

      {/* 3 STEPS SECTION */}
      <section className="py-20" style={{ borderBottom: '1px solid #1e293b' }}>
         <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
            <div className="text-center mb-20">
               <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Sistematik Karar Altyapısı</h2>
               <p style={{ color: '#94a3b8', marginTop: '10px' }}>Kurumsal süreçler için optimize edilmiş 3 aşamalı analitik iş akışı.</p>
            </div>

            <div className="grid grid-cols-3 gap-8">
               <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-[#1e293b]/40">
                  <div style={{ width: '48px', height: '48px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px' }}>
                     <Database size={24} color="#3b82f6" />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '15px' }}>Adım 1: Veri Girişi</h4>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6 }}>Kullanıcılar karar matrislerini oluşturur. Alternatifler ve kriterler tanımlanır. Sistem, normalize edilmiş karar uzayını hazırlar.</p>
               </div>
               <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-[#1e293b]/40">
                  <div style={{ width: '48px', height: '48px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px' }}>
                     <Network size={24} color="#06b6d4" />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '15px' }}>Adım 2: Algoritmik Analiz</h4>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6 }}>Seçilen metodolojiye göre Entropy, CRITIC veya AHP ile ağırlıklandırma yapılır; TOPSIS, EDAS veya WASPAS ile alternatifler derecelendirilir.</p>
               </div>
               <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-[#1e293b]/40">
                  <div style={{ width: '48px', height: '48px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px' }}>
                     <BarChart3 size={24} color="#10b981" />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '15px' }}>Adım 3: Raporlama</h4>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6 }}>Farklı algoritmaların sonuçları karşılaştırılır. Duyarlılık analizi ile ağırlık değişimlerinin etkisi simüle edilerek nihai karar dokümante edilir.</p>
               </div>
            </div>
         </div>
      </section>

      {/* METHODS CATALOG */}
      <section id="methods" className="py-20" style={{ background: 'rgba(255,255,255,0.01)' }}>
         <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
            <div className="d-flex justify-content-between items-end mb-16">
               <div>
                  <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Karar Verme Metodolojileri</h2>
                  <p style={{ color: '#94a3b8', marginTop: '10px' }}>Dünya standartlarında kullanılan 8 ana çok kriterli karar verme algoritması.</p>
               </div>
               <div className="d-flex gap-2">
                  <button className={`btn-filter ${methodFilter === 'all' ? 'active' : ''}`} onClick={() => setMethodFilter('all')}>Tümü</button>
                  <button className={`btn-filter ${methodFilter === 'weight' ? 'active' : ''}`} onClick={() => setMethodFilter('weight')}>Ağırlıklandırma</button>
                  <button className={`btn-filter ${methodFilter === 'rank' ? 'active' : ''}`} onClick={() => setMethodFilter('rank')}>Sıralama</button>
               </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
               {methods.map((m, i) => (
                  <motion.div 
                    key={i} 
                    className="col-span-12 lg:col-span-6 glass-panel p-8 rounded-3xl border border-white/5 bg-[#1e293b]/20"
                    whileHover={{ translateY: -4 }}
                  >
                     <div className="d-flex justify-content-between mb-6">
                        <div className="d-flex gap-4">
                           <div style={{ color: '#3b82f6' }}>{React.cloneElement(m.icon, { size: 32 })}</div>
                           <div>
                              <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{m.name}</h3>
                              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#3b82f6', letterSpacing: '1px' }}>{m.cat.toUpperCase()}</span>
                           </div>
                        </div>
                        <div className="text-right">
                           <span style={{ fontSize: '0.65rem', color: '#94a3b8', display: 'block' }}>HASSASİYET</span>
                           <span style={{ fontSize: '0.8rem', fontWeight: 800, color: m.accuracy === 'Maksimum' ? '#10b981' : '#fff' }}>{m.accuracy}</span>
                        </div>
                     </div>

                     <div style={{ marginBottom: '25px' }}>
                        <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.6 }}>{m.definition}</p>
                     </div>

                     <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                           <h5 style={{ fontSize: '0.7rem', color: '#3b82f6', fontWeight: 800, marginBottom: '10px' }}>MATEMATİKSEL MANTIK</h5>
                           <ul style={{ fontSize: '0.85rem', color: '#94a3b8', paddingLeft: '15px' }}>
                              {m.logic.map((l, li) => <li key={li} style={{ marginBottom: '5px' }}>{l}</li>)}
                           </ul>
                        </div>
                        <div>
                           <h5 style={{ fontSize: '0.7rem', color: '#3b82f6', fontWeight: 800, marginBottom: '10px' }}>GÜÇLÜ YÖNLER</h5>
                           <ul style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                              {m.strengths.map((s, si) => <li key={si} style={{ marginBottom: '5px', display: 'flex', gap: '5px' }}><CheckCircle2 size={12} color="#10b981" /> {s}</li>)}
                           </ul>
                        </div>
                     </div>

                     <div style={{ padding: '15px 20px', background: 'rgba(255,255,255,0.03)', borderRadius: '15px', borderLeft: '3px solid #3b82f6' }}>
                        <p style={{ fontSize: '0.85rem', color: '#f8fafc', fontWeight: 600 }}>Optimal Kullanım: <span style={{ fontWeight: 400, color: '#94a3b8' }}>{m.optimal}</span></p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20">
         <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
            <h2 className="text-center mb-16" style={{ fontSize: '2.2rem', fontWeight: 800 }}>Model Karşılaştırma Matrisi</h2>
            <div className="glass-panel overflow-hidden rounded-3xl border border-white/5">
               <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                     <tr style={{ background: 'rgba(59, 130, 246, 0.1)' }}>
                        <th style={{ padding: '25px', textAlign: 'left', fontSize: '0.8rem', color: '#3b82f6' }}>SENARYO TÜRÜ</th>
                        <th style={{ padding: '25px', textAlign: 'left', fontSize: '0.8rem', color: '#3b82f6' }}>AĞIRLIKLANDIRMA</th>
                        <th style={{ padding: '25px', textAlign: 'left', fontSize: '0.8rem', color: '#3b82f6' }}>SIRALAMA</th>
                        <th style={{ padding: '25px', textAlign: 'left', fontSize: '0.8rem', color: '#3b82f6' }}>ZORLUK</th>
                        <th style={{ padding: '25px', textAlign: 'left', fontSize: '0.8rem', color: '#3b82f6' }}>SÜRE</th>
                        <th style={{ padding: '25px', textAlign: 'left', fontSize: '0.8rem', color: '#3b82f6' }}>DOĞRULUK</th>
                     </tr>
                  </thead>
                  <tbody>
                     {[
                        { type: 'Objektif Veri Odaklı', w: 'Entropy', r: 'TOPSIS', d: 'Orta', t: '5-7\'', a: 'Yüksek' },
                        { type: 'Kriter Çatışması Mevcut', w: 'CRITIC', w2: 'CODAS', d: 'Yüksek', t: '10-12\'', a: 'Çok Yüksek' },
                        { type: 'Kurum Öncelikleri / Uzman', w: 'AHP', r: 'VIKOR', d: 'Yüksek', t: '15-20\'', a: 'Yüksek' },
                        { type: 'Maksimum Bilimsel Hassasiyet', w: 'CRITIC', r: 'WASPAS', d: 'Çok Yüksek', t: '12-15\'', a: 'Maksimum' },
                        { type: 'Hızlı Operasyonel Karar', w: 'CRITIC', r: 'MOORA', d: 'Düşük', t: '5-6\'', a: 'Orta-Yüksek' }
                     ].map((row, ri) => (
                        <tr key={ri} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                           <td style={{ padding: '20px 25px', fontSize: '0.9rem', fontWeight: 700 }}>{row.type}</td>
                           <td style={{ padding: '20px 25px', fontSize: '0.9rem', color: '#94a3b8' }}>{row.w}</td>
                           <td style={{ padding: '20px 25px', fontSize: '0.9rem', color: '#94a3b8' }}>{row.r || row.w2}</td>
                           <td style={{ padding: '20px 25px', fontSize: '0.9rem', color: '#94a3b8' }}>{row.d}</td>
                           <td style={{ padding: '20px 25px', fontSize: '0.9rem', color: '#94a3b8' }}>{row.t}</td>
                           <td style={{ padding: '20px 25px', fontSize: '0.9rem', color: ri === 3 ? '#10b981' : '#fff', fontWeight: ri === 3 ? 900 : 400 }}>{row.a}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* CASE PROJECTS SECTION */}
      <section id="scenarios" className="py-20">
         <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
            <h2 className="text-center mb-16" style={{ fontSize: '2.2rem', fontWeight: 800 }}>Uygulama Senaryoları ve Vaka Analizleri</h2>
            <div className="grid grid-cols-12 gap-8">
               {caseProjects.map((p, i) => (
                  <div key={i} className="col-span-12 lg:col-span-4 glass-panel p-6 rounded-3xl border border-white/5 bg-[#1e293b]/20" style={{ cursor: 'pointer' }} onClick={() => setSelectedCase(p)}>
                     <div className="d-flex justify-content-between align-items-center mb-6">
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#3b82f6' }}>{p.id}</span>
                        <div style={{ color: '#3b82f6' }}>{p.icon}</div>
                     </div>
                     <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '10px' }}>{p.name}</h3>
                     <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '20px' }}>{p.description}</p>
                     
                     <div style={{ marginBottom: '20px' }}>
                        <table style={{ width: '100%', fontSize: '0.75rem', color: '#94a3b8' }}>
                           <thead>
                              <tr><th style={{ textAlign: 'left' }}>Alternatif</th><th style={{ textAlign: 'right' }}>Maliyet</th></tr>
                           </thead>
                           <tbody>
                              {p.matrix.slice(0, 3).map((r, ri) => (
                                 <tr key={ri}><td style={{ padding: '4px 0' }}>{r.alt}</td><td style={{ textAlign: 'right' }}>{r.cost || r.return}</td></tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                     <button className="btn-v5 w-full" style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', fontSize: '0.8rem' }}>
                        Analiz Detaylarını Görüntüle
                     </button>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* CASE DETAIL MODAL */}
      <AnimatePresence>
         {selectedCase && (
            <motion.div 
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.9)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
              onClick={() => setSelectedCase(null)}
            >
               <motion.div 
                 className="glass-panel"
                 initial={{ scale: 0.9, y: 20 }}
                 animate={{ scale: 1, y: 0 }}
                 style={{ maxWidth: '900px', width: '100%', background: '#0a0e1a', border: '1px solid #1e293b', borderRadius: '32px', padding: '40px', position: 'relative', overflowY: 'auto', maxHeight: '90vh' }}
                 onClick={e => e.stopPropagation()}
               >
                  <button style={{ position: 'absolute', top: '25px', right: '25px', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }} onClick={() => setSelectedCase(null)}>Kapat [Esc]</button>
                  
                  <div className="d-flex gap-4 align-items-center mb-8">
                     <div style={{ color: '#3b82f6' }}>{React.cloneElement(selectedCase.icon, { size: 40 })}</div>
                     <div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>{selectedCase.name}</h2>
                        <span style={{ color: '#3b82f6', fontWeight: 700 }}>SEKTÖR: {selectedCase.sector}</span>
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-10 mb-10">
                     <div className="card-elite" style={{ padding: '25px', background: 'rgba(255,255,255,0.02)' }}>
                        <h4 style={{ fontSize: '0.8rem', color: '#3b82f6', fontWeight: 800, marginBottom: '15px' }}>UYGULANAN ANALİZ MİMARİSİ</h4>
                        <p style={{ fontSize: '1rem', color: '#fff', fontWeight: 600 }}>{selectedCase.analysis.weights}</p>
                        <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '10px' }}>
                           <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{selectedCase.analysis.insight}</p>
                        </div>
                     </div>
                     <div className="card-elite" style={{ padding: '25px', background: 'rgba(16, 185, 129, 0.03)', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
                        <h4 style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 800, marginBottom: '15px' }}>STRATEJİK SONUÇ VE KAZANIM</h4>
                        <p style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 800 }}>{selectedCase.analysis.topsis || selectedCase.analysis.edas}</p>
                        <div style={{ marginTop: '20px', display: 'flex', gap: '10px', alignItems: 'center', color: '#10b981' }}>
                           <TrendingUp size={20} />
                           <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{selectedCase.analysis.gain}</span>
                        </div>
                     </div>
                  </div>

                  <div style={{ textAlign: 'center' }}>
                     <button className="btn-action" style={{ background: '#3b82f6', color: '#fff', width: '100%' }}>Bu Senaryo Verisiyle Analizi Başlat</button>
                  </div>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>

      <footer className="py-20 border-t border-white/5 text-center">
         <p style={{ color: '#475569', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '10px', textTransform: 'uppercase' }}>
            VESTRA ELITE PRO | STRATEGIC DECISION ARCHITECTURE © 2026
         </p>
         <div style={{ marginTop: '20px', color: '#1e293b', fontSize: '0.6rem' }}>
            Kurumsal Karar Destek Sistemleri - Operasyonel Verimlilik ve Bilimsel Analitik Çerçevesi
         </div>
      </footer>

      <style jsx>{`
        .blueprint-paper-v8 {
          min-height: 100vh;
          position: relative;
          z-index: 1;
        }
        .blueprint-hero-grid {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: -1;
        }
        .btn-filter {
           padding: 8px 16px;
           background: transparent;
           border: 1px solid #1e293b;
           color: #94a3b8;
           border-radius: 8px;
           font-size: 0.75rem;
           font-weight: 700;
           cursor: pointer;
           transition: 0.3s;
        }
        .btn-filter.active { background: #3b82f6; color: #fff; border-color: #3b82f6; }
        .btn-action {
           padding: 15px 30px;
           border-radius: 12px;
           font-weight: 800;
           font-size: 1rem;
           cursor: pointer;
           transition: 0.3s;
           display: flex;
           align-items: center;
           gap: 10px;
           border: none;
        }
        .btn-action:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3); }
        .glass-panel { transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .glass-panel:hover { border-color: rgba(59, 130, 246, 0.3); box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
        .grid-cols-12 { display: grid; grid-template-columns: repeat(12, 1fr); }
        .col-span-7 { grid-column: span 7; }
        .col-span-5 { grid-column: span 5; }
        .col-span-12 { grid-column: span 12; }
        @media (min-width: 1024px) {
           .lg\\:col-span-6 { grid-column: span 6; }
           .lg\\:col-span-4 { grid-column: span 4; }
        }
        .items-center { align-items: center; }
        .items-end { align-items: flex-end; }
      `}</style>
    </div>
  );
};

export default Blueprint;
