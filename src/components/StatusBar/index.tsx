import React, { useState } from 'react';
import { Box, Typography, IconButton, Tooltip, useTheme } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ChatWindow from '../ChatWindow';

const StatusBar: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          height: { xs: '28px', sm: '22px' },
          bgcolor: '#007ACC',
          borderTop: '1px solid',
          borderColor: '#0066AA',
          display: 'flex',
          alignItems: 'center',
          px: { xs: 1, sm: 2 },
          gap: { xs: 1, sm: 2 },
          overflow: 'hidden',
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: '#FFFFFF',
            fontSize: { xs: '0.65rem', sm: '0.75rem' },
            fontWeight: 400,
            whiteSpace: 'nowrap',
          }}
        >
          Portfolio
        </Typography>
        <Box
          sx={{
            height: '100%',
            width: '1px',
            bgcolor: '#0066AA',
            display: { xs: 'none', sm: 'block' },
          }}
        />
        <Typography
          variant="caption"
          sx={{
            color: '#FFFFFF',
            fontSize: { xs: '0.65rem', sm: '0.75rem' },
            fontWeight: 400,
            display: { xs: 'none', sm: 'block' },
            whiteSpace: 'nowrap',
          }}
        >
          Built with React and TypeScript
        </Typography>
        <Box sx={{ flex: 1 }} />
        <Typography
          variant="caption"
          sx={{
            color: '#FFFFFF',
            fontSize: { xs: '0.65rem', sm: '0.75rem' },
            fontWeight: 400,
            display: { xs: 'none', md: 'block' },
            whiteSpace: 'nowrap',
          }}
        >
          All rights reserved
        </Typography>
        <Tooltip title="Portfolio Assistant" placement="top">
          <IconButton
            onClick={() => setIsChatOpen(true)}
            sx={{
              color: '#FFFFFF',
              p: { xs: 0.25, sm: 0.5 },
              position: 'relative',
              minWidth: { xs: '32px', sm: 'auto' },
              minHeight: { xs: '32px', sm: 'auto' },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: '28px', sm: '32px' },
                height: { xs: '28px', sm: '32px' },
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%)',
                transition: 'all 0.3s ease',
              },
              '&:hover': {
                color: '#FFFFFF',
                '&::before': {
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%)',
                  width: { xs: '36px', sm: '40px' },
                  height: { xs: '36px', sm: '40px' },
                },
              },
            }}
          >
            <SmartToyIcon 
              sx={{ 
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))',
                transition: 'all 0.3s ease',
              }} 
            />
          </IconButton>
        </Tooltip>
      </Box>
      {isChatOpen && <ChatWindow onClose={() => setIsChatOpen(false)} />}
    </>
  );
};

export default StatusBar; 