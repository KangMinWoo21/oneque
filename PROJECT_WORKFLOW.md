# 프로젝트 작업 흐름

이 문서는 GitHub와 Notion을 함께 사용하는 방식을 정의한다.

## 기준 정보

- GitHub 이슈는 실행 가능한 작업을 관리한다.
- GitHub PR은 코드와 문서 변경을 관리한다.
- Notion은 결정 사항, 회의록, 계획, 참고 자료 같은 운영 맥락을 보관한다.
- GitHub Actions는 변경 사항을 `main`에 merge해도 안전한지 확인한다.

## 보드 상태

이슈 상태는 라벨 또는 프로젝트 보드 컬럼으로 관리한다.

- `status:triage`: 아직 정리가 필요하다.
- `status:ready`: 바로 시작할 수 있다.
- `status:in-progress`: 담당자가 작업 중이다.
- `status:review`: PR이 열렸거나 리뷰가 필요하다.
- `status:blocked`: 외부 입력이나 결정이 필요해 막혀 있다.
- `status:done`: 배포되었거나 완료되었다.

## 라벨

권장 라벨은 다음과 같다.

- 유형: `type:bug`, `type:feature`, `type:task`, `type:docs`, `type:chore`
- 우선순위: `priority:high`, `priority:medium`, `priority:low`
- 영역: `area:web`, `area:api`, `area:db`, `area:ai`, `area:recommender`, `area:shared`, `area:docs`, `area:ops`, `area:design`, `area:growth`
- 상태: `status:triage`, `status:ready`, `status:in-progress`, `status:review`, `status:blocked`
- 위험도: `risk:high`, `risk:medium`, `risk:low`

## 주간 운영 루프

1. 새 이슈와 Notion 요청함을 정리한다.
2. 명확한 이슈는 `status:ready`로 옮긴다.
3. 가장 작고 가치 있는 작업부터 선택한다.
4. 복잡한 작업은 draft PR을 일찍 연다.
5. merge된 작업을 확인하고 연결된 이슈를 닫는다.
6. 회의에서 나온 결정은 Decision Log에 옮긴다.

## 일일 운영 루프

1. 막힌 작업을 확인한다.
2. 진행 중인 PR을 확인한다.
3. CI 실패를 확인한다.
4. 이슈 상태와 담당자를 업데이트한다.
5. 중요한 결정은 Notion에 기록한다.

## 브랜치 보호 권장 설정

GitHub 저장소가 준비되면 `main`에 다음 설정을 적용한다.

- merge 전에 PR을 필수로 요구한다.
- 최소 1명의 승인을 요구한다.
- 새 커밋이 올라오면 기존 승인을 만료한다.
- CI 통과를 요구한다.
- merge 전에 대화 해결을 요구한다.
- 강제 push와 브랜치 삭제를 제한한다.
- 기본 merge 방식은 squash merge를 사용한다.
