import { useState } from 'react';
import TopicForm from './components/TopicForm';
import StudyGuideDisplay from './components/StudyGuideDisplay';
import WikipediaSummary from './components/WikipediaSummary';

function App() {
  const [studyGuide, setStudyGuide] = useState('');
  const [topic, setTopic] = useState('');

  return (
    <div className="app-container">
      <h1>Study Guide Generator</h1>
      <TopicForm setStudyGuide={setStudyGuide} setTopic={setTopic} />
      <div className="content">
        <StudyGuideDisplay guide={studyGuide} />
        {topic && <WikipediaSummary topic={topic} />}
      </div>
    </div>
  );
}

export default App;