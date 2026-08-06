const fs = require("fs");
const path = require("path");

const DIRECTORIES = ["src", "public"];

const EXTENSIONS = [".tsx", ".ts", ".css", ".json", ".html", ".md"];

const REPLACEMENTS = [
  { from: /IJARCM/g, to: "EJAUIAPAR" },
  { from: /ijarcm/g, to: "ejauiapar" },
  {
    from: /Commerce \& Management/g,
    to: "Ayurvedic, Unani and Interdisciplinary Pharmaceuticals & Allopathic Review",
  },
  {
    from: /Commerce and Management/g,
    to: "Ayurvedic, Unani and Interdisciplinary Pharmaceuticals & Allopathic Review",
  },
  { from: /Commerce, Management/g, to: "Ayurvedic, Unani, Pharmaceuticals, Allopathic Review" },
];

function processFile(filePath) {
  const ext = path.extname(filePath);
  if (!EXTENSIONS.includes(ext)) return;

  const content = fs.readFileSync(filePath, "utf8");
  let newContent = content;

  for (const { from, to } of REPLACEMENTS) {
    newContent = newContent.replace(from, to);
  }

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, "utf8");
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

console.log("Starting global replace...");
for (const dir of DIRECTORIES) {
  processDirectory(path.join(__dirname, dir));
}

// Special case for package.json in root
processFile(path.join(__dirname, "package.json"));

console.log("Done.");
