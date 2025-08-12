// ✅ Setup for modal functionality in CSS Styling Level 1
const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const htmlDisplay = document.getElementById("htmlDisplay");
const checklist = document.querySelectorAll('.checklist input[type="checkbox"]');
const modal = document.getElementById("completionModal");
const levelDropdown = document.getElementById("levels");
const leftGrid = document.querySelector(".left-grid");



// Default content when page loads
// Default content when page loads
editor.value = `<!DOCTYPE html>
<html>
  <head>
    <title>SpaceStyler - Level 3</title>
  </head>
  <body>

    <!-- section starts here -->

      <h1>Your name</h1>

          <h3>About me</h3

          <p>Paragraph about facts</p>


        <!-- section for "My Favorite Planets" -->
        <h1> My Favorite Planets</h1>
          <h3>Subheading</h3>
          <!-- make a list of at least 3 planets -->


      <!-- footer goes here (make up a last updated message) -->

    <!-- section ends here -->

  </body>
</html>
`;

const updatePreview = () => {
    let code = editor.value;
    code = code.replace(/<a\s+(?![^>]*\btarget=)/gi, '<a target="_blank" '); // auto add target="_blank"

    const doc = preview.contentDocument || preview.contentWindow.document;
    doc.open();
    doc.write(code);
    doc.close();
  };
  editor.addEventListener("input", updatePreview);
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
    <title>SpaceStyler - Level 3</title>
  </head>
  <body>

    <!-- section starts here -->

      <h1>Your name</h1>

          <h3>About me</h3

          <p>Paragraph about facts</p>


        <!-- section for "My Favorite Planets" -->
        <h1> My Favorite Planets</h1>
          <h3>Subheading</h3>
          <!-- make a list of at least 3 planets -->


      <!-- footer goes here (make up a last updated message) -->

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
      <title>SpaceStyler Level 3 Example</title>
    </head>
    <body>
    
      <!-- Main Profile Section -->
      <section>
        <header>
          <h1>Captain Nova</h1>
        </header>
    
        <div>
          <section>
            <h2>About Me</h2>
            <p>
              I'm a cosmic explorer trained on Mars.<br>
              I love black holes and building rovers.<br>
              I once high-fived a comet.
            </p>
          </section>
    
          <hr>
    
          <section>
            <h2>My Favorite Planets</h2>
            <ul>
              <li>Saturn (for the rings)</li>
              <li>Jupiter (for the storms)</li>
              <li>Earth (for the snacks)</li>
            </ul>
          </section>
        </div>
    
        <footer>
          Last updated: Stardate 2035.42
        </footer>
      </section>
    
      <!-- Optional Bonus: Astronaut Profile -->
      <section>
        <header>
          <h1>🧑‍🚀 Astronaut Profile: Captain Nova</h1>
        </header>
    
        <p>
          Explorer of deep space.<br>
          Fan of zero gravity and freeze-dried ice cream.<br>
          Currently stationed aboard SpaceStyler I.
        </p>
    
        <img src="../../photos/astronaut.jpg" alt="Astronaut portrait" width="200" />
    
        <div>
          <h3>My Space Skills</h3>
          <ul>
            <li>Moonwalking</li>
            <li>Satellite Repair</li>
            <li>Alien Diplomacy</li>
          </ul>
        </div>
    
        <footer>
          Joined SpaceStyler Academy in 2025
        </footer>
      </section>
    
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
  window.location.href = "html-basics-lvl4.html";
};

levelDropdown.addEventListener("change", function () {
  const selectedFile = this.value;
  location.href = `sections/html-basics/${selectedFile}`;
});