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
  TrendingUp,
  AlertCircle,
  FileText,
  Trash2,
  Share2,
  Wand2,
  Globe,
  Loader2
} from 'lucide-react';
import { topsis, edas, codas, moora, vikor, waspas, calculateEntropyWeights, calculateCriticWeights, calculateAhpWeights } from '../engine/mcdm';

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
  const [magicLink, setMagicLink] = useState('');
  const [isMagicLoading, setIsMagicLoading] = useState(false);
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('vestra_analyst_data');
    return saved ? JSON.parse(saved) : {
      alternatives: ['Tesla Model S', 'BMW i7', 'Lucid Air'],
      criteria: [
        { name: 'Menzil (km)', beneficial: true },
        { name: 'Fiyat ($)', beneficial: false },
        { name: 'Otonom Güç', beneficial: true }
      ],
      matrix: [[650, 95000, 9], [600, 120000, 8], [830, 87000, 7]]
    };
  });

  const [activeWeight, setActiveWeight] = useState('entropy');
  const [activeRank, setActiveRank] = useState('topsis');

  const handleMagicLink = async () => {
    if (!magicLink) return;
    setIsMagicLoading(true);
    setTimeout(() => {
      setIsMagicLoading(false);
      setMagicLink('');
      alert("Magic Link feature is initializing! Data extraction protocols active.");
    }, 2000);
  };

  const weights = useMemo(() => {
    if (activeWeight === 'entropy') return calculateEntropyWeights(data.matrix);
    if (activeWeight === 'critic') return calculateCriticWeights(data.matrix);
    return new Array(data.criteria.length).fill(1 / data.criteria.length);
  }, [data.matrix, activeWeight, data.criteria.length]);

  const results = useMemo(() => {
    const beneficial = data.criteria.map(c => c.beneficial);
    if (activeRank === 'topsis') return topsis(data.matrix, weights, beneficial);
    if (activeRank === 'edas') return edas(data.matrix, weights, beneficial);
    if (activeRank === 'codas') return codas(data.matrix, weights, beneficial);
    if (activeRank === 'moora') return moora(data.matrix, weights, beneficial);
    if (activeRank === 'vikor') return vikor(data.matrix, weights, beneficial);
    if (activeRank === 'waspas') return waspas(data.matrix, weights, beneficial);
    return topsis(data.matrix, weights, beneficial);
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
        const max = Math.max(...col) || 1;
        return v / max;
      }),
      backgroundColor: `rgba(${30 + i * 60}, ${185 - i * 40}, ${255 - i * 20}, 0.2)`,
      borderColor: `rgb(${30 + i * 60}, ${185 - i * 40}, ${255 - i * 20})`,
      borderWidth: 2,
    }))
  };

  return (
    <div className="hub-layout fade-in" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', height: '100vh' }}>
      <aside className="sidebar-hub" style={{ padding: '30px', background: 'rgba(2, 6, 23, 0.95)', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="brand-v6 mb-8">
          <Zap size={28} fill="#10b981" color="#10b981" />
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tighter">VESTRA <span className="text-emerald">ELITE</span></span>
          </div>
        </div>

        <nav className="flex flex-col gap-4">
          <button className="btn-elite btn-elite-secondary" style={{ padding: '12px' }} onClick={() => {}}>Dashboard</button>
          <div className="card-elite" style={{ padding: '15px' }}>
            <label className="text-xs font-bold text-secondary mb-2 block">AĞIRLIK MOTORU</label>
            <select className="input-elite" style={{ width: '100%' }} value={activeWeight} onChange={e => setActiveWeight(e.target.value)}>
              <option value="entropy">Shannon Entropy</option>
              <option value="critic">CRITIC Method</option>
            </select>
          </div>
          <div className="card-elite" style={{ padding: '15px' }}>
            <label className="text-xs font-bold text-secondary mb-2 block">SIRALAMA MODELİ</label>
            <select className="input-elite" style={{ width: '100%' }} value={activeRank} onChange={e => setActiveRank(e.target.value)}>
              <option value="topsis">TOPSIS (Expert)</option>
              <option value="edas">EDAS (Dynamic)</option>
              <option value="codas">CODAS (Hybrid)</option>
              <option value="moora">MOORA (Ratio)</option>
              <option value="vikor">VIKOR (Compromise)</option>
              <option value="waspas">WASPAS (Aggregated)</option>
            </select>
          </div>
        </nav>

        <button className="btn-elite btn-elite-secondary mt-auto" onClick={onBack}>
          <ChevronLeft size={18} /> Geri Dön
        </button>
      </aside>

      <main className="content-hub" style={{ padding: '40px', overflowY: 'auto' }}>
        <header className="flex justify-between items-center mb-8">
          <h2 className="font-black text-3xl">Karar Çalışma Alanı</h2>
          <div className="flex gap-4">
             <div className="flex items-center gap-2 bg-white/5 p-2 px-4 rounded-2xl border border-white/10">
                <Globe size={16} />
                <input 
                  className="bg-transparent border-none text-xs text-white outline-none w-48" 
                  placeholder="Link yapıştır (Amazon/Tesla)..." 
                  value={magicLink}
                  onChange={(e) => setMagicLink(e.target.value)}
                />
                <button onClick={handleMagicLink} disabled={isMagicLoading}>
                  {isMagicLoading ? <Loader2 size={16} className="animate-spin" /> : <Wand2 size={16} />}
                </button>
             </div>
          </div>
        </header>

        <div className="dash-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '20px' }}>
          <div className="col-span-8 card-elite">
             <h3 className="mb-4">Karar Matrisi</h3>
             <div style={{ overflowX: 'auto' }}>
                <table className="elite-table">
                   <thead>
                      <tr>
                         <th style={{ textAlign: 'left' }}>Alternatif</th>
                         {data.criteria.map((c, i) => (
                            <th key={i}>{c.name}</th>
                         ))}
                      </tr>
                   </thead>
                   <tbody>
                      {data.alternatives.map((alt, i) => (
                         <tr key={i}>
                            <td style={{ textAlign: 'left' }}>{alt}</td>
                            {data.criteria.map((_, j) => (
                               <td key={j}>
                                  <input type="number" className="input-elite" style={{ width: '80px' }} value={data.matrix[i][j]} onChange={e => updateMatrix(i, j, e.target.value)} />
                               </td>
                            ))}
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>

          <div className="col-span-4 card-elite">
             <h3>Performans</h3>
             <div className="flex flex-col gap-4 mt-4">
                {results.ranking.map((res, i) => (
                   <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                      <span className="font-bold">{data.alternatives[res.index]}</span>
                      <span className="text-emerald font-black">{res.score.toFixed(3)}</span>
                   </div>
                ))}
             </div>
          </div>

          <div className="col-span-12 card-elite">
             <h3>Orti'nin Analizi</h3>
             <p className="mt-4 text-lg">
                Kanki, analize göre en mantıklı yol <span className="text-emerald font-black">{data.alternatives[results.ranking[0].index]}</span> gibi duruyor. 
                Bu seçenek diğerlerine göre daha dengeli bir verimlilik sunuyor.
             </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analyst;
