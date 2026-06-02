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
    const defaultSupportBody = [
      "Assalamu Alaikum,",
      "",
      "I need help with Islamic Habits.",
      "",
      "Name:",
      "Email:",
      "Country:",
      "Contact number:",
      "Request type (PDF download / product preorder / Circle3 / correction / other):",
      "Product or page:",
      "Message:",
      "",
      "JazakAllah."
    ].join("\n");

    document.querySelectorAll('a[href^="mailto:support@islamic-habits.com"]').forEach((link) => {
      const href = link.getAttribute("href") || "";
      const subject = href.match(/[?&]subject=([^&]+)/)?.[1] || "Islamic%20Habits%20support";
      const body = href.match(/[?&]body=([^&]+)/)?.[1] || encodeURIComponent(defaultSupportBody);
      const gmailUrl = new URL("https://mail.google.com/mail/");
      gmailUrl.searchParams.set("view", "cm");
      gmailUrl.searchParams.set("fs", "1");
      gmailUrl.searchParams.set("to", "support@islamic-habits.com");
      gmailUrl.searchParams.set("su", decodeURIComponent(subject));
      gmailUrl.searchParams.set("body", decodeURIComponent(body));
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

  const enhanceMobileExperience = () => {
    const section = document.getElementById("mobile-experience");
    if (!section || section.dataset.smartUi === "1") return;
    section.dataset.smartUi = "1";

    const qibla = section.querySelector(".qibla-mock");
    if (qibla) {
      qibla.innerHTML = `
        <div class="smart-status"><span>Qibla</span><b>292°</b></div>
        <div class="smart-map"></div>
        <div class="smart-kaaba">Kaaba</div>
        <div class="mock-compass smart-compass">
          <span>N</span><span>E</span><span>S</span><span>W</span><strong></strong>
        </div>
        <div class="smart-footer"><b>Facing Makkah</b><span>Live phone compass</span></div>
      `;
    }

    const salah = section.querySelector(".salah-mock");
    if (salah) {
      salah.innerHTML = `
        <div class="smart-status"><span>Today, 25 August</span><b>1 Rabi I</b></div>
        <div class="smart-salah-panel">
          <div class="smart-salah-now"><small>Now</small><strong>Asr</strong><span>15:17</span><em>Maghrib in 2h 26m</em></div>
          <div class="smart-salah-ring"><strong>2/5</strong><span>prayed</span></div>
        </div>
        <div class="smart-salah-list">
          <span class="done">Fajr <b>04:40</b></span>
          <span class="done">Dhuhr <b>11:58</b></span>
          <span class="active">Asr <b>15:17</b></span>
          <span>Maghrib <b>17:56</b></span>
        </div>
      `;
    }

    const dhikr = section.querySelector(".dhikr-mock");
    if (dhikr) {
      dhikr.innerHTML = `
        <div class="smart-status"><span>Dhikr pause</span><b>33 count</b></div>
        <div class="smart-beads"><i></i><i></i><i></i><i></i><i></i><i></i></div>
        <div class="smart-dhikr-count"><strong>25</strong><span>/ 33</span></div>
        <div class="smart-dua-chip"><span>الله أكبر</span><small>Allahu Akbar</small><em>Tap to count quietly</em></div>
      `;
    }

    const dua = section.querySelector(".dua-mock");
    if (dua) {
      dua.innerHTML = `
        <div class="smart-status"><span>Dua Library</span><b>132 chapters</b></div>
        <div class="smart-dua-grid">
          <span>Morning</span><span>Prayer</span><span>Travel</span>
          <span>Family</span><span>Food</span><span>Study</span>
        </div>
        <div class="smart-reader"><b>When leaving home</b><p>بِسْمِ اللهِ تَوَكَّلْتُ عَلَى اللهِ</p><small>In the name of Allah, I trust Allah.</small></div>
      `;
    }

    const content = section.querySelector(".content-mock");
    if (content) {
      content.innerHTML = `
        <div class="smart-status"><span>Family Feed</span><b>Useful only</b></div>
        <div class="smart-content-tile large"><span>Qur'an</span><small>Short reflection for tonight</small></div>
        <div class="smart-content-tile"><span>Seerah</span><small>5 min</small></div>
        <div class="smart-content-tile"><span>Stories</span><small>Kids</small></div>
        <div class="smart-content-tile"><span>Akhlaq</span><small>Adab</small></div>
      `;
    }

    if (document.getElementById("smart-mobile-experience-styles")) return;
    const style = document.createElement("style");
    style.id = "smart-mobile-experience-styles";
    style.textContent = `
      #mobile-experience .phone-mock{display:grid;gap:14px;align-content:stretch;min-height:460px;padding:22px 16px 18px;background:radial-gradient(circle at 50% 0,rgba(100,238,181,.18),transparent 34%),linear-gradient(180deg,#082c27,#041614 72%)}
      #mobile-experience .smart-status{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:44px;border:1px solid rgba(246,242,232,.1);border-radius:18px;padding:8px 10px;color:rgba(246,242,232,.76);background:rgba(246,242,232,.07);font-size:.78rem;font-weight:850}
      #mobile-experience .smart-status b{color:#fff;white-space:nowrap}
      #mobile-experience .qibla-mock{grid-template-rows:auto 108px auto 1fr auto;padding-inline:16px}
      #mobile-experience .smart-map{position:relative;height:108px;border-radius:18px;overflow:hidden;background:radial-gradient(circle at 24% 36%,rgba(240,191,85,.72),transparent 20px),radial-gradient(circle at 74% 46%,rgba(78,198,230,.72),transparent 46px),linear-gradient(135deg,#dff6cf 0 31%,#62d1dc 32% 55%,#ebf3d0 56%);box-shadow:inset 0 0 0 1px rgba(7,16,14,.1)}
      #mobile-experience .smart-map:before{position:absolute;inset:48% 20px auto;border-top:2px dashed rgba(0,126,84,.62);transform:rotate(-9deg);content:""}
      #mobile-experience .smart-map:after{position:absolute;top:24px;right:28px;width:18px;height:18px;border:4px solid #fff;border-radius:4px;background:#07100e;box-shadow:0 0 0 6px rgba(66,209,155,.28);content:""}
      #mobile-experience .smart-kaaba{justify-self:center;width:max-content;border-radius:999px;padding:6px 10px;color:#06221c;background:linear-gradient(135deg,#fff8dc,#64eeb5);font-size:.72rem;font-weight:950;transform:translateY(-5px)}
      #mobile-experience .smart-compass{width:min(226px,96%);border-width:7px;background:repeating-conic-gradient(#111 0 1.4deg,transparent 1.4deg 8deg),radial-gradient(circle,#fff 0 59%,#eef8f1 60%)}
      #mobile-experience .smart-compass:before{position:absolute;inset:13px;border:1px solid rgba(7,16,14,.14);border-radius:50%;content:""}
      #mobile-experience .smart-compass strong{top:28px;height:156px}
      #mobile-experience .smart-footer{display:grid;justify-items:center;gap:2px;color:#fff;text-align:center;font-weight:950}
      #mobile-experience .smart-footer span{color:rgba(246,242,232,.7);font-size:.76rem}
      #mobile-experience .salah-mock{align-content:start}
      #mobile-experience .smart-salah-panel{display:grid;grid-template-columns:1fr .82fr;gap:10px}
      #mobile-experience .smart-salah-now,#mobile-experience .smart-salah-ring{min-width:0;border:1px solid rgba(246,242,232,.13);border-radius:20px;padding:15px;background:linear-gradient(145deg,rgba(7,74,61,.92),rgba(4,28,25,.92))}
      #mobile-experience .smart-salah-now small,#mobile-experience .smart-salah-now em{display:block;color:rgba(246,242,232,.68);font-size:.72rem;font-style:normal;font-weight:850}
      #mobile-experience .smart-salah-now strong,#mobile-experience .smart-salah-now span{display:block;color:#fff}.smart-salah-now span{font-size:2.3rem;font-weight:950}
      #mobile-experience .smart-salah-ring{position:relative;display:grid;place-items:center;text-align:center;overflow:hidden}.smart-salah-ring:before{position:absolute;inset:18px;border:13px solid rgba(66,209,155,.18);border-top-color:#42d19b;border-right-color:#42d19b;border-radius:50%;transform:rotate(35deg);content:""}.smart-salah-ring strong,.smart-salah-ring span{position:relative;z-index:1;display:block}.smart-salah-ring strong{color:#fff;font-size:2.3rem;font-weight:950}
      #mobile-experience .smart-salah-list{display:grid;gap:8px}.smart-salah-list span{display:flex;align-items:center;justify-content:space-between;min-height:44px;border-radius:14px;padding:10px 12px;color:#fff;background:rgba(246,242,232,.08);font-weight:850}.smart-salah-list span:before{width:16px;height:16px;margin-right:8px;border:2px solid rgba(246,242,232,.38);border-radius:50%;content:""}.smart-salah-list .done:before{border-color:#42d19b;background:#42d19b}.smart-salah-list .active{background:rgba(66,209,155,.16)}
      #mobile-experience .dhikr-mock{align-content:space-between;background:linear-gradient(180deg,rgba(255,255,255,.18),transparent 34%),radial-gradient(circle at 52% 64%,rgba(240,191,85,.18),transparent 34%),linear-gradient(180deg,#5ccdaa,#0a5143 58%,#041614)}
      #mobile-experience .smart-beads{position:relative;width:100%;height:126px}.smart-beads:before{position:absolute;left:12px;right:12px;top:62px;height:2px;background:linear-gradient(90deg,transparent,rgba(7,16,14,.72),transparent);transform:rotate(-8deg);content:""}.smart-beads i{position:absolute;width:34px;height:34px;border-radius:50%;background:radial-gradient(circle at 32% 28%,rgba(246,242,232,.78),transparent 14%),radial-gradient(circle at 50% 50%,#0f9f61,#075634);box-shadow:0 7px 18px rgba(0,0,0,.28)}.smart-beads i:nth-child(1){left:4%;top:64px}.smart-beads i:nth-child(2){left:19%;top:42px}.smart-beads i:nth-child(3){left:34%;top:30px}.smart-beads i:nth-child(4){left:49%;top:28px}.smart-beads i:nth-child(5){left:64%;top:38px}.smart-beads i:nth-child(6){left:79%;top:60px}
      #mobile-experience .smart-dhikr-count{display:flex;align-items:baseline;justify-content:center;gap:8px;color:#07100e}.smart-dhikr-count strong{margin:0;color:#05a86a;font-size:3.6rem;line-height:.9}.smart-dhikr-count span{color:rgba(7,16,14,.78);font-size:2rem;font-weight:950}
      #mobile-experience .smart-dua-chip,#mobile-experience .smart-reader{border-radius:18px;padding:18px;color:#061713;background:rgba(246,242,232,.88);box-shadow:0 18px 38px rgba(0,0,0,.18)}.smart-dua-chip span,.smart-dua-chip small{display:block;text-align:right;font-weight:900}.smart-dua-chip small{color:#008656}.smart-dua-chip em,.smart-reader small,.smart-content-tile small{display:block;margin-top:6px;font-style:normal;font-size:.72rem;font-weight:850;opacity:.74}
      #mobile-experience .dua-mock{align-content:start}.smart-dua-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.smart-dua-grid span{display:grid;place-items:center;min-height:54px;border-radius:12px;padding:8px;color:#061713;background:rgba(246,242,232,.84);text-align:center;font-size:.82rem;font-weight:900;box-shadow:0 10px 22px rgba(0,0,0,.12)}.smart-dua-grid span:first-child{color:#fff;background:rgba(5,14,12,.82)}.smart-reader p{margin:8px 0 0;text-align:right}
      #mobile-experience .content-mock{grid-template-columns:repeat(2,minmax(0,1fr));align-content:start}.content-mock .smart-status{grid-column:1/-1}.smart-content-tile{display:grid;align-content:end;justify-items:start;min-height:108px;border-radius:16px;padding:14px;color:#fff;background:linear-gradient(135deg,rgba(5,14,12,.3),rgba(5,14,12,.82)),linear-gradient(135deg,#42d19b,#f0bf55);font-family:var(--font-display);font-size:1.1rem;font-weight:950;text-align:left;box-shadow:0 14px 28px rgba(0,0,0,.18)}.smart-content-tile.large{grid-column:1/-1;min-height:150px;background:linear-gradient(135deg,rgba(5,14,12,.28),rgba(5,14,12,.86)),linear-gradient(135deg,#0c684f,#64eeb5)}
    `;
    document.head.appendChild(style);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      rewriteSupportEmailLinks();
      enhanceMobileExperience();
      buildCircle3Demo();
    });
  } else {
    rewriteSupportEmailLinks();
    enhanceMobileExperience();
    buildCircle3Demo();
  }
})();