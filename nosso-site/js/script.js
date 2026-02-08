// Scroll para timeline
document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("timeline").scrollIntoView({ behavior: "smooth" });
});

// Animação ao aparecer
const items = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.3 });

items.forEach(item => observer.observe(item));

// Corações e flores
const container = document.querySelector(".floating-elements");
const icons = ["❤️", "🌸", "💖"];

setInterval(() => {
  const span = document.createElement("span");
  span.innerText = icons[Math.floor(Math.random() * icons.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = (8 + Math.random() * 5) + "s";
  container.appendChild(span);

  setTimeout(() => span.remove(), 12000);
}, 600);