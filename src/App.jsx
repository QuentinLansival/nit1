import React, { useState } from "react";

const data = [
  {
    title: "1. Introduction & Cadre normatif",
    children: [
      { title: "1.1 Pourquoi une norme ?", content: "Le béton est fabriqué sur chantier. La norme garantit l’uniformité d’exécution, la sécurité et la durabilité. La NIT 285 synthétise les exigences issues de l’Eurocode 2, la norme NBN EN 13670 et B15-400." },
      { title: "1.2 Pyramide normative", content: "L’Eurocode 2 traite du dimensionnement, la norme NBN EN 13670 de l’exécution, la B15-400 des ajouts belges, et la NIT 285 est leur traduction chantier.\n\nIllustration :\n\n👇\n\n<img src='pyramide_normative.png' alt='Pyramide normative' style='max-width:100%' />" },
      { title: "1.3 Structure NIT 285", content: "Organisation par étapes chantier : spécifications → coffrage → armatures → bétonnage → cure → contrôle. Chaque chapitre correspond à une phase." },
      { title: "1.4 BENOR & CE", content: "BENOR = contrôle belge renforcé ; CE = minimum européen.\nLe béton BENOR est recommandé sur tout ouvrage structurel durable (parements, murs enterrés, etc.)." }
    ]
  }
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
          <div dangerouslySetInnerHTML={{ __html: current.content.replace(/\n/g, '<br/>') }} />
        </div>
      )}
    </div>
  );
}

export default App;
