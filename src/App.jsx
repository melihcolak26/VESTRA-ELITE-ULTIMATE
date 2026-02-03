import { useState, useEffect } from 'react'
import './App.css'
import Wizard from './components/Wizard'
import Analyst from './components/Analyst'
import Blueprint from './components/Blueprint'
import { Zap, Layout, Shield, Cpu, Lock, ArrowRight, Maximize2, Activity } from 'lucide-react'

function App() {
  const [view, setView] = useState('landing')

  return (
    <div className="platform-root" style={{ background: '#020617', minHeight: '100vh', color: '#fff' }}>
      {view === 'landing' && (
        <div className="landing-page">
          <nav className="nav-elite" style={{ padding: '25px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="brand-v6">
                <Zap color="#10b981" fill="#10b981" size={28} />
                <span style={{ fontWeight: 900, fontSize: '1.5rem', marginLeft: '10px' }}>VESTRA ELITE</span>
              </div>
              <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                <button 
                  style={{ background: 'none', border: 'none', color: '#94A3B8', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', textTransform: 'uppercase' }} 
                  onClick={() => setView('blueprint')}
                >
                  The Blueprint
                </button>
                <button className="btn-elite btn-elite-primary" style={{ background: '#fff', color: '#000', padding: '10px 20px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => setView('analyst')}>GİRİŞ YAP</button>
              </div>
            </div>
          </nav>

          <main className="container" style={{ textAlign: 'center', paddingTop: '150px' }}>
            <h1 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '20px' }}>Mastering the Choice.</h1>
            <p style={{ fontSize: '1.2rem', color: '#94A3B8', marginBottom: '40px' }}>Karar Mimarlığı Ofisine Hoş Geldiniz.</p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
               <button className="btn-elite btn-elite-primary" style={{ background: '#fff', color: '#000', padding: '20px 40px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => setView('analyst')}>
                 BAŞLAT
               </button>
               <button className="btn-elite" style={{ background: 'transparent', color: '#10b981', border: '1px solid #10b981', padding: '20px 40px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => setView('blueprint')}>
                 THE BLUEPRINT
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
