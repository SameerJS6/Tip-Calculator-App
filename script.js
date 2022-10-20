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

// Temp 

// const themeToggler = document.querySelector('[data-theme]');

// themeToggler.addEventListener('click', ()=> {
//     if(window.matchMedia('prefers-color-scheme: dark').matches) {
//         document.body.classList.add('DarkMode');
//     } else {
//         document.body.classList.remove('DarkMode');
//     }
//     console.log("dark")
// })