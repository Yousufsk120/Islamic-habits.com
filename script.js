const storageKey = "islamic-habits-today";
const todayKey = new Date().toISOString().slice(0, 10);
const kaaba = { latitude: 21.422487, longitude: 39.826206 };
const prayerNames = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];
const siteConfig = window.ISLAMIC_HABITS_CONFIG || {};

const modules = [
  ["fajr", "Salah", "Core", "Fajr Salah Mastery", "Wake with intention, pray the two Sunnah rak'ahs, protect Fajr, sit in remembrance, and begin the day before the world becomes loud.", ["Fajr", "Sunnah", "duas", "morning"]],
  ["dhuhr", "Salah", "Anchor", "Dhuhr Workday Reset", "A midday interruption that protects the heart from being fully absorbed by work, school, meetings, or business.", ["Dhuhr", "work", "wudu"]],
  ["asr", "Salah", "Discipline", "Asr Discipline Window", "The late-day prayer trains urgency, restraint, and accountability when energy is lower and distractions are stronger.", ["Asr", "discipline"]],
  ["maghrib", "Family", "Reset", "Maghrib Home Reset", "Use sunset to shift into gratitude, family attention, food adab, and evening remembrance.", ["Maghrib", "family"]],
  ["isha", "Sleep", "Closure", "Isha and Night Closure", "Close the day with prayer, tawbah, gratitude, screen boundaries, and preparation for Fajr.", ["Isha", "sleep"]],
  ["quran", "Qur'an", "Daily", "Qur'an Connection", "A sustainable relationship with Qur'an: recitation, listening, memorization, understanding, and action.", ["Qur'an", "reflection"]],
  ["adhkar", "Dhikr", "Heart", "Morning and Evening Adhkar", "A shield for the heart through remembrance, gratitude, protection duas, and repeated return to Allah.", ["dhikr", "duas"]],
  ["family", "Family", "Circle", "Family Barakah Circle", "A shared home practice system for parents, spouses, children, siblings, and elders.", ["family", "home"]],
  ["ummah", "Ummah", "Service", "Ummah Service Challenges", "Turn personal discipline outward through giving, neighbor rights, masjid participation, and useful knowledge.", ["service", "charity"]],
  ["civilization", "Civilization", "Vision", "Future Islamic Practice Civilization", "A long-range practice map connecting worship, knowledge, family resilience, ethical work, leadership, and community benefit.", ["vision", "knowledge"]],
].map(([id, label, level, title, summary, tags]) => ({ id, label, level, title, summary, tags }));

const moduleDetailText = {
  fajr: {
    actions: ["Sleep with a clear alarm plan.", "Pray the two Sunnah rak'ahs when possible.", "Stay seated after Fajr for Qur'an, dhikr, dua, or planning.", "Attach one growth block after Fajr."],
    evidence: ["Qur'an 17:78 describes the dawn recitation as witnessed.", "Sahih Muslim 725a reports the virtue of the two Sunnah rak'ahs before Fajr.", "Sahih Muslim 657b mentions protection connected to the morning prayer."],
  },
  default: {
    actions: ["Choose a small repeatable action.", "Attach it to one prayer time.", "Track completion without turning worship into empty gamification.", "Return quickly after missed days."],
    evidence: ["Qur'an 4:103 teaches that prayer is prescribed at appointed times.", "Salah gives sacred structure to time, and character carries it into public life."],
  },
};

