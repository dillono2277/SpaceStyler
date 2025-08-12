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
  <nav class="space-nav">
    <h1>🛰 Space Lab</h1>
  </nav>

  <section class="lab-container">
    <div class="control-panel">
      <h2>Control Panel</h2>
      <p>Use the properties on the right to adjust layout behavior.</p>
    </div>

    <div class="output-area">
      <h2>Mission Output</h2>
      <p>Live feed from the galaxy observatory. Data is overflowing!</p>
    </div>
  </section>

  <div class="checklist-container">
  <h3>🧪 Lab Checklist</h3>
  <ul class="checklist">
    <li><input type="checkbox" />Fill the plasma tanks with space juice</li>
    <li><input type="checkbox" />Dock the navigation panel to the lab deck</li>
    <li><input type="checkbox" />Calibrate the anti-gravity stabilizers</li>
    <li><input type="checkbox" />Contain the dark matter overflow in Sector 7</li>
    <li><input type="checkbox" />Seal the containment chamber with magnetic locks</li>
    <li><input type="checkbox" />Align the power cores for maximum output</li>
    <li><input type="checkbox" />Activate the hover cursor for remote tools</li>
  </ul>
</div>
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
  background-color: #fff;
  color: #000;
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  padding: 2rem;
  /* Center all text */
}

/* 🛰 Sticky Top Nav */
.space-nav {
  /* Use position and z-index */
}

/* 🧪 Flexbox Lab Layout */
.lab-container {
  /* Use flex to layout two side-by-side panels */
}

/* 🖥 Left and Right Panel */
.control-panel, .output-area {
  width: 45%;
  /* Add overflow behavior and padding */
}

/* 📡 Right Panel */
.output-area:hover {
  width: 45%;
  /* Handle overflow scroll and limit max-width */
}

/* ✅ Checklist */
.checklist-container {
  margin-top: 2rem;
  /* Add basic border and spacing */
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
  background-color: #fff;
  color: #000;
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  padding: 2rem;
  /* Center all text */
}

/* 🛰 Sticky Top Nav */
.space-nav {
  /* Use position and z-index */
}

/* 🧪 Flexbox Lab Layout */
.lab-container {
  /* Use flex to layout two side-by-side panels */
}

/* 🖥 Left and Right Panel */
.control-panel, .output-area {
  width: 45%;
  /* Add overflow behavior and padding */
}

/* 📡 Right Panel */
.output-area:hover {
  width: 45%;
  /* Handle overflow scroll and limit max-width */
}

/* ✅ Checklist */
.checklist-container {
  margin-top: 2rem;
  /* Add basic border and spacing */
}


`;

function revealSolution() {
  const confirmed = confirm("Reveal the completed solution?");
  if (confirmed) {
    editor.value = `
    body {
        background-color: #fff;
        color: #000;
        font-family: 'Segoe UI', sans-serif;
        padding: 2rem;
        text-align: center;
        box-sizing: border-box;
      }
      
      .space-nav {
        background-color: #000;
        color: #fff;
        padding: 1rem;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
      }
      
      .lab-container {
        display: flex;
        justify-content: space-between;
        margin-top: 100px;
        gap: 2rem;
        padding: 1rem;
      }
      
      .control-panel, .output-area {
        width: 45%;
        padding: 1rem;
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        border-radius: 10px;
        max-width: 500px;
        overflow: auto;
        cursor: default;
      }
      
      .output-area:hover {
        cursor: pointer;
      }
      
      .checklist-container {
        margin-top: 2rem;
        border: 1px solid #000;
        border-radius: 8px;
        padding: 1rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        text-align: left;
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


function checkIfComplete() {
  const allChecked = Array.from(checklist).every((box) => box.checked);
  if (allChecked) {
    alert("🎉 Level Complete! Ready for the next one!");
    // You could show a button, change levels, etc. here
  }
}

checklist.forEach((box) => {
  box.addEventListener("change", checkIfComplete);
});

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
  window.location.href = "css-styling-lvl4.html";
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