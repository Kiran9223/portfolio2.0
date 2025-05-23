import { Project, Skill, PortfolioSection, WorkExperience, Certification, SocialLink } from './types';

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    platform: 'GitHub',
    url: 'https://github.com/Kiran9223',
    icon: 'GitHubIcon'
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    url: 'http://www.linkedin.com/in/kiran-sukumar',
    icon: 'LinkedInIcon'
  },
  {
    id: 'email',
    platform: 'Email',
    url: 'mailto:kiransukumar@csu.fullerton.edu',
    icon: 'EmailIcon'
  }
];

export const fileList: Array<{ id: PortfolioSection; label: string; fileName: string }> = [
  { id: 'about', label: 'About Me', fileName: 'README.md' },
  { id: 'projects', label: 'Projects', fileName: 'projects.ts' },
  { id: 'skills', label: 'Skills', fileName: 'skills.json' },
  { id: 'experience', label: 'Experience', fileName: 'experience.json' },
  { id: 'certifications', label: 'Certifications', fileName: 'certifications.json' },
  { id: 'contact', label: 'Contact', fileName: 'contact.md' },
  { id: 'resume', label: 'Resume', fileName: 'resume.pdf' },
];

export const content: Record<PortfolioSection, { title: string; body: string }> = {
  about: {
    title: 'About Me',
    body: `
# 👋 Hi, I'm Kiran Sukumar

## Full Stack Developer

I'm a passionate software engineer with 4 years of experience in building modern web applications. I specialize in Java, Python, Spring Boot, FastAPI, Flask, React and cloud technologies, with a strong focus on creating scalable and maintainable solutions.

### 🚀 What I Do

- Design and develop full-stack web applications
- Build and maintain RESTful APIs and microservices
- Integrate LLM and other AI tools to enhance application functionality
- Create responsive and accessible user interfaces
- Implement CI/CD pipelines and DevOps practices

### 🎯 My Approach

I believe in writing clean, efficient code and following best practices. My development process includes:

- Test-driven development (TDD)
- Code reviews and pair programming
- Documentation and knowledge sharing
- Continuous learning and improvement

### 🌟 Current Focus

- Exploring LLMs, AI and AI Agents
- Develop cloud native applications using AWS
- Building developer tools and utilities

### 🎓 Education & Background

- Master of Science in Computer Science, California State University, Fullerton [Anticipated Graduation: May 2026]
- Bachelor of Technology in Information Technology, SSN College of Engineering

Feel free to explore my projects and get in touch if you'd like to collaborate!
    `
  },
  projects: {
    title: 'Projects',
    body: JSON.stringify([
      {
        id: 'project1',
        title: 'Stratosphere',
        description: 'Developed a dynamic backend with FastAPI and asynchronous programming for secure user subscription management, leveraging JWT-based authentication, RBAC, and real-time usage tracking. Simulated cloud services to enforce subscription plan limits and provided admin functionalities to manage plans, permissions, and user access seamlessly.',
        technologies: ['Python', 'FASTApi', 'JWT'],
        githubUrl: 'https://github.com/Kiran9223/stratosphere',
        liveUrl: 'https://github.com/Kiran9223/stratosphere'
      },
      {
        id: 'project2',
        title: 'CineSage',
        description: 'Utilized GPT-4 (an LLM) to generate movie embeddings and transform user queries, creating a Generative AI-driven recommendation pipeline underpinned by Retrieval-Augmented Generation (RAG). Leveraged Weaviate\'s vector database for rapid similarity searches and retrieval, enabling context-rich, highly relevant movie recommendations.',
        technologies: ['Python', 'LLM-GPT4', 'RAG', 'StreamLit', 'VectorDB', 'Weaviate'],
        githubUrl: 'https://github.com/Kiran9223/movie-recommendation',
        liveUrl: 'https://github.com/Kiran9223/movie-recommendation'
      },
      {
        id: 'project3',
        title: 'Meta Mart',
        description: 'An auction platform for buying and selling NFTs. The platform allows users to bid on NFTs and the highest bidder wins the NFT. The platform also allows users to mint a new NFT and offer to the auction and view the list of products.',
        technologies: ['React', 'Solidity', 'Ethers.js', 'Meta Mask', 'IPFS'],
        githubUrl: 'https://github.com/Kiran9223/Auction-DApp',
        liveUrl: 'https://github.com/Kiran9223/Auction-DApp'
      },
      {
        id: 'project4',
        title: 'WikiMedia',
        description: 'Developed a backend application to demonstrate the use of Kafka and MySQL to implement a pattern to fetch live data and store it in the DB.',
        technologies: ['Java', 'Spring Boot', 'Kafka', 'MySQL'],
        githubUrl: 'https://github.com/Kiran9223/wikimedia',
        liveUrl: 'https://github.com/Kiran9223/wikimedia'
      }
    ] as Project[])
  },
  skills: {
    title: 'Skills',
    body: JSON.stringify([
      {
        category: 'Frontend',
        items: ['React', 'Angular', 'Material-UI', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript']
      },
      {
        category: 'Backend',
        items: ['Java', 'Python', 'GO', 'Spring Boot', 'FastAPI', 'Flask', 'Kafka', 'Redis', 'MySQL', 'IBM DB2', 'MongoDB', 'REST APIs']
      },
      {
        category: 'Tools & Others',
        items: ['Git', 'Docker', 'Kubernetes', 'AWS', 'CI/CD']
      },
      {
        category: 'AI',
        items: ['LLM', 'RAG', 'VectorDB', 'Weaviate', 'LangChain', 'Pydantic']
      },
      {
        category: 'Software Design',
        items: ['Object-Oriented Programming', 'Event-Driven Architecture', 'Microservices', 'RESTful APIs', 'SOLID Principles', 'Design Patterns']
      }
    ] as Skill[])
  },
  experience: {
    title: 'Work Experience',
    body: JSON.stringify([
      {
        id: 'exp1',
        company: 'IBM',
        position: 'Software Engineer',
        location: 'Bengaluru, KA',
        startDate: '2020-10',
        endDate: '2024-04',
        description: 'Leading the development of enterprise-scale web applications and mentoring junior developers.',
        responsibilities: [
          'Architected and developed microservices-based applications using Node.js and React',
          'Implemented CI/CD pipelines using GitHub Actions and AWS',
          'Led a team of 5 developers in delivering multiple projects',
          'Conducted code reviews and implemented best practices',
          'Optimized application performance and reduced load times by 40%'
        ],
        technologies: ['Java', 'Python', 'Spring Boot', 'FastAPI', 'Flask', 'RESTFul APIs', 'IBM Public Cloud', 'Docker', 'Kubernetes'],
        achievements: [
          'Reduced deployment time by 60% through automation',
          'Improved test coverage from 65% to 90%',
          'Mentored 4 new joiners'
        ]
      }
    ] as WorkExperience[])
  },
  certifications: {
    title: 'Certifications',
    body: JSON.stringify([
      {
        id: 'cert1',
        title: 'AWS Certified Solutions Architect - Associate',
        issuer: 'Amazon Web Services',
        date: '2023-06',
        credentialUrl: 'https://www.credly.com/badges/example',
        description: 'Demonstrated ability to design and deploy scalable, highly available, and fault-tolerant systems on AWS.',
        skills: ['AWS', 'Cloud Architecture', 'DevOps', 'Security', 'Networking']
      },
      {
        id: 'cert2',
        title: 'Professional Scrum Master I (PSM I)',
        issuer: 'Scrum.org',
        date: '2022-12',
        credentialUrl: 'https://www.credly.com/badges/example',
        description: 'Validated knowledge of Scrum framework and ability to facilitate Scrum events and support Scrum teams.',
        skills: ['Scrum', 'Agile', 'Project Management', 'Team Leadership']
      },
      {
        id: 'cert3',
        title: 'Google Cloud Professional Cloud Developer',
        issuer: 'Google Cloud',
        date: '2023-03',
        credentialUrl: 'https://www.credly.com/badges/example',
        description: 'Proven expertise in building scalable and reliable applications using Google Cloud technologies.',
        skills: ['Google Cloud', 'Cloud Development', 'DevOps', 'Microservices']
      },
    ] as Certification[])
  },
  contact: {
    title: 'Contact',
    body: `
# 📫 Get in Touch

## Let's Connect!

I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.

### 📧 Email
Feel free to reach out at [kiransukumar@csu.fullerton.edu](mailto:kiransukumar@csu.fullerton.edu)

### 💼 LinkedIn
Connect with me on [LinkedIn](http://www.linkedin.com/in/kiran-sukumar) for professional networking and updates.

### 🐙 GitHub
Check out my projects on [GitHub](https://github.com/Kiran9223) and let's collaborate!

### 📍 Location
Based in Fullerton, CA, but available for remote work worldwide.

### ⏰ Availability
- Currently available for freelance projects
- Open to full-time opportunities
- Willing to relocate for the right opportunity

Feel free to reach out through any of these channels. I typically respond within 24 hours!
    `
  },
  resume: {
    title: 'Resume',
    body: `
<div style="text-align: center; margin-bottom: 20px;">
  <a
    href="https://drive.google.com/drive/u/4/folders/1F8P2wf69IOYg3zShVpt7JhKjh57ly2hS"
    target="_blank"
    rel="noopener noreferrer"
    class="download-button"
  >
    Download Resume
  </a>
</div>

<iframe 
  src="https://drive.google.com/file/d/1dqQof4aD7qipdsNI5SASAdgcsMm5-Cc3/preview" 
  width="100%" 
  height="800px" 
  allow="autoplay"
></iframe>
    `
  }
}; 