const fajrPanels = {
  meaning: ["Why Fajr is a life-shaping habit", "Fajr is a daily proof that the servant can rise before comfort, meet Allah before the marketplace, and begin from obedience instead of reaction.", [["Spiritual meaning", "Fajr places Allah first in the day."], ["Qur'anic frame", "Qur'an 17:78 highlights the dawn recitation as witnessed."], ["Habit psychology", "A strong morning anchor reduces negotiation."], ["Identity", "The Fajr person trains a quiet identity of return."]]],
  sunnah: ["Sunnah and prophetic pattern around Fajr", "The Sunnah turns Fajr into a complete routine: preparation, two Sunnah rak'ahs, obligatory prayer, remembrance, and calm useful work.", [["Two Sunnah rak'ahs", "Sahih Muslim 725a reports that they are better than the world and what it contains."], ["Congregation", "For men who are able, congregation is a major goal."], ["Sitting after prayer", "Reports describe the Prophet, peace be upon him, remaining seated after Fajr until sunrise."], ["No rush into noise", "Worship first, then useful work from a quieter heart."]]],
  after: ["What to do after Fajr", "After Fajr is one of the most valuable habit windows. Keep it simple enough to repeat.", [["Minimum routine", "Three minutes: istighfar, gratitude, one dua, and one intention."], ["Strong routine", "Qur'an, morning adhkar, task review, and a deep-work block."], ["Family routine", "Make it smaller if family duties begin early."], ["Avoid", "Do not follow Fajr immediately with endless scrolling."]]],
  duas: ["Duas and remembrance to attach to Fajr", "Use reliable adhkar collections. The app should later include Arabic, transliteration, translation, audio, and source grading.", [["Beneficial knowledge", "Ask Allah for beneficial knowledge, good provision, and accepted deeds."], ["Istighfar", "Begin with repentance."], ["Protection adhkar", "Add one dua only after the current set becomes stable."], ["Personal dua", "Make concrete duas for faith, family, livelihood, health, and the next right action."]]],
  companions: ["Sahabah and early Muslim habit lessons", "The Sahabah were not casual about anchors of worship. Their lives show urgency, obedience, courage, service, and remembrance.", [["Abu Hurairah", "Many Fajr-related narrations come through Abu Hurairah, may Allah be pleased with him."], ["A'ishah", "The narration about the two Sunnah rak'ahs comes through A'ishah, may Allah be pleased with her."], ["Jabir ibn Samurah", "He reported the Prophet's post-Fajr sitting."], ["Practical lesson", "Convert every example into action."]]],
  plan: ["A 30-day Fajr habit plan", "The goal is becoming a person who returns every morning.", [["Days 1-7", "Protect the time and pray before sunrise."], ["Days 8-14", "Add the two Sunnah rak'ahs."], ["Days 15-21", "Add a five-minute post-Fajr sit."], ["Days 22-30", "Attach study, movement, writing, or memorization."]]],
};

