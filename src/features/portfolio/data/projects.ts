import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "eventverse",
    title: "EventVerse",
    logo: "/images/eventverse-logo.png",
    period: {
      start: "05.2026",
      end: "06.2026",
    },
    links: [
      { type: "web", url: "https://app.eventverse.co.in" },
      { type: "mobile", url: "https://m.eventverse.co.in" },
    ],
    skills: ["React", "TypeScript", "React Native", "Go", "AWS", "NoSQL"],
    description:
      "- Built a role-based event crew management platform connecting organizers with crew members: applicants browse, apply, and track approval status for events, organizers manage events and bulk-approve crew with auto-closing limits, and a three-tier admin panel (SuperAdmin, Admin, Finance) oversees roles, users, and payments.\n" +
      "- Owned the project end-to-end as a solo freelance engagement, from architecture and database design through the mobile and admin frontend, testing, and Play Store deployment guidance.",
    isExpanded: true,
  },
]
