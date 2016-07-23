var gulp = require('gulp');

var gulpTypescript = require('gulp-typescript');
var gulpSourcemaps = require('gulp-sourcemaps');

var gameDev = 'assets/game/';
var gameProd = 'public/game/javascripts/app/';
var lobbyDev = 'assets/lobby';
var lobbyProd = 'public/lobby/javascripts/app';
var vendor = 'public/game/javascripts/vendor';

var tsconfig = gulpTypescript.createProject('tsconfig.json');

gulp.task('build-game-ts',function(){
  return gulp.src(gameDev+'/**/*.ts')
    .pipe(gulpSourcemaps.init())
    .pipe(gulpTypescript(tsconfig))
    .pipe(gulpSourcemaps.write())
    .pipe(gulp.dest(gameProd));
});

gulp.task('build-game-copy',function(){
  return gulp.src([gameDev+'**/*.html', gameDev+'**/*.htm',gameDev+'**/*.css'])
    .pipe(gulp.dest(gameProd));
});

gulp.task('build-lobby-ts',function(){
  return gulp.src(lobbyDev+'/**/*.ts')
    .pipe(gulpSourcemaps.init())
    .pipe(gulpTypescript(tsconfig))
    .pipe(gulpSourcemaps.write())
    .pipe(gulp.dest(lobbyProd));
});

gulp.task('build-lobby-copy',function(){
  return gulp.src([lobbyDev+'**/*.html', lobbyDev+'**/*.htm',lobbyDev+'**/*.css'])
    .pipe(gulp.dest(lobbyProd));
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
  gulp.watch(gameDev+'**/*.ts',['build-game-ts']);
  gulp.watch(gameDev+'**/*.{html,htm,css}',['build-game-copy']);
});

gulp.task('default',['watch','build-game-ts','build-game-copy','vendor']);