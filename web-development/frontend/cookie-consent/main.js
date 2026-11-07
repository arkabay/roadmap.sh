const cookieBanner = document.getElementById("cookieBanner");
const closeBannerButton = document.querySelector(".close-button");
const acceptCookieButton = document.querySelector(".cookie-button");

const COOKIE_KEY = "cookieConsentAccepted";

// Helper Functions for Cookie Persistence
function hasUserConsent() {
  return document.cookie
    .split("; ")
    .some((row) => row.startsWith(`${COOKIE_KEY}=true`));
}

function saveUserConsent() {
  const cookieMaxAge = 30 * 24 * 60 * 60; // 30 days in second
  document.cookie = `${COOKIE_KEY}=true; max-age=${cookieMaxAge}; path=/; SameSite=Lax`;
}

// State Handlers
function showCookieBanner() {
  cookieBanner.classList.add("is-visible");
}

function closeCookieBanner() {
  cookieBanner.classList.remove("is-visible");
}

// Event Listeners & Initialization
closeBannerButton.addEventListener("click", closeCookieBanner);

acceptCookieButton.addEventListener("click", () => {
  saveUserConsent();
  closeCookieBanner();
});

if (!hasUserConsent()) {
  showCookieBanner();
}
