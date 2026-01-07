let slideIndex = 1;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    // If no slides are found, stop here
    if (slides.length === 0) {
        console.error("No slides found with class 'mySlides'");
        return;
    }

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    // Hide all
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show the active one
    slides[slideIndex-1].style.display = "block";  
    if (dots.length > 0) {
        dots[slideIndex-1].className += " active";
    }
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// THE INITIALIZER: This runs as soon as the page loads
window.onload = function() {
    showSlides(slideIndex);
};