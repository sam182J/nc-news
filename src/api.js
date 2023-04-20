import axios from "axios";
const ncNewsApi = axios.create({
  baseURL: "https://be-nc-news-sam.onrender.com/api/",
});
export async function fetchArticles() {
  const { data } = await ncNewsApi.get(`/articles`);
  return data.articles;
}
export async function fetchArticleById(id) {
  const { data } = await ncNewsApi.get(`/articles/${id}`);
  return data.article;
}
export async function fetchCommentsByArticleId(id) {
  const { data } = await ncNewsApi.get(`/articles/${id}/comments`);
  return data.comments;
}

export async function updateArticleVotes(id, votes) {
  const { data } = await ncNewsApi.patch(`/articles/${id}`, votes);
  return data.article;
}

export async function createNewComment(id, comment) {
  const { data } = await ncNewsApi.post(`/articles/${id}/comments`, comment);
  return data.comment;
}
