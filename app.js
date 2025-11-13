// --- ÉTAT GLOBAL ---

let currentPlayerId = null;
let selectedSegment = "Global";
let selectedTestId = null;

// --- DONNÉES DEMO avec vrais noms (postes inventés) ---

const joueurs = [
{
id: "J001",
nom: "Braxton",
prenom: "ASI",
poste: "9",
ligne: "Arrière",
statut: "Disponible",
disponibilite: "Disponible",
dernierTest: "2025-11-10",
scoreGlobal: 88,
pointsForts: "CMJ, Sprint 10m",
pointsFaibles: "Isocinétique quadriceps",
antecedents: "Entorse cheville D 2023",
taille: 178,
poids: 82,
masseGrasse: 10,
photoUrl: "https://drive.google.com/uc?export=view&id=1mmyY5GmaF0-URMg01jHfjL4m9JMPlzQ_",
},
{
id: "J002",
nom: "Martin",
prenom: "BLUM",
poste: "11",
ligne: "Arrière",
statut: "Blessé",
disponibilite: "Infirmerie",
dernierTest: "2025-11-05",
scoreGlobal: 76,
pointsForts: "CMJ",
pointsFaibles: "NordBoard, McCall",
antecedents: "Ischio D 2023; Cheville G 2021",
taille: 182,
poids: 88,
masseGrasse: 11,
photoUrl: "https://drive.google.com/uc?export=view&id=1IQkjM0OjulpLug8BHHePtHoLU_nTQqIQ",
},
{
id: "J003",
nom: "Jacques",
prenom: "BOTHA",
poste: "3",
ligne: "Avant",
statut: "Adapté",
disponibilite: "Infirmerie",
dernierTest: "2025-11-08",
scoreGlobal: 72,
pointsForts: "Isocinétique quadriceps, McCall",
pointsFaibles: "Sprint 30m",
antecedents: "Épaule G 2023",
taille: 185,
poids: 122,
masseGrasse: 18,
photoUrl: "https://drive.google.com/uc?export=view&id=1s84nbvpbJ0kdXFCtNCfu1tcCCdzXReVm",
},
{
id: "J004",
nom: "Alvaro",
prenom: "GARCIA ALBO",
poste: "10",
ligne: "Arrière",
statut: "Disponible",
disponibilite: "Disponible",
dernierTest: "2025-11-09",
scoreGlobal: 84,
pointsForts: "Sprint 10m, CMJ",
pointsFaibles: "Ischio",
antecedents: "Aucune",
taille: 180,
poids: 86,
masseGrasse: 9,
photoUrl: "",
},
{
id: "J005",
nom: "Isaac",
prenom: "KOFFI",
poste: "6",
ligne: "Avant",
statut: "Blessé",
disponibilite: "Infirmerie",
dernierTest: "2025-11-06",
scoreGlobal: 79,
pointsForts: "NordBoard, CMJ",
pointsFaibles: "KTW cheville",
antecedents: "Entorse LLA cheville G 2022",
taille: 190,
poids: 104,
masseGrasse: 13,
photoUrl: "https://drive.google.com/uc?export=view&id=1NINCQI45pSAJKZvsjEtCxTS17vELMTCQ",
},
{
id: "J006",
nom: "Noah",
prenom: "NENE",
poste: "13",
ligne: "Arrière",
statut: "Disponible",
disponibilite: "Disponible",
dernierTest: "2025-11-10",
scoreGlobal: 86,
pointsForts: "Sprint 30m, CMJ",
pointsFaibles: "Rachis cervical",
antecedents: "Commotion 2024",
taille: 184,
poids: 92,
masseGrasse: 10,
photoUrl: "https://drive.google.com/uc?export=view&id=1A0T9KmANxdpv0Yc-mkcNZmJv86czaGKs",
},
{
id: "J007",
nom: "Luka",
prenom: "RUSSEL",
poste: "15",
ligne: "Arrière",
statut: "Adapté",
disponibilite: "Infirmerie",
dernierTest: "2025-11-09",
scoreGlobal: 81,
pointsForts: "HSR GPS, Sprint 30m",
pointsFaibles: "Ischio G",
antecedents: "Ischio G 2022",
taille: 186,
poids: 90,
masseGrasse: 9,
photoUrl: "",
},
{
id: "J008",
nom: "Mosese",
prenom: "TABUAKOTO",
poste: "8",
ligne: "Avant",
statut: "Disponible",
disponibilite: "Disponible",
dernierTest: "2025-11-07",
scoreGlobal: 90,
pointsForts: "Isocinétique quadriceps, CMJ",
pointsFaibles: "KTW cheville D",
antecedents: "Lombalgies récidivantes",
taille: 192,
poids: 112,
masseGrasse: 14,
photoUrl: "https://drive.google.com/uc?export=view&id=1xL1BosO3Likv1MhdXxnEXs8_4q5hPvpK",
},
{
id: "J009",
nom: "IBO",
prenom: "Mathis",
poste: "14",
ligne: "Arrière",
statut: "Disponible",
disponibilite: "Disponible",
dernierTest: "2025-11-09",
scoreGlobal: 83,
pointsForts: "Sprint 30m, HSR",
pointsFaibles: "Ischio G",
antecedents: "Ischio G 2023",
taille: 183,
poids: 89,
masseGrasse: 11,
photoUrl: "https://drive.google.com/uc?export=view&id=1APSTNdxO2U9TGQCBM0ecAZEwexiw3iCF",
},
{
id: "J010",
nom: "Yanis",
prenom: "LUX",
poste: "12",
ligne: "Arrière",
statut: "Disponible",
disponibilite: "Disponible",
dernierTest: "2025-11-09",
scoreGlobal: 82,
pointsForts: "CMJ, Sprint 10m",
pointsFaibles: "KTW cheville",
antecedents: "Entorse cheville D 2022",
taille: 181,
poids: 87,
masseGrasse: 11,
photoUrl: "https://drive.google.com/uc?export=view&id=1_u4v8n9GjK5auRV7mZGrTVe4YcDAN9dK",
},
{
id: "J011",
nom: "Yannick",
prenom: "LODJRO",
poste: "7",
ligne: "Avant",
statut: "Disponible",
disponibilite: "Disponible",
dernierTest: "2025-11-08",
scoreGlobal: 80,
pointsForts: "NordBoard, HSR",
pointsFaibles: "Isocinétique genou",
antecedents: "Ischio D 2021",
taille: 188,
poids: 102,
masseGrasse: 12,
photoUrl: "https://drive.google.com/uc?export=view&id=1mKdWwKpsuRGjuwPkjmvlZI2I951OwgY2",
},
{
id: "J012",
nom: "Ollie",
prenom: "McCREA",
poste: "4",
ligne: "Avant",
statut: "Disponible",
disponibilite: "Disponible",
dernierTest: "2025-11-08",
scoreGlobal: 83,
pointsForts: "Isocinétique, CMJ",
pointsFaibles: "Sprint 30m",
antecedents: "Aucune",
taille: 195,
poids: 110,
masseGrasse: 13,
photoUrl: "https://drive.google.com/uc?export=view&id=1-v0iKke3PVxFcXUmmz7MmsNQQPV5Pr7H",
},
{
id: "J013",
nom: "Thibault",
prenom: "MOTASSI",
poste: "5",
ligne: "Avant",
statut: "Disponible",
disponibilite: "Disponible",
dernierTest: "2025-11-07",
scoreGlobal: 81,
pointsForts: "Lombaire iso, NordBoard",
pointsFaibles: "Sprint 10m",
antecedents: "Lombalgies 2023",
taille: 193,
poids: 108,
masseGrasse: 14,
photoUrl: "https://drive.google.com/uc?export=view&id=1VGCEP8INhO-8VETqUjSS5iyPUG71Ptkj",
},
{
id: "J014",
nom: "Seta",
prenom: "TURAGACOKE",
poste: "14",
ligne: "Arrière",
statut: "Disponible",
disponibilite: "Disponible",
dernierTest: "2025-11-07",
scoreGlobal: 85,
pointsForts: "Sprint 30m, HSR",
pointsFaibles: "Ischio",
antecedents: "Ischio D 2022",
taille: 183,
poids: 90,
masseGrasse: 10,
photoUrl: "https://drive.google.com/uc?export=view&id=1xL1BosO3Likv1MhdXxnEXs8_4q5hPvpK",
},
{
id: "J015",
nom: "Ethan",
prenom: "TIA",
poste: "10",
ligne: "Arrière",
statut: "Disponible",
disponibilite: "Disponible",
dernierTest: "2025-11-09",
scoreGlobal: 84,
pointsForts: "Sprint 10m, CMJ",
pointsFaibles: "Isocinétique genou",
antecedents: "Entorse genou G 2023",
taille: 182,
poids: 88,
masseGrasse: 10,
photoUrl: "https://drive.google.com/uc?export=view&id=1LbDhmowDjbDF7ZTymXSvEoTYtAYI2Jkf",
},
];

