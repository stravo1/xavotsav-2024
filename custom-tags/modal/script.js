const modalWrapper = document.querySelector(".modal-wrapper");
const modalCloseButton = document.querySelector(".modal-close");
const modalBottom = document.querySelector(".modal-bottom");
const modalLink = document.querySelector(".modal-link");
const modalHeader = document.querySelector(".modal-header");
const modalContent = document.querySelector(".modal-content");

function openModal(headerName, description, link) {
    modalWrapper.style.display = "flex";
    setTimeout(() => {
        modalWrapper.style.opacity = 1;
    }, 1)
    modalHeader.innerHTML = headerName;
    modalContent.innerHTML = description;
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