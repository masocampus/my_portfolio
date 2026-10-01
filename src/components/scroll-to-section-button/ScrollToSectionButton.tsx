"use client"

import { cn } from "cn"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/scroll-page"

interface ScrollToSectionButtonProps {
  sectionId: string
  children: string
  variant?: "default" | "outline"
}

/** 주요·보조 버튼이 섹션으로 이동할 때 쓴다. 제출 동작은 없다. */
export function ScrollToSectionButton({
  sectionId,
  children,
  variant = "default",
}: ScrollToSectionButtonProps) {
  return (
    <Button
      type="button"
      variant={variant}
      size="lg"
      className={cn(
        "h-11 w-full px-4 text-base active:translate-y-0 sm:w-auto",
        variant === "default" && "hover:bg-point-hover",
        variant === "outline" && "border-line bg-surface text-ink hover:bg-canvas",
      )}
      onClick={() => scrollToSection(sectionId)}
    >
      {children}
    </Button>
  )
}
