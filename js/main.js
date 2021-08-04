const menuButton = document.getElementById("menuButton");
const header = document.getElementById("header");
const body = document.querySelector("html");
const menu = document.querySelector(".header--menu");
const overlay = document.querySelector(".overlay");

menuButton.addEventListener("click", showMenuItems);
menu.addEventListener("click", showMenuItems);

// handling carousel
const allTestimonials = document.querySelectorAll(".card");
const allCarouselMarkers = document.querySelectorAll("div.carousel-tracker > span");
const minScreenWidth = 1000;

const classNames = {
    left: "card--left",
    right: "card--right",
    center: "card--center"
};

let carouselMarkersShowing = true;
let currentTestimonial = 0;

setInterval(showNextTestimonial, 3000);

function showNextTestimonial() {

    if(body.clientWidth >= minScreenWidth && carouselMarkersShowing) {
        carouselMarkersShowing = false;
        // remove all inactive states
        for(let i = 0; i < allTestimonials.length; i++) {
            if(allTestimonials[i].classList.contains("card--inactive")) {
                allTestimonials[i].classList.remove("card--inactive");
                allTestimonials[i].classList.add("card--active");
            }
        }

    } else if(body.clientWidth < minScreenWidth && !carouselMarkersShowing) {
        carouselMarkersShowing = true;
        currentTestimonial = 0;
        for(let i = 0; i < allTestimonials.length; i++) {
            if(allTestimonials[i].classList.contains("card--active")) {
                allTestimonials[i].classList.remove("card--active");
                allTestimonials[i].classList.add("card--inactive");
            }

            if(allCarouselMarkers[i].classList.contains("carousel--active")) {
                allCarouselMarkers[i].classList.remove("carousel--active");
            }
        }
        allTestimonials[currentTestimonial].classList.add("card--active");
        allCarouselMarkers[currentTestimonial].classList.add("carousel--active");
    }
   
    if(!carouselMarkersShowing) {
        for(let i = 0; i < allTestimonials.length; i++) {
            changeClassState(allTestimonials[i]);
        }
    } else {

        let removeIndex;
    
        if(currentTestimonial >= allTestimonials.length) {
            currentTestimonial = 0;
            removeIndex = allTestimonials.length - 1;
        } 
        else if(currentTestimonial === 0) {
            removeIndex = allTestimonials.length - 1;
        }
        else {
            removeIndex = currentTestimonial - 1;
        }

        let cur = allTestimonials[currentTestimonial];
        let prev = allTestimonials[removeIndex];

        if(prev.classList.contains("card--active")) {
            prev.classList.remove("card--active");
            prev.classList.add("card--inactive");
            
            if(allCarouselMarkers[removeIndex].classList.contains("carousel--active")) {
                allCarouselMarkers[removeIndex].classList.remove("carousel--active");
            }
        }

        if(cur.classList.contains("card--inactive")) {
            cur.classList.remove("card--inactive");
            cur.classList.add("card--active");

            if(!allCarouselMarkers[currentTestimonial].classList.contains("carousel--active")) {
                allCarouselMarkers[currentTestimonial].classList.add("carousel--active");
            }
        }
    }

    currentTestimonial++;
}

function changeClassState(element) {
    if(element.classList.contains(classNames.left)) {
        element.classList.remove(classNames.left);
        element.classList.add(classNames.center);
    } else if(element.classList.contains(classNames.center)) {
        element.classList.remove(classNames.center);
        element.classList.add(classNames.right);
    } else if(element.classList.contains(classNames.right)) {
        element.classList.remove(classNames.right);
    } else {
        element.classList.add(classNames.left);
    }
}

function showMenuItems() {
    if(header.classList.contains("open")) {
        header.classList.remove("open");
        body.classList.remove("disable-scroll");

        if(overlay.classList.contains("fade-in")) {
            overlay.classList.remove("fade-in");
            menu.classList.remove("fade-in");
        }

        overlay.classList.add("fade-out");
        menu.classList.add("fade-out");

    } else {
        header.classList.add("open");
        body.classList.add("disable-scroll");

        if(overlay.classList.contains("fade-out")) {
            overlay.classList.remove("fade-out");
            menu.classList.remove("fade-out");
        }

        overlay.classList.add("fade-in");
        menu.classList.add("fade-in");
    }
}