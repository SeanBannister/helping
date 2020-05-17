import mv from 'mv';
import fs from 'fs';

mv('dist/minified/helping.esm.js', 'dist/helping.min.js', err => error(err));
mv('dist/minified/helping.esm.js.map', 'dist/helping.min.js.map', err => error(err));
mv('dist/minified/helping.umd.js', 'dist/helping.umd.min.js', err => error(err));
mv('dist/minified/helping.umd.js.map', 'dist/helping.umd.min.js.map', err => error(err));

mv('dist/unminified/helping.esm.js', 'dist/helping.js', err => error(err));
mv('dist/unminified/helping.esm.js.map', 'dist/helping.js.map', err => error(err));
mv('dist/unminified/helping.umd.js', 'dist/helping.umd.js', err => error(err));
mv('dist/unminified/helping.umd.js.map', 'dist/helping.umd.js.map', err => error(err));

fs.rmdir('dist/minified/', err => error(err))
fs.rmdir('dist/unminified/', err => error(err))

function error (err) {
  if (err) console.log(err);
}