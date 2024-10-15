const games = [
    { title: 'Age of Mythology', image: '/api/placeholder/300/169' },
    { title: 'Humanity', image: '/api/placeholder/300/169' },
    { title: 'Forza Horizon', image: '/api/placeholder/300/169' },
    { title: 'Halo Infinite', image: 'Img/Halo-Infinite.jpg' },
    { title: 'Sea of Stars', image: '/api/placeholder/300/169' },
    { title: 'Palworld', image: '/api/placeholder/300/169' },
    // Add more games as needed
];

// Hero Slider functionality
let currentSlide = 0;
const slider = document.querySelector('.hero-slider');
const slides = document.querySelectorAll('.hero-slide');
const dotsContainer = document.querySelector('.slider-dots');

// Create dots
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
}

// Navigation arrows
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Auto-advance slides
setInterval(nextSlide, 5000);

// Generate game grid
const gameGrid = document.querySelector('.game-grid');
games.forEach(game => {
    const gameCard = document.createElement('div');
    gameCard.classList.add('game-card');
    gameCard.innerHTML = `<img src="${game.image}" alt="${game.title}">`;
    gameGrid.appendChild(gameCard);
});