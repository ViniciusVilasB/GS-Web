import React from 'react';

const CaseCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="case-card bg-white shadow-lg rounded-lg p-6">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-2xl font-semibold text-minha-cor-1 mb-2">{title}</h3>
      <p className="text-lg text-gray-700 mb-4">{description}</p>
    </div>
  );
};

export default CaseCard;
