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
      .mock-compass{position:relative;width:min(220px,100%);aspect-ratio:1;height:auto;margin:10px auto;border:8px solid rgba(7,16,14,.78);border-radius:50%;background:repeating-conic-gradient(#111 0 1.5deg,transparent 1.5deg 8deg),#fff;box-shadow:0 0 44px rgba(100,238,181,.44)}
      .mock-compass span{position:absolute;color:rgba(7,16,14,.62);font-size:1.15rem;font-weight:900}.mock-compass span:nth-child(1){top:22px;left:50%;transform:translateX(-50%)}.mock-compass span:nth-child(2){top:50%;right:22px;transform:translateY(-50%)}.mock-compass span:nth-child(3){bottom:22px;left:50%;transform:translateX(-50%)}.mock-compass span:nth-child(4){top:50%;left:22px;transform:translateY(-50%)}
      .mock-compass strong{position:absolute;left:50%;top:28px;width:24px;height:158px;background:linear-gradient(180deg,#00d889 0 50%,#75e1bd 50%);clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);transform:translateX(-50%)}.qibla-mock small{display:block;margin-top:16px;color:rgba(246,242,232,.9);text-align:center;font-weight:900}
      .salah-mock,.dua-mock,.content-mock{display:grid;gap:12px;align-content:end}.salah-now,.salah-ring{border:1px solid rgba(246,242,232,.13);border-radius:18px;padding:18px;background:rgba(5,14,12,.72)}.salah-now strong,.salah-now span,.salah-ring strong,.salah-ring span{display:block}.salah-now span,.salah-ring strong{color:#fff;font-size:2.15rem;font-weight:950}
      .salah-list{display:grid;gap:8px}.salah-list span{display:flex;justify-content:space-between;border-radius:14px;padding:11px 12px;color:#fff;background:rgba(3,42,36,.88);font-weight:850}
      .bead-line{position:absolute;top:118px;left:50%;width:230px;height:120px;transform:translateX(-50%);pointer-events:none}.bead-line:before{position:absolute;left:14px;right:14px;top:62px;height:2px;background:linear-gradient(90deg,transparent,rgba(7,16,14,.72),transparent);transform:rotate(-8deg);content:""}.bead-line i{position:absolute;width:42px;height:42px;border-radius:50%;background:radial-gradient(circle at 32% 28%,rgba(246,242,232,.78),transparent 14%),radial-gradient(circle at 50% 50%,#0f9f61,#075634);box-shadow:0 7px 18px rgba(0,0,0,.28)}.bead-line i:nth-child(1){left:0;top:58px}.bead-line i:nth-child(2){left:45px;top:40px}.bead-line i:nth-child(3){left:93px;top:31px}.bead-line i:nth-child(4){left:141px;top:39px}.bead-line i:nth-child(5){left:186px;top:58px}
      .dhikr-mock strong{margin-top:120px;color:#fff;font-size:3rem;text-align:center}.dua-chip,.dua-reader-mini{margin-top:auto;border-radius:18px;padding:18px;color:#061713;background:rgba(246,242,232,.86)}.dua-chip{text-align:right}.dua-chip span,.dua-chip small{display:block;font-weight:900}.dua-chip small{color:#008656}
      .dua-category-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.dua-category-grid span{min-height:58px;border-radius:12px;padding:10px;color:#061713;background:rgba(246,242,232,.78);font-size:.82rem;font-weight:900}.dua-category-grid span:first-child{color:#fff;background:rgba(5,14,12,.82)}.dua-reader-mini p{margin:8px 0 0;font-size:1rem;text-align:right}
      .content-mock{grid-template-columns:repeat(2,minmax(0,1fr));align-content:center}.content-tile{min-height:96px;display:grid;place-items:center;border-radius:16px;color:#fff;background:linear-gradient(135deg,rgba(5,14,12,.3),rgba(5,14,12,.82)),linear-gradient(135deg,var(--emerald),var(--gold));font-family:var(--font-display);font-size:1.2rem;font-weight:950;box-shadow:0 14px 28px rgba(0,0,0,.18)}.content-tile.large{grid-column:1/-1;min-height:132px;background:linear-gradient(135deg,rgba(5,14,12,.28),rgba(5,14,12,.86)),linear-gradient(135deg,#0c684f,#64eeb5)}
      @media(max-width:640px){.experience-card{min-height:620px}.phone-mock{min-height:360px}.mobile-experience{padding-bottom:96px}}
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

  const init = () => {
    addStyle();
    buildSection();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