const civilizationLayers = {
  soul: {
    number: "01",
    title: "Soul",
    subtitle: "The inner return to Allah",
    definition: "Soul is the inner life of the human being: the place of intention, remembrance, longing, guilt, hope, sincerity, and return to Allah. It is not measured by noise outside; it is measured by what the heart keeps returning to.",
    intro: "This layer is for the person who looks fine outside but knows the heart needs return, softness, discipline, and hope. The soul layer teaches you to stop living only by pressure and begin living by connection.",
    tags: ["salah", "tawbah", "khushu", "dua", "Qur'an"],
    guidance: [
      ["Allah's guidance", "Qur'an 13:28 teaches that hearts find rest in the remembrance of Allah."],
      ["Prophetic lens", "The famous hadith of intention teaches that the inward aim gives an action its real direction."],
      ["Rumi", "Rumi often compares the heart to a mirror: spiritual rust must be polished for it to reflect truth."],
      ["Al-Ghazali", "The heart is trained by knowledge, worship, watchfulness, repentance, and disciplined desire."],
    ],
    echoes: [
      ["Bhagavad Gita 6.5", "A human being must uplift the self rather than let the self fall into defeat."],
      ["Dogen", "Practice is not merely preparation; repeated practice is itself a form of realization."],
      ["Ancient pattern", "Across old civilizations, inner purification came before public responsibility."],
    ],
    cards: [
      ["If this feels like you", ["I pray, but sometimes I feel far from Allah.", "My day is busy, but my heart feels underfed.", "I want worship to feel alive, not like a rushed task.", "I need a way back after guilt, delay, or missing days."]],
      ["Daily anchors", ["Protect the five prayers as meetings with Allah.", "Read or listen to a small amount of Qur'an with one personal lesson.", "Make one honest dua in your own words after salah.", "End the day with tawbah before sleep."]],
      ["Growth signs", ["You return faster after mistakes.", "You notice the state of your heart before reacting.", "You seek Allah in ease, not only in emergency.", "Your worship becomes calmer and more personal."]],
      ["Start today", ["Choose one prayer to improve for seven days.", "Add a two-minute quiet dua after that prayer.", "Write one sentence: What is Allah inviting me to repair?", "Ask for sincerity before every good action."]],
    ],
    closing: "The soul does not need dramatic change first. It needs a sincere opening, repeated every day.",
  },
  self: {
    number: "02",
    title: "Self",
    subtitle: "The disciplined Muslim body, mind, and tongue",
    definition: "Self is the practical person you live through every day: your body, habits, appetite, attention, speech, time, and choices. It is where faith becomes routine or gets blocked by chaos.",
    intro: "This layer is for the person who wants to be stronger but keeps losing energy to sleep chaos, scrolling, anger, food, procrastination, or scattered attention. Islam does not separate worship from the person carrying it.",
    tags: ["focus", "speech", "sleep", "body", "discipline"],
    guidance: [
      ["Islamic guideline", "The nafs is not ignored; it is trained, purified, and directed toward obedience."],
      ["Prophetic lens", "A strong believer is beloved to Allah, and strength includes resolve, patience, and useful action."],
      ["Allama Iqbal", "Iqbal's khudi is not egoistic pride; it is a God-aware self strengthened by love and responsibility."],
      ["Ibn al-Qayyim", "The self grows by resisting harmful desire and choosing what benefits the heart and future."],
    ],
    echoes: [
      ["Bhagavad Gita 6.5", "The mind can become a friend or enemy depending on discipline."],
      ["Dogen", "Repeated practice turns understanding into lived reality."],
      ["Old civilizational habit", "Warriors, scholars, monks, and craftsmen trained the self through repeated daily forms."],
    ],
    cards: [
      ["If this feels like you", ["I want to wake for Fajr but my nights are uncontrolled.", "My phone pulls me away from Qur'an, family, and deep work.", "I regret words I said when I was tired or angry.", "I have ambition, but my routine does not support it."]],
      ["Daily anchors", ["Sleep with Fajr in mind, not entertainment in control.", "Create one phone-free block for worship, study, or work.", "Guard the tongue from gossip, mockery, and unnecessary argument.", "Treat the body as amanah through movement, moderation, and cleanliness."]],
      ["Growth signs", ["You keep promises to yourself.", "You can focus without needing constant stimulation.", "Your speech becomes safer for others.", "Your worship is supported by your routine instead of fighting it."]],
      ["Start today", ["Set a phone stop time before sleep.", "Pick one work or study block after a prayer.", "Pause before replying when emotion is high.", "Do one small physical action: walk, stretch, hydrate, or clean your space."]],
    ],
    closing: "The self becomes powerful when it serves the soul instead of dragging it.",
  },
  family: {
    number: "03",
    title: "Family",
    subtitle: "A home that makes worship easier",
    definition: "Family is the first civilization a person experiences. It is where mercy, authority, service, forgiveness, speech, gender adab, elder respect, and children's faith are practiced before they are preached.",
    intro: "This layer is for the person who wants barakah at home, not only private worship. Family is where patience, mercy, service, forgiveness, adab, and daily Islam become visible.",
    tags: ["home", "parents", "spouse", "children", "mercy"],
    guidance: [
      ["Allah's guidance", "Qur'an 30:21 describes marriage with tranquility, affection, and mercy."],
      ["Prophetic lens", "The Prophet's character at home shows that private kindness is part of public righteousness."],
      ["Rumi", "Love matures when it becomes service, patience, and a softening of the heart."],
      ["Ibn Khaldun", "Strong societies depend on bonds of trust, loyalty, and shared responsibility."],
    ],
    echoes: [
      ["The Great Learning", "A classical East Asian pattern moves from self-cultivation to family order, then wider peace."],
      ["Ancient household wisdom", "Older civilizations treated the home as the first school of manners and belonging."],
      ["Japanese practice culture", "Small repeated forms at home teach respect before long lectures do."],
    ],
    cards: [
      ["If this feels like you", ["I want my home to feel calmer and more Islamic.", "I need better adab with parents, spouse, siblings, or children.", "I want religion to feel warm at home, not only rules and tension.", "I want family routines that are realistic, not heavy."]],
      ["Daily anchors", ["Make one dua for each family member by name.", "Offer one act of service without announcing it.", "Keep one shared worship moment small: one ayah, one dua, one reminder.", "Repair quickly after harsh words."]],
      ["Growth signs", ["Your family feels safer around your religion, not judged by it.", "You serve before demanding.", "Your home has repeated moments of remembrance.", "Children or younger relatives see Islam as mercy and structure."]],
      ["Start today", ["Message or call a parent with kindness.", "Remove one source of avoidable tension at home.", "Share one short dua before food, school, work, or sleep.", "Ask: What does my family need from my Islam today?"]],
    ],
    closing: "A strong Muslim home is built through many small mercies repeated until they become culture.",
  },
  ummah: {
    number: "04",
    title: "Ummah",
    subtitle: "A life that benefits people",
    definition: "Ummah is the moral community of believers, but it is also a daily responsibility: to care, give, protect, teach, reconcile, serve, and refuse indifference when others are in need.",
    intro: "This layer is for the person who wants faith to move beyond the private self. The Ummah layer asks: who becomes safer, wiser, fed, guided, supported, or encouraged because I exist?",
    tags: ["service", "charity", "neighbors", "masjid", "mercy"],
    guidance: [
      ["Allah's guidance", "Qur'an 3:110 connects the best community with calling to good and resisting wrong."],
      ["Prophetic lens", "The believers are described as one body: pain in one part concerns the whole."],
      ["Ibn Khaldun", "Civilizational strength grows from social solidarity, not isolated selfishness."],
      ["Iqbal", "Iqbal's vision of selfhood points beyond the individual toward service and awakening."],
    ],
    echoes: [
      ["Confucian tradition", "Moral cultivation expands outward from self to family, society, and public peace."],
      ["Buddhist compassion", "A disciplined heart is expected to reduce suffering, not escape responsibility."],
      ["Ancient civic pattern", "Enduring communities survive through trust, sacrifice, memory, and shared purpose."],
    ],
    cards: [
      ["If this feels like you", ["I care about the Ummah but feel overwhelmed by its pain.", "I want to help but do not know where to start.", "I want my skills, money, time, or voice to become sadaqah.", "I want community without drama and ego."]],
      ["Daily anchors", ["Give something regularly, even small.", "Make dua for the Ummah without becoming numb.", "Help one person near you before trying to solve the whole world.", "Support masjid, neighbors, students, elders, and people under pressure."]],
      ["Growth signs", ["You become reliable in small responsibilities.", "You do not turn every issue into online anger.", "Your charity becomes consistent.", "People experience mercy, honesty, and benefit from you."]],
      ["Start today", ["Choose one weekly service action.", "Set a small recurring charity intention.", "Check on one person quietly.", "Ask: What problem near me can Allah use me to ease?"]],
    ],
    closing: "The Ummah is served by people who turn emotion into steady benefit.",
  },
  civilization: {
    number: "05",
    title: "Civilization",
    subtitle: "Faith expressed through excellence over generations",
    definition: "Civilization is worship becoming culture: knowledge, law, beauty, family, economy, technology, public trust, institutions, and moral imagination shaped by accountability before Allah.",
    intro: "This layer is for the person who thinks beyond today: children, knowledge, institutions, halal work, design, technology, scholarship, beauty, justice, and a world that remembers Allah. Civilization starts when worship shapes how we build.",
    tags: ["knowledge", "work", "leadership", "beauty", "future"],
    guidance: [
      ["Allah's guidance", "Qur'an 49:13 teaches human diversity, recognition, and nobility through taqwa."],
      ["Prophetic lens", "Ihsan means doing things with excellence under the awareness that Allah sees."],
      ["Ibn Khaldun", "The rise and fall of societies depends on solidarity, justice, work, leadership, and moral habits."],
      ["Allama Iqbal", "Iqbal calls the believer toward creative, responsible selfhood instead of passive decline."],
    ],
    echoes: [
      ["The Great Learning", "Self-cultivation expands toward family, governance, and peace under heaven."],
      ["Japanese craft culture", "Long practice, refinement, and responsibility turn work into character."],
      ["Ancient memory", "Civilizations carried values through prayer, law, architecture, poetry, teaching, and family life."],
    ],
    cards: [
      ["If this feels like you", ["I want Islam to shape my career, creativity, and leadership.", "I care about building something that benefits future generations.", "I want Muslims to be excellent in knowledge, product, design, service, and ethics.", "I want ambition without arrogance."]],
      ["Daily anchors", ["Learn one useful thing with the intention of service.", "Improve the quality of your work as amanah.", "Keep halal boundaries in earning, influence, and leadership.", "Connect beauty with truth: clean design, clear speech, reliable systems."]],
      ["Growth signs", ["You think in decades, not only moods.", "Your work becomes more trustworthy.", "You can collaborate without ego owning the mission.", "You build tools, habits, families, and institutions that make obedience easier."]],
      ["Start today", ["Choose one skill to develop for the Ummah.", "Document one idea that could become a beneficial project.", "Improve one system in your work, study, or family.", "Ask: If Allah gave barakah to my effort, who would benefit?"]],
    ],
    closing: "Civilization is not a slogan. It is worship, knowledge, character, and useful work becoming structure.",
  },
};

