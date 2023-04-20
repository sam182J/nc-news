import React, { useEffect, useState } from "react";
import {fetchCommentsByArticleId} from '../api';
import CommentCard from "./CommentCard";
import  "./CommentsSection.css"
import NewComment from "./NewComment";

export default function CommentSection({article_id, user}) {
  
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [newComment,setNewComment]= useState([])
    
    useEffect(() => {
        fetchCommentsByArticleId(article_id).then((data)=>{
          setComments(data)
          setIsLoading(false);
      })
    },[article_id]);
    if(isLoading) {return <div>Is loading</div>}
    if(comments.length>0){
        return(
            <div className="comment-list-container">
                <h2>Comments</h2>
                <NewComment  article_id ={article_id} user ={user} setNewComment={setNewComment}/>
                <ul className='comment-list'>
                    {newComment? (
                        newComment.map((comment) => (
                            <li>
                            <div className ="CommentCard">
                              
                              <p>{user} : {comment.body}</p>
                             
                              <p> Posted : just now!</p>
                              <p>Votes:0</p>
                              
                            </div>
                        </li>))

               ): null }
                
            {comments.map((comment) => (
              <CommentCard comment={comment} key={comment.comment_id} />
            ))}
          </ul>
          </div>
    );}
    return <p>No comments</p>
  }
  