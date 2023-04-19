import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import {fetchArticleById} from '../api';
import moment from 'moment';
import CommentSection from "./CommentsSection";
import ArticleVotes from "./ArticleVotes";


export default function ArticlePage() {
  
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchArticleById(article_id).then((data)=>{
        setArticle(data)
        setIsLoading(false);
    })
  },[article_id]);
  const convertedDate=moment(article.created_at).format("DD.MM.YYYY")

  if(isLoading) {return <div>Is loading</div>}
      return(<div>
    <div className="article-page">
      <h2>{article.title}</h2>
      <p>{convertedDate}</p>
      <p>{article.topic}</p>
      <p className="article-body">{article.body}</p>
      <img className="article-page-image" src={article.article_img_url} alt={article.title}/>
      <p>Comments :{article.comment_count}</p>
      
      
     
    </div>
    <div><ArticleVotes article={article}/></div>
    <div><CommentSection article_id={article_id}/></div>
    </div>
  );
}
