let allSlides = document.querySelectorAll(".slide");
let next = document.querySelector("#next");
let pre = document.querySelector("#pre");

let auto = true;
const intervalTime = 3000;
let slideInterval;

let nextSlide = () => {
    let current = document.querySelector(".current");
    current.classList.remove("current");
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add("current");
    } else {
        allSlides[0].classList.add("current");
    }
    setTimeout(()=> current.classList.remove("current"));
}

let previousSlide = () => {
    let current = document.querySelector(".current");
    current.classList.remove("current");
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add("current");
    } else {
        allSlides[allSlides.length - 1].classList.add("current");
    }
    setTimeout(()=> current.classList.remove("current"));
}



next.addEventListener("click", e => { 
    nextSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime)
    } } );
    
pre.addEventListener("click", e => { 
    previousSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime)
    } } );

if(auto){
slideInterval = setInterval(nextSlide, intervalTime)
}