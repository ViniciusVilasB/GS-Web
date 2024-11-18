import React from "react";

const QuemSomosNos = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/banner1.jpg')`,
      }}
    >
      <div className="flex justify-center items-center min-h-screen bg-black bg-opacity-50">
        <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-md mx-auto text-minha-cor-1">
          <h1 className="text-2xl font-bold mb-6">Equipe do projeto EcoEnergy:</h1>

          <div className="text-xl">
              <p className="font-semibold">Erik Goto</p>
              <p>RM: 123456</p>

              <p className="font-semibold">Guilherme</p>
              <p>RM: 654321</p>

              <p className="font-semibold">Vincius Vilas Boas</p>
              <p>RM: 557843</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuemSomosNos;
