import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function NotFound({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[calc(100svh-5.5rem)] flex-col items-center justify-center",
        className
      )}
    >
      <svg
        className="size-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        <rect width="32" height="32" rx="6" fill="#09090b" />
        <text
          x="16"
          y="23"
          fontFamily="system-ui, sans-serif"
          fontSize="16"
          fontWeight="700"
          textAnchor="middle"
          fill="#ffffff"
          letterSpacing="-0.5"
        >
          hd
        </text>
      </svg>

      <h1 className="my-6 text-8xl font-medium tracking-tighter tabular-nums">
        404
      </h1>

      <Button asChild>
        <Link href="/">
          Go to Home
          <ArrowRightIcon />
        </Link>
      </Button>
    </div>
  )
}
