import { useState } from 'react';
import { fetchStudyGuide } from '../api/openai';

function TopicForm({ setStudyGuide, setTopic, setLoading }) {
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTopic(input);
    setLoading(true);
    const guide = await fetchStudyGuide(input);
    setStudyGuide(guide);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a topic (ex. Photosynthesis)"
        required
      />
      <button type="submit">Generate study guide</button>
    </form>
  );
}

export default TopicForm;