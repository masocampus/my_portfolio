const SCROLL_BEHAVIOR_SMOOTH = "smooth"
const SCROLL_BEHAVIOR_AUTO = "auto"

/** 모션 줄이기가 켜져 있으면 스크롤을 즉시 점프로 한다. */
function scrollBehavior(): ScrollBehavior {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches

  return prefersReducedMotion ? SCROLL_BEHAVIOR_AUTO : SCROLL_BEHAVIOR_SMOOTH
}

/** 섹션 id로 이동한다. 도착 여백은 섹션의 scroll-margin이 헤더 높이만큼 비운다. */
export function scrollToSection(sectionId: string): void {
  const section = document.getElementById(sectionId)
  if (!section) return

  section.scrollIntoView({
    behavior: scrollBehavior(),
    block: "start",
  })
}

/** 페이지 맨 위로 이동한다. */
export function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: scrollBehavior(),
  })
}
