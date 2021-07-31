const menuButton = document.getElementById("menuButton");
const header = document.getElementById("header");
const body = document.querySelector("html");
const menu = document.querySelector(".header--menu");

menuButton.addEventListener("click", showMenuItems);
menu.addEventListener("click", showMenuItems);

function showMenuItems() {
    if(header.classList.contains("open")) {
        header.classList.remove("open");
        body.classList.remove("disable-scroll");
    } else {
        header.classList.add("open");
        body.classList.add("disable-scroll");
    }
}

