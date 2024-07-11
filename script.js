document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav a[href^="#"]');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
