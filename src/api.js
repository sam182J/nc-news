import axios from "axios";

export async function fetchArticles() {
  const { data } = await axios.get(
    `https://be-nc-news-sam.onrender.com/api/articles`
  );
  return data.articles;
}
export async function fetchArticleById(id) {
  const { data } = await axios.get(
    `https://be-nc-news-sam.onrender.com/api/articles/${id}`
  );
  return data.article;
}
