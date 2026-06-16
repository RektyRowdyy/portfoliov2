import type { Route } from "next"

import type { NavItem } from "@/types/nav"
import { USER } from "@/features/portfolio/data/user"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.NEXT_PUBLIC_APP_URL || "https://hridyadham.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem<Route>[] = []

export const MOBILE_NAV: NavItem<Route>[] = [
  {
    title: "Home",
    href: "/",
  },
]

export const X_HANDLE = "@rektyrowdyy"
export const GITHUB_USERNAME = "rektyrowdyy"
export const SOURCE_CODE_GITHUB_REPO = "rektyrowdyy/hridyadham.com"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/rektyrowdyy/hridyadham.com"

export const SPONSORSHIP_URL = "https://github.com/sponsors/rektyrowdyy"

export const UTM_PARAMS = {
  utm_source: "hridyadham.com",
}
