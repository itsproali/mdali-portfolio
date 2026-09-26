export const siteConfig = {
  name: "Mohammad Ali",
  shortName: "Ali",
  handle: "itsproali",
  role: "Full-Stack Developer & Team Lead",
  roleShort: "Full-Stack Developer",
  tagline:
    "I design, build and ship production web applications — TypeScript end to end, from the interface down to the render pipeline.",
  description:
    "Mohammad Ali — Full-Stack Developer & Team Lead with 4+ years shipping production web applications in TypeScript, React, Next.js, Node.js and NestJS. AI video platforms, browser extensions and cloud-deployed SaaS.",
  url: "https://www.mdali.dev",
  locale: "en_US",

  email: "itsproali@gmail.com",
  phone: "+880 1884622861",
  phoneHref: "+8801884622861",
  location: "Dhaka, Bangladesh",
  locationLong: "Sarulia, Demra, Dhaka, Bangladesh — 1361",
  timezone: "GMT+6",

  avatar: "/images/mohammad-ali.png",
  resumeUrl:
    "https://drive.google.com/file/d/1qVQ1OLO-5RxHy1rwbe5Ib9igCTfeO99f/view?usp=drive_link",

  available: true,
  availabilityNote: "Open to full-time roles and select freelance work",
} as const;

export const socials = [
  { label: "GitHub", handle: "@itsproali", href: "https://github.com/itsproali" },
  {
    label: "LinkedIn",
    handle: "in/itsproali",
    href: "https://www.linkedin.com/in/itsproali/",
  },
  { label: "X", handle: "@itsproali", href: "https://twitter.com/itsproali" },
  {
    label: "Facebook",
    handle: "@itsproali",
    href: "https://www.facebook.com/itsproali/",
  },
] as const;

export const navItems = [
  { id: "skills", label: "Skills", index: "01" },
  { id: "work", label: "Work", index: "02" },
  { id: "experience", label: "Experience", index: "03" },
  { id: "decisions", label: "Decisions", index: "04" },
  { id: "services", label: "Services", index: "05" },
  { id: "references", label: "References", index: "06" },
  { id: "writing", label: "Writing", index: "07" },
  { id: "contact", label: "Contact", index: "08" },
] as const;

export const stats = [
  { value: 4, suffix: "+", label: "Years shipping", note: "since 2022" },
  { value: 40, suffix: "+", label: "Projects delivered", note: "web + extensions" },
  { value: 500, suffix: "+", label: "Templates shipped", note: "VidRush catalog" },
  { value: 50, suffix: "%", label: "Render cost cut", note: "AWS pipeline" },
] as const;
