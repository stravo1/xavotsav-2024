let desktopFooter = document.querySelector(".desktop-footer")

desktopFooter.style.top = `calc(100vh - 2rem)`;

desktopFooter.addEventListener("mouseover", () => {
    desktopFooter.style.top = `calc(100vh - ${desktopFooter.clientHeight}px)`;
})

desktopFooter.addEventListener("mouseout", () => {
    desktopFooter.style.top = `calc(100vh - 2rem)`;
})