// --- ÉTAT GLOBAL ---

let currentPlayerId = null;
let selectedSegment = "Global";
let selectedTestId = null;

// --- DONNÉES DEMO (tu pourras les relier à ton Sheet plus tard) ---

const joueurs = [
  {
    id: "J001",
    nom: "Dupont",
    prenom: "Theo",
    poste: "9",
    ligne: "Arrière",
    statut: "Disponible",
    disponibilite: "Disponible",
    dernierTest: "2025-11-10",
    scoreGlobal: 87,
    pointsForts: "ASH test, NordBoard",
    pointsFaibles: "CMJ",
    antecedents: "Ischio D 2022",
  },
  {
    id: "J002",
    nom: "Martin",
    prenom: "Leo",
    poste: "Ailier",
    ligne: "Arrière",
    statut: "Blessé",
    disponibilite: "Infirmerie",
    dernierTest: "2025-11-05",
    scoreGlobal: 73,
    pointsForts: "CMJ",
    pointsFaibles: "NordBoard, ASH test",
    antecedents: "Ischio D 2023; Cheville G 2021",
  },
  {
    id: "J003",
    nom: "Bernard",
    prenom: "Max",
    poste: "Pilier",
    ligne: "Avant",
    statut: "Adapté",
    disponibilite: "Infirmerie",
    dernierTest: "2025-11-08",
    scoreGlobal: 68,
    pointsForts: "ISO quad, McCall",
    pointsFaibles: "CMJ, Sprint 30m",
    antecedents: "Épaule G 2023",
  },
  {
    id: "J004",
    nom: "Leroy",
    prenom: "Hugo",
    poste: "10",
    ligne: "Arrière",
    statut: "Disponible",
    disponibilite: "Disponible",
    dernierTest: "2025-11-09",
    scoreGlobal: 82,
    pointsForts: "CMJ, Sprint 10m",
    pointsFaibles: "NordBoard",
    antecedents: "Aucune",
  },
];

// principaux tests : CMJ, Sprint 10m/30m, McCall, KTW, isocinétique…
const testsPhysiques = [
  // J001
  { id: "T001", joueurId: "J001", date: "2025-11-10", type: "CMJ", segment: "Hanche", cote: "-", valeur: 39, unite: "cm", ref: 40, ratio: 0.97, zone: "Vert" },
  { id: "T002", joueurId: "J001", date: "2025-11-10", type: "NordBoard", segment: "Ischio", cote: "Droit", valeur: 330, unite: "N", ref: 320, ratio: 1.03, zone: "Vert" },
  { id: "T003", joueurId: "J001", date: "2025-11-10", type: "NordBoard", segment: "Ischio", cote: "Gauche", valeur: 325, unite: "N", ref: 320, ratio: 1.01, zone: "Vert" },
  { id: "T004", joueurId: "J001", date: "2025-11-09", type: "Sprint 30m", segment: "Course", cote: "-", valeur: 4.1, unite: "s", ref: 4.2, ratio: 0.98, zone: "Vert" },

  // J002
  { id: "T005", joueurId: "J002", date: "2025-11-05", type: "CMJ", segment: "Hanche", cote: "-", valeur: 30, unite: "cm", ref: 40, ratio: 0.75, zone: "Rouge" },
  { id: "T006", joueurId: "J002", date: "2025-11-05", type: "NordBoard", segment: "Ischio", cote: "Droit", valeur: 250, unite: "N", ref: 320, ratio: 0.78, zone: "Rouge" },
  { id: "T007", joueurId: "J002", date: "2025-11-05", type: "NordBoard", segment: "Ischio", cote: "Gauche", valeur: 300, unite: "N", ref: 320, ratio: 0.94, zone: "Vert" },
  { id: "T008", joueurId: "J002", date: "2025-11-04", type: "KTW", segment: "Cheville", cote: "Gauche", valeur: 12, unite: "cm", ref: 10, ratio: 1.2, zone: "Vert" },

  // J003
  { id: "T009", joueurId: "J003", date: "2025-11-08", type: "CMJ", segment: "Hanche", cote: "-", valeur: 28, unite: "cm", ref: 32, ratio: 0.87, zone: "Orange" },
  { id: "T010", joueurId: "J003", date: "2025-11-08", type: "Isocinétique quadriceps", segment: "Genou", cote: "Droit", valeur: 165, unite: "%BW", ref: 180, ratio: 0.91, zone: "Orange" },
  { id: "T011", joueurId: "J003", date: "2025-11-08", type: "Isocinétique quadriceps", segment: "Genou", cote: "Gauche", valeur: 150, unite: "%BW", ref: 180, ratio: 0.83, zone: "Rouge" },
  { id: "T012", joueurId: "J003", date: "2025-11-07", type: "McCall", segment: "Ischio", cote: "Gauche", valeur: 3, unite: "/5", ref: 5, ratio: 0.6, zone: "Rouge" },

  // J004
  { id: "T013", joueurId: "J004", date: "2025-11-09", type: "CMJ", segment: "Hanche", cote: "-", valeur: 41, unite: "cm", ref: 40, ratio: 1.02, zone: "Vert" },
  { id: "T014", joueurId: "J004", date: "2025-11-09", type: "Sprint 10m", segment: "Course", cote: "-", valeur: 1.6, unite: "s", ref: 1.7, ratio: 1.03, zone: "Vert" },
  { id: "T015", joueurId: "J004", date: "2025-11-09", type: "KTW", segment: "Cheville", cote: "Droit", valeur: 9, unite: "cm", ref: 10, ratio: 0.9, zone: "Orange" },
];

