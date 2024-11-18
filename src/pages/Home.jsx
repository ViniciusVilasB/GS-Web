import { useState, useEffect } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { useSpring, animated } from "@react-spring/web";
import BenefitsSection from '../components/BenefitsSection';
import SuccessCases from '../components/SuccessCases';

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

      <div className="bg-white py-16">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-semibold text-minha-cor-1 mb-6">Quem Somos Nós</h2>
          <p className="text-xl text-gray-700 mb-8">Somos uma equipe apaixonada por transformar a maneira como a energia é consumida, usando tecnologia inovadora para otimizar o consumo e promover a sustentabilidade.</p>

          <div className="text-left mx-6 md:mx-16">
            <h3 className="text-2xl font-semibold text-minha-cor-1 mb-4">Nossa Missão</h3>
            <p className="text-lg text-gray-600 mb-6">Nossa missão é ajudar empresas e residências a reduzir o consumo de energia, proporcionando uma plataforma inteligente baseada em IoT e Machine Learning que oferece controle em tempo real e soluções de otimização energética.</p>
          </div>
        </div>
      </div>

      <BenefitsSection />

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

      <SuccessCases />

    </div>
  );
}
