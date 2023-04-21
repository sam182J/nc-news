import { useState,useEffect } from "react";
import {fetchArticles, fetchTopics} from '../api';
import ArticleCard from './ArticleCard';
import TopicsBar from "./TopicsBar";

export default function Home() {
    const [articles , setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [topics, setTopics] =useState([])
    const [chosenTopic, setChosenTopic] =useState('')

    useEffect(() => {
        fetchArticles(chosenTopic).then((data)=>{
            setArticles(data)
            setIsLoading(false);
        })
      },[chosenTopic]);
      useEffect(() => {
        fetchTopics().then((data)=>{
            setTopics(data)
            setIsLoading(false);
            
        })
      },[]);

      if(isLoading) {return <div>Is loading</div>}
      return(

   
        <div className="Home">
            <TopicsBar setChosenTopic ={setChosenTopic} topics={topics} chosenTopic={chosenTopic}/>
            <div className="article-list-container">
                
            <ul className='article-list'>
            {articles.map((article) => (
              <ArticleCard article={article} key={article.article_id} />
            ))}
          </ul>
          </div>
          </div>
          )}