/**
 * VESTRA Intelligence - High-Performance Scientific Decision Engine
 * Implements 12+ Hybrid MCDM Models with Professional-Grade Precision
 */

// --- Normalization Methods ---

/**
 * Vector Normalization (Best for TOPSIS)
 */
export const normalizeVector = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const norm = Array.from({ length: rows }, () => []);
  for (let j = 0; j < cols; j++) {
    const sumSq = Math.sqrt(matrix.reduce((sum, row) => sum + Math.pow(row[j], 2), 0)) || 1;
    for (let i = 0; i < rows; i++) norm[i][j] = matrix[i][j] / sumSq;
  }
  return norm;
};

/**
 * Linear Normalization (Max-Min) (Best for CODAS/EDAS)
 */
export const normalizeLinear = (matrix, beneficial) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const norm = Array.from({ length: rows }, () => []);
  for (let j = 0; j < cols; j++) {
    const vals = matrix.map(r => r[j]);
    const max = Math.max(...vals);
    const min = Math.min(...vals);
    const range = max - min || 1;
    for (let i = 0; i < rows; i++) {
      norm[i][j] = beneficial[j] ? (matrix[i][j] - min) / range : (max - matrix[i][j]) / range;
    }
  }
  return norm;
};

// --- Weighting Methods ---

export const calculateEntropyWeights = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const k = 1 / Math.log(rows);
  const colSums = new Array(cols).fill(0);
  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) colSums[j] += matrix[i][j];
  }
  const entropy = new Array(cols).fill(0);
  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) {
      const p = colSums[j] !== 0 ? matrix[i][j] / colSums[j] : 0;
      if (p > 0) entropy[j] -= k * p * Math.log(p);
    }
  }
  const div = entropy.map(e => 1 - e);
  const sumDiv = div.reduce((a, b) => a + b, 0);
  return div.map(d => sumDiv !== 0 ? d / sumDiv : 1 / cols);
};

export const calculateCriticWeights = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const norm = normalizeLinear(matrix, new Array(cols).fill(true));
  const stdDev = [];
  for (let j = 0; j < cols; j++) {
    const vals = norm.map(r => r[j]);
    const mean = vals.reduce((a, b) => a + b, 0) / rows;
    stdDev[j] = Math.sqrt(vals.reduce((s, v) => s + Math.pow(v - mean, 2), 0) / rows);
  }
  const infoAmount = [];
  for (let j = 0; j < cols; j++) {
    let sumCorr = 0;
    for (let k = 0; k < cols; k++) {
      sumCorr += (1 - calculateCorrelation(norm, j, k));
    }
    infoAmount[j] = stdDev[j] * sumCorr;
  }
  const sumInfo = infoAmount.reduce((a, b) => a + b, 0);
  return infoAmount.map(i => sumInfo !== 0 ? i / sumInfo : 1 / cols);
};

const calculateCorrelation = (matrix, c1, c2) => {
  const n = matrix.length;
  const x = matrix.map(r => r[c1]);
  const y = matrix.map(r => r[c2]);
  const mx = x.reduce((a, b) => a + b, 0) / n;
  const my = y.reduce((a, b) => a + b, 0) / n;
  let num = 0, d1 = 0, d2 = 0;
  for (let i = 0; i < n; i++) {
    num += (x[i] - mx) * (y[i] - my);
    d1 += Math.pow(x[i] - mx, 2);
    d2 += Math.pow(y[i] - my, 2);
  }
  const den = Math.sqrt(d1 * d2);
  return den !== 0 ? num / den : (c1 === c2 ? 1 : 0);
};

export const calculateAhpWeights = (pairwise) => {
  const n = pairwise.length;
  const colSums = new Array(n).fill(0);
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) colSums[j] += pairwise[i][j];
  }
  const weights = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) weights[i] += pairwise[i][j] / colSums[j];
    weights[i] /= n;
  }
  let lambdaMax = 0;
  for (let j = 0; j < n; j++) {
    let sum = 0;
    for (let i = 0; i < n; i++) sum += pairwise[i][j] * weights[i];
    lambdaMax += sum / weights[j];
  }
  lambdaMax /= n;
  const CI = (lambdaMax - n) / (n - 1);
  const RI = [0, 0, 0.58, 0.9, 1.12, 1.24, 1.32, 1.41, 1.45, 1.49][n] || 1.49;
  const CR = CI / RI;
  return { weights, CR, consistent: CR < 0.1 };
};

// --- Ranking Methods ---

export const topsis = (matrix, weights, beneficial) => {
  const norm = normalizeVector(matrix);
  const weighted = norm.map(r => r.map((v, j) => v * weights[j]));
  const ideal = [], antiIdeal = [];
  for (let j = 0; j < matrix[0].length; j++) {
    const vals = weighted.map(r => r[j]);
    ideal[j] = beneficial[j] ? Math.max(...vals) : Math.min(...vals);
    antiIdeal[j] = beneficial[j] ? Math.min(...vals) : Math.max(...vals);
  }
  const scores = weighted.map(r => {
    const dp = Math.sqrt(r.reduce((s, v, j) => s + Math.pow(v - ideal[j], 2), 0));
    const dm = Math.sqrt(r.reduce((s, v, j) => s + Math.pow(v - antiIdeal[j], 2), 0));
    return (dp + dm) !== 0 ? dm / (dp + dm) : 0;
  });
  return { scores, ranking: getRanking(scores) };
};

