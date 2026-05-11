const storageKey = "islamic-habits-today";
const todayKey = new Date().toISOString().slice(0, 10);

const modules = [
  {
    id: "fajr",
    label: "Salah",
    level: "Core",
    title: "Fajr Salah Mastery",
    summary: "Wake with intention, pray the two Sunnah rak'ahs, protect Fajr, sit in remembrance, and begin the day before the world becomes loud.",
    tags: ["Fajr", "Sunnah", "duas", "sleep", "morning"],
    actions: ["Sleep with a clear alarm plan and intention.", "Pray the two Sunnah rak'ahs before Fajr when possible.", "Stay seated after Fajr for Qur'an, dhikr, dua, or planning.", "Attach one growth block after Fajr: study, work, writing, or movement."],
    evidence: ["Qur'an 17:78 describes the dawn recitation as witnessed.", "Sahih Muslim 725a reports the virtue of the two Sunnah rak'ahs before Fajr.", "Sahih Muslim 657b mentions the protection connected to the morning prayer."]
  },
  {
    id: "dhuhr",
    label: "Salah",
    level: "Anchor",
    title: "Dhuhr Workday Reset",
    summary: "A midday interruption that protects the heart from being fully absorbed by work, school, meetings, or business.",
    tags: ["Dhuhr", "focus", "work", "wudu"],
    actions: ["Block a fixed prayer window before the day begins.", "Use wudu as a nervous-system reset.", "Review the tongue and restart the afternoon with intention.", "Return to work with one clear priority."],
    evidence: ["Qur'an 4:103 teaches that prayer is prescribed at appointed times.", "Sahih Muslim 233c describes the five prayers as expiation when major sins are avoided."]
  },
  {
    id: "asr",
    label: "Salah",
    level: "Discipline",
    title: "Asr Discipline Window",
    summary: "The late-day prayer trains urgency, restraint, and accountability when energy is lower and distractions are stronger.",
    tags: ["Asr", "discipline", "energy", "accountability"],
    actions: ["Treat Asr as the afternoon checkpoint.", "Review one obligation you are delaying.", "Avoid the late-day drift into reactive scrolling.", "Prepare Maghrib before Maghrib arrives."],
    evidence: ["Qur'an 2:238 emphasizes guarding the prayers, especially the middle prayer.", "Narrations mention the transition of angels around Fajr and Asr."]
  },
  {
    id: "maghrib",
    label: "Family",
    level: "Reset",
    title: "Maghrib Home Reset",
    summary: "Use sunset to shift from public productivity into gratitude, family attention, food adab, and evening remembrance.",
    tags: ["Maghrib", "family", "gratitude", "evening"],
    actions: ["Pray before the evening becomes entertainment-first.", "Share one kind word or service at home.", "Eat with Bismillah, moderation, and gratitude.", "Begin evening adhkar if not completed earlier."],
    evidence: ["Qur'an 33:41-42 calls believers to remember Allah abundantly and glorify Him morning and evening."]
  },
  {
    id: "isha",
    label: "Sleep",
    level: "Closure",
    title: "Isha and Night Closure",
    summary: "Close the day with prayer, tawbah, gratitude, screen boundaries, and preparation for Fajr.",
    tags: ["Isha", "sleep", "tawbah", "screens", "tomorrow"],
    actions: ["Pray Isha before the night fragments into distraction.", "Do a two-minute tawbah and gratitude review.", "Place the phone away from the bed.", "Prepare clothes, alarm, and intention for Fajr."],
    evidence: ["The five prayers form a repeated path of purification and return."]
  },
  {
    id: "quran",
    label: "Qur'an",
    level: "Daily",
    title: "Qur'an Connection",
    summary: "A sustainable relationship with Qur'an: recitation, listening, memorization, understanding, and action.",
    tags: ["Qur'an", "reflection", "memorization", "tilawah"],
    actions: ["Choose a minimum too small to quit: five lines, five minutes, or one ayah.", "Pair reading with Fajr or after Isha.", "Write one action from what you read.", "Listen during commute if reading is not possible."],
    evidence: ["The dawn recitation is singled out in Qur'an 17:78."]
  },
  {
    id: "adhkar",
    label: "Dhikr",
    level: "Heart",
    title: "Morning and Evening Adhkar",
    summary: "A shield for the heart through remembrance, gratitude, protection duas, and repeated return to Allah.",
    tags: ["dhikr", "duas", "morning", "evening"],
    actions: ["Create a fixed adhkar place: prayer mat, commute, walk, or desk.", "Start with three reliable duas and expand slowly.", "Track completion, not emotional intensity.", "Keep a scholar-reviewed adhkar source nearby."],
    evidence: ["Qur'an 33:41-42 commands abundant remembrance in morning and evening."]
  },
  {
    id: "speech",
    label: "Character",
    level: "Akhlaq",
    title: "Clean Speech Protocol",
    summary: "Guard the tongue from gossip, mockery, anger, lying, useless debate, and digital impulsiveness.",
    tags: ["akhlaq", "speech", "anger", "social media"],
    actions: ["Pause before replying when emotionally charged.", "Ask: is it true, needed, kind, and pleasing to Allah?", "Replace one complaint with a dua.", "Leave one argument even when you could win it."],
    evidence: ["Good character is central to Muslim excellence."]
  },
  {
    id: "body",
    label: "Health",
    level: "Amanah",
    title: "Body as Amanah",
    summary: "Movement, sleep, food discipline, cleanliness, and energy management as worship-supporting habits.",
    tags: ["health", "sleep", "food", "fitness", "cleanliness"],
    actions: ["Walk ten minutes after one prayer.", "Stop eating before heaviness.", "Protect sleep because Fajr begins the night before.", "Keep the prayer space clean and ready."],
    evidence: ["Islamic adab connects worship with cleanliness, moderation, and responsibility."]
  },
  {
    id: "family",
    label: "Family",
    level: "Circle",
    title: "Family Barakah Circle",
    summary: "A shared home practice system for parents, spouses, children, siblings, and elders: prayer, kindness, Qur'an, service, and screen boundaries.",
    tags: ["family", "children", "home", "service", "barakah"],
    actions: ["Choose one family anchor after Maghrib or Isha.", "Make one shared dua for the home each day.", "Create a small kindness challenge for children or siblings.", "Review phone boundaries so the home does not become emotionally absent."],
    evidence: ["Islamic practice appears in mercy, service, adab, and responsibility at home."]
  },
  {
    id: "ummah",
    label: "Ummah",
    level: "Service",
    title: "Ummah Service Challenges",
    summary: "Turn personal discipline outward through giving, neighbor rights, masjid participation, useful knowledge, and quiet acts of benefit.",
    tags: ["service", "charity", "masjid", "neighbors", "community"],
    actions: ["Help one person daily without needing recognition.", "Schedule weekly sadaqah, even if small.", "Attend or support one masjid/community activity.", "Learn one skill that increases your benefit to people."],
    evidence: ["The best habit systems create people who are useful, merciful, and trustworthy."]
  },
  {
    id: "civilization",
    label: "Civilization",
    level: "Vision",
    title: "Future Islamic Practice Civilization",
    summary: "A long-range practice map connecting worship, knowledge, family resilience, ethical work, leadership, and community benefit.",
    tags: ["vision", "knowledge", "leadership", "work", "civilization"],
    actions: ["Tie one worship habit to one excellence habit.", "Track knowledge, health, family, and service alongside Salah.", "Build routines that survive exams, work pressure, travel, and low iman days.", "Use progress to return to Allah, not to perform for people."],
    evidence: ["Salah gives sacred structure to time. Character and service carry that structure into public life."]
  }
];

