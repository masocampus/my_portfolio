"use client"

import { useState } from "react"
import { MenuIcon } from "lucide-react"
import { cn } from "cn"
import { portfolio } from "@/data/portfolio"
import { scrollToSection, scrollToTop } from "@/lib/scroll-page"
import { useActiveSection } from "@/hooks/useActiveSection"
import { pageContainerClass } from "@/components/section-shell/SectionShell"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const focusRingClass =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-point"

function menuLinkClass(isActive: boolean): string {
  return cn(
    "text-sm font-medium text-ink underline-offset-4 hover:text-point hover:underline",
    focusRingClass,
    isActive && "text-point",
  )
}

/**
 * 상단 고정 헤더. 데스크톱은 앵커 메뉴, 768px 미만은 Sheet.
 * 현재 섹션은 포인트색 하나뿐이다.
 */
export function SiteHeader() {
  const activeSectionId = useActiveSection()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const onLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    scrollToTop()
  }

  const onMenuClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    event.preventDefault()
    setIsMenuOpen(false)
    scrollToSection(sectionId)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/95 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div
        className={cn(
          pageContainerClass,
          "flex h-16 items-center justify-between gap-3",
        )}
      >
        <a
          href="#hero"
          onClick={onLogoClick}
          className={cn(
            "min-w-0 truncate text-base font-medium text-ink underline-offset-4 hover:underline",
            focusRingClass,
          )}
        >
          {portfolio.hero.title}
        </a>

        <nav aria-label="섹션" className="hidden items-center gap-6 md:flex">
          {portfolio.menu.map((item) => {
            const isActive = item.id === activeSectionId
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                onClick={(event) => onMenuClick(event, item.id)}
                className={menuLinkClass(isActive)}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-11 shrink-0 md:hidden"
              aria-label="메뉴 열기"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-surface">
            <SheetHeader>
              <SheetTitle>메뉴</SheetTitle>
            </SheetHeader>
            <nav aria-label="섹션" className="flex flex-col gap-1 px-4">
              {portfolio.menu.map((item) => {
                const isActive = item.id === activeSectionId
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={(event) => onMenuClick(event, item.id)}
                    className={cn(
                      menuLinkClass(isActive),
                      "flex min-h-11 items-center text-base",
                    )}
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