// Blessures & rééduc
const blessures = [
  {
    id: "B001",
    joueurId: "J002",
    dateBlessure: "2025-10-29",
    diagnostic: "Lésion ischio BFlh grade 2",
    localisation: "Ischio Droit",
    segment: "Ischio",
    phase: "Rééducation",
    rttEstimee: "2025-11-15",
    rttEffective: "",
    rtpEstimee: "2025-11-25",
    rtpEffective: "",
    prochainesVisites: "IRM 12/11; Chir 18/11",
    prochainsTests: "NordBoard; CMJ; ASH",
    protocole: {
      semaine1: "Contrôle douleur, isométriques légers, mobilité douce",
      semaine2: "Augmentation charge isométrique, début excentrique léger",
      semaine3: "Excentrique ciblé, course en ligne droite jusqu'à 60%",
      semaine4: "Sprints 70–80%, changements de direction contrôlés",
      semaine5: "Sprints 90%, drills poste, intégration partielle",
      semaine6: "Validation : tests iso genou + NordBoard + CMJ",
    },
    etapesCles: "IRM, test excentrique, test sprint 90%, test terrain poste, validation pré-match",
  },
  {
    id: "B002",
    joueurId: "J003",
    dateBlessure: "2025-10-25",
    diagnostic: "Instabilité acromio-claviculaire",
    localisation: "Épaule G",
    segment: "Épaule",
    phase: "Reconditionnement terrain",
    rttEstimee: "2025-11-12",
    rttEffective: "",
    rtpEstimee: "2025-11-20",
    rtpEffective: "",
    prochainesVisites: "Chir 14/11",
    prochainsTests: "Isométrie épaule; tests contact progressifs",
    protocole: {
      semaine1: "Gestion douleur, travail passif/actif assisté",
      semaine2: "Renfo scapulaire, isométrie épaule",
      semaine3: "Renfo dynamique, proprioception, chaîne cinétique",
      semaine4: "Exercices fonctionnels, poussées, passes et plaquages contrôlés",
      semaine5: "Contact progressif + validation tests iso épaule",
    },
    etapesCles: "Imagerie initiale, avis chir, validation force, test plaquage progressif",
  },
];

