const desktopMenu = document.getElementsByClassName("nav-menu-desktop")[0];
const desktopCloseButton = document.getElementsByClassName("desktop-close-button")[0];
const desktopPath = window.location.pathname;

const desktopHome = document.getElementById("desktop-home");
const desktopEvents = document.getElementById("desktop-events");
const desktopSponsors = document.getElementById("desktop-sponsors");
const desktopMerchandise = document.getElementById("desktop-merchandise");
const desktopContact = document.getElementById("desktop-contact");
const desktopAbout = document.getElementById("desktop-about");

var metaTag = document.querySelector('meta[name="theme-color"]');

function openDesktopMenu() {
    desktopMenu.classList.remove("menu-invisible");
    desktopHome.classList.remove("slide-out");
    desktopMenu.classList.add("menu-visible");
    desktopHome.classList.add("slide-in");
    metaTag.setAttribute('content', '#000000');
}

function closeDesktopMenu() {
    desktopMenu.classList.add("menu-invisible");
    desktopHome.classList.add("slide-out");
    desktopMenu.classList.remove("menu-visible");
    desktopHome.classList.remove("slide-in");
    setTimeout(() => {
        metaTag.setAttribute('content', '#ffffff');
    }, 250);
}

desktopCloseButton.addEventListener("click", closeDesktopMenu);

console.log(window.location.pathname);

switch (desktopPath) {
    case "/":
    case "/index.html":
        desktopHome.childNodes[0].classList.add("current-route");
        break;
    case "/events/":
    case "/events/index.html":
        desktopEvents.childNodes[0].classList.add("current-route");
        break;
    case "/sponsors/":
    case "/sponsors/index.html":
        desktopSponsors.childNodes[0].classList.add("current-route");
        break;
    case "/merchandise/":
    case "/merchandise/index.html":
        desktopMerchandise.childNodes[0].classList.add("current-route");
        break;
    case "/contact/":
    case "/contact/index.html":
        desktopContact.childNodes[0].classList.add("current-route");
        break;
    case "/about/":
    case "/about/index.html":
        desktopAbout.childNodes[0].classList.add("current-route");
        break;
}

var routesLinks = document.getElementsByClassName("routes-desktop")[0].childNodes
