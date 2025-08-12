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
<h1>Mission Control</h1>
<p>Welcome to SpaceStyler.</p>
<div class="alien-green">I am a green alien.</div>
<div class="alien-blue">I am a blue alien.</div>
<p id="commander">Commander on duty</p>
<div class="ranks">
  <span>Lieutenant</span>
  <div><span>Cadet</span></div>
</div>
<button>Engage</button>
`;

htmlDisplay.textContent = staticHTML.trimStart();

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

editor.value = `
h1 {
  color: red;
}

.alien-green {

}
`;

window.addEventListener("DOMContentLoaded", () => {
  loadBaseHTML();
  requestAnimationFrame(updateCSS);

  // Cheat Sheet Setup
  const helpBtn = document.querySelector(".button-text");
  const cheatSheet = document.getElementById("cheatSheetOverlay");
  if (helpBtn && cheatSheet) {
    helpBtn.addEventListener("click", () => {
      cheatSheet.style.display = "block";
    });
    window.closeCheatSheet = () => {
      cheatSheet.style.display = "none";
    };
  }
});

// Solution + Reset Buttons
const originalCode = `
h1 {
  color: red;
}

.alien-green {

}
`;

function revealSolution() {
  const confirmed = confirm("Reveal the completed solution?");
  if (confirmed) {
    editor.value = `/* 1. Style the element selector: Change all <p> colors */
    p {
      color: orange;
    }

    /* 2. Style by class: Make the .alien-green background green */
    .alien-green {
      background-color: green;
    }

    /* 3. Style by ID: Make #commander text bold */
    #commander {
      font-weight: bold;
    }

    /* 4. Use a pseudo-class: Change button color on hover */
    button:hover {
      background-color: blue;
      color: white;
    }

    /* 5. Use a child selector to style only direct child <span> tags */
    .ranks > span {
      text-transform: uppercase;
      color: crimson;
    }
    `;
    editor.dispatchEvent(new Event("input"));
  }
}

function resetCode() {
  const confirmed = confirm("Are you sure you want to reset your code?");
  if (confirmed) {
    editor.value = originalCode;
    editor.dispatchEvent(new Event("input"));
  }
}

// Star generator
function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  const x = Math.random() * leftGrid.offsetWidth;
  const y = Math.random() * leftGrid.offsetHeight;
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;
  const duration = 1 + Math.random() * 2;
  const delay = Math.random() * 5;
  star.style.animationDuration = `${duration}s`;
  star.style.animationDelay = `${delay}s`;
  leftGrid.appendChild(star);
  setTimeout(() => star.remove(), (duration + delay) * 1000);
}
setInterval(() => createStar(), 50);

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
  window.location.href = "css-styling-lvl2.html";
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