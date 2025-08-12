// /scripts/aggregate-src.js
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob'; // Using glob for easier file searching

// --- ES Module Path Setup ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// --- End Path Setup ---

// --- Configuration ---
const projectRoot = path.resolve(__dirname, '..'); // Assumes script is in /scripts
const srcDir = path.resolve(projectRoot, 'src'); // Target directory to aggregate
const outputFile = path.resolve(__dirname, 'aggregated.txt'); // Output file in /scripts
const fileHeaderTemplate = (relativePath) => `\n\n// ----- Start: ${relativePath} -----\n\n`;
const fileFooterTemplate = (relativePath) => `\n\n// ----- End: ${relativePath} -----\n\n`;
// --- End Configuration ---

/**
 * Main function to find, read, and aggregate files.
 */
async function aggregateSourceFiles() {
    console.log(`Starting aggregation from: ${srcDir}`);
    console.log(`Output will be written to: ${outputFile}`);

    try {
        // 1. Find all files recursively within the src directory
        // Use glob pattern, ensure forward slashes, get absolute paths
        const searchPattern = path.join(srcDir, '**', '*').replace(/\\/g, '/');
        const files = await glob(searchPattern, {
            nodir: true,     // Exclude directories
            absolute: true,  // Get absolute paths
            ignore: '**/node_modules/**', // Example: ignore node_modules if it were inside src
        });

        if (files.length === 0) {
            console.log('No files found in the src directory.');
            return;
        }
        console.log(`Found ${files.length} files to aggregate.`);

        // 2. Read and collect content from each file
        const allContent = [];
        let filesRead = 0;
        let filesSkipped = 0;

        for (const filePath of files) {
            const relativePath = path.relative(projectRoot, filePath).replace(/\\/g, '/');
            try {
                // Add header indicating file path
                allContent.push(fileHeaderTemplate(relativePath));

                // Read file content as UTF-8 text
                const content = await fs.readFile(filePath, 'utf-8');
                allContent.push(content);

                // Add footer
                allContent.push(fileFooterTemplate(relativePath));
                filesRead++;
                // Optional: Log progress periodically
                // if (filesRead % 50 === 0) {
                //     console.log(` -> Read ${filesRead}/${files.length} files...`);
                // }
            } catch (readError) {
                // Handle errors reading specific files (e.g., binary files, permissions)
                console.warn(` -> Skipping file (read error): ${relativePath} - ${readError.message}`);
                allContent.push(`// ----- Skipped: ${relativePath} (Read Error) -----`);
                filesSkipped++;
            }
        }
        console.log(`Successfully read ${filesRead} files, skipped ${filesSkipped}.`);

        // 3. Join all content and write to the output file
        const aggregatedContent = allContent.join(''); // Join without extra newlines between sections
        await fs.writeFile(outputFile, aggregatedContent, 'utf-8');

        console.log(`Successfully aggregated content to ${outputFile}`);

    } catch (error) {
        console.error('An error occurred during the aggregation process:', error);
        process.exit(1); // Exit with error code
    }
}

// Execute the main function
aggregateSourceFiles();
