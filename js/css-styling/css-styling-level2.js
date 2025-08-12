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
<!DOCTYPE html>
<html>
  <head>
    <title>CSS Styling Level 2</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="space-card">
      <h2 class="card-title">Mission Brief</h2>
      <p class="card-content">Your objective is to style this panel to meet all layout goals.</p>
    </div>

    <div class="announcement">
      <p>All crew must report to the command deck immediately.</p>
    </div>

    <div class="galaxy-banner">
      <p>Prepare for launch</p>
    </div>
  </body>
</html>

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


body {
  background-color: #000;
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
  padding: 2rem;
  /* Align ALL text using text-align */
}

/* 🪐 Space Card */
.space-card {
  width: 60%;
  margin: 2rem auto;
  background-color: #111;
  /* Add padding, border, shadow, and rounded corners */
}


/* 🌠 Galaxy Banner */
.galaxy-banner {
  height: 150px;
  background-image: url('../../photos/galaxy.jpg');
  /* Style the image and center the content */
}

/* 📝 Card Content */
.card-content {
  font-size: 1rem;
  /* Improve spacing and text appearance */
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


body {
  background-color: #000;
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
  padding: 2rem;
  /* Align ALL text using text-align */
}

/* 🪐 Space Card */
.space-card {
  width: 60%;
  margin: 2rem auto;
  background-color: #111;
  /* Add padding, border, shadow, and rounded corners */
}


/* 🌠 Galaxy Banner */
.galaxy-banner {
  height: 150px;
  background-image: url('../../photos/galaxy.jpg');
  /* Style the image and center the content */
}

/* 📝 Card Content */
.card-content {
  font-size: 1rem;
  /* Improve spacing and text appearance */
}

`;

function revealSolution() {
  const confirmed = confirm("Reveal the completed solution?");
  if (confirmed) {
    editor.value = `
        body {
            background-color: #000;
            color: #fff;
            font-family: 'Segoe UI', sans-serif;
            padding: 2rem;
            text-align: center;
        }
      
      
        .space-card {
        margin: 2rem auto;           
        width: 60%;
        padding: 1.5rem;             
        border: 2px solid #0ff;      
        box-shadow: 0 0 15px #0ff;   
        border-radius: 12px;         
        }

      
      
      
      
      .galaxy-banner {
        background-image: url('../../photos/galaxy.jpg');
        background-size: cover;
        background-position: center;
        height: 150px;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px;
        margin: 0 auto;

      }
      
      
      .card-content {
        line-height: 1.8;
        letter-spacing: 0.5px;
        text-transform: capitalize;
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
  window.location.href = "css-styling-lvl3.html";
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