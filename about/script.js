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
let eventSectionDesktopScroller = document.querySelector(".events-items-wrapper-desktop-scroll");
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

eventSectionDesktopScroller.addEventListener("scroll", () => {
    let eventCardTopPos = (eventCardDesktop.getBoundingClientRect().top);
    if (eventCardTopPos <= 70) {
        topBarDesktop.classList.add("transparent-glass-bg-2");
    } else {
        topBarDesktop.classList.remove("transparent-glass-bg-2");
    }
})
//  -- END

// Code for plus icon on click action:
// -- START
let plus_icon = document.querySelectorAll('.plus-icon');
let plus_icon_desktop = document.querySelectorAll('.plus-icon-desktop')[0];
let plus_icon_wrapper = document.querySelectorAll('.plus-icon-wrapper');
let items_wrapper = document.querySelectorAll('.more-items');
let profile_card = document.querySelectorAll('.profile-card');

function openItems(n) {
    plus_icon[n].style.transform = "rotate(45deg)";
    plus_icon[n].style.color = "rgba(255, 255, 255, 0.8) !important";
    plus_icon[n].style.transitionDelay = "0s";
    plus_icon[n].style.filter = "invert(1)";
    plus_icon_wrapper[n].style.transitionDelay = "0s";
    plus_icon_wrapper[n].classList.add('open');
    plus_icon_wrapper[n].classList.remove('close');
    plus_icon_wrapper[n].style.background = "var(--primary-color)";
    items_wrapper[n].style.background = "wheat";
    items_wrapper[n].style.borderColor = "goldenrod";
    items_wrapper[n].style.boxShadow = '0 0 10px 2px';
    let val = 0;
    for (let i = 0; i < item.length; i++) {
        val += 35;
        if (i == 0)
            val = 45;
        item[i].style.transitionDelay = '0.21s';
        item[i].style.opacity = 1;
        item[i].style.bottom = val + 'px';
    }
    items_wrapper[n].style.height = val + 45 + 'px';
    items_wrapper[n].style.transitionDelay = "0.12s";
    profile_card[n].style.bottom = "12px";
    profile_card[n].style.boxShadow = "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px"
}

function closeItems(n) {
    plus_icon[n].style.transform = "rotate(0deg)";
    plus_icon[n].style.color = "rgba(0, 0, 0, 0.8)";
    plus_icon[n].style.transitionDelay = "0.2s";
    plus_icon[n].style.filter = "invert(0)";
    plus_icon_wrapper[n].style.transitionDelay = "0.2s";
    plus_icon_wrapper[n].style.background = "white";
    plus_icon_wrapper[n].classList.add('close');
    plus_icon_wrapper[n].classList.remove('open');
    for (let i = 0; i < item.length; i++) {
        item[i].style.transitionDelay = '0s';
        item[i].style.bottom = "5px";
        item[i].style.opacity = 0;
    }
    items_wrapper[n].style.transitionDelay = "0.05s";
    items_wrapper[n].style.height = '45px';
    items_wrapper[n].style.background = "transparent";
    items_wrapper[n].style.borderColor = "transparent";
    items_wrapper[n].style.boxShadow = '0 0 0';
    profile_card[n].style.bottom = "0";
    profile_card[n].style.boxShadow = '0 0 0'
}

function initItems() {
    for (let i = 0; i < plus_icon.length; i++) {
        item = document.querySelectorAll('.card-' + (i + 1) + ' .more-item-links');
        closeItems(i);
    }
}

function moreItems(card_number) {
    if (plus_icon_wrapper[card_number].className.includes('close')) {
        initItems();
        item = document.querySelectorAll('.card-' + (card_number + 1) + ' .more-item-links');
        openItems(card_number);
    }
    else
        closeItems(card_number);
}

document.addEventListener('click', function (event) {
    if (!event.target.className.includes('plus-icon')) {
        initItems();
    }
});

// -- END

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
    copy_icon[card_number].style.color = "green";
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