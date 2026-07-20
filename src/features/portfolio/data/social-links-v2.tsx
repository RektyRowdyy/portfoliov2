import { FileIcon } from "lucide-react"

import { Icons } from "@/components/icons"
import type { SocialLink } from "@/features/portfolio/types/social-links-v2"

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "x",
    icon: <Icons.x />,
    title: "X",
    handle: "@rektyrowdyy",
    href: "https://x.com/rektyrowdyy",
  },
  {
    name: "linkedin",
    icon: <Icons.linkedin />,
    title: "LinkedIn",
    handle: "hridya-dham-7727ba232",
    href: "https://www.linkedin.com/in/hridya-dham-7727ba232/",
  },
  {
    name: "resume",
    icon: <FileIcon />,
    title: "Resume",
    handle: "Resume",
    href: "https://drive.google.com/file/d/1MH7lFLX1C1zH-sYZwNb-S8WAiughpfLg/view?usp=sharing",
  },
]

export function getSocialLinkByName(name: string) {
  return SOCIAL_LINKS.find((link) => link.name === name)
}
