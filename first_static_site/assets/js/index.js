'use strict'

const slides = document.querySelectorAll('.slides');
const images = document.querySelectorAll('.demo');
const captionText = document.getElementById('caption');
const prevSlide = document.querySelector(".prev");
const nextSlide = document.querySelector(".next");
let slideIndex = 1;

const showSlides = num => {
    if (num > slides.length) {
        slideIndex = 1;
    }
    if (num < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((slide) => slide.style.display = 'none');
    images.forEach((image) => {
        image.className = image.className.replace("active", "");
    })

    slides[slideIndex - 1].style.display = 'block';
    images[slideIndex - 1].className += 'active';
    captionText.innerHTML = images[slideIndex - 1].alt;
}

showSlides(slideIndex)

const plusSlides = (num) => showSlides(slideIndex += num);
const currentSlide = (num) => showSlides(slideIndex = num);

nextSlide.addEventListener("click", () => plusSlides(+1));
prevSlide.addEventListener('click', () => plusSlides(-1));