// Tests physiques (CMJ, sprint, McCall, KTW, isocinétique…)
const testsPhysiques = [
// ASI Braxton (J001)
{ id: "T001", joueurId: "J001", date: "2025-11-10", type: "CMJ", segment: "Hanche", cote: "-", valeur: 42, unite: "cm", ref: 40, ratio: 1.05, zone: "Vert" },
{ id: "T002", joueurId: "J001", date: "2025-11-09", type: "CMJ", segment: "Hanche", cote: "-", valeur: 40, unite: "cm", ref: 40, ratio: 1.0, zone: "Vert" },
{ id: "T003", joueurId: "J001", date: "2025-11-10", type: "Sprint 10m", segment: "Course", cote: "-", valeur: 1.62, unite: "s", ref: 1.70, ratio: 1.05, zone: "Vert" },
{ id: "T004", joueurId: "J001", date: "2025-11-08", type: "Sprint 10m", segment: "Course", cote: "-", valeur: 1.67, unite: "s", ref: 1.70, ratio: 1.02, zone: "Vert" },
{ id: "T005", joueurId: "J001", date: "2025-11-09", type: "Isocinétique quadriceps", segment: "Genou", cote: "Droit", valeur: 185, unite: "%BW", ref: 180, ratio: 1.03, zone: "Vert" },
{ id: "T006", joueurId: "J001", date: "2025-11-09", type: "Isocinétique quadriceps", segment: "Genou", cote: "Gauche", valeur: 176, unite: "%BW", ref: 180, ratio: 0.98, zone: "Orange" },
{ id: "T007", joueurId: "J001", date: "2025-11-07", type: "Cognition réaction", segment: "Tête", cote: "-", valeur: 280, unite: "ms", ref: 300, ratio: 1.07, zone: "Vert" },
{ id: "T008", joueurId: "J001", date: "2025-11-07", type: "Isométrie rachis cervical", segment: "Rachis cervical", cote: "-", valeur: 260, unite: "N", ref: 250, ratio: 1.04, zone: "Vert" },

// BLUM Martin (J002) blessé ischio
{ id: "T101", joueurId: "J002", date: "2025-11-05", type: "CMJ", segment: "Hanche", cote: "-", valeur: 31, unite: "cm", ref: 40, ratio: 0.78, zone: "Rouge" },
{ id: "T102", joueurId: "J002", date: "2025-11-05", type: "NordBoard", segment: "Ischio", cote: "Droit", valeur: 245, unite: "N", ref: 320, ratio: 0.77, zone: "Rouge" },
{ id: "T103", joueurId: "J002", date: "2025-11-05", type: "NordBoard", segment: "Ischio", cote: "Gauche", valeur: 305, unite: "N", ref: 320, ratio: 0.95, zone: "Vert" },
{ id: "T104", joueurId: "J002", date: "2025-11-04", type: "McCall", segment: "Ischio", cote: "Droit", valeur: 2, unite: "/5", ref: 5, ratio: 0.4, zone: "Rouge" },
{ id: "T105", joueurId: "J002", date: "2025-11-03", type: "KTW", segment: "Cheville", cote: "Gauche", valeur: 11, unite: "cm", ref: 10, ratio: 1.1, zone: "Vert" },

// BOTHA Jacques (J003) genou / épaule
{ id: "T201", joueurId: "J003", date: "2025-11-08", type: "CMJ", segment: "Hanche", cote: "-", valeur: 29, unite: "cm", ref: 32, ratio: 0.9, zone: "Orange" },
{ id: "T202", joueurId: "J003", date: "2025-11-08", type: "Isocinétique quadriceps", segment: "Genou", cote: "Droit", valeur: 165, unite: "%BW", ref: 180, ratio: 0.92, zone: "Orange" },
{ id: "T203", joueurId: "J003", date: "2025-11-08", type: "Isocinétique quadriceps", segment: "Genou", cote: "Gauche", valeur: 150, unite: "%BW", ref: 180, ratio: 0.83, zone: "Rouge" },
{ id: "T204", joueurId: "J003", date: "2025-11-07", type: "McCall", segment: "Ischio", cote: "Gauche", valeur: 3, unite: "/5", ref: 5, ratio: 0.6, zone: "Rouge" },
{ id: "T205", joueurId: "J003", date: "2025-11-07", type: "ASH test", segment: "Épaule", cote: "-", valeur: 38, unite: "N/kg", ref: 40, ratio: 0.95, zone: "Vert" },

// GARCIA Alvaro (J004)
{ id: "T301", joueurId: "J004", date: "2025-11-09", type: "CMJ", segment: "Hanche", cote: "-", valeur: 40, unite: "cm", ref: 40, ratio: 1.0, zone: "Vert" },
{ id: "T302", joueurId: "J004", date: "2025-11-09", type: "Sprint 30m", segment: "Course", cote: "-", valeur: 4.15, unite: "s", ref: 4.2, ratio: 1.01, zone: "Vert" },
{ id: "T303", joueurId: "J004", date: "2025-11-08", type: "KTW", segment: "Cheville", cote: "Droit", valeur: 9, unite: "cm", ref: 10, ratio: 0.9, zone: "Orange" },
{ id: "T304", joueurId: "J004", date: "2025-11-08", type: "KTW", segment: "Cheville", cote: "Gauche", valeur: 10, unite: "cm", ref: 10, ratio: 1.0, zone: "Vert" },

// KOFFI Isaac (J005) cheville
{ id: "T401", joueurId: "J005", date: "2025-11-06", type: "KTW", segment: "Cheville", cote: "Gauche", valeur: 8, unite: "cm", ref: 10, ratio: 0.8, zone: "Rouge" },
{ id: "T402", joueurId: "J005", date: "2025-11-06", type: "KTW", segment: "Cheville", cote: "Droit", valeur: 10, unite: "cm", ref: 10, ratio: 1.0, zone: "Vert" },
{ id: "T403", joueurId: "J005", date: "2025-11-06", type: "Sprint 30m", segment: "Course", cote: "-", valeur: 4.4, unite: "s", ref: 4.3, ratio: 0.98, zone: "Orange" },

// NENE Noah (J006) tête / cervical
{ id: "T501", joueurId: "J006", date: "2025-11-10", type: "Cognition réaction", segment: "Tête", cote: "-", valeur: 310, unite: "ms", ref: 300, ratio: 0.97, zone: "Orange" },
{ id: "T502", joueurId: "J006", date: "2025-11-07", type: "Cognition réaction", segment: "Tête", cote: "-", valeur: 340, unite: "ms", ref: 300, ratio: 0.88, zone: "Rouge" },
{ id: "T503", joueurId: "J006", date: "2025-11-09", type: "Isométrie rachis cervical", segment: "Rachis cervical", cote: "-", valeur: 235, unite: "N", ref: 250, ratio: 0.94, zone: "Orange" },

// RUSSEL Luka (J007) ischio
{ id: "T601", joueurId: "J007", date: "2025-11-09", type: "NordBoard", segment: "Ischio", cote: "Droit", valeur: 310, unite: "N", ref: 320, ratio: 0.97, zone: "Vert" },
{ id: "T602", joueurId: "J007", date: "2025-11-09", type: "NordBoard", segment: "Ischio", cote: "Gauche", valeur: 275, unite: "N", ref: 320, ratio: 0.86, zone: "Orange" },
{ id: "T603", joueurId: "J007", date: "2025-11-08", type: "Sprint 30m", segment: "Course", cote: "-", valeur: 4.28, unite: "s", ref: 4.2, ratio: 0.98, zone: "Orange" },

// TABUAKOTO Mosese (J008) lombaire / genou
{ id: "T701", joueurId: "J008", date: "2025-11-07", type: "Extension lombaire iso", segment: "Lombaire", cote: "-", valeur: 430, unite: "N", ref: 400, ratio: 1.08, zone: "Vert" },
{ id: "T702", joueurId: "J008", date: "2025-11-07", type: "Isocinétique quadriceps", segment: "Genou", cote: "Droit", valeur: 190, unite: "%BW", ref: 180, ratio: 1.06, zone: "Vert" },
{ id: "T703", joueurId: "J008", date: "2025-11-07", type: "Isocinétique quadriceps", segment: "Genou", cote: "Gauche", valeur: 182, unite: "%BW", ref: 180, ratio: 1.01, zone: "Vert" },
];

