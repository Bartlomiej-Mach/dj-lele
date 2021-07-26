const tl = gsap.timeline();

//bg anim welcome 
tl.to('.welcome-anim-info', {
    y: '-100%',
});


//full content anim first row 
tl.from('.header-section' , {
    opacity: 0,
});

tl.from('.row-1__info-img-wrapper', {
    opacity: 0, 
    y: -40,
});

tl.from('.row-1__info-heading', {
    opacity: 0, 
    x: -40,
    duration: 0.2,
});
tl.from('.row-1--p', {
    duration: 0.1,
    opacity: 0, 
    x: -40,
    stagger: 0.2,
}, "<");

tl.from('.next-section-button-normal', {
    opacity: 0,
    y: 50,
});


tl.from('.navigation-section', {
    y: '-105%',
});

//social fade in 
tl.from('.social-link', {
    y: -5,
    stagger: .2,
    opacity: 0,
    duration: 0.1,
});

tl.from('.footer-secion', {
    opacity: 0,
});