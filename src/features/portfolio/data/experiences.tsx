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
        title: "Tech Lead",
        employmentPeriod: {
          start: "04.2025",
        },
        employmentType: "Full-time · Remote",
        icon: <CodeXmlIcon />,
        description:
          "- Promoted to Tech Lead, taking direct ownership of AZHealth24 and Zrpath as the primary point of contact for clients, while also stepping in as Solutions Architect for Odoo, guiding healthcare-vertical solution design across the organization.\n" +
          "- Replaced error-prone manual deployments by building CI/CD pipelines for every project, standing up Kubernetes clusters and pods for Odoo (a Python framework), and provisioning dev, demo, and prod environments end-to-end with Forgejo Actions runners, Omni, and ArgoCD for automated build syncs.\n" +
          "- Migrated application logging from ELMAH to SigNoz, an open-source, OpenTelemetry-native alternative to Datadog, unifying traces, metrics, and logs with proper alerting, and implemented Disaster Recovery to achieve zero downtime during scheduled maintenance.\n" +
          "- Led product delivery across the myEZcare ecosystem, including a Cal.com integration for patient-centric scheduling, a HIPAA-compliant browser extension for routing documents to the right employee or patient directory, and migrating rigid internal workflows to n8n for clearer, trackable automation.",
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
          "- Stepped up from individual contributor to leading a team of 3 developers, stabilizing a SaaS platform that had stalled at around 10 tenants for 2 years: shipping a steady stream of new features and fixing systemic issues to grow it to a consistent 50-60 tenants across the US.\n" +
          "- Led the migration from .NET 4.7 to .NET 8 across a team of 3 developers and 4 freelancers, modernizing the platform's foundation while keeping feature releases on schedule.\n" +
          "- Contributed in parallel to AZHealth24, a SaaS platform for Chronic Care Management, and Zrpath, a complex application for adult day-care centers serving about 10,000 clients each month.",
        skills: [".NET", "Angular", "MSSQL"],
      },
      {
        id: "3",
        title: ".NET Freelance Developer",
        employmentPeriod: {
          start: "10.2024",
          end: "10.2024",
        },
        employmentType: "Freelance · Remote",
        icon: <CodeXmlIcon />,
        description:
          "- Built the end-to-end Electronic Visit Verification (EVV) Visit Process, one of the most critical workflows in a healthcare SaaS platform: Create Visit (fetching business-critical data while handling HIPAA/PHI requirements), Clock In with permission-based validations, Tasks-to-Forms integration, and Clock Out, designed and shipped in the Angular mobile app used by caregivers in the field.\n" +
          "- This contribution was instrumental in earning a full-time offer from myEZcare, leading directly into the Full Stack Developer.",
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
        title: "Software Engineer L1",
        employmentPeriod: {
          start: "01.2023",
          end: "12.2023",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description:
          "- Built and scaled the Management Information System (MIS), an internal platform used by 1,500+ employees company-wide, eliminating technical debt by extracting approval-workflow logic, previously duplicated across the application into a single standalone microservice, ensuring consistent behavior everywhere.\n" +
          "- Designed the employee onboarding workflow end-to-end within MIS, now a core tool relied on by HR teams across the organization, automating onboarding and access provisioning to cut manual effort by 50%.\n" +
          "- Implemented role-based access control (RBAC) with employee-level permission overrides to eliminate unauthorized access incidents, and played a key role in migrating the platform from .NET 5.1 to .NET 6.",
        skills: ["JavaScript", ".NET MVC", "MSSQL", "HTML", "CSS", "Git"],
        isExpanded: false,
      },
    ],
  },
]
