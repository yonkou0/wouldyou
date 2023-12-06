const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const currentTimeSpan = document.getElementById("current-time");
const currentDateSpan = document.getElementById("current-date");

function showAffection(message, gifFileName) {
    question.innerHTML = message;

    // Assuming the GIFs are stored in the 'assets' folder
    const gifUrl = `./assets/${gifFileName}`;
    gif.src = gifUrl;
}

function updateDateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', dateOptions);

    currentTimeSpan.textContent = `${hours}:${minutes}`;
    currentDateSpan.textContent = formattedDate;
}

yesBtn.addEventListener("click", () => {
    showAffection("Aaaaa, I like you too", "happy.gif");
});

noBtn.addEventListener("click", () => {
    showAffection("Ah, I like you so much. Please love me.", "sad.gif");
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

// Update current date and time initially and every minute
updateDateTime();
setInterval(updateDateTime, 60000);
