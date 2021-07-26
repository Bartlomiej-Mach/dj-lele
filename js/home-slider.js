let timeChanger = 9000;

//main slider
const swiper = new Swiper(".mySwiper", {
    autoplay:  {
        delay: timeChanger,
    },
    loop: true,
    direction: "vertical",
    spaceBetween: 20,
});


//text slider
const swiper2 = new Swiper(".mySwiper2", {
    autoplay:  {
        delay: timeChanger,
    },
    loop: true,
    direction: "vertical",
    thumbs: {
        swiper: swiper,
    },
    
});