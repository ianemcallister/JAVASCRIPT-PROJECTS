
function countdown() {
    var seconds = document.getElementById('seconds').value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if(seconds === -1) {
            alert("Times's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thubnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    

    // Hide all slides
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1}
    slides[slideIndex-1].style.display = 'block';
    setTimeout(showSlides, 2000);
    
}