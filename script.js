// Background Image Randomizer
document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "https://cdn.wccftech.com/wp-content/uploads/2016/09/spacee-scaled.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWGpyTSzKZU9hS-ptH3WJZQ0TMGDqczO0-5A&s"
    ];
    
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url('${randomImage}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
});

// Copy to clipboard function for Servers page
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
    }).catch(err => {
        console.error("Could not copy text: ", err);
    });
}

// Password-protected new update post
function checkPassword() {
    const password = prompt("Enter password:");
    if (password === "thisissigmachat") {
        const newText = prompt("Enter your update:");
        if (newText) {
            const updatesDiv = document.getElementById("updates");
            const newUpdate = document.createElement("div");
            newUpdate.classList.add("update-box");
            newUpdate.innerHTML = `<h3>Update from The TALW</h3><p>${newText}</p>`;
            updatesDiv.appendChild(newUpdate);
        }
    } else {
        alert("Incorrect password!");
    }
}

//Function to load random selenite links
function openRandomSite() {
            // List of random websites
            const sites = [
                "https://wearesoback.netlify.app",
                "https://comingback-app.netlify.app",
                "https://newfest.netlify.app",
                "https://backontrack-app.netlify.app",
                "https://english-delta-jet.vercel.app"
            ];

            // Select a random site
            const randomSite = sites[Math.floor(Math.random() * sites.length)];

            // Open the site in a new tab
            window.open(randomSite, "_blank");
        }

//random button unblocker
function openRandomSiteU() {
            // List of random websites
            const sites = [
                "https://asoilkdh.global.ssl.fastly.net/",
                "https://pizza.frogiee.one/",
                "https://schoologymathhelp.web.app/",
                "https://classroom84.global.ssl.fastly.net/",
                "https://loungef2x.global.ssl.fastly.net/",
                "https://gobblethemup.vercel.app",
                "https://asoilkdh.global.ssl.fastly.net/",
                "https://newsforall.site/",
                "https://portal.hehege.vpn64.de/",
                "https://www.apau.shaaaaaaaaaaadow.home64.de/",
                //"https://charming-capybara-53c2c8.netlify.app/1.8",
                "https://hamburger.netlify.app/",
                "https://https://soto-inc.global.ssl.fastly.net/",
                "https://gointospace.app/",
                "https://bi.edu.ooguy.com/",
                "https://infinitetutoring.com.au/",
                "https://mathtutors4school.web.app/"
                
            
            ];

            // Select a random site
            const randomSite = sites[Math.floor(Math.random() * sites.length)];

            // Open the site in a new tab
            window.open(randomSite, "_blank");
        }

 document.getElementById("cloakButton").addEventListener("click", function () {
            let win = window.open("about:blank"); // Open a new blank page
            if (!win) {
                alert("Pop-up blocked! Please allow pop-ups for this to work.");
                return;
            }

            let doc = win.document;

            doc.open();
            doc.write(`
                <html>
                    <head>
                        <title>Blank</title>
                        <script>
                            window.onload = function() {
                                let iframe = document.createElement('iframe');
                                iframe.style.position = 'fixed';
                                iframe.style.top = '0';
                                iframe.style.left = '0';
                                iframe.style.width = '100vw';
                                iframe.style.height = '100vh';
                                iframe.style.border = 'none';
                                iframe.src = '${window.location.href}';
                                document.body.appendChild(iframe);
                            };
                        </script>
                    </head>
                    <body style="margin:0; overflow:hidden;">
                    </body>
                </html>
            `);
            doc.close();

            // Attempt to close the original page (may be blocked by browser security settings)
            setTimeout(() => window.close(), 1000);
        });

// Function to load updates from Firebase
function loadUpdates() {
    const updatesRef = db.ref("updates");
    updatesRef.on("value", (snapshot) => {
        const updatesDiv = document.getElementById("updates");
        updatesDiv.innerHTML = ""; // Clear old updates before loading new ones

        snapshot.forEach((childSnapshot) => {
            const updateData = childSnapshot.val();
            const updateBox = document.createElement("div");
            updateBox.classList.add("update-box"); // Apply the curved rectangle class
            updateBox.innerHTML = `<h3>Update from The TALW</h3><p>${updateData.text}</p>`;
            updatesDiv.appendChild(updateBox);
        });
    });
}

 
