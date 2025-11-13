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
    card.className
