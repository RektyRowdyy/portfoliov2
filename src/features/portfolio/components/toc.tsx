"use client"

import { useMediaQuery } from "@/hooks/use-media-query"
import { TOCMinimap } from "@/components/toc-minimap"

export function TOC() {
  const isDesktop = useMediaQuery("(min-width: 64rem)") // xl breakpoint

  if (!isDesktop) {
    return null
  }

  return (
    <div className="fixed top-[calc(var(--header-height)+var(--cover-height)+(--spacing(3))+1px)] right-0 z-50">
      <TOCMinimap
        className="transition-opacity duration-200"
        items={[
          { title: "Hello", url: "#hello", depth: 2 },
          { title: "Testimonials", url: "#testimonials", depth: 2 },
          { title: "Tech Stack", url: "#tech-stack", depth: 2 },
          { title: "Experience", url: "#experience", depth: 2 },
          { title: "Education", url: "#education", depth: 2 },
          { title: "Projects", url: "#projects", depth: 2 },
          { title: "The Journey", url: "#on-x", depth: 2 },
        ]}
        options={{
          threshold: 0,
          rootMargin: "-20% 0% -60% 0%",
        }}
      />
    </div>
  )
}

export default TOC
