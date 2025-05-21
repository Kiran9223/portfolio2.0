import React from 'react';
import { Box, Typography } from '@mui/material';

const TitleBar: React.FC = () => {
  return (
    <Box
      sx={{
        height: '32px',
        bgcolor: '#1E1E1E',
        borderBottom: '1px solid',
        borderColor: '#333333',
        display: 'flex',
        alignItems: 'center',
        px: 2,
        WebkitAppRegion: 'drag',
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          color: '#858585',
          fontSize: '0.75rem',
          fontWeight: 500,
          letterSpacing: '0.5px',
        }}
      >
        Portfolio
      </Typography>
    </Box>
  );
};

export default TitleBar; 