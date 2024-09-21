import { useState, useEffect } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);

  // Charger l'historique à partir de localStorage lors du premier rendu
  useEffect(() => {
    const savedHistory = localStorage.getItem('interactionHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Sauvegarder l'historique dans localStorage
  const saveToHistory = (newPrompt, newResponse) => {
    const newInteraction = { prompt: newPrompt, response: newResponse };
    const updatedHistory = [...history, newInteraction];
    setHistory(updatedHistory);
    localStorage.setItem('interactionHistory', JSON.stringify(updatedHistory));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResponse('');

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        throw new Error('Erreur lors de la récupération de la réponse');
      }

      const data = await res.json();
      setResponse(data.response);
      saveToHistory(prompt, data.response); // Sauvegarder dans l'historique
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const clearHistory = () => {
    localStorage.removeItem('interactionHistory');
    setHistory([]);
  };

  return (
    <div>
      <h1>Chatbot Manga</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows="4"
          cols="50"
          placeholder="Posez une question sur un manga..."
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Chargement...' : 'Envoyer'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && (
        <div>
          <h2>Réponse :</h2>
          <p>{response}</p>
        </div>
      )}

      {/* Historique des interactions */}
      <div>
        <h2>Historique</h2>
        {history.length > 0 ? (
          <div>
            <button onClick={clearHistory}>Effacer l'historique</button>
            <ul>
              {history.map((item, index) => (
                <li key={index}>
                  <strong>Prompt :</strong> {item.prompt} <br />
                  <strong>Réponse :</strong> {item.response}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Aucun historique disponible</p>
        )}
      </div>
    </div>
  );
}
