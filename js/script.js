'use strict'
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
jobRoleSelection.addEventListener('change', (e) => { 
    for(let i = 0; i < jobRoleSelection.length; i++) {
        if(e.target.value == 'other') {
            otherJobOption.classList.remove('is-hidden');
        } else {
            otherJobOption.classList.add('is-hidden');
        }
    }
});




/***********************************
//T-SHIRT INFO
***********************************/

// GLOBAL T-SHIRT VARIABLES
let colorThemeSelection = document.getElementById('color');
let colorOptions = colorThemeSelection.options;
let designSelection = document.getElementById('design');


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
    designSelection.options[0].hidden = true;
    colorOptions[0].hidden = true;
 //if the chosen value is js puns, only show top three indexes
        if(jsPun.selected == true) {
            
            for (let i = 0; i < colorOptions.length; i++) {
                if (i > 0 && i <=3) {
                    colorOptions[i].hidden = '';
                    colorOptions[1].selected = true;
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
                colorOptions[4].selected = true;
            } else {
                colorOptions[i].hidden = true;
                
            }
        }    
    }

});




/***********************************
//REGISTER FOR ACTIVITIES 
***********************************/


//Selects all checkboxes in the activities section
const checkboxes = document.querySelectorAll('.activities input');

let totalCost = 0;
let h3 = document.createElement('h3');
h3.innerHTML = "Total: $" + totalCost;
let activitiesDOM = document.querySelector('.activities');
activitiesDOM.appendChild(h3);

//Event listener for any changes in the activites checkboxes
document.querySelector('.activities').addEventListener('change', (e) => {

    //Variable to hold current selected checkbox
    const selectedCheckbox = e.target;
    //Variable to hold selectedCheckbox Day
    const selectedCheckboxTime = selectedCheckbox.getAttribute('data-day-and-time');
    //Variable to hold selectedCheckbox cost
    const selectedCheckboxCost = selectedCheckbox.getAttribute('data-cost');

    if(selectedCheckbox.checked) {
        totalCost += +parseInt(selectedCheckboxCost);
        h3.innerHTML = "Total: $" + totalCost;
    } else {
        totalCost -= +parseInt(selectedCheckboxCost);
        h3.innerHTML = "Total: $" + totalCost;
    }



    for (let i = 0; i < checkboxes.length; i++) {
        
        const checkboxTime = checkboxes[i].getAttribute('data-day-and-time');
        
        if(selectedCheckboxTime == checkboxTime && selectedCheckbox !== checkboxes[i]) {
           
            if (selectedCheckbox.checked) {
                checkboxes[i].disabled = true;
            } else {
            checkboxes[i].disabled = false;
             }
        }

    }


});




/***********************************
//PAYMENT INFO SECTION
***********************************/
let paymentTypes = document.querySelectorAll('#payment option');
let creditCardDiv = document.querySelector('#credit-card');
let paypalDiv = document.querySelector('#paypal');
let bitcoinDiv = document.querySelector('#bitcoin');
paymentTypes[0].hidden = true;
paymentTypes[1].selected = true;

paypalDiv.hidden = true;
bitcoinDiv.hidden = true;

document.querySelector('#payment').addEventListener('change',(e) => {
    
   if(paymentTypes[1].selected == true) {
       creditCardDiv.hidden = false;
       paypalDiv.hidden = true;
       bitcoinDiv.hidden = true;
   }

   if(paymentTypes[2].selected == true) {
    creditCardDiv.hidden = true;
    paypalDiv.hidden = false;
    bitcoinDiv.hidden = true;
    }

      
   if(paymentTypes[3].selected == true) {
    creditCardDiv.hidden = true;
    paypalDiv.hidden = true;
    bitcoinDiv.hidden = false;
    }


    
   
});





/***********************************
//FORM VALIDATION
***********************************/


const jsForm = document.querySelector('#js-form');
const submitButton = document.getElementById('js-submit-btn');
const userName = document.querySelector('#name');
const userEmail = document.querySelector('#mail');
const userCreditCardNum = document.querySelector('#cc-num');
const userZipCode = document.querySelector('#zip');
const userCVV = document.querySelector('#cvv');

jsForm.addEventListener('submit', (e) => {
    checkValidation();

    if(checkValidation() == true) {
        alert('Form submitted!');
    } else {
        e.preventDefault();
    }

});




function checkValidation() {
    checkName();
    checkEmail();
    checkActivity();
    checkCreditCard();
    checkZipCode();
    checkCVV();

    
    
    if (checkName() == true && checkEmail() == true && checkActivity() == true && paymentTypes[1].selected == false) {

            return true
        }
        
            else if  (checkName() == true && checkEmail() == true && checkActivity() == true && checkCreditCard() == true && checkZipCode() == true && checkCVV() == true ) {
                return true;
            } 
        

     else {
        return false;
    }
    


}


//If the name field is blank, throw an error

function checkName() {
    
    const name = userName.value;
    const regex = /^[A-Za-z]+\s?[A-Za-z]+$/;
    const match = regex.test(name);

    if (match == true) {
        userName.style.border = "2px solid rgb(111, 157, 220)";
        return true;
    } else {
        userName.style.border = "2px solid red";
        return false;
       
    }
    

}

//Email input must have an @ symbol and a ., if not , throw and error

function checkEmail() {
    const email = userEmail.value;
    const regex = /^[^@]+@[^@.]+\.[a-z]+$/;
    const match = regex.test(email);
    
    if (match == true) {
        userEmail.style.border = "2px solid rgb(111, 157, 220)";
        return true;
    } else {
        userEmail.style.border = "2px solid red";
        return false;
    }

}


//User must have at least one activity selected
function checkActivity() {

    if (totalCost > 0 ) {
        activitiesDOM.style.border = "none";
        return true;
    } else {
        activitiesDOM.style.border = "2px solid red";
        return false;
    } 
    
}



//If user is submitting a credit card as payment
//Check that the credit card field has only 13-16 numerical values


function checkCreditCard() {

    const cardNum = userCreditCardNum.value;
    const regex = /^[0-9]{13,16}$/;
    const match = regex.test(cardNum);
    
    if (match == true) {
        userCreditCardNum.style.border = "2px solid rgb(111, 157, 220)";
        return true;
    } else {
        userCreditCardNum.style.border = "2px solid red";
        return false;
    }

}


//Zip code should only have numerical values
function checkZipCode() {

    const zipCode = userZipCode.value;
    const regex = /^[0-9]{5}$/;
    const match = regex.test(zipCode);
    
    if (match == true) {
        userZipCode.style.border = "2px solid rgb(111, 157, 220)";
        return true;
    } else {
        userZipCode.style.border = "2px solid red";
        return false;
    }
    
}

//CVV should only contain 3 number values
function checkCVV() {

    const CVVNum = userCVV.value;
    const regex = /^[0-9]{3}$/;
    const match = regex.test(CVVNum);
    
    if (match == true) {
        userCVV.style.border = "2px solid rgb(111, 157, 220)";
        return true;
    } else {
        userCVV.style.border = "2px solid red";
        return false;
    }
    
}




















hideAltJobInput();