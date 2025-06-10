import { useState } from 'react';
import { fetchStudyGuide } from '../api/openai';

function TopicForm({ setStudyGuide, setTopic }) {
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTopic(input);
    const guide = await fetchStudyGuide(input);
    setStudyGuide(guide);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a topic (e.g., Photosynthesis)"
        required
      />
      <button type="submit">Generate study guide</button>
    </form>
  );
}

export default TopicForm;