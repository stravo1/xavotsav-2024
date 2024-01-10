// Code scrolling effects of the page header:
let header = document.querySelector("#page-header");
let msg = document.querySelector("#page-msg");
let topSection = document.querySelector(".top-section");
let topBar = document.querySelector(".top-bar");
let eventSection = this.document.querySelector(".event-items");

const resetPositions = () => {
    // console.log("resetting");
    header.style.transition = "0.1s font-size, 0.3s padding, top 0.3s linear";
    // header.style.fontSize = "2.5rem";
    header.style.position = "relative";
    header.style.paddingLeft = "0";
    header.style.marginTop = "5rem";
    // msg.style.opacity = "1";
    msg.style.marginTop = "1rem";
    // msg.style.paddingTop = initialTopPaddingForMsg;
    // topSection.style.height = "45%";
    // topSection.style.minHeight = "300px";
    // eventSection.style.paddingTop = "70px";
    // console.log("resetting end");
    topBar.classList.remove("transparent-glass-bg");
    header.classList.add("text-3xl");
    header.classList.remove("text-2xl");
}

window.addEventListener("scroll", function () {
    let msgPositionFromTop = msg.getBoundingClientRect().top;
    if (msg.style.paddingTop == "155px") {
        if (msgPositionFromTop > 0) {
            resetPositions();
            return;
        }
    }
    if (msgPositionFromTop < 130) {
        header.style.paddingLeft = "30px";
        header.style.transition = "0.1s font-size, 0.1s padding, top 0.3s linear, 0.3s box-shadow";
        // if (headerPositionFromTop < 85) {
        //     header.style.fontSize = "1.8rem";
        //     msg.style.transition = "none";
        // }
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
