// Code for custom cursor for mouse move over intro video element:
// START ---
let videoWrapper = document.querySelector('#first-desktop');
let video = document.querySelector('#intro-video');
let veil = document.querySelector("#first-desktop .background");
let timeOut;
function pauseVideo() {
    veil.classList.remove("animate__fadeOut");
    veil.classList.add("animate__fadeIn");
    video.pause();
    videoWrapper.style.cursor = "url('/assets/images/interface/play-golden-64.png'), auto";
}
videoWrapper.addEventListener('click', function () {
    if (video.paused) {
        veil.classList.remove("animate__fadeIn");
        veil.classList.add("animate__fadeOut");
        video.play();
        videoWrapper.style.cursor = "url('/assets/images/interface/pause-blue-64.png'), auto";
    } else {
        pauseVideo();
    }
}, false);

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