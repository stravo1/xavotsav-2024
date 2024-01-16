// Code scrolling effects of the page header:
let header = document.querySelector("#page-header");
let desktopHeader = document.querySelector("#desktop-page-header");
let msg = document.querySelector("#page-msg");
let desktopMsg = document.querySelector("#desktop-page-msg");
let topSection = document.querySelector(".top-section");
let topBar = document.querySelector(".top-bar");
let topBarDesktop = document.querySelector(".desktop .top-bar");
let contactSection = document.querySelector(".contact-items");
let contactSectionDesktop = document.querySelector(".contact-items-wrapper-desktop");
let contactCardDesktop = document.querySelector(".contact-form");
let contactSectionDesktopScroller = document.querySelector(".contact-items-wrapper-desktop-scroll");
let prevHeaderText = desktopHeader.innerHTML;

const resetPositions = () => {
    // console.log("resetting");
    header.style.transition = "0.1s font-size, 0.3s padding, top 0.3s linear";
    header.style.position = "relative";
    header.style.paddingLeft = "0";
    header.style.marginTop = "5rem";
    msg.style.marginTop = "1rem";
    topBar.classList.remove("transparent-glass-bg");
    if (contactCardDesktop.getBoundingClientRect().top >= 70) {
        topBarDesktop.classList.remove("transparent-glass-bg-2");
    }
    header.classList.add("text-3xl");
    desktopHeader.classList.add("text-3xl");
    header.classList.remove("text-2xl");
    desktopHeader.classList.remove("text-2xl");
}

window.addEventListener("scroll", function () {
    let msgPositionFromTop = msg.getBoundingClientRect().top;
    let desktopMsgPositionFromTop = desktopMsg.getBoundingClientRect().top;
    console.log(desktopMsgPositionFromTop,desktopMsg.style.paddingTop);
    if (msg.style.paddingTop == "155px") {
        if (msgPositionFromTop > 0) {
            resetPositions();
            return;
        }
    }
    
    if (desktopMsgPositionFromTop < 130) {
        desktopHeader.style.transition = "0.1s font-size, 0.1s padding, top 0.3s linear, 0.3s box-shadow";
        if (desktopMsgPositionFromTop <= 85) {
            topBarDesktop.classList.add("transparent-glass-bg-2");
        }
    } 
    else {
        resetPositions();
    }
    if (msgPositionFromTop < 130) {
        header.style.paddingLeft = "30px";
        header.style.transition = "0.1s font-size, 0.1s padding, top 0.3s linear, 0.3s box-shadow";
        if (msgPositionFromTop <= 75) {
            msg.style.marginTop = "155px";
            header.style.position = "fixed";
            header.style.top = 0;
            header.style.marginTop = "0.5rem";
            header.classList.remove("text-3xl");
            header.classList.add("text-2xl");
            topBar.classList.add("transparent-glass-bg")
        }
    }
    else {
        resetPositions();
    }
    setTimeout(() => {
        let msgPositionFromTop = msg.getBoundingClientRect().top;
        console.log(msgPositionFromTop);
        if (msgPositionFromTop > 130) {
            resetPositions()
        }
    }, 100)
});

window.addEventListener("scroll", () => {
    let contactCardTopPos = (contactCardDesktop.getBoundingClientRect().top);
    if (contactCardTopPos <= 70) {
        topBarDesktop.classList.add("transparent-glass-bg-2");
    } else {
        topBarDesktop.classList.remove("transparent-glass-bg-2");
    }
})