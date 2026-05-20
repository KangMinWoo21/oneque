const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

const ROOT = "C:\\Users\\KangMinWoo\\Documents\\모두의 창업";
const OUT = path.join(ROOT, "outputs", "ai_influencer_pitch");
const SLIDE_DIR = path.join(OUT, "slides");
const HTML_PATH = path.join(OUT, "청주_AI_인플루언서_광고_플랫폼_발표자료.html");
const PPTX_PATH = path.join(OUT, "청주_AI_인플루언서_광고_플랫폼_발표자료.pptx");
const CONTACT_PATH = path.join(OUT, "contact_sheet.png");
const BUNDLED_NODE_MODULES = "C:\\Users\\KangMinWoo\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\node_modules";
const BUNDLED_PNPM_ROOT_MODULES = path.join(BUNDLED_NODE_MODULES, ".pnpm", "node_modules");
const BUNDLED_PNPM_MODULES = path.join(BUNDLED_NODE_MODULES, ".pnpm", "playwright@1.59.1", "node_modules");
process.env.NODE_PATH = [process.env.NODE_PATH, BUNDLED_NODE_MODULES, BUNDLED_PNPM_ROOT_MODULES, BUNDLED_PNPM_MODULES].filter(Boolean).join(path.delimiter);
require("module").Module._initPaths();

fs.mkdirSync(SLIDE_DIR, { recursive: true });

