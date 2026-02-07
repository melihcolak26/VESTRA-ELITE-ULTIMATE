import { useState, useEffect } from 'react'
import './App.css'
import { DECISION_TEMPLATES } from './templates/data'
import Wizard from './components/Wizard'
import Analyst from './components/Analyst'
import Blueprint from './components/Blueprint'
import { Zap, Shield, Cpu, BarChart3, ChevronRight, Play, Globe, Lock, ArrowUpRight, Activity } from 'lucide-react'

function App() {
  const [view, setView] = useState(() => localStorage.getItem('vestra_view') || 'landing')
  const [selectedTemplate, setSelectedTemplate] = useState(null)

  useEffect(() => {
    localStorage.setItem('vestra_view', view)
  }, [view])

  const handleViewChange = (newView) => {
    setView(newView);
    localStorage.setItem('vestra_view', newView);
  };

  return (
    <div className="platform-root" style={{ background: '#000', minHeight: '100vh', color: '#fff' }}>
      {view === 'landing' && (
        <div className="landing-v5 fade-in">
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
                  onClick={() => handleViewChange('analyst')}
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
                 onClick={() => handleViewChange('analyst')}
               >
                 Sistemi Başlat <Play size={24} fill="currentColor" />
               </button>
               <button 
                 style={{ background: 'rgba(255,255,255,0.03)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', padding: '22px 60px', borderRadius: '12px', fontWeight: 900, cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '15px' }} 
                 onClick={() => handleViewChange('analyst')}
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

      {view === 'analyst' && <Analyst onBack={() => handleViewChange('landing')} setView={setView} />}
      {view === 'blueprint' && <Blueprint onBack={() => handleViewChange('landing')} />}
      {view === 'wizard' && selectedTemplate && (
        <div className="container py-5">
          <Wizard template={selectedTemplate} onBack={() => setView('landing')} />
        </div>
      )}
    </div>
  )
}

export default App
