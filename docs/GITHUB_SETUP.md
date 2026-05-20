# GitHub 설정 가이드

GitHub 저장소를 만들거나 기존 저장소를 선택한 뒤 이 문서를 따라 설정한다.

## 1. 저장소 생성 또는 연결

이 폴더가 아직 git 저장소가 아니라면:

```powershell
git init
git add .
git commit -m "chore: set up collaboration workflow"
git branch -M main
git remote add origin https://github.com/OWNER/REPO.git
git push -u origin main
```

이미 저장소가 있다면 원격을 추가하고 설정 브랜치로 push한다.

```powershell
git remote add origin https://github.com/OWNER/REPO.git
git checkout -b chore/github-collaboration-setup
git add .
git commit -m "chore: set up github collaboration workflow"
git push -u origin chore/github-collaboration-setup
```

## 2. CODEOWNERS placeholder 교체

팀이 준비되면 `.github/CODEOWNERS`를 수정한다.

- `@your-org/maintainers`를 실제 관리자 팀 또는 사용자로 바꾼다.
- `@your-org/product`를 실제 제품 담당 팀 또는 사용자로 바꾼다.
- `@your-org/engineering`을 실제 개발 담당 팀 또는 사용자로 바꾼다.

1인 저장소라면 GitHub 사용자명을 사용한다.

## 3. 라벨 생성

GitHub에 다음 라벨을 만든다.

기계가 읽을 수 있는 기준 목록은 `.github/labels.yml`에 있다.

| 라벨 | 색상 | 목적 |
| --- | --- | --- |
| `type:bug` | `d73a4a` | 결함 또는 회귀 |
| `type:feature` | `0e8a16` | 사용자에게 보이는 기능 |
| `type:task` | `1d76db` | 실행 작업 |
| `type:docs` | `0075ca` | 문서 |
| `type:chore` | `cfd3d7` | 유지보수 |
| `priority:high` | `b60205` | 긴급하거나 중요함 |
| `priority:medium` | `fbca04` | 보통 우선순위 |
| `priority:low` | `0e8a16` | 낮은 우선순위 |
| `area:web` | `5319e7` | 프론트엔드 웹 앱 |
| `area:api` | `0052cc` | 백엔드 API |
| `area:db` | `5319e7` | DB schema와 migration |
| `area:ai` | `8a63d2` | LLM 프롬프트와 AI helper |
| `area:recommender` | `fbca04` | 매칭과 점수 계산 로직 |
| `area:shared` | `bfdadc` | 공통 타입과 schema |
| `area:docs` | `0075ca` | 문서와 콘텐츠 |
| `area:ops` | `6f42c1` | 워크플로와 자동화 |
| `area:design` | `cc317c` | UX/UI |
| `area:growth` | `fbca04` | 사업과 성장 |
| `status:triage` | `ededed` | 정리 필요 |
| `status:ready` | `c2e0c6` | 시작 가능 |
| `status:in-progress` | `bfdadc` | 작업 중 |
| `status:review` | `d4c5f9` | 리뷰 필요 |
| `status:blocked` | `e99695` | 막힘 |
| `risk:high` | `b60205` | 높은 위험 |
| `risk:medium` | `fbca04` | 중간 위험 |
| `risk:low` | `0e8a16` | 낮은 위험 |
| `dependencies` | `0366d6` | 의존성 업데이트 |

## 4. GitHub Project 만들기

권장 프로젝트 뷰:

- 상태별 보드
- 우선순위별 테이블
- 목표 날짜별 로드맵
- 저장 필터: `is:open label:status:blocked`
- 저장 필터: `is:pr is:open review:required`

권장 필드:

- Status
- Priority
- Area
- Owner
- Target date
- Risk
- Notion link

## 5. 브랜치 보호 켜기

`main`을 보호한다.

- merge 전에 PR을 요구한다.
- 최소 1명의 승인을 요구한다.
- 오래된 승인을 만료한다.
- 대화 해결을 요구한다.
- CI 상태 체크를 요구한다: `브랜치 이름 확인`, `협업 파일 확인`, `웹 검사`, `API 검사`, `DB migration 검사`, `공통 패키지 검사`.
- 강제 push를 막는다.
- 브랜치 삭제를 막는다.
- squash merge를 기본으로 사용한다.

## 6. 저장소 위생 설정

권장 설정:

- Dependabot alerts를 켠다.
- Dependabot security updates를 켠다.
- 가능하면 secret scanning을 켠다.
- `main` 직접 push를 막는다.
- Issues와 Projects를 켠다.
- 진행 중인 작업은 draft PR을 사용한다.

## 7. 작업 합의

실행은 GitHub에서, 맥락은 Notion에서 관리한다.

- Notion 요청함 -> 실행 가능한 작업이 되면 GitHub 이슈
- Notion Decision Log -> 구현에 영향을 주는 결정은 PR에 연결
- GitHub 이슈 -> PR -> CI -> 리뷰 -> merge
- 릴리스 노트 -> Notion 프로젝트 상태 업데이트

## 8. 부트스트랩 이슈

`docs/BOOTSTRAP_ISSUES.md`의 운영 설정 이슈를 만든다.

남은 저장소 설정을 암묵지로 두지 않고 보이는 작업으로 관리하기 위한 이슈들이다.
