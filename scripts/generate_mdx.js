const fs = require("fs");
const path = require("path");
const numberToWords = require("number-to-words");

function generateRandomDate() {
  const startDate = new Date("2022-01-01");
  const endDate = new Date("2023-12-31");

  const randomMilliseconds =
    startDate.getTime() +
    Math.floor(Math.random() * (endDate.getTime() - startDate.getTime()));
  const randomDate = new Date(randomMilliseconds);

  // Format the date as dd/MM/yyyy
  const formattedDate = `${randomDate.getDate().toString().padStart(2, "0")}/${(
    randomDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${randomDate.getFullYear()}`;

  return formattedDate;
}

function up(word) {
  // Capitalize first letter
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function createMDXFile(outputDir, index) {
  const number = numberToWords.toWords(index);
  const word = number
    .split("-")
    .map((text) => up(text))
    .join(" ");
  const slug = number.split(" ").join("-").toLowerCase();
  const filename = path.join(outputDir, `article-${slug}.mdx`);
  const title = `Article ${word}`;
  const description = `Here is the summary of Article ${word}`;
  const publishedDate = generateRandomDate();

  const mdxContent = [
    "---",
    "title: " + title,
    "description: " + description,
    "publishedDate: " + publishedDate,
    "---",
    "",
    "# " + title,
  ].join("\n");

  fs.writeFileSync(filename, mdxContent);

  console.log(`Generated ${filename}`);
}

const args = process.argv.slice(2);
const outputDir = args[0];
const numberOfFiles = parseInt(args[1]);
const startingIndex = args[2] ? parseInt(args[2]) : 1;

if (isNaN(numberOfFiles) || !outputDir) {
  console.log(
    "Usage: node generate_mdx.js <number_of_files> <output_directory> [starting_index]"
  );
  process.exit(1);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

for (let i = startingIndex; i < startingIndex + numberOfFiles; i++) {
  createMDXFile(outputDir, i);
}