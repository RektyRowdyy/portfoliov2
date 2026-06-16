import Image from "next/image"

import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"

import { TECH_STACK } from "../data/tech-stack"

const ID = "tech-stack"

export function TechStack() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Tech Stack</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="screen-line-bottom">
        <ul className="flex flex-wrap gap-2">
          {TECH_STACK.map((tech) => {
            return (
              <li key={tech.key} className="flex">
                <a
                  href={tech.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={tech.title}
                  className="flex items-center gap-1.5 rounded-full bg-zinc-50 px-1.5 py-0.5 font-mono text-xs text-foreground ring-1 ring-border/80 select-none dark:bg-zinc-900 [&_img]:size-3.5"
                >
                  <Image
                    src={`https://cdn.simpleicons.org/${tech.key}`}
                    alt={`${tech.title} icon`}
                    width={14}
                    height={14}
                    unoptimized
                  />
                  {tech.title}
                </a>
              </li>
            )
          })}
        </ul>
      </PanelContent>
    </Panel>
  )
}
