const heartEmojis = ['💗', '💖', '💝', '💕', '♥️'];
const gradients = [
  'linear-gradient(135deg, #ffafbd, #ffc3a0, #ffdde1)',
  'linear-gradient(135deg, #e0c3fc, #8ec5fc, #c2e9fb)',
  'linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4)',
  'linear-gradient(135deg, #a18cd1, #fbc2eb, #fad0c4)',
];

let currentGradient = 0;

setInterval(() => {
  document.getElementById("love-quote").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("love-quote").innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    document.getElementById("love-quote").style.opacity = "1";
  }, 1000);
}, 4000);

document.querySelector('.color-btn').addEventListener('click', () => {
  currentGradient = (currentGradient + 1) % gradients.length;
  document.body.style.background = gradients[currentGradient];
});

document.querySelector('.enter-btn').addEventListener('click', () => {
  setTimeout(() => {
    window.location.href = 'gallery.html';
  }, 2000);
});