const seances = [
  { id: "S001", blessureId: "B001", joueurId: "J002", date: "2025-11-01", type: "Physio", resume: "Renfo ischio excentrique", rpe: 5, tolerance: "OK", commentaire: "Bonne séance" },
  { id: "S002", blessureId: "B001", joueurId: "J002", date: "2025-11-04", type: "PPG / Prépa", resume: "CMJ + accélérations 60%", rpe: 6, tolerance: "Légère gêne", commentaire: "" },
  { id: "S003", blessureId: "B002", joueurId: "J003", date: "2025-11-03", type: "Physio", resume: "Stabilité scapulaire + isométrie", rpe: 4, tolerance: "OK", commentaire: "" },
  { id: "S004", blessureId: "B002", joueurId: "J003", date: "2025-11-07", type: "Reconditionnement", resume: "Travail contact léger", rpe: 5, tolerance: "OK", commentaire: "" },
];

// GPS simplifié
const gpsData = [
  { id: "G001", joueurId: "J001", semaine: "2025-W44", mois: "2025-11", match: true, date: "2025-11-02", totalDistance: 6500, hsr: 600, sprint: 90 },
  { id: "G002", joueurId: "J001", semaine: "2025-W45", mois: "2025-11", match: false, date: "2025-11-06", totalDistance: 7200, hsr: 800, sprint: 120 },
  { id: "G003", joueurId: "J002", semaine: "2025-W44", mois: "2025-11", match: true, date: "2025-10-28", totalDistance: 5800, hsr: 550, sprint: 80 },
  { id: "G004", joueurId: "J003", semaine: "2025-W45", mois: "2025-11", match: false, date: "2025-11-05", totalDistance: 4000, hsr: 200, sprint: 30 },
  { id: "G005", joueurId: "J004", semaine: "2025-W44", mois: "2025-11", match: true, date: "2025-11-02", totalDistance: 7200, hsr: 820, sprint: 110 },
  { id: "G006", joueurId: "J004", semaine: "2025-W45", mois: "2025-11", match: false, date: "2025-11-07", totalDistance: 6800, hsr: 700, sprint: 95 },
];

// --- UTILITAIRES ---

function getInitials(joueur) {
  return `${joueur.prenom[0] ?? ""}${joueur.nom[0] ?? ""}`.toUpperCase();
}

function getStatutsBadgeClass(statut) {
  switch (statut) {
    case "Disponible":
      return "badge badge-disponible";
    case "Blessé":
      return "badge badge-blesse";
    case "Adapté":
      return "badge badge-adapte";
    default:
      return "badge";
  }
}

function getPhaseClass(phase) {
  if (!phase) return "phase-pill";
  const p = phase.toLowerCase();
  if (p.includes("aigu")) return "phase-pill phase-aigu";
  if (p.includes("rééducation")) return "phase-pill phase-reeeducation";
  if (p.includes("reconditionnement")) return "phase-pill phase-recond";
  if (p.includes("reprise")) return "phase-pill phase-reprise";
  return "phase-pill";
}

function getZoneClass(zone) {
  if (!zone) return "";
  const z = zone.toLowerCase();
  if (z.includes("vert")) return "flag-dot flag-vert";
  if (z.includes("orange")) return "flag-dot flag-orange";
  if (z.includes("rouge")) return "flag-dot flag-rouge";
  return "flag-dot";
}

// --- STATS ---

function renderStats() {
  const dispoCount = joueurs.filter((j) => j.disponibilite === "Disponible").length;
  const infirmerieCount = joueurs.filter((j) => j.disponibilite === "Infirmerie").length;
  document.getElementById("stat-disponibles").textContent = dispoCount;
  document.getElementById("stat-infirmerie").textContent = infirmerieCount;
}

// --- LISTE JOUEURS ---

