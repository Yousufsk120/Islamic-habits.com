# Paid Dua PDF Store Setup

This document describes the safe payment and download model for selling the `100 Hours Dua Practice` PDF/manual. Launch English first, then add other languages and practice activities gradually after review.

## Buyer Flow

1. The buyer opens the Dua PDF section.
2. The buyer sees English as the first launch edition. Bengali, Japanese, Simplified Chinese, Malay, Arabic/source, future languages, and more practice activities can be added gradually after review.
3. The website shows the basic price.
4. The buyer continues to secure checkout.
5. The payment provider confirms successful payment.
6. The English 100-hour practice PDF is delivered through a protected download link during the first launch. Later, the selected reviewed language or activity edition can be delivered the same way.
7. The buyer receives a receipt and support contact.

## Current Website Preparation

- The website currently keeps the public store focused on the English launch edition.
- The checkout button opens secure checkout after the real payment link is connected.
- The payment-link map lives in `config.js` under `stripePaymentLinks`.
- The site now has payment return pages:
  - Success URL: `https://islamic-habits.com/success`
  - Cancel URL: `https://islamic-habits.com/cancel`
- The final paid PDFs should not be uploaded into the public website folder.

## Fastest Manual Setup

Use Stripe Payment Links if you want the simplest first launch.

1. Create one Stripe product: `100 Hours Dua Practice - English PDF`.
2. Create a basic price, for example `$2.99`.
3. Create one Payment Link for the English 100-hour practice launch edition.
4. Later, create one Payment Link per reviewed language edition.
5. In each Payment Link, set the after-payment redirect to:

   `https://islamic-habits.com/success`

6. If Stripe allows a cancel URL in the chosen checkout setup, use:

   `https://islamic-habits.com/cancel`

7. Add the live Payment Link URL into `config.js`:

```js
stripePaymentLinks: {
  english: "https://buy.stripe.com/...",
}
```

8. During the first launch, send the protected English PDF manually after checking the Stripe receipt.

## Strong Production Setup

Use Stripe Checkout plus a backend if you want automatic protected delivery.

1. The website sends the selected product edition to a checkout endpoint.
2. The server creates a Stripe Checkout Session with product and language metadata.
3. Stripe sends a webhook after successful payment.
4. The server verifies the payment event.
5. The server creates an expiring signed download link for the correct PDF.
6. The buyer receives the link by email or on a private success page.

## Security Rule

Do not upload paid PDF files to a public `/downloads` or `/assets` folder. If a file is public, anyone with the URL can share it without paying.

Use one of these instead:

- Private cloud storage with expiring signed links.
- Stripe-hosted delivery through a controlled fulfillment workflow.
- Manual email delivery during the first small launch.

## Manual Interventions Needed

- Stripe or another payment provider account approval.
- Bank account and business details.
- Final reviewed English 100 Hours Dua Practice PDF for launch.
- Gradual reviewed PDFs for Bengali, Japanese, Chinese, Malay, Arabic/source, and future languages.
- Product price and tax settings.
- Stripe Payment Link copied into `config.js`.
- Refund, support, and customer email process.
