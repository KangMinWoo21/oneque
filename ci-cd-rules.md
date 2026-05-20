# CI/CD 협업 및 배포 규칙

## 1. 문서 목적

이 문서는 광고 대행 AX 플랫폼 프로젝트의 개발 협업, 브랜치 운영, 코드 리뷰, CI/CD, 배포 규칙을 정의한다.

초기 팀은 3명이 함께 개발하는 것을 기준으로 한다. 목표는 복잡한 DevOps 체계를 만드는 것이 아니라, 작은 팀이 빠르게 개발하면서도 `main` 브랜치를 안정적으로 유지하고, 배포 실수를 줄이는 것이다.

## 2. 기본 원칙

이 프로젝트는 초기에는 하나의 GitHub 레포지토리에서 관리한다.

레포지토리는 하나지만 배포 단위는 분리한다.

- `apps/web`: 프론트엔드 앱
- `apps/api`: 백엔드 API 서버 및 LLM API 연동
- DB: Supabase 또는 별도 PostgreSQL 관리형 DB

모노레포는 모든 코드를 한 서버에 올린다는 의미가 아니다. 코드는 한 레포에서 관리하되, 실제 배포는 `web`, `api`, `db` 단위로 나누어 진행한다.

## 3. 추천 레포지토리 구조

```txt
ad-agency-ax-platform/
  project.md

  apps/
    web/
      # 프론트엔드 앱

    api/
      # 백엔드 API 서버
      # 인증, 캠페인, 매칭, 계약, LLM API 호출 담당

  packages/
    shared/
      # web과 api가 함께 쓰는 타입, 상수, validation schema

    ai/
      # 프롬프트 템플릿, LLM 호출 래퍼, 생성 결과 파서

    recommender/
      # 광고 플랫폼 추천 점수화 로직

  docs/
    ci-cd-rules.md

  infra/
    db/
      # DB migration, seed, schema 관련 파일
```

초기에는 `packages/ai`와 `packages/recommender`를 별도 서버로 배포하지 않는다. `apps/api`에서 가져다 쓰는 내부 패키지로 관리한다.

## 4. 사용할 도구

초기 CI/CD 도구 조합은 다음을 기준으로 한다.

| 영역 | 도구 | 역할 |
| --- | --- | --- |
| 코드 저장소 | GitHub | 레포지토리, 브랜치, PR 관리 |
| CI/CD 자동화 | GitHub Actions | 테스트, 빌드, 배포 자동화 |
| 프론트엔드 배포 | Vercel | `apps/web` 배포 |
| 백엔드 배포 | Railway 또는 Render | `apps/api` 배포 |
| DB | Supabase 또는 PostgreSQL | 서비스 데이터 저장 |
| 비밀값 관리 | GitHub Secrets, Vercel/Railway env | API Key, DB URL, LLM API Key 관리 |

초기 MVP 단계에서는 AWS, Kubernetes, 복잡한 Docker 운영은 우선 사용하지 않는다. 필요해지는 시점에 도입한다.

## 5. CI/CD 개념 정리

### 5.1 CI

CI는 Continuous Integration의 약자이며, 지속적 통합을 의미한다.

PR이 올라왔을 때 자동으로 코드 품질을 검사한다.

예시 검사 항목:

- 문법 오류 검사
- lint 검사
- type check
- test
- build
- DB migration 검증

CI의 목적은 망가진 코드가 `main` 브랜치에 들어가지 않도록 막는 것이다.

### 5.2 CD

CD는 Continuous Deployment 또는 Continuous Delivery의 약자이며, 지속적 배포를 의미한다.

CI를 통과한 코드가 `main` 브랜치에 merge되면, 변경된 앱을 자동으로 배포한다.

예시:

- `apps/web` 변경 시 Vercel에 프론트엔드 배포
- `apps/api` 변경 시 Railway 또는 Render에 백엔드 배포
- DB migration 변경 시 staging DB에 먼저 적용 후 production은 수동 승인

## 6. 브랜치 전략

초기에는 단순한 브랜치 전략을 사용한다.

```txt
main
feature/*
fix/*
docs/*
chore/*
```

각 브랜치의 역할은 다음과 같다.

| 브랜치 | 역할 |
| --- | --- |
| `main` | 실제 배포 기준 브랜치 |
| `feature/*` | 새 기능 개발 |
| `fix/*` | 버그 수정 |
| `docs/*` | 문서 수정 |
| `chore/*` | 설정, 빌드, CI/CD, 의존성 관리 |

`main` 브랜치에서 직접 작업하지 않는다. 모든 작업은 별도 브랜치에서 진행하고 PR을 통해 `main`에 merge한다.

## 7. 브랜치 생성 규칙

브랜치는 개발자 한 명당 하나씩 만드는 것이 아니라, 작업 단위로 만든다.

좋은 예:

```txt
feature/campaign-form
feature/campaign-api
feature/ai-ad-copy-generator
fix/api-campaign-validation
docs/project-identity
chore/github-actions-ci
```

나쁜 예:

```txt
feature/minsu
feature/jiyoon
feature/backend
```

