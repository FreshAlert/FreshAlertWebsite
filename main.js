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