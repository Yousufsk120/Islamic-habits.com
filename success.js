(function () {
  const config = window.ISLAMIC_HABITS_CONFIG || {};
  const downloadUrl = String(config.duaDownloadLinks?.english || "").trim();
  const downloadButton = document.querySelector("#duaDownloadButton");

  if (downloadButton && downloadUrl) {
    downloadButton.href = downloadUrl;
    downloadButton.hidden = false;
  }

  // The launch PDF is free now, so this page does not fire a purchase conversion.
})();
