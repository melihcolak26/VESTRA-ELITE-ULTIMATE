import { useState, useEffect } from 'react'
import './App.css'
import { DECISION_TEMPLATES } from './templates/data'
import Wizard from './components/Wizard'
import Analyst from './components/Analyst'
import { Zap, Play, BarChart, Shield, Cpu, Lock } from 'lucide-react'

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
              <button className="btn-elite btn-elite-primary" style={{ padding: '10px 25px', fontSize: '0.9rem' }} onClick={() => setView('analyst')}>
                GİRİŞ YAP
              </button>
            </div>
          </nav>

          <main className="container" style={{ textAlign: 'center', paddingTop: '100px' }}>
            <h1 className="shimmer-text" style={{ fontSize: '4rem', marginBottom: '20px' }}>Vestra Elite Yayında.</h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '40px' }}>
              Bilimsel karar alma motoru başarıyla güncellendi kanki.
            </p>
            
            <div className="cta-group" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <button className="btn-elite btn-elite-primary" onClick={() => setView('analyst')}>
                 ANALİZ PANELİ <Play size={18} fill="currentColor" />
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
    </div>
  )
}

export default App

      {view === 'wizard' && selectedTemplate && (
        <div className="container py-20">
          <Wizard template={selectedTemplate} onBack={() => setView('landing')} />
        </div>
      )}

      {view === 'analyst' && (
        <Analyst onBack={() => setView('landing')} />
      )}
    </div>
  )
}

export default App
