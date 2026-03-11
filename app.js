const joueurs = [
  { id: 'J001', nom: 'Braxton ASI', ligne: 'Pilier', posteFiltre: 'Premiere ligne', scoreGlobal: 88, taille: 178, poids: 82, masseGrasse: 10, photoUrl: 'Image/asi.png' },
  { id: 'J002', nom: 'Martin BLUM', ligne: 'Demi de mêlée', posteFiltre: 'Charnière', scoreGlobal: 76, taille: 182, poids: 88, masseGrasse: 11, photoUrl: 'Image/blum.png' },
  { id: 'J003', nom: 'Jacques BOTHA', ligne: 'Deuxième ligne', posteFiltre: 'Deuxième ligne', scoreGlobal: 72, taille: 185, poids: 122, masseGrasse: 18, photoUrl: 'Image/botha.png' },
  { id: 'J004', nom: 'Alvaro GARCIA ALBO', ligne: 'Talonneur', posteFiltre: 'Premiere ligne', scoreGlobal: 84, taille: 180, poids: 86, masseGrasse: 9, photoUrl: 'Image/garcia.png' },
  { id: 'J005', nom: 'Isaac KOFFI', ligne: 'Pilier', posteFiltre: 'Premiere ligne', scoreGlobal: 79, taille: 190, poids: 104, masseGrasse: 13, photoUrl: 'Image/koffi.png' },
  { id: 'J006', nom: 'Noah NENE', ligne: 'Centre', posteFiltre: 'Centre', scoreGlobal: 86, taille: 184, poids: 92, masseGrasse: 10, photoUrl: 'Image/nene.png' },
  { id: 'J007', nom: 'Luka RUSSEL', ligne: 'Ailier', posteFiltre: 'Arrière', scoreGlobal: 81, taille: 186, poids: 90, masseGrasse: 9, photoUrl: 'Image/russel.png' },
  { id: 'J008', nom: 'Mosese TABUAKOTO', ligne: 'Troisième ligne', posteFiltre: 'Troisième ligne', scoreGlobal: 90, taille: 192, poids: 112, masseGrasse: 14, photoUrl: 'Image/tabuakoto.png' },
  { id: 'J009', nom: 'IBO Mathis', ligne: 'Arrière', posteFiltre: 'Arrière', scoreGlobal: 83, taille: 183, poids: 89, masseGrasse: 11, photoUrl: 'Image/ibo.png' },
  { id: 'J010', nom: 'Yanis LUX', ligne: 'Pilier', posteFiltre: 'Premiere ligne', scoreGlobal: 82, taille: 181, poids: 87, masseGrasse: 11, photoUrl: 'Image/lux.png' },
  { id: 'J011', nom: 'Yannick LODJRO', ligne: 'Ailier', posteFiltre: 'Arrière', scoreGlobal: 80, taille: 188, poids: 102, masseGrasse: 12, photoUrl: 'Image/lodjro.png' },
  { id: 'J012', nom: 'Ollie McCREA', ligne: 'Deuxième ligne', posteFiltre: 'Deuxième ligne', scoreGlobal: 83, taille: 195, poids: 110, masseGrasse: 13, photoUrl: 'Image/mccrea.png' },
  { id: 'J013', nom: 'Thibault MOTASSI', ligne: 'Demi de mêlée', posteFiltre: 'Charnière', scoreGlobal: 81, taille: 193, poids: 108, masseGrasse: 14, photoUrl: 'Image/motassi.png' },
  { id: 'J014', nom: 'Seta TURAGACOKE', ligne: 'Troisième ligne', posteFiltre: 'Troisième ligne', scoreGlobal: 85, taille: 183, poids: 90, masseGrasse: 10, photoUrl: 'Image/turagacoke.png' },
  { id: 'J015', nom: 'Ethan TIA', ligne: 'Talonneur', posteFiltre: 'Premiere ligne', scoreGlobal: 84, taille: 182, poids: 88, masseGrasse: 10, photoUrl: 'Image/tia.png' },
  { id: 'J016', nom: 'Jaydon VILIAMU', ligne: 'Deuxième ligne', posteFiltre: 'Deuxième ligne', scoreGlobal: 84, taille: 182, poids: 88, masseGrasse: 10, photoUrl: 'Image/viliamu.png' },
  { id: 'J017', nom: 'Méric CHIFFRIN', ligne: 'Troisième ligne', posteFiltre: 'Troisième ligne', scoreGlobal: 49, taille: 198, poids: 87, masseGrasse: 7, photoUrl: 'Image/chiffrin.png' },
  { id: 'J018', nom: 'Mehdi BORSALI', ligne: 'Pilier', posteFiltre: 'Premiere ligne', scoreGlobal: 62, taille: 182, poids: 122, masseGrasse: 18, photoUrl: 'Image/borsali.png' },
  { id: 'J019', nom: 'LEOFA TAUAVE', ligne: 'Arrière', posteFiltre: 'Arrière', scoreGlobal: 83, taille: 178, poids: 79, masseGrasse: 11, photoUrl: 'Image/leofa.png' },
  { id: 'J020', nom: 'Antonin BIKAI-COMBE', ligne: 'Centre', posteFiltre: 'Centre', scoreGlobal: 86, taille: 185, poids: 97, masseGrasse: 12, photoUrl: 'Image/bikaicombe.png' },
];