// Tests fonctionnels globaux : DC, tractions, IMTP, 1080, Vitesse max etc.
const testsFonctionnels = [
{ joueurId: "J001", dc1rm: 110, tractions: 10, imtp: 2800, f1080: 8.5, vmax: 9.1 },
{ joueurId: "J002", dc1rm: 95, tractions: 8, imtp: 2600, f1080: 8.0, vmax: 9.0 },
{ joueurId: "J003", dc1rm: 140, tractions: 6, imtp: 3200, f1080: 7.8, vmax: 8.2 },
{ joueurId: "J004", dc1rm: 105, tractions: 11, imtp: 2750, f1080: 8.6, vmax: 9.3 },
{ joueurId: "J005", dc1rm: 120, tractions: 8, imtp: 2900, f1080: 8.0, vmax: 8.8 },
{ joueurId: "J006", dc1rm: 110, tractions: 10, imtp: 2700, f1080: 8.7, vmax: 9.4 },
{ joueurId: "J007", dc1rm: 100, tractions: 9, imtp: 2650, f1080: 8.3, vmax: 9.0 },
{ joueurId: "J008", dc1rm: 135, tractions: 7, imtp: 3100, f1080: 8.1, vmax: 8.5 },
{ joueurId: "J009", dc1rm: 105, tractions: 10, imtp: 2720, f1080: 8.5, vmax: 9.2 },
{ joueurId: "J010", dc1rm: 100, tractions: 9, imtp: 2680, f1080: 8.4, vmax: 9.0 },
{ joueurId: "J011", dc1rm: 125, tractions: 8, imtp: 2950, f1080: 8.1, vmax: 8.6 },
{ joueurId: "J012", dc1rm: 130, tractions: 7, imtp: 3050, f1080: 7.9, vmax: 8.4 },
{ joueurId: "J013", dc1rm: 120, tractions: 7, imtp: 2980, f1080: 8.0, vmax: 8.5 },
{ joueurId: "J014", dc1rm: 110, tractions: 11, imtp: 2750, f1080: 8.8, vmax: 9.4 },
{ joueurId: "J015", dc1rm: 108, tractions: 10, imtp: 2730, f1080: 8.6, vmax: 9.3 },
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
rttEstimee: "2025-11-18",
rttEffective: "",
rtpEstimee: "2025-11-25",
rtpEffective: "",
prochainesVisites: "IRM 12/11; Chir 18/11",
prochainsTests: "NordBoard; CMJ; McCall; Sprint 30m",
protocole: {
semaine1: "Contrôle douleur, isométriques légers, mobilité douce",
semaine2: "Augmentation charge isométrique, début excentrique léger",
semaine3: "Excentrique ciblé, course en ligne droite jusqu'à 60%",
semaine4: "Sprints 70–80%, changements de direction contrôlés",
semaine5: "Sprints 90%, drills poste, intégration partielle",
semaine6: "Validation : tests iso genou + NordBoard + CMJ + Sprint",
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
rttEstimee: "2025-11-15",
rttEffective: "",
rtpEstimee: "2025-11-22",
rtpEffective: "",
prochainesVisites: "Chir 14/11",
prochainsTests: "Isométrie épaule; tests de contact progressifs",
protocole: {
semaine1: "Gestion douleur, travail passif/actif assisté",
semaine2: "Renfo scapulaire, isométrie épaule",
semaine3: "Renfo dynamique, proprioception, chaîne cinétique",
semaine4: "Exercices fonctionnels, poussées, passes et plaquages contrôlés",
semaine5: "Contacts progressifs + validation tests iso épaule",
},
etapesCles: "Imagerie initiale, avis chir, validation force, test plaquage progressif",
},
{
id: "B003",
joueurId: "J005",
dateBlessure: "2025-11-01",
diagnostic: "Entorse LLA cheville G",
localisation: "Cheville G",
segment: "Cheville",
phase: "Rééducation",
rttEstimee: "2025-11-20",
rttEffective: "",
rtpEstimee: "2025-11-27",
rtpEffective: "",
prochainesVisites: "Contrôle médecin 18/11",
prochainsTests: "KTW; test appui unipodal; tests terrain",
protocole: {
semaine1: "Décharge relative, contrôle œdème, mobilité douce",
semaine2: "Renfo proprioception, KTW progressif",
semaine3: "Course en ligne droite, changements appuis légers",
semaine4: "Drills spécifiques, appuis multidirectionnels",
},
etapesCles: "KTW symétrique, test appui unipodal, test terrain 100%",
},
{
id: "B004",
joueurId: "J007",
dateBlessure: "2025-10-30",
diagnostic: "Lésion ischio semi-tendineux G grade 1",
localisation: "Ischio G",
segment: "Ischio",
phase: "Adapté / Reprise",
rttEstimee: "2025-11-12",
rttEffective: "",
rtpEstimee: "2025-11-19",
rtpEffective: "",
prochainesVisites: "PP + staff 15/11",
prochainsTests: "NordBoard; Sprint 30m; CMJ",
protocole: {
semaine1: "Isométriques, travail chaine postérieure léger",
semaine2: "Excentrique nordic, course 60%",
semaine3: "Sprints 80%, changements de direction, drills poste",
semaine4: "Sprints 90–95%, matchs d'entraînement",
},
etapesCles: "NordBoard >90% ref, sprint 90%, match amical",
},
];

