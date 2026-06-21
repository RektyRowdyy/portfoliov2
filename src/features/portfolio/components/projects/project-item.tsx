import Image from "next/image"
import { addQueryParams } from "@/utils/url"
import {
  BoxIcon,
  CloudIcon,
  DatabaseIcon,
  InfinityIcon,
  LinkIcon,
  MonitorIcon,
  SmartphoneIcon,
} from "lucide-react"

import { UTM_PARAMS } from "@/config/site"
import { Icons } from "@/components/icons"
import { Tag } from "@/components/ui/tag"
import { Prose } from "@/components/ui/typography"
import {
  Collapsible,
  CollapsibleChevronsUpDownIcon,
} from "@/components/base/collapsible-animated"
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/base/ui/collapsible"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import { Markdown } from "@/components/markdown"

import type { Project } from "../../types/projects"

const SKILL_ICON_MAP: Record<string, string> = {
  React: "react",
  TypeScript: "typescript",
  "React Native": "react",
  Go: "go",
}

// AWS and NoSQL have no official icon on simpleicons.org (AWS is excluded
// for trademark reasons; NoSQL isn't a single brand), so fall back to a
// generic lucide icon for these.
const SKILL_FALLBACK_ICON_MAP: Record<string, typeof CloudIcon> = {
  AWS: CloudIcon,
  NoSQL: DatabaseIcon,
}

const PROJECT_LINK_ICON_MAP = {
  web: MonitorIcon,
  mobile: SmartphoneIcon,
  github: Icons.github,
  demo: LinkIcon,
  link: LinkIcon,
} as const

const PROJECT_LINK_LABEL_MAP: Record<
  keyof typeof PROJECT_LINK_ICON_MAP,
  string
> = {
  web: "Open Web App",
  mobile: "Open Mobile App",
  github: "Open GitHub Repo",
  demo: "Open Demo",
  link: "Open Project Link",
}

export function ProjectItem({
  className,
  project,
}: {
  className?: string
  project: Project
}) {
  const { start, end } = project.period
  const isOngoing = !end
  const isSinglePeriod = end === start

  return (
    <Collapsible className={className} defaultOpen={project.isExpanded}>
      <div className="flex items-center hover:bg-accent-muted">
        {project.logo ? (
          <Image
            src={project.logo}
            alt={project.title}
            width={32}
            height={32}
            quality={100}
            className="mx-4 flex size-6 shrink-0 select-none"
            unoptimized
            aria-hidden
          />
        ) : (
          <div className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-line ring-offset-1 ring-offset-background select-none">
            <BoxIcon className="size-4" />
          </div>
        )}

        <div className="flex-1 border-l border-dashed border-line">
          <CollapsibleTrigger className="flex w-full items-center gap-2 p-4 pr-2 text-left">
            <div className="flex-1">
              <h3 className="mb-1 leading-snug font-medium text-balance">
                {project.title}
              </h3>

              <dl className="text-sm text-muted-foreground">
                <dt className="sr-only">Period</dt>
                <dd className="flex items-center gap-0.5">
                  <span>{start}</span>
                  {!isSinglePeriod && (
                    <>
                      <span className="font-mono">—</span>
                      {isOngoing ? (
                        <InfinityIcon
                          className="size-4.5 translate-y-[0.5px]"
                          aria-label="Present"
                        />
                      ) : (
                        <span>{end}</span>
                      )}
                    </>
                  )}
                </dd>
              </dl>
            </div>

            <div className="flex shrink-0 items-center gap-1">
              {project.links.map((link) => {
                const Icon = PROJECT_LINK_ICON_MAP[link.type]
                const label = PROJECT_LINK_LABEL_MAP[link.type]
                return (
                  <Tooltip key={link.url}>
                    <TooltipTrigger
                      render={
                        <a
                          className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                          href={addQueryParams(link.url, UTM_PARAMS)}
                          target="_blank"
                          rel="noopener"
                          aria-label={label}
                        >
                          <Icon className="pointer-events-none size-4" />
                        </a>
                      }
                    />
                    <TooltipContent>
                      <p>{label}</p>
                    </TooltipContent>
                  </Tooltip>
                )
              })}
            </div>

            <div className="shrink-0 text-muted-foreground [&_svg]:size-4">
              <CollapsibleChevronsUpDownIcon duration={0.15} />
            </div>
          </CollapsibleTrigger>
        </div>
      </div>

      <CollapsibleContent className="overflow-hidden">
        <div className="space-y-4 border-t border-line p-4">
          {project.description && (
            <Prose>
              <Markdown>{project.description}</Markdown>
            </Prose>
          )}

          {project.skills.length > 0 && (
            <ul className="flex flex-wrap gap-1.5">
              {project.skills.map((skill, index) => {
                const iconKey = SKILL_ICON_MAP[skill]
                const FallbackIcon = SKILL_FALLBACK_ICON_MAP[skill]
                return (
                  <li key={index} className="flex">
                    <Tag className="gap-1.5">
                      {iconKey ? (
                        <Image
                          src={`https://cdn.simpleicons.org/${iconKey}`}
                          alt={`${skill} icon`}
                          width={14}
                          height={14}
                          unoptimized
                        />
                      ) : (
                        FallbackIcon && <FallbackIcon className="size-3.5" />
                      )}
                      {skill}
                    </Tag>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