const fajrPanels = {
  meaning: {
    title: "Why Fajr is a life-shaping habit",
    intro: "Fajr is not only an early prayer. It is a daily proof that the servant can rise before comfort, meet Allah before the marketplace, and begin from obedience instead of reaction.",
    cards: [["Spiritual meaning", "Fajr places Allah first in the day: wudu, qiblah, recitation, sujud, and dependence before messages or tasks."], ["Qur'anic frame", "Qur'an 17:78 highlights the recitation of dawn as witnessed, connected by scholars to the gathering of angels at Fajr."], ["Habit psychology", "A strong morning anchor reduces negotiation. Once Fajr is fixed, Qur'an, study, work, exercise, and family planning can attach to it."], ["Identity", "The Fajr person trains a quiet identity: I can obey before I feel ready, and my day does not belong only to mood."]]
  },
  sunnah: {
    title: "Sunnah and prophetic pattern around Fajr",
    intro: "The Sunnah turns Fajr into a complete routine: preparation the night before, two Sunnah rak'ahs, the obligatory prayer, remembrance, and a calm start.",
    cards: [["Two Sunnah rak'ahs", "Sahih Muslim 725a reports that the two rak'ahs before Fajr are better than the world and what it contains."], ["Fajr in congregation", "For men who are able, congregation is a major goal. For women and those at home, protect the time, focus, and sacredness of the prayer."], ["Sitting after prayer", "Reports describe the Prophet ﷺ remaining seated after Fajr until the sun had risen. This can become a protected block for dhikr and Qur'an."], ["No rush into noise", "The prophetic feel is not frantic productivity. It is worship first, then useful work from a quieter heart."]]
  },
  after: {
    title: "What to do after Fajr",
    intro: "After Fajr is one of the most valuable habit windows. Keep it simple enough to repeat even when energy is low.",
    cards: [["Minimum routine", "Stay seated for three minutes: istighfar, gratitude, one dua, and one clear intention for the day."], ["Strong routine", "Read Qur'an, complete morning adhkar, review tasks, and do one deep-work block before social apps."], ["Family routine", "If you have children or family duties, make the post-Fajr habit smaller: one page, one dua, or a walk with dhikr."], ["Avoid", "Do not let Fajr become a checkbox followed immediately by endless scrolling. The first input often shapes the whole day."]]
  },
  duas: {
    title: "Duas and remembrance to attach to Fajr",
    intro: "Use reliable adhkar collections for full wording and transliteration. The future app should include Arabic, transliteration, translation, audio, and source grading.",
    cards: [["Beneficial knowledge", "A common morning dua asks Allah for beneficial knowledge, good provision, and accepted deeds."], ["Istighfar", "Begin with repentance. It softens the heart and prevents yesterday's failure from becoming today's identity."], ["Protection adhkar", "Morning remembrance includes protection, tawhid, gratitude, and reliance. Add one new dua only after the current set is stable."], ["Personal dua", "Make one concrete dua for faith, family, livelihood, health, and the next right action."]]
  },
  companions: {
    title: "Sahabah and early Muslim habit lessons",
    intro: "The Sahabah were not casual about anchors of worship. Their lives show urgency, obedience, courage, service, and remembrance connected to prayer.",
    cards: [["Abu Hurairah رضي الله عنه", "Many Fajr-related narrations come through Abu Hurairah رضي الله عنه, including reports about angels gathering at the morning prayer."], ["A'ishah رضي الله عنها", "The narration about the two Sunnah rak'ahs of Fajr being better than the world comes through A'ishah رضي الله عنها."], ["Jabir ibn Samurah رضي الله عنه", "He reported the Prophet's ﷺ practice of remaining seated after Fajr until sunrise had become bright."], ["Practical lesson", "Convert every example into tracked action: show up, stay after prayer, remember Allah, serve people."]]
  },
  plan: {
    title: "A 30-day Fajr habit plan",
    intro: "Make the plan realistic. The goal is not a dramatic week. The goal is becoming a person who returns every morning.",
    cards: [["Days 1-7", "Sleep earlier, set alarms away from the bed, make wudu, and pray Fajr before sunrise. Track only completion."], ["Days 8-14", "Add the two Sunnah rak'ahs before Fajr. If missed, do not spiral. Return the next day."], ["Days 15-21", "Stay for five to ten minutes. Complete a small dhikr and Qur'an routine."], ["Days 22-30", "Add exercise, study, writing, business planning, or memorization after remembrance. Worship remains the anchor."]]
  }
};

