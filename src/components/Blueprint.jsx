import React, { useState } from 'react';
import { 
  ChevronLeft, Zap, ArrowRight, Ruler, PenTool, Target, Layers, 
  Brain, Cpu, Compass, Gem, Star, ShieldCheck, Activity, Search, 
  Clock, CheckCircle2, Info, Workflow, Database, Maximize2, MousePointer2
} from 'lucide-react';

const Blueprint = ({ onBack }) => {
  const [scannerStep, setScannerStep] = useState(0);
  const [scannerData, setScannerData] = useState({ source: '', type: '' });

  const methods = [
    { code: 'ENT-01', name: 'Shannon Entropy', what: 'Verideki belirsizliği ölçer.', how: 'Varyasyon yüksekse ağırlık artar.', note: 'Veriler konuşsun istiyorsanız bu araç tam size göre!' },
    { code: 'CRT-02', name: 'CRITIC Method', what: 'Kriter çatışmalarını ölçer.', how: 'Korelasyon dengesi kurar.', note: 'Kriterler birbiriyle kavga ediyorsa barışı bu sağlar.' },
    { code: 'AHP-03', name: 'AHP Protocol', what: 'Uzman aklını matrise döker.', how: 'İkili kıyaslama ve AI muhakemesi.', note: 'AI ile birleşince dünyanın en akıllı uzmanı olur.' },
    { code: 'TPS-04', name: 'TOPSIS Elite', what: 'İdeal noktaya mesafeyi ölçer.', how: 'En iyiye yakınlığı bulur.', note: 'Karar biliminin en sağlam aracıdır.' }
  ];

  return (
    <div style={{ background: '#020617', color: '#fff', minHeight: '100vh', padding: '50px' }}>
      <header style={{ textAlign: 'center', marginBottom: '100px' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 900, color: '#10b981' }}>THE BLUEPRINT</h1>
        <p style={{ fontSize: '1.2rem', color: '#94A3B8' }}>Karar Mimarlığı Rehberi</p>
        <button onClick={onBack} style={{ marginTop: '30px', padding: '10px 30px', background: '#10b981', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Geri Dön</button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {methods.map((m, i) => (
          <div key={i} style={{ border: '1px solid #10b981', padding: '30px', background: 'rgba(16,185,129,0.05)' }}>
            <p style={{ fontSize: '0.7rem', opacity: 0.5 }}>CODE: {m.code}</p>
            <h3 style={{ margin: '15px 0', fontSize: '1.5rem' }}>{m.name}</h3>
            <p style={{ fontSize: '0.9rem', color: '#94A3B8' }}>{m.what}</p>
            <div style={{ marginTop: '20px', borderTop: '1px dashed #10b981', paddingTop: '15px' }}>
               <p style={{ fontSize: '0.8rem', color: '#10b981' }}>ORTE NOTU: "{m.note}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blueprint;
