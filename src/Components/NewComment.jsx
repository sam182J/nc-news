import { useState } from 'react';
import {createNewComment} from '../api';
import  "./NewComment.css"

export default function NewCommet({article_id, user,setNewComment}) {
  const [commentBody, setCommentBody] = useState('');
  
  const handleSubmit =  async (event) => {
    event.preventDefault();
    setNewComment({
        body: commentBody,
        username: user,
        })
     createNewComment(article_id,{
        body: commentBody,
        username: user,})
        .then(()=>{setCommentBody('')});
      

  };
  return (
    
    <form className="comment-form" onSubmit={handleSubmit}>
        <label>New comment</label>
        <textarea value={commentBody} onChange={(event) => setCommentBody(event.target.value)} required />
      <button type="submit">Submit</button>
      
      
    </form>
  );
}
