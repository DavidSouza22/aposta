import { Card, Grid, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import CardDavid from './components/CardDavid';
import CardGreco from './components/CardGreco';

export default function App() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    // data fim 06/06/2024
    const futureDate = new Date('2024-06-06T00:00:00');

    const interval = setInterval(() => {
      const difference = futureDate.getTime() - new Date().getTime();

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
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card variant="outlined">
          <Typography sx={{ fontSize: 30 }} color="text.secondary">
            Tempo: {timeLeft}
          </Typography>
          <Typography sx={{ fontSize: 30 }} color="text.secondary">
            Data 15/04/2024
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <CardGreco />
      </Grid>
      <Grid item xs={12} md={3}>
        <CardDavid />
      </Grid>
      <Grid item xs={12}>
        <Card variant="outlined" sx={{ background: 'linear-gradient(135deg, #ff4136, #ff851b)', borderRadius: '12px', padding: '20px' }}>
          <Typography sx={{ fontSize: 32, color: 'white', fontWeight: 'bold', marginBottom: '10px' }}>
            Meta:
          </Typography>
          <Typography sx={{ fontSize: 24, color: 'white', marginBottom: '10px' }}>
            Data 06/06/2024
          </Typography>
          <Typography sx={{ fontSize: 20, color: 'white', marginBottom: '10px' }} variant="h5" component="div">
            Greco: Peso mosca - ????
          </Typography>
          <Typography sx={{ fontSize: 20, color: 'white' }} variant="h5" component="div">
            David: Trogodita Asgardiano - ????
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}
