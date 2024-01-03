const transitionWrapper = document.getElementsByClassName("transition-wrapper")[0];
var routesLinks = document.getElementsByClassName("routes-mobile")[0].childNodes

routesLinks.forEach((node) => {
    node.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (`/${node.id}/` == path) {
            closeMenu();
            return;
        } else if ((node.id == "home") && (path == "/")) {
            closeMenu();
            return;
        }
        localStorage.setItem("playTransitionAnimation", true)
        transitionWrapper.classList.remove("transition-invisible");
        transitionWrapper.classList.add("transition-visible");
        setTimeout(() => {
            window.location.replace(`/${node.id == "home" ? "" : node.id}`);
        }, 250)
    })
})


if (localStorage.getItem("playTransitionAnimation")) {
    localStorage.removeItem("playTransitionAnimation");
    setTimeout(() => {
        transitionWrapper.classList.add("transition-invisible");
        transitionWrapper.classList.remove("transition-visible");
    }, 250)
} else {
    transitionWrapper.classList.add("transition-invisible-no-anim");
}