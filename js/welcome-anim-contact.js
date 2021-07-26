const tl = gsap.timeline();

//bg anim welcome 
tl.to('.welcome-anim-contact', {
    y: '-100%',
    delay: .5,
});

tl.from('.header-section' , {
    opacity: 0,
});

tl.from('.map-wrapper' , {
    opacity: 0,
    x: -30,
});


tl.from('.contact-heading', {
    opacity: 0,
    x: -30,
});

tl.from('.contact-subheading', {
    opacity: 0,
    x: -30,
});


tl.from('.contact-method' , {
    opacity: 0,
    x: -30,
    stagger: 0.2
}, "<");

tl.from('.open-form-button', {
    opacity: 0,
    x: -30,
}, "<");


tl.from('.social-link', {
    y: -5,
    stagger: .2,
    opacity: 0,
    duration: 0.1,
}, "<");


tl.from('.navigation-section', {
    y: '-105%',
});

tl.from('.next-section-button', {
    opacity: 0,
    y: 50,
}, "<");

tl.from('.footer-secion', {
    opacity: 0,
});


tl.to('.form-section' , {
    opacity: 1,
});