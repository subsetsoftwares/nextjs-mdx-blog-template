const article = {
  meta: {
    title: "Article One",
    description: "Here is summary of article one",
    publishedDate: "03/03/2023",
  },
  content: "\n# Article One\n",
  slug: "article-one",
};

export type Article = typeof article;

export type MetaData = Article["meta"];
