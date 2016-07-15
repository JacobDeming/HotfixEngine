var map = {
  'app':'javascripts/app',
  'rxjs':'javascripts/vendor/rxjs',
  '@angular':'javascripts/vendor/@angular',
  'firebase':'javascripts/vendor/firebase/firebase.js',
  'angularfire2':'javascripts/vendor/angularfire2'
};

var packages = {
  'app':{main:'boot.js',defaultExtension:'js'},
  'rxjs':{defaultExtension:'js'},
  'angularfire2':{defaultExtension:'js',main:'angularfire2.js'}
};

var packageNames = [
  '@angular/common',
  '@angular/compiler',
  '@angular/core',
  '@angular/http',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@angular/router',
  '@angular/testing',
  '@angular/upgrade'
];

packageNames.forEach(function(pkgName){
  packages[pkgName] = {main:'index.js',defaultExtension:'js'};
})

var config = {
  map: map,
  packages: packages
};

System.config(config);