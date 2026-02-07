import { useState, useEffect } from 'react'
import './App.css'
import { DECISION_TEMPLATES } from './templates/data'
import Wizard from './components/Wizard'
import Analyst from './components/Analyst'
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

          <nav className="nav-premium">
            <div className="logo-container">
              <div className="icon-glow-sm"><Zap size={22} fill="#10b981" color="#10b981" /></div>
              <span className="logo-accent">VESTRA</span> <span className="text-white/20 font-light ml-1">v5.0</span>
            </div>
            <div className="d-flex align-items-center gap-5">
              <a href="#" className="text-secondary text-sm font-bold hover:text-white transition-colors">Methodology</a>
              <a href="#" className="text-secondary text-sm font-bold hover:text-white transition-colors">Enterprise</a>
              <button className="btn-premium" onClick={() => setView('analyst')}>
                Get Started <ArrowUpRight size={16} />
              </button>
            </div>
          </nav>

          <section className="hero-wrapper">
            <div className="container text-center">
              <div className="d-flex justify-content-center mb-6">
                 <div className="badge-master">Master Decision Suite</div>
              </div>
              <h1 className="heading-premium shimmer-text">Kritik Kararlar için<br/>Bilimsel Analitik.</h1>
              <p className="hero-p">
                Melih Çolak & Orti tarafından tasarlanan Vestra, karmaşık stratejik seçimleri 
                <strong> 12+ hibrit MCDM algoritması</strong> ile matematiksel bir kesinliğe dönüştürür.
              </p>
              
              <div className="d-flex justify-content-center gap-4 mt-10">
                <button className="btn-premium-lg" onClick={() => setView('analyst')}>
                   Launch Platform <Play size={18} fill="currentColor" />
                </button>
                <button className="btn-glass-lg" onClick={() => document.getElementById('features').scrollIntoView({behavior:'smooth'})}>
                  Explore Features
                </button>
              </div>

              <div className="mt-20 glass-panel p-2 rounded-[32px] max-w-4xl mx-auto border-white/5 bg-white/5">
                 <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" alt="Dashboard Preview" className="rounded-[28px] w-full opacity-60 mix-blend-luminosity hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>
          </section>

          <section id="features" className="py-20 relative">
            <div className="container">
               <div className="text-center mb-20">
                  <h2 className="text-4xl font-black mb-4">Mühendislik Harikası Algoritmalar</h2>
                  <p className="text-secondary max-w-2xl mx-auto">Vestra, sadece veri girişi yapmaz; veriyi işleyerek stratejik bir avantaja dönüştürür.</p>
               </div>
               
               <div className="grid grid-cols-3 gap-8">
                  <div className="glass-panel p-10 rounded-[40px] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity"><Globe size={120} /></div>
                    <div className="icon-box-v6 mb-6"><Shield size={28} color="#10b981" /></div>
                    <h3 className="text-2xl font-black mb-4">Hibrit Modelleme</h3>
                    <p className="text-secondary leading-relaxed">TOPSIS, EDAS ve CODAS gibi dünya standardı modelleri aynı anda çalıştırarak çapraz doğrulama sağlar.</p>
                  </div>
                  
                  <div className="glass-panel p-10 rounded-[40px] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity"><Cpu size={120} /></div>
                    <div className="icon-box-v6 mb-6"><Zap size={28} color="#6366f1" /></div>
                    <h3 className="text-2xl font-black mb-4">Akıllı Ağırlıklandırma</h3>
                    <p className="text-secondary leading-relaxed">Shannon Entropy ve CRITIC algoritmaları sayesinde kriterlerinizin önem derecesini matematiksel olarak belirler.</p>
                  </div>

                  <div className="glass-panel p-10 rounded-[40px] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity"><Lock size={120} /></div>
                    <div className="icon-box-v6 mb-6"><BarChart3 size={28} color="#f59e0b" /></div>
                    <h3 className="text-2xl font-black mb-4">Gerçek Zamanlı Görsel</h3>
                    <p className="text-secondary leading-relaxed">Dinamik radar ve bar grafikleriyle sonuçları anlık olarak analiz edin, kararlarınızı veriye dayandırın.</p>
                  </div>
               </div>
            </div>
          </section>

          <section className="py-20 bg-white/2">
             <div className="container">
                <div className="glass-panel p-12 rounded-[50px] d-flex align-items-center justify-content-between">
                   <div className="max-w-xl">
                      <h2 className="text-4xl font-black mb-6">Sektörel Çözümlerle Hızlanın</h2>
                      <p className="text-secondary mb-8">Sizin için hazırladığımız hazır şablonları kullanarak saniyeler içinde karar analizi yapmaya başlayın.</p>
                      <div className="grid grid-cols-2 gap-4">
                         {Object.values(DECISION_TEMPLATES).slice(0, 4).map(t => (
                            <div key={t.id} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 cursor-pointer transition-all" onClick={() => startWizard(t)}>
                               <span className="text-2xl mb-2 d-block">{t.icon}</span>
                               <span className="font-bold text-sm">{t.name}</span>
                            </div>
                         ))}
                      </div>
                   </div>
                   <div className="hidden lg:block relative">
                      <div className="w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl absolute -z-10"></div>
                      <div className="glass p-8 rounded-3xl border-emerald-500/20 rotate-3 translate-x-10 shadow-2xl">
                         <div className="w-64 h-4 bg-emerald-500/20 rounded-full mb-4"></div>
                         <div className="w-48 h-4 bg-white/5 rounded-full mb-4"></div>
                         <div className="w-56 h-4 bg-white/5 rounded-full"></div>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          <footer className="py-20 border-t border-white/5 bg-black/40">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                 <div className="logo-container">
                    <Zap size={24} color="#10b981" />
                    <span className="logo-accent">VESTRA</span>
                 </div>
                 <div className="d-flex gap-8 text-secondary text-sm font-bold">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">API</a>
                 </div>
              </div>
              <div className="mt-10 pt-10 border-t border-white/5 d-flex justify-content-between align-items-center text-xs text-secondary font-bold uppercase tracking-widest">
                <p>© 2026 Vestra Decision Technologies. All rights reserved.</p>
                <p>Designed with <span className="text-rose-500">❤️</span> by Melih Çolak & <span className="text-emerald-500">Orti</span></p>
              </div>
            </div>
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
        <Analyst onBack={() => setView('landing')} />
      )}

      <style jsx>{`
        .icon-glow-sm {
          padding: 6px;
          background: rgba(16, 185, 129, 0.1);
          border-radius: 8px;
        }
        .icon-box-v6 {
          width: 56px;
          height: 56px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
        }
        .glass-panel:hover .icon-box-v6 {
          background: rgba(16, 185, 129, 0.1);
          border-color: rgba(16, 185, 129, 0.3);
        }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .max-w-4xl { max-width: 56rem; }
        .max-w-3xl { max-width: 48rem; }
        .max-w-2xl { max-width: 42rem; }
        .max-w-xl { max-width: 36rem; }
      `}</style>
    </div>
  )
}

export default App
