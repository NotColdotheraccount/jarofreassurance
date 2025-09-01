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
    "You have the most beautiful eyes, they make me happy.",
    "I love how hard you try, it makes me proud.",
    "Your smile can make anyone feel better.",
    "I will always be here for you, you are not alone.",
    "You handle hard things very well, I admire that.",
    "Your laugh makes everything better.",
    "You are stronger than you think, never forget it.",
    "You are kind and thoughtful, it shows.",
    "Being with you makes my day better.",
    "I believe in you even if you doubt yourself.",
    "You are creative and have a special mind.",
    "You are never alone, I will always be with you.",
    "I love the way you think, it is amazing.",
    "You make people feel happy just by being you.",
    "You are patient and understanding, I respect that.",
    "You are brave and strong, it inspires me.",
    "I love how much you care about things you like.",
    "You bring light to everyone around you.",
    "I am proud of what you have done so far.",
    "You are beautiful inside and outside, never forget it.",
    "I will always listen to you, it is important to me.",
    "Your energy makes me feel happy.",
    "You can do amazing things, I know it.",
    "I love how real and true you are.",
    "Your hugs make me feel safe and calm.",
    "You are thoughtful to everyone around you.",
    "You make normal things feel special.",
    "You are strong when things are hard.",
    "You are an important part of my life.",
    "I will support you in everything, always.",
    "You are smart and your thoughts are great.",
    "I love how your eyes shine when you are happy.",
    "You have a kind heart, it shows in everything.",
    "I am happy you are in my life.",
    "Your jokes make my bad days better.",
    "You are one of a kind, I love that.",
    "You try to be better every day, I admire it.",
    "I am always on your side.",
    "You make the world better just by being here.",
    "You are honest and I respect you for it.",
    "I love how curious and adventurous you are.",
    "You are beautiful even if you do not see it.",
    "I am proud to know you and be with you.",
    "Your voice is calm and makes me feel safe.",
    "I love the little things that make you unique.",
    "You can handle anything that comes to you.",
    "I will always cheer for you and help you.",
    "Your eyes tell stories without words.",
    "You stay calm in hard situations, it is great.",
    "You make my life brighter just by being here.",
    "I love how much you care for others.",
    "You are stronger than the problems you face.",
    "Your heart is pure and it shows in everything you do.",
    "You have a way of making people feel important.",
    "I enjoy every moment I spend with you.",
    "Your confidence is beautiful and inspiring.",
    "You make the small things in life feel special.",
    "I admire your honesty and trustworthiness.",
    "You are capable of amazing things.",
    "You are the kindest person I know.",
    "Your presence makes me feel calm and happy.",
    "You are very talented and it shows in everything.",
    "I love how determined you are, never give up.",
    "Your ideas are smart and creative.",
    "You have the best sense of humor.",
    "You make people smile without trying.",
    "You are patient and understanding with everyone.",
    "You are brave even when you feel scared.",
    "You have a beautiful mind and heart.",
    "You make me want to be a better person.",
    "I love how much effort you put in everything.",
    "You are thoughtful and caring to everyone.",
    "You always know how to make me feel better.",
    "You are a beautiful person inside and out.",
    "I admire your strength during hard times.",
    "You are loved and appreciated more than you know.",
    "You have a way of making me feel safe.",
    "Your determination inspires me every day.",
    "I love your unique style and personality.",
    "You have a calm and gentle presence.",
    "You are always worth celebrating.",
    "Your honesty is refreshing and admirable.",
    "You have a way of making people feel special.",
    "You are strong even when you do not see it.",
    "You are kind to everyone you meet.",
    "Your smile can light up a room.",
    "I admire how much you care for people.",
    "You are brave and face challenges well.",
    "You are important and valued.",
    "Your heart is full of love and kindness.",
    "You are unique and that is beautiful.",
    "You make life brighter just by being you.",
    "You are never alone, I will always be with you.",
    "Your creativity is amazing and inspiring.",
    "I love your sense of humor and joy.",
    "You are beautiful just the way you are.",
    "You make the world a better place.",
    "Your courage is inspiring to me.",
    "You are loved more than you know.",
    "You are patient and thoughtful.",
    "You always try your best and it shows.",
    "You are special and important to me.",
    "Your kindness touches everyone around you.",
    "I am proud of the person you are.",
    "You make every day better by being in it.",
    "Your energy and spirit are wonderful.",
    "You are capable of handling anything.",
    "You are strong, even in hard times.",
    "Your thoughts and ideas are valuable.",
    "You make people feel happy and safe.",
    "You are loved for being yourself.",
    "You have a wonderful personality.",
    "You are caring and compassionate.",
    "I love your laugh and it makes me happy.",
    "You make people feel appreciated.",
    "You are brave and face your fears.",
    "You have a beautiful soul and heart.",
    "You are inspiring to everyone around you.",
    "Your patience is admirable and rare.",
    "You make people feel loved and special.",
    "You are talented and skilled at many things.",
    "You have a gentle and caring nature.",
    "You are always worth believing in.",
    "You make life happier by being in it.",
    "You are honest and true.",
    "Your thoughts and feelings are important.",
    "You have a beautiful way of seeing the world.",
    "You are strong in mind and heart.",
    "You make me feel happy and calm.",
    "You are thoughtful in everything you do.",
    "Your smile makes the world brighter.",
    "You are capable of amazing things every day.",
    "You have a kind and loving heart.",
    "You are never alone, I will be with you.",
    "You are amazing just the way you are.",
    "Your presence makes me feel safe.",
    "You are loved and appreciated always.",
    "Your strength inspires me every day.",
    "You have a way of making people feel valued.",
    "You are beautiful inside and out.",
    "You make people feel happy just by being there.",
    "You are brave and strong, never forget that.",
    "You are thoughtful and caring to everyone around you.",
    "You have a unique way of looking at life.",
    "You make life more fun and happy.",
    "You are important and your feelings matter.",
    "Your kindness is a gift to everyone.",
    "You are loved for who you are.",
    "You are smart and capable.",
    "You make people feel happy and safe.",
    "Your heart is full of love and care.",
    "You are amazing at everything you try.",
    "You are special and important to me.",
    "You have a positive energy that inspires others.",
    "You are strong and brave every day.",
    "You make people feel loved and valued.",
    "You are creative and talented.",
    "You are kind, thoughtful, and caring.",
    "You are beautiful inside and out.",
    "You are loved more than you know.",
    "You are important and make a difference.",
    "You have a way of making people happy.",
    "You are patient, caring, and understanding.",
    "You are capable of handling anything.",
    "You are special just for being you.",
    "You are brave and face challenges with strength.",
    "You make people feel safe and calm.",
    "You are strong and resilient.",
    "You are loved for your unique self.",
    "You make the world a better place.",
    "You are kind, loving, and thoughtful.",
    "You are amazing and capable.",
    "You are beautiful in so many ways.",
    "You are loved and appreciated always.",
    "You are brave, strong, and important.",
    "You make people feel happy and loved.",
    "You are thoughtful, kind, and caring.",
    "You are amazing just the way you are.",
    "You are loved and valued every day.",
    "You are strong, brave, and capable.",
    "You are unique, special, and important.",
    "You make life better by being here.",
    "You are loved, appreciated, and respected.",
    "You are kind, loving, and brave.",
    "You are strong, caring, and amazing.",
    "You are special, unique, and valued.",
    "You are loved for who you are always.",
    "You are amazing, strong, and beautiful.",
    "You are brave, kind, and thoughtful.",
    "You are loved, appreciated, and important.",
    "You are strong, special, and unique.",
    "You are beautiful, loving, and amazing.",
    "You are kind, brave, and valued.",
    "You are loved, respected, and appreciated.",
    "You are amazing, special, and unique.",
    "You are strong, loving, and important.",
    "You are beautiful, kind, and thoughtful.",
    "You are loved, valued, and appreciated.",
    "You are brave, special, and amazing.",
    "You are strong, loved, and unique.",
    "You are kind, beautiful, and important.",
    "You are loved, strong, and appreciated.",
    "You are amazing, brave, and valued.",
    "You are special, kind, and respected.",
    "You are loved, unique, and important.",
    "You are strong, amazing, and beautiful.",
    "You are kind, loved, and valued.",
    "You are appreciated, respected, and loved.",
    "You are amazing, special, and strong.",
    "You are beautiful, kind, and important.",
    "You are loved, brave, and respected.",
    "You are valued, strong, and amazing.",
    "You are special, beautiful, and loved.",
    "You are kind, important, and appreciated.",
    "You are amazing, loved, and strong.",
    "You are brave, respected, and special.",
    "You are beautiful, loved, and valued.",
    "You are kind, amazing, and important.",
    "You are strong, special, and loved.",
    "You are appreciated, beautiful, and brave.",
    "You are amazing, loved, and valued.",
    "You are kind, strong, and important.",
    "You are special, loved, and respected.",
    "You are beautiful, amazing, and strong.",
    "You are loved, valued, and important.",
    "You are brave, kind, and appreciated.",
    "You are amazing, special, and loved.",
    "You are strong, beautiful, and important.",
    "You are loved, respected, and valued.",
    "You are kind, brave, and amazing.",
    "You are special, loved, and appreciated.",
    "You are strong, beautiful, and respected.",
    "You are amazing, loved, and important.",
    "You are kind, valued, and appreciated.",
    "You are loved, strong, and amazing.",
    "You are special, beautiful, and important.",
    "You are brave, loved, and respected.",
    "You are amazing, kind, and valued.",
    "You are loved, special, and appreciated.",
    "You are strong, amazing, and important.",
    "You are beautiful, loved, and respected.",
    "You are kind, special, and appreciated.",
    "You are amazing, loved, and strong.",
    "You are valued, beautiful, and important.",
    "You are loved, brave, and amazing.",
    "You are special, kind, and respected.",
    "You are loved, strong, and important.",
    "You are amazing, beautiful, and valued.",
    "Your eyes always make me feel calm and happy.",
    "You have a smile that can light up the whole room.",
    "I love how much effort you put into everything you do.",
    "Your laugh makes everything feel better.",
    "You are stronger than you think, never forget that.",
    "You are kind, thoughtful, and caring to everyone.",
    "I will always be here to support you.",
    "You make people feel special without trying.",
    "Your creativity is amazing and inspiring.",
    "You are brave even when things are hard.",
    "You are beautiful just the way you are.",
    "Your thoughts and ideas are valuable.",
    "I love how honest and real you are.",
    "You are patient and it shows in everything you do.",
    "You bring joy to everyone around you.",
    "I am proud of you every single day.",
    "Your energy is positive and uplifting.",
    "You make ordinary moments feel magical.",
    "You have a heart full of love and kindness.",
    "You are unique and very special.",
    "You always try your best, and it shows.",
    "Your smile makes my day brighter.",
    "You are strong, brave, and capable.",
    "You are loved for exactly who you are.",
    "I will always listen to you and be here.",
    "You have a gentle and caring nature.",
    "Your courage inspires me every day.",
    "You make people feel appreciated and happy.",
    "You are amazing at handling challenges.",
    "Your personality is beautiful and uplifting.",
    "I love how much you care for the people around you.",
    "You are never alone, I will always be here.",
    "Your laughter is contagious and brings joy.",
    "You are smart, creative, and talented.",
    "You make my life better just by being in it.",
    "You are thoughtful in ways that matter a lot.",
    "Your eyes shine when you are excited or happy.",
    "You are brave and face life with determination.",
    "You make people feel safe and valued.",
    "You are loved more than you realize.",
    "Your kindness leaves a mark on everyone you meet.",
    "You have a unique and wonderful way of thinking.",
    "You make the world brighter by being yourself.",
    "You are strong and resilient, even in tough times.",
    "I love how much effort you put into growing.",
    "You are special, unique, and amazing.",
    "You are loved, appreciated, and respected.",
    "You make people feel good without even trying.",
    "You are patient, kind, and caring in every way.",
    "You are beautiful inside and out."
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
