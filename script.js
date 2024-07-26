const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

let currentSlide = 1;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slidesContainer = document.querySelector('.slides');

// Move to the initial slide
slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

function changeSlide(direction) {
    slidesContainer.style.transition = 'transform 1s ease';
    currentSlide += direction;

    if (currentSlide === 0) {
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        setTimeout(() => {
            slidesContainer.style.transition = 'none';
            currentSlide = totalSlides - 2;
            slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        }, 1000);
    } else if (currentSlide === totalSlides - 1) {
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        setTimeout(() => {
            slidesContainer.style.transition = 'none';
            currentSlide = 1;
            slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        }, 1000);
    } else {
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}

// Set up automatic sliding
let slideInterval = setInterval(() => {
    changeSlide(1);
}, 3000); // Change slide every 3 seconds

// Pause auto-slide on hover and resume on mouse out
slidesContainer.addEventListener('mouseover', () => {
    clearInterval(slideInterval);
});

slidesContainer.addEventListener('mouseout', () => {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 3000);
});
