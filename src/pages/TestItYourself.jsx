import { useState, useEffect } from "react";
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa";

export default function TestePage() {
  const storedHour = localStorage.getItem("currentHour") || 12;
  const storedLampState = localStorage.getItem("lampState") || "off";

  const [currentHour, setCurrentHour] = useState(storedHour);
  const [lampState, setLampState] = useState(storedLampState);

  const checkLampState = (hour) => {
    if (hour >= 18 || hour < 6) {
      return "on";
    }
    return "off";
  };

  const handleSliderChange = (event) => {
    const newHour = event.target.value;
    setCurrentHour(newHour);

    const newLampState = checkLampState(newHour);
    setLampState(newLampState);

    localStorage.setItem("currentHour", newHour);
    localStorage.setItem("lampState", newLampState);
  };

  useEffect(() => {
    const newLampState = checkLampState(currentHour);
    setLampState(newLampState);
  }, [currentHour]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-semibold mb-6">Teste Você Mesmo</h1>
      <p className="text-xl mb-4">Controle a lâmpada ajustando o horário do dia!</p>

    <label htmlFor="hourSlider" className="text-lg font-medium">
        Hora do Dia: {currentHour}:00
    </label>
      <div className="mb-6 w-64">
        <input
          type="range"
          id="hourSlider"
          min="0"
          max="23"
          value={currentHour}
          onChange={handleSliderChange}
          className="w-full mt-2"
        />
      </div>

      <div className="flex flex-col items-center mb-6">
        {lampState === "on" ? (
          <FaLightbulb size={64} color="#FFEB3B" />
        ) : (
          <FaRegLightbulb size={64} color="#B0BEC5" />
        )}
        <p className="mt-4 text-xl">{lampState === "on" ? "Lâmpada Ligada" : "Lâmpada Desligada"}</p>
      </div>

      <div className="text-center">
        <p className="text-lg">
          A lâmpada está{" "}
          <span className={`${lampState === "on" ? "text-yellow-500" : "text-gray-500"}`}>
            {lampState === "on" ? "LIGADA" : "DESLIGADA"}
          </span>{" "}
          com base no horário {currentHour}:00.
        </p>
      </div>
    </div>
  );
}
