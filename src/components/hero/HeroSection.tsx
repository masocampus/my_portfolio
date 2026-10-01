import { portfolio } from "@/data/portfolio"
import { ScrollToSectionButton } from "@/components/scroll-to-section-button/ScrollToSectionButton"
import {
  heroTitleClass,
  labelClass,
  pageContainerClass,
  scrollOffsetClass,
  subtleTextClass,
} from "@/components/section-shell/SectionShell"

/** 직무, 이름, 부제, 이동 버튼만 둔다. 초상과 장식은 넣지 않는다. */
export function HeroSection() {
  return (
    <section
      id="hero"
      className={`${scrollOffsetClass} border-b border-line bg-canvas py-20 lg:py-28`}
    >
      <div className={pageContainerClass}>
        <p className={labelClass}>{portfolio.hero.eyebrow}</p>
        <h1 className={`mt-4 ${heroTitleClass}`}>{portfolio.hero.title}</h1>
        <p className={`mt-6 max-w-xl ${subtleTextClass}`}>
          {portfolio.hero.subtitle}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ScrollToSectionButton sectionId="projects">
            {portfolio.hero.primaryLabel}
          </ScrollToSectionButton>
          <ScrollToSectionButton sectionId="contact" variant="outline">
            {portfolio.hero.secondaryLabel}
          </ScrollToSectionButton>
        </div>
      </div>
    </section>
  )
}
