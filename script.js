const eButt = document.getElementById("emailButton");
const cButt = document.getElementById("callButton");
const lButt = document.getElementById("actualLandingButton");

const everything = document.getElementById("everything");
const landingContainer = document.getElementById("landingContainer");

const getLinks = document.getElementById("getLinks");
const emailLink = document.getElementById("emailLink").children[0]
const callLink = document.getElementById("callLink").children[0]


function email() {
    this.innerHTML = "MayyFaucher@gmail.com";
    emailLink.setAttribute("href", "mailto:MayyFaucher@gmail.com");
}
function phone() {
    this.innerHTML = "(707) 672-4018"
    callLink.setAttribute("href", "tel:7076724018");
}


function enter() {

    watch()
}


function watch() {
    var i = 0;
    var clock = setInterval(function () {

        i += 3;
        var timer = " 0px 0px " + i + "px " + i + "px #000000";
        document.getElementById("landingButton").style.boxShadow = timer;

        if (i >= 900) {

            landingContainer.setAttribute("style", "display:none");
            everything.setAttribute("style", "display:block");

            clearInterval(clock);
        }

    }, 1);
}
eButt.addEventListener("click", email);
cButt.addEventListener("click", phone);
lButt.addEventListener("click", enter)