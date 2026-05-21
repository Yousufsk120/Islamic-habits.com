window.ISLAMIC_HABITS_CONFIG = {
  duaPrice: "Free",
  stripePaymentLinks: { english: "" },
  duaDownloadLinks: { english: "./downloads/100-hours-dua-practice-english.pdf" },
  adsenseClient: "",
  googleAdsConversionId: "AW-18157183110",
  googleAdsConversionLabel: "",
};

(() => {
  const removePrivateCircle3Concept = () => {
    document.querySelectorAll('a[href="#circle3"]').forEach((link) => link.remove());
    document.getElementById("circle3")?.remove();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", removePrivateCircle3Concept);
  } else {
    removePrivateCircle3Concept();
  }
})();
