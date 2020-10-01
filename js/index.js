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

// Burger
let burger = document.querySelector('.burger-menu');
let burgerList = document.querySelector('.nav');
let logo = document.querySelector('.logo');
let burgerBox = document.querySelector('.burger-box');


burger.addEventListener('click', () => {
    let topScroll = window.pageYOffset;
    if (burger.classList.contains('is-active')) {
        if (topScroll > 20) {
            burger.classList.remove('is-active');
            burgerList.classList.remove('nav-active');
        } else {
            burger.classList.remove('is-active');
            burgerList.classList.remove('nav-active');
            logo.classList.remove('logo_active');
            logo.parentNode.classList.remove('logo-wrapper_active');
            burgerBox.classList.remove('burger-box_active');
        }
    } else {
        if (topScroll > 20) {
            burger.classList.add('is-active');
            burgerList.classList.add('nav-active');
        } else {
            burger.classList.add('is-active');
            burgerList.classList.add('nav-active');
            logo.classList.add('logo_active');
            logo.parentNode.classList.add('logo-wrapper_active');
            burgerBox.classList.add('burger-box_active');
        }
    }
})

window.addEventListener('scroll', () => {
    let topScroll = window.pageYOffset;

    if (topScroll >= 1) {
        logo.classList.add('logo_active');
        logo.parentNode.classList.add('logo-wrapper_active');
        burgerBox.classList.add('burger-box_active');
    } else {
        logo.classList.remove('logo_active');
        logo.parentNode.classList.remove('logo-wrapper_active');
        burgerBox.classList.remove('burger-box_active');

        if (burger.classList.contains('is-active')) {
            burgerList.classList.remove('nav-active');
            burger.classList.remove('is-active');
        }
    }
})