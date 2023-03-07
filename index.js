
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}


/* AJUSTE BANNER CON PORTFOLIO */

/* const banner = document.getElementById("banner-img");
const portfolio = document.getElementById("portfolio");
const titulo = document.getElementById("titulo");


var style = window.getComputedStyle(titulo);
var marginTop_titulo = style.getPropertyValue('margin-top'); 



console.log("marginTop_titulo ")
console.log(marginTop_titulo)

console.log("height")
console.log(banner.clientHeight)


marginTop_titulo=marginTop_titulo.split(".")[0]



portfolio.style.marginTop = parseInt(titulo.clientHeight) + "px"

var style = window.getComputedStyle(portfolio);
var marginTop_portfolio = style.getPropertyValue('margin-top'); 

console.log("marginTop_portfolio ")
console.log(marginTop_portfolio) */








/* window.addEventListener('resize', function (event) {

    const banner = document.getElementById("banner-img");
    const portfolio = document.getElementById("portfolio");
    const titulo = document.getElementById("titulo");
    
    
    var h = banner.getBoundingClientRect().height
    
    var style = window.getComputedStyle(document.getElementById('titulo'));
    var marginTop = style.getPropertyValue('margin-top'); 
    
    console.log("altura tyitulo ")
    console.log(marginTop)
    
    
    console.log("altura banner ")
    console.log(h)
    
    
    
    portfolio.style.marginTop = banner.clientHeight + "px"-marginTop;
    
    
    console.log("Altura portfolio ")
    console.log(portfolio.getBoundingClientRect().height)


}, true);
 */





const div = document.querySelector('div');
div.classList.contains('secondary'); // true

function toogleNavbar(){

    let toogler = document.getElementById("navbar-toogler")
    let navbar =  document.getElementById("navbar")
    let wrapper =  document.getElementById("wrapper")


    if(navbar.classList.contains('hidden')){

        /* navbar.classList.remove("toogle"); */
        wrapper.classList.remove("toogle-wrapper");
        navbar.classList.remove("hidden");



    }
    else{

        /* navbar.classList.add("toogle"); */
        navbar.classList.add("hidden");
        wrapper.classList.add("toogle-wrapper");
    }

    console.log(navbar.classList)

}





/* 

function myFunction(x) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";
    } else {
      document.body.style.backgroundColor = "pink";
    }
  }
  
  var x = window.matchMedia("(max-width: 990px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes */

