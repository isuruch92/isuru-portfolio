import React from "react";
import { FaBriefcase } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import p1 from "@/public/p1.jpg";
import p2 from "@/public/p2.jpg";
import p3 from "@/public/p3.jpg";
import p4 from "@/public/p4.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer",
    company: "Digia Oy",
    location: "Tampere, Finland",
    description:
      "At Digia, I collaborate with a talented team to develop sophisticated financial system software, leveraging a robust tech stack including .NET Framework, Visual Studio, C#, Visual Basic .NET, Angular, JavaScript, and jQuery. Beyond coding, I actively participate in code reviews and ensure my solutions are well-documented. Digia’s relaxed and flexible work environment supports a great work-life balance, allowing me to focus on delivering high-quality, reliable solutions that enhance business efficiency and growth.",
    icon: React.createElement(FaBriefcase),
    date: "Mar 2024 - Present",
  },
  {
    title: "Senior Software Engineer",
    company: "Matific",
    location: "Remote",
    description:
      "As a Senior Software Engineer at Matific, I led the development of essential features for the teacher and parent management platforms, enhancing user experience across devices with Angular 14 components. My role also included optimizing development processes using AWS, GitHub, PostgreSQL, integrating Python APIs, mentoring new engineers, and ensuring strategic communication with stakeholders for project success.",
    icon: React.createElement(FaBriefcase),
    date: "Jul 2020 - Mar 2024",
  },
  {
    title: "Associate Technical Team Lead",
    company: "CodeGen International",
    location: "Colombo, Sri Lanka",
    description:
      "In a dynamic, fast-paced work environment, I consistently maintained high standards in my projects and took on leadership roles by mentoring junior colleagues. My active participation in solution discussions and conducting detailed code reviews helped enhance team collaboration and ensured the delivery of high-quality work.",
    icon: React.createElement(FaBriefcase),
    date: "Feb 2020 - Jul 2024",
  },
  {
    title: "Senior Software Engineer",
    company: "CodeGen International",
    location: "Colombo, Sri Lanka",
    description:
      "In my role, I collaborated with cross-functional teams to develop full-stack B2B and B2C applications for the travel industry, utilizing Angular 7, HTML, CSS, and Java/Spring. I improved search functionality with an Elasticsearch-based engine and enhanced performance with a NoSQL data cache. My work also involved streamlining deployments through CI/CD pipelines using GIT, Docker, and Kubernetes.",
    icon: React.createElement(FaBriefcase),
    date: "Apr 2018 - Feb 2020",
  },
  {
    title: "Software Engineer",
    company: "CodeGen International",
    location: "Colombo, Sri Lanka",
    description:
      "Part of a team that achieved the shortest Project Go-Live in Codegen history, successfully developing a custom travel industry software solution from scratch in just three months. Replaced the legacy JavaScript front-end with Angular 7, resulting in over 50% faster loading times and enhanced efficiency",
    icon: React.createElement(FaBriefcase),
    date: "Apr 2016 - Apr 2018",
  },
  {
    title: "Google Summer of Code Intern",
    company: "International Neuroinformatics Coordinating Facility (INCF)",
    location: "Stockholm, Sweden",
    description:
      "Implementing off-line Android mobile client for INCF's EEG Database",
    icon: React.createElement(FaBriefcase),
    date: "Apr 2015 - Nov 2015",
  },
  {
    title: "Software Engineering Intern",
    company: "Eyepax IT Consulting (Pvt) Ltd.",
    location: "Colombo, Sri Lanka",
    description:
      "JAVA and Android Development for a pre-school mobile application called OAC Connect",
    icon: React.createElement(FaBriefcase),
    date: "Oct 2014 - Apr 2015",
  },
  {
    title: "Bachelor of Science in Computer Science",
    company: "University of Moratuwa",
    location: "Colombo, Sri Lanka",
    description: "Grade: Second Class Upper with Overall GPA 3.48/4.2",
    icon: React.createElement(FaGraduationCap),
    date: "2011 - 2015",
  },
] as const;

export const projectsData = [
  {
    title: "Advance MERN Auth Project",
    description:
      "A fullstack MERN authentication project using JWT for secure login, signup, Google SSO, email verification, forgot password, and reset password.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React Router",
      "JWT",
      "Tailwind",
      "Zustand",
      "Framer Motion",
      "MailTrap",
    ],
    imageUrl: p2,
    demoLink: "https://mern-auth-frontend.isuruch.com/",
    githubLink: "https://github.com/isuruch92/mern-auth",
  },
  {
    title: "Instant Pizzario",
    description:
      "A simple pizza ordering webapp built with React, featuring data-fetching and form handling with React Router. It uses Redux Toolkit for state management, styled with Tailwind CSS, and hosted on Vercel.",
    tags: ["React", "React Router", "Redux", "Tailwind", "Vercel"],
    demoLink: "https://instant-pizzario.vercel.app/",
    githubLink: "https://github.com/isuruch92/fast-react-pizza",
    imageUrl: p1,
  },
  {
    title: "Message Board",
    description:
      "A very simple message board application developed using a Node.js server and a React.js client. Uses React context API for state management and CSS modules for styles. Both server and client hosted on vercel.",
    tags: ["React", "Node.js", "CSS"],
    imageUrl: p3,
    demoLink: "https://message-board-client-one.vercel.app/app/",
    githubLink: "https://github.com/isuruch92/message-board",
  },
  {
    title: "Rebel Navigator",
    description:
      "A fun Angular-based app for the Rebel Alliance to locate secret entities using OpenLayers for map rendering, providing a responsive UI with integrated theming and efficient state management through RxJS.",
    tags: [
      "Angular",
      "OpenLayers Maps",
      "RxJS",
      "Angular Material",
      "Standalone Components",
    ],
    imageUrl: p4,
    demoLink: "https://rebel-navigator.vercel.app/",
    githubLink: "https://github.com/isuruch92/rebel-navigator",
  },
] as const;