const slides = [
  {
    section: "01",
    kicker: "지원사업 심사용 10분 발표",
    title: "청주 소상공인을 위한 AI 인플루언서 광고 자동화 플랫폼",
    subtitle: "음식점 사장님이 광고를 몰라도, 지역 크리에이터와 성과형 숏폼 광고를 시작할 수 있게 만듭니다.",
    type: "hero",
    footer: "로컬 음식점 대상 AI 기반 인플루언서 광고 매칭 및 광고 자동화 플랫폼",
  },
  {
    section: "02",
    kicker: "Problem",
    title: "광고가 필요하지만, 시작하기 어렵습니다",
    subtitle: "청주 음식점과 소상공인은 숏폼 홍보의 필요성을 느끼지만, 실행 과정은 여전히 복잡하고 불투명합니다.",
    type: "statement",
    points: ["누구에게 맡겨야 하는지 모름", "가격 협상과 계약이 부담", "기획·촬영·편집·업로드 관리가 어려움"],
    callout: "문제의 본질: 광고 수요는 있는데 실행 역량과 신뢰할 연결 구조가 부족합니다.",
  },
  {
    section: "03",
    kicker: "Customer Pain",
    title: "소상공인에게 광고는 하나의 ‘작은 프로젝트’가 됩니다",
    subtitle: "광고 한 번을 진행하기 위해 여러 단계를 직접 해결해야 하며, 이 과정이 진입장벽이 됩니다.",
    type: "pain-flow",
    steps: ["탐색", "문의", "가격 협상", "계약", "콘텐츠 기획", "촬영·편집", "업로드", "성과 확인"],
    pains: [
      ["정보 비대칭", "가게와 맞는 크리에이터 판단이 어렵습니다."],
      ["운영 부담", "사장님이 광고 PM 역할까지 떠안습니다."],
      ["비용 장벽", "기존 대행사는 소규모 매장에 부담이 큽니다."],
    ],
  },
  {
    section: "04",
    kicker: "Market Timing",
    title: "시장 흐름은 이미 온라인·동영상·AI 쪽으로 움직이고 있습니다",
    subtitle: "소상공인에게 필요한 것은 ‘더 많은 플랫폼’이 아니라, 실행 가능한 광고 진입로입니다.",
    type: "stats",
    stats: [
      ["95.0%", "인터넷 이용률", "NIA 2025 인터넷이용실태조사"],
      ["96.3%", "동영상 서비스 이용률", "NIA 2025 인터넷이용실태조사"],
      ["44.5%", "생성형 AI 서비스 경험률", "NIA 2025 인터넷이용실태조사"],
      ["3,000개사", "TOPS 소상공인 온라인 브랜드 육성 규모", "중소벤처기업부 2025"],
    ],
    source: "출처: 한국지능정보사회진흥원, 2025 인터넷이용실태조사; 중소벤처기업부, 2025 온라인 브랜드 소상공인 육성사업",
  },
  {
    section: "05",
    kicker: "Target",
    title: "초기 시장은 ‘청주 음식점 × 지역 마이크로 크리에이터’입니다",
    subtitle: "범위를 좁혀 반복 거래와 성과 데이터를 먼저 만듭니다.",
    type: "target",
    left: ["청주시 음식점", "카페", "지역 기반 소상공인"],
    right: ["음식 인스타그램 운영자", "대학생 크리에이터", "마이크로 인플루언서"],
    center: "청주 로컬 광고 매칭",
  },
  {
    section: "06",
    kicker: "Solution",
    title: "AI 추천과 운영 자동화로 광고 진행을 한 번에 연결합니다",
    subtitle: "광고주는 간단한 정보만 입력하고, 플랫폼은 적합한 크리에이터와 광고 실행 과정을 제안합니다.",
    type: "solution",
    modules: [
      ["AI 인플루언서 추천", "업종, 지역, 예산, 목표 고객층 기반 매칭"],
      ["간편 광고 진행", "신청부터 계약, 제작, 업로드까지 단계화"],
      ["콘텐츠 기획 지원", "광고 문구, 숏폼 방향, 제작 방식 제안"],
      ["계약 자동화", "기본 계약서 생성으로 진행 시간 단축"],
    ],
  },
  {
    section: "07",
    kicker: "User Flow",
    title: "사장님 입장에서는 광고 신청 흐름이 단순해집니다",
    subtitle: "기존의 복잡한 광고 진행 과정을 하나의 안내형 플로우로 바꿉니다.",
    type: "process",
    steps: ["회원가입", "지역·업종", "목적·예산", "AI 추천", "크리에이터 선택", "계약", "제작·업로드", "성과 확인"],
  },
  {
    section: "08",
    kicker: "Differentiation",
    title: "기존 서비스가 ‘연결’에 머문다면, 우리는 ‘광고 실행’을 완성합니다",
    subtitle: "로컬·음식점·인플루언서 광고라는 좁은 영역에서 통합 프로세스를 제공합니다.",
    type: "comparison",
    rows: [
      ["크몽", "단순 외주 연결", "광고 성과와 지역 적합성 검증이 약함"],
      ["숨고", "전문가 연결", "광고 프로세스 통합 관리가 제한적"],
      ["체험단 플랫폼", "체험 리뷰 중심", "소상공인 맞춤 광고 설계가 부족"],
      ["광고대행사", "대행 운영", "소규모 음식점에는 비용 부담이 큼"],
    ],
    ours: ["지역 특화 데이터", "AI 기반 추천", "계약·기획·제작 연결", "저비용 구조"],
  },
  {
    section: "09",
    kicker: "Revenue Model",
    title: "수익은 광고 거래와 제작 지원에서 발생합니다",
    subtitle: "초기에는 거래 검증을 우선하고, 반복 거래가 쌓일수록 수수료와 부가 서비스가 확장됩니다.",
    type: "revenue",
    streams: [
      ["광고 중개 수수료", "광고 진행 금액의 일정 비율", "예: 광고비 30만원, 플랫폼 수수료 20%"],
      ["영상 제작 수수료", "편집·촬영·외주 제작 연계", "콘텐츠 품질을 높이는 부가 매출"],
      ["광고 기획 수수료", "문구, 콘셉트, 숏폼 방향 컨설팅", "반복 고객 대상 업셀링 가능"],
    ],
  },
  {
    section: "10",
    kicker: "MVP Strategy",
    title: "처음부터 완전 자동화하지 않고, 운영형 MVP로 거래를 검증합니다",
    subtitle: "개발보다 중요한 것은 실제 광고 거래, 고객 니즈, 성과 데이터를 빠르게 확인하는 것입니다.",
    type: "mvp",
    lanes: [
      ["1단계", "수동 운영", "구글폼, 카카오톡, 노션으로 광고 신청과 매칭 관리"],
      ["2단계", "반복 프로세스화", "크리에이터 리스트, 가격표, 계약 템플릿 표준화"],
      ["3단계", "AI 기능 고도화", "성과 데이터 기반 추천 정확도 개선"],
    ],
  },
  {
    section: "11",
    kicker: "Data & AI",
    title: "거래가 쌓일수록 추천 정확도가 높아지는 구조입니다",
    subtitle: "초기 운영 데이터는 향후 자동 추천과 광고 성과 분석의 기반이 됩니다.",
    type: "data-loop",
    loop: ["업종·지역", "조회수·참여율", "광고 성과", "광고주 만족도", "추천 개선"],
    note: "데이터 축적 → 추천 정확도 향상 → 광고 성과 개선 → 재구매와 크리에이터 참여 증가",
  },
  {
    section: "12",
    kicker: "Impact",
    title: "소상공인, 크리에이터, 지역경제가 함께 얻는 효과가 있습니다",
    subtitle: "지역 광고 시장의 작은 비효율을 줄이면, 동네 상권과 청년 크리에이터의 연결이 늘어납니다.",
    type: "impact",
    impacts: [
      ["소상공인", "광고 접근성 향상", "비용 부담 완화", "간편한 광고 진행"],
      ["크리에이터", "안정적 광고 매칭", "수익 기회 증가", "직접 영업 부담 감소"],
      ["지역경제", "청주 상권 홍보 활성화", "청년 활동 확대", "로컬 소비 촉진"],
    ],
  },
  {
    section: "13",
    kicker: "Closing",
    title: "청주에서 검증하고, 충북·대전·세종으로 확장하겠습니다",
    subtitle: "작게 시작해 실제 거래를 만들고, 데이터와 네트워크 효과로 지역 광고 플랫폼으로 성장하겠습니다.",
    type: "closing",
    roadmap: ["청주 음식점 검증", "충북 지역 확장", "대전·세종 진출", "업종 다각화"],
    ask: "지원사업을 통해 MVP 운영, 초기 광고 거래 검증, 지역 크리에이터 네트워크 구축을 실행하겠습니다.",
  },
];

