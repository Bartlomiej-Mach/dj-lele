const swiper = new Swiper(".mySwiper", {
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    
    slidesPerView: 6,
    direction: "vertical",
});

const swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    direction: "vertical",
    thumbs: {
        swiper: swiper,
    },
})
