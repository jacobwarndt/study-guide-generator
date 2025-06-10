const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

export async function fetchStudyGuide(topic) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `Create a beginner-friendly study guide about "${topic}". 
          Label each section clearly with numbers (1., 2., 3., etc). 
          Include definitions, key concepts, and a short summary.`,
        },
      ],
      temperature: 0.7,
      max_tokens: 800,
    }),
  });

  const data = await response.json();
  console.log('OpenAI response:', data);

  return data.choices?.[0]?.message?.content?.trim() || 'No content generated.';
}