
var screenWidth;
function getScreenSizeOnResize() {
    const sidebar = document.getElementById("sidebar");
    function updateScreenSize() {
        screenWidth = window.screen.width;
        if (screenWidth > 992) {
            sidebar?.classList.remove("top-0");
            sidebar?.classList.add("-top-[140vh]");
        }
    }
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
}
document.addEventListener("DOMContentLoaded", getScreenSizeOnResize);


function closeSidebar() {
    sidebar?.classList.remove("top-0");
    sidebar?.classList.add("-top-[140vh]");
}

function openSidebar() {
    sidebar?.classList.remove("-top-[140vh]");
    sidebar?.classList.add("top-0");
}

//  JavaScript to toggle the sidebar
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const close = document.getElementById("close");
const links = document.querySelectorAll("#sidebar a");

document.addEventListener("DOMContentLoaded", closeSidebar);
hamburger?.addEventListener("click", openSidebar);
close?.addEventListener("click", closeSidebar);