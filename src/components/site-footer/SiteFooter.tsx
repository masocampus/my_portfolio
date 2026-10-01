"use client"

import { cn } from "cn"
import { portfolio } from "@/data/portfolio"
import { scrollToTop } from "@/lib/scroll-page"
import {
  metaClass,
  pageContainerClass,
  subtleTextClass,
} from "@/components/section-shell/SectionShell"

const focusRingClass =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-point"

/** 이름, 한 줄 소개, 저작 표기, 상단으로 가는 텍스트 링크. */
export function SiteFooter() {
  const onTopClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    scrollToTop()
  }

  return (
    <footer className="bg-canvas">
      <div
        className={cn(
          pageContainerClass,
          "flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between",
        )}
      >
        <div className="flex max-w-xl flex-col gap-2">
          <p className="break-keep text-base font-medium text-ink">
            {portfolio.footer.name}
          </p>
          <p className={subtleTextClass}>{portfolio.footer.tagline}</p>
          <p className={metaClass}>{portfolio.footer.copyright}</p>
        </div>
        <a
          href="#hero"
          onClick={onTopClick}
          className={cn(
            "text-sm font-medium text-ink underline-offset-4 hover:text-point hover:underline",
            focusRingClass,
          )}
        >
          {portfolio.footer.backToTopLabel}
        </a>
      </div>
    </footer>
  )
}