const sources = [
  ["Qur'an 17:78", "https://previous.quran.com/17/78"],
  ["Sahih Muslim 725a", "https://sunnah.com/muslim:725a"],
  ["Sahih Muslim 657b", "https://sunnah.com/search?q=Whoever+prays+Fajr+is+under+the+protection+of+Allaah"],
  ["Sahih Muslim 233c", "https://sunnah.com/muslim/2/19"],
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const els = {
  habitInputs: $$("[data-habit]"),
  progressNumber: $("#progressNumber"),
  heroPercent: $("#heroPercent"),
  heroRing: $("#heroRing"),
  barValue: $("#barValue"),
  resetDay: $("#resetDay"),
  moduleGrid: $("#moduleGrid"),
  moduleSearch: $("#moduleSearch"),
  moduleDialog: $("#moduleDialog"),
  moduleDetail: $("#moduleDetail"),
  detailPanel: $("#detailPanel"),
  closeDialog: $(".close-dialog"),
  layerGrid: $(".layer-grid"),
  form: $(".signup"),
  formMessage: $("#formMessage"),
  prayerForm: $("#prayerForm"),
  cityInput: $("#cityInput"),
  countryInput: $("#countryInput"),
  methodInput: $("#methodInput"),
  useLocation: $("#useLocation"),
  prayerStatus: $("#prayerStatus"),
  timesGrid: $("#timesGrid"),
  qiblaNeedle: $("#qiblaNeedle"),
  qiblaDegree: $("#qiblaDegree"),
  qiblaHint: $("#qiblaHint"),
  startCompass: $("#startCompass"),
  compassStatus: $("#compassStatus"),
  duaPurchaseForm: $("#duaPurchaseForm"),
  duaLanguage: $("#duaLanguage"),
  duaPrice: $("#duaPrice"),
  purchaseStatus: $("#purchaseStatus"),
};

let currentQiblaDegree = null;
let liveCompassActive = false;
const duaStore = {
  price: siteConfig.duaPrice || "Free",
  paymentLinks: {
    english: siteConfig.stripePaymentLinks?.english || "",
  },
  downloadLinks: {
    english: siteConfig.duaDownloadLinks?.english || "./downloads/100-hours-dua-practice-english.pdf",
  },
};

function status(target, message, isError = false) {
  if (!target) return;
  target.textContent = message;
  target.style.color = isError ? "var(--coral)" : "var(--muted)";
}

function readState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return saved.date === todayKey ? saved.completed || [] : [];
  } catch {
    return [];
  }
}

