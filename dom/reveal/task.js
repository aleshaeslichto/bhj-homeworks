const revealBlocks = document.querySelectorAll(".reveal");

const revealBlock = (block) => {
    // Получаем позицию блока относительно верха страницы
    const blockTop = block.getBoundingClientRect().top;

    // Получаем высоту видимой области окна
    const windowHeight = window.innerHeight;

    if (blockTop < windowHeight - 100) {
        block.classList.add("reveal_active");
    } else {
        block.classList.remove("reveal_active");
    }
};

window.addEventListener("scroll", () => {
    revealBlocks.forEach(revealBlock);
});
