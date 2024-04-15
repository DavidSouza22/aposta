import { useState, useEffect } from 'react';

export default function App() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    // Data de amanhã
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    // Data daqui a 50 dias
    const futureDate = new Date(tomorrow.getTime() + 50 * 24 * 60 * 60 * 1000);

    const interval = setInterval(() => {
      // Calcula o tempo restante em milissegundos
      const difference = futureDate.getTime() - new Date().getTime();

      // Calcula dias, horas, minutos e segundos restantes
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      // Formata a string do tempo restante
      const formattedTimeLeft = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      // Atualiza o estado com o tempo restante formatado
      setTimeLeft(formattedTimeLeft);

      // Verifica se o tempo acabou
      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft('Tempo esgotado!');
      }
    }, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h2 className="text-center">Tempo: {timeLeft}</h2>
    </main>
  );
}
