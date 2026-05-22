# GitHub Setup Instructions

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `arabic-learning-html`
3. Description: `A multilingual educational platform for learning Arabic for non-native speakers using pure HTML, CSS, and JavaScript`
4. Make it Public or Private (your choice)
5. DO NOT initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 2: Initialize Git and Push

Open Command Prompt or PowerShell in the project directory:

```bash
cd c:\Users\dell\CascadeProjects\arabic-learning-html
git init
git add .
git commit -m "Initial commit: Arabic learning platform with HTML/CSS/JS"
git remote add origin https://github.com/YOUR_USERNAME/arabic-learning-html.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Deploy to Netlify

### Option 1: Drag and Drop (Easiest)

1. Go to https://app.netlify.com/drop
2. Drag the `arabic-learning-html` folder and drop it
3. Wait for deployment to complete
4. Your site will be live!

### Option 2: Connect GitHub Repository

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Select GitHub
4. Choose the `arabic-learning-html` repository
5. Configure build settings:
   - Build command: (leave empty)
   - Publish directory: (leave empty or set to `.`)
6. Click "Deploy site"

## Project Files

- `index.html` - Main HTML file with multi-language structure
- `style.css` - Responsive CSS with RTL/LTR support
- `script.js` - JavaScript with language switching logic
- Supports 4 languages: Arabic (RTL), English, Russian, Uzbek (LTR)

## Features

- Multi-language support (Arabic, English, Russian, Uzbek)
- RTL/LTR automatic direction switching
- Responsive design
- Language persistence using localStorage
- Clean, modern UI with gradient background
- Ready for Netlify deployment

## Testing Locally

Simply open `index.html` in your browser to test the site locally.
