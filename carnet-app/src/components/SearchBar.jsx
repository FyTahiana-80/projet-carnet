import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  // État local pour stocker ce que l'utilisateur tape
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      // On envoie la valeur au composant parent (App.jsx)
      onSearch(inputValue);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enregistrez et explorez un nouveau mot" 
        id="input" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required 
      />
      <button type="submit" className="search-button">
        Explorer
      </button>
    </form>
  );
};

export default SearchBar;