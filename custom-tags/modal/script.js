const modalWrapper = document.querySelector(".modal-wrapper");
const modalCloseButton = document.querySelector(".modal-close");
const modalBottom = document.querySelector(".modal-bottom");
const modalLink = document.querySelector(".modal-link");
const modalHeader = document.querySelector(".modal-header");
const modalContent = document.querySelector(".modal-content");
const holderDefaultContent = `
Sample <b>Content</b>...
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque voluptate
quisquam rem. Nulla non debitis fugit suscipit beatae consectetur recusandae
vitae laborum libero unde voluptatibus cum, numquam quis ill
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque voluptate
quisquam rem. Nulla non debitis fugit suscipit beatae consectetur recusandae
vitae laborum libero unde voluptatibus cum, numquam quis ill
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque voluptate
quisquam rem. Nulla non debitis fugit suscipit beatae consectetur recusandae
vitae laborum libero unde voluptatibus cum, numquam quis ill
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque voluptate
quisquam rem. Nulla non debitis fugit suscipit beatae consectetur recusandae
vitae laborum libero unde voluptatibus cum, numquam quis illum!
`
function openModal(headerName, description, link) {
    modalWrapper.style.display = "flex";
    setTimeout(() => {
        modalWrapper.style.opacity = 1;
    }, 1)
    if (headerName) { modalHeader.innerHTML = headerName; } else { modalHeader.innerHTML = "Sample Header" }
    if (description) { modalContent.innerHTML = description } else { modalContent.innerHTML = holderDefaultContent };
    if (!link) {
        modalLink.style.display = "none";
        modalBottom.style.backgroundColor = "white";
        modalLink.href = "";
    } else {
        modalLink.style.display = "block";
        modalBottom.style.backgroundColor = "rgb(255, 213, 136)";
        modalLink.href = link;
    }
}

function closeModal() {
    modalWrapper.style.opacity = 0;
    setTimeout(() => {
        modalWrapper.style.display = "none";
    }, 200)
}

modalCloseButton.addEventListener("click", () => {
    closeModal();
})

modalWrapper.addEventListener("click", (e) => {
    if (e.target == modalWrapper) {
        closeModal();
    }
})