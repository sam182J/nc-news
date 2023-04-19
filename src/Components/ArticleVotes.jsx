import React, { useEffect, useState } from "react";
import {updateArticleVotes} from '../api';
import  "./ArticleVotes.css"

export default function ArticleVotes({article}) {
  
    const [votes, setVotes] = useState({inc_votes:0});
    const [localVotes,setLocalVotes] =useState(0)
    const [voted,setVoted] =useState(false)
    const [error,setError] =useState(false)
    
    
    const handleClick=  (event,num)=>{
        event.preventDefault()
        setVoted(true)
        setVotes({inc_votes:num})
        setLocalVotes((currVotes)=>{return currVotes +num})
         
        }
        useEffect(() => {
            updateArticleVotes(article.article_id, votes).catch(()=>{
                setLocalVotes((currVotes)=>{return currVotes - votes.inc_votes})
                setError(true)

            });
          }, [article.article_id, votes,]);
  
    
        return (<div className="vote-section">
        <h3>Please vote   </h3>
        <p>Votes : {article.votes + localVotes}</p>
        { !voted ? (<div> 
        <button onClick={(event) => handleClick(event, -5)}>Hate!</button>
        <button onClick={(event) => handleClick(event, -1)}>Dislike</button>
        <button onClick={(event) => handleClick(event, 1)}>Like</button>
        <button onClick={(event) => handleClick(event, 5)}>Love!</button>
        </div>) : !error ? <p>Thank you for your vote!</p> : <p>Sorry, your vote wasn't counted, please try again later! </p>
        }
        </div>

            
    );
    
  }
  