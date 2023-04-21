import  "./TopicsBar.css"
import { Link } from 'react-router-dom';
export default function TopicsBar({ topics, setChosenTopic }) {
    function handleClick(topic) {
      setChosenTopic(topic);
    }
  
    return (
      <ul className="topics-bar">
        <Link to={`/`} >
        <li>
          <button onClick={() => handleClick('')}> All </button>
        </li>
        </Link>
        {topics.map((topic) => (
            <Link to={`/Articles/topics/${topic.slug}`}> 
          <li key={topics.slug}>
            <button onClick={() => handleClick(topic.slug)}>
              {topic.slug}
            </button>
          </li>
          </Link>
        ))}
      </ul>
    );
  }
  