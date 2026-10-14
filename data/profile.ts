export const profile = {
  name: "Ali Jazbi",
  position: "Frontend-Focused Full-Stack Developer",
  location: "Tehran, Iran",
  email: "ali.jazbi@yahoo.com",
  github: "https://github.com/ali-jazbi",
  linkedin: "https://linkedin.com/in/ali-jazbi",
  education: {
    subject: "Computer Engineering",
    university: "Shahid Beheshti University",
    status: "Student",
  },
  portrait: null as {
    src: string;
    alt: string;
    width: number;
    height: number;
  } | null,
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const coreTechnologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
];

export const skillGroups = [
  {
    title: "Frontend engineering",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "HTML / CSS",
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
      "Bootstrap",
      "Responsive UI",
    ],
  },
  {
    title: "Backend & data",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "Prisma",
      "PostgreSQL",
      "SQL Server (integration)",
    ],
  },
  {
    title: "Delivery & tooling",
    skills: [
      "Git / GitHub",
      "IIS",
      "PM2",
      "Vercel",
      "Docker",
      "API integration",
      "Debugging",
    ],
  },
];