function updateProgress() {
  const completed = els.habitInputs.filter((input) => input.checked).map((input) => input.dataset.habit);
  const percent = Math.round((completed.length / els.habitInputs.length) * 100);
  const offset = 302 - (302 * percent) / 100;
  els.progressNumber.textContent = `${percent}%`;
  els.heroPercent.textContent = `${percent}%`;
  els.heroRing.style.strokeDashoffset = String(offset);
  els.barValue.style.width = `${percent}%`;
  localStorage.setItem(storageKey, JSON.stringify({ date: todayKey, completed }));
}

function renderModules(list = modules) {
  els.moduleGrid.innerHTML = list.map((item) => `
    <button class="module-card" type="button" data-module="${item.id}">
      <span>
        <span class="module-kicker"><span>${item.label}</span><small>${item.level}</small></span>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
      </span>
      <span class="chip-row">${item.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}</span>
    </button>
  `).join("");
}

function sourceMarkup() {
  return `<ul class="source-list">${sources.map(([label, url]) => `<li><a href="${url}" target="_blank" rel="noreferrer">${label}</a></li>`).join("")}</ul>`;
}

function openModule(id) {
  const item = modules.find((module) => module.id === id) || modules[0];
  const detail = moduleDetailText[id] || moduleDetailText.default;
  els.moduleDetail.innerHTML = `
    <article class="module-body">
      <p class="eyebrow">${item.label} module</p>
      <h2>${item.title}</h2>
      <p>${item.summary}</p>
      <div class="modal-meta">${item.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}</div>
      <div class="content-grid">
        <section class="content-card"><strong>Action protocol</strong><ul>${detail.actions.map((text) => `<li>${text}</li>`).join("")}</ul></section>
        <section class="content-card"><strong>Evidence and meaning</strong><ul>${detail.evidence.map((text) => `<li>${text}</li>`).join("")}</ul></section>
        <section class="content-card"><strong>App features needed</strong><ul><li>Guided checklist with streak recovery.</li><li>Arabic, transliteration, translation, and audio for duas.</li><li>Notes, reminders, and family circles.</li></ul></section>
        <section class="content-card"><strong>Experience layer</strong><ul><li>Short lessons and clean visuals.</li><li>Progress that rewards return, not perfection.</li><li>Shareable challenges for friends and halaqah groups.</li></ul></section>
      </div>
      ${id === "fajr" ? sourceMarkup() : ""}
    </article>`;
  els.moduleDialog.showModal();
}

