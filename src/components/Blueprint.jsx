import React, { useState } from 'react';
import { 
  ChevronLeft, Zap, ArrowRight, Database, Workflow, TrendingUp, 
  ShieldCheck, Cpu, Package, BarChart3, Layers, Activity, 
  Globe, Scale, FileText, Binary, Terminal, Box, Boxes, 
  Lock, Target, Users, Layout, Network, ClipboardList, Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Blueprint = ({ onBack }) => {
  const [selectedCase, setSelectedCase] = useState(null);

  const methods = [
    { 
      code: 'W-ENT-01', name: 'Shannon Entropy', cat: 'Objektif Kriter Ağırlıklandırma', 
      complexity: 'Orta', time: '5-7 Dakika', icon: <Database />,
      definition: 'Shannon Entropy, bilgi teorisine dayanan objektif bir ağırlıklandırma yöntemidir. Veri setindeki değişkenlik (varyans) düzeyine göre kriter ağırlıklarını belirler. Düşük varyans = düşük önem.',
      logic: [
        'Her kriterin entropi değeri hesaplanır',
        'Düşük entropi → yüksek bilgi içeriği',
        'Ağırlıklar normalize edilir (toplam = 1)'
      ],
      applications: ['Tedarikçi Seçimi', 'Finansal Performans', 'Kalite Kontrol', 'Üretim Verimliliği'],
      strengths: ['Tamamen objektif, insan önyargısı yok', 'Hızlı hesaplama', 'Çok sayıda alternatif için uygun'],
      limitations: ['Stratejik önemi göz ardı edebilir', 'Veri kalitesine bağımlı'],
      optimal: 'Objektif karar gerektiğinde ve stratejik önceliklerin net olmadığı durumlarda tercih edilir.',
      combinations: 'TOPSIS, EDAS, MOORA'
    },
    { 
      code: 'W-CRT-02', name: 'CRITIC Method', cat: 'İlişkisel Ağırlıklandırma', 
      complexity: 'Yüksek', time: '10-12 Dakika', icon: <Activity />,
      definition: 'Kriterler arası korelasyon ve varyansı birlikte değerlendiren hibrit ağırlıklandırma yöntemidir.',
      logic: [
        'Kriterler arası kontrast ölçülür',
        'Çatışma (conflict) analizi yapılır',
        'Dengeli ağırlık dağılımı sağlanır'
      ],
      applications: ['Tedarik Zinciri Optimizasyonu', 'Portföy Çeşitlendirme', 'Rekabet Analizi'],
      strengths: ['Kriterler arası çatışmayı tespit eder', 'Dengeli ağırlıklar sağlar'],
      limitations: ['Hesaplama yükü fazladır', 'Büyük matrislerde karmaşıklık artar'],
      optimal: 'Kriterlerin birbiriyle çeliştiği karmaşık mühendislik problemlerinde kullanılır.',
      combinations: 'CODAS, WASPAS, MOORA'
    },
    { 
      code: 'W-AHP-03', name: 'AHP Protocol', cat: 'Bilişsel Hiyerarşi', 
      complexity: 'Yüksek', time: '15-20 Dakika', icon: <Layers />,
      definition: 'İkili karşılaştırma matrisi ile uzman görüşü bazlı ağırlıklandırma yöntemidir.',
      logic: [
        'Saaty 1-9 ölçeği kullanılır',
        'Tutarlılık oranı (CR) hesaplanır',
        'Nitel veriler sayısallaştırılır'
      ],
      applications: ['Stratejik Planlama', 'Yatırım Kararları', 'Proje Önceliklendirme'],
      strengths: ['Kurum önceliklerini yansıtır', 'Nitel kriterleri modele dahil eder'],
      limitations: ['Öznel yargı içerir', 'Tutarlılık yakalamak zordur'],
      optimal: 'Uzman görüşünün ve stratejik vizyonun kritik olduğu durumlarda vazgeçilmezdir.',
      combinations: 'VIKOR, TOPSIS, MOORA'
    }
  ];

  const caseProjects = [
    { 
      id: 'PROJE #01', name: 'Endüstriyel Hammadde Tedarik Seçimi', sector: 'Otomotiv Yan Sanayi', 
      owner: 'Satın Alma Departmanı', alternatives: '6 Çelik Tedarikçisi', icon: <Box />,
      criteria: [
        { name: 'Birim Maliyet (USD/ton)', weight: '25%' },
        { name: 'Kalite Skoru (ASTM)', weight: '30%' },
        { name: 'Teslimat Güvenilirliği', weight: '20%' },
        { name: 'Lojistik Mesafe (km)', weight: '15%' },
        { name: 'Sürdürülebilirlik', weight: '10%' }
      ],
      architecture: { weight: 'CRITIC', rank: 'TOPSIS' },
      results: [
        { name: 'Türkiye C', score: 0.847 },
        { name: 'Avrupa A', score: 0.782 },
        { name: 'Asya B', score: 0.651 }
      ],
      gain: '%12 Maliyet Tasarrufu + %18 Teslimat Performans Artışı'
    }
  ];

  return (
    <div className="blueprint-paper-v8 fade-in" style={{ paddingBottom: '100px' }}>
      <div className="blueprint-hero-grid" style={{ opacity: 0.15 }}></div>

      {/* NAVIGATION */}
      <nav className="nav-premium" style={{ borderBottom: '1px solid var(--glass-border)', background: 'rgba(2, 6, 23, 0.9)', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(20px)' }}>
        <div className="container d-flex justify-content-between align-items-center" style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
          <div className="logo-container">
            <Zap size={24} color="#10b981" />
            <span className="logo-accent" style={{ color: '#fff' }}>THE BLUEPRINT</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.7rem', marginLeft: '10px', letterSpacing: '2px', fontWeight: 800 }}>STRATEGIC DECISION ENGINE</span>
          </div>
          <button onClick={onBack} className="btn-glass-lg" style={{ padding: '10px 25px', fontSize: '0.8rem' }}>
            <ChevronLeft size={16} /> ANALİZ MERKEZİ
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-wrapper" style={{ padding: '120px 0 160px' }}>
        <div className="container text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="badge-master" style={{ marginBottom: '30px' }}>PRO REHBER V2.0</div>
            <h1 className="heading-premium shimmer-text" style={{ fontSize: '4.5rem', marginBottom: '40px' }}>
              Stratejik Kararlar,<br/>Bilimsel Temeller Üzerine İnşa Edilir.
            </h1>
            <p className="hero-p" style={{ maxWidth: '850px', marginBottom: '60px', marginLeft: 'auto', marginRight: 'auto' }}>
              Senaryoya en uygun yöntemi belirleyin, çok kriterli karar verme modelleriyle alternatifleri analiz edin ve veriye dayalı stratejik sonuçlar elde edin.
            </p>
            
            <div className="d-flex justify-content-center gap-4 relative" style={{ zIndex: 10 }}>
              <button className="btn-premium-lg" onClick={onBack}>
                ANALİZE BAŞLA <ArrowRight size={20} />
              </button>
              <button 
                className="btn-glass-lg" 
                onClick={() => document.getElementById('scenarios').scrollIntoView({behavior:'smooth'})}
              >
                DEMO PROJELERİ İNCELE
              </button>
            </div>

            {/* Visual Decorations */}
            <div className="hero-visuals-container" style={{ position: 'relative', marginTop: '80px', height: '300px' }}>
               {/* Left: Minimal Data Table Visual */}
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 0.4, x: 0 }}
                 transition={{ delay: 0.4, duration: 0.8 }}
                 style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', textAlign: 'left' }}
               >
                  <div className="glass-panel p-4 rounded-xl border-white/5 bg-white/2" style={{ width: '280px' }}>
                     <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-emerald-500/20"></div>
                        <div className="w-12 h-2 rounded-full bg-white/10"></div>
                     </div>
                     <div className="space-y-3">
                        <div className="h-4 bg-white/5 rounded w-full"></div>
                        <div className="h-4 bg-white/5 rounded w-3/4"></div>
                        <div className="h-4 bg-white/10 rounded w-full"></div>
                     </div>
                  </div>
               </motion.div>

               {/* Right: Animated Decision Tree (Simplified SVG) */}
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 0.6, x: 0 }}
                 transition={{ delay: 0.6, duration: 0.8 }}
                 style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)' }}
               >
                  <svg width="240" height="200" viewBox="0 0 240 200" fill="none">
                    <motion.circle cx="120" cy="30" r="10" stroke="#10b981" strokeWidth="2" animate={{ r: [10, 12, 10] }} transition={{ repeat: Infinity, duration: 2 }} />
                    <motion.path d="M120 40 L60 100" stroke="#10b981" strokeWidth="1" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, -10] }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} />
                    <motion.path d="M120 40 L180 100" stroke="#10b981" strokeWidth="1" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, -10] }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} />
                    <circle cx="60" cy="110" r="8" stroke="#6366f1" strokeWidth="2" />
                    <circle cx="180" cy="110" r="8" stroke="#6366f1" strokeWidth="2" />
                  </svg>
               </motion.div>
            </div>
            {/* Scroll Arrow Animation */}
            <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ repeat: Infinity, duration: 2 }}
               style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', opacity: 0.3 }}
            >
               <div style={{ width: '2px', height: '40px', background: 'var(--primary)' }}></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20" style={{ background: 'rgba(255,255,255,0.02)', borderY: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="text-center mb-20">
            <h2 className="text-3xl font-black mb-4">Çok Kriterli Karar Verme Süreci</h2>
            <div style={{ width: '80px', height: '4px', background: 'var(--primary)', margin: '0 auto' }}></div>
          </div>

          <div className="grid grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="glass-panel p-8 rounded-[32px] relative">
              <div className="step-num" style={{ position: 'absolute', top: '-20px', left: '30px', background: 'var(--primary)', color: '#000', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justify: 'center', fontWeight: 900 }}>01</div>
              <div className="icon-box-v6 mb-6"><Database size={32} color="var(--primary)" /></div>
              <h3 className="text-xl font-black mb-4">Veri Yapısını Oluşturun</h3>
              <ul className="text-secondary text-sm flex flex-column gap-3">
                <li className="d-flex gap-2"><ArrowRight size={14} className="text-emerald" /> Karar alternatiflerinizi tanımlayın</li>
                <li className="d-flex gap-2" style={{ opacity: 0.5 }}>Örn: 6 Tedarikçi firma, 5 yatırım fırsatı</li>
                <li className="d-flex gap-2"><ArrowRight size={14} className="text-emerald" /> Değerlendirme kriterlerinizi belirleyin</li>
                <li className="d-flex gap-2" style={{ opacity: 0.5 }}>Örn: Maliyet, Kalite, Teslimat Güvenilirliği</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="glass-panel p-8 rounded-[32px] relative">
              <div className="step-num" style={{ position: 'absolute', top: '-20px', left: '30px', background: 'var(--secondary)', color: '#fff', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justify: 'center', fontWeight: 900 }}>02</div>
              <div className="icon-box-v6 mb-6"><Network size={32} color="var(--secondary)" /></div>
              <h3 className="text-xl font-black mb-4">Analiz Mimarisini Seçin</h3>
              <ul className="text-secondary text-sm flex flex-column gap-3">
                <li className="d-flex gap-2"><ArrowRight size={14} className="text-emerald" /> Kriter Ağırlıklandırma Yöntemi Seçimi</li>
                <li className="d-flex gap-2" style={{ opacity: 0.5 }}>• Entropy, CRITIC veya AHP Protokolü</li>
                <li className="d-flex gap-2"><ArrowRight size={14} className="text-emerald" /> Sıralama Algoritması Belirleme</li>
                <li className="d-flex gap-2" style={{ opacity: 0.5 }}>• TOPSIS, EDAS, CODAS, VIKOR, WASPAS</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="glass-panel p-8 rounded-[32px] relative">
              <div className="step-num" style={{ position: 'absolute', top: '-20px', left: '30px', background: '#f59e0b', color: '#000', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justify: 'center', fontWeight: 900 }}>03</div>
              <div className="icon-box-v6 mb-6"><BarChart3 size={32} color="#f59e0b" /></div>
              <h3 className="text-xl font-black mb-4">Sonuçları Analiz Edin</h3>
              <ul className="text-secondary text-sm flex flex-column gap-3">
                <li className="d-flex gap-2"><ArrowRight size={14} className="text-emerald" /> Skor Bazlı Sıralanmış Alternatifler</li>
                <li className="d-flex gap-2"><ArrowRight size={14} className="text-emerald" /> Karşılaştırmalı Grafik ve Heatmapler</li>
                <li className="d-flex gap-2"><ArrowRight size={14} className="text-emerald" /> Duyarlılık (Sensitivity) Analizi</li>
                <li className="d-flex gap-2"><ArrowRight size={14} className="text-emerald" /> Çoklu Yöntem Konsensüs Doğrulaması</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTINUATION PLACEHOLDER (Will be added after approval) */}
      <div className="container text-center py-20">
         <p className="text-secondary mono text-xs uppercase tracking-[5px]">Metodoloji Kataloğu ve Vaka Analizleri Hazırlanıyor...</p>
      </div>

      <footer className="py-10 border-t border-white/5 text-center">
         <p className="text-secondary text-[10px] uppercase tracking-[10px] font-bold">VESTRA ELITE PRO | STRATEGIC DECISION SOLUTIONS © 2026</p>
      </footer>

      <style jsx>{`
        .blueprint-paper-v8 {
          background-color: #020617;
          background-image: 
            linear-gradient(rgba(16, 185, 129, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          min-height: 100vh;
        }
        .icon-box-v6 {
          width: 64px;
          height: 64px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .badge-master {
          background: linear-gradient(45deg, var(--primary), var(--secondary));
          padding: 6px 20px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 900;
          color: #fff;
          display: inline-block;
          letter-spacing: 2px;
        }
      `}</style>
    </div>
  );
};

export default Blueprint;
