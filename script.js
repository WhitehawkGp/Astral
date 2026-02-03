<script>
/* =========================
   Copy to Clipboard
========================= */
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => alert("Copied: " + text))
    .catch(err => console.error("Could not copy text:", err));
}

/* =========================
   Password-Protected Update
========================= */
function checkPassword() {
  const password = prompt("Enter password:");
  if (password !== "thisissigmachat") {
    alert("Incorrect password!");
    return;
  }

  const newText = prompt("Enter your update:");
  if (!newText) return;

  const updatesDiv = document.getElementById("updates");
  const newUpdate = document.createElement("div");
  newUpdate.classList.add("update-box");
  newUpdate.innerHTML = `<h3>Update from The TALW</h3><p>${newText}</p>`;
  updatesDiv.appendChild(newUpdate);
}

/* =========================
   Open Random Site
========================= */
function openRandomSite(newTab = true) {
  const sites = [
    "https://shaneplaysgames.netlify.app/",
    "https://bruhman12345.netlify.app/",
    "https://shotbroup.netlify.app/",
    "https://stopstealinglosers.netlify.app/",
    "https://tatatashaur.netlify.app/",
    "https://imreallycool.netlify.app/",
    "https://ilovegamewebsite.netlify.app/",
    "https://500-cigarettes.netlify.app/"
  ];

  const randomIndex = Math.floor(Math.random() * sites.length);

  if (newTab) {
    window.open(sites[randomIndex], "_blank");
  } else {
    window.location.href = sites[randomIndex];
  }
}

/* =========================
   Cloak Button
========================= */
document.getElementById("cloakButton")?.addEventListener("click", () => {
  const win = window.open("about:blank");
  if (!win) {
    alert("Pop-up blocked! Allow pop-ups to use this feature.");
    return;
  }

  win.document.open();
  win.document.write(`
    <html>
      <head>
        <title>Blank</title>
      </head>
      <body style="margin:0; overflow:hidden;">
        <iframe
          src="${window.location.href}"
          style="position:fixed; top:0; left:0; width:100vw; height:100vh; border:none;">
        </iframe>
      </body>
    </html>
  `);
  win.document.close();

  setTimeout(() => window.close(), 1000);
});

/* =========================
   Firebase Updates Loader
========================= */
function loadUpdates() {
  if (typeof db === "undefined") return;

  const updatesRef = db.ref("updates");
  updatesRef.on("value", snapshot => {
    const updatesDiv = document.getElementById("updates");
    updatesDiv.innerHTML = "";

    snapshot.forEach(child => {
      const updateBox = document.createElement("div");
      updateBox.classList.add("update-box");
      updateBox.innerHTML = `
        <h3>Update from The TALW</h3>
        <p>${child.val().text}</p>
      `;
      updatesDiv.appendChild(updateBox);
    });
  });
}

/* =========================
   Navbar Loader
========================= */
document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("navbar-container").innerHTML = html;
    })
    .catch(err => console.error("Failed to load navbar:", err));
});
</script>