function renderPlayersList() {
  const filter = document.getElementById("filterSelect").value;
  const container = document.getElementById("playersList");
  container.innerHTML = "";

  let filtered = [...joueurs];

  if (filter === "available") {
    filtered = filtered.filter((j) => j.disponibilite === "Disponible");
  } else if (filter === "injury") {
    filtered = filtered.filter((j) => j.disponibilite === "Infirmerie");
  }

  filtered.forEach((j) => {
    const card = document.createElement("div");
    card.className = "player-card" + (currentPlayerId === j.id ? " active" : "");
    card.addEventListener("click", () => {
      currentPlayerId = j.id;
      selectedSegment = "Global";
      selectedTestId = null;
      renderPlayersList();
      renderPlayerDetail(j.id);
    });

    const avatar = document.createElement("div");
    avatar.className = "player-avatar";
    avatar.textContent = getInitials(j);

    const main = document.createElement("div");
    main.className = "player-main";

    const name = document.createElement("div");
    name.className = "player-name";
    name.textContent = `${j.prenom} ${j.nom}`;

    const sub = document.createElement("div");
    sub.className = "player-sub";
    sub.textContent = `Poste ${j.poste} • ${j.ligne}`;

    const extra = document.createElement("div");
    extra.className = "player-extra";
    extra.textContent = `Forts : ${j.pointsForts} • Faibles : ${j.pointsFaibles}`;

    main.appendChild(name);
    main.appendChild(sub);
    main.appendChild(extra);

    const badge = document.createElement("span");
    badge.className = getStatutsBadgeClass(j.statut);
    badge.textContent = j.statut;

    card.appendChild(avatar);
    card.appendChild(main);
    card.appendChild(badge);
    container.appendChild(card);
  });

  if (filtered.length === 0) {
    container.innerHTML = "<p style='font-size:0.85rem;color:#6b7280;'>Aucun joueur ne correspond à ce filtre.</p>";
  }
}

// --- FICHE JOUEUR ---

