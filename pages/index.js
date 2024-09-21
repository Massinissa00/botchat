// pages/index.js
import { useState } from 'react';
import dotenv from 'dotenv';

dotenv.config(); // Assurez-vous que les variables d'environnement sont chargées

const API_URL = '/api/generate'; // URL de l'API que nous allons créer

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResponse('');

    try {
      const res = await fetch(API_URL, {
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
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Interface d'Interaction avec l'API Gemini</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows="4"
          cols="50"
          placeholder="Entrez votre prompt ici..."
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Chargement...' : 'Envoyer'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && <div><h2>Réponse du modèle :</h2><p>{response}</p></div>}
    </div>
  );
}
