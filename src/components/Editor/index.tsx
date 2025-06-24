import React from 'react';
import { Box, Typography, Paper, Chip, Link, Grid, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Project, Skill, WorkExperience, Certification } from '../../types';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

// Configure marked
marked.setOptions({
  gfm: true,
  breaks: true
});

interface EditorProps {
  activeTab: string;
  content: { title: string; body: string };
  fileName: string;
}

const Editor: React.FC<EditorProps> = ({ activeTab, content, fileName }) => {
  const renderContent = () => {
    if (fileName.endsWith('.pdf')) {
      // For resume section, render HTML directly with iframe
      return (
        <Box sx={{ 
          p: { xs: 1, sm: 1.5, md: 3 },
          maxWidth: '100%',
          mx: 'auto',
          overflow: 'auto',
          height: '100%',
          flex: 1,
          '& iframe': {
            width: '100%',
            height: { xs: '600px', sm: '700px', md: '800px' },
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          },
          '& .download-button': {
            display: 'inline-block',
            padding: { xs: '8px 16px', sm: '10px 20px' },
            backgroundColor: '#7C3AED',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            transition: 'background-color 0.2s',
            marginTop: '20px',
            fontSize: { xs: '0.875rem', sm: '1rem' },
            '&:hover': {
              backgroundColor: '#6D28D9'
            }
          },
          '& a': {
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'none',
            }
          }
        }}>
          <div dangerouslySetInnerHTML={{ __html: content.body }} />
        </Box>
      );
    }

    if (fileName.endsWith('.md')) {
      const htmlContent = DOMPurify.sanitize(marked.parse(content.body) as string);
      return (
        <Box sx={{ 
          p: { xs: 1, sm: 1.5, md: 3 },
          maxWidth: '100%',
          mx: 'auto',
          overflow: 'auto',
          height: '100%',
          flex: 1,
          '& h1': {
            fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' },
            fontWeight: 500,
            mb: { xs: 1, sm: 1.5, md: 3 },
            color: '#D4D4D4',
            borderBottom: '1px solid',
            borderColor: '#333333',
            pb: { xs: 0.5, sm: 0.75, md: 2 },
          },
          '& h2': {
            fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
            fontWeight: 500,
            mt: { xs: 1.5, sm: 2, md: 4 },
            mb: { xs: 0.75, sm: 1, md: 2 },
            color: '#D4D4D4',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            '&::before': {
              content: '""',
              display: 'inline-block',
              width: '3px',
              height: '1.2em',
              background: '#007ACC',
              borderRadius: '2px',
              mr: 1,
            },
          },
          '& h3': {
            fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
            fontWeight: 500,
            mt: { xs: 1, sm: 1.5, md: 3 },
            mb: { xs: 0.75, sm: 1, md: 2 },
            color: '#D4D4D4',
          },
          '& p': {
            fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1.05rem' },
            lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 },
            mb: { xs: 1, sm: 1.25, md: 2 },
            color: '#858585',
          },
          '& ul, & ol': {
            pl: { xs: 1.5, sm: 2, md: 3 },
            mb: { xs: 1, sm: 1.25, md: 2 },
            '& li': {
              fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1.05rem' },
              lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 },
              mb: 0.5,
              color: '#858585',
              position: 'relative',
              '&::marker': {
                color: '#007ACC',
              },
            },
          },
          '& a': {
            color: '#007ACC',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            position: 'relative',
            fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -2,
              left: 0,
              width: '100%',
              height: '1px',
              background: '#007ACC',
              transform: 'scaleX(0)',
              transformOrigin: 'right',
              transition: 'transform 0.3s ease-in-out',
            },
            '&:hover': {
              color: '#4D9CD1',
              '&::after': {
                transform: 'scaleX(1)',
                transformOrigin: 'left',
              },
            },
          },
          '& blockquote': {
            borderLeft: '3px solid',
            borderColor: '#007ACC',
            pl: { xs: 1, sm: 1.5, md: 2 },
            py: { xs: 0.5, sm: 0.75, md: 1 },
            my: { xs: 1, sm: 1.5, md: 2 },
            bgcolor: '#2D2D2D',
            borderRadius: '0 4px 4px 0',
            position: 'relative',
            '& p': {
              position: 'relative',
              zIndex: 1,
              mb: 0,
              fontStyle: 'italic',
              color: '#858585',
            },
          },
          '& code': {
            bgcolor: '#2D2D2D',
            px: { xs: 0.5, sm: 0.75, md: 1 },
            py: { xs: 0.25, sm: 0.25, md: 0.5 },
            borderRadius: 1,
            fontFamily: 'monospace',
            fontSize: { xs: '0.8em', sm: '0.85em', md: '0.9em' },
            color: '#D4D4D4',
          },
          '& pre': {
            bgcolor: '#2D2D2D',
            p: { xs: 1, sm: 1.5, md: 2 },
            borderRadius: 1,
            overflow: 'auto',
            position: 'relative',
            border: '1px solid',
            borderColor: '#333333',
            my: { xs: 1, sm: 1.5, md: 2 },
            '& code': {
              bgcolor: 'transparent',
              p: 0,
            },
          },
          '& hr': {
            my: { xs: 1.5, sm: 2, md: 4 },
            borderColor: '#333333',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: '40px', sm: '60px', md: '100px' },
              height: '1px',
              background: '#007ACC',
            },
          },
          '& img': {
            maxWidth: '100%',
            height: 'auto',
            borderRadius: 1,
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            my: { xs: 1, sm: 1.5, md: 2 },
          },
          '& strong': {
            color: '#D4D4D4',
            fontWeight: 600,
          },
          '& em': {
            color: '#858585',
            fontStyle: 'italic',
          },
          '& .highlight': {
            bgcolor: '#2D2D2D',
            px: { xs: 0.5, sm: 0.75, md: 1 },
            py: { xs: 0.25, sm: 0.25, md: 0.5 },
            borderRadius: 1,
            color: '#D4D4D4',
          },
          '& .task-list': {
            listStyleType: 'none',
            pl: 0,
            '& .task-list-item': {
              display: 'flex',
              alignItems: 'flex-start',
              mb: { xs: 0.5, sm: 0.75 },
              '& input[type="checkbox"]': {
                mr: { xs: 0.5, sm: 0.75 },
                mt: 0.25,
              },
            },
          },
          '& .footnotes': {
            borderTop: '1px solid',
            borderColor: '#333333',
            pt: { xs: 1, sm: 1.5, md: 2 },
            mt: { xs: 2, sm: 3, md: 4 },
            fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
            color: '#858585',
          },
          '& .footnote-backref': {
            color: '#007ACC',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
          '& .admonition': {
            border: '1px solid',
            borderColor: '#333333',
            borderRadius: 1,
            p: { xs: 1, sm: 1.5, md: 2 },
            mb: { xs: 1.5, sm: 2 },
            position: 'relative',
            '&::before': {
              content: 'attr(data-type)',
              position: 'absolute',
              top: -1,
              left: -1,
              bgcolor: '#007ACC',
              color: '#FFFFFF',
              px: { xs: 0.5, sm: 0.75 },
              py: { xs: 0.25, sm: 0.25 },
              fontSize: { xs: '0.7rem', sm: '0.75rem' },
              fontWeight: 600,
              textTransform: 'uppercase',
              borderRadius: '4px 0 4px 0',
            },
          },
          '& .admonition-content': {
            pt: { xs: 1.5, sm: 2 },
          },
          '& .mermaid': {
            bgcolor: '#2D2D2D',
            p: { xs: 1, sm: 1.5, md: 2 },
            borderRadius: 1,
            overflow: 'auto',
            position: 'relative',
            border: '1px solid',
            borderColor: '#333333',
            my: { xs: 1.5, sm: 2 },
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          },
          '& table': {
            width: '100%',
            borderCollapse: 'collapse',
            my: { xs: 1, sm: 1.5, md: 2 },
            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
            overflow: 'auto',
            '& th, & td': {
              border: '1px solid',
              borderColor: '#333333',
              p: { xs: 0.5, sm: 0.75, md: 1 },
            },
            '& th': {
              bgcolor: '#2D2D2D',
              fontWeight: 500,
              color: '#D4D4D4',
            },
            '& tr': {
              transition: 'background-color 0.2s ease-in-out',
              '&:hover': {
                bgcolor: '#2D2D2D',
              },
            },
          },
        }}>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </Box>
      );
    }

    if (fileName === 'projects.ts') {
      const projects = JSON.parse(content.body) as Project[];
      return (
        <Box sx={{ 
          p: { xs: 1, sm: 1.5, md: 3 }, 
          overflow: 'auto',
          height: '100%',
          flex: 1
        }}>
          <Typography 
            variant="h4" 
            sx={{ 
              mb: { xs: 1.5, sm: 2, md: 4 }, 
              color: '#D4D4D4',
              fontWeight: 500,
              fontSize: { xs: '1.4rem', sm: '1.6rem', md: '2rem' },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -6,
                left: 0,
                width: { xs: '30px', sm: '40px', md: '60px' },
                height: '2px',
                background: '#007ACC',
                borderRadius: '2px',
              },
            }}
          >
            {content.title}
          </Typography>
          <Grid container spacing={{ xs: 1, sm: 1.5, md: 3 }}>
            {projects.map((project) => (
              <Grid item xs={12} md={6} key={project.id}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 1.25, sm: 1.5, md: 3 },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    bgcolor: '#1E1E1E',
                    border: '1px solid',
                    borderColor: '#333333',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      borderColor: '#007ACC',
                    },
                  }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    mb: { xs: 1, sm: 1.25, md: 2 },
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: { xs: 0.5, sm: 0.75, md: 0 },
                  }}>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        color: '#D4D4D4',
                        fontWeight: 500,
                        fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.5rem' },
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                      <IconButton
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          color: '#858585',
                          transition: 'all 0.2s ease',
                          p: { xs: 0.5, sm: 0.75 },
                          '&:hover': {
                            color: '#007ACC',
                            transform: 'scale(1.1)',
                          },
                        }}
                      >
                        <GitHubIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          color: '#858585',
                          transition: 'all 0.2s ease',
                          p: { xs: 0.5, sm: 0.75 },
                          '&:hover': {
                            color: '#007ACC',
                            transform: 'scale(1.1)',
                          },
                        }}
                      >
                        <LaunchIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: { xs: 1, sm: 1.25, md: 2 }, 
                      flex: 1,
                      color: '#858585',
                      lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 },
                      fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ mb: { xs: 1, sm: 1.25, md: 2 } }}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{ 
                          mr: 0.5, 
                          mb: 0.5,
                          bgcolor: '#2D2D2D',
                          color: '#858585',
                          transition: 'all 0.2s ease',
                          fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.875rem' },
                          height: { xs: '24px', sm: '28px', md: '32px' },
                          '&:hover': {
                            bgcolor: '#007ACC',
                            color: '#FFFFFF',
                            transform: 'scale(1.05)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    }

    if (fileName === 'skills.json') {
      const skills = JSON.parse(content.body) as Skill[];
      return (
        <Box sx={{ 
          p: { xs: 1, sm: 1.5, md: 3 }, 
          overflow: 'auto',
          height: '100%',
          flex: 1
        }}>
          <Typography 
            variant="h4" 
            sx={{ 
              mb: { xs: 2, sm: 3, md: 4 }, 
              color: '#D4D4D4',
              fontWeight: 500,
              fontSize: { xs: '1.4rem', sm: '1.6rem', md: '2rem' },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -6,
                left: 0,
                width: { xs: '40px', sm: '50px', md: '60px' },
                height: '2px',
                background: '#007ACC',
                borderRadius: '2px',
              },
            }}
          >
            {content.title}
          </Typography>
          <Grid container spacing={{ xs: 1.5, sm: 2, md: 3 }}>
            {skills.map((skillGroup) => (
              <Grid item xs={12} sm={6} md={4} key={skillGroup.category}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 1.5, sm: 2, md: 3 },
                    height: '100%',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    bgcolor: '#1E1E1E',
                    border: '1px solid',
                    borderColor: '#333333',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      borderColor: '#007ACC',
                    },
                  }}
                >
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      mb: { xs: 1, sm: 1.5, md: 2 }, 
                      color: '#D4D4D4',
                      fontWeight: 500,
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                    }}
                  >
                    {skillGroup.category}
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: { xs: 0.5, sm: 0.75, md: 1 },
                  }}>
                    {skillGroup.items.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{
                          bgcolor: '#2D2D2D',
                          color: '#858585',
                          transition: 'all 0.2s ease',
                          fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.875rem' },
                          height: { xs: '24px', sm: '28px', md: '32px' },
                          '&:hover': {
                            bgcolor: '#007ACC',
                            color: '#FFFFFF',
                            transform: 'scale(1.05)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    }

    if (fileName === 'experience.json') {
      const experiences = JSON.parse(content.body) as WorkExperience[];
      return (
        <Box sx={{ 
          p: { xs: 1, sm: 1.5, md: 3 }, 
          overflow: 'auto',
          height: '100%',
          flex: 1
        }}>
          <Typography 
            variant="h4" 
            sx={{ 
              mb: { xs: 2, sm: 3, md: 4 }, 
              color: '#D4D4D4',
              fontWeight: 500,
              fontSize: { xs: '1.4rem', sm: '1.6rem', md: '2rem' },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -6,
                left: 0,
                width: { xs: '40px', sm: '50px', md: '60px' },
                height: '2px',
                background: '#007ACC',
                borderRadius: '2px',
              },
            }}
          >
            {content.title}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, sm: 3, md: 4 } }}>
            {experiences.map((exp) => (
              <Paper
                key={exp.id}
                elevation={0}
                sx={{
                  p: { xs: 1.5, sm: 2, md: 3 },
                  transition: 'all 0.2s ease',
                  bgcolor: '#1E1E1E',
                  border: '1px solid',
                  borderColor: '#333333',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    borderColor: '#007ACC',
                  },
                }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start', 
                  mb: { xs: 1, sm: 1.5, md: 2 },
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: { xs: 0.75, sm: 1, md: 0 },
                }}>
                  <Box>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        color: '#D4D4D4', 
                        fontWeight: 500,
                        fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                      }} 
                      gutterBottom
                    >
                      {exp.position}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#007ACC', 
                        fontWeight: 500,
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                      }}
                    >
                      {exp.company}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      color: '#858585',
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                    }}
                  >
                    {exp.startDate} - {exp.endDate}
                  </Typography>
                </Box>
                
                <Typography 
                  variant="subtitle2" 
                  sx={{ 
                    color: '#858585',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                  }} 
                  gutterBottom
                >
                  {exp.location}
                </Typography>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#858585',
                    fontSize: { xs: '0.95rem', sm: '1rem' },
                  }} 
                  paragraph
                >
                  {exp.description}
                </Typography>

                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#D4D4D4', 
                    fontWeight: 500,
                    fontSize: { xs: '1.1rem', sm: '1.2rem' },
                  }} 
                  gutterBottom
                >
                  Key Responsibilities
                </Typography>
                <List dense>
                  {exp.responsibilities.map((responsibility, index) => (
                    <ListItem key={index} sx={{ py: 0.5 }}>
                      <ListItemText 
                        primary={responsibility} 
                        sx={{ 
                          '& .MuiListItemText-primary': {
                            color: '#858585',
                            fontSize: { xs: '0.9rem', sm: '1rem' },
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>

                <Box sx={{ mt: { xs: 1.5, sm: 2 }, mb: { xs: 1.5, sm: 2 } }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#D4D4D4', 
                      fontWeight: 500,
                      fontSize: { xs: '1.1rem', sm: '1.2rem' },
                    }} 
                    gutterBottom
                  >
                    Technologies
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {exp.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: '#2D2D2D',
                          color: '#858585',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            bgcolor: '#007ACC',
                            color: '#FFFFFF',
                            transform: 'scale(1.05)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                {exp.achievements && (
                  <>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#D4D4D4', 
                        fontWeight: 500,
                        fontSize: { xs: '1.1rem', sm: '1.2rem' },
                      }} 
                      gutterBottom
                    >
                      Key Achievements
                    </Typography>
                    <List dense>
                      {exp.achievements.map((achievement, index) => (
                        <ListItem key={index} sx={{ py: 0.5 }}>
                          <ListItemText 
                            primary={achievement}
                            sx={{ 
                              '& .MuiListItemText-primary': {
                                color: '#858585',
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                              },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </>
                )}
              </Paper>
            ))}
          </Box>
        </Box>
      );
    }

    if (fileName === 'certifications.json') {
      const certifications = JSON.parse(content.body) as Certification[];
      return (
        <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
          <Typography 
            variant="h4" 
            sx={{ 
              mb: { xs: 3, sm: 4 }, 
              color: '#D4D4D4',
              fontWeight: 500,
              fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: '60px',
                height: '2px',
                background: '#007ACC',
                borderRadius: '2px',
              },
            }}
          >
            {content.title}
          </Typography>
          <Grid container spacing={{ xs: 2, sm: 3 }}>
            {certifications.map((cert) => (
              <Grid item xs={12} md={6} key={cert.id}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2, sm: 3 },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    bgcolor: '#1E1E1E',
                    border: '1px solid',
                    borderColor: '#333333',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      borderColor: '#007ACC',
                    },
                  }}
                >
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#D4D4D4',
                      fontWeight: 500,
                      mb: 1,
                      fontSize: { xs: '1.2rem', sm: '1.3rem' },
                    }}
                  >
                    {cert.title}
                  </Typography>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      color: '#007ACC',
                      mb: 2,
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                    }}
                  >
                    {cert.issuer}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#858585',
                      mb: 2,
                      flex: 1,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                    }}
                  >
                    {cert.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {cert.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{ 
                          mr: 1, 
                          mb: 1,
                          bgcolor: '#2D2D2D',
                          color: '#858585',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            bgcolor: '#007ACC',
                            color: '#FFFFFF',
                            transform: 'scale(1.05)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    mt: 'auto',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: { xs: 1, sm: 0 },
                  }}>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        color: '#858585',
                        fontSize: { xs: '0.8rem', sm: '0.9rem' },
                      }}
                    >
                      Issued: {new Date(cert.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                    </Typography>
                    {cert.credentialUrl && (
                      <Link
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: '#007ACC',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: { xs: '0.8rem', sm: '0.9rem' },
                          '&:hover': {
                            color: '#4D9CD1',
                          },
                        }}
                      >
                        View Credential
                        <LaunchIcon sx={{ ml: 0.5, fontSize: '1rem' }} />
                      </Link>
                    )}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    }

    return null;
  };

  return (
    <Box sx={{ 
      flex: 1, 
      overflowY: 'auto',
      position: 'relative',
      bgcolor: '#1E1E1E',
      WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
    }}>
      {renderContent()}
    </Box>
  );
};

export default Editor; 