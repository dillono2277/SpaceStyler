// ✅ Setup for modal functionality in CSS Styling Level 1
const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const htmlDisplay = document.getElementById("htmlDisplay");
const checklist = document.querySelectorAll('.checklist input[type="checkbox"]');
const modal = document.getElementById("completionModal");
const levelDropdown = document.getElementById("levels");
const leftGrid = document.querySelector(".left-grid");
const dragbar = document.getElementById("dragbar");
const container = document.querySelector(".container");

const staticHTML = `
<body>
  <nav class="preview-navbar">
    <div class="logo">🌌 Profile Portal</div>
    <div class="dropdown">
      <button class="dropbtn">Menu</button>
      <div class="dropdown-content">
        <a href="#">View Profile</a>
        <a href="#">Settings</a>
        <a href="#">Log Out</a>
      </div>
    </div>
  </nav>

  <section class="profile-card">
    <img class="profile-img" src="../../photos/pfp.jpg" width = "100px" alt="Profile Picture" />
    <div class="profile-info">
      <h2 class="profile-name">Alex Nova</h2>
      <p class="profile-title">Galactic Developer</p>
    </div>
  </section>

  <section class="grid-content">
    <div class="grid-left">
      <img class="space-image" src="../../photos/earth.jpg" width = "100px" alt="Earthrise from space" />
    </div>
    <div class="grid-right">
      <ul class="space-list">
        <li>Engage thrusters</li>
        <li>Activate shields</li>
        <li>Scan for lifeforms</li>
        <li>Calibrate sensors</li>
      </ul>
    </div>
  </section>
</body>




`;

// Initial HTML for display
htmlDisplay.textContent = staticHTML.trimStart();

// Wrap static HTML in full template for iframe
function loadBaseHTML() {
  const doc = preview.contentDocument || preview.contentWindow.document;
  const base = `
    <!DOCTYPE html>
    <html>
    <head>
      <style id="dynamic-style"></style>
    </head>
    <body>${staticHTML}</body>
    </html>`;
  doc.open();
  doc.write(base);
  doc.close();
}

function updateCSS() {
  const css = editor.value;
  const doc = preview.contentDocument || preview.contentWindow.document;
  const styleTag = doc.getElementById("dynamic-style");
  if (styleTag) {
    styleTag.textContent = css;
  }
}

editor.addEventListener("input", updateCSS);

// Default CSS
editor.value = `

/* 🌌 Base Layout */
body {
  margin: 0;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  /* Set background color to black */
  /* Set neon text color */
  /* Center text */
  /* Include border using box-sizing */
}

/* 🛰 Navbar */
.preview-navbar {
  /* Use flexbox to space content */
  /* Add background and text color */
  /* Add padding and a glowing box-shadow */
}

.dropbtn {
  /* Transparent background */
  /* Neon border and text */
  /* Add padding and pointer cursor */
}

.dropdown {
  /* Position the dropdown trigger */
  /* Inline-block layout */
}

.dropdown-content {
  /* Hide dropdown initially */
  /* Position absolutely */
  /* Add background, box shadow, spacing, and layering */
}

.dropdown-content a {
  /* Style dropdown links */
  /* Add padding and block layout */
}

.dropdown-content a:hover {
  /* Highlight the dropdown item on hover */
}

.dropdown:hover .dropdown-content {
  /* Show dropdown on hover */
}

/* 👤 Profile Card */
.profile-card {
  /* Use grid layout with 2 columns: image and info */
  /* Center the card with margin auto */
  /* Add background, padding, border radius, and glow */
}

.profile-img {
  /* Set fixed width and height */
  /* Make image circular */
  /* Add neon border */
}

.profile-name {
  /* Increase font size */
  /* Add margin and neon text */
}

.profile-title {
  /* Style subtitle with lighter color */
}

/* 🌌 Profile Grid Section */
.grid-content {
  /* Use display: grid to create two columns */
  /* Add gap and padding */
  /* Limit max width and center it */
  /* Add background, border radius, and glow */
}

.grid-left {
  /* Use flexbox to center the image */
}

.space-image {
  /* Make the image responsive */
  /* Add border, rounded corners, and glow */
}

.grid-right {
  /* Center the content vertically and horizontally */
}

.space-list {
  /* Style the list with custom bullets */
  /* Remove default padding */
  /* Set neon text, font size, and left alignment */
}

.space-list li {
  /* Add spacing between items */
  /* Add a neon left border */
}


`;

