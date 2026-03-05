import { useState, useEffect, useRef } from "react";

// ─── LANGUAGE DATA ───
const TEXT = {
  en: {
    title: "Game-Based Learning",
    subtitle: "& Assessment Template",
    tagline: "Design meaningful game experiences aligned with Colombian standards",
    langToggle: "Español",
    start: "Start Building",
    next: "Continue",
    back: "Back",
    finish: "Review & Export",
    stepLabels: ["Basics", "Subject", "CEFR", "Standards", "Competencies", "Game Design", "Assessment", "Implementation", "Export"],
    // Step 1
    s1Title: "General Information",
    s1Desc: "Let's start with the basics about you and your class.",
    school: "School / Institution",
    teacher: "Teacher Name",
    grade: "Grade Level",
    period: "Academic Period",
    date: "Date",
    year: "Year",
    grades: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "Adult Education"],
    periods: ["Period 1", "Period 2", "Period 3", "Period 4"],
    // Step 2
    s2Title: "Choose Your Subject",
    s2Desc: "Select the subject area for this game-based activity.",
    subjects: ["English", "Mathematics", "Language Arts", "Natural Sciences", "Social Sciences", "Other"],
    subjectIcons: ["🌎", "📐", "📖", "🔬", "🏛️", "✨"],
    otherSubject: "Specify subject",
    // Step 3 CEFR
    s3Title: "CEFR Level",
    s3Desc: "Select the target CEFR level for your English class.",
    cefrLevels: [
      { level: "Pre-A1", desc: "Absolute beginner. Recognizes isolated words and basic expressions.", grades: "Grades 1-3" },
      { level: "A1", desc: "Understands and uses everyday expressions and simple phrases.", grades: "Grades 4-5" },
      { level: "A2", desc: "Understands frequently used sentences. Communicates in simple tasks.", grades: "Grades 6-7" },
      { level: "B1", desc: "Understands clear texts on familiar topics. Produces simple coherent texts.", grades: "Grades 8-9" },
      { level: "B2", desc: "Understands complex texts. Interacts with fluency and spontaneity.", grades: "Grades 10-11" },
      { level: "C1", desc: "Understands demanding texts. Expresses with fluency and precision.", grades: "Advanced" },
    ],
    skipCefr: "This section is only for English. Moving to the next step...",
    // Step 4 DBA
    s4Title: "Learning Standards (DBA)",
    s4Desc: "Select the DBA standards that align with your game activity.",
    dbaNote: "Note: These are general examples. Consult official MEN documents for grade-specific DBAs.",
    selectedDba: "Selected Standards",
    customDba: "Add a custom DBA",
    addCustom: "Add",
    // Step 5 Competencies
    s5Title: "Competency Framework",
    s5Desc: "Define performance indicators for each competency dimension.",
    ser: "SER (Being)",
    serDesc: "Attitudes, values, and dispositions",
    serHint: "e.g., teamwork, respect, positive attitude, creativity, frustration tolerance",
    saber: "SABER (Knowing)",
    saberDesc: "Conceptual and theoretical knowledge",
    saberHint: "e.g., vocabulary, grammar rules, thematic concepts, definitions, structures",
    saberHacer: "SABER HACER (Doing)",
    saberHacerDesc: "Procedural skills and practical application",
    saberHacerHint: "e.g., problem solving, text production, oral communication, data analysis",
    indicator: "Performance Indicator",
    evidence: "How the game develops this",
    // Step 6 Game
    s6Title: "Game Design",
    s6Desc: "Describe the game you'll use in class.",
    gameName: "Game Name",
    gameType: "Game Type",
    gameTypes: ["Digital", "Board Game", "Role-play", "Physical", "Hybrid"],
    mechanics: "Core Mechanics",
    mechanicsList: ["Points", "Levels", "Lives", "Timer", "Competition", "Cooperation", "Collection", "Quest/Mission", "Puzzle", "Narrative"],
    platform: "Platform / Tool",
    platforms: ["Kahoot", "Wordwall", "Blooket", "Baamboozle", "Genially", "Google Slides", "PowerPoint", "Physical Board", "Custom App", "Other"],
    players: "Number of Players",
    playerOptions: ["Individual", "Pairs", "Small Teams (3-5)", "Whole Class"],
    duration: "Estimated Duration",
    durations: ["10-15 min", "15-30 min", "30-45 min", "45-60 min", "60+ min"],
    materials: "Materials Needed",
    gameDesc: "Brief Game Description",
    gameDescHint: "Rules, dynamics, how to win...",
    connectionTitle: "Game-Learning Connection",
    connSer: "How does the game develop SER?",
    connSaber: "How does the game develop SABER?",
    connHacer: "How does the game develop SABER HACER?",
    // Step 7 Assessment
    s7Title: "Assessment Plan",
    s7Desc: "Define how you'll evaluate learning through the game.",
    assessTypes: "Assessment Types",
    assessTypesList: ["Self-assessment", "Peer assessment", "Teacher assessment", "Formative (real-time observation)", "Summative (final product/test)"],
    rubricTitle: "Evaluation Rubric",
    rubricScale: ["Superior (S) 4.6-5.0", "High (A) 4.0-4.5", "Basic (Bs) 3.0-3.9", "Low (Bj) 1.0-2.9"],
    criterion: "Criterion",
    addCriterion: "Add Criterion",
    // Step 8 Implementation
    s8Title: "Implementation Plan",
    s8Desc: "Organize the class phases around the game.",
    phases: [
      { name: "Warm-up / Activation", hint: "Motivation, context, rules", icon: "🔥" },
      { name: "Modeling", hint: "Game demonstration", icon: "🎯" },
      { name: "Gameplay", hint: "Game execution", icon: "🎮" },
      { name: "Feedback & Closure", hint: "Reflection and wrap-up", icon: "💬" },
    ],
    activity: "Activity",
    time: "Time",
    resources: "Resources",
    teacherRole: "Teacher Role",
    specialTitle: "Special Considerations",
    specials: ["Students with SEN", "Limited technology access", "Large groups (30+)", "First time using GBL"],
    adaptations: "Required adaptations or notes",
    // Step 9 Export
    s9Title: "Your Template is Ready!",
    s9Desc: "Review, download, or share your game-based learning plan.",
    downloadPdf: "Download as PDF",
    sendEmail: "Send via Email",
    emailPrompt: "Enter email address",
    sendGmail: "Open in Gmail",
    sendOutlook: "Open in Outlook",
    cancel: "Cancel",
    review: "Template Summary",
    editSection: "Edit",
  },
  es: {
    title: "Aprendizaje Basado en Juegos",
    subtitle: "y Plantilla de Evaluación",
    tagline: "Diseña experiencias de juego significativas alineadas con estándares colombianos",
    langToggle: "English",
    start: "Comenzar",
    next: "Continuar",
    back: "Atrás",
    finish: "Revisar y Exportar",
    stepLabels: ["Básicos", "Asignatura", "MCER", "Estándares", "Competencias", "Diseño", "Evaluación", "Implementación", "Exportar"],
    s1Title: "Información General",
    s1Desc: "Comencemos con los datos básicos de usted y su clase.",
    school: "Institución Educativa",
    teacher: "Nombre del Docente",
    grade: "Grado",
    period: "Periodo Académico",
    date: "Fecha",
    year: "Año",
    grades: ["1°", "2°", "3°", "4°", "5°", "6°", "7°", "8°", "9°", "10°", "11°", "Educación para Adultos"],
    periods: ["Periodo 1", "Periodo 2", "Periodo 3", "Periodo 4"],
    s2Title: "Elige tu Asignatura",
    s2Desc: "Selecciona el área para esta actividad basada en juegos.",
    subjects: ["Inglés", "Matemáticas", "Lenguaje", "Ciencias Naturales", "Ciencias Sociales", "Otra"],
    subjectIcons: ["🌎", "📐", "📖", "🔬", "🏛️", "✨"],
    otherSubject: "Especifique la asignatura",
    s3Title: "Nivel MCER / CEFR",
    s3Desc: "Seleccione el nivel MCER objetivo para su clase de inglés.",
    cefrLevels: [
      { level: "Pre-A1", desc: "Principiante absoluto. Reconoce palabras aisladas y expresiones básicas.", grades: "Grados 1-3" },
      { level: "A1", desc: "Comprende y utiliza expresiones cotidianas y frases sencillas.", grades: "Grados 4-5" },
      { level: "A2", desc: "Comprende oraciones de uso frecuente. Se comunica en tareas simples.", grades: "Grados 6-7" },
      { level: "B1", desc: "Comprende textos claros sobre temas conocidos. Produce textos sencillos.", grades: "Grados 8-9" },
      { level: "B2", desc: "Comprende textos complejos. Interactúa con fluidez y naturalidad.", grades: "Grados 10-11" },
      { level: "C1", desc: "Comprende textos extensos y exigentes. Se expresa con fluidez.", grades: "Avanzado" },
    ],
    skipCefr: "Esta sección es solo para inglés. Pasando al siguiente paso...",
    s4Title: "Estándares de Aprendizaje (DBA)",
    s4Desc: "Seleccione los DBA que se alinean con su actividad de juego.",
    dbaNote: "Nota: Estos son ejemplos generales. Consulte los documentos oficiales del MEN para DBA específicos por grado.",
    selectedDba: "Estándares Seleccionados",
    customDba: "Agregar un DBA personalizado",
    addCustom: "Agregar",
    s5Title: "Marco de Competencias",
    s5Desc: "Defina indicadores de desempeño para cada dimensión de competencia.",
    ser: "SER",
    serDesc: "Actitudes, valores y disposiciones",
    serHint: "ej., trabajo en equipo, respeto, actitud positiva, creatividad, tolerancia a la frustración",
    saber: "SABER",
    saberDesc: "Conocimientos conceptuales y teóricos",
    saberHint: "ej., vocabulario, reglas gramaticales, conceptos temáticos, definiciones",
    saberHacer: "SABER HACER",
    saberHacerDesc: "Habilidades procedimentales y aplicación práctica",
    saberHacerHint: "ej., resolver problemas, producir textos, comunicarse oralmente, analizar datos",
    indicator: "Indicador de Desempeño",
    evidence: "Cómo el juego lo desarrolla",
    s6Title: "Diseño del Juego",
    s6Desc: "Describa el juego que usará en clase.",
    gameName: "Nombre del Juego",
    gameType: "Tipo de Juego",
    gameTypes: ["Digital", "De Mesa", "De Rol", "Físico", "Híbrido"],
    mechanics: "Mecánicas Principales",
    mechanicsList: ["Puntos", "Niveles", "Vidas", "Temporizador", "Competencia", "Cooperación", "Recolección", "Misión", "Rompecabezas", "Narrativa"],
    platform: "Plataforma / Herramienta",
    platforms: ["Kahoot", "Wordwall", "Blooket", "Baamboozle", "Genially", "Google Slides", "PowerPoint", "Tablero Físico", "App Propia", "Otra"],
    players: "Número de Jugadores",
    playerOptions: ["Individual", "Parejas", "Equipos Pequeños (3-5)", "Todo el Grupo"],
    duration: "Duración Estimada",
    durations: ["10-15 min", "15-30 min", "30-45 min", "45-60 min", "60+ min"],
    materials: "Materiales Necesarios",
    gameDesc: "Descripción Breve del Juego",
    gameDescHint: "Reglas, dinámica, cómo se gana...",
    connectionTitle: "Conexión Juego-Aprendizaje",
    connSer: "¿Cómo desarrolla el SER?",
    connSaber: "¿Cómo desarrolla el SABER?",
    connHacer: "¿Cómo desarrolla el SABER HACER?",
    s7Title: "Plan de Evaluación",
    s7Desc: "Defina cómo evaluará el aprendizaje a través del juego.",
    assessTypes: "Tipos de Evaluación",
    assessTypesList: ["Autoevaluación", "Coevaluación", "Heteroevaluación", "Formativa (observación en tiempo real)", "Sumativa (producto o prueba final)"],
    rubricTitle: "Rúbrica de Evaluación",
    rubricScale: ["Superior (S) 4.6-5.0", "Alto (A) 4.0-4.5", "Básico (Bs) 3.0-3.9", "Bajo (Bj) 1.0-2.9"],
    criterion: "Criterio",
    addCriterion: "Agregar Criterio",
    s7Title: "Plan de Evaluación",
    s7Desc: "Defina cómo evaluará el aprendizaje a través del juego.",
    s8Title: "Plan de Implementación",
    s8Desc: "Organice las fases de la clase alrededor del juego.",
    phases: [
      { name: "Activación / Calentamiento", hint: "Motivación, contexto, reglas", icon: "🔥" },
      { name: "Modelado", hint: "Demostración del juego", icon: "🎯" },
      { name: "Juego", hint: "Ejecución del juego", icon: "🎮" },
      { name: "Retroalimentación y Cierre", hint: "Reflexión y cierre", icon: "💬" },
    ],
    activity: "Actividad",
    time: "Tiempo",
    resources: "Recursos",
    teacherRole: "Rol del Docente",
    specialTitle: "Consideraciones Especiales",
    specials: ["Estudiantes con NEE", "Acceso limitado a tecnología", "Grupos grandes (30+)", "Primera vez usando ABJ"],
    adaptations: "Adaptaciones o notas necesarias",
    s9Title: "¡Tu Plantilla está Lista!",
    s9Desc: "Revisa, descarga o comparte tu plan de aprendizaje basado en juegos.",
    downloadPdf: "Descargar como PDF",
    sendEmail: "Enviar por Correo",
    emailPrompt: "Ingrese correo electrónico",
    sendGmail: "Abrir en Gmail",
    sendOutlook: "Abrir en Outlook",
    cancel: "Cancelar",
    review: "Resumen de la Plantilla",
    editSection: "Editar",
  }
};

