import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
