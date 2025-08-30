/* ---------------- JAR PROJECT ---------------- */
const jar = document.querySelector(".jar");
const starsContainer = document.querySelector(".stars");
const messagesBox = document.getElementById("messages");

const colors = ["yellow", "blue", "pink"];

// Fill jar dynamically with stars
function fillJar() {
    starsContainer.innerHTML = "";
    const rows = 8;
    const cols = 5;
    const totalStars = rows * cols;

    for (let i = 0; i < totalStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star", colors[Math.floor(Math.random() * colors.length)]);

        // Randomize size + rotation
        const scale = 0.8 + Math.random() * 0.6;
        const rotation = Math.floor(Math.random() * 360);
        star.style.transform = `rotate(${rotation}deg) scale(${scale})`;

        starsContainer.appendChild(star);
    }
}
fillJar();

// Reassurance messages
const messages = [
    "You're doing better than you think 💛",
    "It’s okay to take a break 🌸",
    "You are stronger than you know ✨",
    "Don’t worry, you got this 🌟",
    "Your feelings are valid 💙",
    "Keep going, you’re amazing 🌈"
];

function addMessage() {
    jar.classList.add("shake");
    setTimeout(() => jar.classList.remove("shake"), 400);

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Add to message board
    const newMsg = document.createElement("div");
    newMsg.textContent = randomMessage;
    messagesBox.appendChild(newMsg);

    // Auto scroll to bottom
    messagesBox.scrollTop = messagesBox.scrollHeight;
}

// Shake detection for mobile
if (window.DeviceMotionEvent) {
    let lastX, lastY, lastZ;
    let threshold = 15;

    window.addEventListener("devicemotion", function(event) {
        let { x, y, z } = event.accelerationIncludingGravity;
        if (lastX !== undefined && lastY !== undefined && lastZ !== undefined) {
            let deltaX = Math.abs(x - lastX);
            let deltaY = Math.abs(y - lastY);
            let deltaZ = Math.abs(z - lastZ);

            if (deltaX + deltaY + deltaZ > threshold) {
                addMessage();
            }
        }
        lastX = x; lastY = y; lastZ = z;
    }, false);
}

/* ---------------- SCROLL FUNCTION ---------------- */
function scrollToJar() {
    document.getElementById("jar").scrollIntoView({
        behavior: "smooth"
    });
}
