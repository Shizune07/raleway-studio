#!/bin/bash
cd "$(dirname "$0")"

echo "=== Raleway Studio — Push to GitHub ==="
echo ""

# Check for git
if ! command -v git &> /dev/null; then
  echo "❌ Git not found. Install from https://git-scm.com"
  read -p "Press Enter to exit..."
  exit 1
fi

# Init if needed
if [ ! -d ".git" ]; then
  git init
  git remote add origin https://github.com/Shizune07/raleway-studio.git
  echo "✅ Git initialized"
else
  echo "✅ Git already initialized"
fi

# Create/switch to nextjs branch
git checkout -B nextjs 2>/dev/null || git checkout nextjs

# Stage and commit
git add .
git commit -m "Phase 1+2: Next.js — scaffold, all pages, components" 2>/dev/null || echo "(Nothing new to commit)"

echo ""
echo "📤 Pushing to GitHub (nextjs branch)..."
echo "   You may be prompted for your GitHub username + PAT token"
echo ""

git push -u origin nextjs

echo ""
echo "✅ Done! Check GitHub to verify."
read -p "Press Enter to close..."
