import { useState, useEffect } from 'react'
import './App.css'
import { DECISION_TEMPLATES } from './templates/data'
import Wizard from './components/Wizard'
import Analyst from './components/Analyst'
import Blueprint from './components/Blueprint'
import { Zap, Shield, Cpu, BarChart3, ChevronRight, Play, Globe, Lock, ArrowUpRight } from 'lucide-react'

function App() {
  const [view, setView] = useState(() => localStorage.getItem('vestra_view') || 'landing')
  const [selectedTemplate, setSelectedTemplate] = useState(null)

  useEffect(() => {
    localStorage.setItem('vestra_view', view)
  }, [view])

  return (
    <div className="platform-root">
      {view === 'landing' && (
        <div className="landing-v5">
          {/* Animated Background Orbs */}
          <div className="glow-orb" style={{ top: '5%', left: '10%', width: '600px', height: '600px', background: 'rgba(16, 185, 129, 0.1)', animation: 'pulse-slow 8s infinite' }}></div>
          <div className="glow-orb" style={{ bottom: '10%', right: '5%', width: '700px', height: '700px', background: 'rgba(99, 102, 241, 0.08)', animation: 'pulse-slow 12s infinite reverse' }}></div>

          <nav className="nav-premium" style={{ padding: '25px 50px', background: 'transparent', borderBottom: '1px solid rgba(255, 255, 255, 0.03)' }}>
            <div className="logo-container">
              <div className="icon-glow-sm" style={{ padding: '8px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '10px' }}><Zap size={22} fill="#10b981" color="#10b981" /></div>
              <span className="logo-accent" style={{ fontWeight: 900, fontSize: '1.4rem', color: '#fff', letterSpacing: '-1px' }}>VESTRA INTELLIGENCE PRO</span>
            </div>
            <div className="d-flex align-items-center">
              <button 
                className="btn-glass-sm"
                style={{ background: 'rgba(255,255,255,0.03)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', padding: '10px 25px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}
                onClick={() => setView('analyst')}
              >
                Launch Analyst
              </button>
            </div>
          </nav>

          <section className="hero-wrapper" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
            <div className="container text-center">
              <h1 className="heading-premium shimmer-text" style={{ fontSize: '6rem', fontWeight: 900, marginBottom: '35px', lineHeight: '1.05', letterSpacing: '-4px' }}>
                Elite Kararlar için<br/>Bilimsel Analitik.
              </h1>
              <p className="hero-p" style={{ fontSize: '1.25rem', color: '#94A3B8', maxWidth: '800px', margin: '0 auto 60px', lineHeight: '1.4' }}>
                Melih Çolak & Orti ortaklığıyla geliştirilen Vestra, karmaşık stratejik seçimleri 12+ hibrit MCDM algoritması ile kusursuz bir kesinliğe dönüştürür.
              </p>
              
              <div className="d-flex justify-content-center gap-5">
                <button 
                  style={{ background: '#10b981', color: '#000', padding: '18px 45px', borderRadius: '12px', fontWeight: 900, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem' }}
                  onClick={() => setView('analyst')}
                >
                   Sistemi Başlat <Play size={20} fill="currentColor" />
                </button>
                <button 
                  style={{ background: 'rgba(255, 255, 255, 0.03)', color: '#fff', padding: '18px 45px', borderRadius: '12px', fontWeight: 600, border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem' }}
                  onClick={() => setView('analyst')}
                >
                  Profesyonel Panel <BarChart3 size={20} />
                </button>
              </div>
            </div>
          </section>

          <section id="features" className="container" style={{ paddingBottom: '150px' }}>
             <div className="grid grid-cols-3 gap-10">
                <div className="glass-panel p-12 rounded-[40px] border border-white/5 bg-white/2" style={{ textAlign: 'left' }}>
                  <Shield size={28} color="#10b981" className="mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Hibrit Modelleme</h3>
                  <p className="text-secondary text-sm leading-relaxed">TOPSIS, EDAS ve CODAS modellerinin konsensüsü ile hatasız bilimsel sonuçlar.</p>
                </div>
                <div className="glass-panel p-12 rounded-[40px] border border-white/5 bg-white/2" style={{ textAlign: 'left' }}>
                  <Database size={28} color="#6366f1" className="mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Akıllı Ağırlık</h3>
                  <p className="text-secondary text-sm leading-relaxed">Shannon Entropy ve CRITIC algoritmaları sayesinde kriterlerinizin önemini belirler.</p>
                </div>
                <div className="glass-panel p-12 rounded-[40px] border border-white/5 bg-white/2" style={{ textAlign: 'left' }}>
                  <Lock size={28} color="#f59e0b" className="mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Veri Güvenliği</h3>
                  <p className="text-secondary text-sm leading-relaxed">Tüm analizleriniz yerel olarak saklanır, verileriniz hiçbir zaman dışarı sızmaz.</p>
                </div>
             </div>
          </section>

          {/* Footer Access for Blueprint */}
          <footer className="py-10 border-t border-white/5 text-center" style={{ opacity: 0.3 }}>
             <button onClick={() => setView('blueprint')} style={{ background: 'none', border: 'none', color: '#94A3B8', fontSize: '0.7rem', fontWeight: 800, cursor: 'pointer', letterSpacing: '4px' }}>
                THE BLUEPRINT METODOLOJİ REHBERİ
             </button>
          </footer>
        </div>
      )}

      {view === 'wizard' && selectedTemplate && (
        <div className="wizard-overlay">
           <div className="container max-w-3xl">
              <Wizard template={selectedTemplate} onBack={() => setView('landing')} />
           </div>
        </div>
      )}

      {view === 'analyst' && (
        <Analyst onBack={() => setView('landing')} setView={setView} />
      )}

      {view === 'blueprint' && (
        <Blueprint onBack={() => setView('landing')} />
      )}
    </div>
  )
}

export default App
