import { useState, useEffect } from 'react'
import './App.css'
import { DECISION_TEMPLATES } from './templates/data'
import Wizard from './components/Wizard'
import Analyst from './components/Analyst'
import Blueprint from './components/Blueprint'
import { 
  Zap, Shield, Cpu, BarChart3, ChevronRight, Play, Globe, Lock, 
  ArrowUpRight, Activity, LayoutDashboard, BookOpen, Layers, 
  Settings as SettingsIcon, Newspaper, FolderKanban, CheckCircle2,
  TrendingUp, ExternalLink, Database, Info, Clock, AlertTriangle
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [view, setView] = useState(() => localStorage.getItem('vestra_view') || 'landing')
  const [activeTab, setActiveTab] = useState('analyst')
  const [selectedCase, setSelectedCase] = useState(null)

  useEffect(() => {
    localStorage.setItem('vestra_view', view)
  }, [view])

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const caseProjects = [
    { 
      id: 'CASE-ALPHA', 
      name: 'Otonom Gemi Filosu Genişletme', 
      sector: 'Denizcilik / Otonom', 
      description: 'HMM için 10 yeni otonom konteyner gemisinin teknik ve maliyet odaklı seçimi.',
      matrix: [
        { alt: 'Hyundai Gen-3', cost: '$85M', safety: '98%', efficiency: '94%' },
        { alt: 'Samsung NeoV', cost: '$78M', safety: '95%', efficiency: '91%' },
        { alt: 'Daewoo EcoS', cost: '$82M', safety: '96%', efficiency: '96%' }
      ],
      analysis: {
        method: 'AHP + TOPSIS',
        insight: 'Yakıt verimliliği kriteri kararda %42 ağırlığa sahiptir.',
        result: 'Hyundai Gen-3 (Puan: 0.892)',
        gain: 'Yıllık $4.2M operasyonel tasarruf.'
      }
    },
    { 
      id: 'CASE-BETA', 
      name: 'Lojistik HUB Lokasyon Analizi', 
      sector: 'Lojistik / Strateji', 
      description: 'Avrupa dağıtım ağı için Rotterdam, Hamburg ve Antwerp limanlarının karşılaştırması.',
      matrix: [
        { alt: 'Rotterdam', cost: 'High', infra: '10/10', port_cap: 'Max' },
        { alt: 'Antwerp', cost: 'Mid', infra: '9/10', port_cap: 'Mid+' }
      ],
      analysis: {
        method: 'Entropy + EDAS',
        insight: 'Altyapı kalitesi, maliyet avantajının önüne geçmektedir.',
        result: 'Rotterdam (Puan: 0.845)',
        gain: 'Teslimat sürelerinde %18 kısalma.'
      }
    }
  ];

  const intelFeed = [
    { title: 'HMM & HD Hyundai İşbirliği', body: '40 gemilik otonom navigasyon projesi kapsamında ilk 5 geminin kurulumu tamamlandı.', time: '2 saat önce', cat: 'TEKNİK' },
    { title: 'Kızıldeniz Rota Optimizasyonu', body: 'AI tabanlı rota analitiği sayesinde gemiler %12 yakıt tasarrufu ile güvenli limanlara ulaşıyor.', time: '5 saat önce', cat: 'OPERASYON' },
    { title: 'Yeni Nesil ISR Uyduları', body: 'BlackSky, denizcilik gözetimi için Gen-3 uydularını devreye aldı. Vestra veri akışı güncellendi.', time: '1 gün önce', cat: 'İSTİHBARAT' }
  ];

  // Modern Platform Shell with Sidebar and Tabs
  const renderPlatform = () => {
    return (
      <div className="platform-shell fade-in">
        <aside className="platform-sidebar">
          <div className="sidebar-brand">
             <div className="icon-glow-sm" style={{ padding: '6px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px' }}>
                <Zap size={20} fill="#10b981" color="#10b981" />
             </div>
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
                <FolderKanban size={18} /> <span>Vaka Kütüphanesi</span>
             </button>
             <button className={`nav-tab ${activeTab === 'intel' ? 'active' : ''}`} onClick={() => setActiveTab('intel')}>
                <Activity size={18} /> <span>Sektörel Zekâ</span>
             </button>
          </nav>

          <div className="sidebar-footer">
             <div className="status-indicator">
                <div className="pulse-dot"></div>
                <span>Sistem Aktif (v5.Master)</span>
             </div>
             <button className="nav-tab mt-4" style={{ color: '#ef4444' }} onClick={() => setView('landing')}>
                <ChevronRight size={18} style={{ transform: 'rotate(180deg)' }} /> <span>Çıkış Yap</span>
             </button>
          </div>
        </aside>

        <main className="platform-content">
          <AnimatePresence mode="wait">
             {activeTab === 'analyst' && (
                <motion.div key="analyst" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                   <Analyst onBack={() => setView('landing')} setView={setView} />
                </motion.div>
             )}
             
             {activeTab === 'blueprint' && (
                <motion.div key="blueprint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                   <Blueprint onBack={() => setActiveTab('analyst')} />
                </motion.div>
             )}

             {activeTab === 'projects' && (
                <motion.div key="projects" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-12">
                   <div className="mb-12 d-flex justify-content-between align-items-end">
                      <div>
                         <h2 className="text-4xl font-black mb-4">Kurumsal Vaka Kütüphanesi</h2>
                         <p className="text-secondary text-lg">MCDM modelleriyle çözümlenmiş stratejik senaryo örnekleri.</p>
                      </div>
                      <div className="badge-master">6 AKTİF SENARYO</div>
                   </div>

                   <div className="grid grid-cols-2 gap-8">
                      {caseProjects.map((p, i) => (
                        <div key={i} className="glass-panel p-8 rounded-[40px] border border-white/5 bg-white/2 hover:border-emerald-500/30 transition-all group" style={{ cursor: 'pointer' }} onClick={() => setSelectedCase(p)}>
                           <div className="flex justify-between mb-6">
                              <div style={{ color: '#10b981' }} className="p-3 bg-emerald-500/10 rounded-2xl"><Layers size={24} /></div>
                              <span className="text-[10px] font-black text-secondary tracking-widest uppercase">{p.sector}</span>
                           </div>
                           <h3 className="text-2xl font-bold mb-4">{p.name}</h3>
                           <p className="text-secondary text-sm mb-8 leading-relaxed">{p.description}</p>
                           
                           <div className="space-y-4">
                              <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                                 <div className="flex items-center gap-3 text-xs font-bold text-secondary"><Cpu size={14} /> MODEL</div>
                                 <span className="text-xs font-black text-white">{p.analysis.method}</span>
                              </div>
                              <div className="flex justify-between items-center p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
                                 <div className="flex items-center gap-3 text-xs font-bold text-emerald-500"><TrendingUp size={14} /> KAZANIM</div>
                                 <span className="text-xs font-black text-emerald-500">{p.analysis.gain}</span>
                              </div>
                           </div>

                           <div className="mt-8 flex items-center gap-2 text-emerald-500 font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                              DETAYLI ANALİZİ GÖRÜNTÜLE <ArrowUpRight size={14} />
                           </div>
                        </div>
                      ))}
                   </div>
                </motion.div>
             )}

             {activeTab === 'intel' && (
                <motion.div key="intel" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="p-12">
                   <div className="mb-12">
                      <h2 className="text-4xl font-black mb-4">Sektörel Zekâ Dashboard</h2>
                      <p className="text-secondary text-lg">Denizcilik, Lojistik ve AI dünyasından stratejik veri akışı.</p>
                   </div>

                   <div className="grid grid-cols-12 gap-8">
                      <div className="col-span-12 lg:col-span-8 space-y-6">
                         {intelFeed.map((news, idx) => (
                           <div key={idx} className="glass-panel p-8 rounded-[32px] border border-white/5 bg-white/2 relative overflow-hidden group">
                              <div className="flex justify-between items-center mb-4">
                                 <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <span className="text-[10px] font-black text-emerald-500 tracking-widest">{news.cat}</span>
                                 </div>
                                 <div className="flex items-center gap-2 text-secondary">
                                    <Clock size={12} />
                                    <span className="text-[10px] font-bold">{news.time}</span>
                                 </div>
                              </div>
                              <h4 className="text-xl font-bold mb-3">{news.title}</h4>
                              <p className="text-secondary leading-relaxed text-sm">{news.body}</p>
                           </div>
                         ))}
                      </div>
                      <div className="col-span-12 lg:col-span-4 space-y-6">
                         <div className="glass-panel p-8 rounded-[32px] border border-white/5 bg-blue-500/5">
                            <h5 className="font-bold mb-4 flex items-center gap-2"><AlertTriangle size={16} className="text-blue-400" /> KRİTİK UYARI</h5>
                            <p className="text-xs text-secondary leading-relaxed">Shadow Fleet operasyonları nedeniyle Süveyş Kanalı geçiş verilerinde %8 anomali saptandı. MCDM modellerinde 'Risk' kriteri ağırlığı artırılmalıdır.</p>
                         </div>
                         <div className="glass-panel p-8 rounded-[32px] border border-white/5 bg-white/2">
                            <h5 className="font-bold mb-4 text-xs tracking-widest text-secondary">GLOBAL AI ENDEKSİ</h5>
                            <div className="h-40 flex items-end gap-2">
                               {[40, 60, 45, 90, 70, 85].map((h, i) => (
                                 <div key={i} className="flex-1 bg-blue-500/20 rounded-t-lg transition-all hover:bg-blue-500" style={{ height: `${h}%` }}></div>
                               ))}
                            </div>
                         </div>
                      </div>
                   </div>
                </motion.div>
             )}
          </AnimatePresence>
        </main>

        {/* Case Detail Modal */}
        <AnimatePresence>
          {selectedCase && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[1000] flex items-center justify-center p-10 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedCase(null)}>
               <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="glass-panel p-12 rounded-[50px] max-w-4xl w-full bg-[#0a0e1a] border border-white/10" onClick={e => e.stopPropagation()}>
                  <div className="flex justify-between items-start mb-10">
                     <div>
                        <span className="text-xs font-black text-emerald-500 tracking-[5px] mb-4 d-block uppercase">{selectedCase.id}</span>
                        <h2 className="text-4xl font-black">{selectedCase.name}</h2>
                     </div>
                     <button className="p-3 bg-white/5 rounded-full hover:bg-white/10" onClick={() => setSelectedCase(null)}><ChevronRight style={{ transform: 'rotate(90deg)' }} /></button>
                  </div>

                  <div className="grid grid-cols-2 gap-12 mb-12">
                     <div className="space-y-6">
                        <h4 className="text-xs font-black text-secondary tracking-widest border-b border-white/5 pb-2 uppercase">Karar Matrisi Özeti</h4>
                        <table className="w-full text-sm text-secondary">
                           <tbody>
                              {selectedCase.matrix.map((row, i) => (
                                <tr key={i} className="border-b border-white/5"><td className="py-3 font-bold text-white">{row.alt}</td><td className="py-3 text-right">{row.cost || row.efficiency}</td></tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                     <div className="space-y-8">
                        <div className="p-6 bg-emerald-500/5 rounded-3xl border border-emerald-500/10">
                           <h5 className="text-xs font-black text-emerald-500 mb-2 uppercase">Analitik Sonuç</h5>
                           <p className="text-lg font-bold">{selectedCase.analysis.result}</p>
                        </div>
                        <div className="p-6 bg-blue-500/5 rounded-3xl border border-blue-500/10">
                           <h5 className="text-xs font-black text-blue-500 mb-2 uppercase">Stratejik Öngörü</h5>
                           <p className="text-sm text-secondary leading-relaxed">{selectedCase.analysis.insight}</p>
                        </div>
                     </div>
                  </div>
                  
                  <button className="btn-premium w-full py-5 rounded-2xl text-lg" onClick={() => {setSelectedCase(null); setActiveTab('analyst');}}>
                     BU SENARYOYU ANALİZ PANELİNE AKTAR
                  </button>
               </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="platform-root" style={{ background: '#000', minHeight: '100vh', color: '#fff' }}>
      {view === 'landing' && (
        <div className="landing-v5 fade-in">
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
                  <Activity color="#6366f1" size={40} />
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