const sources = [
  ["Qur'an 17:78 on the witnessed dawn recitation", "https://previous.quran.com/17/78"],
  ["Sahih Muslim 725a on the two Sunnah rak'ahs before Fajr", "https://sunnah.com/muslim:725a"],
  ["Sahih Muslim 657b on the morning prayer and Allah's protection", "https://sunnah.com/search?q=Whoever+prays+Fajr+is+under+the+protection+of+Allaah"],
  ["Sahih Muslim 233c on the five prayers as expiation", "https://sunnah.com/muslim/2/19"],
  ["IslamQA summary on sitting after Fajr until sunrise", "https://islamqa.info/en/answers/100009"]
];

const habitInputs = Array.from(document.querySelectorAll("[data-habit]"));
const progressNumber = document.querySelector("#progressNumber");
const heroPercent = document.querySelector("#heroPercent");
const heroRing = document.querySelector("#heroRing");
const barValue = document.querySelector("#barValue");
const resetDay = document.querySelector("#resetDay");
const moduleGrid = document.querySelector("#moduleGrid");
const moduleSearch = document.querySelector("#moduleSearch");
const moduleDialog = document.querySelector("#moduleDialog");
const moduleDetail = document.querySelector("#moduleDetail");
const detailPanel = document.querySelector("#detailPanel");
const form = document.querySelector(".signup");
const formMessage = document.querySelector("#formMessage");

