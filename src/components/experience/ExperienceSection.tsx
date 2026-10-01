import { portfolio } from "@/data/portfolio"
import {
  bodyClass,
  metaClass,
  SectionShell,
} from "@/components/section-shell/SectionShell"

/** 최신순 세로 목록. 구분선 색의 가는 선만 사용한다. */
export function ExperienceSection() {
  return (
    <SectionShell id="experience" title="Experience" tone="canvas">
      <ol className="mt-10 flex max-w-3xl flex-col">
        {portfolio.experience.map((item) => (
          <li
            key={`${item.period}-${item.organization}`}
            className="border-l border-line py-6 pl-6 first:pt-0 last:pb-0"
          >
            <p className={metaClass}>{item.period}</p>
            <h3 className="mt-2 break-keep text-base font-medium leading-snug text-ink">
              {item.organization}
            </h3>
            <p className={`mt-1 ${metaClass}`}>{item.role}</p>
            <p className={`mt-3 ${bodyClass}`}>{item.summary}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  )
}
