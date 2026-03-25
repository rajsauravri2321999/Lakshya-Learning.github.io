# 🎓 Lakshya Learning — Official Website

Premium coaching institute website for **Subham Raj** | Maths & Science Expert | Ranchi, Jharkhand

![Lakshya Learning Preview](https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80)

---

## 🚀 Features

- ✅ Fully responsive (Mobile, Tablet, Desktop)
- ✅ Animated hero section with tutor card
- ✅ Course listings — Maths & Science, Class 6–12
- ✅ Online & Offline class mode showcase
- ✅ Fee structure with toggle (Offline / Online)
- ✅ Real student testimonials
- ✅ Scroll-reveal animations & counter stats
- ✅ Contact form with validation
- ✅ WhatsApp floating button
- ✅ Sticky navbar with scroll effect
- ✅ Google Fonts + Font Awesome icons
- ✅ Zero external JS dependencies (Vanilla JS)

---

## 📁 Project Structure

```
lakshya-learning/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles (CSS variables, responsive)
├── js/
│   └── script.js       # Navbar, counters, form, animations
├── README.md
└── .gitignore
```

---

## 🌐 Deploy to GitHub Pages (Step-by-Step)

### 1. Initialize Git & Push to GitHub

```bash
# Navigate to the project folder
cd lakshya-learning

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Lakshya Learning website"

# Create a new repo on GitHub (github.com/new), then:
git remote add origin https://github.com/YOUR_USERNAME/lakshya-learning.git
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select branch: `main`, folder: `/ (root)`
4. Click **Save**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/lakshya-learning`

### 3. Custom Domain (Optional)

If you have a custom domain like `lakshyalearning.in`:

```bash
# Create a CNAME file
echo "lakshyalearning.in" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

Then in your domain registrar (GoDaddy, Namecheap etc.), add these DNS records:

| Type  | Host | Value                        |
|-------|------|------------------------------|
| A     | @    | 185.199.108.153              |
| A     | @    | 185.199.109.153              |
| A     | @    | 185.199.110.153              |
| A     | @    | 185.199.111.153              |
| CNAME | www  | YOUR_USERNAME.github.io      |

---

## ⚡ Alternative: Deploy to Netlify (Drag & Drop)

1. Go to [netlify.com](https://netlify.com) → Sign up free
2. Click **"Add new site"** → **"Deploy manually"**
3. Drag and drop the entire `lakshya-learning/` folder
4. Live in 30 seconds at a free `.netlify.app` domain
5. Add custom domain from Site Settings → Domain management

---

## ✏️ Customization Guide

### Update Contact Details
In `index.html`, search for and replace:
- `+91 98765 43210` → Your real phone number
- `subham@lakshyalearning.in` → Your real email
- `Kanke Road, Ranchi, Jharkhand — 834008` → Your real address
- WhatsApp link: `https://wa.me/919876543210` → Replace with your number

### Update Fees
Search for `₹1,500`, `₹2,000`, `₹2,500` etc. in `index.html` and update accordingly.

### Update Tutor Photo
Replace the Unsplash URL in the hero section with a real photo:
```html
<img src="YOUR_PHOTO_URL_OR_PATH" alt="Subham Raj" class="tutor-img"/>
```
Or place a photo in the `images/` folder and reference as `images/subham.jpg`.

### Change Colors
All colors are CSS variables in `css/style.css`:
```css
:root {
  --primary: #1a3a5c;      /* Deep Navy Blue */
  --accent: #f5a623;       /* Golden Orange */
  --accent-2: #e8395a;     /* Red accent */
  --dark: #0d1b2a;         /* Very dark bg */
}
```

---

## 📞 Support

For customizations or issues, contact: subham@lakshyalearning.in

---

© 2025 Lakshya Learning. All Rights Reserved.
