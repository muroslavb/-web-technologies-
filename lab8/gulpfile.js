// 1. Підключаємо модулі
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

// 2. Створюємо завдання (task) для CSS
gulp.task('css', function () {
  // Список плагінів для PostCSS
  const plugins = [
    autoprefixer() // Викликаємо autoprefixer
  ];

  return gulp.src('task3/*.css') // 3. Беремо всі .css файли з папки src/css
    .pipe(postcss(plugins))      // 4. Проганяємо їх через PostCSS з autoprefixer
    .pipe(gulp.dest('dist/css')); // 5. Вивантажуємо оброблені файли в папку dist/css
});

// 6. Створюємо завдання "watch" для відстеження змін
gulp.task('watch', function () {
  // Відстежуємо зміни в CSS файлах і запускаємо завдання 'css'
  gulp.watch('src/css/*.css', gulp.series('css'));
});

// 7. Завдання за замовчуванням (яке запускається командою "gulp")
gulp.task('default', gulp.series('css', 'watch'));
