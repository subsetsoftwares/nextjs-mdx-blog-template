# NextJs MDX Blog Template

## How this repo is created

```sh
npx create-next-app@latest --ts
```

- What is your project named? `nextjs-mdx-blog-template`
- Would you like to use ESLint? `Yes`
- Would you like to use Tailwind CSS? `No`
- Would you like to use `src/` directory? `No`
- Would you like to use App Router? (recommended) `No`
- Would you like to customize the default import alias (@/\*)? `No`

## Getting Started

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

Then, create a new MDX page within the /pages directory:

```
your-project
  ├── pages
  │   └── my-mdx-page.mdx
  └── package.json
```

## Reference

- https://nextjs.org/docs/pages/building-your-application/configuring/mdx
