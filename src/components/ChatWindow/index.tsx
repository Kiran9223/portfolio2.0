import React, { useState } from 'react';
import { Box, IconButton, Paper, Typography, TextField, InputAdornment } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';

interface ChatWindowProps {
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      // TODO: Implement chat functionality
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: '32px', // Above status bar
        right: '20px',
        width: '350px',
        height: '500px',
        bgcolor: '#1E1E1E',
        border: '1px solid #333333',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        zIndex: 1000,
        animation: 'slideIn 0.3s ease-in-out',
        '@keyframes slideIn': {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 1,
          borderBottom: '1px solid #333333',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: '#2D2D2D',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SmartToyIcon sx={{ color: '#007ACC', fontSize: '1.2rem' }} />
          <Typography
            variant="subtitle2"
            sx={{
              color: '#D4D4D4',
              fontSize: '0.875rem',
              fontWeight: 500,
            }}
          >
            Portfolio Assistant
          </Typography>
        </Box>
        <IconButton
          onClick={onClose}
          sx={{
            color: '#858585',
            p: 0.5,
            '&:hover': { color: '#D4D4D4' },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Chat Messages Area */}
      <Box
        sx={{
          flex: 1,
          p: 2,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {/* Placeholder for future messages */}
        <Box
          sx={{
            alignSelf: 'flex-start',
            maxWidth: '80%',
            bgcolor: '#2D2D2D',
            p: 1.5,
            borderRadius: '4px',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#D4D4D4',
              fontSize: '0.875rem',
            }}
          >
            👋 Hi! I'm your portfolio assistant. How can I help you today?
          </Typography>
        </Box>
      </Box>

      {/* Input Area */}
      <Box
        sx={{
          p: 1,
          borderTop: '1px solid #333333',
          bgcolor: '#1E1E1E',
        }}
      >
        <TextField
          fullWidth
          multiline
          maxRows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          variant="outlined"
          size="small"
          sx={{
            '& .MuiOutlinedInput-root': {
              bgcolor: '#2D2D2D',
              color: '#D4D4D4',
              '& fieldset': {
                borderColor: '#333333',
              },
              '&:hover fieldset': {
                borderColor: '#007ACC',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#007ACC',
              },
            },
            '& .MuiInputBase-input': {
              color: '#D4D4D4',
              fontSize: '0.875rem',
            },
            '& .MuiInputBase-input::placeholder': {
              color: '#858585',
              opacity: 1,
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleSend}
                  disabled={!message.trim()}
                  sx={{
                    color: message.trim() ? '#007ACC' : '#858585',
                    '&:hover': {
                      color: message.trim() ? '#D4D4D4' : '#858585',
                    },
                  }}
                >
                  <SendIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Paper>
  );
};

export default ChatWindow; 