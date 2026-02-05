document.getElementById("menu_responsive").addEventListener("click", function() {
    const menu = document.querySelector(".menu_responsive");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});