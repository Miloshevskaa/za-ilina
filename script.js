const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let noClicks = 0;

const noTexts = [
    "No 💔",
    "Are you sure? 😢",
    "Think again 😭",
    "Last chance 😳"
];

let yesScale = 1;
let noScale = 1;

noBtn.addEventListener("click", () => {
    noClicks++;

    // Change text
    if (noClicks < noTexts.length) {
        noBtn.textContent = noTexts[noClicks];
    }

    // Resize buttons
    yesScale += 0.2;
    noScale -= 0.15;

    yesBtn.style.transform = `scale(${yesScale})`;
    noBtn.style.transform = `scale(${Math.max(noScale, 0.4)})`;

    // Last chance behavior
    if (noClicks >= noTexts.length - 1) {
        moveNoButton();
    }
});

function moveNoButton() {
    const container = document.querySelector(".container");

    const maxX = container.offsetWidth - noBtn.offsetWidth;
    const maxY = container.offsetHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

yesBtn.addEventListener("click", () => {
    message.textContent = "YAY 💖 I knew it!";
    noBtn.style.display = "none";
});
