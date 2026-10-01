"use client"

import { useEffect, useState } from "react"
import { portfolio } from "@/data/portfolio"

const HEADER_HEIGHT_PX = 64

/**
 * 헤더 아래에 들어온 메뉴 섹션 하나만 고른다.
 * Hero는 메뉴에 없으므로 상단에서는 선택이 없다.
 */
export function useActiveSection(): string | null {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null)

  useEffect(() => {
    const updateActiveSection = () => {
      const canScroll =
        document.documentElement.scrollHeight > window.innerHeight + 1
      const isAtBottom =
        canScroll &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 1

      if (isAtBottom) {
        const lastItem = portfolio.menu[portfolio.menu.length - 1]
        setActiveSectionId(lastItem?.id ?? null)
        return
      }

      let currentId: string | null = null
      const marker = HEADER_HEIGHT_PX + 1

      for (const item of portfolio.menu) {
        const section = document.getElementById(item.id)
        if (!section) continue
        if (section.getBoundingClientRect().top <= marker) {
          currentId = item.id
        }
      }

      setActiveSectionId(currentId)
    }

    let frameId = 0
    const onScroll = () => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return activeSectionId
}
