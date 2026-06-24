#!/bin/bash
# Push helper — token is set on the remote URL (not stored in git history)
cd "$(dirname "$0")"
echo "Pushing to GitHub..."
git push -u origin nextjs --force
echo "Done!"
read -p "Press Enter to close..."
