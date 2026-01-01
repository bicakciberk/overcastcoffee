# Overcast Coffee Website - Deployment Guide

## 📦 Project Overview
Modern, responsive café website for Overcast Coffee Company built with React and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn installed
- Git (optional)

### Installation Steps

1. **Extract the ZIP file**
   ```bash
   unzip overcast-coffee-website.zip
   cd frontend
   ```

2. **Install Dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Run Locally**
   ```bash
   yarn start
   # or
   npm start
   ```
   
   The site will open at `http://localhost:3000`

4. **Build for Production**
   ```bash
   yarn build
   # or
   npm run build
   ```
   
   This creates a `build/` folder with optimized production files.

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd frontend
   vercel
   ```
   
   Follow the prompts. Vercel will auto-detect React and configure everything.

3. **Or Deploy via Vercel Website**
   - Go to https://vercel.com
   - Click "Add New" → "Project"
   - Import your Git repository or drag the `frontend` folder
   - Vercel auto-configures React projects
   - Click "Deploy"

### Option 2: Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**
   ```bash
   cd frontend
   yarn build
   netlify deploy --prod --dir=build
   ```

3. **Or Deploy via Netlify Website**
   - Go to https://netlify.com
   - Drag the `build` folder to the deploy drop zone
   - Or connect your Git repository

### Option 3: GitHub Pages

1. **Add to package.json**
   ```json
   "homepage": "https://yourusername.github.io/overcast-coffee"
   ```

2. **Install gh-pages**
   ```bash
   yarn add -D gh-pages
   ```

3. **Add deploy scripts to package.json**
   ```json
   "scripts": {
     "predeploy": "yarn build",
     "deploy": "gh-pages -d build"
   }
   ```

4. **Deploy**
   ```bash
   yarn deploy
   ```

### Option 4: Traditional Web Hosting (cPanel, etc.)

1. **Build the project**
   ```bash
   yarn build
   ```

2. **Upload files**
   - Upload everything from the `build` folder to your web root (e.g., `public_html`)
   - Ensure `.htaccess` file includes React routing rules:
   
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

## 📁 Project Structure

```
frontend/
├── public/              # Static files
│   └── index.html      # HTML template
├── src/
│   ├── App.js          # Main component with all sections
│   ├── App.css         # All styling
│   ├── index.js        # Entry point
│   ├── index.css       # Global styles
│   ├── components/     # UI components (optional)
│   └── lib/            # Utility functions
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
├── craco.config.js     # CRACO configuration
└── .env               # Environment variables
```

## 🎨 Customization

### Colors
Edit colors in `/src/App.css`:
- Primary: `#F5F3EF` (cream background)
- Secondary: `#8B6F47` (warm brown)
- Accent: `#D4B896` (light coffee)
- Dark: `#3E2723` (dark brown)

### Content
Edit content in `/src/App.js`:
- Hero section (lines 54-67)
- About section (lines 72-101)
- Locations (lines 107-249)
- Contact (lines 254-312)

### Images
Replace image URLs in `/src/App.js` with your own:
- Hero background: line 119 in App.css
- About images: lines 82-95
- Contact image: line 275

### Google Maps
Update map embed URLs in location cards (lines 183 and 234) with your actual locations.

## 🔧 Environment Variables

The `.env` file contains:
```
REACT_APP_BACKEND_URL=https://your-domain.com
WDS_SOCKET_PORT=443
ENABLE_HEALTH_CHECK=false
```

For static deployment, you can ignore the backend URL or remove it if not needed.

## 📱 Features Included

✅ Fully responsive design (mobile, tablet, desktop)
✅ Smooth scroll navigation
✅ Interactive hover effects
✅ Google Maps integration
✅ Contact links (email, phone, Instagram)
✅ Modern CSS animations
✅ Accessibility features (data-testids)
✅ SEO-friendly structure
✅ Fast loading times
✅ Production-optimized build

## 🐛 Troubleshooting

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json yarn.lock
yarn install
yarn build
```

### Port already in use
```bash
# Use different port
PORT=3001 yarn start
```

### Images not loading
- Ensure image URLs are accessible
- Check browser console for CORS errors
- Use relative paths for local images

## 📞 Support

For issues or questions:
- Check the console for error messages
- Verify all dependencies are installed
- Ensure Node.js version is 16 or higher

## 📄 License

This project is ready for commercial use.

---

**Built with ❤️ for Overcast Coffee Company**
