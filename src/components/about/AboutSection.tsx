import { portfolio } from "@/data/portfolio"
import {
  bodyClass,
  metaClass,
  SectionShell,
} from "@/components/section-shell/SectionShell"

/** 라벨, 제목, 본문, 역할 한 줄. 사진 자리는 두지 않는다. */
export function AboutSection() {
  return (
    <SectionShell
      id="about"
      label={portfolio.about.label}
      title={portfolio.about.title}
      tone="surface"
    >
      <div className="mt-8 flex max-w-3xl flex-col gap-6">
        {portfolio.about.paragraphs.map((paragraph) => (
          <p key={paragraph} className={bodyClass}>
            {paragraph}
          </p>
        ))}
        <p className={metaClass}>{portfolio.about.role}</p>
      </div>
    </SectionShell>
  )
}
