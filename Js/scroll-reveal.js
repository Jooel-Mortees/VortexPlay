const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out'
});

// Apply reveal animations to elements
sr.reveal('.hero-content', { delay: 300 });
sr.reveal('.about', { delay: 400 });
sr.reveal('.main__heading', { delay: 300 });
sr.reveal('.cards__card', { interval: 200 });
sr.reveal('.section');