import { portfolio } from "@/data/portfolio"
import {
  badgeClass,
  SectionShell,
} from "@/components/section-shell/SectionShell"
import { Badge } from "@/components/ui/badge"

/** 카테고리 제목과 Badge만 둔다. 숙련도 바나 차트는 만들지 않는다. */
export function SkillsSection() {
  return (
    <SectionShell id="skills" title="Skills" tone="canvas">
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        {portfolio.skills.map((category) => (
          <div key={category.title} className="min-w-0">
            <h3 className="break-keep text-base font-medium text-ink">
              {category.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li key={item} className="max-w-full">
                  <Badge variant="outline" className={badgeClass}>
                    {item}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
