import moment from 'moment';
import './CommentCard.css';
export default function CommentCard({ comment }) {
    const convertedDate=moment(comment.created_at).format("HH:mm DD.MM.YYYY")
  return (

    <li>
        <div className ="CommentCard">
          
          <p>{comment.author} : {comment.body}</p>
         
          <p>Posted : {convertedDate}</p>
          <p>Votes:{comment.votes}</p>
          
        </div>
    </li>
  );
}