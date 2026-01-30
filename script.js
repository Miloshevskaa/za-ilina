const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const gif = document.getElementById("gif");

let noClicks = 0;
let yesScale = 1;
let noScale = 1;

noBtn.addEventListener("click", () => {
    noClicks++;

    if (noClicks === 1) {
        noBtn.textContent = "Are you sure? 😢";
        gif.src = "images/sad.gif";
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
        gif.src = "images/sad.gif";
    } 
    else {
        moveNoButton();
    }
});

function moveNoButton() {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    noBtn.style.transform = `translate(${x}px, ${y}px) scale(${noScale})`;
}

yesBtn.addEventListener("click", () => {
    gif.src = "images/happy.gif";
    message.textContent = "YAYYYY!! 💖💖💖 I knew it!";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

