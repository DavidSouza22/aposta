import React, { useState } from 'react';
import { Button, CircularProgress, Typography, Box } from '@mui/material';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setLoading(true);
    setMessage('');

    setTimeout(() => {
      setLoading(false);
      setMessage('Eu te amo');
    }, 2000); // Simula um carregamento de 2 segundos
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        disabled={loading}
        sx={{ marginBottom: 2 }}
      >
        {loading ? <CircularProgress size={24} /> : 'Clique em mim'}
      </Button>
      {message && <Typography variant="h4">{message}</Typography>}
    </Box>
  );
};

export default App;
