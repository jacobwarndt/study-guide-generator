import { useEffect, useState } from 'react';

function WikipediaSummary({ topic }) {
  const [summary, setSummary] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (!topic) return;

    const fetchWikiSummary = async () => {
      try {
        const response = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topic)}`
        );
        const data = await response.json();

        if (data.extract) {
          setSummary(data.extract);
          setUrl(data.content_urls.desktop.page);
        } else {
          setSummary('No Wikipedia summary available for this topic.');
        }
      } catch (error) {
        setSummary('Error fetching summary.');
      }
    };

    fetchWikiSummary();
  }, [topic]);

  return (
    <div className="wikipedia-summary">
      <h2>More Info (from Wikipedia)</h2>
      <p>{summary}</p>
      {url && (
        <p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Read more on Wikipedia
          </a>
        </p>
      )}
    </div>
  );
}

export default WikipediaSummary;