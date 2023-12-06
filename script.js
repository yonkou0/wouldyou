const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const mayBtn = document.querySelector(".maybe-btn")
const currentTimeSpan = document.getElementById("current-time");
const currentDateSpan = document.getElementById("current-date");

function showAffection(message, gifFileName) {
    question.innerHTML = message;
    gif.style.width = '250px';
    gif.style.height = '250px';
    gif.style.objectFit = 'cover';
    const gifUrl = `./assets/${gifFileName}`;
    gif.src = gifUrl;
}
/*
let totalYesCount = 0;
let totalNoCount = 0;
let totalMaybeCount = 0;
*/
function updateDateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', dateOptions);

    currentTimeSpan.textContent = `${hours}:${minutes}`;
    currentDateSpan.textContent = formattedDate;
}

mayBtn.addEventListener("click", () => {
    const maybeMessages = [
        "NO, you should definitely click Yes or No!",
        "Hmm, I'm waiting for your decision. Yes or No?",
        "Maybe? You know you want to choose Yes or No!",
    ];

    const randomIndex = Math.floor(Math.random() * maybeMessages.length);
    const maybeMessage = maybeMessages[randomIndex];

    // Add some effect here if needed

    showAffection(maybeMessage, "confused.gif");
    /*
 // Update total Maybe count
 totalMaybeCount++;
 document.getElementById("total-maybe").textContent = totalMaybeCount;
*/

    // Hide the maybeBtn after clicking
    mayBtn.style.display = 'none';
});

const yesMessages = [
    "Aaaaa, I like you too!",
    "Yay! You're the best!",
    "You made the right choice! I like you!",
    "Oh, I was hoping you'd say that!",
];

const noMessages = [
    "Ah, don't be like that! I like you.",
    "You're breaking my heart! Say yes!",
    "Please reconsider. I really like you.",
    "Nooo, why would you say no? I like you so much!",
];

yesBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * yesMessages.length);
    const yesMessage = yesMessages[randomIndex];

    showAffection(yesMessage, "happy.gif");
     // Update total Yes count
     /*
     totalYesCount++;
     document.getElementById("total-yes").textContent = totalYesCount;
     */
});

noBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * noMessages.length);
    const noMessage = noMessages[randomIndex];

    showAffection(noMessage, "sad.gif");
    /*
     // Update total No count
     totalNoCount++;
     document.getElementById("total-no").textContent = totalNoCount;
     */
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
