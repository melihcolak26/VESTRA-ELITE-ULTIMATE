import React, { useState, useMemo } from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  PointElement, 
  LineElement, 
  RadialLinearScale,
  Tooltip, 
  Legend, 
  Filler 
} from 'chart.js';
import { Bar, Radar } from 'react-chartjs-2';
import { 
  LayoutDashboard, 
  Database, 
  Cpu, 
  ChevronLeft, 
  Plus, 
  Zap, 
  FileText, 
  TrendingUp,
  Settings,
  Share2,
  Trash2,
  AlertCircle,
  Globe,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { topsis, edas, codas, calculateEntropyWeights, calculateCriticWeights } from '../engine/mcdm';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Tooltip, 
  Legend, 
  Filler
);

const Analyst = ({ onBack, setView }) => {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('vestra_analyst_data');
    return saved ? JSON.parse(saved) : {
      alternatives: ['Tedarikçi A', 'Tedarikçi B', 'Tedarikçi C'],
      criteria: [
        { name: 'Maliyet', beneficial: false },
        { name: 'Kalite Skoru', beneficial: true },
        { name: 'Teslimat Hızı', beneficial: true }
      ],
      matrix: [[850, 92, 48], [620, 88, 56], [720, 90, 42]]
    };
  });

  const [activeWeight, setActiveWeight] = useState('entropy');
  const [activeRank, setActiveRank] = useState('topsis');

  const weights = useMemo(() => {
    if (activeWeight === 'entropy') return calculateEntropyWeights(data.matrix);
    if (activeWeight === 'critic') return calculateCriticWeights(data.matrix);
    return new Array(data.criteria.length).fill(1 / data.criteria.length);
  }, [data.matrix, activeWeight, data.criteria.length]);

  const results = useMemo(() => {
    const beneficial = data.criteria.map(c => c.beneficial);
    if (activeRank === 'topsis') return topsis(data.matrix, weights, beneficial);
    if (activeRank === 'edas') return edas(data.matrix, weights, beneficial);
    return codas(data.matrix, weights, beneficial);
  }, [data.matrix, weights, data.criteria, activeRank]);

  const updateMatrix = (i, j, val) => {
    const n = [...data.matrix];
    n[i] = [...n[i]];
    n[i][j] = parseFloat(val) || 0;
    setData({ ...data, matrix: n });
  };

  const radarData = {
    labels: data.criteria.map(c => c.name),
    datasets: data.alternatives.map((alt, i) => ({
      label: alt,
      data: data.matrix[i].map((v, j) => {
        const col = data.matrix.map(r => r[j]);
        const max = Math.max(...col);
        return max ? v / max : 0;
      }),
      backgroundColor: `rgba(${59 + i * 40}, ${130 + i * 20}, ${246 - i * 30}, 0.2)`,
      borderColor: `rgb(${59 + i * 40}, ${130 + i * 20}, ${246 - i * 30})`,
      borderWidth: 2,
    }))
  };

  return (
    <div className="platform-workspace fade-in" style={{ padding: '40px' }}>
      <header className="d-flex justify-content-between align-items-start mb-12">
        <div>
          <div className="d-flex align-items-center gap-3 mb-2">
             <div style={{ padding: '6px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                <Activity size={18} color="#3b82f6" />
             </div>
             <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>Gelişmiş Karar Analiz Paneli</h1>
          </div>
          <p className="text-secondary font-medium">Hibrit bilimsel modellerle veriye dayalı stratejik yönetim.</p>
        </div>
        
        <div className="d-flex gap-4">
           <div className="glass-panel p-4 rounded-2xl border-white/5 bg-white/2 d-flex gap-6">
              <div>
                 <label className="text-[10px] font-black text-secondary uppercase tracking-widest mb-2 d-block">Ağırlıklandırma</label>
                 <select className="bg-transparent border-none text-white font-bold outline-none cursor-pointer" value={activeWeight} onChange={e => setActiveWeight(e.target.value)}>
                    <option value="entropy">Shannon Entropy</option>
                    <option value="critic">CRITIC Algorithm</option>
                 </select>
              </div>
              <div style={{ width: '1px', background: 'rgba(255,255,255,0.05)' }}></div>
              <div>
                 <label className="text-[10px] font-black text-secondary uppercase tracking-widest mb-2 d-block">Sıralama Modeli</label>
                 <select className="bg-transparent border-none text-white font-bold outline-none cursor-pointer" value={activeRank} onChange={e => setActiveRank(e.target.value)}>
                    <option value="topsis">TOPSIS Expert</option>
                    <option value="edas">EDAS Dynamic</option>
                    <option value="codas">CODAS Hybrid</option>
                 </select>
              </div>
           </div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-8">
        {/* Matrix Card */}
        <div className="col-span-12 lg:col-span-8 glass-panel p-8 rounded-[32px] border-white/5 bg-white/2">
           <div className="d-flex justify-content-between align-items-center mb-8">
              <h3 className="font-bold text-lg d-flex align-items-center gap-3"><Database size={20} className="text-blue-500" /> Karar Matrisi Yapılandırması</h3>
              <div className="d-flex gap-3">
                 <button className="btn-v5 bg-white/5 hover:bg-white/10" onClick={() => setData({...data, alternatives: [...data.alternatives, `Yeni Alt`], matrix: [...data.matrix, new Array(data.criteria.length).fill(0)]})}>+ Alternatif</button>
                 <button className="btn-v5 bg-white/5 hover:bg-white/10" onClick={() => setData({...data, criteria: [...data.criteria, {name: `Yeni Krit`, beneficial: true}], matrix: data.matrix.map(r => [...r, 0])})}>+ Kriter</button>
              </div>
           </div>
           
           <div className="table-responsive">
              <table className="table-v6">
                 <thead>
                    <tr>
                       <th style={{ textAlign: 'left' }}>SENARYO / ADAY</th>
                       {data.criteria.map((c, i) => (
                          <th key={i}>
                             <div className="flex flex-column items-center">
                                <input className="bg-transparent border-none text-white text-center font-bold text-sm w-full outline-none" value={c.name} onChange={e => {
                                   const n = [...data.criteria]; n[i].name = e.target.value; setData({...data, criteria: n});
                                }} />
                                <span className={`text-[9px] font-black uppercase mt-1 cursor-pointer ${c.beneficial ? 'text-emerald-400' : 'text-rose-400'}`} onClick={() => {
                                   const n = [...data.criteria]; n[i].beneficial = !n[i].beneficial; setData({...data, criteria: n});
                                }}>
                                   {c.beneficial ? 'FAYDA (+)' : 'MALİYET (-)'}
                                </span>
                             </div>
                          </th>
                       ))}
                       <th width="40"></th>
                    </tr>
                 </thead>
                 <tbody>
                    {data.alternatives.map((alt, i) => (
                       <tr key={i}>
                          <td style={{ textAlign: 'left' }}>
                             <input className="bg-transparent border-none text-white font-bold outline-none" value={alt} onChange={e => {
                                const n = [...data.alternatives]; n[i] = e.target.value; setData({...data, alternatives: n});
                             }} />
                          </td>
                          {data.criteria.map((_, j) => (
                             <td key={j}>
                                <input type="number" className="bg-white/5 border border-white/5 text-white text-center p-2 rounded-lg w-20 outline-none hover:border-blue-500/30 transition-all" value={data.matrix[i][j]} onChange={e => updateMatrix(i, j, e.target.value)} />
                             </td>
                          ))}
                          <td><Trash2 size={14} className="text-white/20 hover:text-rose-500 cursor-pointer" /></td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>

        {/* Results Card */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
           <div className="glass-panel p-8 rounded-[32px] border-white/5 bg-white/2">
              <h3 className="font-bold text-lg mb-8 d-flex align-items-center gap-3"><TrendingUp size={20} className="text-emerald-500" /> Analitik Sıralama</h3>
              <div className="space-y-4">
                 {results.ranking.map((res, i) => (
                    <div key={i} className={`p-5 rounded-2xl d-flex align-items-center gap-5 transition-all ${i === 0 ? 'bg-blue-500/10 border border-blue-500/20 shadow-lg shadow-blue-500/5' : 'bg-white/5 border border-white/5'}`}>
                       <span className={`w-10 h-10 rounded-full d-flex align-items-center justify-content-center font-black ${i === 0 ? 'bg-blue-500 text-white' : 'bg-white/10 text-white/40'}`}>{i + 1}</span>
                       <div className="flex-1">
                          <p className="font-bold text-sm text-white">{data.alternatives[res.index]}</p>
                          <div className="w-full h-1 bg-white/5 rounded-full mt-3 overflow-hidden">
                             <div className="h-full bg-blue-500" style={{ width: `${(res.score / (results.ranking[0].score || 1)) * 100}%` }}></div>
                          </div>
                       </div>
                       <span className="font-mono text-xs font-bold text-blue-400">{res.score.toFixed(4)}</span>
                    </div>
                 ))}
              </div>
           </div>

           <div className="glass-panel p-8 rounded-[32px] border-white/5 bg-gradient-to-br from-blue-500/5 to-transparent">
              <h3 className="font-bold text-lg mb-6 d-flex align-items-center gap-3"><Cpu size={20} className="text-blue-500" /> Bilimsel Özet</h3>
              <p className="text-sm text-secondary leading-relaxed">
                 Model analizine göre <span className="text-white font-bold">{data.alternatives[results.ranking[0].index]}</span> seçeneği, {activeWeight.toUpperCase()} ağırlıklandırması ve {activeRank.toUpperCase()} sıralama motorunda en yüksek verimlilik skorunu elde etmiştir.
              </p>
              <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/5 d-flex gap-3 align-items-center">
                 <AlertCircle size={16} className="text-blue-400" />
                 <span className="text-[11px] font-bold text-secondary uppercase tracking-tight">Kritik Kriter: {data.criteria[weights.indexOf(Math.max(...weights))].name}</span>
              </div>
           </div>
        </div>

        {/* Comparison Radar */}
        <div className="col-span-12 glass-panel p-10 rounded-[40px] border border-white/5 bg-white/2">
           <div className="grid grid-cols-12 gap-10 items-center">
              <div className="col-span-12 lg:col-span-5">
                 <h3 className="text-2xl font-bold mb-6">Alternatif Hassasiyeti</h3>
                 <p className="text-secondary leading-relaxed mb-8">Kriter bazlı performans dağılımı. Grafikteki genişleme, alternatifin çok boyutlu üstünlüğünü temsil eder.</p>
                 <div className="space-y-4">
                    {data.criteria.map((c, i) => (
                       <div key={i} className="flex justify-between items-center text-xs">
                          <span className="text-secondary font-bold uppercase">{c.name}</span>
                          <span className="text-blue-400 font-black">W: %{(weights[i]*100).toFixed(1)}</span>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="col-span-12 lg:col-span-7" style={{ height: '400px' }}>
                 <Radar data={radarData} options={{ 
                    maintainAspectRatio: false, 
                    scales: { 
                       r: { 
                          ticks: { display: false }, 
                          grid: { color: 'rgba(255,255,255,0.03)' }, 
                          angleLines: { color: 'rgba(255,255,255,0.05)' },
                          pointLabels: { color: 'rgba(255,255,255,0.5)', font: { weight: 'bold', size: 10 } }
                       } 
                    },
                    plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8', font: { weight: 'bold' }, padding: 20 } } }
                 }} />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Analyst;
