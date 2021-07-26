const tl = gsap.timeline();

//bg anim welcome 
tl.to('.welcome-anim-cooperation', {
    y: '-100%',
});

tl.from('.header-section' , {
    opacity: 0,
});


tl.from('.row-1__cooperation-heading', {
    opacity: 0, 
    x: -40,
    duration: 0.2,
});

tl.from('.row-1__cooperation-subheading', {
    opacity: 0, 
    x: -40,
    duration: 0.2,
});

tl.from('.row-1--p', {
    duration: 0.1,
    opacity: 0, 
    x: -40,
    stagger: 0.2,
});

tl.from('.grid-item', {
    opacity: 0, 
    y: -20,
    duration: 0.1,
    stagger: 0.1,
});

tl.from('.contact-link', {
    opacity: 0, 
    x: -40,
    duration: 0.2,
}, "<");



tl.from('.next-section-button', {
    opacity: 0,
    y: 50,
});



tl.from('.navigation-section', {
    y: '-105%',
});

tl.from('.social-link', {
    y: -5,
    stagger: .2,
    opacity: 0,
    duration: 0.1,
});

tl.from('.footer-secion', {
    opacity: 0,
});