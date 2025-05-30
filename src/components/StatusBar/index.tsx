import React, { useState } from 'react';
import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ChatWindow from '../ChatWindow';

const StatusBar: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          height: '22px',
          bgcolor: '#007ACC',
          borderTop: '1px solid',
          borderColor: '#0066AA',
          display: 'flex',
          alignItems: 'center',
          px: 2,
          gap: 2,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: '#FFFFFF',
            fontSize: '0.75rem',
            fontWeight: 400,
          }}
        >
          Portfolio
        </Typography>
        <Box
          sx={{
            height: '100%',
            width: '1px',
            bgcolor: '#0066AA',
          }}
        />
        <Typography
          variant="caption"
          sx={{
            color: '#FFFFFF',
            fontSize: '0.75rem',
            fontWeight: 400,
          }}
        >Built with React and TypeScript
        </Typography>
        <Box sx={{ flex: 1 }} />
        <Typography
          variant="caption"
          sx={{
            color: '#FFFFFF',
            fontSize: '0.75rem',
            fontWeight: 400,
          }}
        >All rights reserved
        </Typography>
        <Tooltip title="Portfolio Assistant" placement="top">
          <IconButton
            onClick={() => setIsChatOpen(true)}
            sx={{
              color: '#FFFFFF',
              p: 0.5,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%)',
                transition: 'all 0.3s ease',
              },
              '&:hover': {
                color: '#FFFFFF',
                '&::before': {
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%)',
                  width: '40px',
                  height: '40px',
                },
              },
            }}
          >
            <SmartToyIcon 
              sx={{ 
                fontSize: '1.5rem',
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