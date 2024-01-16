const menu = document.getElementsByClassName("nav-menu-mobile")[0];
const closeButton = document.getElementsByClassName("close-button")[0];
const path = window.location.pathname;

const home = document.getElementById("home");
const events = document.getElementById("events");
const sponsors = document.getElementById("sponsors");
const merchandise = document.getElementById("merchandise");
const schedule = document.getElementById("schedule");
const contact = document.getElementById("contact");
const about = document.getElementById("about");

var metaTag = document.querySelector('meta[name="theme-color"]');

function openMenu() {
    menu.classList.remove("menu-invisible");
    home.classList.remove("slide-out");
    menu.classList.add("menu-visible");
    home.classList.add("slide-in");
    metaTag.setAttribute('content', '#000000');
}

function closeMenu() {
    menu.classList.add("menu-invisible");
    home.classList.add("slide-out");
    menu.classList.remove("menu-visible");
    home.classList.remove("slide-in");
    setTimeout(() => {
        metaTag.setAttribute('content', '#ffffff');
    }, 250);
}

closeButton.addEventListener("click", closeMenu);

console.log(window.location.pathname);

switch (path) {
    case "/":
    case "/index.html":
        home.childNodes[0].classList.add("current-route");
        break;
    case "/events/":
    case "/events/index.html":
        events.childNodes[0].classList.add("current-route");
        break;
    case "/sponsors/":
    case "/sponsors/index.html":
        sponsors.childNodes[0].classList.add("current-route");
        break;
    case "/merch/":
    case "/merch/index.html":
        merchandise.childNodes[0].classList.add("current-route");
        break;
    case "/schedule/":
    case "/schedule/index.html":
        schedule.childNodes[0].classList.add("current-route");
        break;
    case "/contact/":
    case "/contact/index.html":
        contact.childNodes[0].classList.add("current-route");
        break;
    case "/about/":
    case "/about/index.html":
        about.childNodes[0].classList.add("current-route");
        break;
}

var routesLinks = document.getElementsByClassName("routes-mobile")[0].childNodes
