import { useState,useEffect } from "react";
import fetchArticles from '../api';
import ArticleCard from './ArticleCard';

export default function Home() {
    const [articles , setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getArticles = async () => {
        const data = await fetchArticles();
        setArticles(data);
        setIsLoading(false);
        };
        getArticles();
      },[]);
      return(

        isLoading ? (
            <div>Is loading</div>
          ) : (
            <ul className='article-list'>
            {articles.articles.map((article) => (
              <ArticleCard article={article} key={article.article_id} />
            ))}
          </ul>
          ))}