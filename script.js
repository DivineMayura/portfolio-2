const eButt = document.getElementById("emailButton");
const cButt = document.getElementById("callButton");
const getLinks = document.getElementById("getLinks");
const emailLink = document.getElementById("emailLink").children[0]
const callLink = document.getElementById("callLink").children[0]


function email() {
    this.innerHTML = "MayyFaucher@gmail.com";

    emailLink.setAttribute("href", "mailto:MayyFaucher@gmail.com");
}
function phone() {
    this.innerHTML = "(707) 672-4018"
    
    callLink.setAttribute("href","tel:7076724018");
}

eButt.addEventListener("click", email);
cButt.addEventListener("click", phone);