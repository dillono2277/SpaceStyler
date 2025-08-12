const checklist = document.querySelectorAll('.checklist input[type="checkbox"]');
  const modal = document.getElementById("completionModal");

window.addEventListener("DOMContentLoaded", () => {
  const editor = document.getElementById("editor");
  const preview = document.getElementById("preview");
  const dragbar = document.getElementById("dragbar");
  const container = document.querySelector(".container");
  const leftGrid = document.querySelector(".left-grid");
  const checklist = document.querySelectorAll('.checklist input[type="checkbox"]');
  const completionModal = document.getElementById("completionModal");
  const levelDropdown = document.getElementById("levels");
  const helpBtn = document.querySelector(".button-text");
  const cheatSheet = document.getElementById("cheatSheetOverlay");


checklist.forEach((box) => (box.checked = false));

  // =========================
  // CHEAT SHEET
  // =========================
  if (helpBtn && cheatSheet) {
    helpBtn.addEventListener("click", () => {
      cheatSheet.style.display = "block";
    });

    window.closeCheatSheet = () => {
      cheatSheet.style.display = "none";
    };
  }

  // =========================
  // HTML Editor + Live Preview
  // =========================
  editor.value = `<!DOCTYPE html>
<html>
<head>
  <style>
    h1 { color: blue; }
  </style>
</head>
<body>
  <h1>Hello, world!</h1>
  <img src = "" alt = "tigerImg">
  <p>Place your image right above me!</p>
</body>`;

  const updatePreview = () => {
    let code = editor.value;
    code = code.replace(/<a\s+(?![^>]*\btarget=)/gi, '<a target="_blank" '); // auto add target="_blank"

    const doc = preview.contentDocument || preview.contentWindow.document;
    doc.open();
    doc.write(code);
    doc.close();
  };

  editor.addEventListener("input", updatePreview);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      editor.dispatchEvent(new Event("input"));
    });
  });

  // =========================
  // COMPLETED / RESET BUTTONS
  // =========================
  const originalCode = `<!DOCTYPE html>
<html>
<head>
  <style>
    h1 { color: blue; }
  </style>
</head>
<body>
  <h1>Hello, world!</h1>
  <img src="" alt="tigerImg">
  <p>Place your image right above me!</p>
</body>
</html>`;

  window.revealSolution = () => {
    const confirmed = confirm("Reveal the completed solution?");
    if (confirmed) {
      editor.value = `<!DOCTYPE html>
<html>
<head>
  <style>
    h1 { color: blue; }
  </style>
</head>
<body>
  <h1>Hello, world!</h1>
  <img src="../../photos/tiger.jpg" width="300" alt="tigerImg">
  <br>
  <a href="https://en.wikipedia.org/wiki/Tiger" target="_blank">Click here</a>
  <ul>
    <li><strong>Tigers roar</strong></li>
    <li><em>Tigers dance</em></li>
  </ul>
  <p>Place your image right above me!</p>
</body>
</html>`;
      editor.dispatchEvent(new Event("input"));
    }
  };

  window.resetCode = () => {
    const confirmed = confirm("Are you sure you want to reset your code?");
    if (confirmed) {
      editor.value = originalCode;
      editor.dispatchEvent(new Event("input"));
    }
  };




 

  // =========================
  // DRAGBAR FUNCTIONALITY
  // =========================
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

  // =========================
  // STARS BACKGROUND
  // =========================
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
    setTimeout(() => {
      star.remove();
    }, (duration + delay) * 1000);
  }

  setInterval(createStar, 50);
});

const levelDropdown = document.getElementById("levels");
  levelDropdown.addEventListener("change", function () {
    const selectedFile = this.value;
    location.href = `sections/html-basics/${selectedFile}`;
  });

  // =========================
  // CHECKLIST + MODAL LOGIC
  // =========================
  checklist.forEach((box) => {
    box.checked = false; // reset on load
    box.addEventListener("change", () => {
      const allChecked = Array.from(checklist).every(cb => cb.checked);
      console.log("Modal state:", Array.from(checklist).map(b => b.checked));
      if (allChecked) {
        completionModal.style.display = "flex";
      }
    });
  });

  window.stayHere = () => {
    completionModal.style.display = "none";
  };

  window.goToNextLevel = () => {
    window.location.href = "html-basics-lvl3.html";
  };