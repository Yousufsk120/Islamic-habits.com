# Islamic Habits Ads Setup

## Done On The Site

- Added privacy, terms, and contact pages for review trust.
- Added robots.txt and sitemap.xml for search crawlers.
- Added dormant ad slots in the home page that do not show until real AdSense code is added.
- Added ads.txt placeholder. Replace it after AdSense gives the real publisher ID.
- Added `config.js` so ad loading can be activated without editing the main app code.
- Added a conversion hook on `/success` for future Google Ads purchase tracking.

## Manual Google AdSense Steps

1. Create or open Google AdSense.
2. Add `https://islamic-habits.com/` as the site.
3. Copy the AdSense publisher ID, usually like `ca-pub-1234567890123456`.
4. Update `ads.txt` with:

   `google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0`

5. Update `config.js`:

   ```js
   adsenseClient: "ca-pub-1234567890123456",
   ```

   The site will then load the AdSense script and reveal the dormant ad slots.

6. Configure Privacy & messaging in AdSense for regions that require consent.
7. Choose personalized or non-personalized ads based on your policy and audience.

## Manual Google Ads Conversion Steps

1. In Google Ads, create a purchase conversion action.
2. Copy the conversion ID, usually like `AW-123456789`.
3. Copy the conversion label for that purchase action.
4. Update `config.js`:

   ```js
   googleAdsConversionId: "AW-123456789",
   googleAdsConversionLabel: "your_conversion_label",
   ```

5. Use `https://islamic-habits.com/success` as the payment success page so the conversion can fire only after checkout redirects back.

## Manual Google Ads Campaign Regions

Start with separate campaigns so each region can be measured clearly:

- Japan: Japanese and English search terms around Islam, Muslim prayer times, Qur'an, halal, shahada, mosque, and Islamic history.
- China-facing diaspora and Chinese-language audiences where Google Ads can serve legally and practically.
- South Korea, Taiwan, Hong Kong, Singapore, Malaysia, Indonesia, Philippines, Thailand, Vietnam.
- Europe: United Kingdom, France, Germany, Netherlands, Spain, Italy, Sweden, Norway, Denmark.
- North America: United States and Canada.

Use respectful education-focused copy. Avoid sensational conversion claims. Make the first campaigns about utility: prayer times, Qibla, Islamic learning, and beginner-friendly practice.

Suggested first campaign structure:

- Campaign 1: Japan, Japanese language, prayer times and Qibla utility.
- Campaign 2: Japan, Japanese language, beginner Islamic learning and dua practice.
- Campaign 3: Malaysia and Indonesia, English plus local language search terms, dua practice and prayer tools.
- Campaign 4: Chinese-language diaspora where Google Ads can serve legally and practically, focused on Islamic learning and prayer tools.
- Campaign 5: Global English, small budget, brand and exact-match Islamic Habits searches.

## Official References Checked

- Google AdSense ads.txt guidance.
- Google AdSense personalized and non-personalized ads guidance.
- Google Ads location targeting guidance.
