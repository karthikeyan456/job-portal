import fs from 'fs';
import path from 'path';
import pkg from 'glob';
const { glob } = pkg;

const directoryPath = path.join(process.cwd(), 'src');

// Function to update import paths
function updateImports(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err);
      return;
    }

    let updatedData = data
      .replace(/import\s+(.+?)\s+from\s+['"]react-router-dom\/cjs\/react-router-dom\.min['"]/g, "import $1 from 'react-router-dom'")
      .replace(/import\s+(.+?)\s+from\s+['"]\.\.\/components\/(\w+)['"]/g, "import $1 from '../components/$2.js'");

    fs.writeFile(filePath, updatedData, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing file ${filePath}:`, err);
        return;
      }

      console.log(`Updated imports in ${filePath}`);
    });
  });
}

// Use glob to find all JavaScript files in the src directory
glob(`${directoryPath}/**/*.js`, (err, files) => {
  if (err) {
    console.error('Error finding files:', err);
    return;
  }

  files.forEach(updateImports);
});
