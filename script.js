document.addEventListener("DOMContentLoaded", () => {

  if (typeof CONFIG === "undefined") {
    console.error("CONFIG tidak ditemukan!");
    return;
  }

  // ===== TITLE =====
  const title = document.querySelector("h1");
  if (title) title.textContent = CONFIG.name;

  // ===== BIO =====
  const bio = document.querySelector(".desc");
  if (bio) bio.textContent = CONFIG.bio;

  // ===== LOGO =====
  const logo = document.querySelector(".logo-box img");
  if (logo) logo.src = CONFIG.logo;

  // ===== SOCIAL =====
  const social = document.querySelectorAll(".socials a");

  if (CONFIG.socials) {
    const s = CONFIG.socials;

    if (social[0]) social[0].href = s.tiktok;
    if (social[1]) social[1].href = s.instagram;
    if (social[2]) social[2].href = s.whatsapp;
    if (social[3]) social[3].href = s.telegram;
  }

  // ===== LINKS =====
  const container = document.querySelector(".links");
  if (!container) return;

  container.innerHTML = "";

  CONFIG.links.forEach(item => {

    const card = document.createElement("a");
    card.className = "card";
    card.href = item.url;
    card.target = "_self";
    card.rel = "noopener noreferrer";

    card.innerHTML = `
      <div class="left">
        <i class="fa-solid ${item.icon}"></i>
        <span>${item.title}</span>
      </div>
      <i class="fa-solid fa-chevron-right"></i>
    `;

    container.appendChild(card);
  });

});