const seasons = ['2022-23', '2023-24', '2024-25', '2025-26'];
const blocks = {
  profil: { label: 'Profil Physique', tests: { Mensurations: ['Taille', 'Poids', 'Masse grasse'] } },
  force: { label: 'Force', tests: { 'Membre sup': ['Développé couché', 'Traction'], 'Membre inf': ['Squat', 'IMTP'] } },
  endurance: { label: 'Endurance', tests: { Endurance: ['Bronco'] } },
  vitesse: { label: 'Vitesse', tests: { Vitesse: ['10 mètre', '20 mètre', '50 mètre', 'Vmax'] } },
  puissance: { label: 'Puissance', tests: { Puissance: ['Prowler', '1080', 'Kayser'] } },
};

const state = {
  selectedPlayerId: null,
  openedBlock: null,
  selectedTest: null,
  filter: 'all',
  rankingMode: 'team',
  comparePlayerId: null,
};

const filterSelect = document.getElementById('filterSelect');
const searchInput = document.getElementById('searchInput');
const playersList = document.getElementById('playersList');
const playerDetail = document.getElementById('playerDetail');

const rand = (seed) => { const x = Math.sin(seed) * 10000; return x - Math.floor(x); };


const posteNumero = {
  Pilier: 3,
  Talonneur: 2,
  'Deuxième ligne': 4,
  'Troisième ligne': 6,
  'Demi de mêlée': 9,
  "Demi d'ouverture": 10,
  Centre: 12,
  Ailier: 11,
  Arrière: 15,
};

function playerBirthDate(player) {
  if (player.id === 'J001') return '12/03/2006';
  const day = String(8 + Number(player.id.slice(2)) % 20).padStart(2, '0');
  const month = String(1 + Number(player.id.slice(2)) % 12).padStart(2, '0');
  return `${day}/${month}/2006`;
}

function testSeries(player, block, test) {
  const base = player.scoreGlobal / 2 + rand((player.id + block + test).length) * 10;
  return seasons.map((_, i) => Number((base + i * (rand(i + base) * 2 - 0.3)).toFixed(1)));
}

function noteBlock(player, blockKey) {
  if (blockKey === 'profil') return Number((6 + player.scoreGlobal / 25).toFixed(1));
  const values = Object.values(blocks[blockKey].tests).flat().map((t) => testSeries(player, blockKey, t).at(-1));
  return Number((values.reduce((a, b) => a + b, 0) / values.length / 7).toFixed(1));
}

function trend(values, lowerBetter = false) {
  const d = Number((values.at(-1) - values.at(-2)).toFixed(1));
  const up = lowerBetter ? d <= 0 : d >= 0;
  return { text: `${up ? '▲' : '▼'} ${Math.abs(d)}`, cls: up ? 'trend-up' : 'trend-down' };
}

function rank(player, block, test) {
  const scoped = state.filter === 'all' ? joueurs : joueurs.filter((j) => j.posteFiltre === state.filter);
  const vals = scoped.map((j) => testSeries(j, block, test).at(-1));
  const sorted = [...vals].sort((a, b) => b - a);
  const current = testSeries(player, block, test).at(-1);
  return `${sorted.findIndex((v) => v === current) + 1}/${scoped.length}`;
}

function rankAgainstScope(player, block, test, mode) {
  const scoped = mode === 'position'
    ? joueurs.filter((j) => j.ligne === player.ligne)
    : joueurs;
  const vals = scoped.map((j) => testSeries(j, block, test).at(-1));
  const sorted = [...vals].sort((a, b) => b - a);
  const current = testSeries(player, block, test).at(-1);
  return `${sorted.findIndex((v) => v === current) + 1}/${scoped.length}`;
}

function rankingInsight(player, key, test) {
  if (state.rankingMode === 'position') {
    return `Classement poste (${player.ligne}) : <strong>${rankAgainstScope(player, key, test, 'position')}</strong>`;
  }

  if (state.rankingMode === 'comparison') {
    const compared = joueurs.find((j) => j.id === state.comparePlayerId) || joueurs.find((j) => j.id !== player.id);
    if (!compared) return 'Comparaison indisponible';
    const playerVal = testSeries(player, key, test).at(-1);
    const comparedVal = testSeries(compared, key, test).at(-1);
    const delta = Number((playerVal - comparedVal).toFixed(1));
    const sign = delta >= 0 ? '+' : '';
    return `Comparaison vs ${compared.nom} : <strong>${playerVal}</strong> (${sign}${delta})`;
  }

  return `Classement équipe : <strong>${rankAgainstScope(player, key, test, 'team')}</strong>`;
}

