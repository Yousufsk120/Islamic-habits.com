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

  const addCircle3Nav = () => {
    const nav = document.querySelector(".nav");
    if (!nav || nav.querySelector('a[href="#circle3"]')) return;
    const link = document.createElement("a");
    link.href = "#circle3";
    link.textContent = "Circle3";
    nav.insertBefore(link, nav.querySelector('a[href="#dua-store"]') || null);
  };

  const addCircle3Styles = () => {
    if (document.getElementById("circle3-demo-style")) return;
    const style = document.createElement("style");
    style.id = "circle3-demo-style";
    style.textContent = `
      .circle3-demo{margin:0 clamp(18px,5vw,72px);padding:78px 0;scroll-margin-top:96px;color:#13251f;isolation:isolate;position:relative}
      .circle3-demo:before{position:absolute;inset:32px -4vw auto;z-index:-1;height:820px;border-radius:32px;background:linear-gradient(135deg,#f8fbf7,#ecf7f0 54%,#fff7df);content:"";box-shadow:0 28px 80px rgba(0,0,0,.22)}
      .circle3-shell{display:grid;gap:18px}
      .circle3-hero-demo{display:grid;grid-template-columns:minmax(280px,.92fr) minmax(320px,1.08fr);gap:18px;align-items:stretch}
      .circle3-copy,.circle3-stage,.circle3-screen,.circle3-beta{border:1px solid rgba(19,37,31,.12);border-radius:26px;background:rgba(255,255,255,.82);box-shadow:0 24px 60px rgba(10,39,31,.12)}
      .circle3-copy{display:grid;gap:18px;align-content:center;padding:clamp(24px,4vw,42px)}
      .circle3-copy .eyebrow,.circle3-screen .eyebrow{color:#0f7a57}
      .circle3-copy h2{max-width:760px;margin:0;color:#13251f;font-size:clamp(2.3rem,4.7vw,4.8rem);line-height:1.01;letter-spacing:0}
      .circle3-copy p{max-width:720px;margin:0;color:#52645d;font-size:1.05rem;line-height:1.72}
      .circle3-actions,.circle3-purpose-list,.circle3-room-actions{display:flex;flex-wrap:wrap;gap:10px}
      .circle3-action{display:inline-flex;align-items:center;justify-content:center;min-height:44px;border:1px solid rgba(19,37,31,.14);border-radius:999px;padding:10px 15px;color:#13251f;background:#fff;font-weight:950;text-decoration:none}
      .circle3-action.primary{border:0;color:#fff;background:linear-gradient(135deg,#0b7a56,#1bbf8b)}
      .circle3-action.gold{border:0;background:linear-gradient(135deg,#f0bf55,#ffe6a2)}
      .circle3-trust-strip{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
      .circle3-trust-strip span{border:1px solid rgba(19,37,31,.1);border-radius:16px;padding:12px;background:#f5fbf7;color:#315247;font-weight:900}
      .circle3-stage{padding:18px;background:linear-gradient(180deg,#ffffff,#eff8f1)}
      .circle3-phone{overflow:hidden;border:8px solid #12251f;border-radius:34px;background:#f9fcfa;box-shadow:0 30px 70px rgba(6,39,30,.2)}
      .circle3-phone-top{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:16px 18px;color:#fff;background:linear-gradient(135deg,#064f3c,#18a979)}
      .circle3-phone-top strong{font-family:var(--font-display);font-size:1.05rem}
      .circle3-phone-top span{border-radius:999px;padding:6px 9px;background:rgba(255,255,255,.18);font-size:.78rem;font-weight:950}
      .circle3-presence{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;padding:14px;background:#ffffff}
      .circle3-presence article{border:1px solid #dfeae4;border-radius:18px;padding:12px;text-align:center;background:#f8fbf8}
      .circle3-presence b{display:block;color:#13251f;font-size:.9rem}.circle3-presence small{color:#60746d;font-weight:750}
      .circle3-presence .observer{background:#fff8e6;border-color:#f2d27a}
      .circle3-chat{display:grid;gap:10px;padding:0 14px 16px;background:#ffffff}
      .circle3-message{max-width:88%;border:1px solid #e2ece6;border-radius:18px;padding:13px;color:#273b34;background:#f6faf7;line-height:1.5}
      .circle3-message small{display:block;margin-bottom:4px;color:#0d7a58;font-weight:950}
      .circle3-message.right{justify-self:end;background:#eaf9f1}
      .circle3-message.observer{max-width:none;border-color:#efd47d;background:#fff5d7}
      .circle3-room-actions{padding:14px;border-top:1px solid #e2ece6;background:#fbfdfb}
      .circle3-room-actions button{flex:1 1 120px;border:0;border-radius:14px;padding:12px 10px;color:#13251f;background:#eef4ef;font-weight:950}
      .circle3-room-actions .primary{color:#fff;background:linear-gradient(135deg,#0b7a56,#18b783)}
      .circle3-screens{display:grid;grid-template-columns:repeat(4,minmax(220px,1fr));gap:12px}
      .circle3-screen{display:grid;gap:12px;min-height:268px;padding:18px}
      .circle3-screen h3{margin:0;color:#13251f;font-size:1.12rem}
      .circle3-screen p{margin:0;color:#60746d;line-height:1.52}
      .circle3-form{display:grid;gap:8px}
      .circle3-input,.circle3-select,.circle3-otp span,.circle3-upload{border:1px solid #dce8e2;border-radius:14px;background:#fff}
      .circle3-input,.circle3-select{min-height:42px;padding:0 12px;color:#13251f}
      .circle3-otp{display:flex;gap:6px}.circle3-otp span{display:grid;place-items:center;width:34px;height:40px;color:#13251f;font-weight:950}
      .circle3-upload{display:grid;place-items:center;min-height:104px;color:#0f7a57;font-weight:950;background:linear-gradient(135deg,#f8fbf7,#fff8e4)}
      .circle3-lobby{display:grid;gap:8px}.circle3-lobby span{display:flex;align-items:center;justify-content:space-between;border-radius:14px;padding:10px 12px;background:#f5fbf7;color:#315247;font-weight:900}.circle3-lobby b{color:#0f7a57}
      .circle3-end{display:grid;gap:8px}.circle3-end span{border-radius:14px;padding:10px 12px;background:#fff8e6;color:#5c4a18;font-weight:900}
      .circle3-purpose-list span{border-radius:999px;padding:8px 10px;background:#f1f7f3;color:#315247;font-size:.82rem;font-weight:900}
      .circle3-beta{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px;padding:18px;background:#fff}
      .circle3-beta span{color:#60746d}
      @media(max-width:1000px){.circle3-hero-demo,.circle3-screens{grid-template-columns:1fr 1fr}.circle3-trust-strip{grid-template-columns:1fr}}
      @media(max-width:640px){.circle3-hero-demo,.circle3-screens{grid-template-columns:1fr}.circle3-presence{grid-template-columns:1fr}.circle3-phone-top{display:grid}.circle3-copy h2{font-size:2.2rem}.circle3-demo{margin-inline:14px}.circle3-demo:before{inset:24px -10px auto}}
    `;
    document.head.appendChild(style);
  };

  const rewriteSupportEmailLinks = () => {
    document.querySelectorAll('a[href^="mailto:support@islamic-habits.com"]').forEach((link) => {
      const href = link.getAttribute("href") || "";
      const subject = href.match(/[?&]subject=([^&]+)/)?.[1] || "Islamic%20Habits%20support";
      const body = href.match(/[?&]body=([^&]+)/)?.[1] || "";
      const gmailUrl = new URL("https://mail.google.com/mail/");
      gmailUrl.searchParams.set("view", "cm");
      gmailUrl.searchParams.set("fs", "1");
      gmailUrl.searchParams.set("to", "support@islamic-habits.com");
      gmailUrl.searchParams.set("su", decodeURIComponent(subject));
      if (body) gmailUrl.searchParams.set("body", decodeURIComponent(body));
      link.href = gmailUrl.toString();
      link.target = "_blank";
      link.rel = "noopener";
    });
  };

  const buildCircle3Demo = () => {
    removeOldCircle3();
    addCircle3Nav();
    addCircle3Styles();
    const anchor = document.getElementById("mobile-experience") || document.getElementById("world-tools") || document.querySelector("main");
    if (!anchor) return;
    const section = document.createElement("section");
    section.className = "circle3-demo";
    section.id = sectionId;
    section.setAttribute("aria-labelledby", "circle3-title");
    section.innerHTML = `
      <div class="circle3-shell">
        <div class="circle3-hero-demo">
          <div class="circle3-copy">
            <p class="eyebrow">Circle3 module</p>
            <h2 id="circle3-title">Safe conversations begin with a trusted third presence.</h2>
            <p>Circle3 helps Muslim youth, families, and individuals communicate in a respectful 3-person room. It is not a dating app, not random social media, and not a lecture platform. It is a trusted digital majlis.</p>
            <div class="circle3-trust-strip" aria-label="Circle3 room structure">
              <span>Person 1: active speaker</span>
              <span>Person 2: active speaker</span>
              <span>Person 3: observer</span>
            </div>
            <div class="circle3-actions">
              <a class="circle3-action primary" href="mailto:support@islamic-habits.com?subject=Start%20a%20Safe%20Circle">Start a Safe Circle</a>
              <a class="circle3-action gold" href="mailto:support@islamic-habits.com?subject=Join%20Circle3%20as%20Observer">Join as Observer</a>
              <a class="circle3-action" href="#circle3-flow">How It Works</a>
            </div>
          </div>
          <div class="circle3-stage" aria-label="Circle3 active room demo">
            <div class="circle3-phone">
              <div class="circle3-phone-top"><strong>Marriage Discussion Circle</strong><span>3 verified present</span></div>
              <div class="circle3-presence">
                <article><b>Amina</b><small>Speaker</small></article>
                <article><b>Yusuf</b><small>Speaker</small></article>
                <article class="observer"><b>Fatima</b><small>Observer</small></article>
              </div>
              <div class="circle3-chat">
                <div class="circle3-message"><small>Amina</small>Assalamu Alaikum. I wanted to discuss family expectations.</div>
                <div class="circle3-message right"><small>Yusuf</small>Wa Alaikum Assalam. Yes, we can discuss respectfully.</div>
                <div class="circle3-message observer"><small>Fatima Observer</small>I am here only to maintain comfort and clarity. Observer Mode can guide, but not dominate conversation.</div>
              </div>
              <div class="circle3-room-actions">
                <button type="button">Observer mode</button>
                <button class="primary" type="button">Begin respectful conversation</button>
                <button type="button">Safety / Report</button>
              </div>
            </div>
          </div>
        </div>

        <div class="circle3-screens" id="circle3-flow" aria-label="Circle3 frontend demo screens">
          <article class="circle3-screen">
            <p class="eyebrow">Screen 2</p>
            <h3>Login / Registration</h3>
            <div class="circle3-form">
              <input class="circle3-input" value="Name" readonly>
              <input class="circle3-input" value="+91 mobile number" readonly>
              <select class="circle3-select" aria-label="Purpose of circle"><option>Marriage discussion</option></select>
            </div>
            <a class="circle3-action primary" href="mailto:support@islamic-habits.com?subject=Circle3%20registration%20interest">Send OTP</a>
          </article>
          <article class="circle3-screen">
            <p class="eyebrow">Screen 3</p>
            <h3>OTP Verification</h3>
            <div class="circle3-otp" aria-label="Six digit OTP mock"><span>1</span><span>8</span><span>6</span><span>4</span><span>2</span><span>9</span></div>
            <p>Your identity is protected. We verify every participant for a safer conversation.</p>
          </article>
          <article class="circle3-screen">
            <p class="eyebrow">Screen 4</p>
            <h3>Selfie Verification Mock</h3>
            <div class="circle3-upload">Upload selfie</div>
            <p>Upload a selfie to confirm that every Circle3 room has real people.</p>
          </article>
          <article class="circle3-screen">
            <p class="eyebrow">Screen 5</p>
            <h3>Waiting Lobby</h3>
            <div class="circle3-lobby"><span>Speaker 1 <b>Verified</b></span><span>Speaker 2 <b>Waiting</b></span><span>Observer <b>Waiting</b></span></div>
            <p>Your Circle3 will start when all three participants are present.</p>
          </article>
          <article class="circle3-screen">
            <p class="eyebrow">Purpose options</p>
            <h3>Choose the room intention</h3>
            <div class="circle3-purpose-list"><span>Marriage discussion</span><span>Islamic habit support</span><span>Youth chit-chat</span><span>Family discussion</span><span>Study/productivity</span><span>Emotional support</span></div>
          </article>
          <article class="circle3-screen">
            <p class="eyebrow">Screen 6</p>
            <h3>Observer Mode</h3>
            <p>Observer can guide, pause, report, or help clarify. The observer is present to protect comfort, not dominate the conversation.</p>
            <button class="circle3-action gold" type="button">Invite Trusted Observer</button>
          </article>
          <article class="circle3-screen">
            <p class="eyebrow">Safety</p>
            <h3>Report and moderation</h3>
            <p>Every room should include safety controls, clear boundaries, verified presence, and respectful session rules.</p>
            <button class="circle3-action" type="button">Open Safety Panel</button>
          </article>
          <article class="circle3-screen">
            <p class="eyebrow">End session</p>
            <h3>Close with clarity</h3>
            <div class="circle3-end"><span>Continue with family contact</span><span>Schedule follow-up</span><span>End respectfully</span></div>
          </article>
        </div>

        <div class="circle3-beta">
          <strong>Frontend demo only for now</strong>
          <span>Backend will come gradually: real OTP, selfie verification, database, matching, moderation, realtime chat, observer control, and session history.</span>
          <a class="circle3-action primary" href="mailto:support@islamic-habits.com?subject=Circle3%20frontend%20feedback">Send feedback</a>
        </div>
      </div>
    `;
    anchor.insertAdjacentElement("afterend", section);
    rewriteSupportEmailLinks();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      rewriteSupportEmailLinks();
      buildCircle3Demo();
    });
  } else {
    rewriteSupportEmailLinks();
    buildCircle3Demo();
  }
})();
