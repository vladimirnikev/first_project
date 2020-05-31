// Tabs
let kitchenMenu;
let tabsMenu;
let tabsSubMenu;

window.onload = function () {
    tabsMenu = document.getElementsByClassName("tabs_menu");
    tabsSubMenu = document.getElementsByClassName("tabs_sub_menu");
    hideTabsSubMenu(1);
}

function hideTabsSubMenu(a) {
    for (i = a; i < tabsSubMenu.length; i++) {
        tabsSubMenu[i].classList.remove("kitchen-menu__list-wrapper");
        tabsSubMenu[i].classList.add("kitchen-menu__list-wrapper-hide");
        tabsMenu[i].classList.remove("tabs_menu-clicked");
    }
}

function showTabsSubMenu(b) {
    if (tabsSubMenu[b].classList.contains("kitchen-menu__list-wrapper-hide")) {
        hideTabsSubMenu(0);
        tabsMenu[b].classList.add("tabs_menu-clicked");
        tabsSubMenu[b].classList.remove("kitchen-menu__list-wrapper-hide");
        tabsSubMenu[b].classList.add("kitchen-menu__list-wrapper");
    }
}

document.getElementById("kitchen-menu-tabs").onclick = function (event) {
    let target = event.target;
    if (target.className == "tabs_menu") {
        for (i = 0; i < tabsMenu.length; i++) {
            if (target == tabsMenu[i]) {
                showTabsSubMenu(i);
                break;
            }
        }
    }
}

// Modal
let modal = document.getElementsByClassName("modal__wrapper")[0];
let btn = document.getElementById("openModal");
let close = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}