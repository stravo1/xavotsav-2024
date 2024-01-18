const loader = document.querySelector(".loader")
var metaTag = document.querySelector('meta[name="theme-color"]');

let minimumTimePassed = false;

setTimeout(() => {
    minimumTimePassed = true;
}, 3000)

if (localStorage.getItem("playTransitionAnimation") && window.location.pathname != "/") {
    console.log("not showing inital loading animation...");
} else {
    loader.classList.remove("hidden");
    window.addEventListener("load", () => {
        if (!localStorage.getItem("fontsCached")) {
            localStorage.setItem("fontsCached", true);
            // metaTag.setAttribute('content', '#000000');
        }
        setTimeout(() => {
            // if (!(screen.width > 850) && window.location.pathname == "/") {
            //     console.log(99);
            //     let mobileVideo = document.querySelector(".mobile video");
            //     let mobileVideoSrc = document.querySelector(".mobile-video source");
            //     console.log(mobileVideo);
            //     // mobileVideoSrc.src = "/assets/videos/teaser-1.mp4"
            //     mobileVideo.addEventListener("canplaythrough", () => {
            //         console.log("mobile video can be played...");
            //         loader.classList.add("hidden");
            //         playVideoMobile()
            //     })
            //     mobileVideo.load()
            // } else {
            //     loader.classList.add("hidden");
            // }
            loader.classList.add("hidden");
            console.log("loaded...");
            setTimeout(() => {
                // metaTag.setAttribute('content', '#ffffff');
            }, 200)
        }, minimumTimePassed ? 100 : 3000)
    })
}



