const blurDivs = document.querySelectorAll(".blur-div")
blurDivs.forEach(div => {
    const img = document.querySelector("img")
    function  loaded(){
        div.classList.add("loaded")
    }

    if (img.complete){
        loaded()
    } else {
        img.addEventListener("load", loaded)
    }
})


var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
var headerWrapper = document.getElementById("headerWrapperHome");
var photographerCredit = document.getElementById("photographerCredit");
var currentIndex = 0;
var images = document.querySelectorAll(".img-gallery img");

function openFullImg(pic, index, className) {
    fullImgBox.style.display = "flex"; headerWrapper.style.zIndex = "-1"; headerWrapper.style.position = "relative";
    fullImg.src = pic;
    currentIndex = index;
    setTimeout(() => { fullImgBox.classList.add("show"); }, 10);
    updatePhotographerCredit(className);
}
function closeFullImg() {
    fullImgBox.classList.remove("show");
    setTimeout(() => { fullImgBox.style.display = "none"; headerWrapper.style.zIndex = "9999"; headerWrapper.style.position = "unset"; }, 500);
}
function navigateImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) { currentIndex = images.length - 1; }
    else if (currentIndex >= images.length) { currentIndex = 0; }
    fullImg.src = images[currentIndex].src;
    updatePhotographerCredit(images[currentIndex].className);
}
function updatePhotographerCredit(className) {
    if (className.includes('arsi scroll-up')) {
        photographerCredit.innerHTML = 'Photo by <a href="https://www.arthursiwek.com/" target="_blank">Arthur Siwek</a>';
    } else if (className.includes('per2')) {
        photographerCredit.innerHTML = 'Photo by <a href="https://www.instagram.com/karbon_planet/" target="_blank">Xavier Fraire</a>';
    } else if (className.includes('per3')) {
        photographerCredit.innerHTML = 'Photo by <a href="https://www.instagram.com/carsonkenned.y/" target="_blank">Carson Kennedy</a>';
    } else if (className.includes('per4')) {
        photographerCredit.innerHTML = 'Photo by <a href="https://www.instagram.com/photos.by.farver/" target="_blank">Kamaron Farver</a>';
    } else if (className.includes('per5')) {
        photographerCredit.innerHTML = 'Photo by <a href="https://www.instagram.com/georgiapeach_photography_/" target="_blank">Georgia Roe</a>';
    } else if (className.includes('per6')) {
        photographerCredit.innerHTML = 'Photo by <a href="https://www.instagram.com/alfs.photography/" target="_blank">Alfred Valdez</a>';
    } else if (className.includes('per7')) {
        photographerCredit.innerHTML = 'Photo by Michael Tuffy';
    } else if (className.includes('per8')) {
        photographerCredit.innerHTML = 'Photo by <a href="https://www.instagram.com/reasephotography/" target="_blank">Madison Rease</a';
    } else {
        photographerCredit.innerHTML = 'Photo by Unknown';
    }
}