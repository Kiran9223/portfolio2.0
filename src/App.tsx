import React, { useState, useEffect } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import SidePanel from './components/SidePanel';
import Editor from './components/Editor';
import StatusBar from './components/StatusBar';
import TitleBar from './components/TitleBar';
import Tabs from './components/Tabs';
import CommandPalette from './components/CommandPalette';
import WelcomePage from './components/WelcomePage';
import { fileList, content } from './content';
import { PortfolioSection } from './types';
import showConsoleMessages from './utils/consoleMessages';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7C3AED', // Vibrant purple
      light: '#9F67FF',
      dark: '#5B21B6',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#10B981', // Emerald green
      light: '#34D399',
      dark: '#059669',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0F172A', // Deep blue-gray
      paper: '#1E293B',
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
    },
    divider: 'rgba(148, 163, 184, 0.1)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#1E293B',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#334155',
            borderRadius: '4px',
            '&:hover': {
              background: '#475569',
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          transition: 'all 0.2s ease-in-out',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease-in-out',
        },
      },
    },
  },
});

function App() {
  const [selectedFile, setSelectedFile] = useState<PortfolioSection>('about');
  const [openFiles, setOpenFiles] = useState<PortfolioSection[]>(['about']);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [tabHistory, setTabHistory] = useState<PortfolioSection[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);

  const socialLinks = {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    email: 'mailto:your.email@example.com',
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    showConsoleMessages();
  }, []);

  const handleFileSelect = (fileId: PortfolioSection) => {
    setSelectedFile(fileId);
    if (!openFiles.includes(fileId)) {
      setOpenFiles([...openFiles, fileId]);
    }
  };

  const handleTabClose = (fileId: PortfolioSection) => {
    setTabHistory(prev => [fileId, ...prev].slice(0, 10));
    const newOpenFiles = openFiles.filter(id => id !== fileId);
    setOpenFiles(newOpenFiles);
    if (selectedFile === fileId && newOpenFiles.length > 0) {
      setSelectedFile(newOpenFiles[newOpenFiles.length - 1]);
    }
  };

  const handleReopenTab = (fileId: PortfolioSection) => {
    setOpenFiles([...openFiles, fileId]);
    setSelectedFile(fileId);
    setTabHistory(prev => prev.filter(id => id !== fileId));
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        height: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(180deg, rgba(124, 58, 237, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
          zIndex: 0,
          pointerEvents: 'none',
        },
      }}>
        {showWelcome && (
          <WelcomePage 
            onClose={() => setShowWelcome(false)} 
            onNavigate={handleFileSelect}
            socialLinks={socialLinks}
          />
        )}
        <TitleBar />
        <Box sx={{ 
          display: 'flex', 
          flex: 1,
          overflow: 'hidden',
          position: 'relative',
          zIndex: 1,
        }}>
          <SidePanel 
            fileList={fileList} 
            selectedFile={selectedFile} 
            setSelectedFile={handleFileSelect} 
          />
          <Box sx={{ 
            flex: 1, 
            display: 'flex', 
            flexDirection: 'column',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '1px',
              background: 'linear-gradient(180deg, rgba(124, 58, 237, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%)',
              opacity: 0.5,
            },
          }}>
            <Tabs
              openFiles={openFiles}
              activeFile={selectedFile}
              onFileSelect={setSelectedFile}
              onFileClose={handleTabClose}
              fileList={fileList}
              tabHistory={tabHistory}
              onReopenTab={handleReopenTab}
            />
            {openFiles.length > 0 && (
              <Editor 
                activeTab={selectedFile}
                content={content[selectedFile]} 
                fileName={fileList.find(f => f.id === selectedFile)?.fileName || ''}
              />
            )}
          </Box>
        </Box>
        <StatusBar />
        <CommandPalette
          open={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
          onSelect={handleFileSelect}
          fileList={fileList}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App; 