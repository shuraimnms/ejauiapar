const fs = require('fs');
const path = require('path');

const DIRECTORIES = ['src', 'public'];
const EXTENSIONS = ['.tsx', '.ts', '.css', '.json', '.html', '.md'];

const REPLACEMENTS = [
  { from: /International Journal of Academic Research in/g, to: 'European Journal of' }
];

function processFile(filePath) {
  const ext = path.extname(filePath);
  if (!EXTENSIONS.includes(ext)) return;

  const content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  for (const { from, to } of REPLACEMENTS) {
    newContent = newContent.replace(from, to);
  }

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else {
      processFile(fullPath);
    }
  }
}

for (const dir of DIRECTORIES) {
  processDirectory(path.join(__dirname, dir));
}
console.log('Fixed journal name.');
