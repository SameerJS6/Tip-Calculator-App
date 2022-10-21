const Reset = () => {
    AmountInput.value = '';
    CustomTip.value = '';
    NoPeople.value = '';
    TipPerson.innerHTML = '$0.00';
    TotalPerson.innerHTML = '$0.00';
}


const AmountInput = document.querySelector('[data-user-input');
const Tips = document.querySelectorAll('[data-tip]');
const CustomTip = document.querySelector('[data-custom-tip]');
const NoPeople = document.querySelector('[data-no-of-person]');
const TipPerson = document.querySelector('[data-tip-per-person]');
const TotalPerson = document.querySelector('[data-total-per-person]');
const ResetBtn = document.querySelector('[data-reset]');


Tips.forEach((tip) => {
    tip.addEventListener('click', ()=> {{
        const Inttip = tip.value;
        const UserInput = AmountInput.value;
        console.log(parseInt(Inttip)+parseInt(UserInput));
        // console.log(ParseInt(AmountInput) + ParseInt(tip.value))
    }})
});

ResetBtn.addEventListener('click', ()=> {
    Reset();
})

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
})