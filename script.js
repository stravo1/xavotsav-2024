// Code for custom cursor for mouse move over intro video element:
// START ---
let videoWrapper = document.querySelector('#first-desktop');
let video = document.querySelector('#intro-video');
let mobileVideo = document.querySelector(".mobile-video");
let veil = document.querySelector("#first-desktop .background");
let veilMobile = document.querySelector(".mobile .tint");
let section1TextMobile = document.querySelector(".mobile .section-1-text");
let infiniteAnimMobile = document.querySelector(".mobile .infinite-anim");
let isDesktop = screen.width > 850;

let videoPaused = false;

let timeOut;

function pauseVideo() {
    veil.classList.remove("animate__fadeOut");
    veil.classList.add("animate__fadeIn");
    video.pause();
    videoWrapper.style.cursor = "url('/assets/images/interface/play-golden-64.png'), auto";
}
function playVideo() {
    veil.classList.remove("animate__fadeIn");
    veil.classList.add("animate__fadeOut");
    video.play();
    videoWrapper.style.cursor = "url('/assets/images/interface/pause-blue-64.png'), auto";
}

function pauseVideoMobile() {
    videoPaused = true;
    mobileVideo.pause();
    infiniteAnimMobile.classList.remove("opacity-0")
    section1TextMobile.classList.remove("opacity-0")
    veilMobile.classList.remove("opacity-25")
    veilMobile.classList.add("opacity-40")
    section1TextMobile.classList.add("opacity-100")
    infiniteAnimMobile.classList.add("opacity-100")
}

function playVideoMobile() {
    videoPaused = false;
    if (mobileVideo.currentTime >= 17) {
        mobileVideo.pause();
        mobileVideo.currentTime = 0;
    }
    mobileVideo.play();
    infiniteAnimMobile.classList.add("opacity-0")
    section1TextMobile.classList.add("opacity-0")
    veilMobile.classList.add("opacity-25")
    veilMobile.classList.remove("opacity-40")
    section1TextMobile.classList.remove("opacity-100")
    infiniteAnimMobile.classList.remove("opacity-100")
}
videoWrapper.addEventListener('click', function () {
    if (video.paused) {
        playVideo()
    } else {
        pauseVideo();
    }
}, false);

veilMobile.addEventListener("click", () => {
    if (videoPaused) {
        playVideoMobile();
    } else {
        pauseVideoMobile();
    }
})

videoWrapper.addEventListener("mousemove", () => {
    veil.classList.add("animate__fadeIn");
    veil.classList.remove("animate__fadeOut");
    if (timeOut) clearTimeout(timeOut)
    timeOut = setTimeout(() => {
        if (!video.paused) {
            veil.classList.remove("animate__fadeIn");
            veil.classList.add("animate__fadeOut");
        }
    }, 1500)
})
// --- END

// Code for change in styling of each section text on scrolling:
// START ---
// const txt = ['Who we are?', 'Biggest CULTURAL fest of Kolkata!']; /* The text */
// let typeArea = document.querySelectorAll('.typing-text');
// let i = 0;
// function typeWriter(index) {
//   if (i < txt[index].length) {
//     typeArea[index].innerHTML += txt[index].charAt(i);
//     i++;
//     setTimeout(typeWriter, 100);
//   }
// }

// window.addEventListener("scroll", function() {
//     let current_scroll_pos = window.pageYOffset;
//     let screen_height = screen.height;
//     let sectionPara = document.querySelectorAll(".section-texts p");
//     console.log(current_scroll_pos);
//     console.log(screen_height);
//     for(let i = 0; i < sectionPara.length; i++)
//     if(current_scroll_pos >= screen_height/2) {
//         typeWriter(i);
//         sectionPara[i].style.opacity = "1";
//         sectionPara[i].style.left = "0";
//     }
//     else {
//         sectionPara[i].style.opacity = "0";
//         sectionPara[i].style.left = "-25px";
//         // typeArea.innerHTML = "";

//     }
// })
// --- END

window.addEventListener("load", () => {
    setTimeout(() => {
        !isDesktop ? playVideoMobile() : playVideo();
    }, 3000)
});

mobileVideo.addEventListener("timeupdate", (e) => {
    if (mobileVideo.currentTime >= 17) {
        pauseVideoMobile();
    }
})

// video.addEventListener("loadstart", () => {
//     document.querySelector(".loader").classList.add("hidden")

// })

// video.addEventListener("canplay", () => {
//     console.log("desktop video can be played...");
//     document.querySelector(".loader").classList.remove("hidden")

// })

// mobileVideo.addEventListener("loadstart", () => {
//     document.querySelector(".loader").classList.add("hidden")

// })
// mobileVideo.addEventListener("canplaythrough", () => {
//     console.log("mobile video can be played...");
//     loader.classList.remove("hidden")
// })


const image1 = document.getElementById('image-1');
const image2 = document.getElementById('image-2');
const imagePath = "/assets/images/previous-images/"
// Initial state
let toggledImage = true;
let galleryImages = 1;
// Function to toggle between images and update their src attributes
function toggleImages() {
    if (toggledImage) {
        image1.classList.add('active');
        image2.classList.remove('active');
        image1.src = imagePath + galleryImages + '.jpg'; // Change the source of image1
    } else {
        image1.classList.remove('active');
        image2.classList.add('active');
        image2.src = imagePath + galleryImages + '.jpg'; // Change the source of image2
    }

    toggledImage = !toggledImage; // Toggle between 0 and 1
    galleryImages++;
    if (galleryImages == 8) {
        galleryImages = 1
    }
}

// Call the function every 3 seconds (adjust the interval as needed)
setInterval(toggleImages, 2500);

