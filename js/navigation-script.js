// hover efect = change img

const imgWrapper = document.querySelector('.nav-img-wrapper');


function changeImg1() {
    imgWrapper.style.backgroundImage = "url('../img/navigation-img/nav-img-1.jpg')";
   
};
function changeImg2() {
    imgWrapper.style.backgroundImage = "url('../img/navigation-img/nav-img-2.jpg')";
   
};
function changeImg3() {
    imgWrapper.style.backgroundImage = "url('../img/navigation-img/nav-img-3.jpg')";
    
};
function changeImg4() {
    imgWrapper.style.backgroundImage = "url('../img/navigation-img/nav-img-4.jpg')";
    
};
function changeImg5() {
    imgWrapper.style.backgroundImage = "url('../img/navigation-img/nav-img-5.jpg')";
    
};
function changeImg6() {
    imgWrapper.style.backgroundImage = "url('../img/navigation-img/nav-img-6.jpg')";
    
};


//open menu button 
//close button 
const mobileButton = document.querySelector('.mobile-nav-button');
const hamburgerButton = document.querySelector('.hamburger-button');
const openCloseNavMenu = () => {
    
    document.querySelector('.main-menu-wrapper').classList.toggle('main-menu--active');
    hamburgerButton.classList.toggle('hamburger-button--active');
    document.querySelector('.open').classList.toggle('open-close--active');
    document.querySelector('.close').classList.toggle('open-close--active');
    

    hamburgerButton.disabled = true;
    if(mobileButton) {
        mobileButton.disabled = true;
    }
    setTimeout(function() {
        hamburgerButton.disabled = false;
        if(mobileButton) {
            mobileButton.disabled = false;
        }
    },2000);

};

hamburgerButton.addEventListener('click', openCloseNavMenu);
document.querySelector('.close-nav-button').addEventListener('click', openCloseNavMenu);
hamburgerButton.addEventListener('click', navLinkAnimation);

const mainMenuItem = document.querySelectorAll('.main-menu-item');

mainMenuItem.forEach(element => {
    element.addEventListener('click', openCloseNavMenu);
});

//animation of nav links 

function navLinkAnimation() {
    gsap.from('.main-menu-item', {
        x: -50,
        opacity: 0,
        stagger: .1,
        duration: .2,
        delay: 0.3,
    });
    gsap.from('.nav-img-wrapper', {
        x: -50,
        opacity: 0,
        duration: .2,
        delay: 0.3,
    });
    gsap.from('.nav-social-link', {
        y: -10,
        opacity: 0,
        stagger: .1,
        duration: .2,
        delay: .5,
    })
}

//open close button on mobile home only
if(mobileButton) {
    mobileButton.addEventListener('click', openCloseNavMenu);
    mobileButton.addEventListener('click', navLinkAnimation);
}