export const edas = (matrix, weights, beneficial) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const av = new Array(cols).fill(0);
  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) av[j] += matrix[i][j];
    av[j] /= rows;
  }
  const pda = Array.from({ length: rows }, () => []);
  const nda = Array.from({ length: rows }, () => []);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const diff = beneficial[j] ? (matrix[i][j] - av[j]) : (av[j] - matrix[i][j]);
      pda[i][j] = Math.max(0, diff) / (av[j] || 1);
      nda[i][j] = Math.max(0, -diff) / (av[j] || 1);
    }
  }
  const sp = pda.map(r => r.reduce((s, v, j) => s + v * weights[j], 0));
  const sn = nda.map(r => r.reduce((s, v, j) => s + v * weights[j], 0));
  const nsp = sp.map(v => v / (Math.max(...sp) || 1));
  const nsn = sn.map(v => 1 - (v / (Math.max(...sn) || 1)));
  const scores = nsp.map((v, i) => (v + nsn[i]) / 2);
  return { scores, ranking: getRanking(scores) };
};

export const codas = (matrix, weights, beneficial) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const tau = 0.02;
  const norm = Array.from({ length: rows }, () => []);
  for (let j = 0; j < cols; j++) {
    const colVals = matrix.map(r => r[j]);
    const max = Math.max(...colVals);
    const min = Math.min(...colVals);
    for (let i = 0; i < rows; i++) {
      norm[i][j] = beneficial[j] ? matrix[i][j] / (max || 1) : min / (matrix[i][j] || 1);
    }
  }
  const weighted = norm.map(r => r.map((v, j) => v * weights[j]));
  const nis = new Array(cols).fill(0);
  for (let j = 0; j < cols; j++) nis[j] = Math.min(...weighted.map(r => r[j]));
  const ei = weighted.map(r => Math.sqrt(r.reduce((s, v, j) => s + Math.pow(v - nis[j], 2), 0)));
  const ti = weighted.map(r => r.reduce((s, v, j) => s + Math.abs(v - nis[j]), 0));
  const h = new Array(rows).fill(0);
  for (let i = 0; i < rows; i++) {
    for (let k = 0; k < rows; k++) {
      const eDiff = ei[i] - ei[k];
      const tDiff = ti[i] - ti[k];
      const psi = Math.abs(eDiff) > tau ? 1 : 0;
      h[i] += eDiff + psi * tDiff;
    }
  }
  return { scores: h, ranking: getRanking(h) };
};

export const moora = (matrix, weights, beneficial) => {
  const norm = normalizeVector(matrix);
  const scores = norm.map(row => {
    let s = 0;
    row.forEach((v, j) => {
      if (beneficial[j]) s += v * weights[j];
      else s -= v * weights[j];
    });
    return s;
  });
  return { scores, ranking: getRanking(scores) };
};

export const vikor = (matrix, weights, beneficial) => {
  const cols = matrix[0].length;
  const fPlus = [], fMinus = [];
  for (let j = 0; j < cols; j++) {
    const col = matrix.map(r => r[j]);
    fPlus[j] = beneficial[j] ? Math.max(...col) : Math.min(...col);
    fMinus[j] = beneficial[j] ? Math.min(...col) : Math.max(...col);
  }
  const s = matrix.map(row => sum(row.map((v, j) => weights[j] * (fPlus[j] - v) / (fPlus[j] - fMinus[j] || 1))));
  const r = matrix.map(row => Math.max(...row.map((v, j) => weights[j] * (fPlus[j] - v) / (fPlus[j] - fMinus[j] || 1))));
  const sStar = Math.min(...s), sMinus = Math.max(...s);
  const rStar = Math.min(...r), rMinus = Math.max(...r);
  const v = 0.5;
  const q = s.map((si, i) => v * (si - sStar) / (sMinus - sStar || 1) + (1 - v) * (r[i] - rStar) / (rMinus - rStar || 1));
  // In VIKOR lower Q is better, but getRanking sorts descending. We use 1-q for ranking.
  const scores = q.map(val => 1 - val);
  return { scores, ranking: getRanking(scores) };
};

export const waspas = (matrix, weights, beneficial) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const norm = matrix.map(row => row.map((v, j) => {
    const col = matrix.map(r => r[j]);
    const max = Math.max(...col);
    const min = Math.min(...col);
    return beneficial[j] ? v / (max || 1) : min / (v || 1);
  }));
  const wsm = norm.map(row => sum(row.map((v, j) => v * weights[j])));
  const wpm = norm.map(row => row.reduce((prod, v, j) => prod * Math.pow(v || 0.0001, weights[j]), 1));
  const lambda = 0.5;
  const scores = wsm.map((v, i) => lambda * v + (1 - lambda) * wpm[i]);
  return { scores, ranking: getRanking(scores) };
};

const sum = (arr) => arr.reduce((a, b) => a + b, 0);

const getRanking = (scores) => {
  return scores
    .map((score, index) => ({ index, score }))
    .sort((a, b) => b.score - a.score)
    .map((item, rank) => ({ ...item, rank: rank + 1 }));
};
