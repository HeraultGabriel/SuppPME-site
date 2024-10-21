
const sections = document.querySelectorAll('.fond');


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry.target, entry.isIntersecting); 
        if (entry.isIntersecting) {
            
            entry.target.classList.add('zoom');
        } else {

            entry.target.classList.remove('zoom');
        }
    });
}, {
    threshold: 0.6 
});


sections.forEach(section => {
    observer.observe(section);
});
