import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Dialog, 
  DialogContent, 
  TextField, 
  List, 
  ListItem, 
  ListItemText, 
  Typography,
  Paper,
  Fade,
} from '@mui/material';
import { InsertDriveFile as FileIcon } from '@mui/icons-material';
import { PortfolioSection } from '../../types';

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  onSelect: (fileId: PortfolioSection) => void;
  fileList: Array<{ id: PortfolioSection; label: string; fileName: string }>;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({
  open,
  onClose,
  onSelect,
  fileList,
}) => {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredFiles = fileList.filter(file => 
    file.fileName.toLowerCase().includes(search.toLowerCase()) ||
    file.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredFiles.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : prev);
      } else if (e.key === 'Enter' && filteredFiles[selectedIndex]) {
        e.preventDefault();
        onSelect(filteredFiles[selectedIndex].id);
        onClose();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    if (open) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, filteredFiles, selectedIndex, onSelect, onClose]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 1,
          overflow: 'hidden',
        },
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
          <TextField
            autoFocus
            fullWidth
            variant="standard"
            placeholder="Type to search files..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              disableUnderline: true,
              sx: { 
                fontSize: '1.1rem',
                '& input': {
                  color: 'text.primary',
                },
              },
            }}
          />
        </Box>
        <List sx={{ p: 0, maxHeight: '300px', overflow: 'auto' }}>
          {filteredFiles.map((file, index) => (
            <ListItem
              key={file.id}
              button
              selected={index === selectedIndex}
              onClick={() => {
                onSelect(file.id);
                onClose();
              }}
              sx={{
                py: 1,
                '&.Mui-selected': {
                  bgcolor: 'action.selected',
                },
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
            >
              <ListItemText
                primary={
                  <Typography variant="body1" component="div">
                    {file.fileName}
                  </Typography>
                }
                secondary={
                  <Typography variant="caption" color="text.secondary">
                    {file.label}
                  </Typography>
                }
              />
            </ListItem>
          ))}
          {filteredFiles.length === 0 && (
            <ListItem>
              <ListItemText
                primary={
                  <Typography color="text.secondary">
                    No files found
                  </Typography>
                }
              />
            </ListItem>
          )}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default CommandPalette; 