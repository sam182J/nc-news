import React, { useEffect, useState } from "react";
import {fetchCommentsByArticleId} from '../api';
import CommentCard from "./CommentCard";
import  "./CommentsSection.css"

export default function CommentSection({article_id}) {
  
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        fetchCommentsByArticleId(article_id).then((data)=>{
          setComments(data)
          setIsLoading(false);
      })
    },[article_id]);
    if(isLoading) {return <div>Is loading</div>}
    if(comments.length>0){
        return(
            <div className="comment-list-container"><ul className='comment-list'>
                <h2>Comments</h2>
            {comments.map((comment) => (
              <CommentCard comment={comment} key={comment.comment_id} />
            ))}
          </ul>
          </div>
    );}
    return <p>No comments</p>
  }
  