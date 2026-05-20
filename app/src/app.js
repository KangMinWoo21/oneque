const tasks = [
  { title: "창업 단계 진단 질문 확정", status: "진행 중", area: "Product", due: "5월 22일" },
  { title: "체크리스트 저장 기능 설계", status: "진행 중", area: "Tech", due: "5월 27일" },
  { title: "인터뷰 후속 질문 발송", status: "대기", area: "Business", due: "5월 21일" }
];

const roadmap = [
  "아이디어 상태 진단",
  "맞춤 실행 로드맵 생성",
  "팀 공유 체크리스트",
  "지원사업/자료 추천"
];

function renderTask(task) {
  return `
    <article class="task">
      <div>
        <strong>${task.title}</strong>
        <span>${task.area}</span>
      </div>
      <div class="task-meta">
        <span>${task.status}</span>
        <time>${task.due}</time>
      </div>
    </article>
  `;
}

function render() {
  document.querySelector("#app").innerHTML = `
    <aside class="sidebar">
      <a class="brand" href="/">
        <span class="brand-mark">모</span>
        <span>모두의 창업</span>
      </a>
      <nav>
        <a class="active" href="#dashboard">Dashboard</a>
        <a href="#diagnosis">Diagnosis</a>
        <a href="#roadmap">Roadmap</a>
        <a href="#tasks">Tasks</a>
      </nav>
    </aside>

    <main class="shell">
      <section class="hero" id="dashboard">
        <div>
          <p class="eyebrow">Startup operating system</p>
          <h1>창업 준비를 진단하고, 이번 주 실행계획으로 바꿉니다.</h1>
          <p class="lead">아이디어 검증, 로드맵, 체크리스트를 한 화면에서 관리하는 MVP 첫 버전입니다.</p>
        </div>
        <button class="primary">진단 시작</button>
      </section>

      <section class="metrics" aria-label="핵심 지표">
        <article>
          <span>인터뷰</span>
          <strong>12 / 20</strong>
        </article>
        <article>
          <span>대기 신청</span>
          <strong>47명</strong>
        </article>
        <article>
          <span>MVP 진행률</span>
          <strong>62%</strong>
        </article>
      </section>

      <section class="grid">
        <div class="panel" id="roadmap">
          <div class="section-title">
            <h2>로드맵</h2>
            <span>4 steps</span>
          </div>
          <ol class="roadmap">
            ${roadmap.map((item) => `<li>${item}</li>`).join("")}
          </ol>
        </div>

        <div class="panel" id="tasks">
          <div class="section-title">
            <h2>이번 주 작업</h2>
            <span>Live board</span>
          </div>
          <div class="tasks">
            ${tasks.map(renderTask).join("")}
          </div>
        </div>
      </section>
    </main>
  `;
}

render();
