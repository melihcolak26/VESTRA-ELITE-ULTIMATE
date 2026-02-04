import { useState, useEffect } from 'react'
import './App.css'
import Wizard from './components/Wizard'
import Analyst from './components/Analyst'
import Blueprint from './components/Blueprint'
import { Zap, Activity, ArrowRight, Maximize2, Shield, Cpu, Lock } from 'lucide-react'

function App() {
  const [view, setView] = useState(() => localStorage.getItem('vestra_view') || 'landing')

  useEffect(() => {
    localStorage.setItem('vestra_view', view)
  }, [view])

  const handleViewChange = (newView) => {
    setView(newView);
    localStorage.setItem('vestra_view', newView);
  };

  return (
    <div className="platform-root" style={{ background: '#020617', minHeight: '100vh', color: '#fff' }}>
      {view === 'landing' && (
        <div className="landing-page fade-in">
          <nav className="nav-elite" style={{ background: 'rgba(2, 6, 23, 0.95)', padding: '25px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="brand-v6" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ padding: '5px', border: '2px solid #10b981' }}>
                  <Zap color="#10b981" fill="#10b981" size={24} />
                </div>
                <span style={{ fontWeight: 900, fontSize: '1.6rem', letterSpacing: '-1px' }}>VESTRA <span style={{ color: '#10b981' }}>ELITE</span></span>
              </div>
              <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                <button 
                  style={{ background: 'none', border: 'none', color: '#94A3B8', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', letterSpacing: '2px' }} 
                  onClick={() => handleViewChange('blueprint')}
                >
                  THE BLUEPRINT
                </button>
                <button 
                  style={{ background: '#fff', color: '#000', padding: '12px 30px', borderRadius: '4px', fontWeight: 900, cursor: 'pointer', border: 'none', fontSize: '0.85rem' }} 
                  onClick={() => handleViewChange('analyst')}
                >
                  GİRİŞ YAP
                </button>
              </div>
            </div>
          </nav>

          <main className="container" style={{ textAlign: 'center', paddingTop: '180px' }}>
            <div style={{ padding: '10px 30px', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', display: 'inline-flex', alignItems: 'center', gap: '10px', borderRadius: '100px', marginBottom: '40px' }}>
               <Activity size={16} color="#10b981" /> <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#10b981', letterSpacing: '1px' }}>STRATEJİK KARAR YÖNETİMİ</span>
            </div>
            
            <h1 className="shimmer-text" style={{ fontSize: '7rem', fontWeight: 900, letterSpacing: '-6px', lineHeight: '0.9', marginBottom: '40px' }}>
               Mastering <br/> the Choice.
            </h1>
            
            <p style={{ fontSize: '1.8rem', color: '#94A3B8', maxWidth: '900px', margin: '0 auto 70px', lineHeight: '1.4', fontWeight: 500 }}>
              Karmaşıklığı matematiksel kesinliğe dönüştüren <br/> dünyanın en gelişmiş hibrit karar verme altyapısı.
            </p>
            
            <div style={{ display: 'flex', gap: '25px', justifyContent: 'center' }}>
               <button 
                 style={{ background: '#fff', color: '#000', padding: '22px 60px', borderRadius: '4px', fontWeight: 900, cursor: 'pointer', border: 'none', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '15px' }} 
                 onClick={() => handleViewChange('analyst')}
               >
                 BAŞLAT <ArrowRight size={24} />
               </button>
               <button 
                 style={{ background: 'transparent', color: '#fff', border: '2px solid #fff', padding: '22px 60px', borderRadius: '4px', fontWeight: 900, cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '15px' }} 
                 onClick={() => handleViewChange('blueprint')}
               >
                 THE BLUEPRINT <Maximize2 size={24} />
               </button>
            </div>

            <div style={{ marginTop: '150px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
               <div style={{ padding: '50px', background: 'rgba(15, 23, 42, 0.5)', borderRadius: '30px', border: '1px solid rgba(255, 255, 255, 0.05)', textAlign: 'left' }}>
                  <Shield color="#10b981" size={40} />
                  <h3 style={{ marginTop: '25px', fontSize: '1.8rem', fontWeight: 900 }}>Hata Payı Sıfır</h3>
                  <p style={{ color: '#94A3B8', marginTop: '15px', fontSize: '1.1rem', lineHeight: '1.6' }}>Hibrit algoritmalarla çapraz doğrulama yapan tek stratejik motor.</p>
               </div>
               <div style={{ padding: '50px', background: 'rgba(15, 23, 42, 0.5)', borderRadius: '30px', border: '1px solid rgba(255, 255, 255, 0.05)', textAlign: 'left' }}>
                  <Cpu color="#6366f1" size={40} />
                  <h3 style={{ marginTop: '25px', fontSize: '1.8rem', fontWeight: 900 }}>AI Powered</h3>
                  <p style={{ color: '#94A3B8', marginTop: '15px', fontSize: '1.1rem', lineHeight: '1.6' }}>Kimi ve Gemini entegrasyonuyla derinlemesine sektörel muhakeme.</p>
               </div>
            </div>
          </main>
        </div>
      )}

      {view === 'blueprint' && <Blueprint onBack={() => handleViewChange('landing')} />}
      {view === 'analyst' && <Analyst onBack={() => handleViewChange('landing')} />}
    </div>
  )
}

export default App
