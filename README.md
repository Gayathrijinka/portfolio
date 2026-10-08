# Gayathri J — Personal Developer Portfolio

Modern, professional, responsive developer portfolio for **Gayathri J** (AI/ML Engineer & Full Stack Developer). Built using **React**, **Vite**, and **Tailwind CSS**.

---

## 🚀 Live Local Development

- **Local URL:** `http://localhost:5173/`
- **Network URL:** `http://<your-ip>:5173/`

### Commands:
```bash
# Navigate to portfolio folder
cd portfolio

# Install dependencies
npm install

# Start local dev server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Architecture

```
portfolio/
├── public/
│   ├── favicon.svg                       # Custom branded developer favicon
│   ├── resume/
│   │   └── Gayathri_J_Resume.pdf         # Primary downloadable resume PDF
│   └── certificates/
│       ├── SmartBridge_ML_Certificate.pdf
│       ├── DSA_Java_GreatLearning.jpg
│       ├── GenAI_ChatGPT_Certificate.pdf
│       └── Databricks_Generative_AI.pdf
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx                    # Sticky navigation with mobile drawer & active section spy
│   │   ├── Hero.jsx                      # First-screen hero with CTAs, socials, & AI visual card
│   │   ├── HeroVisual.jsx                # High-tech interactive AI/ML pipeline terminal card
│   │   ├── About.jsx                     # Bio, core facts, and verified metrics
│   │   ├── Skills.jsx                    # Categorized skill badges (AI/ML, Web, Langs, DBs, Tools)
│   │   ├── Projects.jsx                  # Capstone spotlight & project cards with visual flows
│   │   ├── ProjectModal.jsx              # Comprehensive 10-point project details modal
│   │   ├── Experience.jsx                # "Learning & Building" student focus & methodology
│   │   ├── Certifications.jsx            # Verified credentials with instant modal preview
│   │   ├── CertificateModal.jsx          # In-browser certificate viewer (PDF & image)
│   │   ├── Education.jsx                 # Academic timeline for VIT-AP University (2023–2027)
│   │   ├── ResumeSection.jsx             # Dedicated resume CTA section
│   │   ├── ResumeModal.jsx               # Embedded PDF resume preview modal
│   │   ├── Contact.jsx                   # Contact channels, email copy button, & message composer
│   │   ├── Footer.jsx                    # Copyright, titles, back-to-top, & social links
│   │   └── Icons.jsx                     # Pixel-perfect GitHub & LinkedIn SVG icons
│   │
│   ├── data/
│   │   ├── personalInfo.js               # Name, contact info, bio, & social URLs
│   │   ├── projects.js                   # All 5 projects with full architecture & modal data
│   │   ├── skills.js                     # Categorized skills list
│   │   ├── certifications.js             # Verified certifications and file links
│   │   └── education.js                  # Education history & "Learning & Building" focus areas
│   │
│   ├── App.jsx                           # Application root layout
│   ├── index.css                         # Tailwind CSS styling, glassmorphism, animations
│   └── main.jsx                          # React 19 entry point
│
├── index.html                            # SEO meta tags, OpenGraph, Inter & JetBrains Mono fonts
├── package.json
└── vite.config.js
```

---

## 🛠️ How to Customize

All data is decoupled into clean files under `src/data/`:

1. **Personal Information, Email, LinkedIn & Bio:**
   - Edit `src/data/personalInfo.js`.
   - Update `socials.linkedin` with your custom LinkedIn handle.
   - Update `socials.email` with your preferred contact address.

2. **Resume PDF:**
   - To replace or update your resume, simply replace the file at:
     `portfolio/public/resume/Gayathri_J_Resume.pdf`

3. **Projects:**
   - Edit `src/data/projects.js` to modify descriptions, GitHub repo links, live demo links, or add new projects.

4. **Skills:**
   - Edit `src/data/skills.js` to add or modify technical skills.

5. **Certifications:**
   - Edit `src/data/certifications.js` and add certificates to `public/certificates/`.

---

## 🌐 Deployment (Render / Vercel / Netlify / GitHub Pages)

- **Vercel / Netlify:**
  - Build command: `npm run build`
  - Output directory: `dist`
- **Render (Static Site):**
  - Build command: `npm run build`
  - Publish directory: `dist`
