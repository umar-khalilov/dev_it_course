'use strict'

const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.demo');
const captionText = document.getElementById('caption');
let slideIndex = 1;

const showSlides = num => {
    if (num > slides.length) {
        slideIndex = 1;
    }
    if (num < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

showSlides(slideIndex);
const plusSlides = num => showSlides(slideIndex += num);
const currentSlide = num => showSlides(slideIndex = num);
