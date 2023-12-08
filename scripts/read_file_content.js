const fs = require("fs");
const path = require("path");

// Function to read files in a directory
function readFilesInDirectory(directoryPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        return reject(err);
      }
      resolve(files);
    });
  });
}

// Function to read the content of a file
function readFileContent(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
}

// Function to pick a random file from an array of files
function pickRandomFile(files) {
  const randomIndex = Math.floor(Math.random() * files.length);
  return files[randomIndex];
}

// Main function to read a random file from a directory
async function readRandomFile(directoryPath) {
  try {
    const files = await readFilesInDirectory(directoryPath);

    if (files.length === 0) {
      throw new Error("No files found in the directory");
    }

    const randomFileName = pickRandomFile(files);
    const filePath = path.join(directoryPath, randomFileName);

    const fileContent = await readFileContent(filePath);
    console.log(`file picked: (${randomFileName}):`);
    return fileContent;
  } catch (error) {
    console.error("Error:", error.message);
  }
}

module.exports = readRandomFile;