사람 이름이나 큰 역할 단위로 오래 유지되는 브랜치는 피한다. 오래 유지되는 브랜치는 PR이 커지고, 충돌이 늘어나며, 리뷰와 배포가 어려워진다.

## 8. 개발자 작업 흐름

개발자는 다음 흐름으로 작업한다.

```txt
1. main 최신화
2. 작업 단위 feature 브랜치 생성
3. 코드 작성
4. 로컬 실행 및 기본 검증
5. GitHub에 push
6. Pull Request 생성
7. GitHub Actions CI 확인
8. 팀원 코드 리뷰
9. 수정 사항 반영
10. 승인 후 main에 merge
11. merge 후 자동 배포 확인
12. feature 브랜치 삭제
```

예시 명령어:

```bash
git checkout main
git pull origin main
git checkout -b feature/campaign-form

# 작업 후
git add .
git commit -m "feat: add campaign form"
git push origin feature/campaign-form
```

## 9. Pull Request 규칙

PR은 작게 만든다.

한 PR에는 가능한 한 하나의 목적만 담는다.

좋은 PR:

- 캠페인 생성 폼 추가
- 캠페인 생성 API 추가
- 추천 점수 계산 함수 추가
- CI workflow 추가

나쁜 PR:

- 로그인, 캠페인 생성, 추천 결과 UI, DB migration, 디자인 수정이 모두 들어간 PR

PR에는 최소한 다음 내용을 작성한다.

```md
## 작업 내용
- 무엇을 변경했는지

## 확인 방법
- 어떻게 테스트했는지

## 영향 범위
- web, api, db, ai, recommender 중 어디에 영향이 있는지

## 참고 사항
- 리뷰어가 알아야 할 내용
```

## 10. 코드 리뷰 규칙

모든 PR은 최소 1명의 리뷰 승인을 받은 뒤 merge한다.

작은 PR은 1명 승인으로 충분하다.

큰 PR 또는 중요한 PR은 관련 담당자 2명이 확인한다.

특히 다음 PR은 더 신중하게 리뷰한다.

- DB schema 변경
- production migration 포함
- 인증 및 권한 관련 변경
- 결제 관련 변경
- LLM API Key 또는 비밀값 처리 관련 변경
- 추천 로직의 핵심 점수 계산 변경

리뷰 중에도 다른 개발자는 작업을 멈추지 않는다. 각자 작업을 계속하되, PR 리뷰 요청을 받으면 가능한 빨리 확인한다.

## 11. main merge 규칙

`main`에는 GitHub PR 화면에서 merge한다.

권장 merge 방식은 `Squash and merge`다.

이유:

- feature 브랜치의 자잘한 커밋을 하나로 정리할 수 있다.
- `main` 히스토리가 깔끔하게 유지된다.
- 기능 단위로 변경 이력을 추적하기 쉽다.

merge 조건:

- CI 통과
- 리뷰 1명 이상 승인
- merge conflict 없음
- PR 설명 작성 완료

merge 후에는 해당 feature 브랜치를 삭제한다.

## 12. main 보호 규칙

GitHub에서 `main` 브랜치 보호 규칙을 설정한다.

권장 설정:

```txt
Require a pull request before merging
Require approvals: 1
Require status checks to pass
Require branches to be up to date before merging
Do not allow direct pushes
```

이 규칙의 목적은 누구도 `main`에 직접 push하지 못하게 하고, 반드시 PR과 CI를 거쳐 merge되도록 만드는 것이다.

## 13. CI 실행 규칙

PR이 생성되거나 업데이트될 때 CI를 실행한다.

기본 CI 항목:

- install
- lint
- type check
- test
- build
- migration 검증

변경 범위에 따라 필요한 검사만 실행할 수 있다.

예시:

```txt
apps/web 변경
→ web lint
→ web type check
→ web build

apps/api 변경
→ api lint
→ api type check
→ api test
→ api build

packages/shared 변경
→ web build
→ api build

packages/ai 변경
→ ai package test
→ api build

packages/recommender 변경
→ recommender test
→ api build

infra/db 변경
→ migration 검증
```

## 14. CD 배포 규칙

`main`에 merge되면 변경된 경로를 기준으로 필요한 서비스만 배포한다.

### 14.1 web 배포

배포 대상:

```txt
apps/web
```

배포 조건:

```txt
apps/web/**
packages/shared/**
```

배포 플랫폼:

```txt
Vercel
```

### 14.2 api 배포

배포 대상:

```txt
apps/api
```

배포 조건:

```txt
apps/api/**
packages/shared/**
packages/ai/**
packages/recommender/**
infra/db/**
```

배포 플랫폼:

```txt
Railway 또는 Render
```

### 14.3 DB migration

DB migration은 production에 바로 자동 적용하지 않는다.

권장 흐름:

```txt
1. PR에서 migration 검증
2. main merge
3. staging DB에 migration 적용
4. API 서버 정상 동작 확인
5. production DB migration은 수동 승인 후 적용
```

초기에는 데이터 손실 위험을 줄이기 위해 production DB 변경은 사람이 확인하고 진행한다.

