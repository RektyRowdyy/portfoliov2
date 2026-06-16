import { CodeXmlIcon } from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "myezcare",
    companyName: "myEZcare",
    companyLogo: "/images/myezcare-logo.png",
    companyWebsite: "https://myezcare.com",
    positions: [
      {
        id: "1",
        title: "Lead .NET Developer",
        employmentPeriod: {
          start: "04.2025",
        },
        employmentType: "Full-time · Remote",
        icon: <CodeXmlIcon />,
        description: "",
        skills: [],
        isExpanded: true,
      },
      {
        id: "2",
        title: ".NET Full Stack Developer",
        employmentPeriod: {
          start: "11.2024",
          end: "03.2025",
        },
        employmentType: "Full-time · Remote",
        icon: <CodeXmlIcon />,
        description: "",
        skills: [],
      },
      {
        id: "3",
        title: ".NET Full Stack Developer",
        employmentPeriod: {
          start: "10.2024",
          end: "10.2024",
        },
        employmentType: "Freelance · Remote",
        icon: <CodeXmlIcon />,
        description: "",
        skills: [],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "gemini-solutions",
    companyName: "Gemini Solutions Pvt Ltd",
    companyLogo: "/images/gemini-solutions-logo.png",
    companyWebsite: "https://geminisolutions.com",
    positions: [
      {
        id: "1",
        title: "Software Engineer L1",
        employmentPeriod: {
          start: "01.2023",
          end: "12.2023",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description:
          "- Shaped engineering standards as a member of the .NET Engineering Council, driving best practices that improved team velocity and code quality.\n" +
          "- Cut MIS data retrieval time by 30% and reduced system latency by 25% by streamlining front-end/back-end integration.\n" +
          "- Eliminated unauthorized access incidents by implementing dynamic role-based access control (RBAC), significantly hardening application security.\n" +
          "- Reduced report generation time from 3+ minutes to under 30 seconds by introducing real-time data filtering — a 6× speed improvement.\n" +
          "- Automated user onboarding and access provisioning, cutting manual effort by 50% and shrinking onboarding time from a full day to under 2 hours.\n" +
          "- Led the .NET 5.1 → .NET 6 migration and modernized all associated libraries, keeping the platform on a supported and performant stack.",
        skills: ["JavaScript", ".NET MVC", "MSSQL", "HTML", "CSS", "Git"],
        isExpanded: true,
      },
    ],
  },
]
