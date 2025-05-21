import React from 'react';
import { Box, IconButton, Typography, List, ListItemButton, ListItemText } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HistoryIcon from '@mui/icons-material/History';
import { PortfolioSection, FileList } from '../../types';

interface TabsProps {
  openFiles: PortfolioSection[];
  activeFile: PortfolioSection;
  onFileSelect: (file: PortfolioSection) => void;
  onFileClose: (file: PortfolioSection) => void;
  fileList: FileList;
  tabHistory: PortfolioSection[];
  onReopenTab: (file: PortfolioSection) => void;
}

const Tabs: React.FC<TabsProps> = ({ 
  openFiles, 
  activeFile, 
  onFileSelect, 
  onFileClose,
  fileList,
  tabHistory,
  onReopenTab
}) => {
  if (openFiles.length === 0) {
    return (
      <Box sx={{ 
        bgcolor: '#1E1E1E',
        borderBottom: '1px solid',
        borderColor: '#333333',
        p: 2,
      }}>
        <Typography 
          variant="subtitle2" 
          sx={{ 
            mb: 2, 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            color: '#D4D4D4',
            fontSize: '0.75rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          <HistoryIcon fontSize="small" sx={{ color: '#858585' }} />
          Recently Closed
        </Typography>
        <List sx={{ p: 0 }}>
          {tabHistory.map((fileId) => {
            const file = fileList.find(f => f.id === fileId);
            if (!file) return null;
            
            return (
              <ListItemButton
                key={fileId}
                onClick={() => onReopenTab(fileId)}
                sx={{
                  py: 1,
                  px: 2,
                  borderRadius: '4px',
                  '&:hover': {
                    bgcolor: '#2D2D2D',
                  },
                }}
              >
                <ListItemText
                  primary={file.label}
                  secondary={file.fileName}
                  primaryTypographyProps={{
                    variant: 'body2',
                    color: '#D4D4D4',
                    fontSize: '0.875rem',
                  }}
                  secondaryTypographyProps={{
                    variant: 'caption',
                    color: '#858585',
                  }}
                />
              </ListItemButton>
            );
          })}
          {tabHistory.length === 0 && (
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography sx={{ color: '#858585', fontSize: '0.875rem' }}>
                    No recently closed tabs
                  </Typography>
                }
              />
            </ListItemButton>
          )}
        </List>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: '35px',
        bgcolor: '#1E1E1E',
        borderBottom: '1px solid',
        borderColor: '#333333',
        display: 'flex',
        alignItems: 'center',
        px: 1,
        gap: 0.5,
      }}
    >
      {openFiles.map((file) => (
        <Box
          key={file}
          sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            px: 2,
            gap: 1,
            cursor: 'pointer',
            borderRight: '1px solid',
            borderColor: '#333333',
            bgcolor: activeFile === file ? '#1E1E1E' : '#2D2D2D',
            '&:hover': {
              bgcolor: activeFile === file ? '#1E1E1E' : '#2D2D2D',
            },
          }}
          onClick={() => onFileSelect(file)}
        >
          <Typography
            variant="body2"
            sx={{
              color: activeFile === file ? '#D4D4D4' : '#858585',
              fontSize: '0.875rem',
              fontWeight: 400,
            }}
          >
            {fileList.find(f => f.id === file)?.label || file}
          </Typography>
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              onFileClose(file);
            }}
            sx={{
              p: 0.5,
              color: '#858585',
              '&:hover': {
                color: '#D4D4D4',
                bgcolor: '#3D3D3D',
              },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};

export default Tabs; 