import Image from "next/image"
import { GraduationCapIcon } from "lucide-react"

import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"

const ID = "education"

export function Education() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Education</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <PanelContent>
        <div className="flex items-start gap-3">
          <div className="flex size-6 shrink-0 items-center justify-center">
            <Image
              src="/images/mriirs-logo.png"
              alt="MRIIRS logo"
              width={24}
              height={24}
              className="rounded-full"
              unoptimized
            />
          </div>

          <div className="min-w-0 flex-1">
            <a
              href="https://mriirs.edu.in"
              target="_blank"
              rel="noopener"
              className="link text-lg font-semibold leading-snug"
            >
              Manav Rachna International Institute of Research &amp; Studies
            </a>

            <p className="mt-0.5 text-sm text-muted-foreground">
              Bachelor of Technology (BTech), Computer Science
            </p>

            <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted-foreground tabular-nums">
              <GraduationCapIcon className="size-3.5 shrink-0" />
              2019 — 2023 · Grade: 7.64 CGPA
            </p>
          </div>
        </div>
      </PanelContent>
    </Panel>
  )
}
