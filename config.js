window.ISLAMIC_HABITS_CONFIG = {
  duaPrice: "Free",
  stripePaymentLinks: {
    english: "",
  },
  duaDownloadLinks: {
    english: "./downloads/100-hours-dua-practice-english.pdf",
  },
  adsenseClient: "",
  googleAdsConversionId: "AW-18157183110",
  googleAdsConversionLabel: "",
};

(() => {
  const sectionId = "mobile-experience";
  const cssId = "mobile-experience-style";
  const circle3Id = "circle3";

  const addStyle = () => {
    if (document.getElementById(cssId)) return;
    const style = document.createElement("style");
    style.id = cssId;
    style.textContent = `
      .mobile-experience{margin:0 clamp(18px,5vw,72px);padding:76px 0;scroll-margin-top:96px;position:relative;isolation:isolate}
      .mobile-experience:before{position:absolute;inset:30px -4vw auto;z-index:-1;height:520px;border:1px solid rgba(246,242,232,.06);border-radius:30px;background:radial-gradient(circle at 16% 12%,rgba(100,238,181,.18),transparent 30%),radial-gradient(circle at 84% 26%,rgba(255,207,107,.12),transparent 26%),rgba(5,14,12,.28);content:""}
      .experience-reel{display:grid;grid-template-columns:repeat(5,minmax(280px,1fr));gap:16px;overflow-x:auto;padding:4px 4px 18px;scroll-snap-type:x mandatory}
      .experience-card{position:relative;min-height:640px;display:grid;align-content:space-between;gap:22px;min-width:280px;border:1px solid rgba(246,242,232,.14);border-radius:34px;padding:28px;overflow:hidden;background:radial-gradient(circle at 86% 16%,rgba(246,242,232,.42),transparent 18px),radial-gradient(circle at 8% 64%,rgba(255,172,207,.55),transparent 20px),linear-gradient(160deg,rgba(100,238,181,.88),rgba(6,103,83,.9));box-shadow:var(--shadow);scroll-snap-align:start}
      .experience-card:before,.experience-card:after{position:absolute;border:2px solid rgba(246,242,232,.28);border-radius:50%;content:""}
      .experience-card:before{inset:46% -90px auto auto;width:260px;height:260px}.experience-card:after{left:-110px;bottom:-90px;width:240px;height:240px}
      .experience-copy{position:relative;z-index:2;display:grid;gap:10px}.experience-copy span{width:max-content;border-radius:999px;padding:6px 10px;color:#003825;background:rgba(246,242,232,.66);font-family:var(--font-display);font-size:.75rem;font-weight:900}
      .experience-copy h3{max-width:360px;margin:0;color:#fff;font-size:clamp(2rem,3vw,3rem);line-height:1.02;text-shadow:0 10px 36px rgba(0,0,0,.18)}.experience-copy p{max-width:360px;margin:0;color:rgba(255,255,255,.84);font-weight:700}
      .qibla-card{justify-items:center}.qibla-card .experience-copy{justify-items:center;text-align:center}.qibla-card .experience-copy h3,.qibla-card .experience-copy p{margin-inline:auto}
      .phone-mock{position:relative;z-index:2;box-sizing:border-box;width:100%;min-height:390px;border:8px solid #07100e;border-radius:46px;padding:18px;overflow:hidden;background:#062f29;box-shadow:0 26px 60px rgba(0,0,0,.3),inset 0 0 0 1px rgba(246,242,232,.12)}
      .qibla-mock{display:grid;grid-template-rows:96px 1fr auto;align-items:center;justify-items:center;padding-inline:16px}
      .phone-mock:before{position:absolute;top:10px;left:50%;width:86px;height:14px;border-radius:999px;background:#07100e;transform:translateX(-50%);content:""}
      .mock-map{width:calc(100% + 32px);height:96px;margin:18px -16px 0;background:radial-gradient(circle at 28% 36%,rgba(255,207,107,.5),transparent 28px),radial-gradient(circle at 72% 42%,rgba(92,215,233,.55),transparent 52px),linear-gradient(135deg,#a7efd2,#5cd7e9 46%,#f6f2e8)}
      .mock-compass{position:relative;box-sizing:border-box;width:min(190px,100%);aspect-ratio:1;height:auto;margin:10px auto;border:8px solid rgba(7,16,14,.78);border-radius:50%;background:repeating-conic-gradient(#111 0 1.5deg,transparent 1.5deg 8deg),#fff;box-shadow:0 0 44px rgba(100,238,181,.44)}
      .mock-compass span{position:absolute;color:rgba(7,16,14,.62);font-size:1.15rem;font-weight:900}.mock-compass span:nth-child(1){top:22px;left:50%;transform:translateX(-50%)}.mock-compass span:nth-child(2){top:50%;right:22px;transform:translateY(-50%)}.mock-compass span:nth-child(3){bottom:22px;left:50%;transform:translateX(-50%)}.mock-compass span:nth-child(4){top:50%;left:22px;transform:translateY(-50%)}
      .mock-compass strong{position:absolute;left:50%;top:26px;width:22px;height:136px;background:linear-gradient(180deg,#00d889 0 50%,#75e1bd 50%);clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);transform:translateX(-50%)}.qibla-mock small{display:block;margin-top:16px;color:rgba(246,242,232,.9);text-align:center;font-weight:900}
      .salah-mock,.dua-mock,.content-mock{display:grid;gap:12px;align-content:end}.salah-now,.salah-ring{border:1px solid rgba(246,242,232,.13);border-radius:18px;padding:18px;background:rgba(5,14,12,.72)}.salah-now strong,.salah-now span,.salah-ring strong,.salah-ring span{display:block}.salah-now span,.salah-ring strong{color:#fff;font-size:2.15rem;font-weight:950}
      .salah-list{display:grid;gap:8px}.salah-list span{display:flex;justify-content:space-between;border-radius:14px;padding:11px 12px;color:#fff;background:rgba(3,42,36,.88);font-weight:850}
      .bead-line{position:absolute;top:118px;left:50%;width:230px;height:120px;transform:translateX(-50%);pointer-events:none}.bead-line:before{position:absolute;left:14px;right:14px;top:62px;height:2px;background:linear-gradient(90deg,transparent,rgba(7,16,14,.72),transparent);transform:rotate(-8deg);content:""}.bead-line i{position:absolute;width:42px;height:42px;border-radius:50%;background:radial-gradient(circle at 32% 28%,rgba(246,242,232,.78),transparent 14%),radial-gradient(circle at 50% 50%,#0f9f61,#075634);box-shadow:0 7px 18px rgba(0,0,0,.28)}.bead-line i:nth-child(1){left:0;top:58px}.bead-line i:nth-child(2){left:45px;top:40px}.bead-line i:nth-child(3){left:93px;top:31px}.bead-line i:nth-child(4){left:141px;top:39px}.bead-line i:nth-child(5){left:186px;top:58px}
      .dhikr-mock strong{margin-top:120px;color:#fff;font-size:3rem;text-align:center}.dua-chip,.dua-reader-mini{margin-top:auto;border-radius:18px;padding:18px;color:#061713;background:rgba(246,242,232,.86)}.dua-chip{text-align:right}.dua-chip span,.dua-chip small{display:block;font-weight:900}.dua-chip small{color:#008656}
      .dua-category-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.dua-category-grid span{min-height:58px;border-radius:12px;padding:10px;color:#061713;background:rgba(246,242,232,.78);font-size:.82rem;font-weight:900}.dua-category-grid span:first-child{color:#fff;background:rgba(5,14,12,.82)}.dua-reader-mini p{margin:8px 0 0;font-size:1rem;text-align:right}
      .content-mock{grid-template-columns:repeat(2,minmax(0,1fr));align-content:center}.content-tile{min-height:96px;display:grid;place-items:center;border-radius:16px;color:#fff;background:linear-gradient(135deg,rgba(5,14,12,.3),rgba(5,14,12,.82)),linear-gradient(135deg,var(--emerald),var(--gold));font-family:var(--font-display);font-size:1.2rem;font-weight:950;box-shadow:0 14px 28px rgba(0,0,0,.18)}.content-tile.large{grid-column:1/-1;min-height:132px;background:linear-gradient(135deg,rgba(5,14,12,.28),rgba(5,14,12,.86)),linear-gradient(135deg,#0c684f,#64eeb5)}
      .circle3{margin:0 clamp(18px,5vw,72px);padding:76px 0;scroll-margin-top:96px;position:relative;isolation:isolate}.circle3:before{position:absolute;inset:36px -4vw auto;z-index:-1;height:560px;border:1px solid rgba(246,242,232,.06);border-radius:30px;background:radial-gradient(circle at 18% 14%,rgba(240,191,85,.16),transparent 30%),radial-gradient(circle at 80% 22%,rgba(91,214,232,.15),transparent 26%),rgba(5,14,12,.3);content:""}
      .circle3-grid{display:grid;grid-template-columns:minmax(320px,.92fr) minmax(320px,1.08fr);gap:18px;align-items:stretch}.circle3-hero,.circle3-chat,.circle3-pillars article,.circle3-saas-grid article,.circle3-note{border:1px solid var(--line);background:var(--panel);box-shadow:var(--shadow)}
      .circle3-hero{display:grid;gap:24px;align-content:space-between;min-height:560px;border-radius:26px;padding:clamp(22px,4vw,36px);overflow:hidden;background:linear-gradient(145deg,rgba(66,209,155,.1),rgba(91,214,232,.07)),var(--panel)}.circle3-hero h3{max-width:560px;margin:0 0 12px;font-size:clamp(1.8rem,3.2vw,3.1rem);line-height:1.02}
      .circle3-orbit{position:relative;min-height:300px;border:1px solid rgba(246,242,232,.1);border-radius:24px;overflow:hidden;background:radial-gradient(circle at 50% 50%,rgba(240,191,85,.18),transparent 26%),radial-gradient(circle at 50% 50%,rgba(66,209,155,.14),transparent 52%),rgba(5,14,12,.4)}.circle3-orbit:before,.circle3-orbit:after{position:absolute;inset:44px;border:1px solid rgba(246,242,232,.16);border-radius:50%;content:""}.circle3-orbit:after{inset:82px;border-color:rgba(91,214,232,.22)}
      .circle3-orbit i{position:absolute;left:50%;top:50%;width:78px;height:78px;border-radius:50%;background:linear-gradient(135deg,rgba(246,242,232,.08),rgba(240,191,85,.18)),rgba(5,14,12,.88);box-shadow:0 0 46px rgba(240,191,85,.22);transform:translate(-50%,-50%)}.circle3-orbit i:before{position:absolute;inset:21px;border:3px solid var(--gold);border-top:0;border-radius:0 0 18px 18px;content:""}
      .circle-person{position:absolute;z-index:2;display:grid;place-items:center;width:104px;height:104px;border:1px solid rgba(246,242,232,.18);border-radius:50%;color:var(--soft);background:radial-gradient(circle at 35% 25%,rgba(246,242,232,.2),transparent 28%),rgba(6,38,33,.9);font-family:var(--font-display);font-size:.84rem;text-align:center}.circle-person b{max-width:82px}.circle-person.partner{left:8%;bottom:14%}.circle-person.friend{right:8%;bottom:14%}.circle-person.guide{left:50%;top:6%;color:#07100e;background:radial-gradient(circle at 35% 25%,rgba(255,255,255,.34),transparent 28%),linear-gradient(135deg,var(--gold),#f7dd91);transform:translateX(-50%)}
      .circle3-chat{display:grid;align-items:center;border-radius:26px;padding:clamp(20px,4vw,34px);background:radial-gradient(circle at 88% 8%,rgba(91,214,232,.18),transparent 28%),rgba(5,14,12,.7)}.circle3-window{display:grid;gap:14px;border:8px solid #07100e;border-radius:34px;padding:18px;background:linear-gradient(180deg,rgba(6,47,41,.96),rgba(3,34,30,.98));box-shadow:0 24px 50px rgba(0,0,0,.24)}
      .circle3-top,.circle3-strip{display:flex;gap:10px;align-items:center;justify-content:space-between;border-radius:16px;padding:12px 14px;font-weight:900}.circle3-top{color:#07100e;background:linear-gradient(135deg,var(--emerald),var(--aqua))}.circle3-top strong{border-radius:999px;padding:5px 9px;background:rgba(255,255,255,.38)}.circle3-strip{color:var(--gold);background:rgba(240,191,85,.1)}.circle3-strip b{color:var(--soft);font-size:.78rem}
      .circle3-bubble{max-width:86%;border:1px solid rgba(246,242,232,.12);border-radius:18px;padding:14px;color:var(--soft);background:rgba(246,242,232,.08);line-height:1.45}.circle3-bubble small{display:block;margin-bottom:5px;color:var(--gold);font-weight:950}.circle3-bubble.member{justify-self:end;background:rgba(66,209,155,.12)}.circle3-bubble.silent{max-width:none;color:#07100e;background:rgba(246,242,232,.86)}.circle3-bubble.silent small{color:#00694c}
      .circle3-pillars{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-top:18px}.circle3-pillars article,.circle3-saas-grid article{display:grid;gap:10px;border-radius:18px;padding:18px}.circle3-pillars span{display:inline-grid;place-items:center;width:42px;height:42px;border:1px solid rgba(240,191,85,.4);border-radius:14px;color:var(--gold);background:rgba(240,191,85,.1);font-weight:950}.circle3-pillars h3,.circle3-saas-grid h3{margin:0;font-size:1.12rem}.circle3-pillars p,.circle3-saas-grid li{margin:0;color:var(--muted);font-size:.95rem}
      .circle3-saas-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:12px}.circle3-saas-grid ul{display:grid;gap:8px;margin:0;padding-left:18px}
      .circle3-note{display:grid;grid-template-columns:auto minmax(260px,1fr) auto;gap:14px;align-items:center;margin-top:18px;border-radius:18px;padding:18px;background:linear-gradient(135deg,rgba(240,191,85,.1),rgba(66,209,155,.06)),var(--panel)}.circle3-note strong{color:var(--gold)}.circle3-note span{color:var(--muted)}
      .matrimony-grid{display:grid;grid-template-columns:minmax(320px,.92fr) minmax(320px,1.08fr);gap:18px;align-items:stretch}.matrimony-hero-panel,.matrimony-chat-panel,.matrimony-note{border:1px solid var(--line);background:var(--panel);box-shadow:var(--shadow)}
      .matrimony-hero-panel{display:grid;gap:24px;align-content:space-between;min-height:560px;border-radius:26px;padding:clamp(22px,4vw,36px);overflow:hidden;background:linear-gradient(145deg,rgba(66,209,155,.1),rgba(91,214,232,.07)),var(--panel)}.matrimony-hero-panel h3{max-width:560px;margin:0 0 12px;font-size:clamp(1.8rem,3.2vw,3.1rem);line-height:1.02}
      .matrimony-orbit{position:relative;min-height:300px;border:1px solid rgba(246,242,232,.1);border-radius:24px;overflow:hidden;background:radial-gradient(circle at 50% 50%,rgba(240,191,85,.18),transparent 26%),radial-gradient(circle at 50% 50%,rgba(66,209,155,.14),transparent 52%),rgba(5,14,12,.4)}.matrimony-orbit:before,.matrimony-orbit:after{position:absolute;inset:44px;border:1px solid rgba(246,242,232,.16);border-radius:50%;content:""}.matrimony-orbit:after{inset:82px;border-color:rgba(91,214,232,.22)}
      .matrimony-orbit i{position:absolute;left:50%;top:50%;width:78px;height:78px;border-radius:50%;background:linear-gradient(135deg,rgba(246,242,232,.08),rgba(240,191,85,.18)),rgba(5,14,12,.88);box-shadow:0 0 46px rgba(240,191,85,.22);transform:translate(-50%,-50%)}.matrimony-orbit i:before{position:absolute;inset:21px;border:3px solid var(--gold);border-top:0;border-radius:0 0 18px 18px;content:""}
      .orbit-person{position:absolute;z-index:2;display:grid;place-items:center;width:104px;height:104px;border:1px solid rgba(246,242,232,.18);border-radius:50%;color:var(--soft);background:radial-gradient(circle at 35% 25%,rgba(246,242,232,.2),transparent 28%),rgba(6,38,33,.9);font-family:var(--font-display);font-size:.84rem;text-align:center}.orbit-person b{max-width:82px}.orbit-person.seeker{left:8%;bottom:14%}.orbit-person.match{right:8%;bottom:14%}.orbit-person.observer{left:50%;top:6%;color:#07100e;background:radial-gradient(circle at 35% 25%,rgba(255,255,255,.34),transparent 28%),linear-gradient(135deg,var(--gold),#f7dd91);transform:translateX(-50%)}
      .matrimony-chat-panel{display:grid;align-items:center;border-radius:26px;padding:clamp(20px,4vw,34px);background:radial-gradient(circle at 88% 8%,rgba(91,214,232,.18),transparent 28%),rgba(5,14,12,.7)}.chat-window{display:grid;gap:14px;border:8px solid #07100e;border-radius:34px;padding:18px;background:linear-gradient(180deg,rgba(6,47,41,.96),rgba(3,34,30,.98));box-shadow:0 24px 50px rgba(0,0,0,.24)}
      .chat-topline,.observer-strip{display:flex;gap:10px;align-items:center;justify-content:space-between;border-radius:16px;padding:12px 14px;font-weight:900}.chat-topline{color:#07100e;background:linear-gradient(135deg,var(--emerald),var(--aqua))}.chat-topline strong{border-radius:999px;padding:5px 9px;background:rgba(255,255,255,.38)}.observer-strip{color:var(--gold);background:rgba(240,191,85,.1)}.observer-strip b{color:var(--soft);font-size:.78rem}
      .chat-bubble{max-width:86%;border:1px solid rgba(246,242,232,.12);border-radius:18px;padding:14px;color:var(--soft);background:rgba(246,242,232,.08);line-height:1.45}.chat-bubble small{display:block;margin-bottom:5px;color:var(--gold);font-weight:950}.chat-bubble.candidate{justify-self:end;background:rgba(66,209,155,.12)}.chat-bubble.observer{max-width:none;color:#07100e;background:rgba(246,242,232,.86)}.chat-bubble.observer small{color:#00694c}
      .matrimony-note{display:grid;grid-template-columns:auto minmax(260px,1fr) auto;gap:14px;align-items:center;margin-top:18px;border-radius:18px;padding:18px;background:linear-gradient(135deg,rgba(240,191,85,.1),rgba(66,209,155,.06)),var(--panel)}.matrimony-note strong{color:var(--gold)}.matrimony-note span{color:var(--muted)}
      @media(max-width:980px){.circle3-grid,.matrimony-grid,.circle3-saas-grid{grid-template-columns:1fr}.circle3-pillars{grid-template-columns:repeat(2,minmax(0,1fr))}}
      @media(max-width:640px){.experience-card{min-height:620px}.phone-mock{min-height:360px}.mobile-experience{padding-bottom:96px}.circle3-pillars{grid-template-columns:1fr}.circle3-hero,.matrimony-hero-panel{min-height:auto}.circle3-orbit,.matrimony-orbit{min-height:260px}.circle-person,.orbit-person{width:88px;height:88px;font-size:.74rem}.circle3-note,.matrimony-note{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  };

  const buildSection = () => {
    if (document.getElementById(sectionId)) return;
    const worldTools = document.getElementById("world-tools");
    if (!worldTools) return;
    const section = document.createElement("section");
    section.className = "mobile-experience";
    section.id = sectionId;
    section.setAttribute("aria-labelledby", "mobile-experience-title");
    section.innerHTML = `
      <div class="section-heading wide">
        <p class="eyebrow">Inspired mobile experience</p>
        <h2 id="mobile-experience-title">Practice should feel simple on the phone.</h2>
        <p>Islamic Habits is shaped for daily use: quick Salah awareness, confident Qibla direction, dua before action, dhikr on the move, and beneficial family content without clutter.</p>
      </div>
      <div class="experience-reel" aria-label="Islamic Habits mobile feature concepts">
        <article class="experience-card qibla-card"><div class="experience-copy"><span>01</span><h3>Smart Qibla Finder</h3><p>Live direction, Kaaba bearing, and a calm compass built for phones.</p></div><div class="phone-mock qibla-mock" aria-hidden="true"><div class="mock-map"></div><div class="mock-compass"><span>N</span><span>E</span><span>S</span><span>W</span><strong></strong></div><small>Facing Makkah</small></div></article>
        <article class="experience-card salah-card"><div class="experience-copy"><span>02</span><h3>Pray on Time</h3><p>A focused prayer rhythm with next-Salah awareness and gentle progress.</p></div><div class="phone-mock salah-mock" aria-hidden="true"><div class="salah-now"><strong>Asr</strong><span>15:17</span></div><div class="salah-ring"><strong>2/5</strong><span>prayed</span></div><div class="salah-list"><span>Fajr <b>04:40</b></span><span>Dhuhr <b>11:58</b></span><span>Asr <b>15:17</b></span><span>Maghrib <b>17:56</b></span></div></div></article>
        <article class="experience-card dhikr-card"><div class="experience-copy"><span>03</span><h3>Breathe. Remember Allah.</h3><p>A pocket dhikr counter for small pauses between study, work, and travel.</p></div><div class="phone-mock dhikr-mock" aria-hidden="true"><div class="bead-line"><i></i><i></i><i></i><i></i><i></i></div><strong>25 / 33</strong><div class="dua-chip"><span>الله أكبر</span><small>Allahu Akbar</small></div></div></article>
        <article class="experience-card dua-card"><div class="experience-copy"><span>04</span><h3>Start Every Action with a Dua</h3><p>Categories for morning, prayer, travel, family, food, study, and distress.</p></div><div class="phone-mock dua-mock" aria-hidden="true"><div class="dua-category-grid"><span>Morning</span><span>Prayer</span><span>Travel</span><span>Family</span><span>Food</span><span>Sickness</span></div><div class="dua-reader-mini"><b>When leaving home</b><p>بِسْمِ اللهِ تَوَكَّلْتُ عَلَى اللهِ</p></div></div></article>
        <article class="experience-card family-card"><div class="experience-copy"><span>05</span><h3>Soulful Family Content</h3><p>Short, useful reminders for children, parents, new Muslims, and seekers.</p></div><div class="phone-mock content-mock" aria-hidden="true"><div class="content-tile large">Qur'an</div><div class="content-tile">Seerah</div><div class="content-tile">Stories</div><div class="content-tile">Akhlaq</div></div></article>
      </div>
    `;
    worldTools.insertAdjacentElement("afterend", section);
  };

  const buildCircle3 = () => {
    if (document.getElementById(circle3Id)) return;
    const anchor = document.getElementById(sectionId) || document.getElementById("world-tools");
    if (!anchor) return;
    const section = document.createElement("section");
    section.className = "circle3";
    section.id = circle3Id;
    section.setAttribute("aria-labelledby", "circle3-title");
    section.innerHTML = `
      <div class="section-heading wide">
        <p class="eyebrow">Micro SaaS concept</p>
        <h2 id="circle3-title">Circle3: small circles for better Islamic habits.</h2>
        <p>A lightweight AI-assisted companionship system where Muslims are matched into intelligent three-person circles for habit building, accountability, reflection, emotional support, productivity, and faith-centered companionship.</p>
      </div>
      <div class="circle3-grid">
        <article class="circle3-hero">
          <div class="circle3-orbit" aria-hidden="true">
            <span class="circle-person partner"><b>Habit partner</b></span>
            <span class="circle-person friend"><b>Reflection friend</b></span>
            <span class="circle-person guide"><b>Circle guide</b></span>
            <i></i>
          </div>
          <div><p class="eyebrow">Faith-centered micro-community</p><h3>You were never meant to grow alone.</h3><p>Circle3 is not social media, not a lecture app, and not an open group chat. It is a quiet structure for three people to show up daily, build consistent Islamic habits, and encourage one another with adab.</p></div>
        </article>
        <article class="circle3-chat" aria-label="Circle3 daily room concept">
          <div class="circle3-window">
            <div class="circle3-top"><span>Daily Circle Room</span><strong>3 present</strong></div>
            <div class="circle3-strip"><span>AI prompt active</span><b>Moderated and purposeful</b></div>
            <div class="circle3-bubble"><small>Prompt</small>Which habit improved your iman recently, and what made it easier to repeat?</div>
            <div class="circle3-bubble member"><small>Member</small>Fajr became easier when I slept earlier and kept my phone outside the bed.</div>
            <div class="circle3-bubble silent"><small>Silent presence</small>I am here silently today. Please make dua for my consistency.</div>
          </div>
        </article>
      </div>
      <div class="circle3-pillars" aria-label="Circle3 product layers">
        <article><span>01</span><h3>Smart matching</h3><p>Circles form around timezone, language, age band, activity level, personality, and goals like Fajr, Qur'an, study, fitness, or social media detox.</p></article>
        <article><span>02</span><h3>Daily guided rooms</h3><p>Each room receives a halal conversation starter, a reflection task, and a small action so the group does not drift into empty chatting.</p></article>
        <article><span>03</span><h3>Habit dashboard</h3><p>Track Salah, Qur'an minutes, dhikr, sleep, water, workout, detox, mood, and group encouragement without making faith feel like pressure.</p></article>
        <article><span>04</span><h3>Silent presence</h3><p>Members can say "I am here silently" when they need companionship without talking. Presence still protects motivation.</p></article>
      </div>
      <div class="circle3-saas-grid" aria-label="Circle3 launch and business model">
        <article><p class="eyebrow">MVP launch</p><h3>Start ultra-small</h3><ul><li>3-person matching</li><li>Daily AI prompt</li><li>Simple habit streak</li><li>Purposeful text chat</li></ul></article>
        <article><p class="eyebrow">Free and premium</p><h3>Micro SaaS revenue</h3><ul><li>Free: one active circle and basic tracking</li><li>Premium: AI mentor, analytics, voice circles, productivity mode</li><li>Future: scholar sessions and premium groups</li></ul></article>
        <article><p class="eyebrow">Safety design</p><h3>Trust before growth</h3><ul><li>Gender separation options</li><li>Anti-harassment filters</li><li>AI moderation and reporting</li><li>Marriage-readiness rooms with wali or approved observer</li></ul></article>
      </div>
      <div class="circle3-note"><strong>Circle3 pilot</strong><span>The simplest launch: collect interested users, form the first small habit circles manually, then automate matching, prompts, moderation, and premium coaching.</span><a class="button secondary" href="mailto:support@islamic-habits.com?subject=Circle3%20pilot%20interest">Join the Circle3 pilot</a></div>
    `;
    anchor.insertAdjacentElement("afterend", section);
  };

  const init = () => {
    addStyle();
    buildSection();
    buildCircle3();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
