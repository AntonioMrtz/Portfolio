
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}


const banner = document.getElementById("banner-img");
const portfolio = document.getElementById("portfolio");

var h = banner.getBoundingClientRect().height

console.log("altura banner ")
console.log(h)



portfolio.style.marginTop = banner.clientHeight + "px";


console.log("Altura portfolio ")
console.log(portfolio.getBoundingClientRect().height)


window.addEventListener('resize', function (event) {

    const banner = document.getElementById("banner-img");
    const portfolio = document.getElementById("portfolio");

    var h = banner.getBoundingClientRect().height

    console.log("altura banner ")
    console.log(h)



    portfolio.style.marginTop = banner.clientHeight + "px";


    console.log("Altura portfolio ")
    console.log(portfolio.getBoundingClientRect().height)


}, true);

