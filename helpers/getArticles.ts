import * as fs from "fs";
import matter from "gray-matter";
import * as path from "path";

type MetaData = any;

interface Post {
  meta: MetaData;
  content: string;
  slug: string;
}

export const getArticles = (directory: string): Post[] => {
  const readDirectory = (currentPath: string): Post[] => {
    const dirFiles = fs.readdirSync(currentPath, { withFileTypes: true });

    const articles = dirFiles
      .map((file) => {
        const filePath = path.join(currentPath, file.name);

        if (file.isDirectory()) {
          // Recursively read nested directories
          return readDirectory(filePath);
        }

        if (!file.name.endsWith(".mdx")) return;

        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContent);

        const slug = file.name.replace(/.mdx$/, "");
        return { meta: data, content, slug };
      })
      .filter((post) => post) as Post[];

    // Flatten the array if there are nested arrays
    return articles.flat();
  };

  const fullPath = path.join(process.cwd(), directory);
  return readDirectory(fullPath);
};
