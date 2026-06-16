"use client"

import { useRef } from "react"
import { useInView, usePageInView } from "motion/react"

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee"
import { TestimonialSpotlight } from "@/registry/transformed/components/testimonial-spotlight"
import {
  TWEET_SCREENSHOTS_1,
  TWEET_SCREENSHOTS_2,
} from "@/features/portfolio/data/twitter-screenshots"
import type { TweetScreenshot } from "@/features/portfolio/types/twitter-screenshots"

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

const ALL_SCREENSHOTS = [...TWEET_SCREENSHOTS_1, ...TWEET_SCREENSHOTS_2]

const FEATURED_SCREENSHOTS = ALL_SCREENSHOTS.filter((s) => s.isFeatured).sort(
  (a, b) => Number(a.order ?? 999) - Number(b.order ?? 999)
)

export function TwitterScreenshots() {
  const ref = useRef<HTMLDivElement>(null)
  const isPageInView = usePageInView()
  const isInView = useInView(ref)
  const play = isPageInView && isInView

  return (
    <Panel id="on-x">
      <PanelHeader>
        <PanelTitle>The Journey</PanelTitle>
      </PanelHeader>

      {ALL_SCREENSHOTS.length === 0 ? (
        <div className="screen-line-bottom">
          <p className="px-4 py-8 text-center text-sm text-muted-foreground">
            Journey is loading...
          </p>
        </div>
      ) : (
        <div
          ref={ref}
          className="screen-line-bottom [&_.rfm-initial-child-container]:items-stretch! [&_.rfm-marquee]:items-stretch!"
        >
          <div className="grid gap-2 py-2">
            {FEATURED_SCREENSHOTS.length > 0 && (
              <div className="grid gap-2 px-2 [--spotlight-size:50%] sm:grid-cols-2">
                {FEATURED_SCREENSHOTS.map((item) => (
                  <TestimonialSpotlight
                    key={item.imageUrl}
                    className="bg-background"
                  >
                    <ScreenshotCard {...item} />
                  </TestimonialSpotlight>
                ))}
              </div>
            )}

            <ScreenshotList data={TWEET_SCREENSHOTS_1} play={play} />
            <ScreenshotList
              data={TWEET_SCREENSHOTS_2}
              direction="right"
              play={play}
            />
          </div>

          <div className="flex h-px" />
        </div>
      )}
    </Panel>
  )
}

function ScreenshotList({
  data,
  direction,
  play,
}: {
  data: TweetScreenshot[]
  direction?: "right" | "left"
  play?: boolean
}) {
  const nonFeatured = data.filter((s) => !s.isFeatured)
  if (nonFeatured.length === 0) return null

  return (
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent
        direction={direction}
        autoFill={false}
        play={play}
        speed={40}
      >
        {nonFeatured.map((item) => (
          <MarqueeItem
            key={item.imageUrl}
            className="mx-1 h-full rounded-xl bg-background inset-ring-1 inset-ring-foreground/10 transition-[background-color] ease-out hover:bg-accent-muted"
          >
            <ScreenshotCard {...item} />
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  )
}

function ScreenshotCard({ imageUrl, alt, url }: TweetScreenshot) {
  return (
    <div className="relative aspect-[4/3] w-72 overflow-hidden rounded-xl">
      <img
        src={imageUrl}
        alt={alt ?? "Tweet screenshot"}
        className="size-full object-cover"
      />
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
          aria-label="View tweet"
        />
      )}
    </div>
  )
}
