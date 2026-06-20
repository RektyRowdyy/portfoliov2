import type { Testimonial } from "../types/testimonials"

// Long quotes (more than 50 characters), ordered by date ascending
export const TESTIMONIALS_1: Testimonial[] = [
  {
    authorAvatar: "/images/avataaars/female/avataaars-1776575751416.svg",
    authorName: "Hailey",
    authorTagline: "ZRpath",
    url: "#",
    quote: "If you want us working with myEZcare we want you!",
    date: "2026-06-13",
    isFeatured: false,
    order: 1,
  },
]

// Short quotes (50 characters or fewer), ordered by date ascending
export const TESTIMONIALS_2: Testimonial[] = [
  {
    authorAvatar: "/images/avataaars/male/avataaars-1776575767888.svg",
    authorName: "Piyush",
    authorTagline: "EventVerse",
    url: "#",
    quote: "Best UI design that we've seen.",
    date: "2026-06-20",
    isFeatured: false,
    order: 1,
  },
]
