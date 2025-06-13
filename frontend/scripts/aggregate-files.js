// /frontend/scripts/aggregate-files.js

const fs = require('fs');
const path = require('path');

// --- Configuration ---
// Get the directory where the script is running.
const SCRIPT_DIR = __dirname;
// Get the root directory of the frontend project (/frontend).
const FRONTEND_DIR = path.dirname(SCRIPT_DIR);
// Define the source directory to scan for files.
const SRC_DIR = path.join(FRONTEND_DIR, 'src');
// Define the path to the package.json file.
const PACKAGE_JSON_PATH = path.join(FRONTEND_DIR, 'package.json');
// Define the path for the final aggregated output file.
const OUTPUT_FILE = path.join(SCRIPT_DIR, 'aggregated.txt');
// --- End Configuration ---

/**
 * Appends a header and the content of a single file to the output write stream.
 * @param {fs.WriteStream} writeStream - The stream to write the file content to.
 * @param {string} filePath - The full path to the file to be appended.
 * @param {string} fileRelativePath - The path of the file relative to the project root.
 */
function appendFileContent(writeStream, filePath, fileRelativePath) {
  try {
    // Read the file's content
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Write a separator and header to the output file
    writeStream.write('=================================================================\n');
    writeStream.write(`FILE: ${fileRelativePath.replace(/\\/g, '/')}\n`); // Normalize path separators for consistency
    writeStream.write('=================================================================\n');
    
    // Write the file's content and add newlines for spacing
    writeStream.write(fileContent);
    writeStream.write('\n\n');

    console.log(`✅ Appended: ${fileRelativePath}`);
  } catch (error) {
    console.error(`❌ Error reading file ${filePath}:`, error);
  }
}

/**
 * Recursively finds all files in a given directory and its subdirectories.
 * @param {string} dir - The directory to start searching from.
 * @returns {string[]} An array of full file paths.
 */
function getAllFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat && stat.isDirectory()) {
          // If it's a directory, recurse into it
          results = results.concat(getAllFiles(filePath));
      } else {
          // If it's a file, add it to the list
          results.push(filePath);
      }
  });
  return results;
}

/**
 * Main function to execute the aggregation process.
 */
function main() {
  console.log('🚀 Starting file aggregation...');

  try {
    // Create a write stream to the output file. This will overwrite the file if it exists.
    const writeStream = fs.createWriteStream(OUTPUT_FILE);
    writeStream.on('error', (err) => console.error('Stream Error:', err));

    // 1. Append package.json
    if (fs.existsSync(PACKAGE_JSON_PATH)) {
      appendFileContent(writeStream, PACKAGE_JSON_PATH, 'package.json');
    } else {
      console.warn('⚠️ Warning: package.json not found. Skipping.');
    }

    // 2. Append all files from the src directory
    if (fs.existsSync(SRC_DIR)) {
      const allSrcFiles = getAllFiles(SRC_DIR);
      allSrcFiles.forEach(filePath => {
        // Get the path relative to the FRONTEND_DIR for cleaner output
        const relativePath = path.relative(FRONTEND_DIR, filePath);
        appendFileContent(writeStream, filePath, relativePath);
      });
    } else {
       console.error(`❌ Error: The source directory does not exist: ${SRC_DIR}`);
    }

    // Close the stream and finalize the process
    writeStream.end(() => {
      console.log(`\n🎉 Aggregation complete! All files have been combined into:\n${OUTPUT_FILE}`);
    });

  } catch (error) {
    console.error('An unexpected error occurred during the aggregation process:', error);
  }
}

// Run the main function
main();
