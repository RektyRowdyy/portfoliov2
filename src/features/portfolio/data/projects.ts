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
    skills: ["React", "TypeScript", "React Native"],
    description:
      "- Built a role-based event crew management platform as part of a 3-person team: organizers post events and bulk-approve crew with auto-closing limits, applicants track approval status, and a three-tier admin panel (SuperAdmin, Admin, Finance) manages roles, users, and payments.\n" +
      "- Owned architecture and the full cross-platform frontend: a React Native mobile app, a React admin panel, PWA integration, and deployment to both the Play Store and App Store.",
    isExpanded: true,
  },
]