const seances = [
{ id: "S001", blessureId: "B001", joueurId: "J002", date: "2025-11-01", type: "Physio", resume: "Renfo ischio excentrique", rpe: 5, tolerance: "OK", commentaire: "Bonne séance" },
{ id: "S002", blessureId: "B001", joueurId: "J002", date: "2025-11-04", type: "PPG / Prépa", resume: "CMJ + accélérations 60%", rpe: 6, tolerance: "Légère gêne", commentaire: "" },
{ id: "S003", blessureId: "B002", joueurId: "J003", date: "2025-11-03", type: "Physio", resume: "Stabilité scapulaire + isométrie", rpe: 4, tolerance: "OK", commentaire: "" },
{ id: "S004", blessureId: "B002", joueurId: "J003", date: "2025-11-07", type: "Reconditionnement", resume: "Travail contact léger", rpe: 5, tolerance: "OK", commentaire: "" },
{ id: "S005", blessureId: "B003", joueurId: "J005", date: "2025-11-05", type: "Physio", resume: "Proprioception cheville + KTW", rpe: 4, tolerance: "OK", commentaire: "" },
{ id: "S006", blessureId: "B004", joueurId: "J007", date: "2025-11-06", type: "PPG / Prépa", resume: "Sprint 70% + nordic léger", rpe: 6, tolerance: "OK", commentaire: "" },
];

