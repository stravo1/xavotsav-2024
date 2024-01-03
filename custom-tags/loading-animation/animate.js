const el = document.querySelector(".dynamic")
const st = document.querySelector(".static")
const loader = document.querySelector(".loader")
var metaTag = document.querySelector('meta[name="theme-color"]');

let finishedLoading = false;

const reset = () => {
    el.scrollTop = 0;
    metaTag.setAttribute('content', '#000000');
    setTimeout(scrollToNextByte, 750)
}
const scrollToNextByte = () => {
    el.scrollTop = el.scrollTop + 35;
    console.log(el.scrollTop, el.scrollHeight);
    if (el.scrollTop > 170) {
        if (!finishedLoading) {
            setTimeout(reset, 1250)
        } else {
            loader.classList.add("hidden")
            setTimeout(() => {
                metaTag.setAttribute('content', '#ffffff');
            }, 200)
        }
    } else {
        setTimeout(scrollToNextByte, 750)
    }
}

if (localStorage.getItem("fontsCached")) {
    el.classList.remove("hidden-no-anim")
    st.classList.remove("hidden-no-anim")
    if (window.location.pathname == "/" && !localStorage.getItem("playTransitionAnimation")) {
        reset();
    } else {
        loader.classList.add("hidden-no-anim")
    }
}

window.addEventListener("load", () => {
    if (!localStorage.getItem("fontsCached")) {
        localStorage.setItem("fontsCached", true);
        el.classList.add("visible")
        st.classList.add("visible")
        metaTag.setAttribute('content', '#000000');
        setTimeout(reset, 1000)
    }
    finishedLoading = true
})
