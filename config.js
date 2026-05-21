window.ISLAMIC_HABITS_CONFIG = {
  duaPrice: "Free",
  stripePaymentLinks: { english: "" },
  duaDownloadLinks: { english: "./downloads/100-hours-dua-practice-english.pdf" },
  adsenseClient: "",
  googleAdsConversionId: "AW-18157183110",
  googleAdsConversionLabel: "",
};

(() => {
  const sectionId = "circle3";

  const removeOldCircle3 = () => {
    document.querySelectorAll('a[href="#circle3"]').forEach((link) => link.remove());
    document.getElementById(sectionId)?.remove();
  };

  const addNavLink = () => {
    const nav = document.querySelector(".nav");
    if (!nav || nav.querySelector('a[href="#circle3"]')) return;
    const link = document.createElement("a");
    link.href = "#circle3";
    link.textContent = "Circle3";
    nav.insertBefore(link, nav.querySelector('a[href="#dua-store"]') || null);
  };

  const addStyles = () => {
    if (document.getElementById("circle3-demo-style")) return;
    const style = document.createElement("style");
    style.id = "circle3-demo-style";
    style.textContent = `
      .circle3-demo{margin:0 clamp(18px,5vw,72px);padding:76px 0;scroll-margin-top:96px;position:relative;isolation:isolate}
      .circle3-demo:before{position:absolute;inset:28px -4vw auto;z-index:-1;height:620px;border:1px solid rgba(246,242,232,.06);border-radius:30px;background:radial-gradient(circle at 14% 12%,rgba(100,238,181,.18),transparent 32%),radial-gradient(circle at 82% 18%,rgba(240,191,85,.16),transparent 28%),rgba(5,14,12,.32);content:""}
      .circle3-demo-grid{display:grid;grid-template-columns:minmax(300px,.9fr) minmax(320px,1.1fr);gap:18px;align-items:stretch}
      .circle3-demo-card,.circle3-room-demo,.circle3-flow-card,.circle3-beta-note{border:1px solid var(--line);border-radius:26px;background:var(--panel);box-shadow:var(--shadow)}
      .circle3-demo-card{display:grid;gap:18px;align-content:center;padding:clamp(24px,4vw,40px)}
      .circle3-demo-card h2{margin:0;font-size:clamp(2.2rem,4vw,4rem);line-height:1.02}
      .circle3-demo-card p{margin:0;color:var(--muted);font-size:1.04rem;line-height:1.7}
      .circle3-demo-actions{display:flex;flex-wrap:wrap;gap:10px}
      .circle3-trust-row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
      .circle3-trust-row span{border:1px solid rgba(246,242,232,.12);border-radius:16px;padding:12px;color:var(--soft);background:rgba(246,242,232,.06);font-weight:850}
      .circle3-room-demo{padding:18px;background:radial-gradient(circle at 84% 10%,rgba(91,214,232,.14),transparent 28%),rgba(5,14,12,.7)}
      .circle3-phone{border:8px solid #07100e;border-radius:34px;overflow:hidden;background:linear-gradient(180deg,rgba(6,47,41,.98),rgba(3,34,30,.98));box-shadow:0 28px 60px rgba(0,0,0,.28)}
      .circle3-phone-top{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:16px 18px;color:#07100e;background:linear-gradient(135deg,var(--emerald),var(--aqua))}
      .circle3-phone-top strong{font-family:var(--font-display)}
      .circle3-phone-top span{border-radius:999px;padding:6px 9px;background:rgba(255,255,255,.36);font-size:.78rem;font-weight:950}
      .circle3-presence{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;padding:14px}
      .circle3-presence article{border:1px solid rgba(246,242,232,.12);border-radius:18px;padding:12px;text-align:center;background:rgba(246,242,232,.06)}
      .circle3-presence b{display:block;color:var(--soft);font-size:.86rem}.circle3-presence small{color:var(--muted)}
      .circle3-presence .observer{background:rgba(240,191,85,.12);border-color:rgba(240,191,85,.28)}
      .circle3-chat-line{display:grid;gap:10px;padding:0 14px 16px}
      .circle3-message{max-width:88%;border:1px solid rgba(246,242,232,.1);border-radius:18px;padding:13px;color:var(--soft);background:rgba(246,242,232,.07);line-height:1.5}
      .circle3-message small{display:block;margin-bottom:4px;color:var(--gold);font-weight:950}
      .circle3-message.right{justify-self:end;background:rgba(66,209,155,.12)}
      .circle3-message.observer{max-width:none;color:#07100e;background:linear-gradient(135deg,var(--gold),var(--mint))}
      .circle3-room-controls{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;padding:14px;border-top:1px solid rgba(246,242,232,.1)}
      .circle3-room-controls button{border:0;border-radius:14px;padding:11px 8px;color:#07100e;background:rgba(246,242,232,.88);font-weight:950}
      .circle3-room-controls button.primary-control{background:linear-gradient(135deg,var(--emerald),var(--aqua))}
      .circle3-flow-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-top:18px}
      .circle3-flow-card{padding:18px}.circle3-flow-card span{display:inline-grid;place-items:center;width:42px;height:42px;border-radius:14px;color:#07100e;background:linear-gradient(135deg,var(--gold),var(--mint));font-weight:950}.circle3-flow-card h3{margin:12px 0 8px}.circle3-flow-card p{margin:0;color:var(--muted)}
      .circle3-beta-note{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px;margin-top:18px;padding:18px;background:linear-gradient(135deg,rgba(240,191,85,.1),rgba(66,209,155,.06)),var(--panel)}
      .circle3-beta-note span{color:var(--muted)}
      @media(max-width:900px){.circle3-demo-grid,.circle3-flow-grid{grid-template-columns:1fr}.circle3-trust-row{grid-template-columns:1fr}.circle3-presence{grid-template-columns:1fr}.circle3-phone-top{display:grid}.circle3-room-controls{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  };

  const buildCircle3Demo = () => {
    removeOldCircle3();
    addNavLink();
    addStyles();
    const anchor = document.getElementById("mobile-experience") || document.getElementById("world-tools") || document.querySelector("main");
    if (!anchor) return;
    const section = document.createElement("section");
    section.className = "circle3-demo";
    section.id = sectionId;
    section.setAttribute("aria-labelledby", "circle3-title");
    section.innerHTML = `
      <div class="circle3-demo-grid">
        <div class="circle3-demo-card">
          <p class="eyebrow">Circle3 beta front-end</p>
          <h2 id="circle3-title">Halal conversations with a trusted third presence.</h2>
          <p>Circle3 is a future Islamic companionship room where two people can speak with purpose, including marriage-readiness conversations, while a third approved observer keeps the space respectful, safe, and accountable.</p>
          <div class="circle3-trust-row" aria-label="Circle3 trust model"><span>2 participants</span><span>1 observer</span><span>Adab-first room</span></div>
          <div class="circle3-demo-actions"><a class="button primary" href="mailto:support@islamic-habits.com?subject=Circle3%20beta%20interest">Join beta interest</a><a class="button glass" href="mailto:support@islamic-habits.com?subject=Circle3%20observer%20role">Ask about observer role</a></div>
        </div>
        <div class="circle3-room-demo" aria-label="Circle3 room front-end demo">
          <div class="circle3-phone">
            <div class="circle3-phone-top"><strong>Circle3 Room</strong><span>Waiting for 3 verified people</span></div>
            <div class="circle3-presence"><article><b>Person A</b><small>Marriage intention</small></article><article><b>Person B</b><small>Marriage intention</small></article><article class="observer"><b>Observer</b><small>Wali / approved guide</small></article></div>
            <div class="circle3-chat-line"><div class="circle3-message"><small>Room guide</small>Begin with salam, clear intention, and respectful boundaries.</div><div class="circle3-message right"><small>Participant</small>I would like to discuss values, family expectations, and deen goals.</div><div class="circle3-message observer"><small>Observer note</small>The observer can pause, guide, or report. The room is not an unmonitored private chat.</div></div>
            <div class="circle3-room-controls"><button type="button">Invite observer</button><button class="primary-control" type="button">Start room</button><button type="button">Report</button></div>
          </div>
        </div>
      </div>
      <div class="circle3-flow-grid" aria-label="Circle3 front-end flow"><article class="circle3-flow-card"><span>01</span><h3>Verify</h3><p>Users verify phone, basic profile, intention, and safety agreement before entering.</p></article><article class="circle3-flow-card"><span>02</span><h3>Match</h3><p>People can request a purposeful room by country, language, age range, and goal.</p></article><article class="circle3-flow-card"><span>03</span><h3>Observe</h3><p>A wali, family member, scholar-approved guide, or trusted observer joins as the third person.</p></article><article class="circle3-flow-card"><span>04</span><h3>Proceed</h3><p>The room can move toward family contact, a follow-up session, or closure with respect.</p></article></div>
      <div class="circle3-beta-note"><strong>Frontend demo only for now</strong><span>The backend, verification, live chat, observer approval, moderation, and privacy controls will be built gradually.</span><a class="button secondary" href="mailto:support@islamic-habits.com?subject=Circle3%20frontend%20feedback">Send feedback</a></div>
    `;
    anchor.insertAdjacentElement("afterend", section);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildCircle3Demo);
  } else {
    buildCircle3Demo();
  }
})();