window.addEventListener("DOMContentLoaded", () => {
  // Load preview iframe
  loadBaseHTML();
  requestAnimationFrame(updateCSS);

  // CHEAT SHEET SETUP
  const helpBtn = document.querySelector(".button-text");
  const cheatSheet = document.getElementById("cheatSheetOverlay");

  if (helpBtn && cheatSheet) {
    helpBtn.addEventListener("click", () => {
      cheatSheet.style.display = "block";
    });

    window.closeCheatSheet = function () {
      cheatSheet.style.display = "none";
    };
  } else {
    console.warn("Button or cheat sheet not found in DOM.");
  }
});

//COMPLETED CODE BUTTON AND RESET CODE BUTTON

const originalCode = `

/* 🌌 Base Layout */
body {
  margin: 0;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  /* Set background color to black */
  /* Set neon text color */
  /* Center text */
  /* Include border using box-sizing */
}

/* 🛰 Navbar */
.preview-navbar {
  /* Use flexbox to space content */
  /* Add background and text color */
  /* Add padding and a glowing box-shadow */
}

.dropbtn {
  /* Transparent background */
  /* Neon border and text */
  /* Add padding and pointer cursor */
}

.dropdown {
  /* Position the dropdown trigger */
  /* Inline-block layout */
}

.dropdown-content {
  /* Hide dropdown initially */
  /* Position absolutely */
  /* Add background, box shadow, spacing, and layering */
}

.dropdown-content a {
  /* Style dropdown links */
  /* Add padding and block layout */
}

.dropdown-content a:hover {
  /* Highlight the dropdown item on hover */
}

.dropdown:hover .dropdown-content {
  /* Show dropdown on hover */
}

/* 👤 Profile Card */
.profile-card {
  /* Use grid layout with 2 columns: image and info */
  /* Center the card with margin auto */
  /* Add background, padding, border radius, and glow */
}

.profile-img {
  /* Set fixed width and height */
  /* Make image circular */
  /* Add neon border */
}

.profile-name {
  /* Increase font size */
  /* Add margin and neon text */
}

.profile-title {
  /* Style subtitle with lighter color */
}

/* 🌌 Profile Grid Section */
.grid-content {
  /* Use display: grid to create two columns */
  /* Add gap and padding */
  /* Limit max width and center it */
  /* Add background, border radius, and glow */
}

.grid-left {
  /* Use flexbox to center the image */
}

.space-image {
  /* Make the image responsive */
  /* Add border, rounded corners, and glow */
}

.grid-right {
  /* Center the content vertically and horizontally */
}

.space-list {
  /* Style the list with custom bullets */
  /* Remove default padding */
  /* Set neon text, font size, and left alignment */
}

.space-list li {
  /* Add spacing between items */
  /* Add a neon left border */
}



`;

