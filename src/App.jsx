import { useState, useEffect } from 'react'
import './App.css'
import { DECISION_TEMPLATES } from './templates/data'
import Wizard from './components/Wizard'
import Analyst from './components/Analyst'
import Blueprint from './components/Blueprint'
import { Zap, Play, BarChart, Shield, Cpu, Lock, HelpCircle, Monitor, ArrowRight, Maximize2, Activity } from 'lucide-react'

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
    <div className="platform-root" style={{ background: '#020617', minHeight: '100vh', color: '#fff' }}>
      {view === 'landing' && (
        <div className="landing-v6">
          <nav className="nav-elite" style={{ background: 'rgba(2,6,23,0.9)', padding: '20px' }}>
            <div className="container flex justify-between items-center">
              <div className="brand-v6">
                <Zap size={28} fill="#10b981" color="#10b981" />
                <div className="flex flex-col">
                  <span>VESTRA <span style={{ color: '#10b981', fontWeight: 900 }}>ELITE</span></span>
                  <span style={{ fontSize: '0.5rem', letterSpacing: '0.1em', opacity: 0.6, marginTop: '-4px', fontWeight: 'bold' }}>POWERED BY INTELLIGENCE ENGINE</span>
                </div>
              </div>
              <div className="flex gap-8 items-center">
                <ul className="nav-links" style={{ display: 'flex', gap: '25px', listStyle: 'none' }}>
                  <li><a href="#" style={{ color: '#94A3B8', textDecoration: 'none', fontWeight: 700, fontSize: '0.8rem' }} onClick={() => setView('blueprint')}>THE BLUEPRINT</a></li>
                  <li><a href="#" style={{ color: '#94A3B8', textDecoration: 'none', fontWeight: 700, fontSize: '0.8rem' }} onClick={() => setView('analyst')}>ANALYST HUB</a></li>
                </ul>
                <button className="btn-elite btn-elite-primary" style={{ padding: '10px 25px', fontSize: '0.9rem' }} onClick={() => setView('analyst')}>
                  GİRİŞ YAP
                </button>
              </div>
            </div>
          </nav>

          <main className="container" style={{ textAlign: 'center', paddingTop: '150px' }}>
            <div className="badge-v6" style={{ margin: '0 auto 2rem', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
               <Activity size={14} className="text-emerald" /> VESTRA ELITE: STRATEGIC SOLUTIONS
            </div>
            <h1 className="shimmer-text" style={{ fontSize: '6.5rem', marginBottom: '30px', fontWeight: 900, letterSpacing: '-6px', lineHeight: '0.9' }}>
               Mastering the <br/> Science of Choice.
            </h1>
            <p style={{ fontSize: '1.6rem', color: '#94A3B8', maxWidth: '800px', margin: '0 auto 60px', lineHeight: '1.5', fontWeight: 500 }}>
              Dünyanın en vizyoner liderleri için inşa edilen hibrit karar verme mimarisi. 
              Karmaşıklığı, matematiksel kesinliğe dönüştürüyoruz.
            </p>
            
            <div className="cta-group" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <button className="btn-elite btn-elite-primary" style={{ padding: '1.5rem 4rem', fontSize: '1.2rem' }} onClick={() => setView('analyst')}>
                 LANSMANI BAŞLAT <ArrowRight size={20} />
              </button>
              <button className="btn-elite btn-elite-secondary" style={{ padding: '1.5rem 4rem', fontSize: '1.2rem' }} onClick={() => setView('blueprint')}>
                 THE BLUEPRINT <Maximize2 size={20} />
              </button>
            </div>
            
            <div className="feature-bento" style={{ marginTop: '100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
               <div className="card-elite" style={{ padding: '30px' }}>
                  <Shield size={32} color="#10b981" />
                  <h3 style={{ marginTop: '15px' }}>Güvenli</h3>
               </div>
               <div className="card-elite" style={{ padding: '30px' }}>
                  <Cpu size={32} color="#6366f1" />
                  <h3 style={{ marginTop: '15px' }}>Akıllı</h3>
               </div>
            </div>
          </main>
        </div>
      )}

      {view === 'wizard' && selectedTemplate && (
        <div className="container py-20">
          <Wizard template={selectedTemplate} onBack={() => setView('landing')} />
        </div>
      )}

      {view === 'analyst' && (
        <Analyst onBack={() => setView('landing')} />
      )}

      {view === 'blueprint' && (
        <Blueprint onBack={() => setView('landing')} />
      )}
    </div>
  )
}

export default App
