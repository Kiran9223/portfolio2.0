import { Project, Skill, PortfolioSection, WorkExperience } from './types';

export const fileList: Array<{ id: PortfolioSection; label: string; fileName: string }> = [
  { id: 'about', label: 'About Me', fileName: 'README.md' },
  { id: 'projects', label: 'Projects', fileName: 'projects.ts' },
  { id: 'skills', label: 'Skills', fileName: 'skills.json' },
  { id: 'experience', label: 'Experience', fileName: 'experience.json' },
  { id: 'contact', label: 'Contact', fileName: 'contact.md' },
];

export const content: Record<PortfolioSection, { title: string; body: string }> = {
  about: {
    title: 'About Me',
    body: `
# 👋 Hi, I'm John Doe

## Full Stack Developer & Open Source Enthusiast

I'm a passionate software engineer with 5+ years of experience in building modern web applications. I specialize in React, Node.js, and cloud technologies, with a strong focus on creating scalable and maintainable solutions.

### 🚀 What I Do

- Design and develop full-stack web applications
- Build and maintain RESTful APIs and microservices
- Create responsive and accessible user interfaces
- Implement CI/CD pipelines and DevOps practices
- Contribute to open-source projects

### 🎯 My Approach

I believe in writing clean, efficient code and following best practices. My development process includes:

- Test-driven development (TDD)
- Code reviews and pair programming
- Documentation and knowledge sharing
- Continuous learning and improvement

### 🌟 Current Focus

- Exploring Web3 and blockchain technologies
- Learning Rust and system programming
- Contributing to open-source projects
- Building developer tools and utilities

### 🎓 Education & Background

- B.S. in Computer Science, University of Technology
- Certified AWS Solutions Architect
- Regular speaker at tech meetups and conferences
- Active open-source contributor

Feel free to explore my projects and get in touch if you'd like to collaborate!
    `,
  },
  projects: {
    title: 'Projects',
    body: JSON.stringify([
      {
        id: 'project1',
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
        githubUrl: 'https://github.com/username/ecommerce',
        liveUrl: 'https://ecommerce-demo.com',
      },
      {
        id: 'project2',
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates, team workspaces, and progress tracking. Built with React, Firebase, and Material-UI.',
        technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
        githubUrl: 'https://github.com/username/task-manager',
        liveUrl: 'https://task-manager-demo.com',
      },
      {
        id: 'project3',
        title: 'Weather Dashboard',
        description: 'A weather dashboard that displays current weather conditions and forecasts using multiple weather APIs. Features include location search, weather maps, and historical data.',
        technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation API'],
        githubUrl: 'https://github.com/username/weather-dashboard',
        liveUrl: 'https://weather-dashboard-demo.com',
      },
    ] as Project[]),
  },
  skills: {
    title: 'Skills',
    body: JSON.stringify([
      {
        category: 'Frontend',
        items: ['React', 'TypeScript', 'Next.js', 'Redux', 'Material-UI', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
      },
      {
        category: 'Backend',
        items: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
      },
      {
        category: 'Tools & Others',
        items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Cypress', 'Webpack', 'Vite'],
      },
    ] as Skill[]),
  },
  experience: {
    title: 'Work Experience',
    body: JSON.stringify([
      {
        id: 'exp1',
        company: 'Tech Innovations Inc.',
        position: 'Senior Full Stack Developer',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Leading the development of enterprise-scale web applications and mentoring junior developers.',
        responsibilities: [
          'Architected and developed microservices-based applications using Node.js and React',
          'Implemented CI/CD pipelines using GitHub Actions and AWS',
          'Led a team of 5 developers in delivering multiple projects',
          'Conducted code reviews and implemented best practices',
          'Optimized application performance and reduced load times by 40%'
        ],
        technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'Kubernetes'],
        achievements: [
          'Reduced deployment time by 60% through automation',
          'Improved test coverage from 65% to 90%',
          'Mentored 3 junior developers who were promoted to mid-level positions'
        ]
      },
      {
        id: 'exp2',
        company: 'Digital Solutions Ltd.',
        position: 'Full Stack Developer',
        location: 'New York, NY',
        startDate: '2019-03',
        endDate: '2020-12',
        description: 'Developed and maintained multiple web applications for enterprise clients.',
        responsibilities: [
          'Built responsive web applications using React and Material-UI',
          'Developed RESTful APIs using Express.js and MongoDB',
          'Implemented authentication and authorization systems',
          'Collaborated with UX designers to implement pixel-perfect designs',
          'Participated in agile development processes'
        ],
        technologies: ['React', 'Express.js', 'MongoDB', 'Material-UI', 'Redux', 'Jest'],
        achievements: [
          'Delivered 5 major projects on time and under budget',
          'Reduced bug reports by 35% through improved testing',
          'Implemented automated testing that saved 20 hours per week'
        ]
      }
    ] as WorkExperience[]),
  },
  contact: {
    title: 'Contact',
    body: `
# 📫 Get in Touch

## Let's Connect!

I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.

### 📧 Email
Feel free to reach out at [john.doe@example.com](mailto:john.doe@example.com)

### 💼 LinkedIn
Connect with me on [LinkedIn](https://linkedin.com/in/johndoe) for professional networking and updates.

### 🐙 GitHub
Check out my projects on [GitHub](https://github.com/johndoe) and let's collaborate!

### 📱 Social Media
- [Twitter](https://twitter.com/johndoe) - For tech updates and thoughts
- [Dev.to](https://dev.to/johndoe) - Where I share my technical articles
- [Medium](https://medium.com/@johndoe) - For longer-form content

### 📍 Location
Based in San Francisco, CA, but available for remote work worldwide.

### ⏰ Availability
- Currently available for freelance projects
- Open to full-time opportunities
- Willing to relocate for the right opportunity

Feel free to reach out through any of these channels. I typically respond within 24 hours!
    `,
  },
}; 