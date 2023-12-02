# NextJs MDX Blog Template

## Getting Started

Create a new MDX page within the `/articles` directory:

```
your-project
  ├── articles
  │   └── 2023
  │       └── article-one.mdx
  │   └── 2023
  │       └── article-two.mdx
  │   └── top-level.mdx
  └── package.json
```

All articles, top level or nested within sub-directories will be exposed as a flat list through api endpoint `/api/articles`.

## How this repo was created

```sh
npx create-next-app@latest --ts
```

- What is your project named? `nextjs-mdx-blog-template`
- Would you like to use ESLint? `Yes`
- Would you like to use Tailwind CSS? `No`
- Would you like to use `src/` directory? `No`
- Would you like to use App Router? (recommended) `No`
- Would you like to customize the default import alias (@/\*)? `No`

Install packages needed to render MDX:

```sh
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
```

Update the next.config.js file at your project's root to configure it to use MDX:

```js
// next.config.js

const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

module.exports = withMDX(nextConfig);
```

Then to read meta data information from the mdx files, we use `gray-matter` npm package.

```sh
npm install gray-matter
```

## Generating dummy mdx files

Usage: `node ./scripts/generate_mdx.js <output_directory> <number_of_files> [starting_index]`

```sh
node ./scripts/generate_mdx.js articles/2023 100

node ./scripts/generate_mdx.js articles/2024 100 101
```

NOTE: Last argument is for number starting index.

## Reference

- https://nextjs.org/docs/pages/building-your-application/configuring/mdx
