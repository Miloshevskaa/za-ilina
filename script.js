<button id="yesBtn">Yes</button>
<button id="noBtn">No</button>
<p id="message"></p>

<style>
  #yesBtn, #noBtn {
    padding: 10px 20px;
    font-size: 18px;
    margin: 10px;
    cursor: pointer;
    transition: transform 0.3s ease, left 0.2s ease, top 0.2s ease;
    position: absolute; /* so we can move it anywhere */
  }
  #message {
    font-size: 24px;
    margin-top: 50px;
  }
</style>

<script>
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let noClicks = 0;
let yesScale = 1;
let noScale = 1;

// Position buttons initially
yesBtn.style.left = "100px";
yesBtn.style.top = "100px";
noBtn.style.left = "300px";
noBtn.style.top = "100px";

noBtn.addEventListener("click", () => {
    noClicks++;

    if (noClicks === 1) {
        noBtn.textContent = "Are you sure? 😢";
    } 
    else if (noClicks === 2) {
        noBtn.textContent = "Please? 🥺";
    } 
    else if (noClicks === 3) {
        noBtn.textContent = "Think again 😳";
        yesScale += 0.3;
        noScale -= 0.2;
        yesBtn.style.transform = `scale(${yesScale})`;
        noBtn.style.transform = `scale(${noScale})`;
    } 
    else if (noClicks === 4) {
        noBtn.textContent = "Don’t do this 😭";
        yesScale += 0.4;
        noScale -= 0.3;
        yesBtn.style.transform = `scale(${yesScale})`;
        noBtn.style.transform = `scale(${noScale})`;
    } 
    else if (noClicks === 5) {
        noBtn.textContent = "Last chance 😭";
    } 
});

// Make No button run away from cursor after 5 clicks
document.addEventListener("mousemove", (e) => {
    if (noClicks < 5) return;

    const rect = noBtn.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const btnX = rect.left + rect.width / 2;
    const btnY = rect.top + rect.height / 2;

    const dx = btnX - mouseX;
    const dy = btnY - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Move only if cursor is close
    if (distance < 150) {
        const moveX = (dx / distance) * 100; // scale movement
        const moveY = (dy / distance) * 100;

        let newX = rect.left + moveX;
        let newY = rect.top + moveY;

        // Keep inside viewport
        newX = Math.max(0, Math.min(window.innerWidth - rect.width, newX));
        newY = Math.max(0, Math.min(window.innerHeight - rect.height, newY));

        noBtn.style.left = newX + "px";
        noBtn.style.top = newY + "px";
    }
});

yesBtn.addEventListener("click", () => {
    message.textContent = "YAYYY!! 💖💖💖";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});
</script>
