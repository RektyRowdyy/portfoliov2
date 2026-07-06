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
        title: "Lead Software Developer",
        employmentPeriod: {
          start: "04.2025",
        },
        employmentType: "Full-time · Remote",
        icon: <CodeXmlIcon />,
        description:
          "- Achieved zero downtime during scheduled maintenance and faster incident diagnosis by migrating logging from ELMAH to SigNoz (an OpenTelemetry-native stack that unifies traces, metrics, and logs with alerting) and implementing a Disaster Recovery process.\n" +
          "- Eliminated manual, error-prone releases and shortened deployment cycles by building CI/CD pipelines and standing up Kubernetes clusters and pods for Odoo, provisioning dev, demo, and prod environments with Forgejo Actions, Omni, and ArgoCD.\n" +
          "- Enabled patient-centric scheduling and automated document routing by designing REST APIs for a Cal.com integration and a HIPAA-compliant browser extension, and migrating internal workflows to n8n for trackable automation.\n" +
          "- Served as primary technical point of contact and Solutions Architect for Odoo across AZHealth24 and Zrpath, mentoring developers and running two-week Agile/Scrum sprints.",
        skills: [".NET", "Angular", "Odoo", "Docker", "Kubernetes", "ArgoCD", "n8n"],
        isExpanded: true,
      },
      {
        id: "2",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "11.2024",
          end: "03.2025",
        },
        employmentType: "Full-time · Remote",
        icon: <CodeXmlIcon />,
        description:
          "- Ended a 2-year growth plateau by growing the core SaaS platform from 10 to 50-60 active tenants across the US, shipping a steady stream of features and resolving systemic issues while leading a team of 3 developers.\n" +
          "- Improved application throughput and reduced memory footprint by leading the migration from .NET 4.7 to .NET 8 across a 7-person team (3 developers, 4 freelancers), modernizing the runtime and enabling containerized deployment, backed by unit and integration tests to keep releases on schedule.\n" +
          "- Delivered features in parallel for AZHealth24 (Chronic Care Management SaaS) and Zrpath (~10,000 clients/month across adult day-care centers), exposing functionality through REST APIs consumed by Angular frontends.",
        skills: [".NET", "Angular", "MSSQL"],
      },
      {
        id: "3",
        title: "Freelance Developer",
        employmentPeriod: {
          start: "10.2024",
          end: "10.2024",
        },
        employmentType: "Freelance · Remote",
        icon: <CodeXmlIcon />,
        description:
          "- Shipped the end-to-end Electronic Visit Verification (EVV) workflow (Create Visit, Clock In, Tasks-to-Forms, Clock Out) in the Angular mobile app used by field caregivers, handling business-critical data under HIPAA/PHI requirements.\n" +
          "- Earned a full-time Full Stack Developer offer by building in permission-based validation and compliance handling from day one.",
        skills: [".NET", "Angular", "TypeScript"],
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
        title: "Software Developer L1",
        employmentPeriod: {
          start: "01.2023",
          end: "12.2023",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description:
          "- Standardized approval behavior across a platform used by 1,500+ employees by building and scaling the Management Information System (MIS) and extracting duplicated approval-workflow logic into a standalone microservice.\n" +
          "- Cut manual onboarding effort by 50% and reduced onboarding time from a day to 2 hours by designing and implementing the employee onboarding workflow end-to-end within MIS, now a core HR tool.\n" +
          "- Eliminated unauthorized-access incidents by implementing Role-Based Access Control (RBAC) with employee-level permission overrides, strengthening platform-wide security.",
        skills: ["JavaScript", ".NET MVC", "MSSQL", "HTML", "CSS", "Git"],
        isExpanded: false,
      },
    ],
  },
]
