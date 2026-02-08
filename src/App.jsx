import { useState, useEffect } from 'react'
import './App.css'
import { DECISION_TEMPLATES } from './templates/data'
import Wizard from './components/Wizard'
import Analyst from './components/Analyst'
import Blueprint from './components/Blueprint'
import { 
  Zap, Shield, Cpu, BarChart3, ChevronRight, Play, Globe, Lock, 
  ArrowUpRight, Activity, LayoutDashboard, BookOpen, Layers, 
  Settings as SettingsIcon, Newspaper, FolderKanban, CheckCircle2,
  TrendingUp, ExternalLink, Database, Info
} from 'lucide-react'

function App() {
  const [view, setView] = useState(() => localStorage.getItem('vestra_view') || 'landing')
  const [activeTab, setActiveTab] = useState('analyst')
  const [selectedCase, setSelectedCase] = useState(null)

  useEffect(() => {
    localStorage.setItem('vestra_view', view)
  }, [view])

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const caseProjects = [
    { 
      id: 'PROJE #01', 
      name: 'Endüstriyel Hammadde Tedarik Seçimi', 
      sector: 'İmalat / Otomotiv', 
      description: '6 farklı çelik tedarikçisinin maliyet, kalite ve lojistik performansına göre optimizasyonu.',
      matrix: [
        { alt: 'Tedarikçi A', cost: '45.50', time: '3', quality: '95', stock: '10k' },
        { alt: 'Tedarikçi C', cost: '48.75', time: '2', quality: '98', stock: '8k' }
      ],
      analysis: {
        weights: 'Entropy: Maliyet (0.35), Süre (0.28)',
        results: '1. Türkiye C (0.78), 2. Tedarikçi A (0.72)',
        gain: '%12 maliyet tasarrufu.'
      }
    },
    { 
      id: 'PROJE #02', 
      name: 'Yönetici Pozisyonu Değerlendirme', 
      sector: 'İK / Kurumsal', 
      description: 'Yetkinlik bazlı 6 yönetici adayının hiyerarşik analizi ve tutarlılık kontrolü.',
      matrix: [
        { alt: 'Aday 4', cost: '10 Yıl', time: '82', quality: '95', stock: '85' },
        { alt: 'Aday 1', cost: '8 Yıl', time: '85', quality: '92', stock: '88' }
      ],
      analysis: {
        weights: 'AHP: Mülakat (0.30), Teknik (0.25)',
        results: 'Aday 4 (0.81) - Dengeli Profil',
        gain: 'Ekip verimliliğinde %22 artış.'
      }
    },
    { 
      id: 'PROJE #03', 
      name: 'Kara Taşımacılığı Partner Seçimi', 
      sector: 'Lojistik / SCM', 
      description: 'Güzergah maliyeti ve hasar oranlarına göre 9 nakliye firmasının karşılaştırılması.',
      matrix: [
        { alt: 'Firma X3', cost: '31k TL', time: '42s', quality: '0.3', stock: 'Tam' },
        { alt: 'Firma X1', cost: '28k TL', time: '48s', quality: '0.8', stock: 'Tam' }
      ],
      analysis: {
        weights: 'CRITIC: Hasar Oranı ana belirleyici.',
        results: '1. Firma X3 (En iyi oran)',
        gain: '%15 teslimat süresi iyileşmesi.'
      }
    },
    { 
      id: 'PROJE #04', 
      name: 'Üretim Tesisi Lokasyon Seçimi', 
      sector: 'Strateji / Operasyon', 
      description: '7 şehir adayının altyapı, teşvik ve işgücü maliyetlerine göre 10 yıllık analizi.',
      matrix: [
        { alt: 'Şehir Y', cost: '12k TL', time: 'A+', quality: '90', stock: 'Yüksek' }
      ],
      analysis: {
        weights: 'Entropy: Teşvik ve Altyapı.',
        results: '1. Marmara Bölgesi Y Şehri',
        gain: 'Optimal maliyet-fayda dengesi.'
      }
    }
  ];

  // Modern Platform Shell with Tabs
  const renderPlatform = () => {
    return (
      <div className="platform-shell fade-in">
        <aside className="platform-sidebar">
          <div className="sidebar-brand">
             <Zap size={22} fill="#10b981" color="#10b981" />
             <span className="logo-text">VESTRA PRO</span>
          </div>
          
          <nav className="sidebar-nav">
             <button className={`nav-tab ${activeTab === 'analyst' ? 'active' : ''}`} onClick={() => setActiveTab('analyst')}>
                <LayoutDashboard size={18} /> <span>Karar Paneli</span>
             </button>
             <button className={`nav-tab ${activeTab === 'blueprint' ? 'active' : ''}`} onClick={() => setActiveTab('blueprint')}>
                <BookOpen size={18} /> <span>Metodoloji</span>
             </button>
             <button className={`nav-tab ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => setActiveTab('projects')}>
                <FolderKanban size={18} /> <span>Vaka Analizleri</span>
             </button>
             <button className={`nav-tab ${activeTab === 'intel' ? 'active' : ''}`} onClick={() => setActiveTab('intel')}>
                <Newspaper size={18} /> <span>Sektörel Zekâ</span>
             </button>
          </nav>

          <div className="sidebar-footer">
             <button className="nav-tab" onClick={() => setView('landing')}>
                <ChevronRight size={18} style={{ transform: 'rotate(180deg)' }} /> <span>Çıkış Yap</span>
             </button>
          </div>
        </aside>

        <main className="platform-content">
          {activeTab === 'analyst' && <Analyst onBack={() => setView('landing')} setView={setView} />}
          
          {activeTab === 'blueprint' && (
            <div className="fade-in">
              <Blueprint onBack={() => setActiveTab('analyst')} />
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="p-12 fade-in">
               <div className="mb-12">
                  <h2 className="text-4xl font-black mb-4">Kurumsal Vaka Kütüphanesi</h2>
                  <p className="text-secondary text-lg">Gerçek verilerle yapılandırılmış stratejik senaryoları inceleyin.</p>
               </div>

               <div className="grid grid-cols-2 gap-8">
                  {caseProjects.map((p, i) => (
                    <div key={i} className="glass-panel p-8 rounded-[32px] border border-white/5 bg-white/2 hover:border-emerald-500/30 transition-all">
                       <div className="flex justify-between mb-6">
                          <span className="text-xs font-black text-emerald-500 tracking-widest">{p.id}</span>
                          <span className="text-xs font-bold text-secondary uppercase">{p.sector}</span>
                       </div>
                       <h3 className="text-xl font-bold mb-4">{p.name}</h3>
                       <p className="text-secondary text-sm mb-6 leading-relaxed">{p.description}</p>
                       
                       <div className="space-y-4 mb-8">
                          <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                             <div className="flex items-center gap-2 text-xs font-bold"><Database size={14} /> ANALİZ</div>
                             <span className="text-xs">{p.analysis.results}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/10">
                             <div className="flex items-center gap-2 text-xs font-bold text-emerald-500"><TrendingUp size={14} /> KAZANIM</div>
                             <span className="text-xs font-bold text-emerald-500">{p.analysis.gain}</span>
                          </div>
                       </div>

                       <button className="btn-v5 w-full justify-center bg-white/5 hover:bg-white/10" onClick={() => setActiveTab('analyst')}>
                          Bu Veriyi Karar Paneline Aktar
                       </button>
                    </div>
                  ))}
               </div>
            </div>
          )}

          {activeTab === 'intel' && (
            <div className="p-12 fade-in">
               <div className="mb-12">
                  <h2 className="text-4xl font-black mb-4">Intelligence Dashboard</h2>
                  <p className="text-secondary text-lg">Denizcilik ve AI dünyasından anlık stratejik veri akışı.</p>
               </div>

               <div className="space-y-6">
                  {[
                    { title: 'HMM & HD Hyundai Otonom Operasyonu', body: '40 gemilik filo AI navigasyon sistemlerine (HiNAS) geçiş yapıyor. Operasyonel maliyetlerde %15 düşüş öngörülüyor.', tag: 'DENİZCİLİK', color: '#10b981' },
                    { title: 'Super Bowl LX: ai.com Otonom Ajan Lansmanı', body: 'Bugün duyurulan yeni nesil ajan mimarisi, kurumsal karar süreçlerini saniyelere indirecek bir hıza sahip.', tag: 'TEKNOLOJİ', color: '#6366f1' },
                    { title: 'Rotterdam Limanı: Güvenlik Analitiği', body: 'Stolt Tankers, AI navigasyon denemeleriyle congested sularda kaza riskini %30 azalttığını raporladı.', tag: 'LOJİSTİK', color: '#3b82f6' },
                    { title: 'Shadow Fleet & Dark Data Krizi', body: '3.000 geminin AIS manipülasyonu yaptığı saptandı. Vestra gibi şeffaf analitik motorlarına talep artıyor.', tag: 'GÜVENLİK', color: '#f59e0b' }
                  ].map((news, idx) => (
                    <div key={idx} className="glass-panel p-8 rounded-[32px] border border-white/5 bg-white/2 relative overflow-hidden group">
                       <div className="flex justify-between items-center mb-4">
                          <span style={{ color: news.color }} className="text-xs font-black tracking-widest">{news.tag}</span>
                          <span className="text-[10px] text-secondary font-bold">CANLI | 08 ŞUBAT 2026</span>
                       </div>
                       <h4 className="text-xl font-bold mb-3">{news.title}</h4>
                       <p className="text-secondary leading-relaxed">{news.body}</p>
                       <div className="absolute right-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowUpRight size={20} className="text-secondary" />
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          )}
        </main>
      </div>
    );
  };

  return (
    <div className="platform-root" style={{ background: '#000', minHeight: '100vh', color: '#fff' }}>
      {view === 'landing' && (
        <div className="landing-v5 fade-in">
          <div className="glow-orb" style={{ top: '5%', left: '10%', width: '600px', height: '600px', background: 'rgba(16, 185, 129, 0.1)', animation: 'pulse-slow 8s infinite' }}></div>
          <div className="glow-orb" style={{ bottom: '10%', right: '5%', width: '700px', height: '700px', background: 'rgba(99, 102, 241, 0.08)', animation: 'pulse-slow 12s infinite reverse' }}></div>

          <nav className="nav-premium" style={{ background: 'rgba(2, 6, 23, 0.95)', padding: '25px 50px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1280px', margin: '0 auto' }}>
              <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ padding: '6px', border: '2px solid #10b981', borderRadius: '8px' }}>
                  <Zap color="#10b981" fill="#10b981" size={24} />
                </div>
                <span style={{ fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-1px' }}>VESTRA INTELLIGENCE PRO</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button 
                  style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', padding: '12px 30px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.85rem' }} 
                  onClick={() => setView('platform')}
                >
                  Launch Analyst
                </button>
              </div>
            </div>
          </nav>

          <main className="container" style={{ textAlign: 'center', paddingTop: '180px', maxWidth: '1280px', margin: '0 auto' }}>
            <h1 className="shimmer-text" style={{ fontSize: '7rem', fontWeight: 900, letterSpacing: '-6px', lineHeight: '0.9', marginBottom: '40px' }}>
               Elite Kararlar için <br/> Bilimsel Analitik.
            </h1>
            
            <p style={{ fontSize: '1.8rem', color: '#94A3B8', maxWidth: '900px', margin: '0 auto 70px', lineHeight: '1.4', fontWeight: 500 }}>
              Melih Çolak & Orti ortaklığıyla geliştirilen Vestra, karmaşık stratejik seçimleri 12+ hibrit MCDM algoritması ile kusursuz bir kesinliğe dönüştürür.
            </p>
            
            <div style={{ display: 'flex', gap: '25px', justifyContent: 'center' }}>
               <button 
                 style={{ background: '#10b981', color: '#000', padding: '22px 60px', borderRadius: '12px', fontWeight: 900, cursor: 'pointer', border: 'none', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '15px' }} 
                 onClick={() => setView('platform')}
               >
                 Sistemi Başlat <Play size={24} fill="currentColor" />
               </button>
               <button 
                 style={{ background: 'rgba(255,255,255,0.03)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', padding: '22px 60px', borderRadius: '12px', fontWeight: 900, cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '15px' }} 
                 onClick={() => setView('platform')}
               >
                 Profesyonel Panel <BarChart3 size={24} />
               </button>
            </div>

            <div style={{ marginTop: '150px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', paddingBottom: '100px' }}>
               <div style={{ padding: '50px', background: 'rgba(15, 23, 42, 0.5)', borderRadius: '30px', border: '1px solid rgba(255, 255, 255, 0.05)', textAlign: 'left' }}>
                  <Shield color="#10b981" size={40} />
                  <h3 style={{ marginTop: '25px', fontSize: '1.8rem', fontWeight: 900 }}>Hibrit Modelleme</h3>
                  <p style={{ color: '#94A3B8', marginTop: '15px', fontSize: '1.1rem', lineHeight: '1.6' }}>TOPSIS, EDAS ve CODAS modellerinin konsensüsü ile hatasız bilimsel sonuçlar.</p>
               </div>
               <div style={{ padding: '50px', background: 'rgba(15, 23, 42, 0.5)', borderRadius: '30px', border: '1px solid rgba(255, 255, 255, 0.05)', textAlign: 'left' }}>
                  <Activity color="#6366f1" size={40} />
                  <h3 style={{ marginTop: '25px', fontSize: '1.8rem', fontWeight: 900 }}>Akıllı Ağırlık</h3>
                  <p style={{ color: '#94A3B8', marginTop: '15px', fontSize: '1.1rem', lineHeight: '1.6' }}>Shannon Entropy ve CRITIC algoritmaları sayesinde kriterlerinizin önemini belirler.</p>
               </div>
               <div style={{ padding: '50px', background: 'rgba(15, 23, 42, 0.5)', borderRadius: '30px', border: '1px solid rgba(255, 255, 255, 0.05)', textAlign: 'left' }}>
                  <Lock color="#f59e0b" size={40} />
                  <h3 style={{ marginTop: '25px', fontSize: '1.8rem', fontWeight: 900 }}>Veri Güvenliği</h3>
                  <p style={{ color: '#94A3B8', marginTop: '15px', fontSize: '1.1rem', lineHeight: '1.6' }}>Tüm analizleriniz yerel olarak saklanır, verileriniz hiçbir zaman dışarı sızmaz.</p>
               </div>
            </div>
          </main>
        </div>
      )}

      {view === 'platform' && renderPlatform()}
      
      {view === 'wizard' && selectedTemplate && (
        <div className="container py-5">
          <Wizard template={selectedTemplate} onBack={() => setView('landing')} />
        </div>
      )}
    </div>
  )
}

export default App