## 15. 변경 경로별 배포 예시

| 변경 경로 | CI | CD |
| --- | --- | --- |
| `apps/web/**` | web 검사 | web 배포 |
| `apps/api/**` | api 검사 | api 배포 |
| `packages/shared/**` | web, api 검사 | web, api 배포 |
| `packages/ai/**` | ai, api 검사 | api 배포 |
| `packages/recommender/**` | recommender, api 검사 | api 배포 |
| `infra/db/**` | migration 검증 | staging 적용 후 production 수동 승인 |
| `docs/**` | 문서 검사만 선택적으로 실행 | 배포 없음 |

## 16. 환경변수와 비밀값 관리

API Key, DB URL, LLM API Key 등은 코드에 직접 작성하지 않는다.

비밀값은 다음 위치에서 관리한다.

- GitHub Actions: GitHub Secrets
- Vercel: Project Environment Variables
- Railway 또는 Render: Service Environment Variables
- Supabase: Dashboard에서 DB 연결 정보 관리

LLM API Key는 절대 프론트엔드에 두지 않는다.

올바른 구조:

```txt
web → api → LLM API
```

잘못된 구조:

```txt
web → LLM API
```

프론트엔드에 LLM API Key가 포함되면 사용자가 키를 확인할 수 있고, 비용 및 보안 문제가 발생할 수 있다.

## 17. 개발자별 작업 예시

### 17.1 프론트엔드 담당자

작업 위치:

```txt
apps/web
packages/shared
```

작업 예시:

- 광고주 캠페인 생성 화면
- 추천 결과 화면
- 계약 진행 상태 화면

PR 생성 시 web CI가 실행된다. `packages/shared`를 수정하면 api build도 함께 확인한다.

### 17.2 백엔드 담당자

작업 위치:

```txt
apps/api
infra/db
packages/shared
```

작업 예시:

- 캠페인 생성 API
- 광고 플랫폼 매칭 API
- 계약 API
- DB schema 및 migration

DB 변경이 포함되면 migration 검증과 리뷰를 반드시 거친다.

### 17.3 AI 및 추천 로직 담당자

작업 위치:

```txt
packages/ai
packages/recommender
apps/api
```

작업 예시:

- 광고 문구 생성 프롬프트
- 계약서 초안 생성 로직
- 홍보 플랫폼 추천 점수 계산
- 예상 광고 효과 계산

`packages/ai`나 `packages/recommender`는 직접 배포하지 않는다. 이 패키지들을 사용하는 `apps/api`가 함께 검증되고 배포된다.

## 18. PR이 올라왔을 때 팀의 행동

누군가 PR을 올렸다고 해서 모든 개발자가 작업을 멈추지 않는다.

권장 흐름:

```txt
1. PR 작성자가 리뷰 요청
2. GitHub Actions가 자동 검사
3. 지정된 리뷰어 1명이 확인
4. 작성자는 피드백을 반영
5. CI 통과 및 리뷰 승인 후 merge
6. 다른 개발자는 자신의 작업을 계속 진행
```

다만 다음 경우에는 관련 개발자가 우선 확인한다.

- 공통 타입 변경
- DB schema 변경
- API 응답 구조 변경
- 인증, 결제, 권한 변경
- 다른 개발자의 작업을 막는 기반 작업

## 19. 큰 작업을 나누는 기준

작업이 너무 크면 여러 PR로 나눈다.

예를 들어 캠페인 생성 기능은 다음처럼 나눌 수 있다.

```txt
1. shared 타입 정의
2. DB schema 및 migration
3. campaign 생성 API
4. web 캠페인 생성 폼
5. 추천 결과 연동
```

각 PR은 가능하면 독립적으로 리뷰되고 merge될 수 있어야 한다.

초기 팀에서는 너무 세밀하게 나누기보다, 리뷰 가능한 크기를 유지하는 것을 기준으로 한다.

## 20. 초기 운영 규칙 요약

초기 팀은 다음 규칙을 따른다.

- 레포지토리는 하나로 시작한다.
- 배포는 `web`, `api`, `db` 단위로 분리한다.
- `main`에는 직접 push하지 않는다.
- 모든 작업은 작업 단위 브랜치에서 진행한다.
- 모든 변경은 PR을 통해 merge한다.
- PR은 작게 만든다.
- CI 통과와 리뷰 1명 승인을 merge 조건으로 둔다.
- merge 방식은 `Squash and merge`를 사용한다.
- `main`에 merge되면 변경된 서비스만 자동 배포한다.
- production DB migration은 자동 적용하지 않고 수동 승인한다.
- LLM API Key는 반드시 백엔드 API 서버에서만 사용한다.

## 21. 한 문장 정의

우리 팀의 CI/CD 규칙은, 각 개발자가 작업 단위 브랜치에서 개발하고 PR을 올리면 GitHub Actions가 자동 검사하며, 팀원 1명의 리뷰 후 `main`에 `Squash and merge`하고, 변경된 `web` 또는 `api`만 자동 배포하되 production DB 변경은 수동 승인하는 방식이다.
