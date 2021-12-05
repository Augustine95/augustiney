const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach(item => item.addEventListener("click", () => {
    this.classList.toggle("collapsible--expanded");
}));