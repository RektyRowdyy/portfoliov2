export type Project = {
  /** Stable unique identifier (used as list key/anchor). */
  id: string
  title: string
  /**
   * Project period for display and sorting.
   * Use "MM.YYYY" format. Omit `end` for ongoing projects.
   */
  period: {
    /** Start date (e.g., "05.2025"). */
    start: string
    /** End date; leave undefined for "Present". */
    end?: string
  }
  /** One or more public URLs (site, repository, demo, mobile app, etc.), each rendered as its own icon link. */
  links: Array<{
    /** Determines which icon is shown. */
    type: "web" | "mobile" | "github" | "demo" | "link"
    url: string
  }>
  /** Tags/technologies for chips or filtering. */
  skills: string[]
  /** Optional rich description; Markdown and line breaks supported. */
  description?: string
  /** Logo image URL (absolute or path under /public). */
  logo?: string
  /** Whether the project card is expanded by default in the UI. */
  isExpanded?: boolean
}
