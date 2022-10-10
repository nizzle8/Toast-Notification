const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messasges = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four"
]

button.addEventListener("click", () => createNotification());

function createNotification() {
    const notif = document.createElement("div");
    notif.classList.add("toast");

    notif.innerText = getRandomMessage();
    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}

function getRandomMessage() {
    return messasges[Math.floor(Math.random() * messasges.length)];
}