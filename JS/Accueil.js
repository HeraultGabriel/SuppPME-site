let slideIndex = 0;
const slides = document.querySelectorAll('.fade-slide'); 

function showSlides() {

slides.forEach(slide => {
    slide.classList.remove('active-slide');
});


slideIndex++;
if (slideIndex >= slides.length) {
        slideIndex = 0; 
}


slides[slideIndex].classList.add('active-slide');


setTimeout(showSlides, 13000);
}


showSlides();

////////////////////////////////////////////////////////////

const sections = document.querySelectorAll('.sect_tem');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('zoom');
        } else {
            entry.target.classList.remove('zoom');
        }
    });
}, {
    threshold: 0.80,
    root: null,     
    rootMargin: '0px', 

});

sections.forEach(section => {
    observer.observe(section);
});

/////////////////////////////////////////////////////////////

let currentSlide = 0;

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function updateCarousel() {
    const carouselSlides = document.querySelector('.carousel-slides');
    const slideWidth = document.querySelector('.slide').clientWidth;

    carouselSlides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

window.addEventListener('resize', updateCarousel);
updateCarousel();


setInterval(nextSlide, 20000);