const DBA_DATA = {
  en: {
    "English": [
      "Understands general and specific information in short oral texts",
      "Participates in short conversations using simple phrases",
      "Understands the topic and general information of short texts",
      "Produces short and simple texts about familiar topics",
      "Exchanges information about academic topics in the environment",
      "Explains reasons for plans and actions in the environment",
    ],
    "Mathematics": [
      "Solves problems of direct and inverse proportionality",
      "Uses properties of numbers to solve operations",
      "Proposes and develops estimation and calculation strategies",
      "Describes and represents figures on the Cartesian plane",
      "Analyzes and interprets data presented in tables and graphs",
      "Predicts results of random experiments",
    ],
    "Language Arts": [
      "Produces verbal and non-verbal texts with communicative intention",
      "Understands informational, narrative and argumentative texts",
      "Recognizes the social function of the texts they read",
      "Produces oral and written texts with cohesion and coherence",
      "Interprets messages in different formats and media",
      "Participates in communicative scenarios respecting turns",
    ],
    "Natural Sciences": [
      "Understands that organisms have energy needs",
      "Explains how body systems work together",
      "Analyzes relationships between ecosystem components",
      "Understands the properties of matter and its transformations",
      "Analyzes the characteristics of object movement",
      "Understands the relationship between Earth, Sun and Moon",
    ],
    "Social Sciences": [
      "Analyzes historical processes and their influence on the present",
      "Recognizes the territorial and political organization of Colombia",
      "Understands fundamental rights and the Constitution",
      "Analyzes social, economic and environmental issues",
      "Evaluates cultural diversity and its manifestations",
      "Understands the role of citizenship and democracy",
    ],
  },
  es: {
    "Inglés": [
      "Comprende información general y específica en textos orales cortos",
      "Participa en conversaciones cortas usando frases sencillas",
      "Comprende el tema e información general de textos cortos",
      "Produce textos cortos y sencillos sobre temas familiares",
      "Intercambia información sobre temas académicos del entorno",
      "Explica las razones de planes y acciones de su entorno",
    ],
    "Matemáticas": [
      "Resuelve problemas de proporcionalidad directa e inversa",
      "Utiliza propiedades de los números para resolver operaciones",
      "Propone y desarrolla estrategias de estimación y cálculo",
      "Describe y representa figuras en el plano cartesiano",
      "Analiza e interpreta datos presentados en tablas y gráficas",
      "Predice resultados de experimentos aleatorios",
    ],
    "Lenguaje": [
      "Produce textos verbales y no verbales con intención comunicativa",
      "Comprende textos informativos, narrativos y argumentativos",
      "Reconoce la función social de los textos que lee",
      "Produce textos orales y escritos con cohesión y coherencia",
      "Interpreta mensajes en diferentes formatos y medios",
      "Participa en escenarios comunicativos respetando turnos",
    ],
    "Ciencias Naturales": [
      "Comprende que los organismos tienen necesidades energéticas",
      "Explica cómo los sistemas del cuerpo trabajan en conjunto",
      "Analiza las relaciones entre los componentes de un ecosistema",
      "Comprende las propiedades de la materia y sus transformaciones",
      "Analiza las características del movimiento de los objetos",
      "Comprende la relación entre la Tierra, el Sol y la Luna",
    ],
    "Ciencias Sociales": [
      "Analiza procesos históricos y su influencia en el presente",
      "Reconoce la organización territorial y política de Colombia",
      "Comprende los derechos fundamentales y la Constitución",
      "Analiza problemáticas sociales, económicas y ambientales",
      "Evalúa la diversidad cultural y sus manifestaciones",
      "Comprende el papel de la ciudadanía y la democracia",
    ],
  }
};

