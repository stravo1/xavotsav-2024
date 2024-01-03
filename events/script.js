const swiper = new Swiper(".swiper", {
    speed: 400,
    effect: "fade",
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
    },
});
const bgImages = document.querySelectorAll(".bg-images")

swiper.on('slideChange', function () {
    console.log('slide changed', swiper.activeIndex);
    bgImages.forEach((node, index) => {
        if (swiper.activeIndex == index) {
            node.classList.add("opacity-100")
            node.classList.remove("opacity-0")
        } else {
            if (!node.classList.contains("opacity-0")) {
                node.classList.add("opacity-0")
            }
            if (node.classList.contains("opacity-100")) {
                node.classList.remove("opacity-100")
            }
        }
    })
});

