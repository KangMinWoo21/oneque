# 모두의 창업 App

무의존성으로 시작하는 MVP 프론트엔드 환경입니다.

## 실행

```powershell
& 'C:\Users\KangMinWoo\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' server.mjs
```

브라우저에서 `http://localhost:4173`을 엽니다.

## 구조

- `index.html`: 앱 진입점
- `src/app.js`: 화면 렌더링과 샘플 데이터
- `src/styles.css`: 디자인 토큰과 반응형 레이아웃
- `server.mjs`: 로컬 개발 서버

## 다음 단계

- Figma에서 주요 화면을 잡은 뒤 `src/styles.css`의 토큰과 컴포넌트로 옮깁니다.
- npm 사용이 가능해지면 Next.js 또는 Vite + React로 이전할 수 있습니다.
