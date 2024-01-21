let mobileSelect = document.querySelector(".mobile select");
let desktopSelect = document.querySelector(".desktop select");

mobileSelect.addEventListener("change", (e) => {
    let elem = document.getElementById("mobile-" + e.target.value);
    let y = elem.getBoundingClientRect().top
    window.scroll({ top: (y - window.innerWidth / 4) - window.scrollY, behavior: "smooth" });
})

desktopSelect.addEventListener("change", (e) => {
    let elem = document.getElementById("desktop-" + e.target.value);
    let y = elem.offsetTop - window.innerWidth / 5
    eventSectionDesktopScroller.scrollTo(0, y);
})

