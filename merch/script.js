const merchDetails = [
  {
    name: "Merch 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magnam vel, explicabo ipsam repellendus.",
    formLink: "https://google.com",
    imageName: "dance.jpg",
  },
  {
    name: "Merch 2",
    description: "Lorem Ipsum Dolor Sit Amet 2",
    formLink: "https://google.com",
    imageName: "holder.jpg",
  },
];

const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 100,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    type: "fraction",
  },
});

const swiperDesktop = new Swiper(".swiper-desktop", {
  speed: 400,
  autoplay: {
    delay: 2500,
  },
  // effect: "cards",
  pagination: {
    el: ".swiper-pagination-desktop",
    dynamicBullets: true,
    type: "fraction",
  },
});

let merchItemsSwiper = this.document.querySelector(".mobile .swiper-wrapper");
let merchItemsSwiperDesktop = this.document.querySelector(
  ".desktop .swiper-wrapper"
);

// Code scrolling effects of the page header:
let header = document.querySelector("#page-header");
let desktopHeader = document.querySelector("#desktop-page-header");
let msg = document.querySelector("#page-msg");
let desktopMsg = document.querySelector("#desktop-page-msg");
let topSection = document.querySelector(".top-section");
let topBar = document.querySelector(".top-bar");
let topBarDesktop = document.querySelector(".desktop .top-bar");
let merchSection = document.querySelector(".merch-items");
let merchSectionDesktop = document.querySelector(
  ".merch-items-wrapper-desktop"
);
let merchCardDesktop = document.querySelector(".swiper-desktop");
let merchSectionDesktopScroller = document.querySelector(
  ".merch-items-wrapper-desktop-scroll"
);
let prevHeaderText = desktopHeader.innerHTML;

const resetPositions = () => {
  // console.log("resetting");
  header.style.transition = "0.1s font-size, 0.3s padding, top 0.3s linear";
  header.style.position = "relative";
  header.style.paddingLeft = "0";
  header.style.marginTop = "5rem";
  msg.style.marginTop = "1rem";
  topBar.classList.remove("transparent-glass-bg");
  if (merchCardDesktop.getBoundingClientRect().top >= 70) {
    topBarDesktop.classList.remove("transparent-glass-bg-2");
  }
  header.classList.add("text-3xl");
  desktopHeader.classList.add("text-3xl");
  header.classList.remove("text-2xl");
  desktopHeader.classList.remove("text-2xl");
};

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
    desktopHeader.style.transition =
      "0.1s font-size, 0.1s padding, top 0.3s linear, 0.3s box-shadow";
    if (desktopMsgPositionFromTop <= 85) {
      topBarDesktop.classList.add("transparent-glass-bg-2");
    }
  } else {
    resetPositions();
  }
  if (msgPositionFromTop < 130) {
    header.style.paddingLeft = "30px";
    header.style.transition =
      "0.1s font-size, 0.1s padding, top 0.3s linear, 0.3s box-shadow";
    if (msgPositionFromTop <= 75) {
      msg.style.marginTop = "155px";
      header.style.position = "fixed";
      header.style.top = 0;
      header.style.marginTop = "0.5rem";
      header.classList.remove("text-3xl");
      header.classList.add("text-2xl");
      topBar.classList.add("transparent-glass-bg");
    }
  } else {
    resetPositions();
  }
  setTimeout(() => {
    let msgPositionFromTop = msg.getBoundingClientRect().top;
    console.log(msgPositionFromTop);
    if (msgPositionFromTop > 130) {
      resetPositions();
    }
  }, 100);
});

window.addEventListener("scroll", () => {
  let merchCardTopPos = merchCardDesktop.getBoundingClientRect().top;
  if (merchCardTopPos <= 70) {
    topBarDesktop.classList.add("transparent-glass-bg-2");
  } else {
    topBarDesktop.classList.remove("transparent-glass-bg-2");
  }
});

function stopAutoplay() {
  swiper.autoplay.stop();
}

function stopAutoplayDesktop() {
  swiperDesktop.autoplay.stop();
}

merchDetails.forEach((item) => {
  let newMerchDiv = document.createElement("div");
  newMerchDiv.className = "swiper-slide";
  newMerchDiv.onclick = stopAutoplay;
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
          <a href="${item.formLink}" target="_blank" class="text-md font-bold purchase-button event-1">Buy Now</a>
        </div>
    </div>
    `;
});
