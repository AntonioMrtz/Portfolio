
// When reloading it realocates the view of the user to the top of the screen

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}


// Global VARS

const PHONE_MEDIA_QUERY = window.matchMedia("(max-width: 990px)");
const PC_MEDIA_QUERY = window.matchMedia("(min-width: 991px)");


var navbar =  document.getElementById("navbar")
var wrapper =  document.getElementById("wrapper")
var body = document.getElementById('body')




// Hide navbar on phone

function hideNavBarOnMobile() {
  if (PHONE_MEDIA_QUERY.matches) {
    let navbar =  document.getElementById("navbar")
    let wrapper =  document.getElementById("wrapper")
    
   
        
        navbar.classList.add("hidden");
        wrapper.classList.add("toogle-wrapper");
  }
}

PHONE_MEDIA_QUERY.addEventListener("change", hideNavBarOnMobile());






// Turns navbar hidden into visible & margin of body between 0-20vw and viceversa


function toogleNavbar(){


    if(navbar.classList.contains('hidden')){

        wrapper.classList.remove("toogle-wrapper");
        navbar.classList.remove("hidden");



    }
    else{

        navbar.classList.add("hidden");
        wrapper.classList.add("toogle-wrapper");
    }


}


// Hides navbar on phone if clicking body


var clickerFn = function () {
  
   


    if(!navbar.classList.contains('hidden') && PHONE_MEDIA_QUERY.matches){

        navbar.classList.add("hidden");
        wrapper.classList.add("toogle-wrapper");


    }



}

body.onclick = clickerFn



// hides navBar if its the phone version , navbar is not hidden and the user clicks on one li of it 

var clickerFn = function () {
  
   


    if(!navbar.classList.contains('hidden') && PHONE_MEDIA_QUERY.matches){

        navbar.classList.add("hidden");
        wrapper.classList.add("toogle-wrapper");


    }



}
navbar.onclick = clickerFn













