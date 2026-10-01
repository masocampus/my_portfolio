/**
 * 포트폴리오 화면이 공유하는 샘플 카피.
 * 실명과 실경력으로 바꿀 때는 이 파일만 수정한다.
 */

export interface SiteMeta {
  title: string
  description: string
}

export interface HeroContent {
  eyebrow: string
  title: string
  subtitle: string
  primaryLabel: string
  secondaryLabel: string
}

export interface AboutContent {
  label: string
  title: string
  paragraphs: readonly string[]
  role: string
}

export interface SkillCategory {
  title: string
  items: readonly string[]
}

interface ProjectBase {
  title: string
  summary: string
  tags: readonly string[]
  /** 기간 또는 역할. 카드 메타로만 쓴다. */
  meta: string
  /**
   * 썸네일 경로. 없으면 이미지 영역을 렌더하지 않는다.
   * 초상이나 장식 이미지는 두지 않는다.
   */
  thumbnailSrc?: string
}

/** 외부 URL이 있어 새 탭 링크를 만들 수 있는 프로젝트. */
export interface LinkedProject extends ProjectBase {
  url: string
}

/** 링크를 만들지 않는 프로젝트. */
export interface UnlinkedProject extends ProjectBase {
  url?: undefined
}

export type Project = LinkedProject | UnlinkedProject

export interface ExperienceItem {
  period: string
  organization: string
  role: string
  summary: string
}

export interface ContactContent {
  label: string
  title: string
  nameLabel: string
  emailLabel: string
  messageLabel: string
  submitLabel: string
  notice: string
}

export interface FooterContent {
  name: string
  tagline: string
  copyright: string
  backToTopLabel: string
}

export interface MenuItem {
  id: "about" | "skills" | "projects" | "experience" | "contact"
  label: string
}

export interface PortfolioContent {
  meta: SiteMeta
  hero: HeroContent
  about: AboutContent
  skills: readonly SkillCategory[]
  projects: readonly Project[]
  experience: readonly ExperienceItem[]
  contact: ContactContent
  footer: FooterContent
  menu: readonly MenuItem[]
}

/** URL이 있는 프로젝트인지 구분한다. 없으면 링크를 만들지 않는다. */
export function hasProjectUrl(project: Project): project is LinkedProject {
  return typeof project.url === "string" && project.url.length > 0
}

export const portfolio: PortfolioContent = {
  meta: {
    title: "Masocampus — 프로덕트 디자이너",
    description:
      "복잡한 서비스를 읽기 쉬운 화면으로 정리하는 프로덕트 디자이너 Masocampus의 포트폴리오입니다.",
  },
  hero: {
    eyebrow: "Product Designer",
    title: "Masocampus",
    subtitle: "복잡한 서비스를 읽기 쉬운 화면으로 정리합니다.",
    primaryLabel: "Projects",
    secondaryLabel: "Contact",
  },
  about: {
    label: "About",
    title: "문제 정의부터 화면까지 한 흐름으로 맡습니다.",
    paragraphs: [
      "서비스가 복잡해질수록 화면보다 먼저 문제를 정리합니다. 누가 무엇을 결정해야 하는지 적고, 그 결정을 정보 구조로 바꿉니다.",
      "사용자 흐름은 한 번에 길게 그리지 않습니다. 막히는 지점을 나눠 프로토타입으로 확인하고, 팀이 같은 화면을 보게 만듭니다.",
      "화면 설계는 그 흐름의 결과입니다. 읽기 순서를 타이포그래피와 컴포넌트로 고정하고, 개발과 같은 명세를 기준으로 맞춥니다.",
    ],
    role: "프로덕트 디자인 · 8년",
  },
  skills: [
    {
      title: "Product",
      items: ["정보 구조", "사용자 흐름", "프로토타입"],
    },
    {
      title: "Interface",
      items: ["타이포그래피", "디자인 시스템", "접근성"],
    },
    {
      title: "Collaboration",
      items: ["워크숍 퍼실리테이션", "명세 작성", "개발 협업"],
    },
  ],
  projects: [
    {
      title: "민원 신청 흐름",
      summary: "여러 부서에 흩어진 신청 단계를 한 화면의 순서로 다시 묶었습니다.",
      tags: ["정보 구조", "사용자 흐름", "프로토타입"],
      meta: "2025 · 프로덕트 디자인",
      url: "https://example.com",
    },
    {
      title: "구독 해지 화면",
      summary: "해지 이유를 먼저 읽고, 남은 선택지만 짧게 보여 주도록 정리했습니다.",
      tags: ["인터페이스", "카피"],
      meta: "2024 · 프로덕트 디자인",
    },
    {
      title: "사내 디자인 가이드",
      summary: "제목, 본문, 라벨의 굵기와 색 역할을 한 장으로 맞춰 두었습니다.",
      tags: ["디자인 시스템", "타이포그래피"],
      meta: "2023 · 디자인 시스템",
    },
  ],
  experience: [
    {
      period: "2024.03 — 현재",
      organization: "노을랩",
      role: "리드 프로덕트 디자이너",
      summary:
        "신청과 결제 흐름의 정보 구조를 다시 짜고, 화면 명세를 개발과 같은 문서로 맞춥니다.",
    },
    {
      period: "2021.01 — 2024.02",
      organization: "결스튜디오",
      role: "프로덕트 디자이너",
      summary:
        "구독 서비스의 가입과 해지 화면을 설계하고, 워크숍으로 요구를 한 흐름에 모았습니다.",
    },
    {
      period: "2018.04 — 2020.12",
      organization: "푸른기획",
      role: "UI 디자이너",
      summary:
        "공공 안내 화면의 읽기 순서를 정리하고, 반복되는 입력 패턴을 컴포넌트로 남겼습니다.",
    },
  ],
  contact: {
    label: "Contact",
    title: "화면으로만 보여주는 문의 양식입니다.",
    nameLabel: "이름",
    emailLabel: "이메일",
    messageLabel: "메시지",
    submitLabel: "보내기",
    notice: "이 양식은 화면 예시입니다. 입력 내용은 전송되지 않습니다.",
  },
  footer: {
    name: "Masocampus",
    tagline: "복잡한 서비스를 읽기 쉬운 화면으로 정리합니다.",
    copyright: "© 2026 Masocampus",
    backToTopLabel: "맨 위로",
  },
  menu: [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ],
}
