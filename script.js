// scroll_to_top
let btn = document.querySelector(".top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    btn.style.display = 'block';
  } else{
    btn.style.display = 'none'
  }

}

function scrollToTop(){
  window,scrollTo(0,0)
}


// content
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const btna = document.getElementById("btna");
const btnb = document.getElementById("btnb");
const btnc = document.getElementById("btnc");

function openPopularFood() {
  content1.style.transform = "translateX(0)";
  content2.style.transform = "translateX(100%)";
  content3.style.transform = "translateX(100%)";

}

function openDrinks() {
  content1.style.transform = "translateX(100%)";
  content2.style.transform = "translateX(0)";
  content3.style.transform = "translateX(100%)";
  

}
function openBreakfast() {
  content1.style.transform = "translateX(100%)";
  content2.style.transform = "translateX(100%)";
  content3.style.transform = "translateX(0)";

}


// modal
const images = [...document.querySelectorAll('.image')];

// popup

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0; // will track our current image;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
})

const updateImage = (i) => {
    let path = `./images/img${i+15}.jpg`;
    largeImage.src = path;
    imageName.innerHTML = path;
    imageIndex.innerHTML = `0${i+1}`;
    index = i;
}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () => {
    if(index > 0){
        updateImage(index - 1);
    }
})

rightArrow.addEventListener('click', () => {
    if(index < images.length - 1){
        updateImage(index + 1);
    }
})


// testimonial
const slides=document.querySelector(".slider").children;
const indicatorImages=document.querySelector(".slider-indicator").children;

 for(let i=0; i<indicatorImages.length; i++){
   indicatorImages[i].addEventListener("click",function(){
      
        for(let j=0; j<indicatorImages.length; j++){
          indicatorImages[j].classList.remove("active");
        }
         this.classList.add("active");
         const id=this.getAttribute("data-id");
        for(let j=0; j<slides.length; j++){
          slides[j].classList.remove("active");
        }

         slides[id].classList.add("active");

   })
 }



//  hamburger_menu
