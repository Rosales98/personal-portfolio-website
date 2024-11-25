//Back to top Button
let topButton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

topButton.addEventListener("click", function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
} );

//
