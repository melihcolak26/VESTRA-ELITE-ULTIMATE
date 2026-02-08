import { useState, useEffect } from 'react'
import './App.css'
import { DECISION_TEMPLATES } from './templates/data'
import Wizard from './components/Wizard'
import Analyst from './components/Analyst'
import Blueprint from './components/Blueprint'
import { 
  Zap, Shield, Cpu, BarChart3, ChevronRight, Play, Globe, Lock, 
  ArrowUpRight, Activity, LayoutDashboard, BookOpen, Layers, 
  Settings as SettingsIcon, Newspaper, FolderKanban
} from 'lucide-react'

function App() {
  const [view, setView] = useState(() => localStorage.getItem('vestra_view') || 'landing')
  const [activeTab, setActiveTab] = useState('analyst')
  const [selectedTemplate, setSelectedTemplate] = useState(null)

  useEffect(() => {
    localStorage.setItem('vestra_view', view)
  }, [view])

  const handleViewChange = (newView) => {
    setView(newView);
  };

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
          {activeTab === 'blueprint' && <Blueprint onBack={() => setActiveTab('analyst')} />}
          {activeTab === 'projects' && (
            <div className="p-10">
               <h2 className="text-3xl font-black mb-8">Kurumsal Senaryo Kütüphanesi</h2>
               <div className="grid grid-cols-2 gap-6">
                  {/* Reuse Case Analysis logic here or redirect to Blueprint's scenario section */}
                  <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-white/2">
                     <p className="text-secondary">Bu bölüm aktif projelerinizi ve geçmiş simülasyonlarınızı içerir.</p>
                     <button className="btn-premium mt-6" onClick={() => setActiveTab('blueprint')}>Senaryoları İncele</button>
                  </div>
               </div>
            </div>
          )}
          {activeTab === 'intel' && (
            <div className="p-10">
               <h2 className="text-3xl font-black mb-8">Canlı Sektörel Veri Akışı</h2>
               <div className="space-y-6">
                  <div className="glass-panel p-6 rounded-2xl border-l-4 border-emerald-500 bg-white/2">
                     <h4 className="font-bold">HMM & HD Hyundai: Otonom Navigasyon</h4>
                     <p className="text-sm text-secondary mt-2">40 gemilik dev AI projesi için imzalar atıldı. Sektörün en büyük ticari AI operasyonu.</p>
                  </div>
                  <div className="glass-panel p-6 rounded-2xl border-l-4 border-blue-500 bg-white/2">
                     <h4 className="font-bold">Rotterdam Limanı AI Testleri</h4>
                     <p className="text-sm text-secondary mt-2">Stolt Tankers, AI tabanlı navigasyon ile kaza riskini %30 düşürdü.</p>
                  </div>
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
          {/* Animated Background Orbs */}
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
                  <Cpu color="#6366f1" size={40} />
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
          <footer className="text-center py-10" style={{ opacity: 0.15 }}>
             <button onClick={() => setView('blueprint')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '0.7rem', letterSpacing: '5px' }}>THE BLUEPRINT</button>
          </footer>
        </div>
      )}

      {view === 'platform' && renderPlatform()}
      
      {view === 'blueprint' && <Blueprint onBack={() => setView('landing')} />}
      
      {view === 'wizard' && selectedTemplate && (
        <div className="container py-5">
          <Wizard template={selectedTemplate} onBack={() => setView('landing')} />
        </div>
      )}
    </div>
  )
}

export default App
