const merchDetails = [
    {
        name: "Merch 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magnam vel, explicabo ipsam repellendus.",
        formLink: "https://google.com",
        imageName: "dance.jpg"
    },
    {
        name: "Merch 2",
        description: "Lorem Ipsum Dolor Sit Amet 2",
        formLink: "https://google.com",
        imageName: "holder.jpg"
    }
]

const swiper = new Swiper(".swiper", {
    speed: 400,
    spaceBetween: 100,
    autoplay: {
        delay: 2500,
    },
});

// Code scrolling effects of the page header:
let header = document.querySelector("#page-header");
let msg = document.querySelector("#page-msg");
let topSection = document.querySelector(".top-section");
let topBar = document.querySelector(".top-bar");
let merchItemsSwiper = this.document.querySelector(".swiper-wrapper");

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
        header.style.transition = "0.1s font-size, 0.1s padding, top 0.3s linear, 0.3s box-shadow";
        // if (headerPositionFromTop < 85) {
        //     header.style.fontSize = "1.8rem";
        //     msg.style.transition = "none";
        // }
        if (msgPositionFromTop <= 90) {
            header.style.paddingLeft = "30px";
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

function stopAutoplay(){
    // let index = (swiper.activeIndex);
    swiper.autoplay = false;
    // setTimeout(() => {
    //     console.log(99, index);
    //     swiper.slideTo(index)
    // },2)
}

merchDetails.forEach((item) => {
    let newMerchDiv = document.createElement("div");
    newMerchDiv.className = "swiper-slide"
    newMerchDiv.onclick = stopAutoplay
    newMerchDiv.innerHTML = `
    <div class="flex relative p-1rem flex flex-col justify-end items-start gap-1rem h-15rem rounded w-85p">
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
        <div class="flex z-5 merch-button-group w-full gap-05rem">
          <a href="${item.formLink}" target="_blank" class="text-md font-bold purchase-button event-1">Register</a>
        </div>
    </div>
    `
    merchItemsSwiper.appendChild(newMerchDiv)
})
