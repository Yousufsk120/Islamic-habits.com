from html import escape
from pathlib import Path
import re


ROOT = Path(__file__).resolve().parents[1]
MANUAL_DIR = ROOT / "products" / "dua-manuals"
OUT_DIR = MANUAL_DIR / "polished-html"
SUPPORT_EMAIL = "support@islamic-habits.com"


CONFIGS = {
    "arabic": {
        "source": MANUAL_DIR / "100-duas-arabic-complete-translation.txt",
        "output": "100-duas-arabic-polished.html",
        "lang": "ar",
        "dir": "rtl",
        "title": "دليل ممارسة 100 دعاء",
        "subtitle": "مختارات من القرآن والحديث الصحيح",
        "edition": "النسخة العربية المميزة",
        "review_title": "ملاحظة مراجعة تحريرية",
        "review_body": (
            "هذا الدليل أُعد كنسخة ممارسة منظمة من مواد مصدرية مستخرجة ومترجمة. "
            "لم ننسب نصا أو حديثا أو مرجعا بلا مراجعة؛ ويجب اعتماد النص النهائي من مراجع مؤهل قبل النشر التجاري."
        ),
        "toc": "الفهرس",
        "intro_title": "1. طريقة استخدام هذا الدليل",
        "intro": (
            "هذا ليس مجرد فهرس أدعية، بل برنامج عملي من Islamic Habits لتحويل الدعاء إلى عادة يومية واعية: تعلم، تكرار، تطبيق، ثم تعليم."
        ),
        "adab_title": "2. آداب الدعاء",
        "method_title": "3. طريقة الحفظ والممارسة اليومية",
        "modules_title": "4. الوحدات الثمانية",
        "lessons_title": "5. الدروس الكاملة",
        "plan_title": "6. خطة تطبيق 8 أسابيع",
        "labels": {
            "arabic": "النص العربي",
            "meaning": "المعنى",
            "reference": "المرجع",
            "when": "متى يقال",
            "benefit": "الفائدة / التطبيق",
        },
        "adab_items": [
            "ابدأ بالإخلاص والخشوع.",
            "احمد الله وصل على النبي محمد ﷺ.",
            "ادع بيقين وصبر ورزق حلال وقلب حاضر.",
            "اغتنم أوقات الإجابة مثل السجود، والثلث الأخير من الليل، وما بين الأذان والإقامة.",
        ],
        "method_items": [
            ("تعلم", "افهم المعنى والسياق."),
            ("كرر", "اقرأ النص العربي بعناية حتى يألفه اللسان."),
            ("طبق", "استعمل الدعاء في موضعه من الحياة اليومية."),
            ("علم", "شاركه مع الأسرة أو حلقة العلم."),
        ],
        "plan_headers": ("الأسبوع", "التركيز", "التطبيق"),
        "plan_rows": [
            ("1", "الدروس 1-10", "التوبة، التوحيد، وثبات القلب."),
            ("2", "الدروس 11-30", "أدعية القرآن بعد الصلاة وفي الحاجات اليومية."),
            ("3", "الدروس 31-40", "أدعية الأنبياء للشجاعة والشكر والأسرة."),
            ("4", "الدروس 41-55", "أدعية الصلاة وما بعدها."),
            ("5", "الدروس 56-70", "أذكار الصباح والمساء والنوم."),
            ("6", "الدروس 71-80", "البيت والزواج والأولاد وبركة الأسرة."),
            ("7", "الدروس 81-90", "الشدة والخوف والدين والمرض والسفر."),
            ("8", "الدروس 91-100", "الرزق والعلم والآخرة والجنة والمراجعة النهائية."),
        ],
        "field_names": {
            "arabic": "العربية",
            "meaning": "المعنى",
            "reference": "المرجع",
            "when": "متى يقال",
            "benefit": "الفائدة",
        },
        "module_names": [
            "التوحيد، التوبة، والاستغفار",
            "أدعية قرآنية ربانية",
            "أدعية الأنبياء",
            "أدعية داخل الصلاة وبعدها",
            "أذكار الصباح والمساء",
            "النوم، البيت، الأسرة، والأولاد",
            "الشدة، الخوف، الدين، والهم",
            "الرزق، العلم، الآخرة، والجنة",
        ],
    },
    "japanese": {
        "source": MANUAL_DIR / "100-duas-japanese-complete-translation.txt",
        "output": "100-duas-japanese-polished.html",
        "lang": "ja",
        "dir": "ltr",
        "title": "100時間ドゥアー実践ガイド",
        "subtitle": "クルアーンと真正ハディースからの選集",
        "edition": "プレミアム日本語版",
        "review_title": "編集レビュー注記",
        "review_body": (
            "このガイドは、抽出済み資料と翻訳原稿をもとに実践用へ整えた初期版です。"
            "アラビア語本文、出典、ハディース評価、日本語表現は、有料公開前に必ず有識者が確認してください。"
        ),
        "toc": "目次",
        "intro_title": "1. このガイドの使い方",
        "intro": (
            "これは単なるドゥアー一覧ではありません。Islamic Habits が、ドゥアーを日々の実践習慣へ変えるために設計した100時間の実践フレームです。"
        ),
        "adab_title": "2. ドゥアーの礼儀",
        "method_title": "3. 毎日の暗記と実践方法",
        "modules_title": "4. 8つのモジュール",
        "lessons_title": "5. 全100レッスン",
        "plan_title": "6. 8週間の実践計画",
        "labels": {
            "arabic": "アラビア語",
            "meaning": "意味",
            "reference": "出典",
            "when": "読む場面",
            "benefit": "実践メモ",
        },
        "adab_items": [
            "誠実さと謙虚さをもって始める。",
            "アッラーを称賛し、預言者ムハンマド ﷺ へサラワートを送る。",
            "確信、忍耐、ハラールの糧、そして集中した心で願う。",
            "サジュダ中、夜の最後の三分の一、アザーンとイカーマの間など、祝福された時間を活用する。",
        ],
        "method_items": [
            ("学ぶ", "意味と使う場面を理解する。"),
            ("繰り返す", "アラビア語を丁寧に読み、口になじませる。"),
            ("実践する", "日常の正しい場面でそのドゥアーを使う。"),
            ("教える", "家族や学びの場で共有し、記憶と実践を強める。"),
        ],
        "plan_headers": ("週", "重点", "実践"),
        "plan_rows": [
            ("1", "レッスン 1-10", "悔い改め、タウヒード、心の安定。"),
            ("2", "レッスン 11-30", "礼拝後と日々の必要に使うクルアーンのドゥアー。"),
            ("3", "レッスン 31-40", "勇気、感謝、家族のための預言者たちのドゥアー。"),
            ("4", "レッスン 41-55", "礼拝中と礼拝後のドゥアー。"),
            ("5", "レッスン 56-70", "朝、夕方、睡眠の守り。"),
            ("6", "レッスン 71-80", "家、結婚、子ども、家庭のバラカ。"),
            ("7", "レッスン 81-90", "苦難、恐怖、借金、病、旅。"),
            ("8", "レッスン 91-100", "糧、知識、来世、楽園、最終復習。"),
        ],
        "field_names": {
            "arabic": "アラビア語",
            "meaning": "意味",
            "reference": "出典",
            "when": "読む場面",
            "benefit": "実践メモ",
        },
        "module_names": [
            "タウヒード、悔い改め、イスティグファール",
            "クルアーンの主への祈り",
            "預言者たちのドゥアー",
            "礼拝中と礼拝後のドゥアー",
            "朝夕のアズカール",
            "睡眠、家、家族、子ども",
            "苦難、恐怖、借金、不安",
            "糧、知識、来世、楽園",
        ],
    },
}


