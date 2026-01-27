const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let noClicks = 0;
let yesScale = 1;
let noScale = 1;

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
    message.textContent = "YAYYY!! 💖💖💖";

    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    setTimeout(() => {
        window.location.href = "https://www.instagram.com/TVOETO_KORISNICKO/";
    }, 1000);
});