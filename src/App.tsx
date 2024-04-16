import { Box, Card, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

export default function App() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    // Data daqui a 50 dias
    const futureDate = new Date(tomorrow.getTime() + 49 * 24 * 60 * 60 * 1000);

    const interval = setInterval(() => {

    const difference = futureDate.getTime() - new Date().getTime();


      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);


      const formattedTimeLeft = `${days}d ${hours}h ${minutes}m ${seconds}s`;


      setTimeLeft(formattedTimeLeft);


      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft('Tempo esgotado!');
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
