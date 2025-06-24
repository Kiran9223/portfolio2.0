import React from 'react';
import { Box, IconButton, Typography, List, ListItemButton, ListItemText, useTheme } from '@mui/material';
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
  const theme = useTheme();

  if (openFiles.length === 0) {
    return (
      <Box sx={{ 
        bgcolor: '#1E1E1E',
        borderBottom: '1px solid',
        borderColor: '#333333',
        p: { xs: 1, sm: 2 },
        maxHeight: { xs: '60vh', sm: 'none' },
        overflow: 'auto',
      }}>
        <Typography 
          variant="subtitle2" 
          sx={{ 
            mb: 2, 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            color: '#D4D4D4',
            fontSize: { xs: '0.7rem', sm: '0.75rem' },
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
                  py: { xs: 0.75, sm: 1 },
                  px: { xs: 1.5, sm: 2 },
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
                    fontSize: { xs: '0.8rem', sm: '0.875rem' },
                  }}
                  secondaryTypographyProps={{
                    variant: 'caption',
                    color: '#858585',
                    fontSize: { xs: '0.7rem', sm: '0.75rem' },
                  }}
                />
              </ListItemButton>
            );
          })}
          {tabHistory.length === 0 && (
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography sx={{ color: '#858585', fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
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
        minHeight: { xs: '40px', sm: '35px' },
        bgcolor: '#1E1E1E',
        borderBottom: '1px solid',
        borderColor: '#333333',
        display: 'flex',
        alignItems: 'center',
        px: { xs: 0.5, sm: 1 },
        gap: { xs: 0.25, sm: 0.5 },
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          height: { xs: '4px', sm: '6px' },
        },
        '&::-webkit-scrollbar-track': {
          background: '#1E1E1E',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#333333',
          borderRadius: '2px',
          '&:hover': {
            background: '#444444',
          },
        },
      }}
    >
      {openFiles.map((file) => (
        <Box
          key={file}
          sx={{
            minHeight: { xs: '40px', sm: '35px' },
            display: 'flex',
            alignItems: 'center',
            px: { xs: 1, sm: 2 },
            gap: { xs: 0.5, sm: 1 },
            cursor: 'pointer',
            borderRight: '1px solid',
            borderColor: '#333333',
            bgcolor: activeFile === file ? '#1E1E1E' : '#2D2D2D',
            minWidth: { xs: '120px', sm: 'auto' },
            flexShrink: 0,
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
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              fontWeight: 400,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: { xs: '80px', sm: '120px', md: '150px' },
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
              p: { xs: 0.25, sm: 0.5 },
              color: '#858585',
              minWidth: { xs: '24px', sm: 'auto' },
              minHeight: { xs: '24px', sm: 'auto' },
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