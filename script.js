/*A script that makes a function that shows the navigation links when clicking the hamburger menu link on a mobile version*/

const hamburgerButton = document.getElementsByClassName('hamburger-button')[0];
const navbarLinks = document.getElementsByClassName('nav-links')[0];

hamburgerButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})



/* Event listener for the view links */

/*Make all plus icons clickable, Get all elements in the document with the showMore-button class*/

document.querySelectorAll('.showMore-button').forEach(item => {
    item.addEventListener('click', event => {
        //handle click
        const moreInfo = document.getElementsByClassName('moreInfo')[event.target.parentElement.id];
        moreInfo.classList.toggle('active');

        /*Toggle the plus and minus icons */
        const togglePlus = document.getElementsByClassName('plusIcon')[event.target.parentElement.id];
        togglePlus.classList.toggle('active');

        const toggleMinus = document.getElementsByClassName('minusIcon')[event.target.parentElement.id];
        toggleMinus.classList.toggle('active');

        event.preventDefault(); /*Prevents the click event from scrolling itself to top of page*/
    })
})


/* Booking page*/
const oneWayBooking = document.getElementsByClassName('oneway-booking')[0];
const recurringBooking = document.getElementsByClassName('recurring-booking')[0];


/**Click on radio button will trigger event */
document.querySelectorAll('[name="choice-of-travel"]').forEach(item => {
    item.addEventListener('input', (event) => {

        //toggle the booking forms
        if (event.target.value === "oneway") {
            if(recurringBooking.style.display = "block"){
                recurringBooking.style.display ="none";
            }
            oneWayBooking.style.display = "block"
        }else if(event.target.value === "recurring"){
            if(oneWayBooking.style.display = "block"){
                oneWayBooking.style.display ="none";
            }
            recurringBooking.style.display = "block"
        }
    })
})




