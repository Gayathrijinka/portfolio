<<<<<<< HEAD
# Gayathri J — Personal Developer Portfolio Website

A modern, production-quality personal developer portfolio website for **Gayathri J**, Computer Science and Engineering student at **VIT-AP University**, specializing in **Artificial Intelligence, Machine Learning, and Full-Stack Development**.

Built with **React**, **Vite**, **Lucide Icons**, and a custom **Modern Slate & Navy Design System**.

---

## 🌟 Key Features

- **Professional Hero Section:** Features Gayathri's actual photograph, professional headline, academic standing at VIT-AP (CGPA: 8.96), and prominent Call-to-Action buttons.
- **Direct Resume Access:** One-click download button pointing to the local, verified PDF resume (`/assets/resume.pdf`).
- **Comprehensive Education Timeline:** Details education from VIT-AP University (B.Tech CSE), Narayana Junior College (95%), and AP Model School (92%).
- **Categorized Technical Skills:** Clean, structured category cards covering AI/ML, Generative AI & LLMs, Programming Languages, Full-Stack Web Development, Core Computer Science, and Developer Tools.
- **Featured Projects Showcase:**
  - **AnemiaSense:** AI-powered anemia prediction system using clinical features and Random Forest with Flask REST APIs and GitHub Pages deployment. Includes academic and educational context disclaimer.
  - **CineBook:** AI-based movie and book recommendation engine using TF-IDF, Cosine Similarity, Truncated SVD, Google Gemini AI, and Flask APIs. Includes a helpful note regarding Render free-tier cold-start delays.
  - **EmpowerHer:** Multilingual web platform connecting rural women with skill training and localized job opportunities.
- **Verified Certifications:** Includes Google-collaborated Machine Learning (SmartBridge), Full Stack Java Development (Simplilearn), and Generative AI (GeeksforGeeks) with direct verified document links, alongside OOP and DSA in Java.
- **Coding & Professional Profiles:** One-click direct external links to LinkedIn, GitHub, and LeetCode.
- **Direct Contact System:** Displays verified email (`gayathrijinka2005@gmail.com`) with instant one-click clipboard copying, phone number, and an interactive email dispatch form.
- **Performance & Accessibility:** Fully responsive across all devices (mobile, tablet, desktop), supports prefers-reduced-motion, keyboard navigation, and zero heavy dependencies.

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   └── assets/
│       ├── profile-photo.jpg   # Gayathri's profile photograph (1000x981)
│       ├── photo.jpeg          # Original photo backup
│       ├── resume.pdf          # Official resume PDF
│       └── Resume.pdf          # Original resume backup
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky frosted header with mobile drawer
│   │   ├── Hero.jsx            # Hero banner, photo card, and quick CTAs
│   │   ├── About.jsx           # Narrative bio, stats, and engineering pillars
│   │   ├── Education.jsx       # VIT-AP, Intermediate, and Secondary timeline
│   │   ├── Skills.jsx          # Categorized technical competencies & filter pills
│   │   ├── Projects.jsx        # Project cards with demo links & notices
│   │   ├── Certifications.jsx  # Credential grid with authentic Drive links
│   │   ├── CodingProfiles.jsx  # LinkedIn, GitHub, and LeetCode profile cards
│   │   ├── Contact.jsx         # Direct contact details, copy email, message form
│   │   └── Footer.jsx          # Quick navigation, social links, back-to-top button
│   ├── App.jsx                 # Master application layout
│   ├── index.css               # Design system tokens, utilities, and animations
│   └── main.jsx                # React DOM entry point
├── index.html                  # HTML5 document with SEO meta and Google Fonts
├── vite.config.js              # Vite configuration (relative base path enabled)
├── package.json                # Project dependencies and run scripts
└── README.md                   # Documentation and deployment manual
```

---

## 🚀 Running the Project Locally

### Prerequisites
- **Node.js**: v18.0.0 or later (v24.12+ recommended)
- **npm**: v9.0.0 or later

### 1. Open Terminal in the Project Folder
Open VS Code, press ``Ctrl + ` `` to open the integrated terminal, and ensure you are in the project folder:
```powershell
cd "C:\Users\gayat\OneDrive\Documents\portfolio"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Vite will start the local server (typically at `http://localhost:3000` or `http://localhost:5173`). Open the URL in your browser to view the live website with instant hot module replacement (HMR).

---

## 🔨 Building for Production

To create an optimized production build:
```bash
npm run build
```
This generates a static `dist/` directory containing minified HTML, CSS, JavaScript, and assets ready for deployment on any static web host.

To preview the production build locally:
```bash
=======
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
>>>>>>> b72595f837fac1e93958dcddb823daed8d5c55ae
npm run preview
```

---

<<<<<<< HEAD
## 🖼️ How to Replace Your Photo or Resume in the Future

### Replacing Your Photo:
1. Save your new photo as a JPG or PNG.
2. Rename it to `profile-photo.jpg`.
3. Place it inside the `public/assets/` directory:
   `C:\Users\gayat\OneDrive\Documents\portfolio\public\assets\profile-photo.jpg`
4. The website will automatically update to show your new photo.

### Replacing Your Resume:
1. Export your updated resume as a PDF file.
2. Name it `resume.pdf`.
3. Place it inside the `public/assets/` directory:
   `C:\Users\gayat\OneDrive\Documents\portfolio\public\assets\resume.pdf`
4. All download buttons on the site will automatically download your latest PDF.

---

## 🌐 Deployment Instructions

### Option 1: Deploy to Vercel (Recommended — Simplest & Fastest)
1. Push your portfolio code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Gayathri J Portfolio"
   git branch -M main
   git remote add origin https://github.com/Gayathrijinka/portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
3. Click **"Add New Project"** and select your `portfolio` repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**. Your portfolio will be live with a free custom SSL domain (e.g. `gayathri-j.vercel.app`) in under 60 seconds!

### Option 2: Deploy to GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run the deploy command:
   ```bash
   npm run deploy
   ```
4. In your GitHub repository settings, navigate to **Pages** and verify the source is set to branch `gh-pages` and folder `/ (root)`. Your portfolio will be accessible at `https://Gayathrijinka.github.io/portfolio/`.

---

## 📄 License & Attribution
Designed and built for **Gayathri J**. Original assets and information are protected and curated for academic and professional recruiting use.
=======
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
>>>>>>> b72595f837fac1e93958dcddb823daed8d5c55ae
