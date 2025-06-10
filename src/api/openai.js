const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

export async function fetchStudyGuide(topic) {
  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt: `Write a beginner-friendly study guide about: ${topic}`,
      max_tokens: 500,
      temperature: 0.7,
    }),
  });

  const data = await response.json();
  return data.choices?.[0]?.text?.trim() || 'No content generated.';
}