function openCivilizationLayer(id) {
  const layer = civilizationLayers[id];
  if (!layer) return;
  els.moduleDetail.innerHTML = `
    <article class="module-body civilization-body">
      <p class="eyebrow">Civilization layer ${layer.number}</p>
      <h2>${layer.title}: ${layer.subtitle}</h2>
      <section class="layer-definition">
        <strong>Clear definition</strong>
        <p>${layer.definition}</p>
      </section>
      <p class="lead-text">${layer.intro}</p>
      <div class="modal-meta">${layer.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}</div>
      <div class="wisdom-grid">
        <section class="wisdom-panel">
          <strong>Islamic guidance and scholars</strong>
          <ul>${layer.guidance.map(([source, text]) => `<li><span>${source}</span>${text}</li>`).join("")}</ul>
        </section>
        <section class="wisdom-panel">
          <strong>Cross-civilization echoes</strong>
          <ul>${layer.echoes.map(([source, text]) => `<li><span>${source}</span>${text}</li>`).join("")}</ul>
        </section>
      </div>
      <div class="content-grid">${layer.cards.map(([title, items]) => `
        <section class="content-card">
          <strong>${title}</strong>
          <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
        </section>
      `).join("")}</div>
      <p class="layer-closing">${layer.closing}</p>
      <p class="fine-print">Comparative notes are presented as respectful civilizational echoes. Islamic guidance remains anchored in Qur'an, Sunnah, and qualified scholarship.</p>
    </article>`;
  els.moduleDialog.showModal();
}

function renderFajrPanel(key) {
  const [title, intro, cards] = fajrPanels[key] || fajrPanels.meaning;
  els.detailPanel.innerHTML = `
    <p class="eyebrow">Fajr blueprint</p>
    <h3>${title}</h3>
    <p>${intro}</p>
    <div class="content-grid">${cards.map(([cardTitle, body]) => `<section class="content-card"><strong>${cardTitle}</strong><p>${body}</p></section>`).join("")}</div>
    ${sourceMarkup()}`;
}

window.setFajrPanel = (key, activeTab) => {
  $$(".tab").forEach((tab) => tab.classList.remove("active"));
  if (activeTab) activeTab.classList.add("active");
  renderFajrPanel(key);
};

function apiDate() {
  const now = new Date();
  return `${String(now.getDate()).padStart(2, "0")}-${String(now.getMonth() + 1).padStart(2, "0")}-${now.getFullYear()}`;
}

function cleanTime(value) {
  return String(value || "").replace(/\s*\(.+\)\s*/g, "");
}

function renderPrayerTimes(timings, label) {
  els.timesGrid.innerHTML = prayerNames.map((name) => `<div class="time-card"><span>${name}</span><strong>${cleanTime(timings[name])}</strong></div>`).join("");
  status(els.prayerStatus, `Showing today's prayer times for ${label}.`);
}

function radians(degrees) {
  return (degrees * Math.PI) / 180;
}

function degrees(radiansValue) {
  return (radiansValue * 180) / Math.PI;
}

function normalize(degree) {
  return ((degree % 360) + 360) % 360;
}

