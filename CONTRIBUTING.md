# 기여 가이드

이 저장소는 작은 이슈, 짧게 유지되는 브랜치, 리뷰를 거친 PR, 기록 가능한 의사결정을 기준으로 운영한다.

## 작업 시작

1. 의미 있는 작업을 시작하기 전에 GitHub 이슈를 만들거나 기존 이슈를 선택한다.
2. 맥락이 Notion 팀 대시보드에 있다면 관련 Notion 페이지를 연결한다.
3. 마감이 있는 작업은 담당자, 우선순위, 목표 날짜를 지정한다.
4. 하나의 이슈는 하나의 결과에 집중한다.

## 브랜치 이름

짧고 검색하기 쉬운 브랜치 이름을 사용한다.

- `feature/<issue-number>-short-name`
- `fix/<issue-number>-short-name`
- `docs/<issue-number>-short-name`
- `chore/<issue-number>-short-name`

예시:

- `feature/12-campaign-form`
- `fix/18-mobile-layout-overlap`
- `docs/21-github-workflow`

## 커밋 스타일

범위가 명확한 커밋 메시지를 사용한다.

- `feat: add campaign form`
- `fix: handle empty campaign budget`
- `docs: document release process`
- `chore: update github templates`

## PR

모든 PR은 다음 기준을 지킨다.

- 한 번에 리뷰할 수 있을 만큼 작게 만든다.
- 관련 이슈와 Notion 페이지를 연결한다.
- 무엇을 바꿨는지만이 아니라 왜 필요한 변경인지 설명한다.
- 확인 방법을 포함한다.
- UI 변경은 스크린샷을 포함한다.
- 관련 없는 리팩터링을 섞지 않는다.

## 리뷰 기준

리뷰어는 다음을 확인한다.

- 동작의 정확성과 예외 상황
- 사용자 영향과 문구의 명확성
- 유지보수 가능성
- 테스트 또는 검증 범위
- 보안, 개인정보, 데이터 노출 위험

PR이 이해 가능하고, 검증되었고, 문제가 생겼을 때 되돌릴 수 있을 때만 승인한다.

## 완료 기준

변경은 다음 조건을 만족하면 완료로 본다.

- 수용 기준을 충족했다.
- CI가 통과했다.
- 임시로 1인 운영 중인 경우를 제외하고 최소 1명의 리뷰 승인을 받았다.
- 관련 문서, Notion 페이지, GitHub 이슈를 업데이트했다.
- 롤백 방법 또는 후속 작업이 명확하다.
