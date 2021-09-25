const tl = gsap.timeline();

tl.to('.loader-1', {
    duration: .5,
    delay: .5,
    opacity: 1,
});




tl.to('.anim-first-wrapper', {
    y: -300,
    duration: .4,
    delay: 0.2,
    opacity: 0,
});

tl.to('.anim-second-wrapper', {
    y: '105%',
    duration: 0.2,
}, "<");
tl.to('.anim-second-wrapper', {
    y: 0,
    duration: 0.5,
});
tl.to('.anim-second-wrapper', {
    y: '-105%',
    duration: 0.4,
});
tl.to('.welcome-anim-wrapper', {
    duration: .5,
    y: '-105%',
});

tl.to('.welcome-anim-wrapper', {
    duration: .5,
    delay: .5,
    display: 'none',
});





//img animation 
tl.from('.welcome-img-wrapper', {
    duration: .5,
    y: 300,
}, .4);

tl.to('.welcome-img-wrapper', {
    width: '80%',
    duration: .2,
    ease: 'in-out',
});
tl.to('.welcome-img-wrapper', {
    height: '85%',
    duration: .3,
    ease: 'in-out',
}, '<');
tl.to('.welcome-img-wrapper', {
    display: 'none',
    delay: .3,
});

tl.from('.mobile-nav-button', {
    opacity: 0,
})

//text fade up 
tl.from('.text-slide', {
    y: 100,
    opacity: 0, 
});

//navigation fade in 
tl.from('.navigation-section', {
    y: '-105%',
});

//social fade in 
tl.from('.social-link', {
    y: -5,
    stagger: .2,
    opacity: 0,
    duration: 0.1,
})