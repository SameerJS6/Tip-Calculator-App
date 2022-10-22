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

// Tips Button 
TipsBtn.forEach(btn => {
    btn.addEventListener('click', Handle);
});

// Custom User Tip 
CustomTips.addEventListener('input', CustomTipValue);

// Below Function is used to validate the User AmountInput.
function ValidateAmount(p) {
    var regExp = /^[0-9]*\.?[0-9]*$/;  //A Global Search for numbers that are not from 0 to 9;
    return p.match(regExp)
}

function ValidateValue(x) {
    var RegExp = /^[0-9]/;  //A Global Search for numbers that are not from 0 to 9; means no character.
    return x.match(RegExp)
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

// Function For Tips Button
function Handle(event) {
    TipsBtn.forEach(btn => {
        // Removing the Active class from button 
        btn.classList.remove('btn-active');

        // Setting the active class in Button 
        if(event.target.value == btn.value) {
            btn.classList.add('btn-active')
            // console.log(event.target.value);
            // console.log(btn.value);
            TipValue = parseFloat(btn.value)
        }
        CustomTips.value = '';
        calculateTip();
    })
}

// Function For Tips Button
function CustomTipValue() {
    if(ValidateValue(CustomTips.value)) {
        console.log("Tip Valid");
    } else {
        console.log("Tip Invalid");
        CustomTips.value = CustomTips.value.substring(0, CustomTips.value.length-1);
    }
    // Removing the Active class from tips Button 
    TipsBtn.forEach(btn => {
        btn.classList.remove('btn-active')
    });

    TipValue = parseFloat(CustomTips.value/100);
    calculateTip();
    // console.log(TipValue);
}