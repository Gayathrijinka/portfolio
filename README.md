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
npm run preview
```

---

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
