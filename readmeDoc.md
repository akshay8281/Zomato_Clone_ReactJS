
git init-
npm install gh-pages --save-dev
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/akshay8281/Zomato_Clone_ReactJS.git
git push -u origin main

>> Go to package.json
"homepage": "https://(github username).github.io/(repo name)"

>> Put into Scripts in the last of the Column

"predeploy": "npm run build"
"deploy": "gh-pages -d build"


Command
npm run deploy