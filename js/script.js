'use strict'

// GLOBAL VARIABLES
let jobRoleSelection = document.getElementById('title'); 
let otherJobOption = document.getElementById('other-title');




//Function to focus on the first text field on page load

//wait until page load event has fired
window.onload = function initalFocus() {

    //focus on username text input
    document.getElementById('name').focus();
     
};



//Function to hide alternative form input field if JS is disabled
function hideAltJobInput() {
    otherJobOption.classList.add('is-hidden');
};





// Reveal other textbox if other job role is selected


jobRoleSelection.addEventListener("change", (e) => { 
    for(let i = 0; i < jobRoleSelection.length; i++) {
        if(e.target.value == 'other') {
            otherJobOption.classList.remove('is-hidden');
        } else {
            otherJobOption.classList.add('is-hidden');
        }
    }
});

















hideAltJobInput();