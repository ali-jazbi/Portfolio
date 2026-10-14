export type ProjectCategory = "professional" | "personal";
export type PreviewKind = "healthcare" | "storefront" | "survey";
export type ApprovedImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CaseStudy = {
  eyebrow: string;
  title: [string, string];
  introduction: string;
  facts: { label: string; value: string }[];
  coverTitle: [string, string];
  coverDescription: string;
  context: { label: string; title: string; paragraphs: string[] };
  responsibilities: { label: string; title: string; items: string[] };
  engineering: {
    label: string;
    title: string;
    paragraphs: string[];
    note: string;
  };
  nextSlug: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  featuredTitle: [string, string] | null;
  category: ProjectCategory;
  eyebrow: string;
  featuredEyebrow: string;
  description: string;
  summary: string;
  tags: string[];
  tools: string[];
  preview: PreviewKind;
  tone: "dark" | "warm" | "ice" | "stone";
  approvedImage: ApprovedImage | null;
  demoUrl: string | null;
  caseStudy: CaseStudy | null;
};

export const projects: Project[] = [
  {
    slug: "healthcare-dashboards",
    number: "01",
    title: "Healthcare dashboards",
    featuredTitle: ["Healthcare", "dashboards"],
    category: "professional",
    eyebrow: "Professional / Healthcare",
    featuredEyebrow: "Enterprise / Healthcare",
    description:
      "Interfaces and backend services at Dotr for healthcare-related projects associated with Shahid Beheshti University of Medical Sciences.",
    summary:
      "Web dashboards at Dotr for projects associated with Shahid Beheshti University of Medical Sciences.",
    tags: ["React", "Next.js", "REST APIs"],
    tools: ["React", "Next.js", "TypeScript", "REST APIs"],
    preview: "healthcare",
    tone: "dark",
    approvedImage: null,
    demoUrl: null,
    caseStudy: {
      eyebrow: "Case study / Enterprise work",
      title: ["Healthcare", "dashboards."],
      introduction:
        "Making complex operational information easier to navigate through responsive dashboards and API-driven application features.",
      facts: [
        { label: "Context", value: "Dotr / Healthcare IT" },
        { label: "Association", value: "SBMU projects" },
        { label: "Role", value: "Frontend + backend services" },
        { label: "Tools", value: "React / Next.js / Express" },
      ],
      coverTitle: ["Information.", "Made usable."],
      coverDescription:
        "Illustrative dashboard concept. No live hospital or patient data.",
      context: {
        label: "01 / Context",
        title: "Software for real workflows.",
        paragraphs: [
          "At Dotr, I work on dashboards and web application features for healthcare-related projects associated with Shahid Beheshti University of Medical Sciences.",
          "The work involves translating operational requirements into usable interfaces, integrating application data and collaborating with teammates on reliable delivery.",
          "These projects are presented in a limited way to protect confidential institutional information and patient data.",
        ],
      },
      responsibilities: {
        label: "02 / Selected responsibilities",
        title: "What I worked on.",
        items: [
          "Built responsive and interactive frontend interfaces.",
          "Integrated RESTful APIs and handled application states.",
          "Developed backend functionality using Node.js and Express.js.",
          "Worked with the team to refine features and troubleshoot issues.",
        ],
      },
      engineering: {
        label: "03 / Engineering",
        title: "Clean interfaces, practical delivery.",
        paragraphs: [
          "My primary focus is the frontend: organizing data-heavy layouts, reusable UI components, forms, loading states, navigation and accessibility. My full-stack responsibilities include developing and integrating APIs where required.",
        ],
        note: "Primary database design and management were handled by other team members. The visuals shown here are illustrative concepts; approved project screenshots are not yet available.",
      },
      nextSlug: "parin-sanat",
    },
  },
  {
    slug: "parin-sanat",
    number: "02",
    title: "Parin Sanat",
    featuredTitle: ["Parin Sanat", "redesign"],
    category: "professional",
    eyebrow: "Professional / E-commerce",
    featuredEyebrow: "E-commerce",
    description:
      "Complete frontend redesign of the e-commerce storefront and administration interface, focused on navigation, layout consistency and responsive UI.",
    summary:
      "A complete frontend redesign of the e-commerce storefront and its admin dashboard.",
    tags: ["Storefront", "Admin panel", "Responsive UI"],
    tools: ["Storefront", "Admin dashboard", "UI redesign"],
    preview: "storefront",
    tone: "warm",
    approvedImage: null,
    demoUrl: null,
    caseStudy: {
      eyebrow: "Case study / E-commerce",
      title: ["Parin Sanat.", "Reconsidered."],
      introduction:
        "A complete frontend redesign covering both the online storefront and the administration dashboard during a four-month engagement.",
      facts: [
        { label: "Project", value: "Parin Sanat" },
        { label: "Duration", value: "4 months" },
        { label: "Role", value: "Frontend Developer" },
        { label: "Scope", value: "Storefront / Admin panel" },
      ],
      coverTitle: ["Two interfaces.", "One experience."],
      coverDescription:
        "Illustrative e-commerce concept, not a screenshot of the company website.",
      context: {
        label: "01 / Project",
        title: "Reworking the customer and admin experience.",
        paragraphs: [
          "During my four-month engagement at Parin Sanat, I was responsible for the complete frontend redesign of the company's e-commerce storefront and its admin dashboard.",
          "My work concentrated on a cleaner structure, more consistent interfaces and layouts that adapt to different screen sizes.",
        ],
      },
      responsibilities: {
        label: "02 / Areas of work",
        title: "Two connected surfaces.",
        items: [
          "Modernized storefront UI and navigation patterns.",
          "Redesigned the administrative panel interface.",
          "Refined component layout and visual consistency.",
          "Implemented responsive layouts for different devices.",
        ],
      },
      engineering: {
        label: "03 / Reflection",
        title: "Consistency is a product feature.",
        paragraphs: [
          "Storefronts and admin tools serve different users and workflows. I focused on consistent components and layouts while keeping each interface appropriate to its users.",
        ],
        note: "The visuals shown here are illustrative concepts. Before-and-after project screenshots are pending permission to share. No sales or performance gains are claimed without supporting measurements.",
      },
      nextSlug: "healthcare-dashboards",
    },
  },
  {
    slug: "behbod-shop",
    number: "03",
    title: "Behbod Shop",
    featuredTitle: null,
    category: "personal",
    eyebrow: "Personal / E-commerce",
    featuredEyebrow: "Personal project",
    description:
      "Personal full-stack storefront project, including frontend development, backend features and database integration.",
    summary:
      "A full-stack e-commerce project built with Next.js and Prisma, connecting frontend experience with backend functionality.",
    tags: ["Next.js 16", "Prisma", "PostgreSQL"],
    tools: ["Next.js 16", "Prisma", "PostgreSQL"],
    preview: "storefront",
    tone: "ice",
    approvedImage: null,
    demoUrl: null,
    caseStudy: null,
  },
  {
    slug: "survey-platform",
    number: "04",
    title: "Survey platform",
    featuredTitle: null,
    category: "professional",
    eyebrow: "Application / Forms",
    featuredEyebrow: "Product work",
    description:
      "Form-building interfaces, conditional questions, multi-step forms, administrative workflows and Excel uploads for collecting and managing structured data.",
    summary:
      "Dynamic form interfaces, conditional questions and administrative workflows for data collection.",
    tags: ["React", "Ant Design", "Forms"],
    tools: ["React", "Ant Design", "Dynamic forms"],
    preview: "survey",
    tone: "stone",
    approvedImage: null,
    demoUrl: null,
    caseStudy: null,
  },
];

export const projectFilters = [
  { value: "all", label: "All projects" },
  { value: "professional", label: "Professional" },
  { value: "personal", label: "Personal" },
] as const;

export const mediaNotice =
  "Project visuals are illustrative concepts, not screenshots of client or personal projects. Real screenshots will be added only with permission to publish.";
