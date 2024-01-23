const sponsorDetails = [
    // {
    //     title: "Title Sponsor",
    //     imageName: "91.9-FriendsFM.png"
    // },
    {
        title: "Co-Sponsor",
        imageName: "TWISTED TRUTHS.png"
    },
    {
        title: "Powered By",
        imageName: "India restaurant.png"
    },
    {
        title: "Digital Marketing Partner",
        imageName: "SM.png"
    },
    {
        title: "Food Partner",
        imageName: "India Eats.png"
    },
]


// Code scrolling effects of the page header:
let header = document.querySelector("#page-header");
let desktopHeader = document.querySelector("#desktop-page-header");
let msg = document.querySelector("#page-msg");
let desktopMsg = document.querySelector("#desktop-page-msg");
let topSection = document.querySelector(".top-section");
let topBar = document.querySelector(".top-bar");
let topBarDesktop = document.querySelector(".desktop .top-bar");
let sponsorSection = document.querySelector(".sponsor-items");
let sponsorSectionDesktop = document.querySelector(".sponsors-items-wrapper-desktop");
let sponsorCardDesktop = document.querySelector(".first-sponsor-card-desktop");
let sponsorSectionDesktopScroller = document.querySelector(".sponsors-items-wrapper-desktop-scroll");
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
    // sponsorSection.style.paddingTop = "70px";
    // console.log("resetting end");
    topBar.classList.remove("transparent-glass-bg");
    if (sponsorCardDesktop.getBoundingClientRect().top >= 70) {
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
    // console.log(desktopMsgPositionFromTop, desktopMsg.style.paddingTop);
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
        // console.log(msgPositionFromTop);
        if (msgPositionFromTop > 130) {
            resetPositions()
        }
        let sponsorCardTopPos = (sponsorCardDesktop.getBoundingClientRect().top);
        if (sponsorCardTopPos <= 70) {
            topBarDesktop.classList.add("transparent-glass-bg-2");
        } else {
            topBarDesktop.classList.remove("transparent-glass-bg-2");
        }
    }, 100)
});


sponsorSectionDesktopScroller.addEventListener("scroll", () => {
    let sponsorCardTopPos = (sponsorCardDesktop.getBoundingClientRect().top);
    if (sponsorCardTopPos <= 70) {
        topBarDesktop.classList.add("transparent-glass-bg-2");
    } else {
        topBarDesktop.classList.remove("transparent-glass-bg-2");
    }
})

sponsorDetails.forEach((item) => {
    let newSponsorDiv = document.createElement("div");
    newSponsorDiv.className = "flex relative p-1rem flex flex-col justify-end items-start h-15rem rounded w-85p sponsor-card"
    newSponsorDiv.innerHTML = `
        <div class="picture inset-0 rounded p-2rem picture">
            <img
            class="w-full h-full object-contain rounded"
            src="/assets/images/sponsors/${item.imageName}"
            />
        </div>
        <div class="flex z-5 w-full gap-05rem">
          <span class="sponsor-title display text-xl">${item.title}</span>
        </div>
    `
    sponsorSection.appendChild(newSponsorDiv)
})

sponsorDetails.slice(1,).forEach((item, index) => {
    let newSponsorDivDesktop = document.createElement("div");
    newSponsorDivDesktop.className = "flex relative p-1rem flex flex-col justify-end items-start rounded w-85p sponsor-card" + (index + 1 == sponsorDetails.length - 1 ? " last-card" : "")
    newSponsorDivDesktop.innerHTML = `
        <div class="picture rounded p-2rem">
            <img
              class="w-full h-full object-contain rounded"
              src="/assets/images/sponsors/${item.imageName}"
            />
        </div>
        <div class="flex z-5 w-full gap-05rem">
          <span class="sponsor-title">${item.title}</span>
        </div>
    `
    sponsorSectionDesktop.appendChild(newSponsorDivDesktop);
})

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

let target = document.querySelector(".last-card");
observerForLastCard.observe(document.querySelector(".last-card"));
observerForDesktopFooter.observe(document.querySelector(".desktop-footer"));