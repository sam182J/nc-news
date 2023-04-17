import moment from 'moment';
export default function ArticleCard({ article }) {
    const convertedDate=moment(article.created_at).format("DD.MM.YYYY")
  return (

    <li>
      
        <div className ="ArticleCard">
          <h2 className="article-heading">{article.title}</h2>
          <p>{article.topic}</p>
          <p>{convertedDate}</p>
          <p>Votes:{article.votes}</p>
        </div>
      
    </li>
  );
}