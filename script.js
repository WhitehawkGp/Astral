/* ===============================
   BASIC CHECK
================================ */
console.log("script.js loaded");

/* ===============================
   COPY TO CLIPBOARD
================================ */
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => console.log("Copied:", text))
    .catch(err => console.error("Clipboard error:", err));
}

/* ===============================
   RANDOM SITE OPENER
================================ */
function openRandomSite(newTab = true) {
  const sites = [
    "https://shaneplaysgames.netlify.app/",
    "https://bruhman12345.netlify.app/",
    "https://shotbroup.netlify.app/",
    "https://stopstealinglosers.netlify.app/",
    "https://tatatashaur.netlify.app/",
    "https://imreallycool.netlify.app/",
    "https://bruhman12345.netlify.app/"
  ];

  if (sites.length === 0) return;

  const randomIndex = Math.floor(Math.random() * sites.length);
  const url = sites[randomIndex];

  if (newTab) {
    window.open(url, "_blank");
  } else {
    window.location.href = url;
  }
}

/* ===============================
   PASSWORD-PROTECTED UPDATE POST
================================ */
function checkPassword() {
  const password = prompt("Enter password:");
  if (password !== "thisissigmachat") {
    alert("Incorrect password!");
    return;
  }

  const newText = prompt("Enter your update:");
  if (!newText) return;

  const updatesDiv = document.getElementById("updates");
  if (!updatesDiv) return;

  const newUpdate = document.createElement("div");
  newUpdate.className = "update-box";

  const h3 = document.createElement("h3");
  h3.textContent = "Update from The TALW";

  const p = document.createElement("p");
  p.textContent = newText;

  newUpdate.appendChild(h3);
  newUpdate.appendChild(p);
  updatesDiv.appendChild(newUpdate);
}

/* ===============================
   CLOAK BUTTON
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const cloakBtn = document.getElementById("cloakButton");
  if (!cloakBtn) return;

  cloakBtn.addEventListener("click", () => {
    const win = window.open("about:blank");
    if (!win) {
      alert("Pop-ups blocked!");
      return;
    }

    win.document.open();
    win.document.write(`
      <html>
        <head><title>Blank</title></head>
        <body style="margin:0; overflow:hidden;">
          <iframe
            src="${window.location.href}"
            style="width:100vw; height:100vh; border:none;">
          </iframe>
        </body>
      </html>
    `);
    win.document.close();

    setTimeout(() => window.close(), 800);
  });
});

/* ===============================
   FIREBASE UPDATE LOADER
================================ */
function loadUpdates() {
  if (typeof db === "undefined") {
    console.warn("Firebase not loaded");
    return;
  }

  const updatesDiv = document.getElementById("updates");
  if (!updatesDiv) return;

  db.ref("updates").on("value", snapshot => {
    updatesDiv.innerHTML = "";

    snapshot.forEach(child => {
      const data = child.val();

      const box = document.createElement("div");
      box.className = "update-box";

      const h3 = document.createElement("h3");
      h3.textContent = "Update from The TALW";

      const p = document.createElement("p");
      p.textContent = data.text;

      box.appendChild(h3);
      box.appendChild(p);
      updatesDiv.appendChild(box);
    });
  });
}

/* ===============================
   NAVBAR LOADER
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("navbar-container");
  if (!nav) return;

  fetch("navbar.html")
    .then(res => res.text())
    .then(html => nav.innerHTML = html)
    .catch(err => console.error("Navbar load failed:", err));
});
