const eventDetails = [
    {
        name: "Dance",
        description: "Experience the mesmerizing spectacle of diverse rhythms colliding on one stage in Xavotsav.",
        modalDescription: "<b>Hello World</b>",
        formLink: "https://google.com",
        imageName: "dance.jpg"
    },
    {
        name: "Art",
        description: "Lorem Ipsum Dolor Sit Amet 2",
        modalDescription: "<b>Hello World 2</b>",
        formLink: "https://google.com",
        imageName: "holder.jpg"
    },
    {
        name: "Music",
        description: "Lorem Ipsum Dolor Sit Amet 2",
        modalDescription: "<b>Hello World 2</b>",
        formLink: "https://google.com",
        imageName: "holder.jpg"
    },
    {
        name: "Fine Arts",
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
let eventSectionDesktopScroller = document.querySelector(".events-items-wrapper-desktop-scroll");
let prevHeaderText = desktopHeader.innerHTML;

const resetPositions = () => {
    // console.log("resetting");
    let eventCardDesktop = document.querySelector(".first-event-card-desktop");
    header.style.transition = "0.1s font-size, 0.3s padding, top 0.3s linear";
    header.style.position = "relative";
    header.style.paddingLeft = "0";
    header.style.marginTop = "5rem";
    msg.style.marginTop = "1rem";
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
    console.log(desktopMsgPositionFromTop, desktopMsg.style.paddingTop);
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

eventSectionDesktopScroller.addEventListener("scroll", () => {
    let eventCardDesktop = document.querySelector(".first-event-card-desktop");
    let eventCardTopPos = (eventCardDesktop.getBoundingClientRect().top);
    if (eventCardTopPos <= 70) {
        topBarDesktop.classList.add("transparent-glass-bg-2");
    } else {
        topBarDesktop.classList.remove("transparent-glass-bg-2");
    }
})

eventDetails.forEach((item, index) => {
    let newEventDiv = document.createElement("div");
    newEventDiv.className = "event-card flex relative mt-1rem p-1rem flex flex-col justify-end items-start gap-1rem h-15rem rounded w-85p"
    newEventDiv.id = "mobile-" + item.name;
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
    eventSection.appendChild(newEventDiv);

    let newEventDivDesktop = document.createElement("div");
    newEventDivDesktop.className = "flex relative p-1rem flex flex-col justify-end items-start gap-1rem h-15rem rounded event-card" + (index == 0 ? " first-event-card-desktop" : "") + (index == eventDetails.length - 1 ? " last-card" : "");
    newEventDivDesktop.id = "desktop-" + item.name;
    newEventDivDesktop.innerHTML = `
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
          <button class="register-button" onclick="openModal('${item.name}','${item.modalDescription}','${item.formLink}')">Register</button>
        </div>
    `
    eventSectionDesktop.appendChild(newEventDivDesktop);
})

let options = {
    rootMargin: "0px",
    threshold: 0.15,
};
let footerInViewport = false;
let lastCardInViewport = false;

let observerForLastCard = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (screen.width <= 850) {
            return;
        }
        if (entry.isIntersecting) {
            lastCardInViewport = true;
            console.log('last card entered viewport');
            document.body.style.overflow = "auto"
        } else {
            lastCardInViewport = false;
            console.log('last card left viewport');
            if (!footerInViewport) {
                document.body.style.overflow = "hidden";
                console.log(99);
            }
        }
    });
}, options);

let observerForDesktopFooter = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (screen.width <= 850) {
            return;
        }
        if (entry.isIntersecting) {
            footerInViewport = true;
            console.log('footer entered viewport');
            document.body.style.overflow = "auto";
        } else {
            footerInViewport = false;
            console.log('footer left viewport');
            if (!lastCardInViewport)
                document.body.style.overflow = "hidden"
        }
    });
}, options);

let target = document.querySelector(".last-card");
observerForLastCard.observe(document.querySelector(".last-card"));
observerForDesktopFooter.observe(document.querySelector(".desktop-footer"));