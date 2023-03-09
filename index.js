// When reloading it realocates the view of the user to the top of the screen

if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
}

// Global VARS

const PHONE_MEDIA_QUERY = window.matchMedia("(max-width: 990px)");
const PC_MEDIA_QUERY = window.matchMedia("(min-width: 991px)");

// Global ELEMENTS

var navbar = document.getElementById("navbar");
var wrapper = document.getElementById("wrapper");
var body = document.getElementById("body");





/* FUNCTIONS */

function showNavBarOnPC() {
    if (PC_MEDIA_QUERY.matches) showNavBar();
}

PC_MEDIA_QUERY.addEventListener("change", showNavBarOnPC());



// Hide navbar on phone
function hideNavBarOnMobile() {
    if (PHONE_MEDIA_QUERY.matches) hideNavBar();

}

PHONE_MEDIA_QUERY.addEventListener("change", hideNavBarOnMobile());


// Turns navbar hidden into visible & margin of body between 0-20vw and viceversa
function toogleNavbar() {
    if (navbar.classList.contains("hidden")) showNavBar();
    else hideNavBar();
}


// Hides navbar on phone if clicking body
var clickerFn = function () {
    if (!navbar.classList.contains("hidden") && PHONE_MEDIA_QUERY.matches)
        hideNavBar();
};

body.onclick = clickerFn;


// hides navBar if its the phone version , navbar is not hidden and the user clicks on one li of it
var clickerFn = function () {
    if (!navbar.classList.contains("hidden") && PHONE_MEDIA_QUERY.matches) {
        hideNavBar()
    }
};
navbar.onclick = clickerFn;



/* UTILS */

function showNavBar() {
    wrapper.classList.remove("toogle-wrapper");
    navbar.classList.remove("hidden");
}

function hideNavBar() {
    navbar.classList.add("hidden");
    wrapper.classList.add("toogle-wrapper");
}