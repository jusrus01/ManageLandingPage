const menuButton = document.getElementById("menuButton");
const header = document.getElementById("header");
const body = document.querySelector("html");
const menu = document.querySelector(".header--menu");
const overlay = document.querySelector(".overlay");

menuButton.addEventListener("click", showMenuItems);
menu.addEventListener("click", showMenuItems);

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

