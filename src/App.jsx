import React, { useState } from "react";

const data = [
  {
    title: "1. Introduction & Cadre normatif",
    children: [
      { title: "1.1 Pourquoi une norme ?", content: "Le béton est fabriqué sur chantier, il faut donc encadrer l'exécution pour garantir la qualité." },
      { title: "1.2 Pyramide normative", content: "Eurocode 2 > EN 13670 > NBN B 15-400 > NIT 285 (guide pratique chantier)." },
      { title: "1.3 Structure NIT 285", content: "Découpage chronologique des étapes du chantier : spécification, coffrage, armatures, bétonnage, cure, contrôle." },
      { title: "1.4 BENOR & CE", content: "Le béton BENOR dépasse les exigences CE avec des contrôles belges renforcés." }
    ]
  },
  {
    title: "2. Rôles des intervenants",
    children: [
      { title: "2.1 Qui fait quoi ?", content: "Maître d’ouvrage, auteur de projet, entrepreneur, conducteur, coordinateur sécurité." },
      { title: "2.2 Interactions critiques", content: "Spécification béton, coffrage, ferraillage, cure = coordination indispensable." },
      { title: "2.3 Responsabilités", content: "Contractuelle, technique, pénale. Chaque défaut mal géré = risque réel." },
      { title: "2.4 Rôle du conducteur", content: "Pivot du chantier : il organise, contrôle, documente et anticipe." }
    ]
  }
  // Les chapitres 3 à 10 peuvent être ajoutés ici de la même manière
];

function App() {
  const [path, setPath] = useState([]);

  const current = path.reduce((acc, index) => acc.children[index], { children: data });

  const goTo = (index) => setPath([...path, index]);
  const goBack = () => setPath(path.slice(0, -1));

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      {path.length > 0 && (
        <button onClick={goBack} style={{ marginBottom: '10px' }}>⬅ Retour</button>
      )}
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>{current.title || "NIT 285"}</h1>
      {current.children ? (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {current.children.map((item, i) => (
            <li key={i}>
              <button
                onClick={() => goTo(i)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '10px',
                  margin: '5px 0',
                  background: '#f2f2f2',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div style={{ background: '#fff', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
          <p>{current.content}</p>
        </div>
      )}
    </div>
  );
}

export default App;
