# [YOUR NAME] — Personal Portfolio

A professional dark-theme personal portfolio website.

---

## 📁 Folder Structure

```
portfolio/
│
├── index.html              ← Main HTML (all sections)
│
├── css/
│   └── style.css           ← All styles (variables, layout, animations)
│
├── js/
│   └── main.js             ← Loader, cursor, scroll, form, parallax
│
└── assets/
    ├── favicon/
    │   ├── favicon.png         ← 32×32 browser tab icon
    │   └── apple-touch-icon.png ← 180×180 iOS icon
    │
    ├── images/
    │   ├── profile.jpg         ← Your profile/about photo (4:5 ratio recommended)
    │   ├── og-preview.jpg      ← Social media preview image (1200×630)
    │   ├── project-1.jpg       ← Screenshot for Project 1
    │   ├── project-2.jpg       ← Screenshot for Project 2
    │   └── project-3.jpg       ← Screenshot for Project 3
    │
    ├── icons/                  ← Any extra SVG or PNG icons
    │
    └── files/
        └── resume.pdf          ← Your downloadable CV/Resume
```

---

## ✏️ How to Customize (All Placeholders)

Search for `[` in each file — every placeholder is wrapped in square brackets.

### index.html
| Placeholder | Replace with |
|---|---|
| `[YOUR NAME]` | Your full name |
| `[YOUR INITIALS]` | e.g. "JD" (shown in loader) |
| `[YOUR TITLE]` | e.g. "Full-Stack Developer" |
| `[A short tagline]` | One punchy line about you |
| `[Your First Name]` | First name (large hero text) |
| `[yourusername]` | GitHub / LinkedIn / Twitter handles |
| `[your@email.com]` | Your email address |
| `[+977 xxx-xxx-xxxx]` | Your phone number |
| `[Your City, Country]` | e.g. "Kathmandu, Nepal" |
| `[YOUR_FORM_ID]` | Formspree form ID (see below) |
| `[Project Name]` | Name of each project |
| `[live-url]` / `[github-url]` | Links for each project |
| `[Tech 1]`, `[Tech 2]`... | Technologies used |
| `[Year]` | e.g. "2024" |

### Assets to Add
- Drop your **profile photo** → `assets/images/profile.jpg`
- Drop your **resume** → `assets/files/resume.pdf`
- Drop your **project screenshots** → `assets/images/project-1.jpg` etc.
- Add a **favicon** → `assets/favicon/favicon.png`

---

## 📬 Contact Form Setup (Free)

1. Go to [formspree.io](https://formspree.io) and sign up (free)
2. Create a new form → copy the Form ID (looks like `xpwzjrqo`)
3. In `index.html`, replace `[YOUR_FORM_ID]` with your ID:
   ```html
   action="https://formspree.io/f/xpwzjrqo"
   ```

---

## 🚀 Deploying (Free Options)

| Platform | Steps |
|---|---|
| **GitHub Pages** | Push to GitHub repo → Settings → Pages → Deploy from `/root` |
| **Netlify** | Drag & drop the `portfolio/` folder at netlify.com/drop |
| **Vercel** | `vercel` CLI or drag-drop at vercel.com |

---

## 🎨 Changing the Accent Color

In `css/style.css`, find `:root` at the top and change `--accent`:
```css
--accent: #c9a96e;  /* Gold (default) */
/* Try: #64ffda (cyan), #ff6b6b (coral), #a78bfa (purple) */
```

---

Built with pure HTML, CSS & vanilla JS. No frameworks needed.
