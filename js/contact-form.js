

const openCloseForm = () => {
    document.querySelector('.form-section').classList.toggle('form-section--active');

    gsap.from('.content-wrapper', {
        opacity: 0,
        y: -20,
        delay: 0.4,
    });


    document.querySelector('.open-form-button').disabled = true;
    document.querySelector('.close-form-button').disabled = true;
    setTimeout(function() {
        document.querySelector('.open-form-button').disabled = false;
        document.querySelector('.close-form-button').disabled = false;
    }, 2000);

    
}

document.querySelector('.open-form-button').addEventListener('click', openCloseForm);
document.querySelector('.close-form-button').addEventListener('click', openCloseForm);