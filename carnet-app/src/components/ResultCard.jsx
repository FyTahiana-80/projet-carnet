import React from 'react';

const ResultCard = ({ data }) => {
  // Si aucune donnée n'est reçue, on ne rend rien ou un message d'erreur
  if (!data) return null;

  return (
    <section id="results-display" className="results-container">
      <div className="result-header">
        <div className="word-title">
          {/* Affiche le mot recherché dynamiquement */}
          <h2 id="res-word">{data.word || "Mot inconnu"}</h2>
          <span id="res-phonetic">{data.phonetic || "/.../"}</span>
        </div>
        <button className="save-btn">Ajouter au carnet</button>
      </div>

      <div className="result-body">
        <div className="definition-section">
          <h3>Définition</h3>
          <p id="res-definition">
            {data.definition || "Aucune définition trouvée."}
          </p>
        </div>

        <div className="synonyms-section">
          <h3>Synonymes</h3>
          <div className="tag-cloud" id="res-synonyms">
            {data.synonyms && data.synonyms.length > 0 ? (
              data.synonyms.map((syn, index) => (
                <span key={index} className="tag">{syn}</span>
              ))
            ) : (
              <p>Aucun synonyme disponible.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultCard;