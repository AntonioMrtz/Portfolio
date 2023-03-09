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


/* NAVBAR LI SELECCIONADO */

/* function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}

var ul = document.getElementById('ul-navbar');


var navbar_lis=getLis();
setUpListenersLi(navbar_lis) */

/* document.getElementsByClassName("navbar-items-phone").addEventListener("click",function(clicked_li) {
   

    navbar_lis=getLis()


    for(let li of navbar_lis){


        li.classList.remove("li-active")

    }

    clicked_li.classList.add(li)


});

function getLis(){
    
    let lis = document.getElementsByClassName('navbar-items-phone');
    return lis;

} */

/* function setUpListenersLi(lis){


    for(li of lis){


        if(li.classList.contains("navbar-items-phone")){

            li.addEventListener("click", selectLi(li),false);

        }

    }

} */




/* function selectLi(this_li){


    
    let lis = document.getElementById('ul-navbar').getElementsByTagName('li');
    

    for(li of lis){

        if(li.classList.contains("li-active")){
                
            
            li.classList.remove("li-active")
        }
        
    }

    console.log(this_li)
    this_li.classList.add("li-active")

} */

/* 
ul.onclick = function (event) {
    
    
    let lis = document.getElementById('ul-navbar').getElementsByTagName('li');
    
    for(li of lis){

        
        let as = li.getElementsByTagName('a')

        
        
        for(a of as){
            
            
            if(a.classList.contains("li-active")){
                
                
                a.classList.remove("li-active")
            }
            
        }


        
        
    }

    target.pare
    
    let target = getEventTarget(event);
    target.classList.add("li-active")
};

 */