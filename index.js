//* Global VARS

const PHONE_MEDIA_QUERY = window.matchMedia("(max-width: 990px)");
const PC_MEDIA_QUERY = window.matchMedia("(min-width: 991px)");

//* Global ELEMENTS

var navbar = document.getElementById("ul-navbar");
var wrapper = document.getElementById("home");
var body = document.getElementById("body");
var stickyMenu = document.getElementById("sticky-menu");

//* VISIBLE ITEM

// ON SCROLL detectar que seccion es visible y subrayarla en navbar
document.addEventListener("scroll", (event) => {
    if (checkVisible(document.getElementById("header"))) {
        let previous_selected_item =
            document.getElementsByClassName("li-active")[0];

        if (previous_selected_item !== undefined)
            previous_selected_item.classList.remove("li-active");

        document
            .getElementsByClassName("navbar-items-phone")[0]
            .classList.add("li-active");
    } else if (checkVisible(document.getElementById("contacto"))) {
        let previous_selected_item =
            document.getElementsByClassName("li-active")[0];

        if (previous_selected_item !== undefined)
            previous_selected_item.classList.remove("li-active");

        document
            .getElementsByClassName("navbar-items-phone")[3]
            .classList.add("li-active");
    } else if (checkVisible(document.getElementById("conoceme"))) {
        let previous_selected_item =
            document.getElementsByClassName("li-active")[0];

        if (previous_selected_item !== undefined)
            previous_selected_item.classList.remove("li-active");

        document
            .getElementsByClassName("navbar-items-phone")[2]
            .classList.add("li-active");
    } else if (checkVisible(document.getElementById("portfolio"))) {
        let previous_selected_item =
            document.getElementsByClassName("li-active")[0];

        if (previous_selected_item !== undefined)
            previous_selected_item.classList.remove("li-active");

        document
            .getElementsByClassName("navbar-items-phone")[1]
            .classList.add("li-active");
    }
});

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
    );
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

//* MANAGE NAVBAR BEHAVIOUR

PC_MEDIA_QUERY.addEventListener("change", showNavBarOnPC());
PHONE_MEDIA_QUERY.addEventListener("change", hideNavBarOnMobile());

// Hides navbar on phone if clicking body
var clickerFn = function () {
    if (!navbar.classList.contains("hidden") && PHONE_MEDIA_QUERY.matches)
        hideNavBar();
};

wrapper.onclick = clickerFn;

// hides navBar if its the phone version , navbar is not hidden and the user clicks on one li of it
var clickerFnNav = function () {
    if (!navbar.classList.contains("hidden") && PHONE_MEDIA_QUERY.matches) {
        hideNavBar();
    }
};
navbar.onclick = clickerFnNav;

function showNavBarOnPC() {
    if (PC_MEDIA_QUERY.matches) showNavBar();
}

// Hide navbar on phone
function hideNavBarOnMobile() {
    if (PHONE_MEDIA_QUERY.matches) hideNavBar();
}

// Turns navbar hidden into visible & margin of body between 0-20vw and viceversa
function toogleNavbar() {
    if (PHONE_MEDIA_QUERY.matches && navbar.classList.contains("hidden")) {
        wrapper.classList.add("body-opacity");
        stickyMenu.classList.add("body-opacity");
        showNavBar();
    } else if (navbar.classList.contains("hidden")) {
        showNavBar();
    } else hideNavBar();
}

/* Manage Styles on SHOW/HIDE NAVBAR */

function showNavBar() {
    navbar.classList.remove("hidden");
}

function hideNavBar() {
    navbar.classList.add("hidden");
    wrapper.classList.remove("body-opacity");
    stickyMenu.classList.remove("body-opacity");
}

//* HANDLE SCREEN EVENTS

// When reloading it realocates the view of the user to the top of the screen

if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
}

/* Animation Reveal */

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

/* On resize navbar */

function handleResize() {
    toogleNavbar();
    hideNavBarOnMobile();
    showNavBarOnPC();
}

window.addEventListener("resize", handleResize);

/* Handle Swipe */

let touchstartX = 0;
let touchendX = 0;

function checkDirection() {
    //swipe left
    if (touchendX > touchstartX + 100 && PHONE_MEDIA_QUERY.matches) {
        toogleNavbar();
    }
    //swipe right
    if (touchendX < touchstartX + 100 && PHONE_MEDIA_QUERY.matches) {
        hideNavBarOnMobile();
    }
}

document.addEventListener("touchstart", (e) => {
    touchstartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
    touchendX = e.changedTouches[0].screenX;
    checkDirection();
});