const subjectKeyMap = {
  en: { "English": "English", "Mathematics": "Mathematics", "Language Arts": "Language Arts", "Natural Sciences": "Natural Sciences", "Social Sciences": "Social Sciences" },
  es: { "Inglés": "Inglés", "Matemáticas": "Matemáticas", "Lenguaje": "Lenguaje", "Ciencias Naturales": "Ciencias Naturales", "Ciencias Sociales": "Ciencias Sociales" }
};

// ─── SVG ILLUSTRATIONS ───
const GamepadSVG = () => (
  <svg viewBox="0 0 120 80" style={{width:'100%',maxWidth:280,height:'auto'}}>
    <defs>
      <linearGradient id="gpad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#6C63FF"/>
        <stop offset="100%" stopColor="#FF6584"/>
      </linearGradient>
      <filter id="glow"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <rect x="10" y="20" width="100" height="50" rx="25" fill="url(#gpad)" filter="url(#glow)" opacity="0.9"/>
    <circle cx="35" cy="42" r="6" fill="none" stroke="#fff" strokeWidth="2"/>
    <line x1="35" y1="36" x2="35" y2="48" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
    <line x1="29" y1="42" x2="41" y2="42" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="78" cy="38" r="4" fill="#FFD93D"/>
    <circle cx="88" cy="45" r="4" fill="#6BCB77"/>
    <circle cx="78" cy="52" r="4" fill="#FF6B6B"/>
    <circle cx="68" cy="45" r="4" fill="#4D96FF"/>
    <rect x="48" y="50" width="10" height="4" rx="2" fill="#fff" opacity="0.5"/>
    <rect x="62" y="50" width="10" height="4" rx="2" fill="#fff" opacity="0.5"/>
  </svg>
);

const TrophySVG = () => (
  <svg viewBox="0 0 80 90" style={{width:60,height:'auto'}}>
    <defs>
      <linearGradient id="trophy" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFD93D"/>
        <stop offset="100%" stopColor="#FF9800"/>
      </linearGradient>
    </defs>
    <path d="M25 10 h30 v5 c0 20 -5 35 -15 40 c-10-5-15-20-15-40z" fill="url(#trophy)"/>
    <path d="M25 15 c-10 0-15 5-15 15 s5 15 15 15" fill="none" stroke="#FFD93D" strokeWidth="3"/>
    <path d="M55 15 c10 0 15 5 15 15 s-5 15-15 15" fill="none" stroke="#FFD93D" strokeWidth="3"/>
    <rect x="32" y="55" width="16" height="5" rx="2" fill="#FF9800"/>
    <rect x="28" y="60" width="24" height="8" rx="3" fill="#FFD93D"/>
    <circle cx="40" cy="30" r="5" fill="#fff" opacity="0.3"/>
  </svg>
);

