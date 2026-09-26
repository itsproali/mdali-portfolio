export type Experience = {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  from: string;
  to: string;
  location: string;
  mode: "Remote" | "On-site" | "Hybrid";
  summary: string;
  highlights: string[];
  stack: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    id: "vidrush",
    role: "Frontend Engineer & Team Lead",
    company: "VidRush AI",
    companyUrl: "https://vidrush.ai",
    from: "Jun 2025",
    to: "Present",
    location: "London, UK",
    mode: "Remote",
    current: true,
    summary:
      "Lead the five-person engineering team behind an AI video platform — sprint planning, technical direction, code review and release quality.",
    highlights: [
      "Grew the production template catalog from zero to 500+ by architecting a reusable TypeScript + Remotion motion component library.",
      "Cut video render time and cost by 50% by re-architecting the AWS cloud rendering pipeline.",
      "Own technical direction and review across the team, from sprint scope to release sign-off.",
    ],
    stack: ["TypeScript", "React", "Next.js", "Remotion", "AWS Lambda", "Node.js"],
  },
  {
    id: "algesoft",
    role: "Full-Stack Developer",
    company: "Algesoft",
    companyUrl: "https://algesoft.com/",
    from: "Jul 2024",
    to: "Jun 2025",
    location: "Istanbul, Turkey",
    mode: "Remote",
    summary:
      "Delivered production web applications and REST APIs across the stack for client products.",
    highlights: [
      "Built and shipped production Chrome extensions with Plasmo, delivering in-browser analytics tooling.",
      "Designed and implemented REST APIs in Node.js and NestJS.",
      "Automated build and deployment with Docker and GitHub Actions on AWS.",
    ],
    stack: ["React", "Next.js", "NestJS", "Plasmo", "Docker", "GitHub Actions"],
  },
  {
    id: "kodeend",
    role: "Full-Stack Developer",
    company: "Kodeend IT Solutions",
    companyUrl: "https://kodeend.com/",
    from: "Nov 2023",
    to: "Jul 2024",
    location: "Dhaka, Bangladesh",
    mode: "On-site",
    summary:
      "Built and optimised production interfaces alongside backend functionality and third-party integrations.",
    highlights: [
      "Shipped and optimised production React and Next.js interfaces.",
      "Implemented backend functionality and API integrations.",
      "Deployed and maintained applications on AWS and DigitalOcean.",
    ],
    stack: ["React", "Next.js", "Node.js", "AWS", "DigitalOcean"],
  },
  {
    id: "oqs",
    role: "Frontend Developer",
    company: "One Quality Solutions",
    companyUrl: "https://www.1qualitysolutions.com/",
    from: "2023",
    to: "2024",
    location: "Dhaka, Bangladesh",
    mode: "Remote",
    summary:
      "Frontend developer for both the public site and the admin dashboard of a pharmaceutical QA platform.",
    highlights: [
      "Built the customer-facing storefront for documents, services and training.",
      "Built the admin dashboard for catalog and order management.",
      "Worked in Next.js and TypeScript with Material UI and React Query.",
    ],
    stack: ["Next.js", "TypeScript", "Material UI", "React Query", "NextAuth"],
  },
];

export type Education = {
  id: string;
  title: string;
  institution: string;
  from: string;
  to: string;
  location: string;
  note: string;
};

export const education: Education[] = [
  {
    id: "dpi",
    title: "Diploma in Computer Science & Engineering",
    institution: "Dhaka Polytechnic Institute",
    from: "2020",
    to: "2024",
    location: "Dhaka, Bangladesh",
    note: "Graduated with a 3.81 CGPA.",
  },
  {
    id: "ph",
    title: "Complete Web Development",
    institution: "Programming Hero",
    from: "2022",
    to: "2022",
    location: "Online",
    note: "Full web development track with Jhankar Mahbub.",
  },
  {
    id: "w3s",
    title: "Web Development Certifications",
    institution: "W3Schools",
    from: "2023",
    to: "2023",
    location: "Online",
    note: "HTML, CSS, JavaScript, React, TypeScript, SQL and PHP.",
  },
];
