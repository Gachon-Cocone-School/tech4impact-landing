// main.js - Tech for Impact 랜딩페이지 인터랙션 및 Magic MCP 연동

// Magic MCP 연동 예시 (실제 MCP SDK/API로 교체 필요)
function sendMcpEvent(event, detail) {
  // 예시: MCP SDK가 있다면 아래처럼 호출
  // MagicMCP.trackEvent(event, detail);
  console.log("MCP Event:", event, detail);
}

// CTA 버튼 클릭 트래킹
const ctaBtn = document.getElementById("cta-btn");
if (ctaBtn) {
  ctaBtn.addEventListener("click", function () {
    sendMcpEvent("cta_click", { location: "hero" });
    // 지원 폼/링크로 이동
    window.open("https://techforimpact.io/campus/info", "_blank");
  });
}

// FAQ 인터랙션 트래킹
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(function (item) {
  item.addEventListener("click", function () {
    sendMcpEvent("faq_click", {
      question: item.querySelector(".faq-q").innerText,
    });
  });
});

// Google Analytics 예시 (GA4)
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-XXXXXXXXXX"); // 실제 GA4 측정ID로 교체

// 영상 시청률 트래킹 (YouTube API 연동 예시)
function trackVideoPlay(videoId) {
  sendMcpEvent("video_play", { videoId });
  gtag("event", "video_play", { video_id: videoId });
}
// 실제 YouTube iframe API 연동 필요
