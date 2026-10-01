import type { ReactNode } from "react"
import { cn } from "cn"

interface SectionShellProps {
  id: string
  title: string
  tone: "canvas" | "surface"
  label?: string
  children?: ReactNode
}

const pageContainerClass = "mx-auto w-full max-w-[1152px] px-6 md:px-8"

const scrollOffsetClass = "scroll-mt-[calc(4rem+env(safe-area-inset-top))]"

const sectionTitleClass =
  "text-balance break-keep text-[clamp(1.75rem,1.5rem+1vw,2.25rem)] font-medium leading-[1.2] tracking-tight text-ink"

const heroTitleClass =
  "text-balance break-keep text-[clamp(2.5rem,1.35rem+5.2vw,4rem)] font-medium leading-[1.1] tracking-tight text-ink"

const readingTextClass =
  "text-pretty break-keep text-[clamp(1rem,0.96rem+0.35vw,1.125rem)] font-normal leading-[1.75]"

const bodyClass = `${readingTextClass} text-ink`

const subtleTextClass = `${readingTextClass} text-subtle`

const metaClass = "text-[13px] font-medium leading-normal tracking-wide text-subtle"

const labelClass = "text-[13px] font-medium leading-normal tracking-[0.08em] text-subtle"

const badgeClass =
  "h-auto min-h-7 max-w-full whitespace-normal px-2.5 py-1 text-[13px] leading-snug font-medium text-ink"

/**
 * 섹션의 폭, 패딩, 제목 단계를 맞춘다. 내용은 children으로 채운다.
 */
export function SectionShell({
  id,
  title,
  tone,
  label,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        scrollOffsetClass,
        "border-b border-line py-20 lg:py-28",
        tone === "surface" ? "bg-surface" : "bg-canvas",
      )}
    >
      <div className={pageContainerClass}>
        {label ? <p className={labelClass}>{label}</p> : null}
        <h2 className={cn(sectionTitleClass, label && "mt-3")}>{title}</h2>
        {children}
      </div>
    </section>
  )
}

export {
  badgeClass,
  bodyClass,
  heroTitleClass,
  labelClass,
  metaClass,
  pageContainerClass,
  scrollOffsetClass,
  subtleTextClass,
}
