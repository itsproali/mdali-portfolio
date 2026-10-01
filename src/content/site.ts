import { siFacebook, siGithub, siX } from "simple-icons";

import { linkedinMark } from "./brand-marks";

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
  {
    label: "GitHub",
    handle: "@itsproali",
    href: "https://github.com/itsproali",
    icon: siGithub,
  },
  {
    label: "LinkedIn",
    handle: "in/itsproali",
    href: "https://www.linkedin.com/in/itsproali/",
    custom: linkedinMark,
  },
  {
    label: "X",
    handle: "@itsproali",
    href: "https://twitter.com/itsproali",
    icon: siX,
  },
  {
    label: "Facebook",
    handle: "@itsproali",
    href: "https://www.facebook.com/itsproali/",
    icon: siFacebook,
  },
] as const;

export const navItems = [
  { id: "skills", label: "Skills", index: "01" },
  { id: "work", label: "Work", index: "02" },
  { id: "experience", label: "Experience", index: "03" },
  { id: "decisions", label: "Decisions", index: "04" },
  { id: "references", label: "References", index: "05" },
  { id: "writing", label: "Writing", index: "06" },
  { id: "contact", label: "Contact", index: "07" },
] as const;

/** The subset shown in the floating header. The rail shows everything. */
export const headerLinks = ["skills", "work", "experience", "writing"] as const;

/**
 * Headline numbers about Ali as an engineer — not project metrics. Those
 * (templates shipped, render cost) live on the VidRush card and in the
 * decision log where they have context.
 */
export const stats = [
  { value: 4, suffix: "+", label: "Years shipping", note: "since 2022" },
  { value: 40, suffix: "+", label: "Projects delivered", note: "web + extensions" },
  { value: 21, suffix: "+", label: "Happy clients", note: "freelance + contract" },
  { value: 5, suffix: "", label: "Engineers led", note: "recent team · VidRush AI" },
] as const;
