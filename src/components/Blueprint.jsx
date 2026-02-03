import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, Zap, ArrowRight, Target, Brain, Cpu, Layers, Compass, 
  ShieldCheck, Award, Box, Ruler, PenTool, Grid, Star, FileText, 
  Clock, HelpCircle, Briefcase, Users, DollarSign, Car, Package, 
  Code, Info, MousePointer2, CheckCircle2, Layout, Activity, Monitor
} from 'lucide-react';

const Blueprint = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('catalog');

  const methods = [
    { id: 'entropy', name: 'ENTROPY', emoji: '🎲', type: 'Ağırlıklandırma', diff: 2, time: '5', what: 'Verideki belirsizliği ve çeşitliliği ölçer.', how: 'Varyasyon ne kadar yüksekse o kriter o kadar güçlüdür.', example: 'Fiyatlar çok yakınsa %5, çok farklıysa %45 ağırlık verir.', when: ['Tamamen objektiflik', 'Hızlı veri filtrasyonu'], note: 'Veriler konuşsun istiyorsanız bu araç tam size göre!' },
    { id: 'critic', name: 'CRITIC', emoji: '⚖️', type: 'İlişkisel Ağırlık', diff: 3, time: '10', what: 'Kriterler arası çatışmayı ve yoğunluğu ölçer.', how: 'Standart sapma ve korelasyon matrisini baz alır.', example: 'Hız ve yakıt arasındaki o meşhur kavgayı dengeler.', when: ['Çelişkili hedefler', 'Parametreler arası denge'], note: 'Kriterler birbiriyle kavga ediyorsa barışı bu sağlar.' },
    { id: 'ahp', name: 'AHP (AI)', emoji: '🧠', type: 'Subjektif Ağırlık', diff: 4, time: '15', what: 'Uzman aklını matematiksel matrise döker.', how: 'Kimi AI desteğiyle ikili kıyaslama yapar.', example: 'Vizyonun %60, maliyetin %40 önemli olduğu durumlar.', when: ['Kişisel öncelikler', 'Stratejik vizyon kararları'], note: 'Kimi AI ile birleşince dünyanın en akıllı uzmanı olur.' },
    { id: 'topsis', name: 'TOPSIS', emoji: '🎯', type: 'Sıralama Aracı', diff: 2, time: '5', what: 'En ideal hayali noktaya mesafeyi ölçer.', how: 'Euclidean mesafe algoritmasını kullanır.', example: 'Mükemmel gemiye en yakın olan seçeneği şampiyon yapar.', when: ['Genel seçimler', 'Yatırım kıyaslama'], note: 'Karar biliminin en popüler ve sağlam aracıdır.' },
    { id: 'vikor', name: 'VIKOR', emoji: '🛡️', type: 'Uzlaşmacı Sıralama', diff: 4, time: '12', what: 'Minimum pişmanlık ve maksimum fayda arar.', how: 'Lp-metric tabanlı uzlaşma analizi yapar.', example: 'Herkesi orta noktada en mutlu edecek çözümü bulur.', when: ['Grup kararları', 'Yüksek risk yönetimi'], note: 'Hata lüksünüz yoksa bu protokole güvenin.' },
    { id: 'waspas', name: 'WASPAS', emoji: '💎', type: 'Ultra Sıralama', diff: 5, time: '15', what: 'Toplamsal ve çarpımsal modelleri hibritler.', how: 'Hassasiyet katsayısını (lambda) optimize eder.', example: '%99.4 akademik tutarlılıkla en teknik seçimi yapar.', when: ['Maksimum doğruluk', 'Yüksek bütçeli alımlar'], note: 'Hata payını matematiksel olarak imkansız kılar.' }
  ];

  const projects = [
    { id: '001', name: 'ARAÇ ALIMI', icon: <Car size={20} />, client: 'Bireysel', criteria: 5, alts: 4, arch: 'Entropy + TOPSIS', result: 'Model B (%87)' },
    { id: '002', name: 'TEDARİKÇİ SEÇİMİ', icon: <Package size={20} />, client: 'Kurumsal', criteria: 8, alts: 12, arch: 'CRITIC + MOORA', result: 'Tedarikçi 4 (%92)' },
    { id: '003', name: 'YATIRIM KARARI', icon: <Briefcase size={20} />, client: 'Yatırımcı', criteria: 6, alts: 5, arch: 'AHP + VIKOR', result: 'Gayrimenkul A (%84)' }
  ];

  return (
    <div className="blueprint-immersive fade-in" style={{ 
      background: '#0a0f1d', 
      minHeight: '100vh', 
      color: '#fff', 
      fontFamily: "'Outfit', sans-serif",
      backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.05) 1px, transparent 1px)`,
      backgroundSize: '30px 30px',
      paddingBottom: '100px'
    }}>
      {/* Blueprint Header */}
      <nav style={{ padding: '25px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #10b981', background: 'rgba(10, 15, 29, 0.95)', position: 'sticky', top: 0, zIndex: 1000, backdropFilter: 'blur(20px)' }}>
        <div className="flex items-center gap-4">
          <div style={{ border: '2px solid #10b981', padding: '6px' }}>
            <Zap size={28} fill="#10b981" color="#10b981" />
          </div>
          <div className="flex flex-col">
            <span style={{ fontWeight: 900, fontSize: '1.4rem', letterSpacing: '-1px' }}>THE BLUEPRINT <span style={{ color: '#10b981' }}>📐</span></span>
            <span style={{ fontSize: '0.6rem', fontWeight: 800, opacity: 0.6, letterSpacing: '0.4em' }}>KARAR MİMARİNİZ v8.5</span>
          </div>
        </div>
        <button onClick={onBack} className="btn-elite btn-elite-secondary" style={{ padding: '10px 30px', borderRadius: '4px', border: '1px solid #10b981', color: '#10b981' }}>
          <ChevronLeft size={18} /> HUB'A DÖN
        </button>
      </nav>

      <div className="container" style={{ maxWidth: '1300px', margin: '0 auto', padding: '80px 20px' }}>
        
        {/* Section 1: Hero */}
        <header style={{ textAlign: 'center', marginBottom: '150px' }}>
          <div className="badge-v6" style={{ margin: '0 auto 30px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', color: '#10b981', padding: '8px 25px' }}>
            HER BÜYÜK KARAR BİR PLAN İLE BAŞLAR
          </div>
          <h1 style={{ fontSize: '7rem', fontWeight: 900, lineHeight: '0.9', letterSpacing: '-6px', marginBottom: '40px' }} className="shimmer-text">
            Kararın <br/> Mimarisini Çiz.
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#94A3B8', maxWidth: '850px', margin: '0 auto 60px', lineHeight: '1.5' }}>
            Vestra Elite, belirsizliği matematiksel bir taslağa dönüştürür. <br/>
            Kimi AI ve 12+ hibrit metodoloji ile geleceğinizi saniyeler içinde inşa edin.
          </p>
          <div className="flex gap-4 justify-center">
             <button className="btn-elite btn-elite-primary" style={{ padding: '20px 50px', fontSize: '1.2rem', borderRadius: '0', border: '2px solid #fff' }} onClick={onBack}>PLANIMI ÇİZ</button>
             <button className="btn-elite btn-elite-secondary" style={{ padding: '20px 50px', fontSize: '1.2rem', borderRadius: '0', border: '2px solid #10b981' }}>DEMO İNCELE</button>
          </div>
        </header>

        {/* Section 2: Quick Start */}
        <section style={{ marginBottom: '150px' }}>
          <h3 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 900, marginBottom: '60px', color: '#10b981' }}>PLANINIZI 3 ADIMDA ÇİZİN 📐</h3>
          <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
             <div className="card-elite" style={{ padding: '50px', border: '1px solid #10b981', borderRadius: '0', background: 'rgba(16, 185, 129, 0.02)' }}>
                <Ruler size={40} color="#10b981" style={{ marginBottom: '25px' }} />
                <h4 style={{ fontWeight: 900, fontSize: '1.5rem', marginBottom: '20px' }}>01. TEMELİ ATIN</h4>
                <p style={{ color: '#94A3B8', lineHeight: '1.6' }}>Alternatifleri ve kriterleri tanımlayın. Bu, stratejinizin taşıyıcı kolonlarıdır.</p>
                <div style={{ marginTop: '30px', borderTop: '1px dashed #10b981', paddingTop: '15px', fontSize: '0.8rem', color: '#10b981', fontWeight: 800 }}>SPEC: 5 Seçenek, 10 Kriter</div>
             </div>
             <div className="card-elite" style={{ padding: '50px', border: '1px solid #10b981', borderRadius: '0', background: 'rgba(16, 185, 129, 0.02)' }}>
                <PenTool size={40} color="#10b981" style={{ marginBottom: '25px' }} />
                <h4 style={{ fontWeight: 900, fontSize: '1.5rem', marginBottom: '20px' }}>02. MİMARİYİ SEÇİN</h4>
                <p style={{ color: '#94A3B8', lineHeight: '1.6' }}>Ağırlıklandırma ve Sıralama araçlarını belirleyin. Hangi zekayla inşa edeceksiniz?</p>
                <div style={{ marginTop: '30px', borderTop: '1px dashed #10b981', paddingTop: '15px', fontSize: '0.8rem', color: '#10b981', fontWeight: 800 }}>SPEC: Entropy + WASPAS Hibriti</div>
             </div>
             <div className="card-elite" style={{ padding: '50px', border: '1px solid #10b981', borderRadius: '0', background: 'rgba(16, 185, 129, 0.02)' }}>
                <Target size={40} color="#10b981" style={{ marginBottom: '25px' }} />
                <h4 style={{ fontWeight: 900, fontSize: '1.5rem', marginBottom: '20px' }}>03. PLANI YORUMLAYIN</h4>
                <p style={{ color: '#94A3B8', lineHeight: '1.6' }}>Çizimler tamamlandı. Orti Elite Verdict ile karşılaştırmalı analizi inceleyin.</p>
                <div style={{ marginTop: '30px', borderTop: '1px dashed #10b981', paddingTop: '15px', fontSize: '0.8rem', color: '#10b981', fontWeight: 800 }}>SPEC: %99.4 Güven Skoru</div>
             </div>
          </div>
        </section>

        {/* Section 3: Catalog */}
        <section style={{ marginBottom: '150px' }}>
          <h3 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Çizim Araçları Kataloğu ⚒️</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
             {methods.map((m, i) => (
               <div key={i} className="card-elite" style={{ padding: '0', borderRadius: '0', border: '1px solid #10b981', background: 'transparent' }}>
                  <div style={{ padding: '25px', borderBottom: '1px solid #10b981', background: 'rgba(16, 185, 129, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <h4 style={{ fontWeight: 900, fontSize: '1.6rem' }}>{m.name} {m.emoji}</h4>
                     <div className="flex gap-1">
                        {[...Array(m.diff)].map((_, i) => <Star key={i} size={14} fill="#10b981" color="#10b981" />)}
                     </div>
                  </div>
                  <div style={{ padding: '40px' }}>
                     <p style={{ fontSize: '0.8rem', fontWeight: 900, color: '#94A3B8', marginBottom: '25px' }}>
                        TİP: {m.type} <br/> SÜRE: ~{m.time} dakika
                     </p>
                     <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                        <div>
                           <p style={{ fontSize: '0.9rem', fontWeight: 900, color: '#10b981', marginBottom: '10px' }}>📐 NE YAPAR?</p>
                           <p style={{ fontSize: '0.9rem', color: '#94A3B8' }}>{m.what}</p>
                        </div>
                        <div>
                           <p style={{ fontSize: '0.9rem', fontWeight: 900, color: '#10b981', marginBottom: '10px' }}>🔍 NASIL ÇALIŞIR?</p>
                           <p style={{ fontSize: '0.9rem', color: '#94A3B8' }}>{m.how}</p>
                        </div>
                     </div>
                     <div style={{ marginTop: '30px', padding: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: '0.9rem', fontWeight: 900, color: '#10b981', marginBottom: '10px' }}>✅ NE ZAMAN KULLAN?</p>
                        <ul style={{ fontSize: '0.85rem', color: '#94A3B8', paddingLeft: '20px' }}>
                           {m.when.map((w, j) => <li key={j}>{w}</li>)}
                        </ul>
                     </div>
                     <div style={{ marginTop: '30px', padding: '20px', borderLeft: '3px solid #10b981', background: 'rgba(16, 185, 129, 0.05)' }}>
                        <p style={{ fontSize: '0.8rem', fontWeight: 900, opacity: 0.5 }}>💡 MİMARIN NOTU:</p>
                        <p style={{ fontSize: '1rem', italic: 'true' }}>"{m.note}"</p>
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </section>

        {/* Section 4: Comparison Table */}
        <section style={{ marginBottom: '150px' }}>
          <h3 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Mimar Masası: Karşılaştırma 📊</h3>
          <div className="card-elite" style={{ padding: '0', borderRadius: '0', border: '1px solid #10b981', overflowX: 'auto' }}>
             <table className="elite-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                   <tr style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
                      <th style={{ textAlign: 'left', padding: '25px' }}>İHTİYACINIZ</th>
                      <th>AĞIRLIK</th>
                      <th>SIRALAMA</th>
                      <th>ZORLUK</th>
                      <th>HASSASİYET</th>
                   </tr>
                </thead>
                <tbody>
                   {[
                     { need: 'Tam Objektiflik', w: 'Entropy', r: 'TOPSIS', d: 2, acc: 80 },
                     { need: 'Zıt Hedefler', w: 'CRITIC', r: 'CODAS', d: 3, acc: 90 },
                     { need: 'Kişisel Vizyon', w: 'AHP', r: 'VIKOR', d: 4, acc: 85 },
                     { need: 'Maks. Doğruluk', w: 'CRITIC', r: 'WASPAS', d: 5, acc: 100 },
                     { need: 'Hızlı Karar', w: 'Entropy', r: 'MOORA', d: 2, acc: 75 }
                   ].map((row, i) => (
                     <tr key={i} style={{ borderBottom: '1px solid rgba(16, 185, 129, 0.1)' }}>
                        <td style={{ textAlign: 'left', padding: '25px', fontWeight: 900 }}>{row.need}</td>
                        <td style={{ fontWeight: 800 }}>{row.w}</td>
                        <td style={{ fontWeight: 800 }}>{row.r}</td>
                        <td>
                           <div style={{ display: 'flex', gap: '2px', justifyContent: 'center' }}>
                              {[...Array(row.d)].map((_, j) => <Star key={j} size={10} fill="#10b981" color="#10b981" />)}
                           </div>
                        </td>
                        <td>
                           <div style={{ width: '120px', height: '10px', background: 'rgba(255,255,255,0.05)', margin: '0 auto', borderRadius: '10px', overflow: 'hidden' }}>
                              <div style={{ width: `${row.acc}%`, height: '100%', background: '#10b981' }}></div>
                           </div>
                        </td>
                     </tr>
                   ))}
                </tbody>
             </table>
          </div>
        </section>

        {/* Section 5: Projects */}
        <section style={{ marginBottom: '150px' }}>
          <h3 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Tamamlanmış Projeler 🏗️</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
             {projects.map((p, i) => (
               <div key={i} className="card-elite" style={{ padding: '0', borderRadius: '0', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
                  <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                     {p.icon}
                     <span style={{ fontWeight: 900 }}>PROJE #{p.id}: {p.name}</span>
                  </div>
                  <div style={{ padding: '30px' }}>
                     <p style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '20px' }}>MÜŞTERİ: {p.client}</p>
                     <div style={{ margin: '20px 0', padding: '15px', borderLeft: '2px solid #10b981', background: 'rgba(16,185,129,0.05)' }}>
                        <p style={{ fontSize: '0.7rem', fontWeight: 900, color: '#10b981' }}>MİMARİ:</p>
                        <p style={{ fontSize: '0.9rem', fontWeight: 800 }}>{p.arch}</p>
                     </div>
                     <p style={{ fontWeight: 900, color: '#10b981' }}>SONUÇ: {p.result}</p>
                     <button className="btn-elite btn-elite-primary" style={{ width: '100%', marginTop: '25px', padding: '12px', fontSize: '0.8rem', borderRadius: '0' }}>PLANI İNCELE</button>
                  </div>
               </div>
             ))}
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section style={{ marginBottom: '150px' }}>
          <h3 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Teknik Şartname (SSS) ❓</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
             {[
               { q: "AHP'de uzman görüşü nereden geliyor?", a: "Sistemde iki seçeneğiniz var: Kendi tecrübenizle manuel puanlama yapabilir veya 'Kimi AI Expert' modunu açarak sistemin binlerce akademik veriyi sizin yerinize süzmesini sağlayabilirsiniz." },
               { q: "Hangi yöntemi seçeceğimi bilemezsem ne yapmalıyım?", a: "Vestra Elite'in 'Auto-Architect' özelliği ile verilerinizi girin, Orti arka planda 12 modeli de koştursun ve size en güvenilir konsensüs sonucunu raporlasın." },
               { q: "Verilerim güvende mi?", a: "Tüm hesaplamalar yerel tarayıcı belleğinizde yapılır. Stratejik verileriniz sunucularımıza asla gönderilmez, 'Obsidian-Grade' güvenlik protokolü ile korunur." }
             ].map((item, i) => (
               <div key={i} className="card-elite" style={{ padding: '40px', borderRadius: '0', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  <p style={{ fontWeight: 900, color: '#10b981', marginBottom: '15px', fontSize: '1.1rem' }}>SORU {i+1}: {item.q}</p>
                  <p style={{ color: '#94A3B8', lineHeight: '1.6' }}>{item.a}</p>
               </div>
             ))}
          </div>
        </section>

        {/* Final CTA */}
        <div style={{ textAlign: 'center', marginTop: '100px', padding: '100px', background: 'linear-gradient(to bottom, rgba(16, 185, 129, 0.05), transparent)', borderTop: '1px solid #10b981' }}>
           <h2 style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '40px' }}>İnşaya Hazır Mısınız?</h2>
           <button onClick={onBack} className="btn-elite btn-elite-primary" style={{ padding: '25px 80px', fontSize: '1.5rem', borderRadius: '0', fontWeight: 900 }}>
              İLK PLANIMI ÇİZ <ArrowRight size={30} />
           </button>
        </div>

      </div>

      <footer style={{ padding: '60px', textAlign: 'center', opacity: 0.3 }}>
        <p style={{ fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.6em' }}>VESTRA ELITE - MASTERING THE CHOICE © 2026</p>
      </footer>
    </div>
  );
};

export default Blueprint;
