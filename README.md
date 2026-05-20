# OneQue

OneQue는 모두의 창업 프로젝트를 위한 작업 저장소다.

## 이 저장소에 있는 것

- `app/`: 초기 MVP 앱
- `.github/`: 이슈 템플릿, PR 템플릿, CODEOWNERS, Dependabot, CI 설정
- `docs/`: 협업, 리뷰, 이슈 정리, GitHub 설정 가이드
- `make_pitch_deck.js`, `validate_pitch_deck.js`: 발표자료 생성 및 검증 스크립트

비공개 사업 문서, PDF, 초안 오피스 파일은 공개 배포가 명시적으로 승인되기 전까지 공개 저장소에 올리지 않는다.

## 로컬 앱 실행

```powershell
cd app
npm run dev
```

로컬 서버는 `server.mjs`를 사용한다.

## 협업 문서

먼저 아래 문서를 확인한다.

- [프로젝트 작업 흐름](PROJECT_WORKFLOW.md)
- [기여 가이드](CONTRIBUTING.md)
- [GitHub 설정 가이드](docs/GITHUB_SETUP.md)
- [리뷰 가이드](docs/REVIEW_GUIDE.md)
- [이슈 정리 가이드](docs/ISSUE_TRIAGE.md)

## 운영 방식

- GitHub 이슈는 실행 가능한 작업을 관리한다.
- PR은 리뷰가 필요한 변경 사항을 관리한다.
- CI는 기본 문법과 필수 협업 파일을 확인한다.
- Notion은 회의록, 결정 사항, 요청 사항, 대시보드 맥락을 보관한다.
