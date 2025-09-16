
// ===== Hamburger Menu =====
const hamburger = document.getElementById('hamburger');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// ===== Typing Effect =====
const words = ["Web Apps", "Mobile Apps", "AI Solutions", "DevOps Pipelines"];
let i = 0, j = 0, currentWord = '', isDeleting = false;
const typedText = document.getElementById("typed-text");

function type() {
  if (i >= words.length) i = 0;
  const fullWord = words[i];

  if (!isDeleting) {
    currentWord = fullWord.substring(0, j + 1);
    typedText.textContent = currentWord;
    j++;
    if (currentWord === fullWord) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    currentWord = fullWord.substring(0, j - 1);
    typedText.textContent = currentWord;
    j--;
    if (currentWord === '') {
      isDeleting = false;
      i++;
    }
  }
  setTimeout(type, isDeleting ? 100 : 200);
}
type();

// ===== Fade-in on Scroll =====
const faders = document.querySelectorAll('.fade-in, .card, .timeline-item, .motivation');
const options = { threshold: 0.3, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.opacity = 1;
    entry.target.style.transform = "translateY(0)";
    entry.target.style.transition = "all 0.8s ease-out";
    observer.unobserve(entry.target);
  });
}, options);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
