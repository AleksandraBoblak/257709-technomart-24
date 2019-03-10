mkdir build
mkdir build\js
xcopy /I /Y img build\img
xcopy /I /Y *.html build
npx uglify-js js/script.js -o build/js/script.js & npx postcss css/*.css --use autoprefixer --use cssnano -d build/css --no-map
