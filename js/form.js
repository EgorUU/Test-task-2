const telephoneButton = document.querySelector('.form__data-telephone');
const emailButton = document.querySelector('.form__data-email');
const form = document.querySelector('.form__telephone-authorization')
const eye = document.querySelector('.eye')
const password = document.querySelector('#password')
let eyeActive = false

eye.addEventListener('click', () => {
    eyeActive = !eyeActive;
    if (eyeActive) {
        password.type = 'text'
    }
    else {
        password.type = 'password'
    }
})

telephoneButton.addEventListener('click', () => {
    telephoneButton.classList.add('active');
    emailButton.classList.remove('active')
    form.innerHTML = `
    <div class="form__telephone-authorization--header">
        <h1>Telefon</h1>
    </div>
    <div class="form__telephone-authorization--input">
        <div class="form__telephone-authorization--input-country">
            <img src="./images/country.png" alt="">
            <img src="./images/Frame.png" id="arrows" alt="">
        </div>
        <input type="tel" name="" class="input-tel">
    </div>
    `
})
emailButton.addEventListener('click', () => {
    emailButton.classList.add('active');
    telephoneButton.classList.remove('active')
    form.innerHTML = `
    <div class="form__input">
        <div class="form__input-header">
            <h1>Elektron pochta</h1>
        </div>
        <input type="email">
    </div>
    `
})