import axios from "axios";

export default async function fecthArticles() {
  const { data } = await axios.get(
    `https://be-nc-news-sam.onrender.com/api/articles`
  );
  return data;
}
