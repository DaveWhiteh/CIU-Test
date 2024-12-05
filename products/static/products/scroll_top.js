// Products Page - Scroll to top functionality

let button = document.getElementById("btt-button");

window.onscroll = function() {
    scrollFunction();
};

button.addEventListener('click', function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

function scrollFunction() {
    if (document.documentElement.scrollTop > 240) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}