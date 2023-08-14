const tips = document.querySelectorAll(".has-tooltip");

let activeTooltip = null;

function toggleTooltip(tooltip) {
    const isActive = tooltip.classList.contains("tooltip_active");

    if (isActive) {
        tooltip.classList.remove("tooltip_active");
    } else {
        if (activeTooltip) {
            activeTooltip.classList.remove("tooltip_active");
        }
        tooltip.classList.add("tooltip_active");
        activeTooltip = tooltip;
    }
}

function createTooltip(tip) {
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.dataset.position = "bottom";
    tooltip.innerText = tip.title;
    tip.insertAdjacentElement("afterend", tooltip);
    return tooltip;
}

function positionTooltip(tooltip, tip) {
    const tooltipPosition = tooltip.getBoundingClientRect();
    tooltip.dataset.position = tooltipPosition.bottom;
    const linkRect = tip.offsetLeft;
    tooltip.style.left = linkRect + "px";
}

for (const tip of tips) {
    const tooltip = createTooltip(tip);

    tip.addEventListener("click", (e) => {
        e.preventDefault();
        toggleTooltip(tooltip);
        positionTooltip(tooltip, tip);
    });
}
