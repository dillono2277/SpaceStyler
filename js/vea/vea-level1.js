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

<button class="space-btn">Hover!</button>

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
h1 {
    color: red;
  }
  
  .space-btn {
    background-color: blue;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    transition: transform 1s, background-color 1s, box-shadow 1s;
    display: block;
    margin: 100px auto; /* Center the button */
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
h1 {
    color: red;
  }
  
  .space-btn {
    background-color: blue;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    transition: transform 1s, background-color 1s, box-shadow 1s;
    display: block;
    margin: 100px auto; /* Center the button */
  }
  

`;

function revealSolution() {
  const confirmed = confirm("Reveal the completed solution?");
  if (confirmed) {
    editor.value = `
        .space-btn {
        background-color: blue;
        color: white;
        padding: 12px 24px;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        transition: transform 1s, background-color 1s, box-shadow 1s;
        display: block;
        margin: 100px auto;
      }
      
      .space-btn:hover {
        background-color: #39ff14; /* Neon green */
        transform: translateX(20px) rotate(360deg);
        box-shadow: 0 0 20px #39ff14, 0 0 40px #39ff14;
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
  window.location.href = "vea-lvl2.html";
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