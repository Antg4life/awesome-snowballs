# Awesome Snoballs Website — Setup Guide

## Step 1: Install Node.js

Go to https://nodejs.org and download the **LTS version** (recommended).
Install it, then **restart your terminal / VS Code**.

## Step 2: Install Dependencies

Open a terminal in this folder (`awesome-snoballs/`) and run:

```bash
npm install
```

## Step 3: Run the Development Server

```bash
npm run dev
```

Open your browser to **http://localhost:3000** — the site is live!

## Step 4: Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       ← Root layout (fonts, metadata, SEO)
│   ├── page.tsx         ← Main page (imports all sections)
│   └── globals.css      ← Global styles, animations
├── components/
│   ├── Navigation.tsx   ← Sticky nav, mobile hamburger menu
│   ├── Hero.tsx         ← Full-screen hero with floating emojis
│   ├── Flavors.tsx      ← Interactive flavor menu with category tabs
│   ├── About.tsx        ← Story, values, social links
│   ├── Testimonials.tsx ← Customer reviews section
│   ├── FindUs.tsx       ← Hours, truck tracking, event booking
│   ├── Contact.tsx      ← Contact form
│   └── Footer.tsx       ← Footer with links, social, CTA
└── lib/
    └── utils.ts         ← Tailwind class merge utility
```

## Customization Checklist

- [ ] **Phone number** — Update in `FindUs.tsx`
- [ ] **Hours** — Update the `hours` array in `FindUs.tsx`  
- [ ] **Address/service area** — Update in `FindUs.tsx`
- [ ] **Flavors** — Edit the `categories` array in `Flavors.tsx`
- [ ] **Add real photos** — Drop images in `/public/` and use `<Image>` tags
- [ ] **Contact form** — Connect to a service like Formspree, EmailJS, or your backend
- [ ] **Colors** — Adjust brand colors in `tailwind.config.ts`

## Deploying to the Web

### Vercel (Free, Easiest)
1. Create account at https://vercel.com
2. Connect your GitHub repo
3. Click Deploy — done!

### Netlify
1. Run `npm run build`
2. Upload the `.next` folder to Netlify

### HostGator (your current host)
For HostGator, export as static:
```bash
# Add to next.config.js:  output: 'export'
npm run build
# Upload the `out/` folder to HostGator via cPanel File Manager
```
