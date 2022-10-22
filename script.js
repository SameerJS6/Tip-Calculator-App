const AmountInput = document.querySelector('[data-user-input');
const TipsBtn = document.querySelectorAll('[data-tip]');
const CustomTips = document.querySelector('[data-custom-tip]');
const People = document.querySelector('[data-no-of-person]');
const Errors = document.querySelector('[data-error-message]')
const NoPeopleDiv = document.querySelector('.people-inputs')
const TipPerson = document.querySelector('[data-tip-per-person]');
const TotalPerson = document.querySelector('[data-total-per-person]');
const ResetBtn = document.querySelector('[data-reset]');


let billValue = '';
let TipValue = '';
let NumberPeople = '';

// User Amount Input 
AmountInput.addEventListener('input', Billvalue);


// Below Function is used to validate the User AmountInput.
function ValidateAmount(p) {
    var regExp = /^[0-9]*\.?[0-9]*$/;  //A Global Search for numbers that are not from 0 to 9;
    return p.match(regExp)
}



// Function For AmountInput 
function Billvalue() {
    // Replaces the user entered ',' into '.' 
    if(AmountInput.value.includes(',')) {
        AmountInput.value = AmountInput.value.replace(',', '.');
    }
    // Prevents user to enter character in AmountInput 
    if(ValidateAmount(AmountInput.value)) {
        console.log("valid");
    }else {
        console.log("Invalid");
        AmountInput.value = AmountInput.value.substring(0, AmountInput.value.length-1);  //Basically extracting all the strings or character entered by user in AmountInput.
    }
    billValue = parseFloat(AmountInput.value);
    calculateTip();
    // console.log(billValue);
}

