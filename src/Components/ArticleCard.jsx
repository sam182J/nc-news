import moment from 'moment';
import { Link } from 'react-router-dom';
export default function ArticleCard({ article }) {
    const convertedDate=moment(article.created_at).format("DD.MM.YYYY")
  return (

    <li>
      <Link to={`/Articles/${article.article_id}`} >
        <div className ="ArticleCard">
          <h2 className="article-heading">{article.title}</h2>
          <p>{article.topic}</p>
          <p>{convertedDate}</p>
          <p>Votes:{article.votes}</p>
        </div>
      </Link>
    </li>
  );
}