import mv from 'move-file';
import replace from 'replace-in-file';
import fs from 'fs';

// Rename/Move the compiled files that microbundle exported.
mv.sync('dist/minified/helping.esm.js', 'dist/helping.min.js');
mv.sync('dist/minified/helping.esm.js.map', 'dist/helping.min.js.map');
mv.sync('dist/minified/helping.umd.js', 'dist/helping.umd.min.js');
mv.sync('dist/minified/helping.umd.js.map', 'dist/helping.umd.min.js.map');

mv.sync('dist/unminified/helping.esm.js', 'dist/helping.js');
mv.sync('dist/unminified/helping.esm.js.map', 'dist/helping.js.map');
mv.sync('dist/unminified/helping.umd.js', 'dist/helping.umd.js');
mv.sync('dist/unminified/helping.umd.js.map', 'dist/helping.umd.js.map');

// Due to us renaming JS files we need to update the referenced sourcemaps inside the files
replace({files: 'dist/helping.js', from: 'sourceMappingURL=helping.esm.js.map', to: 'sourceMappingURL=helping.js.map'}).catch(err => error(err));
replace({files: 'dist/helping.min.js', from: 'sourceMappingURL=helping.esm.js.map', to: 'sourceMappingURL=helping.min.js.map'}).catch(err => error(err));
replace({files: 'dist/helping.umd.min.js', from: 'sourceMappingURL=helping.umd.js.map', to: 'sourceMappingURL=helping.umd.min.js.map'}).catch(err => error(err));

// Delete the leftover folders created by microbundle.
fs.rmdir('dist/minified/', err => error(err));
fs.rmdir('dist/unminified/', err => error(err));

// Error handler
function error (err) {
  if (err) console.log(err);
}