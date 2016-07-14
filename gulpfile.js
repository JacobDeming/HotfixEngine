var gulp = require('gulp');

var gulpTypescript = require('gulp-typescript');
var gulpSourcemaps = require('gulp-sourcemaps');

var appDev = 'assets/angular2/';
var appProd = 'public/javascripts/app/';
var vendor = 'public/javascripts/vendor';

var tsconfig = gulpTypescript.createProject('tsconfig.json');

gulp.task('build-ts',function(){
  return gulp.src(appDev+'/**/*.ts')
    .pipe(gulpSourcemaps.init())
    .pipe(gulpTypescript(tsconfig))
    .pipe(gulpSourcemaps.write())
    .pipe(gulp.dest(appProd));
});

gulp.task('build-copy',function(){
  return gulp.src([appDev+'**/*.html', appDev+'**/*.htm',appDev+'**/*.css'])
    .pipe(gulp.dest(appProd));
});

gulp.task('vendor',function(){
  gulp.src('node_modules/@angular/**')
    .pipe(gulp.dest(vendor+'/@angular'));

  gulp.src('node_modules/es6-shim/**')
    .pipe(gulp.dest(vendor+'/es6-shim'));

  gulp.src('node_modules/reflect-metadata/**')
    .pipe(gulp.dest(vendor+'/reflect-metadata'));

  gulp.src('node_modules/rxjs/**')
    .pipe(gulp.dest(vendor+'/rxjs'));

  gulp.src('node_modules/systemjs/**')
    .pipe(gulp.dest(vendor+'/systemjs'));

  gulp.src('node_modules/zone.js/**')
    .pipe(gulp.dest(vendor+'/zone.js'));

  gulp.src('node_modules/firebase/**')
    .pipe(gulp.dest(vendor+'/firebase'));

  return gulp.src('node_modules/angularfire2/**')
    .pipe(gulp.dest(vendor+'/angularfire2'));
});

gulp.task('watch',function(){
  gulp.watch(appDev+'**/*.ts',['build-ts']);
  gulp.watch(appDev+'**/*.{html,htm,css}',['build-copy']);
});

gulp.task('default',['watch','build-ts','build-copy','vendor']);