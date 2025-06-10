import React from 'react';

function StudyGuideDisplay({ guide }) {
  if (!guide) return null;

  // Split OpenAI response by numbered sections like "1. ", "2. "
  const sections = guide.split(/(?=\d+\.\s)/g);

  return (
    <div className="study-guide">
      <h2>Study Guide</h2>
      {sections.map((section, index) => (
        <p key={index} style={{ marginBottom: '1rem' }}>
          {section.trim()}
        </p>
      ))}
    </div>
  );
}

export default StudyGuideDisplay;