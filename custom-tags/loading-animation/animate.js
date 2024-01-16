const loader = document.querySelector(".loader")
var metaTag = document.querySelector('meta[name="theme-color"]');

let minimumTimePassed = false;

setTimeout(() => {
    minimumTimePassed = true;
}, 3000)


if (localStorage.getItem("playTransitionAnimation") && window.location.pathname != "/") {
    console.log("not showing inital loading animation...");
    loader.classList.add("hidden");
} else {
    window.addEventListener("load", () => {
        if (!localStorage.getItem("fontsCached")) {
            localStorage.setItem("fontsCached", true);
            // metaTag.setAttribute('content', '#000000');
        }
        setTimeout(() => {
            loader.classList.add("hidden");
            console.log("loaded...");
            setTimeout(() => {
                // metaTag.setAttribute('content', '#ffffff');
            }, 200)
        }, minimumTimePassed ? 100 : 3000)
    })
}



