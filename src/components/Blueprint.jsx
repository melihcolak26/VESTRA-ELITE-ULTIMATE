import React from 'react';
import { 
  ChevronLeft, 
  Zap, 
  Target, 
  ArrowUpRight, 
  ArrowDownRight, 
  Brain, 
  Scale, 
  Compass, 
  ShieldCheck,
  MousePointer2,
  Cpu,
  Layers
} from 'lucide-react';

const Blueprint = ({ onBack }) => {
  return (
    <div className="fade-in" style={{ color: '#fff', paddingBottom: '100px' }}>
      <nav className="nav-elite" style={{ position: 'fixed', width: '100%', top: 0, left: 0, z-index: 100 }}>
        <div className="container flex justify-between items-center">
          <div className="brand-v6">
            <Zap size={28} fill="#10b981" color="#10b981" />
            <div className="flex flex-col">
              <span>VESTRA <span style={{ color: '#10b981', fontWeight: 900 }}>ELITE</span></span>
              <span style={{ fontSize: '0.5rem', letterSpacing: '0.1em', opacity: 0.6, marginTop: '-4px', fontWeight: 'bold' }}>THE BLUEPRINT</span>
            </div>
          </div>
          <button className="btn-elite btn-elite-secondary" style={{ padding: '10px 25px' }} onClick={onBack}>
            <ChevronLeft size={18} /> Geri Dön
          </button>
        </div>
      </nav>

      <main className="container" style={{ marginTop: '120px' }}>
        <header style={{ marginBottom: '60px' }}>
          <h1 className="shimmer-text" style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '20px' }}>The Blueprint</h1>
          <p style={{ fontSize: '1.2rem', color: '#94A3B8', maxWidth: '800px' }}>
            Vestra Elite'in bilimsel mimarisini ve karar verme protokollerini keşfedin. 
            Burada her seçim bir tesadüf değil, matematiksel bir kesinliktir.
          </p>
        </header>

        <div className="dash-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '20px' }}>
          
          {/* Step 1: Logic */}
          <div className="col-span-8 card-elite" style={{ minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="badge-v6" style={{ width: 'fit-content', marginBottom: '20px' }}>PROTOKOL 01</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '15px' }}>Fayda vs Maliyet Dengesi</h2>
            <p style={{ color: '#94A3B8', fontSize: '1.1rem', marginBottom: '30px' }}>
              Her kriterin bir "karakteri" vardır. Kararınızı bu yönlere göre kalibre etmelisiniz.
            </p>
            <div className="flex gap-8">
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '20px', borderRadius: '24px', flex: 1, border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <div className="flex items-center gap-3 text-emerald mb-3">
                  <ArrowUpRight size={24} strokeWidth={3} />
                  <span className="font-black">FAYDA (Benefit)</span>
                </div>
                <p className="text-xs text-emerald/80 font-bold">"Daha çoğu, daha iyidir."</p>
                <p className="text-[10px] opacity-60 mt-2">Örn: Hız, Menzil, Kalite, Verimlilik</p>
              </div>
              <div style={{ background: 'rgba(244, 63, 94, 0.1)', padding: '20px', borderRadius: '24px', flex: 1, border: '1px solid rgba(244, 63, 94, 0.2)' }}>
                <div className="flex items-center gap-3 text-red-500 mb-3">
                  <ArrowDownRight size={24} strokeWidth={3} />
                  <span className="font-black" style={{ color: '#f43f5e' }}>MALİYET (Cost)</span>
                </div>
                <p className="text-xs text-red-400/80 font-bold">"Daha azı, daha iyidir."</p>
                <p className="text-[10px] opacity-60 mt-2">Örn: Fiyat, Yakıt Tüketimi, Risk, Süre</p>
              </div>
            </div>
          </div>

          <div className="col-span-4 card-elite" style={{ background: 'linear-gradient(135deg, #10b981, #064e3b)', color: '#000', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
             <Target size={60} strokeWidth={3} />
             <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginTop: '20px' }}>%100<br/>Kesinlik</h3>
             <p style={{ fontSize: '0.8rem', fontWeight: 700, marginTop: '10px', opacity: 0.8 }}>Hata payını<br/>sıfıra indiren hibrit motor.</p>
          </div>

          {/* Weighting Section */}
          <div className="col-span-4 card-elite">
            <Brain size={32} color="#6366f1" className="mb-4" />
            <h4 className="font-black text-xl mb-2">Ağırlıklandırma</h4>
            <p className="text-xs text-secondary leading-relaxed">
              Kriterlerinizin önem derecesini belirleyen zeka katmanı.
            </p>
            <div className="mt-6 flex flex-col gap-3">
               <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <p className="text-[10px] font-black text-indigo-400">ENTROPY</p>
                  <p className="text-[10px] opacity-70">Verideki belirsizliğe bakar.</p>
               </div>
               <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <p className="text-[10px] font-black text-indigo-400">CRITIC</p>
                  <p className="text-[10px] opacity-70">Kriter çatışmalarını ölçer.</p>
               </div>
               <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <p className="text-[10px] font-black text-indigo-400">AHP</p>
                  <p className="text-[10px] opacity-70">İnsan/AI uzman aklını kullanır.</p>
               </div>
            </div>
          </div>

          <div className="col-span-8 card-elite">
            <div className="badge-v6" style={{ width: 'fit-content', marginBottom: '20px' }}>PROTOKOL 02</div>
            <h3 className="font-black text-2xl mb-4">Sıralama Algoritmaları Matrisi</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
               <div className="p-4 bg-white/5 rounded-2xl">
                  <p className="font-bold text-emerald text-sm">TOPSIS & CODAS</p>
                  <p className="text-[11px] text-secondary mt-1">İdeal olan ile gerçek arasındaki mesafeyi ölçer. En popüler seçim modelidir.</p>
               </div>
               <div className="p-4 bg-white/5 rounded-2xl">
                  <p className="font-bold text-indigo-400 text-sm">EDAS & MOORA</p>
                  <p className="text-[11px] text-secondary mt-1">Ortalamadan sapmaları ve verimlilik oranlarını baz alır. Lojistik için idealdir.</p>
               </div>
               <div className="p-4 bg-white/5 rounded-2xl">
                  <p className="font-bold text-yellow-500 text-sm">VIKOR</p>
                  <p className="text-[11px] text-secondary mt-1">Uzlaşmacı çözümü bulur. "En az pişmanlık" duyacağınız seçeneği söyler.</p>
               </div>
               <div className="p-4 bg-white/5 rounded-2xl">
                  <p className="font-bold text-blue-400 text-sm">WASPAS</p>
                  <p className="text-[11px] text-secondary mt-1">Hassasiyeti en yüksek modeldir. Akademik olarak en güvenilir sonuçları üretir.</p>
               </div>
            </div>
          </div>

          <div className="col-span-12 card-elite" style={{ textAlign: 'center', padding: '60px' }}>
             <Compass size={40} color="#10b981" style={{ margin: '0 auto 20px' }} />
             <h2 className="font-black text-3xl mb-4 uppercase tracking-[0.2em]">Mastering the Science of Choice</h2>
             <p className="text-secondary max-w-2xl" style={{ margin: '0 auto' }}>
                Vestra Elite, sadece veri sunmaz; o veriyi dünyanın en iyi strateji laboratuvarlarında test edilmiş formüllerle işler. 
                Siz sadece linki yapıştırın, geri kalan "Sihri" Orti'ye bırakın.
             </p>
             <button className="btn-elite btn-elite-primary mt-10" style={{ margin: '40px auto 0' }} onClick={onBack}>
                ANLAŞILDI, BAŞLATALIM
             </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Blueprint;
