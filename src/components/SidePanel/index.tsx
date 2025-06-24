import React, { useState } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, IconButton, Tooltip, useTheme, useMediaQuery, Drawer } from '@mui/material';
import { FileList, PortfolioSection } from '../../types';
import DescriptionIcon from '@mui/icons-material/Description';
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
import MenuIcon from '@mui/icons-material/Menu';
import { socialLinks } from '../../content';

interface SidePanelProps {
  fileList: FileList;
  selectedFile: PortfolioSection;
  setSelectedFile: (file: PortfolioSection) => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ fileList, selectedFile, setSelectedFile }) => {
  const [isExplorerCollapsed, setIsExplorerCollapsed] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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

  const handleFileSelect = (fileId: PortfolioSection) => {
    setSelectedFile(fileId);
    if (isMobile) {
      setIsMobileDrawerOpen(false);
    }
  };

  const ActivityBar = () => (
    <Box
      sx={{
        width: { xs: '40px', sm: '48px' },
        bgcolor: '#252526',
        borderRight: '1px solid',
        borderColor: '#333333',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 1,
        height: '100%',
      }}
      role="toolbar"
      aria-label="Activity Bar"
    >
      {isMobile && (
        <IconButton
          onClick={() => setIsMobileDrawerOpen(true)}
          sx={{
            color: '#858585',
            mb: 1,
            transition: 'all 0.2s ease',
            '&:hover': {
              color: '#007ACC',
              bgcolor: '#2D2D2D',
            },
          }}
          aria-label="Open file explorer"
          aria-expanded={isMobileDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
      )}
      
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {!isMobile && (
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
              aria-label={`${isExplorerCollapsed ? 'Expand' : 'Collapse'} explorer`}
              aria-expanded={!isExplorerCollapsed}
            >
              <FolderOpenIcon />
            </IconButton>
          </Tooltip>
        )}
        {sections.map((section) => (
          <Tooltip 
            key={section.id}
            title={section.tooltip} 
            placement="right"
            arrow
            disableHoverListener={isMobile}
          >
            <IconButton
              onClick={() => handleFileSelect(section.id)}
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
              aria-label={`Open ${section.tooltip.toLowerCase()}`}
              aria-pressed={selectedFile === section.id}
            >
              {section.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Box>

      {/* Social Links */}
      <Box sx={{ mt: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }} role="group" aria-label="Social links">
        {socialLinks.map((link) => (
          <Tooltip 
            key={link.id}
            title={link.platform} 
            placement="right"
            arrow
            disableHoverListener={isMobile}
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
              aria-label={`Open ${link.platform}`}
            >
              {getSocialIcon(link.icon)}
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );

  const ExplorerPanel = () => (
    <Box
      sx={{
        width: isExplorerCollapsed ? 0 : { xs: '100%', sm: '240px' },
        bgcolor: '#252526',
        borderRight: '1px solid',
        borderColor: '#333333',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
        height: '100%',
      }}
      role="navigation"
      aria-label="File Explorer"
    >
      <Box
        sx={{
          p: { xs: 1.5, sm: 2 },
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
            fontSize: { xs: '0.7rem', sm: '0.75rem' },
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          Explorer
        </Typography>
      </Box>

      <List sx={{ p: 0, flex: 1, overflow: 'auto' }} role="listbox">
        {fileList.map((file) => (
          <ListItem key={file.id} disablePadding>
            <ListItemButton
              onClick={() => handleFileSelect(file.id)}
              selected={selectedFile === file.id}
              sx={{
                py: { xs: 1, sm: 1.5 },
                px: { xs: 1.5, sm: 2 },
                '&.Mui-selected': {
                  bgcolor: '#2D2D2D',
                  '&:hover': {
                    bgcolor: '#2D2D2D',
                  },
                },
                '&:hover': {
                  bgcolor: '#2D2D2D',
                },
              }}
              role="option"
              aria-selected={selectedFile === file.id}
            >
              <ListItemIcon sx={{ minWidth: { xs: 32, sm: 40 } }}>
                <DescriptionIcon 
                  sx={{ 
                    color: selectedFile === file.id ? '#007ACC' : '#858585',
                    fontSize: { xs: '1.1rem', sm: '1.25rem' }
                  }} 
                />
              </ListItemIcon>
              <ListItemText
                primary={file.label}
                secondary={file.fileName}
                primaryTypographyProps={{
                  variant: 'body2',
                  color: selectedFile === file.id ? '#D4D4D4' : '#858585',
                  fontSize: { xs: '0.8rem', sm: '0.875rem' },
                  fontWeight: selectedFile === file.id ? 500 : 400,
                }}
                secondaryTypographyProps={{
                  variant: 'caption',
                  color: '#858585',
                  fontSize: { xs: '0.7rem', sm: '0.75rem' },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  if (isMobile) {
    return (
      <>
        <ActivityBar />
        <Drawer
          anchor="left"
          open={isMobileDrawerOpen}
          onClose={() => setIsMobileDrawerOpen(false)}
          ModalProps={{
            keepMounted: false, // Better for mobile performance
            disableAutoFocus: true,
            disableEnforceFocus: true,
            disableRestoreFocus: true,
          }}
          sx={{
            '& .MuiDrawer-paper': {
              width: '280px',
              bgcolor: '#252526',
              borderRight: '1px solid #333333',
            },
            '& .MuiBackdrop-root': {
              bgcolor: 'rgba(0, 0, 0, 0.5)',
            },
          }}
        >
          <ExplorerPanel />
        </Drawer>
      </>
    );
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <ActivityBar />
      <ExplorerPanel />
    </Box>
  );
};

export default SidePanel; 