// GPS simplifié
const gpsData = [
{ id: "G001", joueurId: "J001", semaine: "2025-W44", mois: "2025-11", match: true, date: "2025-11-02", totalDistance: 6500, hsr: 600, sprint: 90 },
{ id: "G002", joueurId: "J001", semaine: "2025-W45", mois: "2025-11", match: false, date: "2025-11-06", totalDistance: 7200, hsr: 800, sprint: 120 },
{ id: "G003", joueurId: "J002", semaine: "2025-W44", mois: "2025-11", match: true, date: "2025-10-28", totalDistance: 5800, hsr: 550, sprint: 80 },
{ id: "G004", joueurId: "J003", semaine: "2025-W45", mois: "2025-11", match: false, date: "2025-11-05", totalDistance: 4000, hsr: 200, sprint: 30 },
{ id: "G005", joueurId: "J007", semaine: "2025-W45", mois: "2025-11", match: true, date: "2025-11-08", totalDistance: 6900, hsr: 780, sprint: 105 },
{ id: "G006", joueurId: "J008", semaine: "2025-W44", mois: "2025-11", match: true, date: "2025-11-02", totalDistance: 7200, hsr: 820, sprint: 110 },
];

// --- UTILITAIRES ---

function getInitials(joueur) {
return `${(joueur.prenom[0] ?? "").toUpperCase()}${(joueur.nom[0] ?? "").toUpperCase()}`;
}

