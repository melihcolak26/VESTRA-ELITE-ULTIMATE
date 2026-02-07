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

  const methods = [
    { 
      id: 'entropy',
      name: 'SHANNON ENTROPY', 
      cat: 'Ağırlıklandırma / Objektif Varyans Analizi', 
      complexity: 'Orta', 
      time: '5-7 Dakika', 
      accuracy: 'Yüksek',
      icon: <Database />,
      definition: 'Kriterlerin bilgi içeriğini istatistiksel olarak ölçer. Yüksek varyans gösteren kriterlere (karar vermede ayırt edici olan) daha yüksek ağırlık atanır. Veriye dayalı, uzman müdahalesi gerektirmez.',
      logic: [
        'Karar matrisinin normalize edilmesi (probabilistic dönüşüm)',
        'Her kriter için entropi değeri hesaplama: ej = -k Σ pij ln(pij)',
        'Çeşitlilik katsayısı: dj = 1 - ej',
        'Normalize ağırlık: wj = dj / Σ dj'
      ],
      applications: ['Finansal portföy optimizasyonu', 'Tedarikçi performans değerlendirmesi', 'Kalite kontrol parametreleri'],
      strengths: ['Tamamen objektif, insan önyargısı yok', 'Hızlı hesaplama', 'Çok sayıda alternatif ve kriter için uygun'],
      limitations: ['Stratejik önemi göz ardı edebilir', 'Veri kalitesine bağımlı'],
      optimal: 'Objektif karar gerektiğinde, veri setinde anlamlı varyasyon olduğunda ve stratejik önceliklerin net olmadığı durumlarda tercih edilir.',
      combinations: 'TOPSIS, EDAS, MOORA (hızlı sonuç için)'
    },
    { 
      id: 'critic',
      name: 'CRITIC', 
      cat: 'Ağırlıklandırma / Korelasyon-Duyarlı Analiz', 
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
      applications: ['Ar-Ge projelerinde kriter karmaşasını önleme', 'İnsan kaynakları yetkinlik değerlendirmesi', 'Çok parametreli mühendislik tasarımları'],
      strengths: ['Kriterler arası çatışmayı tespit eder', 'Daha dengeli ağırlıklar verir'],
      limitations: ['Hesaplama yükü fazladır', 'Büyük veri setlerinde teknik yoğunluk artar'],
      optimal: 'Kriterlerin birbiriyle yüksek korelasyon gösterdiği ve bağımsızlık analizinin kritik olduğu senaryolarda kullanılır.',
      combinations: 'CODAS, WASPAS, MOORA'
    },
    { 
      id: 'ahp',
      name: 'AHP (Analytic Hierarchy Process)', 
      cat: 'Ağırlıklandırma / Hiyerarşik Karşılaştırma', 
      complexity: 'Yüksek', 
      time: '15-20 Dakika', 
      accuracy: 'Yüksek',
      icon: <Layers />,
      definition: 'Niteliksel uzman değerlerini niceliksel ağırlıklara dönüştürür. İkili karşılaştırma matrisleri ve tutarlılık analizi (Consistency Ratio < 0.10) ile güvenilir önceliklendirme sağlar.',
      logic: [
        'Saaty ölçeği (1-9) ile ikili karşılaştırma matrisi oluşturma',
        'Özvektör hesaplama (Eigenvector) ile yerel öncelikler',
        'Tutarlılık oranı (CR) kontrolü: CR = CI/RI',
        'Global ağırlıkların hesaplanması'
      ],
      applications: ['Stratejik planlama', 'Lokasyon seçimi', 'Kamu politikaları', 'Yatırım kararları'],
      strengths: ['Kurum önceliklerini yansıtır', 'Nitel kriterleri sayısallaştırır'],
      limitations: ['Öznel yargı içerir', 'Büyük kriter setlerinde tutarlılık zordur'],
      optimal: 'Uzman görüşünün ve stratejik vizyonun sayısal veriden daha öncelikli olduğu yapısal kararlarda kullanılır.',
      combinations: 'VIKOR, TOPSIS, MOORA'
    },
    { 
      id: 'topsis',
      name: 'TOPSIS', 
      cat: 'Sıralama / İdeal Uzaklık Metodu', 
      complexity: 'Orta', 
      time: '5-7 Dakika', 
      accuracy: 'Yüksek',
      icon: <Target />,
      definition: 'Pozitif-ideal (en iyi) ve negatif-ideal (en kötü) çözümlere olan Euclidean mesafelerini hesaplar. En iyiye en yakın ve en kötüye en uzak alternatifi belirler.',
      logic: [
        'Vektör normalizasyonu ve ağırlıklandırma',
        'İdeal (A+) ve anti-ideal (A-) çözümlerin belirlenmesi',
        'Euclidean mesafe hesabı: Di+ = √Σ (vij - vj+)²',
        'Bağıl yakınlık: Ci = Di- / (Di+ + Di-)'
      ],
      applications: ['Ekipman seçimi', 'Yazılım karşılaştırmaları', 'Bina/lokasyon tercihleri'],
      strengths: ['En yaygın kullanılan metot', 'Anlaşılır sonuçlar', 'Dengeli yaklaşım'],
      limitations: ['Kriterler arası korelasyonu yok sayar'],
      optimal: 'Dengeli ve standart bir sıralama algoritması arandığında en güvenilir seçenektir.',
      combinations: 'Entropy, CRITIC, AHP'
    },
    { 
      id: 'edas',
      name: 'EDAS', 
      cat: 'Sıralama / Ortalama Sapma Analizi', 
      complexity: 'Orta', 
      time: '8-10 Dakika', 
      accuracy: 'Yüksek',
      icon: <Scale />,
      definition: 'İdeal çözüm yerine ortalama çözüme olan uzaklığı temel alır. Uç değerlere (outlier) karşı daha robust (dayanıklı) sonuçlar üretir.',
      logic: [
        'Ortalama çözüm (AV) hesabı her kriter için',
        'Pozitif (PDA) ve Negatif (NDA) uzaklık: PDA = max(0, (AV - x)/AV)',
        'Ağırlıklandırılmış toplam skorlar',
        'Normalizasyon ve değerlendirme skoru (AS)'
      ],
      applications: ['Riskli yatırım kararları', 'Volatil veri setleri', 'Finansal belirsizlik altında kararlar'],
      strengths: ['Outlier\'lara karşı dirençli', 'Stabil sonuçlar'],
      limitations: ['Ortalama değerin saptığı küçük örneklemlerde yanılabilir'],
      optimal: 'Veri setinde anomali veya aşırı uç değerler (aykırı veriler) olduğunda tercih edilir.',
      combinations: 'Entropy, CRITIC'
    },
    { 
      id: 'codas',
      name: 'CODAS', 
      cat: 'Sıralama / Hibrit Mesafe Analizi', 
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
      applications: ['Kritik altyapı projeleri', 'Hassas mühendislik kararları', 'Yüksek riskli yatırımlar'],
      strengths: ['İki farklı mesafe metriki kullanımı', 'En güvenilir sonuçları verir'],
      limitations: ['Hesaplama yoğunluğu fazladır'],
      optimal: 'Alternatiflerin performans değerlerinin birbirine çok yakın olduğu hassas mühendislik kararlarında kullanılır.',
      combinations: 'CRITIC'
    },
    { 
      id: 'moora',
      name: 'MOORA', 
      cat: 'Sıralama / Oransal Optimizasyon', 
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
      applications: ['Lojistik operasyonlar', 'Hızlı tedarikçi değerlendirme', 'Operasyonel verimlilik analizi'],
      strengths: ['Basit, hızlı ve etkili', 'Endüstri standardı (özellikle SCM)'],
      limitations: ['Hiyerarşik yapıları desteklemez'],
      optimal: 'Hızın doğruluktan daha önemli olduğu, büyük ölçekli ve hızlı operasyonel kararlarda idealdir.',
      combinations: 'CRITIC, AHP'
    },
    { 
      id: 'waspas',
      name: 'WASPAS', 
      cat: 'Sıralama / Hibrit Hassasiyet Modeli', 
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
      applications: ['Akademik araştırmalar', 'Yüksek hassasiyetli mühendislik seçimleri', 'Bilimsel karar destek sistemleri'],
      strengths: ['En yüksek doğruluk oranı', 'Tutarlı sonuçlar'],
      limitations: ['Matematiksel olarak en yoğun modeldir'],
      optimal: 'Hata payının sıfıra yakın olması gereken stratejik yatırım veya teknik tasarım kararlarında kullanılır.',
      combinations: 'CRITIC'
    }
  ];

  const caseProjects = [
    { 
      id: 'PROJE #01', 
      name: 'Endüstriyel Hammadde Tedarik Seçimi', 
      sector: 'İmalat / Otomotiv', 
      owner: 'Satın Alma Departmanı',
      description: '6 farklı çelik tedarikçisinin maliyet, kalite (ASTM standartları) ve lojistik performansına göre optimizasyonu.',
      icon: <Package />,
      matrix: [
        { alt: 'Tedarikçi A', cost: '45.50', time: '3', quality: '95', stock: '10.000' },
        { alt: 'Tedarikçi B', cost: '42.00', time: '5', quality: '88', stock: '15.000' },
        { alt: 'Tedarikçi C', cost: '48.75', time: '2', quality: '98', stock: '8.000' },
        { alt: 'Tedarikçi D', cost: '41.25', time: '7', quality: '85', stock: '20.000' }
      ],
      analysis: {
        weights: 'Entropy Ağırlıkları: Maliyet (0.35), Süre (0.28), Kalite (0.22), Kapasite (0.15)',
        results: '1. Türkiye C (0.78), 2. Tedarikçi A (0.72)',
        insight: 'Maliyet ve Kalite arasında negatif korelasyon (-0.82) tespit edildi. CRITIC bu kriterlere yüksek ayırt edicilik atadı.',
        gain: '%12 maliyet tasarrufu + %18 teslimat performans artışı (yıllık bazda).'
      }
    },
    { 
      id: 'PROJE #02', 
      name: 'Yönetici Pozisyonu Değerlendirme', 
      sector: 'İnsan Kaynakları', 
      owner: 'İK Direktörü',
      description: 'Deneyim, teknik sınav, mülakat performansı ve liderlik yetkinliklerine göre 6 yönetici adayının analizi.',
      icon: <Users />,
      matrix: [
        { alt: 'Aday 1', cost: '8 Yıl', time: '85', quality: '92', stock: '88' },
        { alt: 'Aday 4', cost: '10 Yıl', time: '82', quality: '95', stock: '85' },
        { alt: 'Aday 2', cost: '12 Yıl', time: '78', quality: '85', stock: '82' }
      ],
      analysis: {
        weights: 'AHP Ağırlıkları: Mülakat (0.30), Teknik (0.25), Liderlik (0.25), Deneyim (0.20)',
        results: 'Aday 4 (Skor: 0.81) - Dengeli Yetkinlik Profili',
        insight: 'VIKOR analizi ile uzlaşmacı en iyi aday olarak 1. Aday 1 (0.29) seçilmiştir.',
        gain: 'Doğru yerleştirme ile ekip verimliliğinde %22 artış beklentisi.'
      }
    },
    { 
      id: 'PROJE #03', 
      name: 'Kara Taşımacılığı Firması Seçimi', 
      sector: 'Lojistik / SCM', 
      owner: 'Tedarik Zinciri Müdürü',
      description: 'Güzergah maliyeti, taşıma süresi ve hasar oranlarına göre 9 3PL lojistik partnerinin karşılaştırılması.',
      icon: <Globe />,
      matrix: [
        { alt: 'Firma X3', cost: '31.000 TL', time: '42s', quality: '0.3', stock: 'Tam' },
        { alt: 'Firma X1', cost: '28.500 TL', time: '48s', quality: '0.8', stock: 'Tam' },
        { alt: 'Firma X5', cost: '29.750 TL', time: '45s', quality: '0.5', stock: 'Tam' }
      ],
      analysis: {
        weights: 'CRITIC Ağırlıkları: Taşıma Süresi ve Hasar Oranı ana belirleyici.',
        results: 'MOORA Sonucu: 1. Firma X3 (En iyi oransal performans)',
        insight: 'CODAS analizi, Firma X4\'ün düşük performansını (outlier) kesin olarak saptayarak riski elimine etti.',
        gain: '%15 teslimat süresi azalması, müşteri memnuniyetinde %28 artış.'
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
            <span className="logo-accent" style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 900 }}>VESTRA</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 900, letterSpacing: '8px', color: '#fff', opacity: 0.8 }}>THE BLUEPRINT</span>
            <p style={{ fontSize: '0.6rem', color: '#3b82f6', fontWeight: 800, marginTop: '4px', letterSpacing: '2px' }}>STRATEJİK KARAR ÇERÇEVESİ</p>
          </div>
          <button onClick={onBack} className="btn-premium" style={{ background: 'transparent', border: '1px solid #3b82f6', color: '#3b82f6', padding: '10px 25px', borderRadius: '8px', fontWeight: 800, cursor: 'pointer' }}>
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
                 <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '30px', color: '#fff' }}>
                    HER BÜYÜK KARAR <br/> BİR PLAN İLE BAŞLAR
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
                   style={{ padding: '40px', borderRadius: '40px', border: '1px solid rgba(59, 130, 246, 0.2)', background: 'rgba(30, 41, 59, 0.4)' }}
                 >
                    <svg width="300" height="260" viewBox="0 0 300 260" fill="none">
                       {/* Animated Decision Architecture Diagram */}
                       <motion.path d="M150 40 L150 80" stroke="#3b82f6" strokeWidth="2" />
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
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '15px' }}>Adım 1: Veri Girişi ve Parametreleştirme</h4>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6 }}>Kullanıcılar karar matrislerini oluşturur. Alternatifler ve kriterler tanımlanır. Sistem, normalize edilmiş karar uzayını hazırlar.</p>
               </div>
               <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-[#1e293b]/40">
                  <div style={{ width: '48px', height: '48px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px' }}>
                     <Network size={24} color="#06b6d4" />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '15px' }}>Adım 2: Algoritmik Analiz ve Ağırlıklandırma</h4>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6 }}>Entropy, CRITIC veya AHP ile kriter önem düzeyleri belirlenir; TOPSIS, EDAS veya WASPAS ile alternatifler matematiksel olarak derecelendirilir.</p>
               </div>
               <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-[#1e293b]/40">
                  <div style={{ width: '48px', height: '48px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px' }}>
                     <BarChart3 size={24} color="#10b981" />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '15px' }}>Adım 3: Çok Senaryolu Raporlama</h4>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6 }}>Farklı algoritmaların sonuçları karşılaştırılır. Duyarlılık analizi ile ağırlık değişimlerinin etkisi simüle edilerek nihai karar dokümante edilir.</p>
               </div>
            </div>
         </div>
      </section>

      {/* METHODS CATALOG */}
      <section id="methods" className="py-20" style={{ background: 'rgba(255,255,255,0.01)' }}>
         <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
            <h2 className="mb-16" style={{ fontSize: '2.2rem', fontWeight: 800 }}>Karar Verme Metodolojileri</h2>

            <div className="grid grid-cols-12 gap-6">
               {methods.map((m, i) => (
                  <motion.div 
                    key={i} 
                    className="col-span-12 lg:col-span-6 glass-panel p-10 rounded-[32px] border border-white/5 bg-[#1e293b]/20"
                    whileHover={{ translateY: -4 }}
                  >
                     <div className="d-flex justify-content-between mb-8">
                        <div className="d-flex gap-5">
                           <div style={{ color: '#3b82f6' }}>{React.cloneElement(m.icon, { size: 40 })}</div>
                           <div>
                              <h3 style={{ fontSize: '1.6rem', fontWeight: 800 }}>{m.name}</h3>
                              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#3b82f6', letterSpacing: '1px' }}>{m.cat.toUpperCase()}</span>
                           </div>
                        </div>
                     </div>

                     <div style={{ marginBottom: '30px' }}>
                        <p style={{ fontSize: '1rem', color: '#cbd5e1', lineHeight: 1.6 }}>{m.definition}</p>
                     </div>

                     <div className="space-y-6">
                        <div>
                           <h5 style={{ fontSize: '0.75rem', color: '#3b82f6', fontWeight: 800, marginBottom: '15px', textTransform: 'uppercase' }}>Nasıl Çalışır?</h5>
                           <ul style={{ fontSize: '0.9rem', color: '#94a3b8', paddingLeft: '15px', listStyleType: 'decimal' }}>
                              {m.logic.map((l, li) => <li key={li} style={{ marginBottom: '8px' }}>{l}</li>)}
                           </ul>
                        </div>
                        <div>
                           <h5 style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 800, marginBottom: '15px', textTransform: 'uppercase' }}>Güçlü Yönler</h5>
                           <ul style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                              {m.strengths.map((s, si) => <li key={si} style={{ marginBottom: '8px', display: 'flex', gap: '8px' }}><CheckCircle2 size={14} color="#10b981" /> {s}</li>)}
                           </ul>
                        </div>
                        <div>
                           <h5 style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 800, marginBottom: '15px', textTransform: 'uppercase' }}>Uygulama Alanları</h5>
                           <div className="flex flex-wrap gap-2">
                              {m.applications.map((a, ai) => <span key={ai} style={{ fontSize: '0.75rem', padding: '4px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px' }}>{a}</span>)}
                           </div>
                        </div>
                     </div>

                     <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '20px', borderLeft: '4px solid #3b82f6' }}>
                        <p style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 600 }}>Optimal Kullanım Koşulları: <span style={{ fontWeight: 400, color: '#94a3b8' }}>{m.optimal}</span></p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* CASE PROJECTS SECTION */}
      <section id="scenarios" className="py-20">
         <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
            <h2 className="text-center mb-16" style={{ fontSize: '2.2rem', fontWeight: 800 }}>Uygulama Senaryoları ve Gerçek Vaka Analizleri</h2>
            <div className="grid grid-cols-12 gap-8">
               {caseProjects.map((p, i) => (
                  <div key={i} className="col-span-12 lg:col-span-4 glass-panel p-8 rounded-[40px] border border-white/5 bg-[#1e293b]/20" style={{ cursor: 'pointer' }} onClick={() => setSelectedCase(p)}>
                     <div className="d-flex justify-content-between align-items-center mb-8">
                        <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#3b82f6' }}>{p.id}</span>
                        <div style={{ color: '#3b82f6' }}>{React.cloneElement(p.icon, { size: 32 })}</div>
                     </div>
                     <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '15px' }}>{p.name}</h3>
                     <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '2px' }}>SEKTÖR: {p.sector}</span>
                     <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.5, marginTop: '20px', marginBottom: '30px' }}>{p.description}</p>
                     
                     <div style={{ marginBottom: '30px' }}>
                        <table style={{ width: '100%', fontSize: '0.85rem', color: '#94a3b8' }}>
                           <thead>
                              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                 <th style={{ textAlign: 'left', padding: '10px 0' }}>Alternatif</th>
                                 <th style={{ textAlign: 'right', padding: '10px 0' }}>Birim Veri</th>
                              </tr>
                           </thead>
                           <tbody>
                              {p.matrix.slice(0, 3).map((r, ri) => (
                                 <tr key={ri}><td style={{ padding: '8px 0' }}>{r.alt}</td><td style={{ textAlign: 'right', fontWeight: 700, color: '#fff' }}>{r.cost || r.return}</td></tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                     <button className="btn-action w-full" style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', fontSize: '0.9rem', justifyContent: 'center' }}>
                        Detaylı Analizi Görüntüle <ExternalLink size={16} />
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
              style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.95)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
              onClick={() => setSelectedCase(null)}
            >
               <motion.div 
                 className="glass-panel"
                 initial={{ scale: 0.95, y: 20 }}
                 animate={{ scale: 1, y: 0 }}
                 style={{ maxWidth: '1000px', width: '100%', background: '#0a0e1a', border: '1px solid #1e293b', borderRadius: '48px', padding: '50px', position: 'relative', overflowY: 'auto', maxHeight: '90vh' }}
                 onClick={e => e.stopPropagation()}
               >
                  <button style={{ position: 'absolute', top: '30px', right: '30px', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontWeight: 800 }} onClick={() => setSelectedCase(null)}>Kapat [Esc]</button>
                  
                  <div className="d-flex gap-6 align-items-center mb-12">
                     <div style={{ color: '#3b82f6' }}>{React.cloneElement(selectedCase.icon, { size: 56 })}</div>
                     <div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>{selectedCase.name}</h2>
                        <div className="d-flex gap-4 mt-2">
                           <span style={{ color: '#3b82f6', fontWeight: 800, fontSize: '0.8rem' }}>SEKTÖR: {selectedCase.sector}</span>
                           <span style={{ color: '#94a3b8', fontWeight: 800, fontSize: '0.8rem' }}>SAHİBİ: {selectedCase.owner}</span>
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-10 mb-12">
                     <div style={{ padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '32px', border: '1px solid #1e293b' }}>
                        <h4 style={{ fontSize: '0.9rem', color: '#3b82f6', fontWeight: 800, marginBottom: '20px' }}>ANALİZ MİMARİSİ</h4>
                        <p style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 600, marginBottom: '20px' }}>{selectedCase.analysis.weights}</p>
                        <div style={{ padding: '20px', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '15px' }}>
                           <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.5 }}>{selectedCase.analysis.insight}</p>
                        </div>
                     </div>
                     <div style={{ padding: '30px', background: 'rgba(16, 185, 129, 0.03)', borderRadius: '32px', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
                        <h4 style={{ fontSize: '0.9rem', color: '#10b981', fontWeight: 800, marginBottom: '20px' }}>STRATEJİK SONUÇ VE KAZANIM</h4>
                        <p style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 800, marginBottom: '20px' }}>{selectedCase.analysis.results}</p>
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', color: '#10b981' }}>
                           <TrendingUp size={28} />
                           <span style={{ fontSize: '1rem', fontWeight: 800 }}>KAZANIM: {selectedCase.analysis.gain}</span>
                        </div>
                     </div>
                  </div>

                  <button className="btn-action" style={{ background: '#3b82f6', color: '#fff', width: '100%', justifyContent: 'center', padding: '20px', borderRadius: '16px' }}>
                     Bu Şablonu Kullanarak Analizi Başlat
                  </button>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>

      <footer className="py-20 border-t border-white/5 text-center">
         <p style={{ color: '#475569', fontSize: '0.8rem', fontWeight: 900, letterSpacing: '12px', textTransform: 'uppercase' }}>
            VESTRA INTELLIGENCE PRO © 2026
         </p>
         <div style={{ marginTop: '20px', color: '#1e293b', fontSize: '0.7rem', fontWeight: 800 }}>
            PROFESYONEL ÇKKV KARAR REHBERİ - B2B KURUMSAL ÇERÇEVE
         </div>
      </footer>

      <style jsx>{`
        .blueprint-paper-v8 {
          min-height: 100vh;
          position: relative;
          z-index: 1;
          font-family: 'Inter', sans-serif;
        }
        .blueprint-hero-grid {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          z-index: -1;
        }
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
        .btn-action:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(59, 130, 246, 0.2); }
        .glass-panel { transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .grid-cols-12 { display: grid; grid-template-columns: repeat(12, 1fr); }
        .col-span-7 { grid-column: span 7; }
        .col-span-5 { grid-column: span 5; }
        .col-span-12 { grid-column: span 12; }
        @media (min-width: 1024px) {
           .lg\\:col-span-6 { grid-column: span 6; }
           .lg\\:col-span-4 { grid-column: span 4; }
        }
      `}</style>
    </div>
  );
};

export default Blueprint;
