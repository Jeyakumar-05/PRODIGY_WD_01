window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('scrolled', window.pageYOffset > 0);

    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Smooth scrolling for anchor links
const smoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    
    // Calculate the offset position to account for the fixed navbar
    const navHeight = document.querySelector('nav').offsetHeight;
    const targetPosition = targetSection.offsetTop - navHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
};

const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});