import { useState,useEffect } from "react";
import fetchArticles from '../api';
import ArticleCard from './ArticleCard';

export default function Home() {
    const [articles , setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchArticles().then((data)=>{
            setArticles(data)
            setIsLoading(false);
        })
      },[]);
      if(isLoading) {return <div>Is loading</div>}
      return(

   
        
            <div className="article-list-container"><ul className='article-list'>
            {articles.map((article) => (
              <ArticleCard article={article} key={article.article_id} />
            ))}
          </ul>
          </div>
          )}