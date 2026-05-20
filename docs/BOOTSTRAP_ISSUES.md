# 부트스트랩 이슈

GitHub App 또는 GitHub UI에서 이슈 기능을 사용할 수 있게 되면 아래 이슈를 만든다.

## 1. main 브랜치 보호 설정

협업 규칙을 따르도록 `main`을 보호한다.

체크리스트:

- [ ] merge 전에 PR을 요구한다.
- [ ] 최소 1명의 승인을 요구한다.
- [ ] 새 커밋이 올라오면 기존 승인을 만료한다.
- [ ] 대화 해결을 요구한다.
- [ ] CI 체크 `브랜치 이름 확인`을 요구한다.
- [ ] CI 체크 `협업 파일 확인`을 요구한다.
- [ ] CI 체크 `웹 검사`를 요구한다.
- [ ] CI 체크 `API 검사`를 요구한다.
- [ ] CI 체크 `DB migration 검사`를 요구한다.
- [ ] CI 체크 `공통 패키지 검사`를 요구한다.
- [ ] 강제 push를 막는다.
- [ ] 브랜치 삭제를 막는다.
- [ ] squash merge를 기본으로 사용한다.

권장 라벨: `type:task`, `area:ops`, `priority:high`

## 2. 라벨과 프로젝트 뷰 생성

`.github/labels.yml`의 라벨을 만들고, 보드/테이블/로드맵/막힌 작업/PR 리뷰 뷰를 가진 GitHub Project를 만든다.

체크리스트:

- [ ] 유형 라벨을 만든다.
- [ ] 우선순위 라벨을 만든다.
- [ ] 영역 라벨을 만든다.
- [ ] 상태 라벨을 만든다.
- [ ] 위험도 라벨을 만든다.
- [ ] 프로젝트 필드 Status, Priority, Area, Owner, Target date, Risk, Notion link를 만든다.
- [ ] `docs/GITHUB_SETUP.md` 기준으로 저장 뷰를 만든다.

권장 라벨: `type:task`, `area:ops`, `priority:medium`

## 3. CODEOWNERS placeholder 교체

`.github/CODEOWNERS`의 placeholder 팀을 실제 사용자 또는 팀으로 바꾼다.

체크리스트:

- [ ] `@your-org/maintainers`를 바꾼다.
- [ ] `@your-org/product`를 바꾼다.
- [ ] `@your-org/engineering`을 바꾼다.
- [ ] 테스트 PR에서 CODEOWNERS 리뷰 요청이 동작하는지 확인한다.

권장 라벨: `type:task`, `area:ops`, `priority:high`

## 4. Notion 요청함과 GitHub 이슈 연결

Notion 요청이 언제 GitHub 이슈가 되는지 정한다.

체크리스트:

- [ ] Notion 요청함을 정리할 담당자를 정한다.
- [ ] Notion 필드와 GitHub 이슈 필드의 매핑을 정한다.
- [ ] 작업이 시작되면 GitHub 이슈를 Notion에 연결한다.
- [ ] GitHub 이슈가 완료되면 Notion 요청을 닫거나 보관한다.

권장 라벨: `type:task`, `area:ops`, `priority:medium`

## 5. 첫 제품 단위 배포

새 작업 흐름으로 처음 배포할 사용자에게 보이는 기능 단위를 고른다.

체크리스트:

- [ ] 기능 이슈를 템플릿으로 만든다.
- [ ] 수용 기준을 작성한다.
- [ ] 이슈 기준 브랜치를 만든다.
- [ ] draft PR을 일찍 연다.
- [ ] CI와 리뷰 후 merge한다.

권장 라벨: `type:feature`, `area:web`, `priority:high`
