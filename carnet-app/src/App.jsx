import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import Dashboard from './components/Dashboard';
import ResultCard from './components/ResultCard';
import './style.css';
import './resultat.css';

function App() {
  // États pour gérer les données et l'affichage
  const [wordData, setWordData] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Fonction pour appeler l'API
  const handleSearch = async (word) => {
    setIsLoading(true);
    setShowResults(true); // On masque le dashboard dès la recherche

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();

      if (response.ok) {
        // Extraction des données pertinentes de l'API
        const result = {
          word: data[0].word,
          phonetic: data[0].phonetic,
          definition: data[0].meanings[0].definitions[0].definition,
          synonyms: data[0].meanings[0].synonyms.slice(0, 3) // On prend les 3 premiers
        };
        setWordData(result);
      } else {
        setWordData({ word: "Non trouvé", definition: "Désolé, ce mot n'existe pas dans notre base." });
      }
    } catch (error) {
      console.error("Erreur API:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content">
        <header className="hero-section">
          <h1>Carnet</h1>
          <p>Enregistrez et explorez ! Car ensemble on est une molécule...</p>
        </header>

        <SearchBar onSearch={handleSearch} />

        {/* Affichage conditionnel : Dashboard ou Résultats */}
        {!showResults ? (
          <Dashboard />
        ) : isLoading ? (
          <p style={{ textAlign: 'center', marginTop: '50px' }}>Chargement...</p>
        ) : (
          <ResultCard data={wordData} />
        )}
      </main>
    </div>
  );
}

export default App;