function calculateQibla(latitude, longitude) {
  const userLat = radians(latitude);
  const userLng = radians(longitude);
  const kaabaLat = radians(kaaba.latitude);
  const kaabaLng = radians(kaaba.longitude);
  const deltaLng = kaabaLng - userLng;
  const y = Math.sin(deltaLng);
  const x = Math.cos(userLat) * Math.tan(kaabaLat) - Math.sin(userLat) * Math.cos(deltaLng);
  return normalize(degrees(Math.atan2(y, x)));
}

function renderQibla(latitude, longitude, label) {
  currentQiblaDegree = calculateQibla(latitude, longitude);
  if (!liveCompassActive) els.qiblaNeedle.style.transform = `rotate(${currentQiblaDegree}deg)`;
  els.qiblaDegree.textContent = `${Math.round(currentQiblaDegree)} degrees from north`;
  els.qiblaHint.textContent = `Qibla direction calculated for ${label}.`;
}

async function fetchPrayerTimes(params) {
  const url = params.latitude
    ? `https://api.aladhan.com/v1/timings/${apiDate()}?${new URLSearchParams(params)}`
    : `https://api.aladhan.com/v1/timingsByCity/${apiDate()}?${new URLSearchParams(params)}`;
  const response = await fetch(url);
  const payload = await response.json();
  if (!response.ok || payload.code !== 200) throw new Error("Could not load prayer times for this location.");
  return payload.data;
}

async function loadByCity(city, country) {
  status(els.prayerStatus, "Calculating prayer times...");
  try {
    const data = await fetchPrayerTimes({ city, country, method: els.methodInput.value });
    renderPrayerTimes(data.timings, `${city}, ${country}`);
    const latitude = Number(data.meta.latitude);
    const longitude = Number(data.meta.longitude);
    if (Number.isFinite(latitude) && Number.isFinite(longitude)) renderQibla(latitude, longitude, `${city}, ${country}`);
  } catch (error) {
    status(els.prayerStatus, error.message, true);
  }
}

function loadFromLocation() {
  if (!navigator.geolocation) {
    status(els.prayerStatus, "Location is not available in this browser. Please search by city.", true);
    return;
  }
  status(els.prayerStatus, "Asking for your location...");
  navigator.geolocation.getCurrentPosition(async ({ coords }) => {
    try {
      const data = await fetchPrayerTimes({ latitude: String(coords.latitude), longitude: String(coords.longitude), method: els.methodInput.value });
      renderPrayerTimes(data.timings, "your current location");
      renderQibla(coords.latitude, coords.longitude, "your current location");
      status(els.compassStatus, "Qibla is calculated. Tap live compass if you want the arrow to move with your phone.");
    } catch (error) {
      status(els.prayerStatus, error.message, true);
    }
  }, () => status(els.prayerStatus, "Location permission was not allowed. Please search by city and country.", true), {
    enableHighAccuracy: true,
    timeout: 9000,
    maximumAge: 300000,
  });
}

function deviceHeading(event) {
  if (typeof event.webkitCompassHeading === "number") return event.webkitCompassHeading;
  if (typeof event.alpha === "number") return normalize(360 - event.alpha);
  return null;
}

function handleOrientation(event) {
  if (currentQiblaDegree === null) return;
  const heading = deviceHeading(event);
  if (heading === null) {
    status(els.compassStatus, "This device is not sending compass heading data.", true);
    return;
  }
  els.qiblaNeedle.style.transform = `rotate(${normalize(currentQiblaDegree - heading)}deg)`;
  els.qiblaHint.textContent = `Turn the phone until the arrow points straight ahead. Phone heading: ${Math.round(heading)} degrees.`;
  status(els.compassStatus, "Live compass is active. Keep the phone flat and away from magnets.");
}

async function enableCompassSensor() {
  if (!window.DeviceOrientationEvent) throw new Error("Live compass is not available in this browser.");
  if (typeof DeviceOrientationEvent.requestPermission === "function") {
    const permission = await DeviceOrientationEvent.requestPermission();
    if (permission !== "granted") throw new Error("Motion and compass permission was not allowed.");
  }
  window.removeEventListener("deviceorientation", handleOrientation);
  window.addEventListener("deviceorientation", handleOrientation, true);
  liveCompassActive = true;
}

