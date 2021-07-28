const secondNavBtn = document.querySelectorAll('.second-nav-item');
const mainNavBtn = document.querySelector('.main-menu-item');

function nextSection () {
    document.querySelector('.next-section-anim').classList.toggle('next-section-anim--active')
};

//delay of home nav
function delay (URL) {
    setTimeout( function() { window.location = URL }, 800 );
}

//delay for main nav links
function delayForNav (URL) {
    setTimeout( function() { window.location = URL }, 1000 );
}


function nextSectionForNav () {
    setTimeout(() => {
        nextSection();
    }, 300);
}

//main nav
mainMenuItem.forEach(element => {
    element.addEventListener('click', nextSectionForNav);
});

//home second nav
if(secondNavBtn) {
    secondNavBtn.forEach(element => {
        element.addEventListener('click', nextSection);
    });   
};

//logo - button 
const logoWrapper = document.querySelector('.logo-wrapper');

logoWrapper.addEventListener('click', nextSection);


//contact btn in info secion
const contactBtn = document.querySelector('.contact-link');
if(contactBtn) {
    contactBtn.addEventListener('click', nextSection);
}

const nextSectionBtn = document.querySelector('.next-section-button');

if(nextSectionBtn) {
    nextSectionBtn.addEventListener('click', nextSection);
}

const nextSectionBtn2 = document.querySelector('.scroll-to-secion2');

if(nextSectionBtn2) {
    nextSectionBtn2.addEventListener('click', nextSection);
}


