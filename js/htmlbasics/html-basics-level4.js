const editor = document.getElementById("editor");
const preview = document.getElementById("preview");


editor.addEventListener("input", () => {
  let code = editor.value;

  // Automatically add target="_blank" to all <a> tags without it
  code = code.replace(/<a\s+(?![^>]*\btarget=)/gi, '<a target="_blank" ');

  const doc = preview.contentDocument || preview.contentWindow.document;
  doc.open();
  doc.write(code);
  doc.close();
});

// Default content when page loads
// Default content when page loads
editor.value = `<!DOCTYPE html>
<html>
  <head>
    <title>SpaceStyler - Level 4</title>
  </head>
  <body>

    <!-- section starts here -->
    <section>

      <h1> Title </h1>

      <!-- About Me section -->
      <h3>About Me</h3>
      <p>
        Write a few fun facts about yourself here.<br>
        Try to make something bold.<br>
        And a different color!
      </p>



      <!-- Mission Log form section -->
      <h2>Log Today’s Mission</h2>
      <form onsubmit="return false;">
        
      </form>

      <!-- Footer section -->
      <footer>
        
      </footer>

    </section>
    <!-- section ends here -->

  </body>
</html>

`;

// Ensure layout is ready before writing to the iframe
window.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      editor.dispatchEvent(new Event("input"));
    });
  });
});

//divider drag
const dragbar = document.getElementById("dragbar");
const container = document.querySelector(".container");
let isDragging = false;

dragbar.addEventListener("mousedown", (e) => {
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

  // Clamp minimum and maximum widths if needed
  const minWidth = 100;
  const maxWidth = containerRect.width - 100;

  if (newLeftWidth > minWidth && newLeftWidth < maxWidth) {
    container.style.gridTemplateColumns = `${newLeftWidth}px 5px 1fr`;
  }
});

//STARS
const leftGrid = document.querySelector(".left-grid");

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
const checklist = document.querySelectorAll(
  '.checklist input[type="checkbox"]'
);
const completionModal = document.getElementById("completionModal");


//CHEAT SHEET
document.addEventListener("DOMContentLoaded", () => {
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

const originalCode = `<!DOCTYPE html>
<html>
  <head>
    <title>SpaceStyler - Level 4</title>
  </head>
  <body>

    <!-- section starts here -->
    <section>

      <h1> Title </h1>

      <!-- About Me section -->
      <h3>About Me</h3>
      <p>
        Write a few fun facts about yourself here.<br>
        Try to make something bold.<br>
        And a different color!
      </p>



      <!-- Mission Log form section -->
      <h2>Log Today’s Mission</h2>
      <form onsubmit="return false;">
        
      </form>

      <!-- Footer section -->
      <footer>
        
      </footer>

    </section>
    <!-- section ends here -->

  </body>
</html>

`;

function revealSolution() {
  const confirmed = confirm("Reveal the completed solution?");
  if (confirmed) {
    editor.value = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>SpaceStyler Level 4 Example</title>
</head>
<body>

  <!-- Commander Profile -->
  <section>
    <header>
      <h1>Commander Luna</h1>
    </header>

    <p>
      <strong>Galactic navigator</strong> from the <span style="color: red;">moon base</span>.<br>
      Specializes in asteroid dodging and alien greetings.<br>
      Favorite phrase: "Let's rocket!"
    </p>
  </section>

  <hr>

  <!-- Mission Summary -->
  <section>
    <h2>Today’s Mission Summary</h2>
    <img src="../../photos/mission.jpg" alt="Commander Luna on exoplanet" width="300" />
    <p>
      Landed on Gliese 581g and collected strange glowing crystals.<br>
      Encountered <strong>anomalous gravity wells</strong> near the crater.<br>
      A <span style="color: red;">danger</span> alert was triggered by unstable ground.
    </p>
  </section>

  <hr>

  <!-- Mission Log Form -->
  <section>
    <h2>Mission Log Entry</h2>
    <form onsubmit="return false;">
      <label for="missionLog">Log today’s discoveries:</label><br>
      <textarea id="missionLog" name="missionLog" placeholder="Describe your mission..."></textarea><br>
      <button type="submit">Submit Log</button>
    </form>
  </section>

  <footer>
    Log last updated: June 18, 2025
  </footer>

</body>
</html>
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
    window.location.href = "../../sections/css-styling/css-styling-lvl1.html";
  };
  window.goHome = () => {
    window.location.href = "../../home.html";
  };
