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

  const startWizard = (template) => {
    setSelectedTemplate(template)
    setView('wizard')
  }

  return (
    <div className="platform-root">
      {view === 'landing' && (
        <div className="landing-v5">
          {/* Animated Background Orbs */}
          <div className="glow-orb" style={{ top: '5%', left: '10%', width: '600px', height: '600px', background: 'rgba(16, 185, 129, 0.1)', animation: 'pulse-slow 8s infinite' }}></div>
          <div className="glow-orb" style={{ bottom: '10%', right: '5%', width: '700px', height: '700px', background: 'rgba(99, 102, 241, 0.08)', animation: 'pulse-slow 12s infinite reverse' }}></div>

          <nav className="nav-premium" style={{ padding: '20px 40px' }}>
            <div className="logo-container">
              <div className="icon-glow-sm"><Zap size={22} fill="#10b981" color="#10b981" /></div>
              <span className="logo-accent" style={{ fontWeight: 900, fontSize: '1.4rem', letterSpacing: '-1px' }}>VESTRA INTELLIGENCE PRO</span>
            </div>
            <div className="d-flex align-items-center gap-4">
              <button 
                style={{ background: 'none', border: 'none', color: '#94A3B8', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', letterSpacing: '2px', textTransform: 'uppercase' }} 
                onClick={() => setView('blueprint')}
              >
                The Blueprint
              </button>
              <button 
                className="btn-glass-sm"
                style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', padding: '8px 20px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}
                onClick={() => setView('analyst')}
              >
                Launch Analyst
              </button>
            </div>
          </nav>

          <section className="hero-wrapper" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
            <div className="container text-center">
              <h1 className="heading-premium shimmer-text" style={{ fontSize: '5.5rem', fontWeight: 900, marginBottom: '30px', lineHeight: '1.1' }}>
                Elite Kararlar için<br/>Bilimsel Analitik.
              </h1>
              <p className="hero-p" style={{ fontSize: '1.2rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto 50px' }}>
                Melih Çolak & Orti ortaklığıyla geliştirilen Vestra, karmaşık stratejik seçimleri 12+ hibrit MCDM algoritması ile kusursuz bir kesinliğe dönüştürür.
              </p>
              
              <div className="d-flex justify-content-center gap-4">
                <button 
                  className="btn-premium-lg" 
                  style={{ background: '#10b981', color: '#000', padding: '15px 40px', borderRadius: '10px', fontWeight: 900, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
                  onClick={() => setView('analyst')}
                >
                   Sistemi Başlat <Play size={18} fill="currentColor" />
                </button>
                <button 
                  className="btn-glass-lg" 
                  style={{ background: 'rgba(15, 23, 42, 0.6)', color: '#fff', padding: '15px 40px', borderRadius: '10px', fontWeight: 600, border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
                  onClick={() => setView('analyst')}
                >
                  Profesyonel Panel <BarChart3 size={18} />
                </button>
              </div>
            </div>
          </section>

          <section id="features" className="container" style={{ paddingBottom: '100px' }}>
             <div className="grid grid-cols-3 gap-8">
                <div className="glass-panel p-10 rounded-[30px] border border-white/5 bg-white/2" style={{ textAlign: 'left' }}>
                  <Shield size={24} color="#10b981" className="mb-6" />
                  <h3 className="text-xl font-bold mb-3">Hibrit Modelleme</h3>
                  <p className="text-secondary text-sm">TOPSIS, EDAS ve CODAS modellerinin konsensüsü ile hatasız bilimsel sonuçlar.</p>
                </div>
                <div className="glass-panel p-10 rounded-[30px] border border-white/5 bg-white/2" style={{ textAlign: 'left' }}>
                  <Zap size={24} color="#6366f1" className="mb-6" />
                  <h3 className="text-xl font-bold mb-3">Akıllı Ağırlık</h3>
                  <p className="text-secondary text-sm">Shannon Entropy ve CRITIC algoritmaları sayesinde kriterlerinizin önemini belirler.</p>
                </div>
                <div className="glass-panel p-10 rounded-[30px] border border-white/5 bg-white/2" style={{ textAlign: 'left' }}>
                  <Lock size={24} color="#f59e0b" className="mb-6" />
                  <h3 className="text-xl font-bold mb-3">Veri Güvenliği</h3>
                  <p className="text-secondary text-sm">Tüm analizleriniz yerel olarak saklanır, verileriniz hiçbir zaman dışarı sızmaz.</p>
                </div>
             </div>
          </section>

          {/* Blueprint Secret Access (Hidden visually but functional) */}
          <div 
            style={{ position: 'fixed', bottom: '10px', right: '10px', opacity: 0.05, cursor: 'pointer', fontSize: '10px' }}
            onClick={() => setView('blueprint')}
          >
            v5.Master.Elite
          </div>
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
