const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        
        navLinks.forEach(navLink => {
            navLink.classList.remove('active-nav');
        });
        this.classList.add('active-nav');
    
    });
});