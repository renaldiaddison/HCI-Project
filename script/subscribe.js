const form = document.getElementById('form')
const full_name = document.getElementById('name')
const email = document.getElementById('email')
const country = document.getElementById('country')
const phone_number = document.getElementById('phone-number')
const agree = document.getElementById('check-box');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameVal = full_name.value;
    const emailVal = email.value;
    const countryVal = country.value;
    const phoneVal = phone_number.value;
    const agreeVal = agree.checked;

    console.log(agreeVal)
})