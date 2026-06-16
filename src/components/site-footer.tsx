import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { getSocialLinkByName } from "@/features/portfolio/data/social-links-v2"

export function SiteFooter() {
  const xLink = getSocialLinkByName("x")
  const githubLink = getSocialLinkByName("github")
  const linkedinLink = getSocialLinkByName("linkedin")

  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-top mx-auto border-x border-line group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
        <div className="screen-line-top screen-line-bottom flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-line bg-background px-4">
            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href={xLink?.href}
              target="_blank"
              rel="noopener"
              aria-label="X Profile"
            >
              <Icons.x className="size-4" />
            </a>

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href={githubLink?.href}
              target="_blank"
              rel="noopener"
              aria-label="GitHub Profile"
            >
              <Icons.github className="size-4" />
            </a>

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href={linkedinLink?.href}
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn Profile"
            >
              <Icons.linkedin className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-24" />
      </div>
    </footer>
  )
}

function Separator({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex h-11 w-px bg-line", className)} {...props} />
}
