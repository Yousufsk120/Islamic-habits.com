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

function isoDate(date) {
  return `${date}T00:00:00+05:30`;
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
  const canonicalUrl = `https://islamic-habits.com/blog/${post.file}`;
  const imageUrl = "https://islamic-habits.com/assets/islamic-habits-logo-kaaba-bayt-al-mamur.png";
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
    <meta name="robots" content="index, follow">
    <meta name="googlebot" content="index, follow, max-image-preview:large">
    <link rel="canonical" href="${canonicalUrl}">
    <meta property="og:title" content="${escapeHtml(item.title)} | Islamic Habits Blog">
    <meta property="og:description" content="${escapeHtml(item.summary)}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:image" content="${imageUrl}">
    <meta property="og:image:alt" content="Islamic Habits logo">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(item.title)} | Islamic Habits Blog">
    <meta name="twitter:description" content="${escapeHtml(item.summary)}">
    <meta name="twitter:image" content="${imageUrl}">
    <link rel="stylesheet" href="../styles.css">
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18157183110"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18157183110');
    </script>
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "${escapeHtml(item.title)}",
        "description": "${escapeHtml(item.summary)}",
        "url": "${canonicalUrl}",
        "datePublished": "${isoDate(post.date)}",
        "dateModified": "${isoDate(post.date)}",
        "inLanguage": "en",
        "author": {
          "@type": "Organization",
          "name": "Islamic Habits"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Islamic Habits",
          "logo": {
            "@type": "ImageObject",
            "url": "${imageUrl}"
          }
        }
      }
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
          <header class="article-hero">
            <a class="back-link" href="./index.html">Back to all blog posts</a>
            <p class="eyebrow">${escapeHtml(item.category)} • ${escapeHtml(formatDate(post.date))}</p>
            <h1>${escapeHtml(item.title)}</h1>
            <p class="article-summary">${escapeHtml(item.summary)}</p>
            <div class="read-meter" aria-label="Article rhythm">
              <span>Daily reminder</span>
              <span>3 minute read</span>
              <span>Practice today</span>
            </div>
            <blockquote>
              <p>${escapeHtml(item.quote)}</p>
              <cite>${escapeHtml(item.quoteSource)}</cite>
            </blockquote>
          </header>
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

function postToIssueCard(post) {
  return `
        <article class="post-card">
          <p class="eyebrow">${escapeHtml(post.category)} • ${escapeHtml(formatDate(post.date))}</p>
          <h2><a href="./${escapeHtml(post.file)}">${escapeHtml(post.title)}</a></h2>
          <p>${escapeHtml(post.summary)}</p>
          <a class="text-link" href="./${escapeHtml(post.file)}">Read article</a>
        </article>`;
}

function buildBlogIndex(posts) {
  const latest = posts[0];
  const cards = posts.map(postToIssueCard).join("\n");
  const imageUrl = "https://islamic-habits.com/assets/islamic-habits-logo-kaaba-bayt-al-mamur.png";

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daily Islamic Habits Blog</title>
    <meta name="description" content="One practical Islamic Habits article each day for Salah, dua, dhikr, family, self discipline, and young Muslim practice.">
    <meta name="robots" content="index, follow">
    <meta name="googlebot" content="index, follow, max-image-preview:large">
    <link rel="canonical" href="https://islamic-habits.com/blog/">
    <meta property="og:title" content="Daily Islamic Habits Blog">
    <meta property="og:description" content="One practical Islamic Habits article each day for Salah, dua, dhikr, family, self discipline, and young Muslim practice.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://islamic-habits.com/blog/">
    <meta property="og:image" content="${imageUrl}">
    <meta property="og:image:alt" content="Islamic Habits logo">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Daily Islamic Habits Blog">
    <meta name="twitter:description" content="One practical Islamic Habits article each day for Salah, dua, dhikr, family, self discipline, and young Muslim practice.">
    <meta name="twitter:image" content="${imageUrl}">
    <link rel="stylesheet" href="../styles.css">
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18157183110"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18157183110');
    </script>
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Daily Islamic Habits Blog",
        "url": "https://islamic-habits.com/blog/",
        "description": "One practical Islamic Habits article each day for Salah, dua, dhikr, family, self discipline, and young Muslim practice.",
        "publisher": {
          "@type": "Organization",
          "name": "Islamic Habits",
          "logo": {
            "@type": "ImageObject",
            "url": "${imageUrl}"
          }
        }
      }
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
          <div class="blog-archive-hero">
            <div>
              <p class="eyebrow">Daily Islamic Habits Blog</p>
              <h1>A fresh practice letter every morning.</h1>
              <p>
                Short, useful articles for Salah, duas, Sunnah products, family practice,
                self discipline, and the spiritual architecture of a Muslim day. The journal
                is automatically refreshed daily from the Islamic Habits topic queue.
              </p>
              <div class="blog-rhythm" aria-label="Blog rhythm">
                <span><strong>Daily</strong> auto-published</span>
                <span><strong>8 AM</strong> India time</span>
                <span><strong>1</strong> habit step</span>
              </div>
            </div>
            <div class="reading-compass" aria-hidden="true">
              <span>Salah</span>
              <span>Dua</span>
              <span>Self</span>
              <span>Family</span>
            </div>
          </div>
          ${latest ? `
          <article class="journal-feature">
            <p class="eyebrow">${escapeHtml(latest.category)} • Latest issue</p>
            <h2><a href="./${escapeHtml(latest.file)}">${escapeHtml(latest.title)}</a></h2>
            <p>${escapeHtml(latest.summary)}</p>
            <a class="button primary" href="./${escapeHtml(latest.file)}">Read the latest article</a>
          </article>` : ""}
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
    { loc: "https://islamic-habits.com/", lastmod: todayInKolkata() },
    { loc: "https://islamic-habits.com/blog/", lastmod: todayInKolkata() },
    { loc: "https://islamic-habits.com/privacy", lastmod: "2026-05-30" },
    { loc: "https://islamic-habits.com/terms", lastmod: "2026-05-30" },
    { loc: "https://islamic-habits.com/refund", lastmod: "2026-05-30" },
    { loc: "https://islamic-habits.com/contact", lastmod: "2026-05-30" },
    { loc: "https://islamic-habits.com/dua-practice", lastmod: "2026-05-21" },
    { loc: "https://islamic-habits.com/quranic-600-words", lastmod: todayInKolkata() },
    ...posts.map((post) => ({
      loc: `https://islamic-habits.com/blog/${post.file}`,
      lastmod: post.date
    }))
  ];

  const entries = urls
    .map(
      ({ loc, lastmod }) =>
        `  <url>\n    <loc>${escapeHtml(loc)}</loc>\n    <lastmod>${escapeHtml(lastmod)}</lastmod>\n  </url>`
    )
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

  const post = {
    date,
    file,
    title: item.title,
    category: item.category,
    summary: item.summary
  };

  await writeFile(path.join(blogDir, file), buildPostHtml(post, item));
  if (!existingFiles.has(file) && !posts.some((existing) => existing.file === file)) {
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