function readState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return saved.date === todayKey ? saved.completed || [] : [];
  } catch {
    return [];
  }
}

function writeState(completed) {
  localStorage.setItem(storageKey, JSON.stringify({ date: todayKey, completed }));
}

function updateProgress() {
  const completed = habitInputs.filter((input) => input.checked).map((input) => input.dataset.habit);
  const percent = Math.round((completed.length / habitInputs.length) * 100);
  const circumference = 302;
  progressNumber.textContent = `${percent}%`;
  heroPercent.textContent = `${percent}%`;
  heroRing.style.strokeDashoffset = String(circumference - (circumference * percent) / 100);
  barValue.style.width = `${percent}%`;
  writeState(completed);
}

function renderModules(list = modules) {
  moduleGrid.innerHTML = list.map((module) => `
    <button class="module-card" type="button" data-module="${module.id}">
      <span>
        <span class="module-kicker"><span>${module.label}</span><small>${module.level}</small></span>
        <h3>${module.title}</h3>
        <p>${module.summary}</p>
      </span>
      <span class="chip-row">${module.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}</span>
    </button>
  `).join("");
}

function sourceMarkup() {
  return `<ul class="source-list">${sources.map(([label, url]) => `<li><a href="${url}" target="_blank" rel="noreferrer">${label}</a></li>`).join("")}</ul>`;
}

function openModule(id) {
  const module = modules.find((item) => item.id === id) || modules[0];
  moduleDetail.innerHTML = `
    <article class="module-body">
      <p class="eyebrow">${module.label} module</p>
      <h2>${module.title}</h2>
      <p>${module.summary}</p>
      <div class="modal-meta">${module.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}</div>
      <div class="content-grid">
        <section class="content-card"><strong>Action protocol</strong><ul>${module.actions.map((action) => `<li>${action}</li>`).join("")}</ul></section>
        <section class="content-card"><strong>Evidence and meaning</strong><ul>${module.evidence.map((item) => `<li>${item}</li>`).join("")}</ul></section>
        <section class="content-card"><strong>Future app features</strong><ul><li>Guided checklist with streak recovery.</li><li>Arabic, transliteration, translation, and audio where duas are included.</li><li>Notes, reminders, and family accountability circles.</li></ul></section>
        <section class="content-card"><strong>Experience layer</strong><ul><li>Short lessons and quick wins without making worship feel like a game.</li><li>Progress that rewards return, not perfection.</li><li>Shareable challenges for friends, siblings, and halaqah groups.</li></ul></section>
      </div>
      ${module.id === "fajr" ? sourceMarkup() : ""}
    </article>`;
  moduleDialog.showModal();
}

function renderFajrPanel(key) {
  const panel = fajrPanels[key] || fajrPanels.meaning;
  detailPanel.innerHTML = `
    <p class="eyebrow">Fajr blueprint</p>
    <h3>${panel.title}</h3>
    <p>${panel.intro}</p>
    <div class="content-grid">${panel.cards.map(([title, body]) => `<section class="content-card"><strong>${title}</strong><p>${body}</p></section>`).join("")}</div>
    ${sourceMarkup()}`;
}

window.setFajrPanel = (key, activeTab) => {
  document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
  if (activeTab) activeTab.classList.add("active");
  renderFajrPanel(key);
};

readState().forEach((habit) => {
  const input = habitInputs.find((item) => item.dataset.habit === habit);
  if (input) input.checked = true;
});
habitInputs.forEach((input) => input.addEventListener("change", updateProgress));
resetDay.addEventListener("click", () => {
  habitInputs.forEach((input) => { input.checked = false; });
  updateProgress();
});
moduleSearch.addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();
  const filtered = modules.filter((module) => [module.title, module.summary, module.label, module.level, ...module.tags].join(" ").toLowerCase().includes(query));
  renderModules(filtered);
});
moduleGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-module]");
  if (card) openModule(card.dataset.module);
});
document.querySelectorAll(".timeline [data-module]").forEach((button) => button.addEventListener("click", () => openModule(button.dataset.module)));
document.querySelectorAll(".tab").forEach((tab) => tab.addEventListener("click", () => window.setFajrPanel(tab.dataset.panel, tab)));
document.querySelector(".close-dialog").addEventListener("click", () => moduleDialog.close());
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(form).get("email");
  if (!String(email).includes("@")) {
    formMessage.textContent = "Please enter a valid email address.";
    return;
  }
  form.reset();
  formMessage.textContent = "You're on the early access list. Insha'Allah, we'll keep you posted.";
});

renderModules();
renderFajrPanel("meaning");
updateProgress();
