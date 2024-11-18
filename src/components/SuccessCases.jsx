import React, { useState, useEffect } from 'react';
import CaseCard from './CaseCard';
import casesData from '../data/cases.json';

const SuccessCases = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    setCases(casesData);
  }, []);

  return (
    <div className="bg-minha-cor-2 py-12 w-full text-minha-cor-1">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Casos de Sucesso</h2>
        <p className="text-xl mb-8">Veja como nossos clientes estão transformando o consumo de energia de forma inteligente.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {cases.map((caseItem, index) => (
            <CaseCard 
              key={index} 
              title={caseItem.title} 
              description={caseItem.description} 
              imageUrl={caseItem.imageUrl} 
              link={caseItem.link} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessCases;