function rankingControls(player) {
  const compareOptions = joueurs
    .filter((j) => j.id !== player.id)
    .map((j) => `<option value="${j.id}" ${state.comparePlayerId === j.id ? 'selected' : ''}>${j.nom}</option>`)
    .join('');

  return `<div class="ranking-controls"><label>Vue classement</label><select class="ranking-mode-select"><option value="team" ${state.rankingMode === 'team' ? 'selected' : ''}>Par équipe</option><option value="position" ${state.rankingMode === 'position' ? 'selected' : ''}>Par poste</option><option value="comparison" ${state.rankingMode === 'comparison' ? 'selected' : ''}>Comparer un joueur</option></select>${state.rankingMode === 'comparison' ? `<select class="ranking-compare-select">${compareOptions}</select>` : ''}</div>`;
}

function historySVG(values) {
  const w = 460, h = 130, min = Math.min(...values) - 1, max = Math.max(...values) + 1;
  const pts = values.map((v, i) => {
    const x = (w / (values.length - 1)) * i;
    const y = h - ((v - min) / (max - min || 1)) * (h - 18) - 9;
    return `${x},${y}`;
  }).join(' ');
  return `<svg viewBox="0 0 ${w} ${h}" class="history-chart"><polyline points="${pts}" fill="none" stroke="var(--sf-pink)" stroke-width="4"/>${pts.split(' ').map((p)=>`<circle cx="${p.split(',')[0]}" cy="${p.split(',')[1]}" r="4" fill="var(--sf-blue)"/>`).join('')}</svg>`;
}

function filteredPlayers() {
  const q = searchInput.value.toLowerCase().trim();
  return joueurs.filter((j) => (state.filter === 'all' || j.posteFiltre === state.filter) && (!q || `${j.nom} ${j.ligne}`.toLowerCase().includes(q)));
}

function renderTop() {
  const scoped = state.filter === 'all' ? joueurs : joueurs.filter((j) => j.posteFiltre === state.filter);
  document.querySelector('.stat-available .stat-label').textContent = 'Joueurs suivis';
  document.getElementById('stat-disponibles').textContent = scoped.length;
  document.querySelector('.stat-injury .stat-label').textContent = 'Indice moyen';
  document.getElementById('stat-infirmerie').textContent = scoped.length ? Math.round(scoped.reduce((s, j) => s + j.scoreGlobal, 0) / scoped.length) : 0;
}

function renderList() {
  const items = filteredPlayers();
  playersList.innerHTML = items.length ? '' : '<div class="empty-mini">Aucun joueur trouvé.</div>';
  items.forEach((j) => {
    const el = document.createElement('button');
    el.className = `player-card ${state.selectedPlayerId === j.id ? 'active' : ''}`;
    el.innerHTML = `<img src="${j.photoUrl}" alt="${j.nom}" class="player-avatar" /><div class="player-main"><div class="player-topline"><span class="player-name">${j.nom}</span><span class="player-index">${j.scoreGlobal}</span></div><div class="player-meta">${j.ligne}</div></div>`;
    el.addEventListener('click', () => { state.selectedPlayerId = j.id; state.openedBlock = null; state.selectedTest = null; renderList(); renderDetail(); });
    playersList.appendChild(el);
  });
}

