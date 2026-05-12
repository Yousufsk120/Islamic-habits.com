(function () {
  const config = window.ISLAMIC_HABITS_CONFIG || {};
  const conversionId = String(config.googleAdsConversionId || "").trim();
  const conversionLabel = String(config.googleAdsConversionLabel || "").trim();
  const downloadUrl = String(config.duaDownloadLinks?.english || "").trim();
  const downloadButton = document.querySelector("#duaDownloadButton");

  if (downloadButton && downloadUrl) {
    downloadButton.href = downloadUrl;
    downloadButton.hidden = false;
  }

  if (!/^AW-\d+$/.test(conversionId) || !conversionLabel) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(conversionId)}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", conversionId);
  window.gtag("event", "conversion", {
    send_to: `${conversionId}/${conversionLabel}`,
    value: 2.99,
    currency: "USD",
  });
})();
