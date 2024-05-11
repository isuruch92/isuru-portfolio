import React from "react";
import { FaBriefcase } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import p1 from "@/public/p1.jpg";
import p2 from "@/public/p2.jpg";
import p3 from "@/public/p3.jpg";

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
      "At Digia, I develop sophisticated financial system software, leveraging a robust tech stack including .NET Framework, Visual Studio, C#, Visual Basic .NET, Angular, JavaScript, and jQuery. My role focuses on delivering high-quality, reliable solutions that drive business efficiency and growth.",
    icon: React.createElement(FaBriefcase),
    date: "Mar 2024 - Present",
  },
  {
    title: "Senior Software Engineer",
    company: "Matific",
    location: "Remote",
    description:
      "As a Senior Software Engineer at Matific, I led the development of essential features for the teacher and parent management platforms, enhancing user experience across devices with Angular 14 components. I optimized workflows using AWS, GitHub, Jira, and other technologies, significantly improving SEO rankings and application performance. My role also included mentoring new engineers and ensuring strategic alignment with company stakeholders.",
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
    company: "CodeGen International",
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
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: p1,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: p2,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: p3,
  },
] as const;

export const skillsDataOld = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Angular",
  "Node.js",
  "HTML",
  "CSS",
  "SCSS",
  "LESS",
  "Python",
  "Django",
  "Java",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "ElsaticSearch",
  "Git",
  "GitHub",
  "GitLab",
  "Docker",
  "JIRA",
  "Jenkins",
  "Visual Studio",
  "VS Code",
  "Intellij IDEA",
  "PyCharm",
  "Webstorm",
  "Agile",
  "Android",
  "AWS S3",
  "AWS EC2",
  "AWS Lambda",
  "AWS Cloudfront",
  "AWS RDS",
  "Tailwind",
  "Styled Components",
  "Redux",
  "React-Query",
  "Framer-Motion",
  "Supabase",
  "Vercel",
] as const;

export const skillsData = [
  {
    name: "React",
    id: "react",
    ext: "svg",
  },
  {
    name: "TypeScript",
    id: "typescript",
    ext: "png",
  },
  {
    name: "JavaScript",
    id: "javascript",
    ext: "png",
  },
  {
    name: "Next.js",
    id: "nextjs",
    ext: "png",
  },
  {
    name: "Angular",
    id: "angular",
    ext: "svg",
  },
  {
    name: "Node.js",
    id: "nodejs",
    ext: "png",
  },
  {
    name: "HTML",
    id: "html",
    ext: "png",
  },
  {
    name: "CSS",
    id: "css",
    ext: "png",
  },
  {
    name: "SCSS",
    id: "scss",
    ext: "png",
  },
  {
    name: "LESS",
    id: "less",
    ext: "png",
  },
  {
    name: "Python",
    id: "python",
    ext: "png",
  },
  {
    name: "Django",
    id: "django",
    ext: "png",
  },
  {
    name: "Java",
    id: "java",
    ext: "png",
  },
  {
    name: ".NET",
    id: "dotnet",
    ext: "png",
  },
  {
    name: "VB.NET",
    id: "vbdotnet",
    ext: "png",
  },
  {
    name: "C#",
    id: "csharp",
    ext: "svg",
  },
  {
    name: "jQuery",
    id: "jquery",
    ext: "png",
  },
  {
    name: "MySQL",
    id: "mysql",
    ext: "png",
  },
  {
    name: "PostgreSQL",
    id: "postgresql",
    ext: "png",
  },
  {
    name: "MongoDB",
    id: "mongodb",
    ext: "svg",
  },
  {
    name: "ElasticSearch",
    id: "elasticsearch",
    ext: "svg",
  },
  {
    name: "Git",
    id: "git",
    ext: "svg",
  },
  {
    name: "GitHub",
    id: "github",
    ext: "svg",
  },
  {
    name: "GitLab",
    id: "gitlab",
    ext: "svg",
  },
  {
    name: "Docker",
    id: "docker",
    ext: "svg",
  },
  {
    name: "JIRA",
    id: "jira",
    ext: "png",
  },
  {
    name: "Jenkins",
    id: "jenkins",
    ext: "png",
  },
  {
    name: "Visual Studio",
    id: "visualstudio",
    ext: "png",
  },
  {
    name: "VS Code",
    id: "vscode",
    ext: "svg",
  },
  {
    name: "Intellij IDEA",
    id: "intellijidea",
    ext: "svg",
  },
  {
    name: "PyCharm",
    id: "pycharm",
    ext: "svg",
  },
  {
    name: "Webstorm",
    id: "webstorm",
    ext: "svg",
  },
  {
    name: "Android",
    id: "android",
    ext: "svg",
  },
  {
    name: "AWS S3",
    id: "awss3",
    ext: "svg",
  },
  {
    name: "AWS EC2",
    id: "awsec2",
    ext: "svg",
  },
  {
    name: "AWS Lambda",
    id: "awslambda",
    ext: "svg",
  },
  {
    name: "AWS Cloudfront",
    id: "awscloudfront",
    ext: "svg",
  },
  {
    name: "AWS RDS",
    id: "awsrds",
    ext: "svg",
  },
  {
    name: "Tailwind",
    id: "tailwind",
    ext: "svg",
  },
  {
    name: "Styled Components",
    id: "styledcomponents",
    ext: "svg",
  },
  {
    name: "Redux",
    id: "redux",
    ext: "svg",
  },
  {
    name: "React-Query",
    id: "react-query",
    ext: "svg",
  },
  {
    name: "Framer Motion",
    id: "framer-motion",
    ext: "svg",
  },
  {
    name: "Supabase",
    id: "supabase",
    ext: "svg",
  },
  {
    name: "Vercel",
    id: "vercel",
    ext: "svg",
  },
];
