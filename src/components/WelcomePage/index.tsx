import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton, Paper, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { PortfolioSection } from '../../types';

interface WelcomePageProps {
  onClose: () => void;
  onNavigate: (section: PortfolioSection) => void;
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };

}

const WelcomePage: React.FC<WelcomePageProps> = ({ onClose, onNavigate, socialLinks }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the welcome page after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
  };

  if (!isVisible) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgcolor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'fadeIn 0.3s ease-in-out',
        '@keyframes fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }}
    >
      <Paper
        sx={{
          width: '800px',
          maxWidth: '90vw',
          maxHeight: '90vh',
          overflow: 'auto',
          bgcolor: '#1E1E1E',
          border: '1px solid #333333',
          borderRadius: '4px',
          position: 'relative',
          animation: 'slideIn 0.3s ease-in-out',
          '@keyframes slideIn': {
            '0%': { transform: 'translateY(-20px)', opacity: 0 },
            '100%': { transform: 'translateY(0)', opacity: 1 },
          },
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#858585',
            '&:hover': { color: '#D4D4D4' },
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box sx={{ p: 4 }}>
          <Typography
            variant="h4"
            sx={{
              color: '#D4D4D4',
              mb: 3,
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <CodeIcon sx={{ color: '#007ACC' }} />
            Welcome to My Portfolio
          </Typography>

          <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  color: '#D4D4D4',
                  mb: 2,
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <WorkIcon sx={{ color: '#007ACC' }} />
                Start
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Button
                  variant="text"
                  onClick={() => {
                    onNavigate('about');
                    onClose();
                  }}
                  sx={{
                    justifyContent: 'flex-start',
                    color: '#D4D4D4',
                    '&:hover': { bgcolor: '#2D2D2D' },
                  }}
                >
                  About Me
                </Button>
                <Button
                  variant="text"
                  onClick={() => {
                    onNavigate('projects');
                    onClose();
                  }}
                  sx={{
                    justifyContent: 'flex-start',
                    color: '#D4D4D4',
                    '&:hover': { bgcolor: '#2D2D2D' },
                  }}
                >
                  View Projects
                </Button>
                <Button
                  variant="text"
                  onClick={() => {
                    onNavigate('experience');
                    onClose();
                  }}
                  sx={{
                    justifyContent: 'flex-start',
                    color: '#D4D4D4',
                    '&:hover': { bgcolor: '#2D2D2D' },
                  }}
                >
                  Check Experience
                </Button>
              </Box>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  color: '#D4D4D4',
                  mb: 2,
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <SchoolIcon sx={{ color: '#007ACC' }} />
                Connect
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Button
                  variant="text"
                  startIcon={<GitHubIcon />}
                  onClick={() => handleSocialClick(socialLinks.github)}
                  sx={{
                    justifyContent: 'flex-start',
                    color: '#D4D4D4',
                    '&:hover': { bgcolor: '#2D2D2D' },
                  }}
                >
                  GitHub
                </Button>
                <Button
                  variant="text"
                  startIcon={<LinkedInIcon />}
                  onClick={() => handleSocialClick(socialLinks.linkedin)}
                  sx={{
                    justifyContent: 'flex-start',
                    color: '#D4D4D4',
                    '&:hover': { bgcolor: '#2D2D2D' },
                  }}
                >
                  LinkedIn
                </Button>
                <Button
                  variant="text"
                  startIcon={<EmailIcon />}
                  onClick={() => {
                    onNavigate('contact');
                    onClose();
                  }}
                  sx={{
                    justifyContent: 'flex-start',
                    color: '#D4D4D4',
                    '&:hover': { bgcolor: '#2D2D2D' },
                  }}
                >
                  Contact
                </Button>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ borderColor: '#333333', my: 3 }} />

          <Typography
            variant="body2"
            sx={{
              color: '#858585',
              textAlign: 'center',
              fontStyle: 'italic',
            }}
          >
            "Turning coffee into code since 2018 ☕"
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default WelcomePage; 