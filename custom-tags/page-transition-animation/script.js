const transitionWrapper = document.getElementsByClassName("transition-wrapper")[0];
var routesLinks = document.getElementsByClassName("routes-mobile")[0].childNodes
var routesLinksDesktopGroup1 = document.querySelector(".desktop .nav-group-1").childNodes
var routesLinksDesktopGroup2 = document.querySelector(".desktop .nav-group-2").childNodes

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

routesLinksDesktopGroup1.forEach((node) => {
    node.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        let nodePath = node.id.split("-")[0];
        if (`/${nodePath}/` == path) {
            closeMenu();
            return;
        } else if ((nodePath == "home") && (path == "/")) {
            closeMenu();
            return;
        }
        localStorage.setItem("playTransitionAnimation", true)
        transitionWrapper.classList.remove("transition-invisible");
        transitionWrapper.classList.add("transition-visible");
        setTimeout(() => {
            window.location.replace(`/${nodePath == "home" ? "" : nodePath}`);
        }, 250)
    })
})

routesLinksDesktopGroup2.forEach((node) => {
    node.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        let nodePath = node.id.split("-")[0];
        if (`/${nodePath}/` == path) {
            closeMenu();
            return;
        } else if ((nodePath == "home") && (path == "/")) {
            closeMenu();
            return;
        }
        localStorage.setItem("playTransitionAnimation", true)
        transitionWrapper.classList.remove("transition-invisible");
        transitionWrapper.classList.add("transition-visible");
        setTimeout(() => {
            window.location.replace(`/${nodePath == "home" ? "" : nodePath}`);
        }, 250)
    })
})


if (localStorage.getItem("playTransitionAnimation")) {
    localStorage.removeItem("playTransitionAnimation");
    window.addEventListener("load", () => {
        console.log("loaded transition...");
        setTimeout(() => {
            transitionWrapper.classList.add("transition-invisible");
            transitionWrapper.classList.remove("transition-visible");
        }, 1000)
    })
} else {
    transitionWrapper.classList.add("transition-invisible-no-anim");
}