// ─── MAIN COMPONENT ───
export default function App() {
  const [lang, setLang] = useState("en");
  const [step, setStep] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [email, setEmail] = useState("");
  const t = TEXT[lang];
  const printRef = useRef();

  // Form state
  const [form, setForm] = useState({
    school: "", teacher: "", grade: "", period: "", date: "", year: new Date().getFullYear().toString(),
    subject: "", otherSubject: "", cefrLevel: "",
    selectedDbas: [], customDba: "",
    serIndicator: "", serEvidence: "",
    saberIndicator: "", saberEvidence: "",
    hacerIndicator: "", hacerEvidence: "",
    gameName: "", gameType: "", mechanics: [], platform: "", players: "", duration: "",
    materials: "", gameDesc: "",
    connSer: "", connSaber: "", connHacer: "",
    assessTypes: [],
    rubricCriteria: [{ name: "", superior: "", alto: "", basico: "", bajo: "" }],
    phases: [{activity:"",time:"",resources:"",role:""},{activity:"",time:"",resources:"",role:""},{activity:"",time:"",resources:"",role:""},{activity:"",time:"",resources:"",role:""}],
    specials: [], adaptations: "",
  });

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));
  const toggle = (key, val) => {
    setForm(f => {
      const arr = f[key];
      return { ...f, [key]: arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val] };
    });
  };

  const isEnglish = () => {
    const s = form.subject;
    return s === "English" || s === "Inglés";
  };

  const totalSteps = isEnglish() ? 9 : 8;
  const getActualStep = (s) => {
    if (!isEnglish() && s >= 2) return s + 1;
    return s;
  };
  const logicalStep = isEnglish() ? step : (step >= 2 ? step + 1 : step);

  const goNext = () => {
    if (step < totalSteps - 1) {
      setAnimating(true);
      setTimeout(() => { setStep(s => s + 1); setAnimating(false); }, 300);
    }
  };
  const goBack = () => {
    if (step > 0) {
      setAnimating(true);
      setTimeout(() => { setStep(s => s - 1); setAnimating(false); }, 300);
    }
  };
  const goToStep = (s) => {
    setAnimating(true);
    setTimeout(() => { setStep(s); setAnimating(false); }, 300);
  };

  const progress = ((step + 1) / totalSteps) * 100;

  const getSubjectDbas = () => {
    const subj = form.subject;
    const data = DBA_DATA[lang];
    if (data[subj]) return data[subj];
    return [];
  };

  const generateSummaryText = () => {
    const lines = [];
    lines.push("=== GAME-BASED LEARNING & ASSESSMENT TEMPLATE ===\n");
    lines.push(`School: ${form.school}`);
    lines.push(`Teacher: ${form.teacher}`);
    lines.push(`Grade: ${form.grade} | Period: ${form.period} | Date: ${form.date} | Year: ${form.year}`);
    lines.push(`Subject: ${form.subject}${form.otherSubject ? ` (${form.otherSubject})` : ""}`);
    if (isEnglish()) lines.push(`CEFR Level: ${form.cefrLevel}`);
    lines.push(`\nSelected DBA Standards:\n${form.selectedDbas.map(d => `  • ${d}`).join("\n")}`);
    lines.push(`\n--- COMPETENCIES ---`);
    lines.push(`SER: ${form.serIndicator}\n  Evidence: ${form.serEvidence}`);
    lines.push(`SABER: ${form.saberIndicator}\n  Evidence: ${form.saberEvidence}`);
    lines.push(`SABER HACER: ${form.hacerIndicator}\n  Evidence: ${form.hacerEvidence}`);
    lines.push(`\n--- GAME DESIGN ---`);
    lines.push(`Name: ${form.gameName} | Type: ${form.gameType}`);
    lines.push(`Mechanics: ${form.mechanics.join(", ")}`);
    lines.push(`Platform: ${form.platform} | Players: ${form.players} | Duration: ${form.duration}`);
    lines.push(`Materials: ${form.materials}`);
    lines.push(`Description: ${form.gameDesc}`);
    lines.push(`\nGame-Learning Connection:`);
    lines.push(`  SER: ${form.connSer}`);
    lines.push(`  SABER: ${form.connSaber}`);
    lines.push(`  SABER HACER: ${form.connHacer}`);
    lines.push(`\n--- ASSESSMENT ---`);
    lines.push(`Types: ${form.assessTypes.join(", ")}`);
    lines.push(`Rubric Criteria:`);
    form.rubricCriteria.forEach(c => {
      if (c.name) lines.push(`  ${c.name}: S=${c.superior} | A=${c.alto} | Bs=${c.basico} | Bj=${c.bajo}`);
    });
    const phaseNames = t.phases.map(p => p.name);
    lines.push(`\n--- IMPLEMENTATION ---`);
    form.phases.forEach((p, i) => {
      lines.push(`Phase ${i+1} (${phaseNames[i]}): ${p.activity} [${p.time}] Resources: ${p.resources} | Role: ${p.role}`);
    });
    if (form.specials.length) lines.push(`Special Considerations: ${form.specials.join(", ")}`);
    if (form.adaptations) lines.push(`Adaptations: ${form.adaptations}`);
    return lines.join("\n");
  };

  const handleDownloadPdf = () => {
    const content = generateSummaryText();
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`<!DOCTYPE html><html><head><title>GBL Template</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; padding: 40px; color: #1a1a2e; line-height: 1.6; background: #fff; }
        h1 { font-size: 24px; color: #6C63FF; margin-bottom: 4px; }
        h2 { font-size: 14px; color: #888; margin-bottom: 24px; font-weight: 400; }
        .section { margin-bottom: 20px; page-break-inside: avoid; }
        .section-title { font-size: 16px; font-weight: 700; color: #fff; background: linear-gradient(135deg, #6C63FF, #FF6584); padding: 8px 16px; border-radius: 8px; margin-bottom: 10px; }
        .field { display: flex; margin-bottom: 6px; font-size: 13px; }
        .field-label { font-weight: 600; min-width: 160px; color: #6C63FF; }
        .field-value { flex: 1; }
        .chip { display: inline-block; background: #f0eeff; color: #6C63FF; padding: 2px 10px; border-radius: 12px; font-size: 12px; margin: 2px 4px 2px 0; }
        table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 12px; }
        th { background: #6C63FF; color: #fff; padding: 6px 10px; text-align: left; }
        td { border: 1px solid #e0e0e0; padding: 6px 10px; }
        .comp-card { border-left: 4px solid; padding: 8px 12px; margin-bottom: 8px; background: #fafafa; border-radius: 0 8px 8px 0; }
        .comp-ser { border-color: #4CAF50; }
        .comp-saber { border-color: #2196F3; }
        .comp-hacer { border-color: #FF9800; }
        .footer { margin-top: 30px; padding-top: 16px; border-top: 2px solid #6C63FF; display: flex; justify-content: space-between; font-size: 12px; color: #888; }
        .sig-line { border-top: 1px solid #ccc; width: 200px; text-align: center; padding-top: 4px; }
      </style>
    </head><body>
      <h1>🎮 Game-Based Learning & Assessment Template</h1>
      <h2>${form.school} — ${form.teacher} — ${form.grade} — ${form.year}</h2>
      
      <div class="section">
        <div class="section-title">📋 General Information</div>
        <div class="field"><span class="field-label">Institution:</span><span class="field-value">${form.school}</span></div>
        <div class="field"><span class="field-label">Teacher:</span><span class="field-value">${form.teacher}</span></div>
        <div class="field"><span class="field-label">Grade:</span><span class="field-value">${form.grade}</span></div>
        <div class="field"><span class="field-label">Period:</span><span class="field-value">${form.period}</span></div>
        <div class="field"><span class="field-label">Date:</span><span class="field-value">${form.date}</span></div>
        <div class="field"><span class="field-label">Subject:</span><span class="field-value">${form.subject}${form.otherSubject ? ` (${form.otherSubject})` : ""}</span></div>
        ${isEnglish() ? `<div class="field"><span class="field-label">CEFR Level:</span><span class="field-value">${form.cefrLevel}</span></div>` : ""}
      </div>

      <div class="section">
        <div class="section-title">📜 Learning Standards (DBA)</div>
        ${form.selectedDbas.map(d => `<span class="chip">• ${d}</span>`).join("")}
      </div>

      <div class="section">
        <div class="section-title">🎯 Competency Framework</div>
        <div class="comp-card comp-ser"><strong>SER (Being):</strong> ${form.serIndicator}<br/><em>Evidence: ${form.serEvidence}</em></div>
        <div class="comp-card comp-saber"><strong>SABER (Knowing):</strong> ${form.saberIndicator}<br/><em>Evidence: ${form.saberEvidence}</em></div>
        <div class="comp-card comp-hacer"><strong>SABER HACER (Doing):</strong> ${form.hacerIndicator}<br/><em>Evidence: ${form.hacerEvidence}</em></div>
      </div>

      <div class="section">
        <div class="section-title">🎮 Game Design</div>
        <div class="field"><span class="field-label">Game Name:</span><span class="field-value">${form.gameName}</span></div>
        <div class="field"><span class="field-label">Type:</span><span class="field-value">${form.gameType}</span></div>
        <div class="field"><span class="field-label">Mechanics:</span><span class="field-value">${form.mechanics.join(", ")}</span></div>
        <div class="field"><span class="field-label">Platform:</span><span class="field-value">${form.platform}</span></div>
        <div class="field"><span class="field-label">Players:</span><span class="field-value">${form.players}</span></div>
        <div class="field"><span class="field-label">Duration:</span><span class="field-value">${form.duration}</span></div>
        <div class="field"><span class="field-label">Materials:</span><span class="field-value">${form.materials}</span></div>
        <div class="field"><span class="field-label">Description:</span><span class="field-value">${form.gameDesc}</span></div>
        <div class="comp-card comp-ser"><strong>→ SER:</strong> ${form.connSer}</div>
        <div class="comp-card comp-saber"><strong>→ SABER:</strong> ${form.connSaber}</div>
        <div class="comp-card comp-hacer"><strong>→ SABER HACER:</strong> ${form.connHacer}</div>
      </div>

      <div class="section">
        <div class="section-title">📊 Assessment</div>
        <div class="field"><span class="field-label">Types:</span><span class="field-value">${form.assessTypes.join(", ")}</span></div>
        <table><tr><th>Criterion</th><th>Superior (S)</th><th>Alto (A)</th><th>Básico (Bs)</th><th>Bajo (Bj)</th></tr>
        ${form.rubricCriteria.filter(c=>c.name).map(c => `<tr><td><strong>${c.name}</strong></td><td>${c.superior}</td><td>${c.alto}</td><td>${c.basico}</td><td>${c.bajo}</td></tr>`).join("")}
        </table>
      </div>

      <div class="section">
        <div class="section-title">🗓️ Implementation Plan</div>
        <table><tr><th>Phase</th><th>Activity</th><th>Time</th><th>Resources</th><th>Teacher Role</th></tr>
        ${form.phases.map((p,i) => `<tr><td><strong>${["Warm-up","Modeling","Gameplay","Feedback"][i]}</strong></td><td>${p.activity}</td><td>${p.time}</td><td>${p.resources}</td><td>${p.role}</td></tr>`).join("")}
        </table>
        ${form.specials.length ? `<p style="margin-top:8px"><strong>Special Considerations:</strong> ${form.specials.join(", ")}</p>` : ""}
        ${form.adaptations ? `<p><strong>Adaptations:</strong> ${form.adaptations}</p>` : ""}
      </div>

      <div class="footer">
        <div class="sig-line">Teacher Signature</div>
        <div class="sig-line">Coordinator Signature</div>
        <div class="sig-line">Date</div>
      </div>
    </body></html>`);
    printWindow.document.close();
    setTimeout(() => { printWindow.print(); }, 600);
  };

  const handleEmail = (provider) => {
    const subject = encodeURIComponent(`GBL Template: ${form.gameName || "Game-Based Learning"} - ${form.school}`);
    const body = encodeURIComponent(generateSummaryText());
    if (provider === "gmail") {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, '_blank');
    } else {
      window.open(`https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${subject}&body=${body}`, '_blank');
    }
    setShowEmail(false);
  };

  // ─── STEP COMPONENTS ───
  const renderStep = () => {
    const ls = logicalStep;
    switch (ls) {
      case 0: return <StepBasics />;
      case 1: return <StepSubject />;
      case 2: return <StepCEFR />;
      case 3: return <StepDBA />;
      case 4: return <StepCompetencies />;
      case 5: return <StepGame />;
      case 6: return <StepAssessment />;
      case 7: return <StepImplementation />;
      case 8: return <StepExport />;
      default: return null;
    }
  };

  // Step 0: Basics
  const StepBasics = () => (
    <div>
      <StepHeader icon="📋" title={t.s1Title} desc={t.s1Desc} />
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
        <Input label={t.school} value={form.school} onChange={v=>set('school',v)} full />
        <Input label={t.teacher} value={form.teacher} onChange={v=>set('teacher',v)} full />
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:16,marginTop:16}}>
        <Select label={t.grade} value={form.grade} options={t.grades} onChange={v=>set('grade',v)} />
        <Select label={t.period} value={form.period} options={t.periods} onChange={v=>set('period',v)} />
        <Input label={t.year} value={form.year} onChange={v=>set('year',v)} />
      </div>
      <div style={{marginTop:16}}>
        <Input label={t.date} value={form.date} onChange={v=>set('date',v)} type="date" />
      </div>
    </div>
  );

  // Step 1: Subject
  const StepSubject = () => (
    <div>
      <StepHeader icon="📚" title={t.s2Title} desc={t.s2Desc} />
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
        {t.subjects.map((s, i) => (
          <button key={s} onClick={()=>set('subject',s)} style={{
            padding:'24px 16px',border:'2px solid',borderRadius:16,cursor:'pointer',transition:'all 0.3s',
            borderColor: form.subject === s ? '#6C63FF' : 'rgba(255,255,255,0.1)',
            background: form.subject === s ? 'rgba(108,99,255,0.15)' : 'rgba(255,255,255,0.03)',
            transform: form.subject === s ? 'scale(1.03)' : 'scale(1)',
            boxShadow: form.subject === s ? '0 0 30px rgba(108,99,255,0.3)' : 'none',
          }}>
            <div style={{fontSize:40,marginBottom:8}}>{t.subjectIcons[i]}</div>
            <div style={{color:'#fff',fontWeight:600,fontSize:15}}>{s}</div>
          </button>
        ))}
      </div>
      {(form.subject === "Other" || form.subject === "Otra") && (
        <div style={{marginTop:16}}>
          <Input label={t.otherSubject} value={form.otherSubject} onChange={v=>set('otherSubject',v)} />
        </div>
      )}
    </div>
  );

  // Step 2: CEFR
  const StepCEFR = () => (
    <div>
      <StepHeader icon="🌎" title={t.s3Title} desc={t.s3Desc} />
      <div style={{display:'grid',gap:12}}>
        {t.cefrLevels.map(c => (
          <button key={c.level} onClick={()=>set('cefrLevel',c.level)} style={{
            display:'flex',alignItems:'center',gap:16,padding:'16px 20px',
            border:'2px solid',borderRadius:14,cursor:'pointer',transition:'all 0.3s',textAlign:'left',
            borderColor: form.cefrLevel === c.level ? '#6C63FF' : 'rgba(255,255,255,0.08)',
            background: form.cefrLevel === c.level ? 'rgba(108,99,255,0.12)' : 'rgba(255,255,255,0.02)',
          }}>
            <div style={{
              width:56,height:56,borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',
              fontWeight:800,fontSize:16,flexShrink:0,
              background: form.cefrLevel === c.level ? 'linear-gradient(135deg,#6C63FF,#FF6584)' : 'rgba(255,255,255,0.06)',
              color: form.cefrLevel === c.level ? '#fff' : '#888',
            }}>{c.level}</div>
            <div style={{flex:1}}>
              <div style={{color:'#ccc',fontSize:14}}>{c.desc}</div>
              <div style={{color:'#6C63FF',fontSize:12,marginTop:4,fontWeight:600}}>{c.grades}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  // Step 3: DBA
  const StepDBA = () => {
    const dbas = getSubjectDbas();
    return (
      <div>
        <StepHeader icon="📜" title={t.s4Title} desc={t.s4Desc} />
        <div style={{background:'rgba(108,99,255,0.08)',borderRadius:12,padding:'12px 16px',marginBottom:16,borderLeft:'4px solid #6C63FF'}}>
          <span style={{color:'#aaa',fontSize:13}}>{t.dbaNote}</span>
        </div>
        {dbas.length > 0 ? (
          <div style={{display:'grid',gap:8}}>
            {dbas.map((d,i) => (
              <button key={i} onClick={()=>toggle('selectedDbas',d)} style={{
                display:'flex',alignItems:'center',gap:12,padding:'14px 16px',
                border:'2px solid',borderRadius:12,cursor:'pointer',transition:'all 0.2s',textAlign:'left',
                borderColor: form.selectedDbas.includes(d) ? '#4CAF50' : 'rgba(255,255,255,0.06)',
                background: form.selectedDbas.includes(d) ? 'rgba(76,175,80,0.1)' : 'rgba(255,255,255,0.02)',
              }}>
                <div style={{
                  width:28,height:28,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',
                  fontSize:14,flexShrink:0,transition:'all 0.2s',
                  background: form.selectedDbas.includes(d) ? '#4CAF50' : 'rgba(255,255,255,0.06)',
                  color: form.selectedDbas.includes(d) ? '#fff' : '#555',
                }}>{form.selectedDbas.includes(d) ? '✓' : (i+1)}</div>
                <span style={{color:'#ddd',fontSize:14}}>{d}</span>
              </button>
            ))}
          </div>
        ) : (
          <div style={{color:'#888',padding:20,textAlign:'center'}}>
            {lang === 'en' ? 'No predefined DBAs for this subject. Add custom ones below.' : 'No hay DBA predefinidos para esta asignatura. Agregue personalizados abajo.'}
          </div>
        )}
        <div style={{display:'flex',gap:8,marginTop:16}}>
          <input
            value={form.customDba} onChange={e=>set('customDba',e.target.value)}
            placeholder={t.customDba}
            style={{flex:1,padding:'12px 16px',borderRadius:10,border:'1px solid rgba(255,255,255,0.1)',background:'rgba(255,255,255,0.04)',color:'#fff',fontSize:14,outline:'none'}}
            onKeyDown={e => { if(e.key==='Enter' && form.customDba.trim()) { toggle('selectedDbas',form.customDba.trim()); set('customDba',''); }}}
          />
          <button onClick={()=>{ if(form.customDba.trim()) { toggle('selectedDbas',form.customDba.trim()); set('customDba',''); }}}
            style={{padding:'12px 20px',borderRadius:10,border:'none',background:'linear-gradient(135deg,#6C63FF,#FF6584)',color:'#fff',fontWeight:600,cursor:'pointer',fontSize:14}}>
            {t.addCustom}
          </button>
        </div>
        {form.selectedDbas.length > 0 && (
          <div style={{marginTop:16}}>
            <div style={{color:'#6C63FF',fontWeight:600,fontSize:13,marginBottom:8}}>{t.selectedDba} ({form.selectedDbas.length})</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
              {form.selectedDbas.map((d,i) => (
                <span key={i} onClick={()=>toggle('selectedDbas',d)} style={{
                  background:'rgba(108,99,255,0.15)',color:'#a5a0ff',padding:'6px 12px',borderRadius:20,fontSize:12,cursor:'pointer',
                  display:'flex',alignItems:'center',gap:6,
                }}>
                  {d.length > 50 ? d.slice(0,50)+'...' : d}
                  <span style={{color:'#FF6584',fontWeight:700}}>×</span>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Step 4: Competencies
  const StepCompetencies = () => {
    const comps = [
      { key: 'ser', label: t.ser, desc: t.serDesc, hint: t.serHint, color: '#4CAF50', bg: 'rgba(76,175,80,0.08)', icon: '💚' },
      { key: 'saber', label: t.saber, desc: t.saberDesc, hint: t.saberHint, color: '#2196F3', bg: 'rgba(33,150,243,0.08)', icon: '💙' },
      { key: 'hacer', label: t.saberHacer, desc: t.saberHacerDesc, hint: t.saberHacerHint, color: '#FF9800', bg: 'rgba(255,152,0,0.08)', icon: '🧡' },
    ];
    return (
      <div>
        <StepHeader icon="🎯" title={t.s5Title} desc={t.s5Desc} />
        <div style={{display:'grid',gap:20}}>
          {comps.map(c => (
            <div key={c.key} style={{background:c.bg,borderRadius:16,padding:20,borderLeft:`4px solid ${c.color}`}}>
              <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:12}}>
                <span style={{fontSize:24}}>{c.icon}</span>
                <div>
                  <div style={{color:c.color,fontWeight:700,fontSize:16}}>{c.label}</div>
                  <div style={{color:'#888',fontSize:12}}>{c.desc}</div>
                </div>
              </div>
              <div style={{color:'#666',fontSize:12,marginBottom:10,fontStyle:'italic'}}>💡 {c.hint}</div>
              <Input label={t.indicator} value={form[c.key+'Indicator']} onChange={v=>set(c.key+'Indicator',v)} />
              <div style={{marginTop:8}}>
                <Input label={t.evidence} value={form[c.key+'Evidence']} onChange={v=>set(c.key+'Evidence',v)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Step 5: Game Design
  const StepGame = () => (
    <div>
      <StepHeader icon="🎮" title={t.s6Title} desc={t.s6Desc} />
      <Input label={t.gameName} value={form.gameName} onChange={v=>set('gameName',v)} />
      <div style={{marginTop:16}}>
        <label style={{color:'#aaa',fontSize:13,fontWeight:600,display:'block',marginBottom:8}}>{t.gameType}</label>
        <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
          {t.gameTypes.map(gt => (
            <Chip key={gt} label={gt} selected={form.gameType===gt} onClick={()=>set('gameType',gt)} />
          ))}
        </div>
      </div>
      <div style={{marginTop:16}}>
        <label style={{color:'#aaa',fontSize:13,fontWeight:600,display:'block',marginBottom:8}}>{t.mechanics}</label>
        <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
          {t.mechanicsList.map(m => (
            <Chip key={m} label={m} selected={form.mechanics.includes(m)} onClick={()=>toggle('mechanics',m)} />
          ))}
        </div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginTop:16}}>
        <div>
          <label style={{color:'#aaa',fontSize:13,fontWeight:600,display:'block',marginBottom:8}}>{t.platform}</label>
          <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
            {t.platforms.map(p => (
              <Chip key={p} label={p} selected={form.platform===p} onClick={()=>set('platform',p)} small />
            ))}
          </div>
        </div>
        <div>
          <label style={{color:'#aaa',fontSize:13,fontWeight:600,display:'block',marginBottom:8}}>{t.players}</label>
          <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
            {t.playerOptions.map(p => (
              <Chip key={p} label={p} selected={form.players===p} onClick={()=>set('players',p)} small />
            ))}
          </div>
        </div>
      </div>
      <div style={{marginTop:16}}>
        <label style={{color:'#aaa',fontSize:13,fontWeight:600,display:'block',marginBottom:8}}>{t.duration}</label>
        <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
          {t.durations.map(d => (
            <Chip key={d} label={d} selected={form.duration===d} onClick={()=>set('duration',d)} />
          ))}
        </div>
      </div>
      <div style={{marginTop:16}}><Input label={t.materials} value={form.materials} onChange={v=>set('materials',v)} /></div>
      <div style={{marginTop:16}}><TextArea label={t.gameDesc} value={form.gameDesc} onChange={v=>set('gameDesc',v)} hint={t.gameDescHint} /></div>
      <div style={{marginTop:24,background:'rgba(108,99,255,0.06)',borderRadius:16,padding:20}}>
        <div style={{color:'#6C63FF',fontWeight:700,fontSize:15,marginBottom:16}}>{t.connectionTitle}</div>
        <div style={{display:'grid',gap:12}}>
          <TextArea label={t.connSer} value={form.connSer} onChange={v=>set('connSer',v)} color="#4CAF50" />
          <TextArea label={t.connSaber} value={form.connSaber} onChange={v=>set('connSaber',v)} color="#2196F3" />
          <TextArea label={t.connHacer} value={form.connHacer} onChange={v=>set('connHacer',v)} color="#FF9800" />
        </div>
      </div>
    </div>
  );

  // Step 6: Assessment
  const StepAssessment = () => (
    <div>
      <StepHeader icon="📊" title={t.s7Title} desc={t.s7Desc} />
      <div style={{marginBottom:20}}>
        <label style={{color:'#aaa',fontSize:13,fontWeight:600,display:'block',marginBottom:8}}>{t.assessTypes}</label>
        <div style={{display:'grid',gap:8}}>
          {t.assessTypesList.map(at => (
            <button key={at} onClick={()=>toggle('assessTypes',at)} style={{
              display:'flex',alignItems:'center',gap:12,padding:'12px 16px',borderRadius:12,border:'2px solid',
              cursor:'pointer',transition:'all 0.2s',textAlign:'left',
              borderColor: form.assessTypes.includes(at) ? '#6C63FF' : 'rgba(255,255,255,0.06)',
              background: form.assessTypes.includes(at) ? 'rgba(108,99,255,0.1)' : 'transparent',
            }}>
              <div style={{width:22,height:22,borderRadius:6,border:'2px solid',display:'flex',alignItems:'center',justifyContent:'center',
                borderColor: form.assessTypes.includes(at) ? '#6C63FF' : '#444',
                background: form.assessTypes.includes(at) ? '#6C63FF' : 'transparent',
                color:'#fff',fontSize:12,fontWeight:700,
              }}>{form.assessTypes.includes(at) ? '✓' : ''}</div>
              <span style={{color:'#ddd',fontSize:14}}>{at}</span>
            </button>
          ))}
        </div>
      </div>
      <div style={{marginTop:20}}>
        <div style={{color:'#fff',fontWeight:700,fontSize:16,marginBottom:16}}>{t.rubricTitle}</div>
        <div style={{overflowX:'auto'}}>
          <div style={{display:'grid',gridTemplateColumns:'1.5fr 1fr 1fr 1fr 1fr auto',gap:1,background:'rgba(255,255,255,0.06)',borderRadius:12,overflow:'hidden',minWidth:600}}>
            {[t.criterion, ...t.rubricScale, ''].map((h,i) => (
              <div key={i} style={{padding:'10px 12px',background:'rgba(108,99,255,0.2)',color:'#a5a0ff',fontSize:11,fontWeight:700}}>
                {h}
              </div>
            ))}
            {form.rubricCriteria.map((c, ri) => (
              <>
                {['name','superior','alto','basico','bajo'].map((field) => (
                  <div key={`${ri}-${field}`} style={{padding:4,background:'rgba(255,255,255,0.02)'}}>
                    <input value={c[field]} onChange={e => {
                      const updated = [...form.rubricCriteria];
                      updated[ri] = {...updated[ri], [field]: e.target.value};
                      set('rubricCriteria', updated);
                    }} style={{width:'100%',padding:'8px 10px',borderRadius:8,border:'1px solid rgba(255,255,255,0.06)',background:'rgba(255,255,255,0.03)',color:'#fff',fontSize:13,outline:'none'}}/>
                  </div>
                ))}
                <div style={{padding:4,background:'rgba(255,255,255,0.02)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  {form.rubricCriteria.length > 1 && (
                    <button onClick={()=>set('rubricCriteria',form.rubricCriteria.filter((_,i)=>i!==ri))}
                      style={{background:'none',border:'none',color:'#FF6584',cursor:'pointer',fontSize:18}}>×</button>
                  )}
                </div>
              </>
            ))}
          </div>
        </div>
        <button onClick={()=>set('rubricCriteria',[...form.rubricCriteria,{name:'',superior:'',alto:'',basico:'',bajo:''}])}
          style={{marginTop:12,padding:'10px 20px',borderRadius:10,border:'2px dashed rgba(108,99,255,0.3)',
            background:'transparent',color:'#6C63FF',cursor:'pointer',fontWeight:600,fontSize:14,width:'100%'}}>
          + {t.addCriterion}
        </button>
      </div>
    </div>
  );

  // Step 7: Implementation
  const StepImplementation = () => (
    <div>
      <StepHeader icon="🗓️" title={t.s8Title} desc={t.s8Desc} />
      <div style={{display:'grid',gap:16}}>
        {t.phases.map((phase, i) => (
          <div key={i} style={{
            background:'rgba(255,255,255,0.02)',borderRadius:16,padding:20,
            borderLeft:'4px solid',borderColor:['#4CAF50','#2196F3','#FF9800','#9C27B0'][i],
          }}>
            <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:12}}>
              <span style={{fontSize:24}}>{phase.icon}</span>
              <div>
                <div style={{color:'#fff',fontWeight:700,fontSize:15}}>{phase.name}</div>
                <div style={{color:'#666',fontSize:12}}>{phase.hint}</div>
              </div>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:12}}>
              <Input label={t.activity} value={form.phases[i].activity} onChange={v=>{
                const p=[...form.phases]; p[i]={...p[i],activity:v}; set('phases',p);
              }} />
              <Input label={t.time} value={form.phases[i].time} onChange={v=>{
                const p=[...form.phases]; p[i]={...p[i],time:v}; set('phases',p);
              }} />
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:8}}>
              <Input label={t.resources} value={form.phases[i].resources} onChange={v=>{
                const p=[...form.phases]; p[i]={...p[i],resources:v}; set('phases',p);
              }} />
              <Input label={t.teacherRole} value={form.phases[i].role} onChange={v=>{
                const p=[...form.phases]; p[i]={...p[i],role:v}; set('phases',p);
              }} />
            </div>
          </div>
        ))}
      </div>
      <div style={{marginTop:24}}>
        <div style={{color:'#fff',fontWeight:700,fontSize:15,marginBottom:12}}>{t.specialTitle}</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
          {t.specials.map(s => (
            <button key={s} onClick={()=>toggle('specials',s)} style={{
              padding:'10px 14px',borderRadius:10,border:'2px solid',cursor:'pointer',textAlign:'left',
              borderColor: form.specials.includes(s) ? '#FF9800' : 'rgba(255,255,255,0.06)',
              background: form.specials.includes(s) ? 'rgba(255,152,0,0.1)' : 'transparent',
              color: form.specials.includes(s) ? '#FFB74D' : '#999',fontSize:13,transition:'all 0.2s',
            }}>{form.specials.includes(s) ? '✓ ' : ''}{s}</button>
          ))}
        </div>
        <div style={{marginTop:12}}>
          <TextArea label={t.adaptations} value={form.adaptations} onChange={v=>set('adaptations',v)} />
        </div>
      </div>
    </div>
  );

  // Step 8: Export
  const StepExport = () => (
    <div>
      <div style={{textAlign:'center',marginBottom:32}}>
        <div style={{display:'inline-block',marginBottom:16}}><TrophySVG /></div>
        <h2 style={{color:'#fff',fontSize:28,fontWeight:800,margin:0}}>{t.s9Title}</h2>
        <p style={{color:'#888',fontSize:15,marginTop:6}}>{t.s9Desc}</p>
      </div>

      {/* Quick summary cards */}
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginBottom:24}}>
        {[
          { label: lang==='en'?'Subject':'Asignatura', value: form.subject, icon: '📚' },
          { label: lang==='en'?'Game':'Juego', value: form.gameName, icon: '🎮' },
          { label: lang==='en'?'Grade':'Grado', value: form.grade, icon: '🎓' },
          { label: lang==='en'?'Duration':'Duración', value: form.duration, icon: '⏱️' },
          { label: 'DBA', value: `${form.selectedDbas.length} ${lang==='en'?'selected':'seleccionados'}`, icon: '📜' },
          { label: lang==='en'?'Platform':'Plataforma', value: form.platform, icon: '💻' },
        ].map((item,i) => (
          <div key={i} style={{background:'rgba(255,255,255,0.03)',borderRadius:12,padding:'14px 16px',display:'flex',alignItems:'center',gap:12}}>
            <span style={{fontSize:20}}>{item.icon}</span>
            <div>
              <div style={{color:'#666',fontSize:11,fontWeight:600,textTransform:'uppercase',letterSpacing:1}}>{item.label}</div>
              <div style={{color:'#fff',fontSize:14,fontWeight:600}}>{item.value || '—'}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Export buttons */}
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
        <button onClick={handleDownloadPdf} style={{
          padding:'20px',borderRadius:16,border:'none',cursor:'pointer',
          background:'linear-gradient(135deg,#6C63FF,#5B52E0)',color:'#fff',
          fontSize:16,fontWeight:700,display:'flex',alignItems:'center',justifyContent:'center',gap:10,
          transition:'all 0.3s',boxShadow:'0 4px 20px rgba(108,99,255,0.3)',
        }}>
          <span style={{fontSize:24}}>📄</span> {t.downloadPdf}
        </button>
        <button onClick={()=>setShowEmail(true)} style={{
          padding:'20px',borderRadius:16,border:'none',cursor:'pointer',
          background:'linear-gradient(135deg,#FF6584,#E0456A)',color:'#fff',
          fontSize:16,fontWeight:700,display:'flex',alignItems:'center',justifyContent:'center',gap:10,
          transition:'all 0.3s',boxShadow:'0 4px 20px rgba(255,101,132,0.3)',
        }}>
          <span style={{fontSize:24}}>✉️</span> {t.sendEmail}
        </button>
      </div>

      {/* Email modal */}
      {showEmail && (
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.7)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:100}}
          onClick={()=>setShowEmail(false)}>
          <div onClick={e=>e.stopPropagation()} style={{
            background:'#1a1a2e',borderRadius:20,padding:32,width:'90%',maxWidth:440,
            border:'1px solid rgba(255,255,255,0.1)',boxShadow:'0 20px 60px rgba(0,0,0,0.5)',
          }}>
            <h3 style={{color:'#fff',margin:'0 0 16px',fontSize:20}}>✉️ {t.sendEmail}</h3>
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder={t.emailPrompt}
              style={{width:'100%',padding:'14px 18px',borderRadius:12,border:'1px solid rgba(255,255,255,0.1)',background:'rgba(255,255,255,0.05)',color:'#fff',fontSize:15,marginBottom:16,outline:'none',boxSizing:'border-box'}}/>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
              <button onClick={()=>handleEmail('gmail')} style={{
                padding:'14px',borderRadius:12,border:'none',cursor:'pointer',
                background:'linear-gradient(135deg,#EA4335,#DB4437)',color:'#fff',fontWeight:700,fontSize:14,
              }}>📧 {t.sendGmail}</button>
              <button onClick={()=>handleEmail('outlook')} style={{
                padding:'14px',borderRadius:12,border:'none',cursor:'pointer',
                background:'linear-gradient(135deg,#0078D4,#005A9E)',color:'#fff',fontWeight:700,fontSize:14,
              }}>📧 {t.sendOutlook}</button>
            </div>
            <button onClick={()=>setShowEmail(false)} style={{
              marginTop:12,width:'100%',padding:'12px',borderRadius:12,border:'1px solid rgba(255,255,255,0.1)',
              background:'transparent',color:'#888',cursor:'pointer',fontSize:14,
            }}>{t.cancel}</button>
          </div>
        </div>
      )}
    </div>
  );

  // ─── LANDING ───
  if (step === -1 || (step === 0 && !form.school && !form.teacher)) {
    // We skip landing and go straight to wizard
  }

  const activeStepLabels = isEnglish() ? t.stepLabels : t.stepLabels.filter((_,i) => i !== 2);

  return (
    <div style={{
      minHeight:'100vh',
      background:'linear-gradient(180deg, #0a0a1a 0%, #141428 40%, #1a1a2e 100%)',
      fontFamily:"'DM Sans','Segoe UI',system-ui,sans-serif",
      position:'relative',overflow:'hidden',
    }}>
      {/* Ambient background effects */}
      <div style={{position:'fixed',top:-200,left:-200,width:500,height:500,borderRadius:'50%',
        background:'radial-gradient(circle,rgba(108,99,255,0.08) 0%,transparent 70%)',pointerEvents:'none'}}/>
      <div style={{position:'fixed',bottom:-300,right:-200,width:600,height:600,borderRadius:'50%',
        background:'radial-gradient(circle,rgba(255,101,132,0.06) 0%,transparent 70%)',pointerEvents:'none'}}/>

      {/* Top bar */}
      <div style={{
        position:'sticky',top:0,zIndex:50,
        background:'rgba(10,10,26,0.8)',backdropFilter:'blur(20px)',
        borderBottom:'1px solid rgba(255,255,255,0.05)',padding:'12px 24px',
        display:'flex',alignItems:'center',justifyContent:'space-between',
      }}>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <span style={{fontSize:22}}>🎮</span>
          <span style={{color:'#fff',fontWeight:700,fontSize:15,letterSpacing:0.5}}>GBL Template</span>
        </div>
        <button onClick={()=>setLang(l=>l==='en'?'es':'en')} style={{
          padding:'8px 18px',borderRadius:20,border:'1px solid rgba(255,255,255,0.15)',
          background:'rgba(255,255,255,0.05)',color:'#fff',cursor:'pointer',
          fontSize:13,fontWeight:600,transition:'all 0.3s',display:'flex',alignItems:'center',gap:6,
        }}>
          🌐 {t.langToggle}
        </button>
      </div>

      {/* Progress bar */}
      <div style={{position:'sticky',top:53,zIndex:40,padding:'0 24px'}}>
        <div style={{height:3,background:'rgba(255,255,255,0.05)',borderRadius:2,overflow:'hidden'}}>
          <div style={{
            height:'100%',borderRadius:2,transition:'width 0.5s ease',width:`${progress}%`,
            background:'linear-gradient(90deg,#6C63FF,#FF6584)',
          }}/>
        </div>
        {/* Step indicators */}
        <div style={{display:'flex',justifyContent:'space-between',marginTop:8,paddingBottom:8}}>
          {activeStepLabels.map((label, i) => (
            <button key={i} onClick={()=>goToStep(i)} style={{
              display:'flex',flexDirection:'column',alignItems:'center',gap:4,
              background:'none',border:'none',cursor:'pointer',padding:4,
              opacity: i <= step ? 1 : 0.3,transition:'all 0.3s',
            }}>
              <div style={{
                width:24,height:24,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',
                fontSize:11,fontWeight:700,transition:'all 0.3s',
                background: i < step ? 'linear-gradient(135deg,#4CAF50,#66BB6A)' :
                  i === step ? 'linear-gradient(135deg,#6C63FF,#FF6584)' : 'rgba(255,255,255,0.06)',
                color: i <= step ? '#fff' : '#555',
              }}>{i < step ? '✓' : i + 1}</div>
              <span style={{fontSize:10,color: i === step ? '#fff' : '#555',fontWeight: i === step ? 700 : 400,
                whiteSpace:'nowrap',maxWidth:70,overflow:'hidden',textOverflow:'ellipsis'}}>
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div style={{
        maxWidth:780,margin:'0 auto',padding:'24px 24px 120px',
        opacity: animating ? 0 : 1,
        transform: animating ? 'translateY(12px)' : 'translateY(0)',
        transition:'all 0.3s ease',
      }}>
        {renderStep()}
      </div>

      {/* Bottom nav */}
      <div style={{
        position:'fixed',bottom:0,left:0,right:0,
        background:'rgba(10,10,26,0.9)',backdropFilter:'blur(20px)',
        borderTop:'1px solid rgba(255,255,255,0.05)',padding:'16px 24px',
        display:'flex',justifyContent:'space-between',alignItems:'center',zIndex:50,
      }}>
        <button onClick={goBack} disabled={step===0} style={{
          padding:'12px 24px',borderRadius:12,border:'1px solid rgba(255,255,255,0.1)',
          background:'transparent',color: step===0 ? '#333' : '#fff',cursor: step===0?'default':'pointer',
          fontSize:14,fontWeight:600,transition:'all 0.3s',
        }}>← {t.back}</button>
        <span style={{color:'#555',fontSize:13,fontWeight:600}}>{step+1} / {totalSteps}</span>
        <button onClick={goNext} disabled={step===totalSteps-1} style={{
          padding:'12px 28px',borderRadius:12,border:'none',
          background: step===totalSteps-1 ? '#333' : 'linear-gradient(135deg,#6C63FF,#FF6584)',
          color:'#fff',cursor: step===totalSteps-1?'default':'pointer',
          fontSize:14,fontWeight:700,transition:'all 0.3s',
          boxShadow: step<totalSteps-1 ? '0 4px 16px rgba(108,99,255,0.3)' : 'none',
        }}>{step===totalSteps-2 ? t.finish : t.next} →</button>
      </div>
    </div>
  );
}

// ─── REUSABLE UI COMPONENTS ───
function StepHeader({ icon, title, desc }) {
  return (
    <div style={{marginBottom:24}}>
      <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:6}}>
        <span style={{fontSize:32}}>{icon}</span>
        <h2 style={{color:'#fff',fontSize:24,fontWeight:800,margin:0}}>{title}</h2>
      </div>
      <p style={{color:'#888',fontSize:14,margin:0,paddingLeft:44}}>{desc}</p>
    </div>
  );
}

function Input({ label, value, onChange, type = "text", full }) {
  return (
    <div>
      <label style={{color:'#aaa',fontSize:12,fontWeight:600,display:'block',marginBottom:6,textTransform:'uppercase',letterSpacing:0.5}}>{label}</label>
      <input type={type} value={value} onChange={e=>onChange(e.target.value)} style={{
        width:'100%',padding:'12px 16px',borderRadius:10,
        border:'1px solid rgba(255,255,255,0.08)',background:'rgba(255,255,255,0.04)',
        color:'#fff',fontSize:14,outline:'none',transition:'border-color 0.2s',boxSizing:'border-box',
      }}
      onFocus={e=>e.target.style.borderColor='rgba(108,99,255,0.4)'}
      onBlur={e=>e.target.style.borderColor='rgba(255,255,255,0.08)'}
      />
    </div>
  );
}

function TextArea({ label, value, onChange, hint, color }) {
  return (
    <div>
      <label style={{color: color || '#aaa',fontSize:12,fontWeight:600,display:'block',marginBottom:6,textTransform:'uppercase',letterSpacing:0.5}}>{label}</label>
      {hint && <div style={{color:'#555',fontSize:11,marginBottom:6,fontStyle:'italic'}}>{hint}</div>}
      <textarea value={value} onChange={e=>onChange(e.target.value)} rows={3} style={{
        width:'100%',padding:'12px 16px',borderRadius:10,resize:'vertical',
        border:'1px solid rgba(255,255,255,0.08)',background:'rgba(255,255,255,0.04)',
        color:'#fff',fontSize:14,outline:'none',fontFamily:'inherit',transition:'border-color 0.2s',boxSizing:'border-box',
      }}
      onFocus={e=>e.target.style.borderColor='rgba(108,99,255,0.4)'}
      onBlur={e=>e.target.style.borderColor='rgba(255,255,255,0.08)'}
      />
    </div>
  );
}

function Select({ label, value, options, onChange }) {
  return (
    <div>
      <label style={{color:'#aaa',fontSize:12,fontWeight:600,display:'block',marginBottom:6,textTransform:'uppercase',letterSpacing:0.5}}>{label}</label>
      <select value={value} onChange={e=>onChange(e.target.value)} style={{
        width:'100%',padding:'12px 16px',borderRadius:10,
        border:'1px solid rgba(255,255,255,0.08)',background:'#1a1a2e',
        color:'#fff',fontSize:14,outline:'none',cursor:'pointer',appearance:'auto',
      }}>
        <option value="">—</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function Chip({ label, selected, onClick, small }) {
  return (
    <button onClick={onClick} style={{
      padding: small ? '6px 12px' : '8px 16px',borderRadius:20,
      border:'1.5px solid',cursor:'pointer',transition:'all 0.2s',
      fontSize: small ? 12 : 13,fontWeight:600,
      borderColor: selected ? '#6C63FF' : 'rgba(255,255,255,0.08)',
      background: selected ? 'rgba(108,99,255,0.15)' : 'transparent',
      color: selected ? '#a5a0ff' : '#888',
    }}>{label}</button>
  );
}
