import React from 'react';
import { FaRegMoneyBillAlt, FaGlobeAmericas, FaCog } from 'react-icons/fa';

import BenefitCard from './BenefitCard';

const BenefitsSection = () => {
  return (
    <div className="bg-minha-cor-2 w-full py-12">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Benefícios de Usar Nossa Plataforma</h2>
        <p className="text-xl mb-12"> Transforme seu consumo energético com insights inteligentes e práticas de otimização em tempo real.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          <BenefitCard 
            Icon={FaRegMoneyBillAlt}
            title="Redução de Custos" 
            description="Economize até 30% em sua conta de energia com ajustes automáticos e previsões de consumo otimizadas." 
          />
          <BenefitCard 
            Icon={FaGlobeAmericas}
            title="Sustentabilidade" 
            description="Reduza sua pegada de carbono com a otimização do consumo de energia em tempo real, promovendo um futuro mais verde." 
          />
          <BenefitCard 
            Icon={FaCog}
            title="Automatização Simples" 
            description="Configure facilmente e deixe o sistema de Machine Learning otimizar seu consumo de energia automaticamente." 
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
