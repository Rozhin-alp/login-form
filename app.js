const form = document.getElementById('login-form');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const userData = {
    email: 'rojinn324@gmail.com',
    password: 'rozhin-alp'
};

form.addEventListener('submit', e => {
    // to avoid page refresh on form submit
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;
    let isValid = true;

    if (email !== userData.email) {
        isValid = false;
        emailInput.classList.add('is-invalid')
    }

    if (password !== userData.password) {
        passwordInput.classList.add('is-invalid')
        isValid = false;
    }

    if (!isValid) return;
    emailInput.classList.remove('is-invalid')
    passwordInput.classList.remove('is-invalid')


    console.log('Form was submitted successfully !!!');
    console.log('email:', email);
    console.log('password:', password);
    window.location.href = 'https://www.google.com/';
});