/**
 * VESTRA Intelligent Templates
 * Curated datasets for common real-world decisions
 */

export const DECISION_TEMPLATES = {
  VEHICLE_PURCHASE: {
    id: 'VEHICLE_PURCHASE',
    name: 'Otomobil Alım Kararı',
    description: 'Farklı araç modellerini yakıt, performans ve maliyet kriterlerine göre karşılaştırın.',
    icon: '🚗',
    criteria: [
      { name: 'Satış Fiyatı (TL)', beneficial: false, weightHint: 0.3 },
      { name: 'Yakıt Tüketimi (L/100km)', beneficial: false, weightHint: 0.2 },
      { name: 'Motor Gücü (HP)', beneficial: true, weightHint: 0.15 },
      { name: 'Bagaj Hacmi (L)', beneficial: true, weightHint: 0.1 },
      { name: 'Güvenlik Puanı (Euro NCAP)', beneficial: true, weightHint: 0.25 }
    ],
    alternatives: ['Citroen C4', 'Ford Fiesta', 'Fiat Punto'],
    defaultMatrix: [
      [1450000, 5.2, 130, 380, 5],
      [1100000, 4.8, 100, 290, 4],
      [950000, 5.5, 95, 275, 3]
    ]
  },
  SMARTPHONE_SELECTION: {
    id: 'SMARTPHONE_SELECTION',
    name: 'Akıllı Telefon Seçimi',
    description: 'En yeni amiral gemisi modellerini teknik özelliklerine göre analiz edin.',
    icon: '📱',
    criteria: [
      { name: 'Fiyat', beneficial: false, weightHint: 0.3 },
      { name: 'Kamera Puanı (DxOMark)', beneficial: true, weightHint: 0.25 },
      { name: 'Batarya Kapasitesi (mAh)', beneficial: true, weightHint: 0.15 },
      { name: 'Ekran Tazeleme (Hz)', beneficial: true, weightHint: 0.1 },
      { name: 'İşlemci Performansı (Geekbench)', beneficial: true, weightHint: 0.2 }
    ],
    alternatives: ['iPhone 15 Pro', 'Samsung S24 Ultra', 'Xiaomi 14 Ultra'],
    defaultMatrix: [
      [75000, 154, 3274, 120, 7200],
      [68000, 152, 5000, 120, 7100],
      [62000, 158, 5000, 120, 7050]
    ]
  },
  CAREER_CHOICE: {
    id: 'CAREER_CHOICE',
    name: 'Kariyer ve İş Teklifi',
    description: 'Hangi iş teklifi sizin için daha karlı ve dengeli?',
    icon: '💼',
    criteria: [
      { name: 'Net Maaş', beneficial: true, weightHint: 0.4 },
      { name: 'Ulaşım Süresi (Dakika)', beneficial: false, weightHint: 0.2 },
      { name: 'Uzaktan Çalışma İmkanı (1-10)', beneficial: true, weightHint: 0.15 },
      { name: 'Yan Haklar Puanı', beneficial: true, weightHint: 0.1 },
      { name: 'Kariyer Gelişimi (1-10)', beneficial: true, weightHint: 0.15 }
    ],
    alternatives: ['Global Teknoloji A.Ş.', 'Yerel Startup', 'E-Ticaret Devi'],
    defaultMatrix: [
      [85000, 45, 8, 9, 8],
      [65000, 15, 10, 5, 10],
      [95000, 60, 5, 8, 7]
    ]
  },
  REAL_ESTATE: {
    id: 'REAL_ESTATE',
    name: 'Konut / Ev Seçimi',
    description: 'Yaşayacağınız veya yatırım yapacağınız evi bilimsel verilerle seçin.',
    icon: '🏠',
    criteria: [
      { name: 'Fiyat / Kira', beneficial: false, weightHint: 0.35 },
      { name: 'Metrekare (Brüt)', beneficial: true, weightHint: 0.2 },
      { name: 'Merkeze Uzaklık (km)', beneficial: false, weightHint: 0.15 },
      { name: 'Bina Yaşı', beneficial: false, weightHint: 0.15 },
      { name: 'Çevre Sosyal İmkanlar (1-10)', beneficial: true, weightHint: 0.15 }
    ],
    alternatives: ['A Sitesi (Merkez)', 'B Residence (Yeni)', 'C Müstakil (Bahçeli)'],
    defaultMatrix: [
      [25000, 110, 2, 25, 9],
      [35000, 95, 8, 2, 8],
      [45000, 180, 15, 15, 6]
    ]
  }
};
