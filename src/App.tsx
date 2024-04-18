import { Box, Card, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

export default function App() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    // Data de destino: 06/06/2024
    const futureDate = new Date('2024-06-06T00:00:00');
  
    const interval = setInterval(() => {
      const difference = futureDate.getTime() - new Date().getTime();
  
      // Verificar se a data futura já passou
      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft('Tempo esgotado!');
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
        const formattedTimeLeft = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        setTimeLeft(formattedTimeLeft);
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
    <div style={{ display: 'flex', gap: '20px' }}>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <Typography sx={{ fontSize: 44 }} color="text.secondary">
            Tempo: {timeLeft}
          </Typography>
          <Typography sx={{ fontSize: 44 }} color="text.secondary">
            Data 15/04/2024
          </Typography>
          <Typography variant="h5" component="div">Greco: Peso mosca - 63,25 - 15/04/2024</Typography>
          <Typography variant="h5" component="div">David: Trogodita Asgardiano - 89,45 - 16/04/2024</Typography>
        </Card>
      </Box>
      <Box sx={{ minWidth: 275}}>
      <Card variant="outlined" sx={{ background: 'red' }}>
        <Typography style={{color: 'white'}} sx={{ fontSize: 44 }} color="text.secondary">
          Meta:
        </Typography>
        <Typography style={{color: 'white'}} sx={{ fontSize: 44 }} color="text.secondary">
          Data 06/06/2024
        </Typography>
        <Typography style={{color: 'white'}} variant="h5" component="div">Greco: Peso mosca - ????</Typography>
        <Typography style={{color: 'white'}} variant="h5" component="div">David: Trogodita Asgardiano - ????</Typography>
      </Card>
    </Box>
    </div>
    </>

  );
}
