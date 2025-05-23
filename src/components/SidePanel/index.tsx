import React, { useState } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, IconButton, Tooltip } from '@mui/material';
import { FileList, FileItem, PortfolioSection } from '../../types';
import DescriptionIcon from '@mui/icons-material/Description';
import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { socialLinks } from '../../content';

interface SidePanelProps {
  fileList: FileList;
  selectedFile: PortfolioSection;
  setSelectedFile: (file: PortfolioSection) => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ fileList, selectedFile, setSelectedFile }) => {
  const [isExplorerCollapsed, setIsExplorerCollapsed] = useState(false);

  const sections = [
    { id: 'about' as PortfolioSection, icon: <HomeIcon />, tooltip: 'About' },
    { id: 'projects' as PortfolioSection, icon: <CodeIcon />, tooltip: 'Projects' },
    { id: 'experience' as PortfolioSection, icon: <WorkIcon />, tooltip: 'Experience' },
    { id: 'skills' as PortfolioSection, icon: <SchoolIcon />, tooltip: 'Skills' },
    { id: 'certifications' as PortfolioSection, icon: <CardMembershipIcon />, tooltip: 'Certifications' },
    { id: 'resume' as PortfolioSection, icon: <PictureAsPdfIcon />, tooltip: 'Resume' },
    { id: 'contact' as PortfolioSection, icon: <EmailIcon />, tooltip: 'Contact' },
  ];

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'GitHubIcon':
        return <GitHubIcon />;
      case 'LinkedInIcon':
        return <LinkedInIcon />;
      case 'EmailIcon':
        return <EmailIcon />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Activity Bar */}
      <Box
        sx={{
          width: '48px',
          bgcolor: '#252526',
          borderRight: '1px solid',
          borderColor: '#333333',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 1,
          height: '100%',
        }}
      >
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Tooltip 
            title="Explorer" 
            placement="right"
            arrow
          >
            <IconButton
              onClick={() => setIsExplorerCollapsed(!isExplorerCollapsed)}
              sx={{
                color: !isExplorerCollapsed ? '#007ACC' : '#858585',
                mb: 1,
                transition: 'all 0.2s ease',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '2px',
                  height: !isExplorerCollapsed ? '24px' : '0',
                  bgcolor: '#007ACC',
                  transition: 'height 0.2s ease',
                },
                '&:hover': {
                  color: '#007ACC',
                  bgcolor: '#2D2D2D',
                },
              }}
            >
              <FolderOpenIcon />
            </IconButton>
          </Tooltip>
          {sections.map((section) => (
            <Tooltip 
              key={section.id}
              title={section.tooltip} 
              placement="right"
              arrow
            >
              <IconButton
                onClick={() => setSelectedFile(section.id)}
                sx={{
                  color: selectedFile === section.id ? '#007ACC' : '#858585',
                  mb: 1,
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '2px',
                    height: selectedFile === section.id ? '24px' : '0',
                    bgcolor: '#007ACC',
                    transition: 'height 0.2s ease',
                  },
                  '&:hover': {
                    color: '#007ACC',
                    bgcolor: '#2D2D2D',
                  },
                }}
              >
                {section.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Box>

        {/* Social Links */}
        <Box sx={{ mt: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {socialLinks.map((link) => (
            <Tooltip 
              key={link.id}
              title={link.platform} 
              placement="right"
              arrow
            >
              <IconButton
                onClick={() => window.open(link.url, '_blank')}
                sx={{
                  color: '#858585',
                  mb: 1,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: '#007ACC',
                    bgcolor: '#2D2D2D',
                  },
                }}
              >
                {getSocialIcon(link.icon)}
              </IconButton>
            </Tooltip>
          ))}
        </Box>
      </Box>

      {/* Explorer Panel */}
      <Box
        sx={{
          width: isExplorerCollapsed ? 0 : '240px',
          bgcolor: '#252526',
          borderRight: '1px solid',
          borderColor: '#333333',
          display: 'flex',
          flexDirection: 'column',
          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            p: 2,
            borderBottom: '1px solid',
            borderColor: '#333333',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: '#D4D4D4',
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Explorer
          </Typography>
        </Box>

        <List sx={{ p: 1 }}>
          {fileList.map((file: FileItem) => (
            <ListItem
              key={file.id}
              disablePadding
              sx={{
                mb: 0.5,
              }}
            >
              <ListItemButton
                selected={selectedFile === file.id}
                onClick={() => setSelectedFile(file.id)}
                sx={{
                  borderRadius: '4px',
                  minHeight: '28px',
                  '&.Mui-selected': {
                    bgcolor: '#2D2D2D',
                    '&:hover': {
                      bgcolor: '#2D2D2D',
                    },
                    '& .MuiListItemIcon-root': {
                      color: '#007ACC',
                    },
                    '& .MuiListItemText-primary': {
                      color: '#D4D4D4',
                    },
                  },
                  '&:hover': {
                    bgcolor: '#2D2D2D',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: '28px',
                    color: '#858585',
                  }}
                >
                  {file.fileName.endsWith('.md') ? <DescriptionIcon fontSize="small" /> : <FolderIcon fontSize="small" />}
                </ListItemIcon>
                <ListItemText
                  primary={file.label}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: '0.875rem',
                      color: '#858585',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SidePanel; 