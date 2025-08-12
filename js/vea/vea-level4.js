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
    <h1>Hello, my name is Captain Nova.</h1>
    <p class="subtitle">Welcome to Jupiter!</p>
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


/* 🎛️ Custom Properties */
:root {
  --bg-color: hsl(49 37% 94%);
  --typewriterSpeed: 6s;
  --typewriterCharacters: 31;
}

/* 🪐 Basic Page Layout */
body {
  margin: 0;
  font-family: "Source Code Pro", monospace;
  min-height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
  background: var(--bg-color);
}

/* 🔠 Main Title Styling */
h1 {
  font-size: clamp(1rem, 3vw + 1rem, 4rem);
  font-family: "Source Code Pro", monospace;
  position: relative;
  width: max-content;
}

/* 📝 Subtitle Styling */
.subtitle {
  font-family: "Source Code Pro", monospace;
  color: hsl(0 0% 0% / 0.7);
  font-size: 2rem;
  font-weight: 400;

  */ Edit values below */
  opacity: 1;                     
  transform: translateY(0);   
  
  */ Add Animation below */
}

/* 💡 Typewriter Cover Line*/
h1::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* Change background and add animation below */
  
}

/* ✨ Caret Line */
h1::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  /* Edit width below */
  width: 0;
  
  /* Edit background to black below */
  background: transparent; 

  /* Add animation below */
}

/* 🧠 Keyframes */
@keyframes typewriter {
  to {
    left: 100%;
  }
}

@keyframes blink {
  to {
    background: transparent;
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
/* 🎛️ Custom Properties */
:root {
  --bg-color: hsl(49 37% 94%);
  --typewriterSpeed: 6s;
  --typewriterCharacters: 31;
}

/* 🪐 Basic Page Layout */
body {
  margin: 0;
  font-family: "Source Code Pro", monospace;
  min-height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
  background: var(--bg-color);
}

/* 🔠 Main Title Styling */
h1 {
  font-size: clamp(1rem, 3vw + 1rem, 4rem);
  font-family: "Source Code Pro", monospace;
  position: relative;
  width: max-content;
}

/* 📝 Subtitle Styling */
.subtitle {
  font-family: "Source Code Pro", monospace;
  color: hsl(0 0% 0% / 0.7);
  font-size: 2rem;
  font-weight: 400;

  */ Edit values below */
  opacity: 1;                     
  transform: translateY(0);   
  
  */ Add Animation below */
}

/* 💡 Typewriter Cover Line*/
h1::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* Change background and add animation below */
  
}

/* ✨ Caret Line */
h1::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  /* Edit width below */
  width: 0;
  
  /* Edit background to black below */
  background: transparent; 

  /* Add animation below */
}

/* 🧠 Keyframes */
@keyframes typewriter {
  to {
    left: 100%;
  }
}

@keyframes blink {
  to {
    background: transparent;
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

`;

function revealSolution() {
  const confirmed = confirm("Reveal the completed solution?");
  if (confirmed) {
    editor.value = `
    :root {
        --bg-color: hsl(49 37% 94%);
        --typewriterSpeed: 6s;
        --typewriterCharacters: 31;
      }
      
      body {
        margin: 0;
        font-family: "Source Sans Pro", sans-serif;
        min-height: 100vh;
        display: grid;
        place-content: center;
        text-align: center;
        background: var(--bg-color);
      }
      
      h1 {
        font-size: clamp(1rem, 3vw + 1rem, 4rem);
        position: relative;
        font-family: "Source Code Pro", monospace;
        position: relative;
        width: max-content;
      }
      p {
        font-family: "Source Code Pro", monospace;
      }
      
      h1::before,
      h1::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      
      h1::before {
        background: var(--bg-color);
        animation: typewriter var(--typewriterSpeed)
          steps(var(--typewriterCharacters)) 1s forwards;
      }
      
      h1::after {
        width: 0.125em;
        background: black;
        animation: typewriter var(--typewriterSpeed)
            steps(var(--typewriterCharacters)) 1s forwards,
          blink 750ms steps(var(--typewriterCharacters)) infinite;
      }
      
      .subtitle {
        color: hsl(0 0% 0% / 0.7);
        font-size: 2rem;
        font-weight: 400;
        opacity: 0;
        transform: translateY(3rem);
        animation: fadeInUp 2s ease calc(var(--typewriterSpeed) + 2s) forwards;
      }
      
      @keyframes typewriter {
        to {
          left: 100%;
        }
      }
      
      @keyframes blink {
        to {
          background: transparent;
        }
      }
      
      @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
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