export const categorizedSkillsData = [
  {
    category: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        id: "javascript",
        ext: "png",
        version: "ES6",
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "TypeScript",
        id: "typescript",
        ext: "png",
        version: "v5+",
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "Java",
        id: "java",
        ext: "png",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "Python",
        id: "python",
        ext: "png",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "C#",
        id: "csharp",
        ext: "svg",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "VB.NET",
        id: "visualbasic",
        ext: "png",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
    ],
  },
  {
    category: "Markup and Style Sheet Languages",
    skills: [
      {
        name: "HTML 5",
        id: "html5",
        ext: "png",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "CSS 3",
        id: "css3",
        ext: "png",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "SCSS",
        id: "sass",
        ext: "png",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "LESS",
        id: "less",
        ext: "png",
        version: null,
        isPlainWordmark: true,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
    ],
  },
  {
    category: "Web Frameworks",
    skills: [
      {
        name: "React",
        id: "react",
        ext: "svg",
        version: "v18+",
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "Next.js",
        id: "nextjs",
        ext: "png",
        version: "v14+",
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "Angular",
        id: "angular",
        ext: "svg",
        version: "v16",
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "Django",
        id: "django",
        ext: "png",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: true,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: true,
        isDarkModePlain: false,
        isDarkModeLocalAsset: true,
      },
    ],
  },
  {
    category: "Libraries and Other Frameworks",
    skills: [
      {
        name: "Redux",
        id: "redux",
        ext: "svg",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "RxJS",
        id: "rxjs",
        ext: "svg",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "jQuery",
        id: "jquery",
        ext: "png",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "Tailwind CSS",
        id: "tailwindcss",
        ext: "svg",
        version: "v3.4.3",
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "Framer Motion",
        id: "framermotion",
        ext: "svg",
        version: "v11",
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: true,
      },
      {
        name: "Styled Components",
        id: "styledcomponents",
        ext: "svg",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: true,
        isSmallFont: true,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "React-Query",
        id: "react-query",
        ext: "svg",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: true,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
    ],
  },
  {
    category: "Databases",
    skills: [
      {
        name: "MySQL",
        id: "mysql",
        ext: "png",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "PostgreSQL",
        id: "postgresql",
        ext: "png",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: true,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "MongoDB",
        id: "mongodb",
        ext: "svg",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "ElasticSearch",
        id: "elasticsearch",
        ext: "svg",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: true,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
    ],
  },
  {
    category: "Version Control & Development Tools",
    skills: [
      {
        name: "Git",
        id: "git",
        ext: "svg",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "GitHub",
        id: "github",
        ext: "svg",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: true,
      },
      {
        name: "GitLab",
        id: "gitlab",
        ext: "svg",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },

      {
        name: "Intellij IDEA",
        id: "intellij",
        ext: "svg",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "PyCharm",
        id: "pycharm",
        ext: "svg",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "Webstorm",
        id: "webstorm",
        ext: "svg",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "VS Code",
        id: "vscode",
        ext: "svg",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "Visual Studio",
        id: "visualstudio",
        ext: "png",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
    ],
  },
  {
    category: "DevOps and Project Management",
    skills: [
      {
        name: "Docker",
        id: "docker",
        ext: "svg",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "JIRA",
        id: "jira",
        ext: "png",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "Jenkins",
        id: "jenkins",
        ext: "png",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
    ],
  },
  {
    category: "Cloud and Infrastructure",
    skills: [
      {
        name: "AWS S3, EC2, Lambda, Cloudfront, RDS",
        id: "amazonwebservices",
        ext: "svg",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: true,
        isLocalAsset: false,
        isSmallFont: true,
        isPlain: false,
        isDarkModePlain: true,
        isDarkModeLocalAsset: false,
      },
      {
        name: "Supabase",
        id: "supabase",
        ext: "svg",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: false,
      },
      {
        name: "Vercel",
        id: "vercel",
        ext: "svg",
        version: null,
        isPlainWordmark: false,
        isOriginalWordMark: false,
        isLocalAsset: false,
        isSmallFont: false,
        isPlain: false,
        isDarkModePlain: false,
        isDarkModeLocalAsset: true,
      },
    ],
  },
];
