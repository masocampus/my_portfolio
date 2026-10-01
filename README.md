# portfolio_app

프로덕트 디자이너가 경력과 작업을 한 화면에서 보여 주는 개인 포트폴리오입니다. 사진 대신 여백, 배경색, 글자로 인상을 만들고, 데스크톱과 모바일에서 같은 내용을 읽게 합니다.

## 주요 기능

- `/` 한 페이지에 Header, Hero, About, Skills, Projects, Experience, Contact, Footer를 순서대로 둡니다.
- 메뉴는 해당 섹션으로 이동하고, 스크롤 위치에 따라 현재 섹션 하나만 표시합니다. 768px 미만에서는 Sheet 메뉴를 씁니다.
- 문구는 `src/data/portfolio.ts`의 정적 샘플입니다. 실명과 실경력은 이 파일만 바꾸면 됩니다.
- Contact는 화면 예시입니다. 보내기 버튼은 전송하지 않습니다.

화면 요구와 수용 기준은 [docs/PRD.md](docs/PRD.md)에 있습니다.

## 기술 스택

데이터베이스는 쓰지 않습니다. 콘텐츠는 코드 안의 정적 데이터입니다.

| 구분 | 이름 | 설치 버전 |
| --- | --- | --- |
| 언어 | TypeScript | 5.9.3 |
| UI | React / React DOM | 19.2.8 |
| 프레임워크 | Next.js (App Router) | 16.3.8 |
| 스타일 | Tailwind CSS | 4.3.3 |
| UI 부품 | shadcn (`radix-ui` 기반) | shadcn 4.21.1, radix-ui 1.6.7 |
| 아이콘 | lucide-react | 1.49.0 |
| 클래스 조합 | class-variance-authority, cn | 0.7.1, 0.4.0 |
| 린트 | ESLint, eslint-config-next | 9.39.5, 16.3.8 |

실행에는 Node.js 20 이상이 필요합니다.

## 실행 방법

```bash
npm install
npm run dev
```

개발 서버는 [http://localhost:3000](http://localhost:3000) 입니다.

이 앱은 환경 변수를 읽지 않습니다. `.env.local`과 `.env.example`은 아직 없습니다. 비밀 값이 필요해지면 키 이름만 `.env.example`에 적고, 실제 값은 `.env.local`에 둡니다. `.env.local`은 커밋하지 않습니다. 브라우저에 노출할 값만 `NEXT_PUBLIC_` 접두사를 씁니다.

```bash
npm run lint
npm run build
npm run start
```

테스트 러너와 `npm test`는 아직 없습니다. 확인 명령은 `npm run lint`입니다.

## 폴더 구조

```text
portfolio_app/
├── docs/                  요구사항과 기술 명세
├── public/                정적 파일
├── src/
│   ├── app/               라우트, 레이아웃, 전역 스타일
│   ├── components/        섹션과 shadcn UI 부품
│   │   └── ui/            Button, Badge, Card, Sheet 등
│   ├── data/              포트폴리오 샘플 문구
│   ├── hooks/             현재 섹션 감지
│   └── lib/               스크롤 이동, className 유틸
├── components.json        shadcn 설정
└── package.json
```

## 문서 안내

- 구현 요구사항: [docs/PRD.md](docs/PRD.md)
- 기술 설계: [docs/TECH_SPEC.md](docs/TECH_SPEC.md)
- 구현 순서(세 단계로 묶은 명세): [docs/TECH_SPEC2.md](docs/TECH_SPEC2.md)

화면에서 무엇이 보여야 하는지는 PRD가 기준입니다. TECH_SPEC은 그 요구를 어떤 순서로 코드에 옮기는지 다룹니다.

## 개발 현황 / 로드맵

완료

- 단일 라이트 테마, Geist Sans, 한국어 메타데이터
- 여섯 섹션과 헤더·푸터, 샘플 콘텐츠
- 데스크톱 메뉴와 모바일 Sheet, 현재 섹션 표시, 헤더에 가리지 않는 앵커 이동
- 화면 너비에 따른 글자 크기, 보조 글자색 대비, 44px 터치 영역

진행 중

- 없음

다음 할 일

- 샘플 문구를 실제 이름과 경력으로 교체
- 단위·화면 테스트 추가
- Git 저장소와 원격 연결

PRD 범위 밖인 다크 모드, 언어 전환, CMS, 실제 문의 전송, 프로젝트 상세 페이지는 로드맵에 넣지 않습니다.

## 개발 규칙

코딩

- TypeScript strict. `any`는 쓰지 않고, 공개 props는 `interface`로 둡니다.
- 컴포넌트 파일은 `PascalCase.tsx`, 훅과 유틸은 `camelCase.ts`, 디렉터리는 kebab-case입니다.
- 페이지와 레이아웃만 default export입니다. 나머지는 named export입니다.
- 상호작용이 없는 화면은 서버 컴포넌트로 둡니다.
- UI는 `@/components/ui/*`의 shadcn 부품을 쓰고, 스타일은 Tailwind CSS v4입니다. `tailwind.config.js`는 만들지 않습니다.
- 작업을 마치기 전에 `npm run lint`를 통과시킵니다.

브랜치와 커밋

- 저장소는 아직 없습니다. 연결한 뒤에는 `main`을 안정 브랜치로 두고, 작업은 짧은 기능 브랜치에서 합니다.
- 커밋 메시지는 한두 문장으로 왜 바꿨는지를 적습니다.
- `.env.local`과 비밀 값은 커밋하지 않습니다.
