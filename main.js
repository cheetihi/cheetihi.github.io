var typed = new Typed(".text", {
    strings: ["Software Engineer" , "Full-stack Developer" , "Frontend Developer" , "Web developer" , "Software Developer"],
    typeSpeed: 60,
    backSpeed: 70,
    backDelay: 600,
    loop: true
});


document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

