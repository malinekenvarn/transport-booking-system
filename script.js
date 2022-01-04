/*A script that makes a function that shows the navigation links when clicking the hamburger menu link on a mobile version*/

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('nav-links')[0];

toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})

/* Event listener for the view links */