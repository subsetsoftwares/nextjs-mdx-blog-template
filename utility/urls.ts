export const API_URL = "http://localhost:3000";

export const API_ARTICLE = (articleId: string) =>
  `${API_URL}/api/article/${articleId}`;
export const API_ARTICLES_ALL = `${API_URL}/api/articles`;
export const API_ARTICLES_RECENT = `${API_URL}/api/articles/recent`;
export const API_TAGS_ALL = `${API_URL}/api/tags`;
export const API_TAGS_POPULAR = `${API_URL}/api/tags/popular`;

export const PAGE_HOME = "/";
export const PAGE_ARTICLES_INDEX = "/articles/1";
export const PAGE_PROJECTS_INDEX = "/projects";
export const PAGE_ABOUT = "/about";
