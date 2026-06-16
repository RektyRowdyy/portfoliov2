import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "hridyadham-com",
    title: "hridyadham.com",
    period: {
      start: "06.2026",
    },
    link: "https://github.com/rektyrowdyy/hridyadham.com",
    skills: [
      "Open Source",
      "Next.js 16",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Motion",
      "Vercel",
    ],
    description: "Personal portfolio website.",
    isExpanded: true,
  },
  {
    id: "eventverse",
    title: "EventVerse",
    logo: "/images/eventverse-logo.png",
    period: {
      start: "05.2026",
      end: "06.2026",
    },
    link: "https://app.eventverse.co.in/",
    skills: [],
    description:
      "- **Web:** [app.eventverse.co.in](https://app.eventverse.co.in/)\n" +
      "- **Mobile:** [m.eventverse.co.in](https://m.eventverse.co.in/)",
    isExpanded: true,
  },
]
