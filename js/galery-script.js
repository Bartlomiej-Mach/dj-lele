//masonry scrip

const masonry = new Macy({
    container: '.galery-img-wrapper',
    mobileFirst: true,
    columns: 1,
    breakAt: {
        500: 2,
    },
    margin: {
        x: 20,
        y: 20,
    }
});



const galeryImgs = document.querySelectorAll('.galery-img');


galeryImgs.forEach(element => {
    
});

//script enlarge images after click on it.

const modal = document.getElementById('image-cover-modal');
const modalImg = document.getElementById("image-cover-image");
const captionText = document.getElementById("image-cover-caption");
const span = document.getElementsByClassName("image-cover-close")[0];
const galeryImg = document.querySelectorAll('.galery-img');

modal.onclick = function() {
    this.classList.remove("model-shown");
}

for (let i = 0; i < galeryImg.length; i++) {

    let img = galeryImg[i];

    img.onclick = function(){
        modal.classList.add("model-shown");
        modalImg.src = this.src;
        
    }
}