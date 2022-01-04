/*A script that makes a function that shows the navigation links when clicking the hamburger menu link on a mobile version*/

const hamburgerButton = document.getElementsByClassName('hamburger-button')[0];
const navbarLinks = document.getElementsByClassName('nav-links')[0];

hamburgerButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})



/* Event listener for the view links */

/*Make all plus icons clickable*/

document.querySelectorAll('.showMore-button').forEach(item => {
    item.addEventListener('click', event => {
        //handle click
        console.log(event.target.parentElement.id) /**get article number */
        const moreInfo = document.getElementsByClassName('moreInfo')[event.target.parentElement.id];
        moreInfo.classList.toggle('active');

        /*Toggle the plus and minus icons */ 
        const togglePlus = document.getElementsByClassName('plusIcon')[event.target.parentElement.id];
        togglePlus.classList.toggle('active');

        const toggleMinus = document.getElementsByClassName('minusIcon')[event.target.parentElement.id];
        toggleMinus.classList.toggle('active');
    })
})




