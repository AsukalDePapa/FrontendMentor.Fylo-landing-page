const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();

    emailValidation();
});

const setError = (element, message) => {
    const inputParent = element.parentElement;
    const errorDisplay = inputParent.querySelector('.error');

    errorDisplay.innerText = message;
    inputParent.classList.add('error');
}

const isValidEmail = email => {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailPattern.test(String(email).toLowerCase());
}

const setSuccess = element => {
    const inputParent = element.parentElement;
    const errorDisplay = inputParent.querySelector('.error');

    errorDisplay.innerText = '';
    inputParent.classList.remove('error');
}

const emailValidation = () => {
    const emailValue = email.value.trim();

    if(emailValue === '') {
        setError(email, 'Email required');
        email.classList.add('email-error');
    }else if(!isValidEmail(emailValue)) {
        setError(email, 'Please check your email');
        email.classList.add('email-error');
    }else {
        setSuccess(email);
        email.classList.remove('email-error');
    }
}

const form2 = document.getElementById('form2')
const email2 = document.getElementById('email2')

form2.addEventListener('submit', e => {
    e.preventDefault();

    emailValidation2();
});

const emailValidation2 = () => {
    const email2Value = email2.value.trim();

    if(email2Value === '') {
        setError(email2, 'Email required');
        email2.classList.add('email-error');
    }else if(!isValidEmail(email2Value)) {
        setError(email2, 'Please check your email');
        email2.classList.add('email-error');
    }else {
        setSuccess(email2);
        email2.classList.remove('email-error');
    }
}

