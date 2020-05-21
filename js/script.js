'use strict'

// GLOBAL VARIABLES
let jobRoleSelection = document.getElementById('title'); 
let otherJobOption = document.getElementById('other-title');
let colorThemeSelection = document.getElementById('color');
let colorOptions = colorThemeSelection.options;
let designSelection = document.getElementById('design');

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
jobRoleSelection.addEventListener('change', (e) => { 
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
const optionNode = document.createElement('option');
const defaultColorMessage = document.createTextNode('Please select a T-shirt theme');
optionNode.appendChild(defaultColorMessage);
document.getElementById('color').prepend(optionNode);

for(let i = 0; i < colorOptions.length; i++ ) {
    if(colorOptions[i].value === "Please select a T-shirt theme" ) {
        colorOptions[i].selected = true;
        colorOptions[i].hidden = false;
    } else {
        colorOptions[i].hidden = true;
    }
}
 
// For the T-Shirt "Color" menu, after a user selects a theme, only display the color options that match the design
// selected in the "Design" menu.

const jsPun = designSelection.options[1]; 
const heartJS = designSelection.options[2]; 

designSelection.options[0].selected = true;

designSelection.addEventListener('change', (event) => {
    
    //hide default params
    colorOptions[0].hidden = true;
    designSelection.options[0].hidden = true;

 //if the chosen value is js puns, only show top three indexes
        if(jsPun.selected == true) {
            
            for (let i = 0; i < colorOptions.length; i++) {
                if (i > 0 && i <=3) {
                    colorOptions[i].hidden = '';
                } else {
                    colorOptions[i].hidden = true;
                }
            }
        }

    //if the chosen value is I <3 JS, only show bottom three indexes
    if(heartJS.selected == true) {
            
        for (let i = 0; i < colorOptions.length; i++) {
            if (i > 3 && i <=6) {
                colorOptions[i].hidden = '';
            } else {
                colorOptions[i].hidden = true;
            }
        }    
    }
});
















hideAltJobInput();