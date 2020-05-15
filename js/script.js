//Function to focus on the first text field on page load

//wait until page load event has fired
window.onload = function initalFocus() {

    //focus on username text input
    document.getElementById('name').focus();
     
};



//Function to hide alternative form input field if JS is disabled

function altJobInput() {
    let altInput = document.getElementById('other-title');
    altInput.classList.add('is-hidden');
};























altJobInput();