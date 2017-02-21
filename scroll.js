window.onscroll = fixedTop;

var startingY = false;

function fixedTop() {

    // First top value recovery
    if (!startingY) startingY = parseInt(document.getElementById("fixedtop").style.top);

    // Scroll top value
    if (window.pageYOffset) {
        var yrt = window.pageYOffset;
    } else if (document.body.scrollTop){
        var yrt = document.body.scrollTop;
    } else {
        var yrt = document.documentElement.scrollTop;
    }

    document.getElementById("fixedtop").style.top = (yrt + startingY)+ "px";
}
