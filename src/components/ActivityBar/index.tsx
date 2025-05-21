import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import { PortfolioSection } from '../../types';

interface ActivityBarProps {
  selectedSection: PortfolioSection;
  onSectionSelect: (section: PortfolioSection) => void;
}

const ActivityBar: React.FC<ActivityBarProps> = ({ selectedSection, onSectionSelect }) => {
  const sections = [
    { id: 'about' as PortfolioSection, icon: <HomeIcon />, tooltip: 'About' },
    { id: 'projects' as PortfolioSection, icon: <CodeIcon />, tooltip: 'Projects' },
    { id: 'experience' as PortfolioSection, icon: <WorkIcon />, tooltip: 'Experience' },
    { id: 'skills' as PortfolioSection, icon: <SchoolIcon />, tooltip: 'Skills' },
    { id: 'contact' as PortfolioSection, icon: <EmailIcon />, tooltip: 'Contact' },
  ];

  return (
    <Box
      sx={{
        width: '48px',
        bgcolor: '#1E1E1E',
        borderRight: '1px solid',
        borderColor: '#333333',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 1,
      }}
    >
      {sections.map((section) => (
        <Tooltip 
          key={section.id}
          title={section.tooltip} 
          placement="right"
          arrow
        >
          <IconButton
            onClick={() => onSectionSelect(section.id)}
            sx={{
              color: selectedSection === section.id ? '#007ACC' : '#858585',
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
                height: selectedSection === section.id ? '24px' : '0',
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
  );
};

export default ActivityBar; 