MODULE_RANGES = [(1, 10), (11, 30), (31, 40), (41, 55), (56, 70), (71, 80), (81, 90), (91, 100)]


def read_entries(config):
    text = config["source"].read_text(encoding="utf-8")
    pattern = re.compile(r"(?m)^(\d{1,3})\. (.+)$")
    matches = list(pattern.finditer(text))
    entries = []
    for index, match in enumerate(matches):
        number = int(match.group(1))
        title = match.group(2).strip()
        start = match.end()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        block = text[start:end].strip()
        fields = extract_fields(block, config["field_names"])
        entries.append({"number": number, "title": title, **fields})
    return entries


def extract_fields(block, names):
    keys = [
        ("arabic", names["arabic"]),
        ("meaning", names["meaning"]),
        ("reference", names["reference"]),
        ("when", names["when"]),
        ("benefit", names["benefit"]),
    ]
    positions = []
    for key, label in keys:
        marker = f"{label}:"
        pos = block.find(marker)
        if pos >= 0:
            positions.append((pos, key, marker))
    positions.sort()
    fields = {key: "" for key, _ in keys}
    for i, (pos, key, marker) in enumerate(positions):
        start = pos + len(marker)
        end = positions[i + 1][0] if i + 1 < len(positions) else len(block)
        fields[key] = block[start:end].strip()
    return fields


