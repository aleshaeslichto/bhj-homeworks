const tooltipList = document.getElementsByClassName("has-tooltip");

for (let element of tooltipList) {
    element.onclick = (event) => event.preventDefault();
    element.addEventListener("click", () => {

        const tooltip = document.createElement("div");
        tooltip.className = "tooltip tooltip_active";
        tooltip.innerText = element.getAttribute("title");

        if (element.querySelector(".tooltip")) {
            element.querySelector(".tooltip").remove();
            return;
        };

        const tooltipActive = document.querySelectorAll(".tooltip_active");
        tooltipActive.forEach(elem => elem.remove());

        const elementLeft = element.getBoundingClientRect().left;
        tooltip.setAttribute("style", `left: ${elementLeft}px; position: absolute`);

        element.appendChild(tooltip);
    });
};