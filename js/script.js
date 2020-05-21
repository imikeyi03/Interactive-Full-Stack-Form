'use strict'

// GLOBAL VARIABLES
let jobRoleSelection = document.getElementById('title'); 
let otherJobOption = document.getElementById('other-title');
let colorThemeSelection = document.getElementById('color');
let colorOptions = colorThemeSelection.options;

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




// T-Shirt Info section



// Until a theme is selected from the “Design” menu, no color options appear in the “Color” drop down and the “Color” field
// reads “Please select a T-shirt theme”.
let optionNode = document.createElement('option');
let defaultColor = document.createTextNode('Please select a T-shirt theme');
optionNode.appendChild(defaultColor);
document.getElementById('color').prepend(optionNode)


for(let i = 0; i < colorOptions.length; i++ ) {
    
    if(colorOptions[i].value === "Please select a T-shirt theme" ) {
        colorOptions[i].hidden = false;
    } else {
        colorOptions[i].hidden = true;
    }
}
 



// For the T-Shirt "Color" menu, after a user selects a theme, only display the color options that match the design
// selected in the "Design" menu.



// If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue,"
// "Dark Slate Grey," and"Gold."



// If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato,"
// "Steel Blue," and "Dim Grey."



// When a new theme is selected from the "Design" menu, both the "Color" field and drop down menu is updated.
















hideAltJobInput();