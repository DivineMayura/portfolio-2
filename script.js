const eButt = document.getElementById("emailButton");
const cButt = document.getElementById("callButton");
const lButt = document.getElementById("actualLandingButton");

const everything = document.getElementById("everything");
const landingContainer = document.getElementById("landingContainer");
const blackNav = document.getElementById("blackVacuum");

const getLinks = document.getElementById("getLinks");
const emailLink = document.getElementById("emailLink").children[0]
const callLink = document.getElementById("callLink").children[0]

// displays email to page after user clicks
function email() {
    this.innerHTML = "MayyFaucher@gmail.com";
    emailLink.setAttribute("href", "mailto:MayyFaucher@gmail.com");
}
//displays phone to page after user clicks
function phone() {
    this.innerHTML = "(707) 672-4018"
    callLink.setAttribute("href", "tel:7076724018");
}

// event listener for the enter button
function enter() {
    watch()
}

// This is for the button consuming shadow effect
function watch() {
    var i = 0;
    var clock = setInterval(function () {

        i += 5;
        var timer = " 0px 0px " + i + "px " + i + "px #000000";
        document.getElementById("landingButton").style.boxShadow = timer;

        if (i >= 900) {

            blackTransition()

            everything.setAttribute("style", "display:block");

            landingContainer.setAttribute("style", "display:none");
            clearInterval(clock);
        }
    }, 1);
}



// this is for the navbar retreating shadow effect
function blackTransition() {
    var z = 1400;
    var blackVanish = setInterval(function () {

        z -= 5;
        var transition = "0px 0px " + z + "px " + z + "px #000000";
        blackNav.style.boxShadow = transition;

        if (z <= 4) {
            clearInterval(blackVanish);
        }


    }, 1);
}


eButt.addEventListener("click", email);
cButt.addEventListener("click", phone);
lButt.addEventListener("click", enter)