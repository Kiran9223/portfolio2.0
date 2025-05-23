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
        startDate: '2020-October',
        endDate: '2024-April',
        description: 'Leading the development of enterprise-scale web applications and mentoring junior developers.',
        responsibilities: [
          'Developed and optimized RESTful APIs using Java and Spring Boot, Python, and Flask, scaled to handle over 3000 users per minute, ensuring seamless performance and reliability in high-traffic environments',
          'Enhanced user experience by developing dynamic web pages with Angular and React, resulting in a 30% increase in user engagement within 2 weeks',
          'Migrated the codebase from Java 8 to Java 11 by updating deprecated APIs, refactoring critical components, and leveraging new Java features, resulting in a 20% performance boost and enhanced security',
          'Deployed applications on AWS using EC2, S3, Docker, and Kubernetes while leveraging AWS Lambda for serverless execution and automating deployments through CI/CD pipelines, ensuring scalability and security',
          'Leveraged Kafka Streams to process and analyze event-driven data, enabling efficient handling of high-throughput transactional data and reducing system latency',
          'Integrated IBM WatsonX generative AI to develop functionality that summarized email chains of up to 20 emails into concise 5-sentence paragraphs, significantly reducing users time manually reading each email',
          'Redesigned and optimized database schemas for IBM DB2 and MongoDB, leading to a 60% increase in query efficiency and improved platform performance',
          'Collaborated in a Scrum-based Agile environment, leveraging JIRA for sprint planning, backlog grooming, and issue tracking, which streamlined development workflows and enabled on-time feature delivery',
          'Implemented Test-Driven Development (TDD) to write unit and integration tests before feature implementation, ensuring high code quality, early bug detection, and maintaining a robust test suite that improved code coverage by 30%'
        ],
        technologies: ['Java', 'Python', 'Spring Boot', 'FastAPI', 'Flask', 'RESTFul APIs', 'IBM Public Cloud', 'Docker', 'Kubernetes'],
        achievements: [
          'Reduced deployment time by 60% through automation',
          'Successfully migrated legacy application to modern frontend framework Angular and React',
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
        title: 'AWS Certified Developer - Associate (In-progress)',
        issuer: 'Amazon Web Services',
        date: '2025-July',
        credentialUrl: '/',
        description: 'Demonstrated ability to design and deploy scalable, highly available, and fault-tolerant systems on AWS.',
        skills: ['AWS', 'Cloud Architecture', 'Cloud Developer', 'DevOps', 'Security', 'Networking']
      },
      {
        id: 'cert2',
        title: 'Generative AI Fundamentals',
        issuer: 'Databricks',
        date: '2025-May',
        credentialUrl: 'https://credentials.databricks.com/34a65a94-4149-4f4c-85f7-6eaf4d54182d#acc.tjKdJfMW',
        description: 'Learned about the Generative AI landscape, including LLMs, RAG, and vector databases, and explored their applications in various domains.',
        skills: ['Generative AI', 'LLMs', 'AI Applications']
      },
      {
        id: 'cert3',
        title: 'IBM Cloud Essentials',
        issuer: 'IBM',
        date: '2023-July',
        credentialUrl: 'https://www.credly.com/badges/ee9fcab8-fc5f-4a0d-9101-c1675fc092db',
        description: 'This badge earner is able to relate how the IBM Cloud enables the different service (IaaS, PaaS, SaaS) models and different deployment (Public, Hybrid, Private) models of cloud computing.',
        skills: ['IBM Cloud', 'Cloud Development', 'DevOps', 'Microservices']
      },
      {
        id: 'cert4',
        title: 'IBM Garage Essentials',
        issuer: 'IBM',
        date: '2022-October',
        credentialUrl: 'https://www.credly.com/badges/ee9fcab8-fc5f-4a0d-9101-c1675fc092db',
        description: 'This badge earner is able to demonstrate understanding of IBM Garage Methodology, assets and platforms',
        skills: ['Scrum', 'Agile', 'Project Management', 'Team Leadership', 'DevOps', 'IBM Garage Methodology']
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
    href="https://drive.google.com/file/d/1dqQof4aD7qipdsNI5SASAdgcsMm5-Cc3/view?usp=sharing"
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