function renderBlock(player, key) {
  const cfg = blocks[key];
  const open = state.openedBlock === key;
  const note = noteBlock(player, key);
  const testsHTML = Object.entries(cfg.tests).map(([group, arr]) => `<div class="test-group"><h4>${group}</h4><div class="tests-row">${arr.map((t)=>`<button class="test-chip ${state.openedBlock===key&&state.selectedTest===t?'active':''}" data-key="${key}" data-test="${t}">${t}</button>`).join('')}</div></div>`).join('');
  const headerRight = key === 'profil'
    ? `<div class="metric-profile-stats"><span>${player.taille} cm</span><span>${player.poids} kg</span><span>${player.masseGrasse}% MG</span></div>`
    : `<span class="metric-note">${note}/10</span>`;

  let insight = '';
  if (open && state.selectedTest) {
    if (key === 'profil') {
      const mgTrend = [player.masseGrasse + 1.1, player.masseGrasse + 0.7, player.masseGrasse + 0.3, player.masseGrasse];
      const tr = trend(mgTrend, true);
      insight = `<section class="test-insight"><div class="insight-top"><h3>Mensurations actuelles</h3><span class="trend-pill ${tr.cls}">${tr.text}</span></div><div class="season-grid"><div class="season-cell"><span>Taille</span><strong>${player.taille} cm</strong></div><div class="season-cell"><span>Poids</span><strong>${player.poids} kg</strong></div><div class="season-cell"><span>Masse grasse</span><strong>${player.masseGrasse} %</strong></div><div class="season-cell"><span>Indice global</span><strong>${player.scoreGlobal}</strong></div></div>${historySVG(mgTrend)}</section>`;
    } else {
      const vals = testSeries(player, key, state.selectedTest);
      const tr = trend(vals, ['10 mètre','20 mètre','50 mètre','Bronco'].includes(state.selectedTest));
      insight = `<section class="test-insight"><div class="insight-top"><h3>${state.selectedTest}</h3><span class="trend-pill ${tr.cls}">${tr.text}</span></div>${rankingControls(player)}<p class="insight-meta">${rankingInsight(player, key, state.selectedTest)}</p>${historySVG(vals)}<div class="season-grid">${seasons.map((s,i)=>`<div class="season-cell"><span>${s}</span><strong>${vals[i]}</strong></div>`).join('')}</div></section>`;
    }
  }

  return `<section class="metric-block ${open ? 'open' : ''}"><button class="metric-header" data-key="${key}"><span class="metric-title">${cfg.label}</span>${headerRight}</button><div class="metric-content">${testsHTML}${insight}</div></section>`;
  return `<section class="metric-block ${open ? 'open' : ''}"><button class="metric-header" data-key="${key}"><span class="metric-title">${cfg.label}</span><span class="metric-note">${note}/10</span></button><div class="metric-content">${testsHTML}${insight}</div></section>`;
}

function renderDetail() {
  const p = joueurs.find((j) => j.id === state.selectedPlayerId);
  if (!p) {
    playerDetail.className = 'player-detail empty-state';
    playerDetail.innerHTML = `<div class="empty-welcome"><img src="Image/SFP.png" class="empty-logo" alt="Logo Stade Français"><h2 class="empty-title">U21 Stade Français Paris</h2><p class="empty-subtitle">Centre de suivi – Performance</p></div>`;
    return;
  }

  const numeroPoste = posteNumero[p.ligne] ?? '—';
  const birthDate = playerBirthDate(p);

  playerDetail.className = 'player-detail';
  playerDetail.innerHTML = `
    <section class="player-header-card">
      <div class="ph-avatar"><img src="${p.photoUrl}" alt="${p.nom}"/></div>
      <div class="ph-main">
        <div class="ph-name">${p.nom}</div>
        <div class="ph-birth">Né le ${birthDate}</div>
        <div class="ph-sub">Poste ${numeroPoste} • ${p.ligne}</div>
      </div>
      <div class="ph-score">
        <div class="ph-score-value">${p.scoreGlobal}</div>
        <div class="ph-score-label">Indice global</div>
      </div>
    </section>
    <div class="metrics-stack">${['profil','force','endurance','vitesse','puissance'].map((k)=>renderBlock(p,k)).join('')}</div>
  `;

  playerDetail.querySelectorAll('.metric-header').forEach((b) => b.addEventListener('click', () => {
    const k = b.dataset.key;
    state.openedBlock = state.openedBlock === k ? null : k;
    state.selectedTest = null;
    renderDetail();
  }));

  playerDetail.querySelectorAll('.test-chip').forEach((b) => b.addEventListener('click', () => {
    state.openedBlock = b.dataset.key;
    state.selectedTest = b.dataset.test;
    renderDetail();
  }));

  const rankingModeSelect = playerDetail.querySelector('.ranking-mode-select');
  if (rankingModeSelect) {
    rankingModeSelect.addEventListener('change', (e) => {
      state.rankingMode = e.target.value;
      if (state.rankingMode !== 'comparison') state.comparePlayerId = null;
      renderDetail();
    });
  }

  const rankingCompareSelect = playerDetail.querySelector('.ranking-compare-select');
  if (rankingCompareSelect) {
    rankingCompareSelect.addEventListener('change', (e) => {
      state.comparePlayerId = e.target.value;
      renderDetail();
    });
  }
}

filterSelect.addEventListener('change', (e) => { state.filter = e.target.value; renderTop(); renderList(); renderDetail(); });
searchInput.addEventListener('input', renderList);

function init() {
  filterSelect.innerHTML = `<option value="all">Tout l’effectif</option><option value="Premiere ligne">Premiere ligne</option><option value="Deuxième ligne">Deuxième ligne</option><option value="Troisième ligne">Troisième ligne</option><option value="Charnière">Charnière</option><option value="Centre">Centre</option><option value="Arrière">Arrière</option>`;
  renderTop();
  renderList();
  renderDetail();
}
init();
