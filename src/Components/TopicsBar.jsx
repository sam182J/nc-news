import  "./TopicsBar.css"
import { Link } from 'react-router-dom';
export default function TopicsBar({ topics, setChosenTopic, chosenTopic }) {
    function handleClick(topic) {
      setChosenTopic(topic);
    }
  
    return (
      <ul className="topics-bar">
        <Link to={`/`} >
        <li>
          <button className={chosenTopic === "" ? "selected" : "" } onClick={() => handleClick('')}> All </button>
        </li>
        </Link>
        {topics.map((topic) => (
            <Link to={`/Articles/topics/${topic.slug}`}> 
          <li key={topics.slug}>
            <button  className={chosenTopic === topic.slug ? "selected" : "" }onClick={() => handleClick(topic.slug)}>
              {topic.slug}
            </button>
          </li>
          </Link>
        ))}
      </ul>
    );
  }
  