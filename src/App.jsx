import React, { useState } from "react";

const data = [
  {
    title: "1. Introduction & Cadre normatif",
    children: [
      {
        title: "1.1 Objet de la note",
        content: "La NIT 285 a pour but de fournir des recommandations sur l’exécution des structures en béton conformément à la norme NBN EN 13670, en tenant compte des exigences belges (NBN B 15-400) et des spécificités de l’Eurocode 2."
      },
      {
        title: "1.2 Domaine d’application",
        content: "Elle concerne les ouvrages réalisés en béton armé ou non armé, coulés sur chantier ou à partir d’éléments préfabriqués. Les bétons précontraints ou projetés sont également inclus."
      },
      {
        title: "1.3 Lien avec les normes européennes",
        content: "La figure ci-dessous illustre les interactions entre normes :\n\n<img src='fig1_1_pyramide.png' alt='Pyramide des normes' style='max-width:100%' />"
      },
      {
        title: "1.4 Différences entre NIT et normes",
        content: "La NIT 285 ne remplace pas les normes. Elle illustre et interprète les exigences des normes EN pour une application sur chantier."
      },
      {
        title: "1.5 Responsabilités",
        content: "La mise en œuvre correcte est de la responsabilité de l’entrepreneur, sous le contrôle de l’auteur de projet. Le coordinateur sécurité veille à la sécurité globale."
      },
      {
        title: "1.6 Qualité CE vs BENOR",
        content: "Le marquage CE indique la conformité minimale. Le label BENOR impose des contrôles supplémentaires adaptés aux exigences belges et est fortement recommandé."
      }
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
