const AmountInput = document.querySelector('[data-user-input');
const Tips = document.querySelectorAll('[data-tip]');
const CustomTip = document.querySelector('[data-custom-tip]');
const NoPeople = document.querySelector('[data-no-of-person]');
const TipPerson = document.querySelector('[data-tip-per-person]');
const TotalPerson = document.querySelector('[data-total-per-person]');
const ResetBtn = document.querySelector('[data-reset]');
const Errors = document.querySelector('[data-error-message]')
const NoPeopleDiv = document.querySelector('.people-inputs')


// For Dark Theme Toggle 
let darkMode = localStorage.getItem('darkMode');
const themeBtn = document.querySelector("[data-theme]");

const EnableDarkMode = () => {
    themeBtn.innerHTML = "Dark"
    localStorage.setItem('darkMode', 'enabled');
    document.body.classList.add('Darkmode');
}

const DisableDarkMode = () => {
    themeBtn.innerHTML = "Light"
    localStorage.setItem("darkMode", 'disabled');
    document.body.classList.remove("Darkmode");
}   

if (darkMode == 'enabled') {
    EnableDarkMode();
}

themeBtn.addEventListener('click', ()=> {
    darkMode = localStorage.getItem('darkMode')
    if(darkMode == "enabled") {
        DisableDarkMode();
        console.log(darkMode)
    } else {
        EnableDarkMode();
    }
});

// For Button Ripple Effect 

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
})