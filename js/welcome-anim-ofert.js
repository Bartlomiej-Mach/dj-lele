const tl = gsap.timeline();

tl.to('.welcome-anim-info', {
    y: '-100%',
});


tl.from('.header-section', {
    opacity: 0,
});

tl.from('.content-wrapper', {
    opacity: 0,
    x: -30,
});

tl.from('.mySwiper2', {
    opacity: 0,
    x: 30,
});

tl.from('.swiper-slide2', {
    x: 50,
    stagger: 0.1,
});

tl.from('.next-section-button', {
    opacity: 0,
    y: 50,
}, "<");

tl.from('.navigation-section', {
    y: '-105%',
}, "<");

tl.from('.footer-secion', {
    opacity: 0,
});