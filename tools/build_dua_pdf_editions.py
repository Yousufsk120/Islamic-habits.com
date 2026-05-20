from pathlib import Path
import tempfile

from PIL import Image, ImageDraw, ImageFont
from pypdf import PdfReader, PdfWriter
from reportlab.lib import colors
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = Path("/Users/mdyousufsk/Library/Containers/net.whatsapp.WhatsApp/Data/tmp/documents/2374CBBA-8F2F-4461-BFFE-D1C1BCB9B31F")
SOURCE = next(SOURCE_DIR.glob("100 Duas*.pdf"))
OUT_DIR = ROOT / "products" / "dua-pdf-editions"
FONT_REGULAR = "/System/Library/Fonts/Supplemental/Arial Unicode.ttf"
FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
SUPPORT_EMAIL = "support@islamic-habits.com"
FOOTER_TEXT = f"Islamic Habits | {SUPPORT_EMAIL}"
LANG_FONTS = {
    "bengali": "/System/Library/Fonts/Supplemental/Bangla Sangam MN.ttc",
    "japanese": "/System/Library/Fonts/ヒラギノ角ゴシック W3.ttc",
    "chinese": "/System/Library/Fonts/Hiragino Sans GB.ttc",
}


EDITIONS = {
    "english": {
        "file": "100-duas-premium-english.pdf",
        "title": "100 Selected Duas",
        "subtitle": "Premium English Edition",
        "tagline": "Qur'an and authentic hadith source collection with a protected buyer delivery page.",
        "note": "Thank you for supporting Islamic Habits. This edition is prepared for English readers and includes the verified source collection while the final human-reviewed translation layer is completed.",
        "language": "English",
    },
    "bengali": {
        "file": "100-duas-premium-bengali.pdf",
        "title": "100 Selected Duas",
        "subtitle": "Premium Bengali Edition",
        "tagline": "A Qur'an and authentic hadith dua collection prepared for Bengali readers.",
        "note": "Thank you for supporting Islamic Habits. This Bengali edition includes the verified Bengali source collection.",
        "language": "Bengali",
    },
    "japanese": {
        "file": "100-duas-premium-japanese.pdf",
        "title": "100の選ばれたドゥアー",
        "subtitle": "プレミアム日本語版",
        "tagline": "日々の祈り、学び、実践のための美しいドゥアー集。",
        "note": "Islamic Habitsを支援してくださりありがとうございます。この版は日本語読者向けに準備され、検証済みの原典資料を含みます。",
        "language": "Japanese",
    },
    "chinese": {
        "file": "100-duas-premium-chinese.pdf",
        "title": "100段精选祈祷词",
        "subtitle": "高级简体中文版",
        "tagline": "为日常礼拜、学习和心灵修养而设计的祈祷词合集。",
        "note": "感谢你支持 Islamic Habits。本版本为中文读者准备，并包含已整理的原始资料集合。",
        "language": "Simplified Chinese",
    },
    "malay": {
        "file": "100-duas-premium-malay.pdf",
        "title": "100 Doa Pilihan",
        "subtitle": "Edisi Premium Bahasa Melayu",
        "tagline": "Koleksi doa untuk bacaan harian, pembelajaran, dan amalan keluarga.",
        "note": "Terima kasih kerana menyokong Islamic Habits. Edisi ini disediakan untuk pembaca Bahasa Melayu dan memuatkan koleksi sumber yang telah disusun.",
        "language": "Malay",
    },
    "arabic": {
        "file": "100-duas-premium-arabic.pdf",
        "title": "100 Selected Duas",
        "subtitle": "Premium Arabic Source Edition",
        "tagline": "A refined source edition prepared for Arabic dua reading, review, and future delivery.",
        "note": "Thank you for supporting Islamic Habits. This Arabic source edition is prepared for protected delivery after purchase.",
        "language": "Arabic",
    },
}


def font(size, bold=False, language=None):
    path = LANG_FONTS.get(language) or (FONT_BOLD if bold and Path(FONT_BOLD).exists() else FONT_REGULAR)
    return ImageFont.truetype(path, size)


def wrap_text(draw, text, max_width, text_font):
    words = text.split()
    lines = []
    current = ""
    for word in words:
        test = f"{current} {word}".strip()
        if draw.textbbox((0, 0), test, font=text_font)[2] <= max_width:
            current = test
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_centered(draw, text, y, text_font, fill, max_width, line_gap=10):
    lines = wrap_text(draw, text, max_width, text_font)
    for line in lines:
        bbox = draw.textbbox((0, 0), line, font=text_font)
        x = (PAGE_W - (bbox[2] - bbox[0])) / 2
        draw.text((x, y), line, font=text_font, fill=fill)
        y += (bbox[3] - bbox[1]) + line_gap
    return y


PAGE_W, PAGE_H = 1800, 2400
INK = (246, 242, 232)
MUTED = (188, 204, 196)
EMERALD = (66, 209, 155)
AQUA = (91, 214, 232)
GOLD = (240, 191, 85)
BG = (8, 17, 15)
PANEL = (16, 35, 31)


def base_page():
    img = Image.new("RGB", (PAGE_W, PAGE_H), BG)
    draw = ImageDraw.Draw(img)
    for i in range(0, PAGE_W, 80):
        draw.line((i, 0, i, PAGE_H), fill=(17, 32, 29), width=2)
    for j in range(0, PAGE_H, 80):
        draw.line((0, j, PAGE_W, j), fill=(17, 32, 29), width=2)
    for r, color in [(620, (15, 86, 69)), (460, (12, 69, 74)), (300, (88, 63, 22))]:
        draw.ellipse((PAGE_W - 340 - r, 220 - r, PAGE_W - 340 + r, 220 + r), outline=color, width=5)
    return img, draw


