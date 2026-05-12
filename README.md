# Emcent Portfolio

**Emekwue Innocent Chukwuemeka** — MSc IT Management graduate, London.

Built with **React + Vite + Tailwind CSS**. Deployed on Vercel.

## Tech Stack

- React 18 + Vite
- Tailwind CSS v3
- Formspree (contact form)
- Vercel (deployment)

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Before deploying

1. **Formspree**: Go to [formspree.io](https://formspree.io), create a free account, create a new form, and replace `YOUR_FORM_ID` in `src/data/index.js` with your actual form ID.

2. **Deploy to Vercel**: Push to GitHub, connect repo on [vercel.com](https://vercel.com), deploy. Done.

## Updating content

All portfolio content lives in **`src/data/index.js`**. To update projects, certifications, experience, or personal details — edit that file only. No component code needs to change.

## Project structure

```
src/
├── components/
│   ├── nav/         Nav.jsx
│   ├── hero/        Hero.jsx
│   ├── about/       About.jsx
│   ├── skills/      Skills.jsx
│   ├── projects/    Projects.jsx
│   ├── experience/  Experience.jsx
│   ├── contact/     Contact.jsx
│   ├── footer/      Footer.jsx
│   └── ui/          Monogram.jsx, Divider.jsx
├── data/            index.js  ← edit this
├── hooks/           useTheme.js
├── App.jsx
├── main.jsx
└── index.css
```