def module_for(number):
    for idx, (start, end) in enumerate(MODULE_RANGES):
        if start <= number <= end:
            return idx
    return len(MODULE_RANGES) - 1


def lesson_table(entry, labels):
    arabic = escape(entry.get("arabic") or "[Arabic text under review]")
    rows = [
        ("meaning", entry.get("meaning")),
        ("reference", entry.get("reference")),
        ("when", entry.get("when")),
        ("benefit", entry.get("benefit")),
    ]
    body = [
        '<table class="lesson-table">',
        f'<tr><th colspan="2">{entry["number"]}. {escape(entry["title"])}</th></tr>',
        f'<tr><td class="arabic" colspan="2">{arabic}</td></tr>',
    ]
    for key, value in rows:
        body.append(f'<tr><td class="label-col">{labels[key]}</td><td>{escape(value or "[Needs review]")}</td></tr>')
    body.append("</table>")
    return "\n".join(body)


def build_html(config, entries):
    grouped = [[] for _ in MODULE_RANGES]
    for entry in entries:
        grouped[module_for(entry["number"])].append(entry)

    lesson_sections = []
    for index, group in enumerate(grouped):
        start, end = MODULE_RANGES[index]
        lesson_sections.append(f'<h3>Module {index + 1}: {escape(config["module_names"][index])} ({start}-{end})</h3>')
        lesson_sections.extend(lesson_table(entry, config["labels"]) for entry in group)

    module_list = "\n".join(
        f"<li><strong>Module {i + 1} ({start}-{end}):</strong> {escape(config['module_names'][i])}</li>"
        for i, (start, end) in enumerate(MODULE_RANGES)
    )
    adab_items = "".join(f"<li>{escape(item)}</li>" for item in config["adab_items"])
    method_items = "".join(f"<li><strong>{escape(label)}:</strong> {escape(body)}</li>" for label, body in config["method_items"])
    plan_header = "".join(f"<th>{escape(item)}</th>" for item in config["plan_headers"])
    plan_rows = "".join(
        "<tr>" + "".join(f"<td>{escape(cell)}</td>" for cell in row) + "</tr>"
        for row in config["plan_rows"]
    )

    return f"""<!doctype html>
<html lang="{config['lang']}" dir="{config['dir']}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{escape(config['title'])} - Islamic Habits</title>
  <style>
    :root {{ --ink:#101010; --soft:#424242; --paper:#ffffff; --line:#111111; --wash:#f7f7f5; }}
    * {{ box-sizing: border-box; }}
    body {{ max-width: 920px; margin: 0 auto; padding: 34px 76px; background: var(--paper); color: var(--ink); line-height: 1.62; font: 12pt Georgia, 'Times New Roman', serif; }}
    h1,h2,h3,h4 {{ font-family: Arial, Helvetica, sans-serif; line-height: 1.2; }}
    h1 {{ font-size: 30pt; text-align: center; margin: 0; }}
    h2 {{ margin-top: 1.6em; border-bottom: 1px solid var(--line); padding-bottom: 8px; }}
    h3 {{ margin-top: 2em; }}
    a {{ color: inherit; }}
    .brand-ribbon {{ border-bottom: 1px solid var(--line); padding-bottom: 10px; margin-bottom: 42px; text-align: end; font: 10pt Arial, sans-serif; color: var(--soft); }}
    .cover-page {{ text-align: center; padding: 58px 0 78px; }}
    .cover-page h2 {{ border: 0; font-size: 16pt; font-style: italic; font-weight: 400; }}
    .cover-page h3 {{ text-align: center; font-size: 14pt; margin-top: 34px; }}
    .cover-meta {{ margin-top: 22px; font: 11pt Arial, sans-serif; }}
    .review-note {{ border: 2px solid var(--line); padding: 16px 20px; background: var(--wash); margin: 32px 0; }}
    .toc ul {{ list-style: none; padding-inline-start: 0; }}
    .toc li {{ margin: 8px 0; font-family: Arial, Helvetica, sans-serif; }}
    .section-block {{ margin: 30px 0; }}
    .lesson-table {{ width: 100%; border-collapse: collapse; margin: 18px 0 28px; page-break-inside: avoid; }}
    .lesson-table th,.lesson-table td {{ border: 1px solid var(--line); padding: 10px 14px; vertical-align: top; }}
    .lesson-table th {{ background: #f0f0ee; text-align: start; font-family: Arial, Helvetica, sans-serif; }}
    .label-col {{ width: 24%; font-weight: 700; font-family: Arial, Helvetica, sans-serif; background: #fafafa; }}
    .arabic {{ direction: rtl; text-align: right; font-size: 21pt; line-height: 1.85; font-family: 'Noto Naskh Arabic', 'Amiri', 'Traditional Arabic', 'Times New Roman', serif; }}
    .plan-table {{ width: 100%; border-collapse: collapse; margin-top: 18px; }}
    .plan-table td,.plan-table th {{ border: 1px solid var(--line); padding: 10px 12px; }}
    .footer {{ margin-top: 60px; border-top: 1px solid var(--line); padding-top: 18px; text-align: center; font: 10pt Arial, sans-serif; color: var(--soft); }}
    .page-break {{ page-break-before: always; border-top: 3px double var(--line); margin: 42px 0; }}
    @media print {{ body {{ padding: 26px 56px; }} .page-break {{ break-before: page; }} }}
  </style>
</head>
<body>
  <div class="brand-ribbon"><strong>Islamic Habits</strong> · islamic-habits.com · {SUPPORT_EMAIL}</div>

  <div class="cover-page">
    <h1>{escape(config['title'])}</h1>
    <h2>{escape(config['subtitle'])}</h2>
    <hr style="width:40%; margin:30px auto; border:0; border-top:1px solid #111;">
    <h3>{escape(config['edition'])}</h3>
    <div class="cover-meta"><p><strong>Islamic Habits</strong></p><p>islamic-habits.com | {SUPPORT_EMAIL}</p></div>
  </div>

  <div class="review-note">
    <h4>{escape(config['review_title'])}</h4>
    <p>{escape(config['review_body'])}</p>
  </div>

  <div class="toc">
    <h2>{escape(config['toc'])}</h2>
    <ul>
      <li><strong>1.</strong> {escape(config['intro_title'].split('. ', 1)[-1])}</li>
      <li><strong>2.</strong> {escape(config['adab_title'].split('. ', 1)[-1])}</li>
      <li><strong>3.</strong> {escape(config['method_title'].split('. ', 1)[-1])}</li>
      <li><strong>4.</strong> {escape(config['modules_title'].split('. ', 1)[-1])}</li>
      <li><strong>5.</strong> {escape(config['lessons_title'].split('. ', 1)[-1])}</li>
      <li><strong>6.</strong> {escape(config['plan_title'].split('. ', 1)[-1])}</li>
    </ul>
  </div>

  <hr class="page-break">

  <div class="section-block"><h2>{escape(config['intro_title'])}</h2><p>{escape(config['intro'])}</p></div>
  <div class="section-block"><h2>{escape(config['adab_title'])}</h2><ul>{adab_items}</ul></div>
  <div class="section-block"><h2>{escape(config['method_title'])}</h2><ul>{method_items}</ul></div>
  <div class="section-block"><h2>{escape(config['modules_title'])}</h2><ol>{module_list}</ol></div>

  <hr class="page-break">

  <div class="section-block">
    <h2>{escape(config['lessons_title'])}</h2>
    {''.join(lesson_sections)}
  </div>

  <hr class="page-break">
  <div class="section-block">
    <h2>{escape(config['plan_title'])}</h2>
    <table class="plan-table">
      <tr>{plan_header}</tr>
      {plan_rows}
    </table>
  </div>

  <div class="footer">Islamic Habits · islamic-habits.com · {SUPPORT_EMAIL}</div>
</body>
</html>
"""


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for key, config in CONFIGS.items():
        entries = read_entries(config)
        if len(entries) != 100:
            raise SystemExit(f"{key}: expected 100 entries, got {len(entries)}")
        target = OUT_DIR / config["output"]
        target.write_text(build_html(config, entries), encoding="utf-8")
        print(target)


if __name__ == "__main__":
    main()
