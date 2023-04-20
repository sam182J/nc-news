import { useState } from 'react';
import {createNewComment} from '../api';
import  "./NewComment.css"

export default function NewCommet({article_id, user,setNewComment}) {
  const [commentBody, setCommentBody] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit =  async (event) => {
    event.preventDefault();
    setIsSubmitting(true)
    setNewComment((currentComments)=>{return [
        {body: commentBody,
        username: user,
        },...currentComments]})
     createNewComment(article_id,{
        body: commentBody,
        username: user,})
        .then(()=>{setCommentBody(''); 
        setIsSubmitting(false)});
      

  };
  return ( <div>
   
    <form className="comment-form" onSubmit={handleSubmit}>
        <label>New comment</label>
        <textarea value={commentBody} onChange={(event) => setCommentBody(event.target.value)} required />
      <button type="submit" disabled={isSubmitting}>  Submit</button>
      
      
    </form>
    </div>
  );
}
