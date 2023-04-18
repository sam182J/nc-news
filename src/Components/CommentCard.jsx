import moment from 'moment';
import './CommentCard.css';
export default function CommentCard({ comment }) {
    const convertedDate=moment(comment.created_at).format("DD.MM.YYYY")
  return (

    <li>
        <div className ="CommentCard">
          
          <p>{comment.author} : {comment.body}</p>
         
          <p>{convertedDate}</p>
          <p>Votes:{comment.votes}</p>
          
        </div>
    </li>
  );
}