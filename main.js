const imageContainer = document.querySelector('.image-container');
const imageScroller = document.querySelector('.image-scroller');

let scrollAmount = 0;

function scrollImages() {
    scrollAmount += 1;
    imageScroller.style.transform = `translateX(-${scrollAmount}px)`;

    if (scrollAmount >= imageContainer.clientWidth) {
        scrollAmount = 0;
    }
}

setInterval(scrollImages, 20);

document.addEventListener('DOMContentLoaded', function () {
    const emojiContainer = document.querySelector('.emoji-container');

    function createRandomEmoji() {
        const emojis = ['🥬', '🥝', '🍏', '🥒', '🥕', '🍅', '🍆', '🌽'];
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDuration = Math.random() * 2 + 1 + 's';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        emoji.addEventListener('mouseover', function () {
            emoji.style.animation = 'emoji-bounce 0.5s ease infinite, emoji-hover 0.3s';
        });

        emoji.addEventListener('mouseout', function () {
            emoji.style.animation = 'emoji-fall 2s linear infinite';
        });

        emojiContainer.appendChild(emoji);
    }

    setInterval(createRandomEmoji, 1000);

    const style = document.createElement('style');
    style.innerHTML = `
          @keyframes emoji-bounce {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
          @keyframes emoji-hover {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
        `;
    document.head.appendChild(style);
});