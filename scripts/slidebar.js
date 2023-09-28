
var  sidebar = document.getElementById("sidebar");

function closeSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar?.classList.remove("top-0");
    sidebar?.classList.add("-translate-y-[150vh]");
}

function openSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar?.classList.remove("-translate-y-[150vh]");
    sidebar?.classList.add("top-0");
}

const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");

hamburger?.addEventListener("click", openSidebar);
close?.addEventListener("click", closeSidebar);

document.addEventListener("DOMContentLoaded", closeSidebar);