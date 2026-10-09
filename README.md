# Gayathri J — Personal Developer Portfolio Website

A modern, production-quality personal developer portfolio website for **Gayathri J**, Computer Science and Engineering student at **VIT-AP University**, specializing in **Artificial Intelligence, Machine Learning, and Full-Stack Development**.

Built with **React**, **Vite**, **Lucide Icons**, and a custom **Modern Slate & Navy Design System**.

---

## 🌟 Key Features

- **Professional Hero Section:** Features Gayathri's actual photograph, professional headline, academic standing at VIT-AP (CGPA: 8.96), and prominent Call-to-Action buttons.
- **Direct Resume Access:** One-click download button pointing to the local, verified PDF resume (`./assets/resume.pdf`).
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
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated zero-config deployment to GitHub Pages
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
Vite will start the local server at `http://localhost:3000`.

---

## 🔨 Building for Production

To create an optimized production build:
```bash
npm run build
```
This generates a static `dist/` directory containing minified HTML, CSS, JavaScript, and assets ready for deployment.

To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Automatic Deployment via GitHub Actions (Recommended)

This repository includes `.github/workflows/deploy.yml`. When pushed to GitHub:
1. Go to your repository settings on GitHub: **Settings &rarr; Pages**.
2. Under **Build and deployment &rarr; Source**, select **GitHub Actions**.
3. Every time you push to the `main` branch, GitHub Actions will automatically build and publish your portfolio with 0 errors to:
   `https://Gayathrijinka.github.io/portfolio/`

---

## 📄 Alternative: Deploy to GitHub Pages via gh-pages

If you prefer deploying via terminal command:
```bash
npm run deploy
```
This runs `vite build` and pushes the `dist/` folder directly to the `gh-pages` branch.
In GitHub **Settings &rarr; Pages**, choose branch `gh-pages` and folder `/ (root)`.

---

## ⚡ Deploy to Vercel (Fast Alternative)
1. Go to [Vercel](https://vercel.com/) and connect your GitHub account.
2. Import `Gayathrijinka/portfolio`.
3. Framework Preset: **Vite** (detected automatically).
4. Click **Deploy**.
