// Love counter: dihitung otomatis dari tanggal jadian.
const relationshipStart = new Date(2001, 11, 14); // 14 November 2001
const today = new Date();
const daysTogether = Math.max(0, Math.floor((new Date(today.getFullYear(), today.getMonth(), today.getDate()) - relationshipStart) / 86400000));
document.getElementById("loveCounter").textContent = daysTogether.toLocaleString("id-ID");

// Tombol peluk pada love letter.
document.getElementById("letterButton").addEventListener("click", () => {
  document.getElementById("hugMessage").classList.remove("hidden");
});

// Open When You Need Me: tampilkan pesan di modal.
const messageModal = document.getElementById("messageModal");
document.querySelectorAll(".envelope").forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("modalMessage").textContent = button.dataset.message;
    messageModal.classList.remove("hidden");
  });
});
function closeMessage() { messageModal.classList.add("hidden"); }
document.getElementById("modalClose").addEventListener("click", closeMessage);
messageModal.addEventListener("click", (event) => {
  if (event.target === messageModal) closeMessage();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMessage();
});

// Background music. Browser biasanya mewajibkan pengguna menekan tombol Play dahulu.
const music = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");
musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicLabel.textContent = "Pause our song";
      musicToggle.setAttribute("aria-pressed", "true");
    } catch (error) {
      musicLabel.textContent = "Add our-song.mp3 first";
    }
  } else {
    music.pause();
    musicLabel.textContent = "Play our song";
    musicToggle.setAttribute("aria-pressed", "false");
  }
});

// Birthday wish + confetti sederhana tanpa library tambahan.
document.getElementById("wishButton").addEventListener("click", () => {
  document.getElementById("wishResult").classList.remove("hidden");
  launchConfetti(100);
});
function launchConfetti(amount) {
  const symbols = ["♡", "✿", "✧", "●"];
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.color = ["#e989aa", "#c4b2f0", "#f6c77d", "#a9d9c4"][Math.floor(Math.random() * 4)];
    piece.style.animationDelay = Math.random() * 1.2 + "s";
    piece.style.fontSize = (10 + Math.random() * 12) + "px";
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 4500);
  }
}
