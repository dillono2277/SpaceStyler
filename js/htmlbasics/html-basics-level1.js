const checklist = document.querySelectorAll('.checklist input[type="checkbox"]');
const modal = document.getElementById("completionModal");

  // ✅ FIRST: Reset checkboxes
  checklist.forEach((box) => box.checked = false);

window.addEventListener("DOMContentLoaded", () => {
  const editor = document.getElementById("editor");
  const preview = document.getElementById("preview");
  const checklist = document.querySelectorAll('.checklist input[type="checkbox"]');
  const modal = document.getElementById("completionModal");
  const dragbar = document.getElementById("dragbar");
  const container = document.querySelector(".container");
  const levelDropdown = document.getElementById("levels");
  const leftGrid = document.querySelector(".left-grid");

  // 🟢 1. Reset all checkboxes on load to avoid false modal
  checklist.forEach((box) => (box.checked = false));

  // 🟢 2. Setup live preview
  editor.value = `<!DOCTYPE html>
<html>
<head>
  <style>
    h1 { color: blue; }
  </style>
</head>
<body>
  <h1>Hello, world!</h1>
  <p>Edit me in the box above!</p>
</body>`;

  const updatePreview = () => {
    const code = editor.value;
    const doc = preview.contentDocument || preview.contentWindow.document;
    doc.open();
    doc.write(code);
    doc.close();
  };

  editor.addEventListener("input", updatePreview);

  // Trigger preview after DOM is fully ready
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      editor.dispatchEvent(new Event("input"));
    });
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

  // 🟢 7. Space star animation
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
    window.location.href = "html-basics-lvl2.html";
  };