import { useState, useEffect } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { useSpring, animated } from "@react-spring/web";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://67396034a3a36b5a62ee7a69.mockapi.io/sensor-data/data";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(API_URL);
        const updatedData = response.data.map((item, index) => {
          const hour = index % 24;
          const formattedHour = String(hour).padStart(2, '0') + ":00";
          
          return {
            ...item,
            hora: formattedHour,
          };
        });

        setData(updatedData);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const [scrollY, setScrollY] = useState(0);
  const animateGraph = useSpring({
    opacity: scrollY > 300 ? 1 : 0,
    transform: scrollY > 300 ? 'translateY(0)' : 'translateY(100px)',
    config: { tension: 180, friction: 12 },
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen items-center text-minha-cor-1">

      <img src="banner.jpg" alt="Banner gráfico" className="w-full" />

      <h1 className="text-4xl font-semibold pb-3 pt-7">Monitoramento em Tempo Real do Consumo Energético</h1>

      <p className="text-xl">Acompanhe seu desempenho de consumo ao longo do dia com gráficos dinâmicos.</p>
      <div className="p-4">
        {loading ? (
          <p>Carregando gráfico...</p>
        ) : (
          <animated.div style={animateGraph}>
            <LineChart width={600} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hora" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="kWh" stroke="#1a2f45" animationDuration={500} />
            </LineChart>
          </animated.div>
        )}
      </div>


    </div>
  );
}
