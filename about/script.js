// Code scrolling effects of the page header:
// -- START
let header = document.querySelector("#page-header");
let desktopHeader = document.querySelector("#desktop-page-header");
let msg = document.querySelector("#page-msg");
let desktopMsg = document.querySelector("#desktop-page-msg");
let topSection = document.querySelector(".top-section");
let topBar = document.querySelector(".top-bar");
let topBarDesktop = document.querySelector(".desktop .top-bar");
let eventSection = document.querySelector(".event-items");
let eventSectionDesktop = document.querySelector(".events-items-wrapper-desktop");
let eventCardDesktop = document.querySelector(".first-contact-card-desktop");
let profilesSectionDesktopScroller = document.querySelector(".profile-cards-wrapper-desktop-scroll");
let prevHeaderText = desktopHeader.innerHTML;

const resetPositions = () => {
    // console.log("resetting");
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

profilesSectionDesktopScroller.addEventListener("scroll", () => {
    let eventCardTopPos = (eventCardDesktop.getBoundingClientRect().top);
    if (eventCardTopPos <= 70) {
        topBarDesktop.classList.add("transparent-glass-bg-2");
    } else {
        topBarDesktop.classList.remove("transparent-glass-bg-2");
    }
})
//  -- END


let phone_number_box = document.querySelectorAll('.phone-number-box');

function openBox(n) {
    phone_number_box[n].classList.remove('hide-number');
        phone_number_box[n].classList.add('show-number');
}

function closeBox(n) {
    phone_number_box[n].classList.add('hide-number');
    phone_number_box[n].classList.remove('show-number');
}

function initBox() {
    for(let i=0; i < phone_number_box.length; i++)
        closeBox(i);
}

function phoneBox(card_number) {
    
    if(phone_number_box[card_number].className.includes('hide-number')) {
        initBox();
        openBox(card_number);
    }
    else if(phone_number_box[card_number].className.includes('show-number')) {
        closeBox(card_number);
    }
}

document.addEventListener('click', function (event) {
    if (!event.target.className.includes('call-icon') && !event.target.className.includes('phone-number-box') && !event.target.className.includes('phone-number') && !event.target.className.includes('copy-icon')) {
        initBox();
    }
});

function copyNumber(card_number) {
    let copy_icon = document.querySelectorAll('.copy-icon');
    let phone_number = document.querySelectorAll('.phone-number');

    navigator.clipboard.writeText(phone_number[card_number].innerHTML);
    setTimeout(() => {
        copy_icon[card_number].innerHTML = "content_copy";
        copy_icon[card_number].style.color = "black";
    }, 1500);
    copy_icon[card_number].innerHTML = "check_box";
    copy_icon[card_number].style.color = "rgb(24, 92, 50)";
}

let options = {
    rootMargin: "0px",
    threshold: 0.15,
};
let footerInViewport = false;
let lastCardInViewport = false;

let observerForLastCard = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (window.innerWidth <= 850) {
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
        if (window.innerWidth <= 850) {
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

observerForLastCard.observe(document.querySelector(".last-card"));
observerForDesktopFooter.observe(document.querySelector(".desktop-footer"));