function renderPlayerDetail(id) {
  const joueur = joueurs.find((j) => j.id === id);
  if (!joueur) return;

  const detail = document.getElementById("playerDetail");
  detail.classList.remove("empty-state");
  detail.innerHTML = "";

  // HEADER façon carte FIFA
  const headerCard = document.createElement("div");
  headerCard.className = "player-header-card";

  const avatar = document.createElement("div");
  avatar.className = "ph-avatar";
  avatar.textContent = getInitials(joueur);

  const phMain = document.createElement("div");
  phMain.className = "ph-main";

  const phName = document.createElement("div");
  phName.className = "ph-name";
  phName.textContent = `${joueur.prenom} ${joueur.nom}`;

  const phSub = document.createElement("div");
  phSub.className = "ph-sub";
  phSub.textContent = `Poste ${joueur.poste} • ${joueur.ligne}`;

  const phTags = document.createElement("div");
  phTags.className = "ph-tags";

  const tagStatut = document.createElement("span");
  tagStatut.className = "ph-tag";
  tagStatut.textContent = joueur.statut;

  const tagDisp = document.createElement("span");
  tagDisp.className = "ph-tag";
  tagDisp.textContent = `Disponibilité : ${joueur.disponibilite}`;

  const tagTest = document.createElement("span");
  tagTest.className = "ph-tag";
  tagTest.textContent = joueur.dernierTest ? `Dernier test : ${joueur.dernierTest}` : "Dernier test : -";

  phTags.appendChild(tagStatut);
  phTags.appendChild(tagDisp);
  phTags.appendChild(tagTest);

  phMain.appendChild(phName);
  phMain.appendChild(phSub);
  phMain.appendChild(phTags);

  const phScore = document.createElement("div");
  phScore.className = "ph-score";
  const scoreValue = document.createElement("div");
  scoreValue.className = "ph-score-value";
  scoreValue.textContent = joueur.scoreGlobal ?? "-";
  const scoreLabel = document.createElement("div");
  scoreLabel.className = "ph-score-label";
  scoreLabel.textContent = "Indice global";

  phScore.appendChild(scoreValue);
  phScore.appendChild(scoreLabel);

  headerCard.appendChild(avatar);
  headerCard.appendChild(phMain);
  headerCard.appendChild(phScore);
  detail.appendChild(headerCard);

  // SECTION PROFIL
  const profilSection = document.createElement("div");
  profilSection.className = "section";
  profilSection.innerHTML = `
    <h3 class="section-title"><span class="icon">👤</span> Vue d'ensemble joueur</h3>
    <div class="two-columns">
      <div class="info-card">
        <div class="info-label">Points forts</div>
        <div class="info-value">${joueur.pointsForts || "-"}</div>
      </div>
      <div class="info-card">
        <div class="info-label">Points faibles</div>
        <div class="info-value">${joueur.pointsFaibles || "-"}</div>
      </div>
      <div class="info-card">
        <div class="info-label">Antécédents globaux</div>
        <div class="info-value">${joueur.antecedents || "-"}</div>
      </div>
    </div>
  `;
  detail.appendChild(profilSection);

  // SECTION GPS
  renderGpsSection(detail, joueur);

  // SECTION BLESSURE / RÉÉDUC (uniquement si pas Disponible)
  if (joueur.statut !== "Disponible") {
    renderBlessureSection(detail, joueur);
  }

  // SECTION SEGMENTS + TESTS
  const segSection = document.createElement("div");
  segSection.className = "section";
  segSection.innerHTML = `
    <h3 class="section-title"><span class="icon">🦴</span> Zones anatomiques</h3>
    <div id="segmentTabs" class="segment-tabs"></div>
  `;
  detail.appendChild(segSection);

  const testsSection = document.createElement("div");
  testsSection.className = "section";
  testsSection.innerHTML = `
    <h3 class="section-title"><span class="icon">📊</span> Tests & monitoring</h3>
    <div id="testsTableWrapper"></div>
    <div id="testDetailWrapper" class="test-detail-wrapper"></div>
  `;
  detail.appendChild(testsSection);

  renderSegmentTabs(joueur);
  renderTestsSection(joueur);
}

// --- GPS ---

function renderGpsSection(detail, joueur) {
  const data = gpsData.filter((g) => g.joueurId === joueur.id);
  const gpsSection = document.createElement("div");
  gpsSection.className = "section";

  if (data.length === 0) {
    gpsSection.innerHTML = `
      <h3 class="section-title"><span class="icon">📡</span> Performance GPS</h3>
      <div class="section-content">Pas de données GPS enregistrées.</div>
    `;
    detail.appendChild(gpsSection);
    return;
  }

  const sortedByDate = [...data].sort((a, b) => (a.date > b.date ? -1 : 1));
  const jourJ = sortedByDate[0];

  const byWeek = {};
  data.forEach((d) => {
    if (!byWeek[d.semaine]) byWeek[d.semaine] = { totalDistance: 0, hsr: 0, sprint: 0, count: 0 };
    byWeek[d.semaine].totalDistance += d.totalDistance;
    byWeek[d.semaine].hsr += d.hsr;
    byWeek[d.semaine].sprint += d.sprint;
    byWeek[d.semaine].count += 1;
  });

  const semaines = Object.keys(byWeek);

  gpsSection.innerHTML = `
    <h3 class="section-title"><span class="icon">📡</span> Performance GPS</h3>
    <div class="gps-cards">
      <div class="info-card">
        <div class="info-label">Jour J (${jourJ.date})</div>
        <div class="info-value">${jourJ.totalDistance} m</div>
        <div class="info-label">HSR : ${jourJ.hsr} m • Sprint : ${jourJ.sprint} m</div>
      </div>
      <div class="info-card">
        <div class="info-label">Nb semaines suivies</div>
        <div class="info-value">${semaines.length}</div>
        <div class="info-label">Charge hebdo moyenne (approx.)</div>
      </div>
    </div>
  `;

  const table = document.createElement("table");
  table.className = "table-like";
  table.innerHTML = `
    <thead>
      <tr>
        <th>Semaine</th>
        <th>Distance moy.</th>
        <th>HSR moy.</th>
        <th>Sprint moy.</th>
      </tr>
    </thead>
    <tbody>
      ${semaines
        .map((s) => {
          const w = byWeek[s];
          const cd = Math.round(w.totalDistance / w.count);
          const ch = Math.round(w.hsr / w.count);
          const cs = Math.round(w.sprint / w.count);
          return `<tr>
            <td>${s}</td>
            <td>${cd} m</td>
            <td>${ch} m</td>
            <td>${cs} m</td>
          </tr>`;
        })
        .join("")}
    </tbody>
  `;

  gpsSection.appendChild(table);
  detail.appendChild(gpsSection);
}