function startLiveCompass() {
  if (!navigator.geolocation) {
    status(els.compassStatus, "Location is not available in this browser.", true);
    return;
  }
  status(els.compassStatus, "Starting live compass...");
  navigator.geolocation.getCurrentPosition(async ({ coords }) => {
    renderQibla(coords.latitude, coords.longitude, "your live phone location");
    try {
      await enableCompassSensor();
      status(els.compassStatus, "Live compass is active. Rotate the phone to follow Qibla.");
    } catch (error) {
      liveCompassActive = false;
      status(els.compassStatus, error.message, true);
    }
  }, () => status(els.compassStatus, "Location permission was not allowed, so live Qibla cannot start.", true), {
    enableHighAccuracy: true,
    timeout: 9000,
    maximumAge: 60000,
  });
}

function setupDuaStore() {
  if (!els.duaPurchaseForm || !els.duaLanguage) return;
  if (els.duaPrice) els.duaPrice.textContent = duaStore.price;
  els.duaLanguage.addEventListener("change", () => {
    const ready = Boolean(duaStore.downloadLinks[els.duaLanguage.value]);
    status(els.purchaseStatus, ready
      ? "English 100 Hours Dua Practice is selected. Free download is ready."
      : "English 100 Hours Dua Practice is selected. If download is unavailable, email support@islamic-habits.com.");
  });
  els.duaPurchaseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const language = els.duaLanguage.value;
    const downloadLink = duaStore.downloadLinks[language];
    if (downloadLink) {
      window.location.href = downloadLink;
      return;
    }
    status(els.purchaseStatus, "The free PDF link is not available yet. Please email support@islamic-habits.com and we will send it manually.", true);
  });
}

function setupAdSense() {
  const client = String(siteConfig.adsenseClient || "").trim();
  if (!/^ca-pub-\d{10,}$/.test(client)) return;

  document.body.classList.add("ads-ready");
  const script = document.createElement("script");
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(client)}`;
  document.head.appendChild(script);
}

readState().forEach((habit) => {
  const input = els.habitInputs.find((item) => item.dataset.habit === habit);
  if (input) input.checked = true;
});
els.habitInputs.forEach((input) => input.addEventListener("change", updateProgress));
els.resetDay.addEventListener("click", () => {
  els.habitInputs.forEach((input) => {
    input.checked = false;
  });
  updateProgress();
});
els.moduleSearch.addEventListener("input", ({ target }) => {
  const query = target.value.trim().toLowerCase();
  renderModules(modules.filter((item) => [item.title, item.summary, item.label, item.level, ...item.tags].join(" ").toLowerCase().includes(query)));
});
els.moduleGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-module]");
  if (card) openModule(card.dataset.module);
});
els.layerGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-layer]");
  if (card) openCivilizationLayer(card.dataset.layer);
});
$$(".timeline [data-module]").forEach((button) => button.addEventListener("click", () => openModule(button.dataset.module)));
$$(".tab").forEach((tab) => tab.addEventListener("click", () => window.setFajrPanel(tab.dataset.panel, tab)));
els.closeDialog.addEventListener("click", () => els.moduleDialog.close());
els.prayerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = els.cityInput.value.trim();
  const country = els.countryInput.value.trim();
  if (!city || !country) {
    status(els.prayerStatus, "Please enter both city and country.", true);
    return;
  }
  loadByCity(city, country);
});
els.useLocation.addEventListener("click", loadFromLocation);
els.startCompass.addEventListener("click", startLiveCompass);
$$(".atlas-search").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = String(new FormData(form).get("query") || "").trim() || "Islamic history";
    const base = form.dataset.searchType === "books" ? "https://archive.org/search?query=" : "https://www.google.com/search?tbm=isch&q=";
    window.open(`${base}${encodeURIComponent(query)}`, "_blank", "noopener,noreferrer");
  });
});
els.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(els.form).get("email");
  if (!String(email).includes("@")) {
    els.formMessage.textContent = "Please enter a valid email address.";
    return;
  }
  els.form.reset();
  els.formMessage.textContent = "You're on the early access list. Insha'Allah, we'll keep you posted.";
});

renderModules();
renderFajrPanel("meaning");
setupDuaStore();
setupAdSense();
updateProgress();
status(els.prayerStatus, "Tap Use my location first for local Salah times, or search any city worldwide.");
status(els.compassStatus, "After location is allowed, live compass can follow the phone direction.");
