const menu_btn = document.getElementById("menu-btn");
const main_menu = document.getElementById("main-menu");
const close_menu = document.getElementById("close");
const submit_btn = document.getElementById("submit-btn");

menu_btn.addEventListener("click", () => {
    main_menu.style.right = "0rem";
});

close_menu.addEventListener("click", () => {
    main_menu.style.right = "-65rem";
});

submit_btn.addEventListener("click", (e)=> e.preventDefault());

