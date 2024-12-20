// alert("Welcome to Eve's Portfolio Website!");
//
//
// console.log("Thank you for visiting Eve's Portfolio Website :)");
//

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}