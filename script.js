const heartEmojis = ['💗', '💖', '💝', '💕', '♥️'];
const gradients = [
  'linear-gradient(135deg, #ffafbd, #ffc3a0, #ffdde1)',
  'linear-gradient(135deg, #e0c3fc, #8ec5fc, #c2e9fb)',
  'linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4)',
  'linear-gradient(135deg, #a18cd1, #fbc2eb, #fad0c4)',
];

let currentGradient = 0;

// Change quote/emoji every few seconds
setInterval(() => {
  const loveQuote = document.getElementById("love-quote");
  loveQuote.style.opacity = "0";
  setTimeout(() => {
    loveQuote.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    loveQuote.style.opacity = "1";
  }, 1000);
}, 4000);

// Floating hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}
setInterval(createHeart, 600);

// Change color background
document.querySelector('.color-btn').addEventListener('click', () => {
  currentGradient = (currentGradient + 1) % gradients.length;
  document.body.style.background = gradients[currentGradient];
});

// Redirect to gallery
document.querySelector('.enter-btn').addEventListener('click', () => {
  confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  setTimeout(() => {
    window.location.href = 'gallery.html';
  }, 1500);
});
