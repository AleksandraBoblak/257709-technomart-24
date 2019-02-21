mkdir build
xcopy /I /Y img build\img
xcopy /I /Y js build\js
xcopy /I /Y *.html build
npx postcss css/*.css --use autoprefixer -d build/css