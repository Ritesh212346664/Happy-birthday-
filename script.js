document.addEventListener("DOMContentLoaded", function () {
    let countdownElement = document.getElementById("countdown");
    let celebration = document.getElementById("celebration");
    let countdownContainer = document.getElementById("countdown-container");

    let targetTime = new Date();
    targetTime.setHours(0, 0, 0, 0);

    function updateCountdown() {
        let now = new Date();
        let timeLeft = targetTime - now;

        if (timeLeft <= 0) {
            countdownContainer.style.display = "none";
            celebration.classList.remove("hidden");
        } else {
            let hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
            let minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
            let seconds = Math.floor((timeLeft / 1000) % 60);

            countdownElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});

function cutCake() {
    document.getElementById("birthday-song").play();
    alert("🎉 Cake Cut Ho Gaya! Happy Birthday Du Meri Bevi Jaan! 🎂");
}