function esc(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderSlide(s, idx) {
  const num = String(idx + 1).padStart(2, "0");
  const header = `
    <div class="slide-top">
      <div class="brand">AI Local Ads Platform</div>
      <div class="section">${esc(s.section)} / 13</div>
    </div>`;
  const title = `
    <div class="kicker">${esc(s.kicker)}</div>
    <h1>${esc(s.title)}</h1>
    <p class="subtitle">${esc(s.subtitle)}</p>`;
  const footer = `<div class="slide-foot">${esc(s.source || s.footer || "청주 소상공인 AI 인플루언서 광고 자동화 플랫폼")}</div>`;

  let body = "";
  if (s.type === "hero") {
    body = `
      <div class="hero-grid">
        <div>${title}<div class="hero-badges"><span>청주</span><span>소상공인</span><span>AI 매칭</span><span>숏폼 광고</span></div></div>
        <div class="hero-visual">
          <div class="map-dot dot-a"></div><div class="map-dot dot-b"></div><div class="map-dot dot-c"></div>
          <div class="phone">
            <div class="phone-bar"></div>
            <div class="phone-card strong">AI 추천 크리에이터 3명</div>
            <div class="phone-card">예산 30만원 · 청주 맛집</div>
            <div class="phone-card">릴스 기획안 자동 제안</div>
          </div>
        </div>
      </div>`;
  } else if (s.type === "statement") {
    body = `
      <div class="statement">
        <div>${title}</div>
        <div class="point-stack">${s.points.map((p) => `<div class="point"><span></span>${esc(p)}</div>`).join("")}</div>
      </div>
      <div class="callout">${esc(s.callout)}</div>`;
  } else if (s.type === "pain-flow") {
    body = `
      ${title}
      <div class="flow">${s.steps.map((p) => `<div>${esc(p)}</div>`).join("")}</div>
      <div class="three-cols">${s.pains.map(([h, p]) => `<div class="panel"><b>${esc(h)}</b><p>${esc(p)}</p></div>`).join("")}</div>`;
  } else if (s.type === "stats") {
    body = `
      ${title}
      <div class="stat-grid">${s.stats.map(([v, l, src]) => `<div class="stat"><strong>${esc(v)}</strong><span>${esc(l)}</span><em>${esc(src)}</em></div>`).join("")}</div>`;
  } else if (s.type === "target") {
    body = `
      ${title}
      <div class="target-map">
        <div class="target-list"><h2>광고주</h2>${s.left.map((x) => `<p>${esc(x)}</p>`).join("")}</div>
        <div class="target-core">${esc(s.center)}</div>
        <div class="target-list"><h2>크리에이터</h2>${s.right.map((x) => `<p>${esc(x)}</p>`).join("")}</div>
      </div>`;
  } else if (s.type === "solution") {
    body = `
      ${title}
      <div class="module-grid">${s.modules.map(([h, p]) => `<div class="module"><span></span><h2>${esc(h)}</h2><p>${esc(p)}</p></div>`).join("")}</div>`;
  } else if (s.type === "process") {
    body = `
      ${title}
      <div class="process">${s.steps.map((p, i) => `<div><em>${String(i + 1).padStart(2, "0")}</em><span>${esc(p)}</span></div>`).join("")}</div>`;
  } else if (s.type === "comparison") {
    body = `
      ${title}
      <div class="compare">
        <div class="competitors">${s.rows.map((r) => `<div class="row"><b>${esc(r[0])}</b><span>${esc(r[1])}</span><em>${esc(r[2])}</em></div>`).join("")}</div>
        <div class="ours"><h2>우리의 차별점</h2>${s.ours.map((x) => `<p>${esc(x)}</p>`).join("")}</div>
      </div>`;
  } else if (s.type === "revenue") {
    body = `
      ${title}
      <div class="revenue">${s.streams.map(([h, p, e]) => `<div><h2>${esc(h)}</h2><p>${esc(p)}</p><em>${esc(e)}</em></div>`).join("")}</div>`;
  } else if (s.type === "mvp") {
    body = `
      ${title}
      <div class="timeline">${s.lanes.map(([n, h, p]) => `<div><span>${esc(n)}</span><h2>${esc(h)}</h2><p>${esc(p)}</p></div>`).join("")}</div>`;
  } else if (s.type === "data-loop") {
    body = `
      ${title}
      <div class="loop">${s.loop.map((x) => `<div>${esc(x)}</div>`).join("")}</div>
      <div class="callout slim">${esc(s.note)}</div>`;
  } else if (s.type === "impact") {
    body = `
      ${title}
      <div class="impact">${s.impacts.map(([h, a, b, c]) => `<div><h2>${esc(h)}</h2><p>${esc(a)}</p><p>${esc(b)}</p><p>${esc(c)}</p></div>`).join("")}</div>`;
  } else if (s.type === "closing") {
    body = `
      ${title}
      <div class="roadmap">${s.roadmap.map((x) => `<div>${esc(x)}</div>`).join("")}</div>
      <div class="ask">${esc(s.ask)}</div>`;
  }

  return `<section class="slide" id="slide-${num}">${header}<main>${body}</main>${footer}</section>`;
}

const css = `
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; background: #e8edf4; color: #172033; font-family: "Malgun Gothic", "Apple SD Gothic Neo", "Pretendard", Arial, sans-serif; }
.deck { width: 1280px; margin: 0 auto; }
.slide { position: relative; width: 1280px; height: 720px; overflow: hidden; background: #f8fafc; display: flex; flex-direction: column; padding: 42px 56px 34px; page-break-after: always; }
.slide::before { content: ""; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(17, 54, 96, .07), transparent 36%), radial-gradient(circle at 92% 12%, rgba(12, 161, 154, .12), transparent 28%); pointer-events: none; }
.slide-top, .slide-foot, main { position: relative; z-index: 1; }
.slide-top { display: flex; justify-content: space-between; align-items: center; color: #667085; font-size: 15px; font-weight: 700; }
.brand { color: #0c4a6e; }
.section { color: #0f766e; }
main { flex: 1; display: flex; flex-direction: column; justify-content: center; }
.slide-foot { min-height: 18px; color: #7a8496; font-size: 11px; line-height: 1.35; }
.kicker { color: #0f766e; font-weight: 800; font-size: 16px; margin-bottom: 12px; }
h1 { margin: 0; color: #111827; font-size: 42px; line-height: 1.18; font-weight: 850; max-width: 1080px; word-break: keep-all; overflow-wrap: normal; }
.subtitle { margin: 18px 0 0; color: #475467; font-size: 22px; line-height: 1.45; max-width: 1020px; font-weight: 500; word-break: keep-all; }
.hero-grid { display: grid; grid-template-columns: 1.05fr .95fr; align-items: center; gap: 54px; }
.hero-grid h1 { font-size: 50px; }
.hero-badges { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 38px; }
.hero-badges span { padding: 10px 16px; border: 1px solid #b7d7d3; border-radius: 999px; color: #0f766e; background: #ecfdf5; font-size: 17px; font-weight: 800; }
.hero-visual { position: relative; height: 470px; border: 1px solid #d5dde8; background: linear-gradient(160deg, #ffffff, #e6f7f5); border-radius: 8px; display: flex; align-items: center; justify-content: center; }
.phone { width: 268px; padding: 22px; border: 10px solid #162033; border-radius: 34px; background: #f8fafc; box-shadow: 0 22px 48px rgba(15, 23, 42, .18); }
.phone-bar { width: 78px; height: 8px; border-radius: 99px; background: #cbd5e1; margin: 0 auto 28px; }
.phone-card { background: #fff; border: 1px solid #d7dee9; border-radius: 8px; padding: 16px; margin: 12px 0; color: #344054; font-weight: 800; font-size: 16px; }
.phone-card.strong { background: #0f766e; color: #fff; border-color: #0f766e; }
.map-dot { position: absolute; width: 16px; height: 16px; border-radius: 50%; background: #0f766e; box-shadow: 0 0 0 12px rgba(15, 118, 110, .12); }
.dot-a { left: 90px; top: 110px; } .dot-b { right: 110px; top: 160px; } .dot-c { left: 160px; bottom: 95px; }
.statement { display: grid; grid-template-columns: 1.1fr .9fr; gap: 44px; align-items: center; }
.point-stack { display: grid; gap: 16px; }
.point { display: flex; align-items: center; gap: 14px; padding: 20px 24px; background: #fff; border: 1px solid #dbe3ee; border-radius: 8px; color: #263445; font-size: 22px; font-weight: 800; }
.point span { width: 12px; height: 12px; border-radius: 50%; background: #0f766e; flex: 0 0 auto; }
.callout, .ask { margin-top: 32px; padding: 22px 26px; background: #123047; color: #fff; border-radius: 8px; font-size: 22px; line-height: 1.42; font-weight: 800; }
.callout.slim { max-width: 980px; margin-left: auto; margin-right: auto; text-align: center; }
.flow { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 34px; }
.flow div, .process div, .roadmap div { min-height: 76px; display: flex; align-items: center; justify-content: center; text-align: center; padding: 14px; background: #fff; border: 1px solid #d8e1eb; border-radius: 8px; font-size: 20px; font-weight: 850; color: #1f2937; }
.three-cols, .module-grid, .impact, .revenue { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 28px; }
.panel, .module, .impact div, .revenue div, .target-list, .timeline div, .stat, .ours { background: #fff; border: 1px solid #dbe3ee; border-radius: 8px; padding: 24px; }
.panel b, .module h2, .impact h2, .revenue h2, .target-list h2, .timeline h2, .ours h2 { display: block; margin: 0 0 12px; color: #0c4a6e; font-size: 24px; line-height: 1.25; }
.panel p, .module p, .impact p, .revenue p, .target-list p, .timeline p, .ours p { margin: 8px 0 0; color: #475467; font-size: 19px; line-height: 1.38; font-weight: 650; }
.stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-top: 44px; }
.stat { min-height: 245px; display: flex; flex-direction: column; justify-content: space-between; }
.stat strong { color: #0f766e; font-size: 46px; line-height: 1; word-break: keep-all; white-space: nowrap; }
.stat span { color: #1f2937; font-size: 23px; line-height: 1.28; font-weight: 850; }
.stat em { color: #667085; font-size: 13px; font-style: normal; line-height: 1.3; }
.target-map { display: grid; grid-template-columns: 1fr 260px 1fr; gap: 24px; align-items: center; margin-top: 44px; }
.target-core { height: 220px; display: flex; align-items: center; justify-content: center; text-align: center; background: #0f766e; color: #fff; border-radius: 8px; padding: 28px; font-size: 26px; font-weight: 900; box-shadow: 0 18px 36px rgba(15, 118, 110, .22); }
.module-grid { grid-template-columns: repeat(4, 1fr); }
.module span { display: block; width: 38px; height: 6px; border-radius: 99px; background: #14b8a6; margin-bottom: 26px; }
.process { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 40px; }
.process div { min-height: 120px; flex-direction: column; gap: 10px; }
.process em { color: #0f766e; font-size: 15px; font-style: normal; font-weight: 900; }
.process span { font-size: 22px; }
.compare { display: grid; grid-template-columns: 1.2fr .8fr; gap: 24px; margin-top: 28px; }
.competitors { display: grid; gap: 10px; }
.row { display: grid; grid-template-columns: 100px 150px 1fr; gap: 16px; align-items: center; padding: 15px 18px; background: #fff; border: 1px solid #dbe3ee; border-radius: 8px; }
.row b { color: #0c4a6e; font-size: 20px; }
.row span { color: #111827; font-size: 18px; font-weight: 850; }
.row em { color: #667085; font-size: 16px; font-style: normal; line-height: 1.3; }
.ours { background: #123047; color: #fff; }
.ours h2 { color: #fff; }
.ours p { color: #dff7f4; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,.15); font-size: 20px; }
.revenue div { min-height: 250px; }
.revenue em { display: block; margin-top: 26px; color: #0f766e; font-style: normal; font-size: 17px; line-height: 1.35; font-weight: 850; }
.timeline { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 42px; }
.timeline span { display: inline-block; color: #fff; background: #0f766e; border-radius: 999px; padding: 8px 14px; margin-bottom: 24px; font-weight: 900; }
.loop { display: flex; justify-content: center; align-items: center; gap: 16px; margin: 44px 0 10px; }
.loop div { width: 160px; height: 160px; border-radius: 50%; background: #fff; border: 3px solid #0f766e; display: flex; align-items: center; justify-content: center; text-align: center; padding: 18px; color: #0c4a6e; font-size: 20px; font-weight: 900; position: relative; }
.loop div:not(:last-child)::after { content: "→"; position: absolute; right: -26px; color: #667085; font-size: 28px; }
.impact div { min-height: 248px; }
.roadmap { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 44px; }
.roadmap div { min-height: 128px; background: #fff; color: #0c4a6e; font-size: 22px; }
@media print { body { background: #fff; } .deck { margin: 0; } }
`;

const html = `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=1280, initial-scale=1">
<title>청주 AI 인플루언서 광고 플랫폼 발표자료</title>
<style>${css}</style>
</head>
<body>
<div class="deck">
${slides.map(renderSlide).join("\n")}
</div>
<script>
let current = 0;
const slides = [...document.querySelectorAll(".slide")];
function show(i) { current = Math.max(0, Math.min(slides.length - 1, i)); slides[current].scrollIntoView(); }
document.addEventListener("keydown", (e) => {
  if (["ArrowRight", " ", "PageDown"].includes(e.key)) show(current + 1);
  if (["ArrowLeft", "PageUp"].includes(e.key)) show(current - 1);
  if (e.key.toLowerCase() === "f") document.documentElement.requestFullscreen?.();
});
</script>
</body>
</html>`;

fs.writeFileSync(HTML_PATH, html, "utf8");

async function main() {
  const { chromium } = require("playwright");
  const pptxgen = require("pptxgenjs");
  const sharp = require("sharp");

  const chromePath = fs.existsSync("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe")
    ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
    : "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
  const browser = await chromium.launch({
    headless: true,
    executablePath: chromePath,
    args: ["--no-sandbox", "--disable-gpu"],
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 2 });
  await page.goto(pathToFileURL(HTML_PATH).href);
  await page.addStyleTag({
    content: "*, *::before, *::after { animation: none !important; transition: none !important; }",
  });
  await page.evaluateHandle("document.fonts.ready");

  const slideCount = await page.$$eval(".slide", (els) => els.length);
  const images = [];
  for (let i = 0; i < slideCount; i += 1) {
    await page.evaluate((idx) => {
      document.querySelectorAll(".slide").forEach((s, i) => {
        s.style.display = i === idx ? "flex" : "none";
        s.style.opacity = i === idx ? "1" : "0";
      });
      window.scrollTo(0, 0);
    }, i);
    await page.waitForTimeout(120);
    const imagePath = path.join(SLIDE_DIR, `slide-${String(i + 1).padStart(2, "0")}.png`);
    await page.screenshot({ path: imagePath, type: "png", clip: { x: 0, y: 0, width: 1280, height: 720 } });
    images.push(imagePath);
  }
  await browser.close();

  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "Codex";
  pptx.subject = "청주 소상공인 AI 인플루언서 광고 자동화 플랫폼";
  pptx.title = "청주 AI 인플루언서 광고 플랫폼 발표자료";
  pptx.company = "모두의 창업";
  pptx.lang = "ko-KR";
  pptx.theme = {
    headFontFace: "Malgun Gothic",
    bodyFontFace: "Malgun Gothic",
    lang: "ko-KR",
  };
  for (const img of images) {
    const slide = pptx.addSlide();
    slide.background = { color: "F8FAFC" };
    slide.addImage({ path: img, x: 0, y: 0, w: 13.333333, h: 7.5 });
  }
  await pptx.writeFile({ fileName: PPTX_PATH });

  const thumbs = await Promise.all(images.map((img) => sharp(img).resize(320, 180).png().toBuffer()));
  const sheetW = 320 * 4;
  const sheetH = 180 * 4;
  await sharp({
    create: { width: sheetW, height: sheetH, channels: 4, background: "#e8edf4" },
  })
    .composite(thumbs.map((input, i) => ({ input, left: (i % 4) * 320, top: Math.floor(i / 4) * 180 })))
    .png()
    .toFile(CONTACT_PATH);

  console.log(JSON.stringify({
    html: HTML_PATH,
    pptx: PPTX_PATH,
    contactSheet: CONTACT_PATH,
    slideCount,
    pngCount: images.length,
  }, null, 2));
}

main().catch((err) => {
  console.error(err && err.stack ? err.stack : err);
  process.exit(1);
});
