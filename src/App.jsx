import React, { useState } from "react";

const data = [
  {
    title: "1. Introduction & Cadre normatif",
    children: [
      { title: "1.1 Pourquoi une norme ?", content: "Le béton est fabriqué sur chantier. La norme garantit l’uniformité d’exécution, la sécurité et la durabilité. La NIT 285 synthétise les exigences issues de l’Eurocode 2, la norme NBN EN 13670 et B15-400." },
      { title: "1.2 Pyramide normative", content: "L’Eurocode 2 traite du dimensionnement, la norme NBN EN 13670 de l’exécution, la B15-400 des ajouts belges, et la NIT 285 est leur traduction chantier." },
      { title: "1.3 Structure NIT 285", content: "Organisation par étapes chantier : spécifications → coffrage → armatures → bétonnage → cure → contrôle." },
      { title: "1.4 BENOR & CE", content: "BENOR = contrôle belge renforcé ; CE = minimum européen. BENOR recommandé pour ouvrages durables." }
    ]
  },
  {
    title: "2. Rôles des intervenants",
    children: [
      { title: "2.1 Qui fait quoi ?", content: "MO = besoins ; auteur projet = plans & spécifications ; entrepreneur = exécution ; conducteur = planifie, contrôle, documente." },
      { title: "2.2 Interactions critiques", content: "Mauvaise communication = erreurs bétonnage, armatures, coffrage. Coordination indispensable." },
      { title: "2.3 Responsabilités", content: "Contractuelle, technique (normes), pénale (sécurité). Le conducteur est responsable terrain." },
      { title: "2.4 Rôle du conducteur", content: "Pivot du chantier. Lit les plans, organise les ressources, vérifie la conformité, réagit aux imprévus." }
    ]
  },
  {
    title: "3. Gestion de l'exécution",
    children: [
      { title: "3.1 Classes d’exécution", content: "Classe 1 = tolérances larges ; Classe 3 = tolérances serrées, traçabilité, qualité béton apparent." },
      { title: "3.2 Documents à fournir", content: "Plan qualité, fiches contrôle, journal chantier, documents DIU (dossier d’intervention ultérieure)." },
      { title: "3.3 Non-conformités", content: "Analyse → Correction (justification / reprise) → Traçabilité. En classe 3, toute déviation doit être documentée." }
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
          <p>{current.content}</p>
        </div>
      )}
    </div>
  );
}

export default App;