// --- BLESSURES / RÉÉDUC ---

function renderBlessureSection(detail, joueur) {
  const blessureSection = document.createElement("div");
  blessureSection.className = "section";

  const blessureList = blessures
    .filter((b) => b.joueurId === joueur.id)
    .sort((a, b) => (a.dateBlessure > b.dateBlessure ? -1 : 1));

  if (blessureList.length === 0) {
    blessureSection.innerHTML = `
      <h3 class="section-title"><span class="icon">🩺</span> Pathologie & rééducation</h3>
      <div class="section-content">Aucune blessure en cours.</div>
    `;
    detail.appendChild(blessureSection);
    return;
  }

  const blessure = blessureList[0];
  const phaseClass = getPhaseClass(blessure.phase);

  let protocoleHtml = "";
  if (blessure.protocole) {
    Object.entries(blessure.protocole).forEach(([k, v]) => {
      protocoleHtml += `
        <div class="protocole-week">
          <div class="protocole-week-title">${k.toUpperCase().replace("SEMAINE", "Semaine ")}</div>
          <div class="protocole-week-content">${v}</div>
        </div>
      `;
    });
  }

  const seancesBlessure = seances.filter((s) => s.blessureId === blessure.id);

  blessureSection.innerHTML = `
    <h3 class="section-title"><span class="icon">🩺</span> Pathologie & rééducation</h3>
    <div class="two-columns">
      <div class="info-card">
        <div class="info-label">Diagnostic</div>
        <div class="info-value">${blessure.diagnostic}</div>
      </div>
      <div class="info-card">
        <div class="info-label">Localisation</div>
        <div class="info-value">${blessure.localisation}</div>
      </div>
      <div class="info-card">
        <div class="info-label">Phase</div>
        <div class="info-value"><span class="${phaseClass}">${blessure.phase}</span></div>
      </div>
      <div class="info-card">
        <div class="info-label">Dates clés</div>
        <div class="info-value">
          Début : ${blessure.dateBlessure}<br/>
          RTT estimée : ${blessure.rttEstimee || "-"}<br/>
          RTP estimée : ${blessure.rtpEstimee || "-"}
        </div>
      </div>
    </div>

    <div class="section-content" style="margin-top:8px;">
      <div class="info-card">
        <div class="info-label">Étapes clés & checks</div>
        <div class="info-value">${blessure.etapesCles || "-"}</div>
      </div>
    </div>

    <h4 style="margin-top:10px;font-size:0.85rem;">Protocole semaine par semaine</h4>
    ${protocoleHtml || "<div class='section-content'>Protocole détaillé à définir.</div>"}

    <h4 style="margin-top:10px;font-size:0.85rem;">Séances de rééducation</h4>
  `;

  const table = document.createElement("table");
  table.className = "table-like";
  table.innerHTML = `
    <thead>
      <tr>
        <th>Date</th>
        <th>Type</th>
        <th>Contenu</th>
        <th>RPE</th>
        <th>Tolérance</th>
      </tr>
    </thead>
    <tbody>
      ${seancesBlessure
        .map(
          (s) => `
        <tr>
          <td>${s.date}</td>
          <td>${s.type}</td>
          <td>${s.resume}</td>
          <td>${s.rpe}</td>
          <td>${s.tolerance}</td>
        </tr>
      `
        )
        .join("")}
    </tbody>
  `;

  blessureSection.appendChild(table);
  detail.appendChild(blessureSection);
}

