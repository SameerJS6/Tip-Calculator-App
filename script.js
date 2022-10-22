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

// Number of People Input 
People.addEventListener('input', NumberofPeople);

// Reset Button 
ResetBtn.addEventListener('click', Reset);

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

// Function For Tips Button
function NumberofPeople() {
    // Validting the number of people 
    if(ValidateValue(People.value)) {
        console.log("No People Valid");
    } else {
        console.log("No People Invalid");
        People.value = People.value.substring(0,People.value.length-1);
    }
    NumberPeople = parseFloat(People.value);

    if(NumberPeople == 0 || NumberPeople < 1 || NumberPeople == NaN) {
        Errors.style.display = 'block';
        NoPeopleDiv.setAttribute('data-error', 'true');
        setTimeout(() => {
            NoPeopleDiv.setAttribute('data-error', 'false');
            NoPeopleDiv.classList.add('error-bg');
        }, 3000)
    }else {
        Errors.style.display = 'none';
        NoPeopleDiv.classList.remove('error-bg');
    }
    calculateTip();
    // console.log(People.value);
}

// Function For Calculating the tip 
function calculateTip() {
        let TipAmount = billValue * TipValue / NumberPeople;
        let TotalAmount = billValue + (billValue * TipValue);
        TipPerson.innerHTML = '$' + TipAmount.toFixed(2);
        TotalPerson.innerHTML = '$' + TotalAmount.toFixed(2);
}

// Function For Reset INCOMPLETE IT IS.
function Reset() {
    TipsBtn.forEach(btn => {
        btn.classList.remove('btn-active')
    })
    TipPerson.innerHTML = '$0.00';
    TotalPerson.innerHTML = '$0.00';
}

// For Dark Mode Theme Toggler 
let DarkMode = localStorage.getItem('darkMode');
const ThemeBtn = document.querySelector('[data-theme]');

const EnableDarkMode = () => {
    ThemeBtn.innerHTML = 'Dark';
    document.body.classList.add('Darkmode');
    localStorage.setItem('darkMode', 'enabled');
}

const DisableDarkMode = () => {
    ThemeBtn.innerHTML = 'Light';
    document.body.classList.remove('Darkmode');
    localStorage.setItem('darkMode', 'disabled');
}

if(DarkMode == 'enabled') {
    EnableDarkMode();
}

ThemeBtn.addEventListener('click', ()=> {
    DarkMode = localStorage.getItem('darkMode');
    if(DarkMode == 'enabled') {
        DisableDarkMode();
    } else {
        EnableDarkMode();
    }
});

// Button Ripple Effect 
const RippleBtn = document.querySelectorAll(".ripple");

RippleBtn.forEach((ripple) => {
    ripple.addEventListener("click", function(e) {
        console.log("Ripple Effect is here");
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
    
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);
    
        setTimeout(() => {
          ripples.remove()
        }, 10000);
      
    })
});