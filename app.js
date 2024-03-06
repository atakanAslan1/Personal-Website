const contactButton = document.getElementById('contact-btn');
const github = document.getElementById('github');

// Scroll to the github section
const scroll = () => {

    github.scrollIntoView({ behavior: 'smooth' });
};

  

contactButton.addEventListener('click', () => {
    scroll();
    github.classList.add('github-scroll');
    setTimeout(() => {
        github.classList.remove('github-scroll');
    }, 1000);

});