// --- SEGMENTS + TESTS ---

function renderSegmentTabs(joueur) {
  const container = document.getElementById("segmentTabs");
  if (!container) return;
  container.innerHTML = "";

  const segments = [
    "Global",
    "Tête",
    "Rachis cervical",
    "Épaule",
    "Lombaire",
    "Hanche",
    "Genou",
    "Cheville",
    "Ischio",
    "Course",
  ];

  segments.forEach((seg) => {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "segment-tab" + (selectedSegment === seg ? " active" : "");
    tab.textContent = seg;
    tab.addEventListener("click", () => {
      selectedSegment = seg;
      selectedTestId = null;
      renderTestsSection(joueur);
    });
    container.appendChild(tab);
  });
}

function renderTestsSection(joueur) {
  const wrapper = document.getElementById("testsTableWrapper");
  const detailWrapper = document.getElementById("testDetailWrapper");
  if (!wrapper || !detailWrapper) return;

  const allTests = testsPhysiques
    .filter((t) => t.joueurId === joueur.id)
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  let tests = [...allTests];

  if (selectedSegment && selectedSegment !== "Global") {
    tests = tests.filter((t) => t.segment === selectedSegment);
  }

  if (tests.length === 0) {
    wrapper.innerHTML = `<div class="section-content">Aucun test enregistré pour cette zone.</div>`;
    detailWrapper.innerHTML = "";
    return;
  }

  wrapper.innerHTML = `
    <table class="table-like table-clickable">
      <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Segment</th>
          <th>Côté</th>
          <th>Valeur</th>
          <th>Ratio</th>
          <th>Zone</th>
        </tr>
      </thead>
      <tbody>
        ${tests
          .map(
            (t) => `
          <tr data-test-id="${t.id}">
            <td>${t.date}</td>
            <td>${t.type}</td>
            <td>${t.segment}</td>
            <td>${t.cote}</td>
            <td>${t.valeur} ${t.unite}</td>
            <td>${t.ratio}</td>
            <td><span class="${getZoneClass(t.zone)}"></span></td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
  `;

  wrapper.querySelectorAll("tbody tr").forEach((row) => {
    row.addEventListener("click", () => {
      const id = row.getAttribute("data-test-id");
      selectedTestId = id;
      renderTestDetail(joueur, id);
    });
  });

  if (selectedTestId) {
    renderTestDetail(joueur, selectedTestId);
  } else {
    detailWrapper.innerHTML =
      "<div class='section-content' style='font-size:0.8rem;color:#6b7280;'>Clique sur un test pour voir le détail, la comparaison droite/gauche et l'évolution.</div>";
  }
}

function renderTestDetail(joueur, testId) {
  const detailWrapper = document.getElementById("testDetailWrapper");
  if (!detailWrapper) return;

  const test = testsPhysiques.find((t) => t.id === testId);
  if (!test) {
    detailWrapper.innerHTML = "";
    return;
  }

  const sameTypeAll = testsPhysiques
    .filter((t) => t.joueurId === joueur.id && t.type === test.type)
    .sort((a, b) => (a.date > b.date ? 1 : -1));

  // Comparaison D/G sur la date du test
  const sameDate = sameTypeAll.filter((t) => t.date === test.date);
  let droite = null;
  let gauche = null;
  sameDate.forEach((t) => {
    if (t.cote === "Droit") droite = t;
    if (t.cote === "Gauche") gauche = t;
  });

  detailWrapper.innerHTML = `
    <div class="test-detail-header">
      <div>
        <div class="test-detail-title">${test.type} • ${test.segment}</div>
        <div class="test-detail-sub">Date : ${test.date} • Côté : ${test.cote || "-"}</div>
      </div>
      <div class="test-detail-sub">Valeur : ${test.valeur} ${test.unite} • Ratio : ${test.ratio}</div>
    </div>
    <div class="test-detail-grid">
      <div class="info-card">
        <div class="info-label">Valeur actuelle</div>
        <div class="info-value">${test.valeur} ${test.unite}</div>
      </div>
      <div class="info-card">
        <div class="info-label">Référence</div>
        <div class="info-value">${test.ref ?? "-"} ${test.unite}</div>
      </div>
      <div class="info-card">
        <div class="info-label">Zone</div>
        <div class="info-value"><span class="${getZoneClass(test.zone)}"></span> ${test.zone || "-"}</div>
      </div>
    </div>
    <div id="dgCompare"></div>
    <canvas id="testChart" width="420" height="130" style="margin-top:8px;width:100%;"></canvas>
  `;

  const dgContainer = detailWrapper.querySelector("#dgCompare");
  if (droite || gauche) {
    const dVal = droite ? `${droite.valeur} ${droite.unite}` : "-";
    const gVal = gauche ? `${gauche.valeur} ${gauche.unite}` : "-";
    dgContainer.innerHTML = `
      <div class="test-detail-grid" style="margin-top:6px;">
        <div class="info-card">
          <div class="info-label">Droite</div>
          <div class="info-value">${dVal}</div>
        </div>
        <div class="info-card">
          <div class="info-label">Gauche</div>
          <div class="info-value">${gVal}</div>
        </div>
      </div>
    `;
  }

  // Graphique simple d'évolution (ratio)
  const canvas = detailWrapper.querySelector("#testChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (sameTypeAll.length <= 1) {
    ctx.fillStyle = "#6b7280";
    ctx.font = "10px system-ui";
    ctx.fillText("Pas assez de mesures pour une courbe d'évolution.", 10, 20);
    return;
  }

  const values = sameTypeAll.map((t) => t.ratio);
  const dates = sameTypeAll.map((t) => t.date);
  const minV = Math.min(...values);
  const maxV = Math.max(...values);
  const paddingX = 20;
  const paddingY = 10;
  const w = canvas.width - paddingX * 2;
  const h = canvas.height - paddingY * 2;

  ctx.strokeStyle = "#cbd5f5";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(paddingX, paddingY + h);
  ctx.lineTo(paddingX, paddingY);
  ctx.moveTo(paddingX, paddingY + h);
  ctx.lineTo(paddingX + w, paddingY + h);
  ctx.stroke();

  ctx.strokeStyle = "#ff2e9a";
  ctx.lineWidth = 2;
  ctx.beginPath();
  values.forEach((v, idx) => {
    const x = paddingX + (w * idx) / (values.length - 1 || 1);
    const norm = (v - minV) / (maxV - minV || 1);
    const y = paddingY + h - norm * h;
    if (idx === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  ctx.fillStyle = "#ff2e9a";
  values.forEach((v, idx) => {
    const x = paddingX + (w * idx) / (values.length - 1 || 1);
    const norm = (v - minV) / (maxV - minV || 1);
    const y = paddingY + h - norm * h;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = "#6b7280";
  ctx.font = "9px system-ui";
  ctx.fillText(`Évolution ${test.type} (ratio)`, paddingX, paddingY + 10);
}

// --- INIT ---

function init() {
  renderStats();
  renderPlayersList();

  const select = document.getElementById("filterSelect");
  select.addEventListener("change", () => {
    renderPlayersList();
    const detail = document.getElementById("playerDetail");
    if (!currentPlayerId) {
      detail.classList.add("empty-state");
      detail.innerHTML = "<p>Sélectionne un joueur dans la liste pour voir le détail.</p>";
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