function getStatusBadgeClass(statut) {
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
if (p.includes("reprise") || p.includes("adapté")) return "phase-pill phase-reprise";
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

// tests où une valeur plus faible est meilleure (temps de sprint)
function isLowerBetter(type) {
const t = type.toLowerCase();
return t.includes("sprint") || t.includes("10m") || t.includes("30m");
}

// --- STATS ---

function renderStats() {
const dispoCount = joueurs.filter((j) => j.disponibilite === "Disponible").length;
const injuryCount = joueurs.filter((j) => j.disponibilite === "Infirmerie").length;
document.getElementById("stat-disponibles").textContent = dispoCount;
document.getElementById("stat-infirmerie").textContent = injuryCount;
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

const avatar = createAvatar(j, "player-avatar");

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
badge.className = getStatusBadgeClass(j.statut);
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

function createAvatar(joueur, baseClass) {
const avatar = document.createElement("div");
avatar.className = baseClass;
if (joueur.photoUrl) {
const img = document.createElement("img");
img.src = joueur.photoUrl;
img.alt = `${joueur.prenom} ${joueur.nom}`;
avatar.appendChild(img);
} else {
avatar.textContent = getInitials(joueur);
}
return avatar;
}

// --- FICHE JOUEUR ---

function renderPlayerDetail(id) {
const joueur = joueurs.find((j) => j.id === id);
if (!joueur) return;

const detail = document.getElementById("playerDetail");
detail.classList.remove("empty-state");
detail.innerHTML = "";

// HEADER style FIFA
const headerCard = document.createElement("div");
headerCard.className = "player-header-card";

const avatar = createAvatar(joueur, "ph-avatar");

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

// SECTION PROFIL PHYSIQUE
const physSection = document.createElement("div");
physSection.className = "section";
physSection.innerHTML = `
<h3 class="section-title"><span class="icon">📏</span> Profil physique</h3>
<div class="two-columns">
<div class="info-card">
<div class="info-label">Taille</div>
<div class="info-value">${joueur.taille ?? "-"} cm</div>
</div>
<div class="info-card">
<div class="info-label">Poids</div>
<div class="info-value">${joueur.poids ?? "-"} kg</div>
</div>
<div class="info-card">
<div class="info-label">% masse grasse (est.)</div>
<div class="info-value">${joueur.masseGrasse ?? "-"} %</div>
</div>
</div>
`;
detail.appendChild(physSection);

// SECTION PROFIL PERFORMANCE
const profilSection = document.createElement("div");
profilSection.className = "section";
profilSection.innerHTML = `
<h3 class="section-title"><span class="icon">👤</span> Profil performance & antécédents</h3>
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

// SECTION TESTS FONCTIONNELS GLOBAUX
renderFunctionalSection(detail, joueur);

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

// --- TESTS FONCTIONNELS & PROFIL F-V ---

function renderFunctionalSection(detail, joueur) {
const data = testsFonctionnels.find((t) => t.joueurId === joueur.id);
const section = document.createElement("div");
section.className = "section";

section.innerHTML = `
<h3 class="section-title"><span class="icon">🏋️‍♂️</span> Tests fonctionnels globaux</h3>
`;

if (!data) {
section.innerHTML += `<div class="section-content">Tests fonctionnels à compléter.</div>`;
detail.appendChild(section);
return;
}

const grid = document.createElement("div");
grid.className = "functional-grid";
grid.innerHTML = `
<div class="info-card">
<div class="info-label">Développé couché 1RM</div>
<div class="info-value">${data.dc1rm} kg</div>
</div>
<div class="info-card">
<div class="info-label">Tractions complètes</div>
<div class="info-value">${data.tractions} reps</div>
</div>
<div class="info-card">
<div class="info-label">IMTP</div>
<div class="info-value">${data.imtp} N</div>
</div>
<div class="info-card">
<div class="info-label">Puissance 1080 Sprint</div>
<div class="info-value">${data.f1080} W/kg</div>
</div>
<div class="info-card">
<div class="info-label">Vitesse max estimée</div>
<div class="info-value">${data.vmax} m/s</div>
</div>
`;
section.appendChild(grid);

const canvasWrapper = document.createElement("div");
canvasWrapper.className = "functional-canvas-wrapper";
canvasWrapper.innerHTML = `
<div class="info-label">Profil force–vitesse (schéma simplifié)</div>
<canvas id="fvCanvas-${joueur.id}" width="420" height="140"></canvas>
`;
section.appendChild(canvasWrapper);

detail.appendChild(section);

const canvas = document.getElementById(`fvCanvas-${joueur.id}`);
if (canvas) {
drawFVProfile(canvas, data);
}
}

function drawFVProfile(canvas, data) {
const ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);

const padding = 24;
const w = canvas.width - padding * 2;
const h = canvas.height - padding * 2;

// Force max & vitesse max normalisées
const fMax = data.imtp || 2500;
const vMax = data.vmax || 9;
const fRef = 3500;
const vRef = 10;

const fNorm = Math.min(fMax / fRef, 1.2);
const vNorm = Math.min(vMax / vRef, 1.2);

// Axes
ctx.strokeStyle = "#cbd5f5";
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(padding, padding + h);
ctx.lineTo(padding, padding);
ctx.moveTo(padding, padding + h);
ctx.lineTo(padding + w, padding + h);
ctx.stroke();

ctx.fillStyle = "#6b7280";
ctx.font = "10px system-ui";
ctx.fillText("Force", padding - 5, padding - 8);
ctx.fillText("Vitesse", padding + w - 30, padding + h + 14);

// Ligne F-V théorique
ctx.strokeStyle = "#e5e7eb";
ctx.beginPath();
ctx.moveTo(padding + w * 0.05, padding + h * 0.1);
ctx.lineTo(padding + w * 0.95, padding + h * 0.9);
ctx.stroke();

// Point profil réel
const x = padding + w * Math.min(vNorm, 1);
const y = padding + h * (1 - Math.min(fNorm, 1));

ctx.fillStyle = "#ff2e9a";
ctx.beginPath();
ctx.arc(x, y, 5, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = "#6b7280";
ctx.fillText("Profil actuel", x + 6, y - 6);
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

// --- BLESSURES / RÉÉDUC + PROGRESSION & PLANNIF INTELLIGENTE ---

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

const today = new Date();
const d0 = new Date(blessure.dateBlessure);
const dRtt = blessure.rttEstimee ? new Date(blessure.rttEstimee) : null;
let progress = 0;
if (dRtt && dRtt > d0) {
const total = dRtt - d0;
const done = Math.min(Math.max(today - d0, 0), total);
progress = Math.round((done / total) * 100);
}

// Référence GPS avant blessure
const gpsBefore = gpsData.filter(
(g) => g.joueurId === joueur.id && new Date(g.date) < d0
);
let refDistance = 6500;
let refHSR = 600;
if (gpsBefore.length > 0) {
const sumD = gpsBefore.reduce((acc, g) => acc + g.totalDistance, 0);
const sumH = gpsBefore.reduce((acc, g) => acc + g.hsr, 0);
refDistance = Math.round(sumD / gpsBefore.length);
refHSR = Math.round(sumH / gpsBefore.length);
}

const blessureId = blessure.id;

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

<div class="progress-container">
<div class="info-label">Progression vers RTT</div>
<div class="progress-bar">
<div class="progress-fill" style="width:${progress}%;"></div>
<div class="progress-marks">
<span class="progress-mark"></span>
<span class="progress-mark"></span>
<span class="progress-mark"></span>
<span class="progress-mark"></span>
</div>
</div>
<div class="progress-text">${progress}% du protocole réalisé (objectif RTT = 100%)</div>
</div>

<div class="rehab-tabs">
<button type="button" class="rehab-tab active" data-tab="synthese-${blessureId}">Synthèse</button>
<button type="button" class="rehab-tab" data-tab="planif-${blessureId}">Rééducation (planif intelligente)</button>
</div>

<div id="synthese-${blessureId}" class="rehab-panel active">
<div class="section-content" style="margin-top:8px;">
<div class="info-card">
<div class="info-label">Étapes clés & checks</div>
<div class="info-value">${blessure.etapesCles || "-"}</div>
</div>
</div>
<h4 style="margin-top:10px;font-size:0.85rem;">Protocole semaine par semaine</h4>
<div id="protocole-${blessureId}"></div>
<h4 style="margin-top:10px;font-size:0.85rem;">Séances de rééducation</h4>
<div id="seances-${blessureId}"></div>
</div>

<div id="planif-${blessureId}" class="rehab-panel">
<div class="rehab-planner">
<div class="info-card">
<div class="info-label">Référence volume hebdo (AVANT blessure)</div>
<div class="info-value">${refDistance} m • HSR ${refHSR} m</div>
</div>
<div class="rehab-grid" style="margin-top:6px;">
<div class="info-card">
<div class="info-label">Séance actuelle (objectif % de la ref.)</div>
<div class="rehab-input-row">
<span>Volume (%)</span>
<input type="number" min="0" max="150" value="70" id="rehab-vol-${blessureId}" />
<span>HSR (%)</span>
<input type="number" min="0" max="150" value="50" id="rehab-hsr-${blessureId}" />
</div>
<div class="rehab-result" id="rehab-current-${blessureId}"></div>
</div>
<div class="info-card">
<div class="info-label">Prochaine séance (augmentation)</div>
<div class="rehab-buttons">
<button type="button" class="rehab-btn" data-inc="10" data-id="${blessureId}">+10%</button>
<button type="button" class="rehab-btn" data-inc="15" data-id="${blessureId}">+15%</button>
<button type="button" class="rehab-btn" data-inc="20" data-id="${blessureId}">+20%</button>
</div>
<div class="rehab-result" id="rehab-next-${blessureId}"></div>
</div>
</div>
</div>
</div>
`;

// Protocole HTML
const protocoleContainer = blessureSection.querySelector(`#protocole-${blessureId}`);
if (blessure.protocole && protocoleContainer) {
let protocoleHtml = "";
Object.entries(blessure.protocole).forEach(([k, v]) => {
protocoleHtml += `
<div class="protocole-week">
<div class="protocole-week-title">${k.toUpperCase().replace("SEMAINE", "Semaine ")}</div>
<div class="protocole-week-content">${v}</div>
</div>
`;
});
protocoleContainer.innerHTML = protocoleHtml;
}

// Séances
const seancesBlessure = seances.filter((s) => s.blessureId === blessure.id);
const seancesContainer = blessureSection.querySelector(`#seances-${blessureId}`);
if (seancesContainer) {
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
seancesContainer.appendChild(table);
}

detail.appendChild(blessureSection);

initRehabTabs(blessureId);
initRehabPlanner(blessureId, refDistance, refHSR);
}

function initRehabTabs(blessureId) {
const tabs = document.querySelectorAll(`.rehab-tab[data-tab$="-${blessureId}"]`);
tabs.forEach((tab) => {
tab.addEventListener("click", () => {
tabs.forEach((t) => t.classList.remove("active"));
tab.classList.add("active");
const targetId = tab.getAttribute("data-tab");
const panels = document.querySelectorAll(`#synthese-${blessureId}, #planif-${blessureId}`);
panels.forEach((p) => p.classList.remove("active"));
const target = document.getElementById(targetId);
if (target) target.classList.add("active");
});
});
}

function initRehabPlanner(blessureId, refDistance, refHSR) {
const volInput = document.getElementById(`rehab-vol-${blessureId}`);
const hsrInput = document.getElementById(`rehab-hsr-${blessureId}`);
const currentDiv = document.getElementById(`rehab-current-${blessureId}`);
const nextDiv = document.getElementById(`rehab-next-${blessureId}`);
const buttons = document.querySelectorAll(`.rehab-btn[data-id="${blessureId}"]`);

if (!volInput || !hsrInput || !currentDiv || !nextDiv) return;

function updateCurrent() {
const v = parseFloat(volInput.value) || 0;
const h = parseFloat(hsrInput.value) || 0;
const dist = Math.round((v / 100) * refDistance);
const hsr = Math.round((h / 100) * refHSR);
currentDiv.textContent = `Séance actuelle : ${dist} m de course • ${hsr} m de HSR (${v}% / ${h}%)`;
}

function updateNext(increment) {
const v = (parseFloat(volInput.value) || 0) + increment;
const h = (parseFloat(hsrInput.value) || 0) + increment;
const dist = Math.round((v / 100) * refDistance);
const hsr = Math.round((h / 100) * refHSR);
nextDiv.textContent = `Prochaine séance cible : ${dist} m de course • ${hsr} m de HSR (${v}% / ${h}%)`;
}

volInput.addEventListener("input", updateCurrent);
hsrInput.addEventListener("input", updateCurrent);
buttons.forEach((btn) => {
btn.addEventListener("click", () => {
const inc = parseFloat(btn.getAttribute("data-inc")) || 10;
updateNext(inc);
});
});

updateCurrent();
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
"<div class='section-content' style='font-size:0.8rem;color:#6b7280;'>Clique sur un test pour voir le détail, la comparaison droite/gauche, la différence en %, et l'évolution.</div>";
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

const sameDate = sameTypeAll.filter((t) => t.date === test.date);
let droite = null;
let gauche = null;
sameDate.forEach((t) => {
if (t.cote === "Droit") droite = t;
if (t.cote === "Gauche") gauche = t;
});

// Tendance
let trendHtml = "";
const sameSide = sameTypeAll.filter((t) => t.cote === test.cote || test.cote === "-");
if (sameSide.length > 1) {
const idx = sameSide.findIndex((t) => t.id === test.id);
if (idx > 0) {
const prev = sameSide[idx - 1];
const current = test.ratio;
const previous = prev.ratio;
const lowerBetter = isLowerBetter(test.type);
let trendClass = "trend-neutral";
let trendIcon = "→";
let text = "Stable";

if (!lowerBetter) {
if (current > previous) {
trendClass = "trend-up";
trendIcon = "↑";
text = "En amélioration";
} else if (current < previous) {
trendClass = "trend-down";
trendIcon = "↓";
text = "En baisse";
}
} else {
if (current < previous) {
trendClass = "trend-up";
trendIcon = "↑";
text = "En amélioration";
} else if (current > previous) {
trendClass = "trend-down";
trendIcon = "↓";
text = "En baisse";
}
}

trendHtml = `<span class="${trendClass}">${trendIcon} ${text}</span>`;
}
}

detailWrapper.innerHTML = `
<div class="test-detail-header">
<div>
<div class="test-detail-title">${test.type} • ${test.segment}</div>
<div class="test-detail-sub">Date : ${test.date} • Côté : ${test.cote || "-"}</div>
</div>
<div class="test-detail-sub">Ratio : ${test.ratio} ${trendHtml}</div>
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

let diffHtml = "";
if (droite && gauche) {
const diff = Math.abs(droite.valeur - gauche.valeur) / Math.max(droite.valeur, gauche.valeur) * 100;
const diffClass = diff > 10 ? "diff-bad" : "diff-ok";
diffHtml = `<div class="${diffClass}">Différence D/G : ${diff.toFixed(1)}% ${diff > 10 ? "⚠️" : ""}</div>`;
}

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
${diffHtml ? `<div class="info-card">${diffHtml}</div>` : ""}
</div>
`;
}

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
