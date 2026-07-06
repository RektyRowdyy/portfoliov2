import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Hridya",
  lastName: "Dham",
  displayName: "Hridya Dham",
  username: "rektyrowdyy",
  gender: "male",
  pronouns: "he/him",
  bio: "Building things with code.",
  flipSentences: [
    "Building things with code.",
    "Full Stack Engineer",
    "Bulking Since 2000",
  ],
  address: "Dehradun, India",
  phoneNumberB64: "KzkxLTk3MTExNjI1MTQ=",
  emailB64: "aHJpZHlhZGhhbUBnbWFpbC5jb20=",
  website: "https://github.com/RektyRowdyy",
  jobTitle: "Full Stack Engineer",
  jobs: [
    {
      title: "Lead Software Developer",
      company: "myEZcare",
      website: "https://myezcare.com",
      experienceId: "current-company",
    },
  ],
  about: `
I'm Hridya Dham, a Full Stack Engineer based in Dehradun, India. I like owning problems end-to-end, from building healthcare SaaS products in .NET and Angular to standing up the Kubernetes, CI/CD, and observability infrastructure that keeps them running, which has grown into leading engineering teams and being the technical point of contact for clients. Currently Lead Software Developer at myEZcare.
`,
  avatar: "/images/avatar.jpg",
  avatarVariants: {
    lightOff: "/images/avatar.jpg",
    lightOn: "/images/avatar.jpg",
    darkOff: "/images/avatar.jpg",
    darkOn: "/images/avatar.jpg",
  },
  ogImage: "https://hridyadham.com/og.png", // TODO (HRI-47): generate and host OG image
  namePronunciationUrl: "", // leave blank — hides the pronounce button
  timeZone: "Asia/Kolkata",
  keywords: [
    "rektyrowdyy",
    "hridyadham",
    "hridya dham",
    "hridya",
    "dham",
    "hridyadham.com",
  ],
  dateCreated: "2026-06-13",
}
