import { useState } from 'react';
import TopicForm from './components/TopicForm';
import StudyGuideDisplay from './components/StudyGuideDisplay';
import WikipediaSummary from './components/WikipediaSummary';
import './index.css';

function App() {
  const [studyGuide, setStudyGuide] = useState('');
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div className="app-container">
      <h1>Study Guide Generator</h1>
      <TopicForm setStudyGuide={setStudyGuide} setTopic={setTopic} setLoading={setLoading} />

      {loading ? (
        <div className="loading-spinner">Generating study guide...</div>
      ) : (
        <div className="content">
          <div className="left-column">
            <StudyGuideDisplay guide={studyGuide} />
          </div>
          <div className="right-column">
            {topic && <WikipediaSummary topic={topic} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;