import { useState, useEffect } from 'react'
import './App.css'
import Wizard from './components/Wizard'
import Analyst from './components/Analyst'
import Blueprint from './components/Blueprint'
import { Zap, Play, Layout, Shield, Cpu, Lock, HelpCircle, Monitor, ArrowRight, Maximize2, Activity } from 'lucide-react'

function App() {
  const [view, setView] = useState(() => localStorage.getItem('vestra_view') || 'landing')

  useEffect(() => {
    localStorage.setItem('vestra_view', view)
  }, [view])

  return (
    <div className="platform-root" style={{ background: '#020617', minHeight: '100vh', color: '#fff' }}>
      {view === 'landing' && (
        <div className="landing-page fade-in">
          <nav className="nav-elite" style={{ background: 'rgba(2,6,23,0.9)', padding: '25px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="brand-v6">
                <Zap color="#10b981" fill="#10b981" size={28} />
                <span style={{ fontWeight: 900, fontSize: '1.5rem', marginLeft: '10px' }}>VESTRA <span style={{ color: '#10b981' }}>ELITE</span></span>
              </div>
              <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                <button 
                  style={{ background: 'none', border: 'none', color: '#94A3B8', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', textTransform: 'uppercase' }} 
                  onClick={() => setView('blueprint')}
                >
                  The Blueprint
                </button>
                <button className="btn-elite btn-elite-primary" style={{ background: '#fff', color: '#000', padding: '10px 25px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => setView('analyst')}>GİRİŞ YAP</button>
              </div>
            </div>
          </nav>

          <main className="container" style={{ textAlign: 'center', paddingTop: '150px' }}>
            <div style={{ padding: '8px 25px', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '100px', marginBottom: '30px' }}>
               <Activity size={14} color="#10b981" /> <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#10b981' }}>MASTERING THE SCIENCE OF CHOICE</span>
            </div>
            <h1 className="shimmer-text" style={{ fontSize: '6rem', fontWeight: 900, letterSpacing: '-5px', lineHeight: '0.9', marginBottom: '30px' }}>
              Decision <br/> Intelligence.
            </h1>
            <p style={{ fontSize: '1.5rem', color: '#94A3B8', maxWidth: '850px', margin: '0 auto 60px', lineHeight: '1.4' }}>
              Karmaşık seçimleri matematiksel kesinliğe dönüştüren <br/> hibrit karar verme altyapısı.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
               <button className="btn-elite btn-elite-primary" style={{ padding: '20px 50px', fontSize: '1.1rem', borderRadius: '4px', background: '#fff', color: '#000', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => setView('analyst')}>
                 LANSMANI BAŞLAT <ArrowRight size={20} />
               </button>
               <button className="btn-elite" style={{ padding: '20px 50px', fontSize: '1.1rem', borderRadius: '4px', background: 'transparent', color: '#10b981', border: '1px solid #10b981', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => setView('blueprint')}>
                 THE BLUEPRINT <Maximize2 size={20} />
               </button>
            </div>
          </main>
        </div>
      )}

      {view === 'blueprint' && <Blueprint onBack={() => setView('landing')} />}
      {view === 'analyst' && <Analyst onBack={() => setView('landing')} />}
    </div>
  )
}

export default App
