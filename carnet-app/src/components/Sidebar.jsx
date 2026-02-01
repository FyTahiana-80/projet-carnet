import React from 'react';

const Sidebar = () => {
  // Liste des boutons pour rendre le code plus propre et évolutif
  const navItems = [
    { label: 'Récent', href: '#' },
    { label: 'Favoris', href: '#' },
    { label: 'Pertinent', href: '#' },
  ];

  return (
    <aside className="sidebar">
      {/* Le logo conserve son style spécifique défini dans style.css */}
      <div className="logo">Meaning & Synonym</div>
      
      <nav className="nav">
        {navItems.map((item, index) => (
          <a key={index} href={item.href} className="nav-btn">
            {item.label}
          </a>
        ))}
        
        {/* Bouton spécifique avec un ID comme dans ton HTML original */}
        <a href="#" className="nav-btn" id="categorie">
          Catégories
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;