def cover_page(meta):
    img, draw = base_page()
    draw.rounded_rectangle((130, 135, PAGE_W - 130, PAGE_H - 135), radius=42, outline=(57, 84, 76), width=4, fill=(9, 25, 22))
    draw.rounded_rectangle((210, 270, 440, 500), radius=42, outline=(67, 180, 145), width=4, fill=(20, 54, 45))
    language = next((slug for slug, item in EDITIONS.items() if item is meta), None)
    draw.text((275, 335), "IH", font=font(74, True), fill=EMERALD)
    draw.text((210, 575), "ISLAMIC HABITS", font=font(38, True), fill=GOLD)
    y = 735
    y = draw_centered(draw, meta["title"], y, font(104, True, language), INK, 1320, 22)
    y = draw_centered(draw, meta["subtitle"], y + 18, font(54, True, language), EMERALD, 1320, 18)
    draw.line((380, y + 58, PAGE_W - 380, y + 58), fill=GOLD, width=5)
    draw_centered(draw, meta["tagline"], y + 125, font(38, language=language), MUTED, 1180, 16)
    draw.rounded_rectangle((300, 1725, PAGE_W - 300, 1945), radius=34, outline=(58, 88, 80), width=3, fill=PANEL)
    draw.text((380, 1785), "Language", font=font(34, True), fill=GOLD)
    draw.text((650, 1778), meta["language"], font=font(46, True), fill=INK)
    draw.text((300, 2070), "Prepared by Islamic Habits for protected post-purchase delivery", font=font(34, True), fill=AQUA)
    draw.text((300, 2130), f"Support: {SUPPORT_EMAIL}", font=font(28), fill=MUTED)
    draw.text((300, 2180), "Arabic source pages included. Final sale translations should be reviewed before launch.", font=font(28), fill=MUTED)
    return img


def thank_you_page(meta):
    language = next((slug for slug, item in EDITIONS.items() if item is meta), None)
    img, draw = base_page()
    draw.rounded_rectangle((150, 170, PAGE_W - 150, PAGE_H - 170), radius=44, outline=(57, 84, 76), width=4, fill=(9, 25, 22))
    draw.text((240, 300), "After Purchase", font=font(46, True), fill=GOLD)
    draw_centered(draw, "Your Dua PDF Is Ready", 520, font(92, True), INK, 1220, 20)
    draw_centered(draw, meta["note"], 760, font(40, language=language), MUTED, 1220, 20)
    steps = [
        ("1", "Keep this file for personal reading and practice."),
        ("2", "For Drive delivery, store it in a private folder and share only with the buyer email."),
        ("3", "For direct download, use a protected expiring link after payment confirmation."),
    ]
    y = 1180
    for number, body in steps:
        draw.rounded_rectangle((300, y, PAGE_W - 300, y + 190), radius=30, outline=(51, 79, 72), width=3, fill=PANEL)
        draw.ellipse((360, y + 54, 440, y + 134), fill=EMERALD)
        draw.text((388, y + 70), number, font=font(34, True), fill=BG)
        for line in wrap_text(draw, body, 980, font(34)):
            draw.text((490, y + 55), line, font=font(34), fill=INK)
            y += 42
        y += 130
    draw.text((300, 2130), "Islamic Habits | Small deeds. Steady hearts. Strong routines.", font=font(32, True), fill=AQUA)
    draw.text((300, 2190), f"Support: {SUPPORT_EMAIL}", font=font(30, True), fill=MUTED)
    return img


def image_to_pdf(image, target):
    image.save(target, "PDF", resolution=180.0)


def branded_source_page(page, target):
    width = float(page.mediabox.width)
    height = float(page.mediabox.height)
    c = canvas.Canvas(str(target), pagesize=(width, height))
    c.setFillColor(colors.white)
    c.rect(0, 0, width, 28, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#0b2a22"))
    c.setFont("Helvetica-Bold", 8)
    c.drawString(28, 10, FOOTER_TEXT)
    c.setFillColor(colors.HexColor("#5d6f68"))
    c.setFont("Helvetica", 7)
    c.drawRightString(width - 28, 10, "Premium protected edition")
    c.save()
    overlay = PdfReader(str(target)).pages[0]
    page.merge_page(overlay)
    return page


def build_edition(slug, meta):
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    output = OUT_DIR / meta["file"]
    writer = PdfWriter()
    with tempfile.TemporaryDirectory() as tmp:
        cover = Path(tmp) / "cover.pdf"
        thanks = Path(tmp) / "thanks.pdf"
        image_to_pdf(cover_page(meta), cover)
        image_to_pdf(thank_you_page(meta), thanks)
        for page in PdfReader(str(cover)).pages:
            writer.add_page(page)
        for index, page in enumerate(PdfReader(str(SOURCE)).pages, 1):
            overlay = Path(tmp) / f"footer-{index}.pdf"
            writer.add_page(branded_source_page(page, overlay))
        for page in PdfReader(str(thanks)).pages:
            writer.add_page(page)
        with output.open("wb") as fh:
            writer.write(fh)
    return output


def main():
    if not SOURCE.exists():
        raise SystemExit(f"Source PDF not found: {SOURCE}")
    for slug, meta in EDITIONS.items():
        output = build_edition(slug, meta)
        print(output)


if __name__ == "__main__":
    main()
