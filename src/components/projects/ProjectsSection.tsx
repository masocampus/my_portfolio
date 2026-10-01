import Image from "next/image"
import { hasProjectUrl, portfolio } from "@/data/portfolio"
import {
  badgeClass,
  metaClass,
  SectionShell,
  subtleTextClass,
} from "@/components/section-shell/SectionShell"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const projectLinkClass =
  "text-point underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-point"

/** URL이 있는 카드만 새 탭 링크를 만든다. 썸네일이 없으면 이미지 칸을 두지 않는다. */
export function ProjectsSection() {
  return (
    <SectionShell id="projects" title="Projects" tone="surface">
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.projects.map((project) => (
          <Card
            key={project.title}
            className="min-w-0 border border-line bg-surface shadow-none ring-0"
          >
            {project.thumbnailSrc ? (
              <Image
                src={project.thumbnailSrc}
                alt=""
                width={640}
                height={400}
                className="h-auto w-full"
              />
            ) : null}
            <CardHeader>
              <CardTitle className="break-keep text-base leading-snug text-ink">
                {hasProjectUrl(project) ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={projectLinkClass}
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </CardTitle>
              <CardDescription className={subtleTextClass}>
                {project.summary}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="max-w-full">
                    <Badge variant="outline" className={badgeClass}>
                      {tag}
                    </Badge>
                  </li>
                ))}
              </ul>
              <p className={metaClass}>{project.meta}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  )
}
