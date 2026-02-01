import React from 'react';

const Dashboard = () => {
  const relevantTags = ["Knowledge", "Insight", "Sanctuary"];

  return (
    <div className="dashboard-grid">
      {/* Section : Plus pertinent */}
      <section className="info-card" id="box1">
        <h2>Plus pertinent</h2>
        <div className="tag-cloud">
          {relevantTags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <p>Les mots les plus consultés seront ici</p>
      </section>

      {/* Section : Dernier ajout */}
      <section className="info-card" id="box2">
        <h2>Dernier ajout</h2>
        <div className="recent-word">
          <span className="word-highlight">Wisdom</span>
          <p>Trouvé il y a 9h.</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;