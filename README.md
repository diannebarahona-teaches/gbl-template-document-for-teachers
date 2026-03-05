# 🎮 GBL Template — Game-Based Learning & Assessment

An interactive wizard for teachers to design game-based learning activities aligned with Colombian educational standards (DBA), the Ser/Saber/Saber Hacer competency framework, and the CEFR for English.

## Features

- 🌐 **Bilingual** — Toggle between English and Spanish
- 🔀 **Branching logic** — Only shows relevant sections (e.g., CEFR step skipped for non-English subjects)
- 📋 **Step-by-step wizard** — 9 guided steps so teachers aren't overwhelmed
- 📄 **PDF export** — Download the completed template as a formatted PDF
- ✉️ **Email sharing** — Send via Gmail or Outlook directly from the app
- 🎨 **Game-inspired dark UI** — Visually engaging design with gradient accents

## Quick Deploy with Vercel (Recommended)

1. Upload this entire folder to a new GitHub repository
2. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
3. Click **Add New Project** → Import your repository
4. Click **Deploy** — done! Your app is live in ~60 seconds

## Alternative: GitHub Pages

If you prefer a `github.io` URL:

1. Edit `vite.config.js` and add: `base: '/your-repo-name/',`
2. Push to GitHub
3. Go to repo **Settings → Pages → Source → GitHub Actions**
4. The included workflow file (`.github/workflows/deploy.yml`) handles the rest

## Local Development (Optional)

If you want to test locally before deploying:

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

## Project Structure

```
gbl-template/
├── index.html              ← Web page shell
├── package.json            ← Dependencies
├── vite.config.js          ← Build configuration
├── README.md               ← This file
├── .github/
│   └── workflows/
│       └── deploy.yml      ← Auto-deploy to GitHub Pages
└── src/
    ├── main.jsx            ← React entry point
    └── App.jsx             ← The GBL Template wizard component
```

## Standards Covered

- **DBA** (Derechos Básicos de Aprendizaje) — English, Math, Language Arts, Natural Sciences, Social Sciences
- **Ser / Saber / Saber Hacer** — Colombian competency framework
- **CEFR** (Common European Framework of Reference) — For English language classes
- **Colombian national grading scale** — Superior, Alto, Básico, Bajo

---

Built with React + Vite ⚡
