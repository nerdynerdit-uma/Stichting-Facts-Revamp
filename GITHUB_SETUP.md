# GitHub Setup Instructions

## Step 1: Create Repository on GitHub
1. Go to https://github.com/new
2. Repository name: Choose a name (e.g., `Stichting-Facts-Revamp` or `stichting-facts-website`)
3. Description: "Website for Stichting Facts"
4. Set to Public or Private as preferred
5. **DO NOT** check "Initialize this repository with a README"
6. Click "Create repository"

## Step 2: Connect and Push
After creating the repository, run these commands in your terminal:

```bash
cd "c:\Users\nerdy\Cursor\Stichting Facts Revamp"

# Add the remote (replace YOUR-REPO-NAME with your actual repository name)
git remote add origin https://github.com/NNIT-UMA/YOUR-REPO-NAME.git

# Push to GitHub
git push -u origin main
```

## Step 3: Deploy to Vercel
1. Go to https://vercel.com
2. Sign in with your GitHub account
3. Click "New Project"
4. Import your repository (NNIT-UMA/YOUR-REPO-NAME)
5. Vercel will auto-detect it's a static site
6. Click "Deploy"

The site will be live at a vercel.app URL!