function revealSolution() {
  const confirmed = confirm("Reveal the completed solution?");
  if (confirmed) {
    editor.value = `
    /* 🌌 Base Layout */
body {
  background-color: #000;
  color: #0ff;
  font-family: 'Segoe UI', sans-serif;
  padding: 2rem;
  text-align: center;
  box-sizing: border-box;
}

/* 🛰 Navbar */
.preview-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #111;
  color: #0ff;
  padding: 1rem 2rem;
  font-weight: bold;
  box-shadow: 0 0 10px #0ff;
}

.dropbtn {
  background-color: transparent;
  border: 2px solid #0ff;
  color: #0ff;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #111;
  box-shadow: 0 0 10px #0ff;
  padding: 0.5rem;
  min-width: 160px;
  z-index: 1;
}

.dropdown-content a {
  color: #0ff;
  padding: 8px 12px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #0ff;
  color: #000;
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* 👤 Profile Card */
.profile-card {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 1.5rem;
  align-items: center;
  background-color: #111;
  padding: 2rem;
  max-width: 600px;
  margin: 3rem auto;
  border-radius: 12px;
  box-shadow: 0 0 15px #0ff;
}

/* 🖼 Profile Image */
.profile-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid #0ff;
}

/* 🧑 Name + Title */
.profile-name {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.profile-title {
  font-size: 1rem;
  color: #ccc;
}

/* 🌌 Profile Grid Section */
.grid-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 800px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #111;
  border-radius: 12px;
  box-shadow: 0 0 15px #0ff;
}

/* 🪐 Left Side – Space Image */
.grid-left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.space-image {
  width: 100%;
  max-width: 100%;
  border: 2px solid #0ff;
  border-radius: 10px;
  box-shadow: 0 0 10px #0ff;
}

/* 🌠 Right Side – Space List */
.grid-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.space-list {
  list-style-type: square;
  padding: 0;
  color: #0ff;
  font-size: 1.1rem;
  text-align: left;
}

.space-list li {
  margin-bottom: 1rem;
  padding-left: 1rem;
  border-left: 2px solid #0ff;
}

      
    
`;

    editor.dispatchEvent(new Event("input")); // update iframe
  }
}
function resetCode() {
  const confirmed = confirm("Are you sure you want to reset your code?");
  if (confirmed) {
    editor.value = originalCode;
    editor.dispatchEvent(new Event("input")); // Update preview
  }
}
//STARS


function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  // Random position inside .left-grid
  const x = Math.random() * leftGrid.offsetWidth;
  const y = Math.random() * leftGrid.offsetHeight;

  star.style.left = `${x}px`;
  star.style.top = `${y}px`;

  // Random twinkle duration + delay
  const duration = 1 + Math.random() * 2; // 1s to 3s
  const delay = Math.random() * 5; // 0s to 5s

  star.style.animationDuration = `${duration}s`;
  star.style.animationDelay = `${delay}s`;

  leftGrid.appendChild(star);

  // Remove star after full animation cycle
  setTimeout(() => {
    star.remove();
  }, (duration + delay) * 1000);
}

// Generate stars at intervals
setInterval(() => {
  createStar();
}, 50);

//CHECK IF ALL CHECKS ARE CHECKED




// ✅ Modal logic replaces old alert
checklist.forEach((box) => {
  box.checked = false;
  box.addEventListener("change", () => {
    const allChecked = Array.from(checklist).every((cb) => cb.checked);
    if (allChecked) {
      modal.style.display = "flex";
    }
  });
});

window.stayHere = () => {
  modal.style.display = "none";
};

window.goToNextLevel = () => {
  window.location.href = "../../sections/vea/vea-lvl1.html";
};
window.goToHome = () => {
  window.location.href = "../../home.html";
};

levelDropdown.addEventListener("change", function () {
  const selectedFile = this.value;
  location.href = `sections/css-styling/${selectedFile}`;
});

// 🟢 6. Dragbar resizing logic
  let isDragging = false;

  dragbar.addEventListener("mousedown", () => {
    isDragging = true;
    document.body.style.cursor = "col-resize";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.cursor = "default";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const containerRect = container.getBoundingClientRect();
    const newLeftWidth = e.clientX - containerRect.left;

    const minWidth = 100;
    const maxWidth = containerRect.width - 100;

    if (newLeftWidth > minWidth && newLeftWidth < maxWidth) {
      container.style.gridTemplateColumns = `${newLeftWidth}px 5px 1fr`;
    }
  });