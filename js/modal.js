const portfolioContainer = document.querySelector(".portfolio-items");

portfolioContainer.addEventListener("click", e => {
    const modalToggle = e.target.closest(".portfolio-link");
    e.preventDefault();

    if (!modalToggle) return;

    const modal = modalToggle.parentNode.nextElementSibling;
    const closeButton = modal.querySelector(".modal-close");

    const modalOpen = _ => {
        modal.classList.add("is-open");
        modal.style.animation = "modalIn 500ms forwards";
        document.body.style.overflowY = "hidden";
    }

    const modalClose = _ => {
        modal.classList.remove("is-open");
        modal.removeEventListener("animationend", modalClose);
    }

    closeButton.addEventListener("click", _ => {
        modal.style.animation = "modalOut 500ms forwards";
        modal.addEventListener("animationend", modalClose);
        document.body.style.overflowY = "scroll";
    })

    document.addEventListener("keydown", e => {

        console.log(e);
        if (e.code == "Escape"){
            modal.style.animation = "modalOut 500ms forwards";
            modal.addEventListener("animationend", modalClose);
            document.body.style.overflowY = "scroll";
        }
    })

    modalOpen();
})