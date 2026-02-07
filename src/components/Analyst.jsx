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
  Globe
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

const Analyst = ({ onBack }) => {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('vestra_analyst_data');
    return saved ? JSON.parse(saved) : {
      alternatives: ['Alternatif A', 'Alternatif B', 'Alternatif C'],
      criteria: [
        { name: 'Kriter 1', beneficial: true },
        { name: 'Kriter 2', beneficial: false }
      ],
      matrix: [[10, 20], [15, 10], [12, 15]]
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
      backgroundColor: `rgba(${30 + i * 60}, ${185 - i * 40}, ${255 - i * 20}, 0.2)`,
      borderColor: `rgb(${30 + i * 60}, ${185 - i * 40}, ${255 - i * 20})`,
      borderWidth: 2,
    }))
  };

  return (
    <div className="dashboard-layout fade-in">
      <aside className="sidebar-premium">
        <div className="logo-box d-flex align-items-center gap-3">
          <div className="icon-glow"><Zap size={24} fill="#10b981" color="#10b981" /></div>
          <span className="font-black text-xl tracking-tighter">VESTRA <span className="text-secondary">PRO</span></span>
        </div>

        <nav className="d-flex flex-column gap-2">
          <p className="text-xs font-bold text-secondary uppercase tracking-widest px-2">Main</p>
          <button className="nav-item active"><LayoutDashboard size={18} /> Analytics</button>
          <button className="nav-item" onClick={() => onBack()}><Globe size={18} /> THE BLUEPRINT</button>
          <button className="nav-item"><Database size={18} /> Matrix</button>
          <button className="nav-item"><FileText size={18} /> Reports</button>
          
          <div className="mt-5 d-flex flex-column gap-4">
             <div className="config-card-premium p-4 rounded-2xl border border-white/5 bg-white/5">
                <label className="text-[10px] font-black uppercase text-secondary mb-2 d-block">Weighting</label>
                <select className="w-full bg-transparent font-bold text-sm outline-none" value={activeWeight} onChange={e => setActiveWeight(e.target.value)}>
                   <option value="entropy">Shannon Entropy</option>
                   <option value="critic">CRITIC Algorithm</option>
                </select>
             </div>
             <div className="config-card-premium p-4 rounded-2xl border border-white/5 bg-white/5">
                <label className="text-[10px] font-black uppercase text-secondary mb-2 d-block">Ranking</label>
                <select className="w-full bg-transparent font-bold text-sm outline-none" value={activeRank} onChange={e => setActiveRank(e.target.value)}>
                   <option value="topsis">TOPSIS Expert</option>
                   <option value="edas">EDAS Dynamic</option>
                </select>
             </div>
          </div>
        </nav>

        <div className="mt-auto">
          <button className="btn-back w-full d-flex align-items-center gap-3" onClick={onBack}>
            <ChevronLeft size={18} /> Exit Workspace
          </button>
        </div>
      </aside>

      <main className="content-premium">
        <div className="glow-top-right"></div>
        
        <header className="d-flex justify-content-between align-items-center mb-10">
          <div>
            <h1 className="heading-premium">Advanced Decision Analysis</h1>
            <p className="text-secondary font-medium">Empowering decision-making through hybrid scientific models.</p>
          </div>
          <div className="d-flex gap-3">
            <button className="btn-v5 glass"><Share2 size={18} /> Share</button>
            <button className="btn-action"><Plus size={18} /> New Scenario</button>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8 glass-panel p-6 rounded-3xl">
             <div className="d-flex justify-content-between align-items-center mb-6">
                <h3 className="font-bold text-lg d-flex align-items-center gap-2"><Database size={20} className="text-emerald-500" /> Matrix Configuration</h3>
                <div className="d-flex gap-2">
                   <button className="btn-sm-glass" onClick={() => setData({...data, alternatives: [...data.alternatives, `Alt ${data.alternatives.length + 1}`], matrix: [...data.matrix, new Array(data.criteria.length).fill(0)]})}>+ Add Alternative</button>
                   <button className="btn-sm-glass" onClick={() => setData({...data, criteria: [...data.criteria, {name: `Crit ${data.criteria.length + 1}`, beneficial: true}], matrix: data.matrix.map(r => [...r, 0])})}>+ Add Criterion</button>
                </div>
             </div>
             <div className="table-responsive">
                <table className="table-v6">
                   <thead>
                      <tr>
                         <th>Scenario</th>
                         {data.criteria.map((c, i) => (
                            <th key={i}>
                               <div className="d-flex flex-column">
                                  <input className="table-header-input" value={c.name} onChange={e => {
                                     const n = [...data.criteria]; n[i].name = e.target.value; setData({...data, criteria: n});
                                  }} />
                                  <span className={`badge-type ${c.beneficial ? 'text-emerald-400' : 'text-rose-400'}`} onClick={() => {
                                     const n = [...data.criteria]; n[i].beneficial = !n[i].beneficial; setData({...data, criteria: n});
                                  }}>
                                     {c.beneficial ? 'Benefit' : 'Cost'}
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
                            <td>
                               <input className="table-row-input" value={alt} onChange={e => {
                                  const n = [...data.alternatives]; n[i] = e.target.value; setData({...data, alternatives: n});
                               }} />
                            </td>
                            {data.criteria.map((_, j) => (
                               <td key={j}>
                                  <input type="number" className="input-glass" value={data.matrix[i][j]} onChange={e => updateMatrix(i, j, e.target.value)} />
                               </td>
                            ))}
                            <td><Trash2 size={14} className="text-white/20 hover:text-rose-500 cursor-pointer" /></td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>

          <div className="col-span-12 lg:col-span-4 d-flex flex-column gap-6">
             <div className="glass-panel p-6 rounded-3xl h-full">
                <h3 className="font-bold text-lg mb-6 d-flex align-items-center gap-2"><TrendingUp size={20} className="text-indigo-400" /> Leaderboard</h3>
                <div className="d-flex flex-column gap-3">
                   {results.ranking.map((res, i) => (
                      <div key={i} className={`p-4 rounded-2xl d-flex align-items-center gap-4 transition-all ${i === 0 ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-white/5 border border-white/5'}`}>
                         <span className={`w-8 h-8 rounded-full d-flex align-items-center justify-content-center font-black ${i === 0 ? 'bg-emerald-500 text-black' : 'bg-white/10 text-white/40'}`}>{i + 1}</span>
                         <div className="flex-1">
                            <p className="font-bold text-sm">{data.alternatives[res.index]}</p>
                            <div className="w-full h-1 bg-white/5 rounded-full mt-2 overflow-hidden">
                               <div className="h-full bg-emerald-500" style={{ width: `${(res.score / results.ranking[0].score) * 100}%` }}></div>
                            </div>
                         </div>
                         <span className="font-mono text-xs font-bold">{res.score.toFixed(4)}</span>
                      </div>
                   ))}
                </div>
             </div>
          </div>

          <div className="col-span-12 lg:col-span-6 glass-panel p-6 rounded-3xl">
             <h3 className="font-bold mb-6">Scenario Consistency (Radar)</h3>
             <div className="h-[300px]">
                <Radar data={radarData} options={{ maintainAspectRatio: false, scales: { r: { ticks: { display: false }, grid: { color: 'rgba(255,255,255,0.05)' }, angleLines: { color: 'rgba(255,255,255,0.05)' } } } }} />
             </div>
          </div>

          <div className="col-span-12 lg:col-span-6 glass-panel p-6 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-transparent">
             <h3 className="font-bold mb-6 d-flex align-items-center gap-2"><Cpu size={20} className="text-emerald-500" /> Scientific Insight</h3>
             <div className="d-flex flex-column gap-4">
                <div className="p-5 rounded-2xl bg-black/40 border border-emerald-500/20">
                   <p className="text-lg leading-relaxed">
                      Model analizi sonucunda <span className="text-emerald-400 font-black">{data.alternatives[results.ranking[0].index]}</span> seçeneği, 
                      yüksek verimlilik puanı (<span className="text-emerald-400">{results.ranking[0].score.toFixed(4)}</span>) ile dominant karakter göstermektedir.
                   </p>
                </div>
                <div className="d-flex gap-3 align-items-center text-sm text-secondary p-3 bg-white/5 rounded-xl">
                   <AlertCircle size={16} />
                   <span>{data.criteria[weights.indexOf(Math.max(...weights))].name} kriteri karar sürecinde %{(Math.max(...weights)*100).toFixed(1)} etki ile en kritik rolü oynamıştır.</span>
                </div>
             </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .icon-glow {
          padding: 8px;
          background: rgba(16, 185, 129, 0.1);
          border-radius: 12px;
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 14px;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
          text-align: left;
        }
        .nav-item:hover { color: #fff; background: rgba(255,255,255,0.03); }
        .nav-item.active { background: rgba(16, 185, 129, 0.1); color: #10b981; }
        .glow-top-right {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%);
          z-index: -1;
        }
        .badge-type {
          font-size: 9px;
          font-weight: 900;
          text-transform: uppercase;
          cursor: pointer;
          margin-top: 4px;
        }
        .btn-sm-glass {
          padding: 8px 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--glass-border);
          color: #fff;
          border-radius: 10px;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
          transition: 0.2s;
        }
        .btn-sm-glass:hover { background: rgba(255,255,255,0.08); }
        .btn-v5 {
           padding: 0.8rem 1.2rem;
           border-radius: 14px;
           background: transparent;
           border: 1px solid var(--glass-border);
           color: #fff;
           font-weight: 700;
           display: flex;
           align-items: center;
           gap: 8px;
           cursor: pointer;
        }
        .flex-1 { flex: 1; }
        .col-span-12 { grid-column: span 12 / span 12; }
        @media (min-width: 1024px) {
           .lg\\:col-span-8 { grid-column: span 8 / span 8; }
           .lg\\:col-span-4 { grid-column: span 4 / span 4; }
           .lg\\:col-span-6 { grid-column: span 6 / span 6; }
        }
      `}</style>
    </div>
  );
};

export default Analyst;
