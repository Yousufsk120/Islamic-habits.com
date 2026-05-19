import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const blogDir = path.join(root, "blog");
const queuePath = path.join(root, "content", "blog-queue.json");
const postsPath = path.join(blogDir, "posts.json");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function todayInKolkata() {
  if (process.env.BLOG_DATE) return process.env.BLOG_DATE;
  const parts = new Intl.DateTimeFormat("en", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(new Date());
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${map.year}-${map.month}-${map.day}`;
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeZone: "Asia/Kolkata"
  }).format(new Date(`${date}T00:00:00+05:30`));
}

async function readJson(file, fallback) {
  try {
    return JSON.parse(await readFile(file, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return fallback;
    throw error;
  }
}

function buildPostHtml(post, item) {
  const sections = item.sections
    .map(
      (section) => `
        <section class="article-section">
          <h2>${escapeHtml(section.heading)}</h2>
          <p>${escapeHtml(section.body)}</p>
        </section>`
    )
    .join("\n");

  const actions = item.actions
    .map((action) => `<li>${escapeHtml(action)}</li>`)
    .join("\n");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(item.title)} | Islamic Habits Blog</title>
    <meta name="description" content="${escapeHtml(item.summary)}">
    <link rel="stylesheet" href="../styles.css">
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18157183110"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18157183110');
    </script>
  </head>
  <body>
    <div class="site-shell blog-shell">
      <header class="app-header">
        <a class="brand" href="../index.html#top" aria-label="Islamic Habits home">
          <img class="brand-mark" src="../assets/islamic-habits-logo-kaaba-bayt-al-mamur.svg" alt="">
          <span><strong>Islamic Habits</strong><small>Daily practice blog</small></span>
        </a>
        <nav class="nav" aria-label="Blog navigation">
          <a href="../index.html#product-catalogue">Shop</a>
          <a href="./index.html">Blog</a>
          <a href="../index.html#world-tools">World tools</a>
        </nav>
      </header>

      <main>
        <article class="article-shell">
          <a class="back-link" href="./index.html">Back to all blog posts</a>
          <p class="eyebrow">${escapeHtml(item.category)} • ${escapeHtml(formatDate(post.date))}</p>
          <h1>${escapeHtml(item.title)}</h1>
          <p class="article-summary">${escapeHtml(item.summary)}</p>
          <blockquote>
            <p>${escapeHtml(item.quote)}</p>
            <cite>${escapeHtml(item.quoteSource)}</cite>
          </blockquote>
          ${sections}
          <section class="article-section practice-actions">
            <h2>Practice today</h2>
            <ul>${actions}</ul>
          </section>
          <p class="article-note">
            Islamic Habits articles are practical reminders for habit building. For detailed fiqh rulings, ask qualified scholars in your locality.
          </p>
        </article>
      </main>
    </div>
  </body>
</html>
`;
}

function buildBlogIndex(posts) {
  const cards = posts
    .map(
      (post) => `
        <article class="post-card">
          <p class="eyebrow">${escapeHtml(post.category)} • ${escapeHtml(formatDate(post.date))}</p>
          <h2><a href="./${escapeHtml(post.file)}">${escapeHtml(post.title)}</a></h2>
          <p>${escapeHtml(post.summary)}</p>
          <a class="text-link" href="./${escapeHtml(post.file)}">Read article</a>
        </article>`
    )
    .join("\n");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daily Islamic Habits Blog</title>
    <meta name="description" content="One practical Islamic Habits article each day for Salah, dua, dhikr, family, self discipline, and young Muslim practice.">
    <link rel="stylesheet" href="../styles.css">
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18157183110"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18157183110');
    </script>
  </head>
  <body>
    <div class="site-shell blog-shell">
      <header class="app-header">
        <a class="brand" href="../index.html#top" aria-label="Islamic Habits home">
          <img class="brand-mark" src="../assets/islamic-habits-logo-kaaba-bayt-al-mamur.svg" alt="">
          <span><strong>Islamic Habits</strong><small>Daily practice blog</small></span>
        </a>
        <nav class="nav" aria-label="Blog navigation">
          <a href="../index.html#console">Console</a>
          <a href="../index.html#product-catalogue">Shop</a>
          <a href="../index.html#world-tools">World tools</a>
          <a href="../index.html#civilization">Civilization</a>
        </nav>
      </header>

      <main>
        <section class="blog-archive">
          <div class="section-heading wide">
            <p class="eyebrow">Daily Islamic Habits Blog</p>
            <h1>One practical reminder every day.</h1>
            <p>
              Short, useful articles for Salah, duas, Sunnah products, family practice,
              self discipline, and the spiritual architecture of a Muslim day.
            </p>
          </div>
          <div class="post-grid">
            ${cards || "<p>No posts have been published yet.</p>"}
          </div>
        </section>
      </main>
    </div>
  </body>
</html>
`;
}

function buildSitemap(posts) {
  const urls = [
    "https://islamic-habits.com/",
    "https://islamic-habits.com/blog/",
    "https://islamic-habits.com/privacy",
    "https://islamic-habits.com/terms",
    "https://islamic-habits.com/contact",
    ...posts.map((post) => `https://islamic-habits.com/blog/${post.file}`)
  ];

  const entries = urls
    .map((url) => `  <url>\n    <loc>${escapeHtml(url)}</loc>\n  </url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}

async function main() {
  await mkdir(blogDir, { recursive: true });
  const queue = await readJson(queuePath, []);
  if (!queue.length) throw new Error("content/blog-queue.json has no blog topics.");

  const date = todayInKolkata();
  const existingFiles = new Set(await readdir(blogDir).catch(() => []));
  const dayNumber = Math.floor(new Date(`${date}T00:00:00Z`).getTime() / 86400000);
  const item = queue[dayNumber % queue.length];
  const file = `${date}-${slugify(item.title)}.html`;
  const posts = await readJson(postsPath, []);

  if (!existingFiles.has(file)) {
    const post = {
      date,
      file,
      title: item.title,
      category: item.category,
      summary: item.summary
    };
    await writeFile(path.join(blogDir, file), buildPostHtml(post, item));
    posts.unshift(post);
  }

  const uniquePosts = Array.from(
    new Map(posts.map((post) => [post.file, post])).values()
  ).sort((a, b) => b.date.localeCompare(a.date));

  await writeFile(postsPath, `${JSON.stringify(uniquePosts, null, 2)}\n`);
  await writeFile(path.join(blogDir, "index.html"), buildBlogIndex(uniquePosts));
  await writeFile(path.join(root, "sitemap.xml"), buildSitemap(uniquePosts));
  console.log(`Daily blog ready for ${date}: ${file}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
