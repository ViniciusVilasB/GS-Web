import React from 'react';

const BenefitCard = ({ Icon, title, description }) => {
  return (
    <div className="benefit-item">
      <div className="flex justify-center mb-4">
        <Icon size={48} className="text-blue-500" />
      </div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  );
};

export default BenefitCard;
