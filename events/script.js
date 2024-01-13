const eventDetails = [
    {
        name: "Dance",
        description: "Experience the mesmerizing spectacle of diverse rhythms colliding on one stage in Xavotsav.",
        modalDescription: "<b>Hello World</b>",
        formLink: "https://google.com",
        imageName: "dance.jpg"
    },
    {
        name: "Event 2",
        description: "Lorem Ipsum Dolor Sit Amet 2",
        modalDescription: "<b>Hello World 2</b>",
        formLink: "https://google.com",
        imageName: "holder.jpg"
    }
]



// Code scrolling effects of the page header:
let header = document.querySelector("#page-header");
let desktopHeader = document.querySelector("#desktop-page-header");
let msg = document.querySelector("#page-msg");
let desktopMsg = document.querySelector("#desktop-page-msg");
let topSection = document.querySelector(".top-section");
let topBar = document.querySelector(".top-bar");
let topBarDesktop = document.querySelector(".desktop .top-bar");
let eventSection = document.querySelector(".event-items");
let eventSectionDesktop = document.querySelector(".events-items-wrapper-desktop");
let eventCardDesktop = document.querySelector(".first-event-card-desktop");
let eventSectionDesktopScroller = document.querySelector(".events-items-wrapper-desktop-scroll");
let prevHeaderText = desktopHeader.innerHTML;

const resetPositions = () => {
    // console.log("resetting");
    header.style.transition = "0.1s font-size, 0.3s padding, top 0.3s linear";
    // header.style.fontSize = "2.5rem";
    header.style.position = "relative";
    desktopHeader.style.position = "relative";
    header.style.paddingLeft = "0";
    desktopHeader.style.paddingLeft = "0";
    header.style.marginTop = "5rem";
    desktopHeader.style.marginTop = "5rem";
    // msg.style.opacity = "1";
    msg.style.marginTop = "1rem";
    desktopMsg.style.marginTop = "1rem";
    desktopHeader.innerHTML = prevHeaderText;
    // msg.style.paddingTop = initialTopPaddingForMsg;
    // topSection.style.height = "45%";
    // topSection.style.minHeight = "300px";
    // eventSection.style.paddingTop = "70px";
    // console.log("resetting end");
    topBar.classList.remove("transparent-glass-bg");
    if (eventCardDesktop.getBoundingClientRect().top >= 70) {
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
        // desktopHeader.style.paddingLeft = "100px";
        desktopHeader.style.transition = "0.1s font-size, 0.1s padding, top 0.3s linear, 0.3s box-shadow";
        // if (headerPositionFromTop < 85) {
        //     header.style.fontSize = "1.8rem";
        //     msg.style.transition = "none";
        // }
        if (desktopMsgPositionFromTop <= 85) {
            // desktopMsg.style.marginTop = "155px";
            // desktopHeader.style.position = "fixed";
            // desktopHeader.style.top = 0;
            // desktopHeader.style.marginTop = "0.25rem";
            // desktopHeader.innerHTML = ` ~ ${prevHeaderText}`;
            // desktopHeader.style.fontFamily = "Karla";
            topBarDesktop.classList.add("transparent-glass-bg-2");
        }
    } 
    else {
        resetPositions();
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

eventSectionDesktopScroller.addEventListener("scroll", () => {
    let eventCardTopPos = (eventCardDesktop.getBoundingClientRect().top);
    if (eventCardTopPos <= 70) {
        topBarDesktop.classList.add("transparent-glass-bg-2");
    } else {
        topBarDesktop.classList.remove("transparent-glass-bg-2");
    }
})

eventDetails.forEach((item) => {
    let newEventDiv = document.createElement("div");
    newEventDiv.className = "event-card flex relative mt-1rem p-1rem flex flex-col justify-end items-start gap-1rem h-15rem rounded w-85p"
    newEventDiv.innerHTML = `
        <div class="picture absolute inset-0 rounded">
            <img
            class="w-full h-full object-cover rounded"
            src="/assets/images/events/${item.imageName}"
            />
        </div>
        <div class="gradient absolute inset-0 rounded"></div>
        <div class="display text-xl z-5">${item.name}</div>
        <div class="z-5">
          ${item.description}
        </div>
        <div class="flex z-5 event-button-group w-full gap-05rem">
          <button class="text-md font-bold register-button event-1" onclick="openModal('${item.name}','${item.modalDescription}','${item.formLink}')">Register</button>
        </div>
    `
    eventSection.appendChild(newEventDiv)
})

