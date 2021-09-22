// Pulling in form.

const form = document.getElementById('form');

// Pulling in inputs.

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// ----------------------------- DEFINING FUNCTIONS ------------------------ //

// Changing class to reflect an error and adding small text accordingly.

function error(field, smallText) {
    const fieldContainer = field.parentElement;
    fieldContainer.className = 'field-container error';

    const small = fieldContainer.querySelector('small');
    small.innerText = smallText;
}

// Changing class to reflect success upon successful user input.

function success(field) {
    const fieldContainer = field.parentElement;
    fieldContainer.className = 'field-container success';
}

// Email validation with using regular expressions.

function emailValidation(field) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(field.value)) {
        success(field);
    } else {
        error(field, 'Email must be valid');
    }
}

// Checking if fields are empty and capitalising first letter as well as displaying error message.

function checkIfEmpty(fieldArr) {
    fieldArr.forEach(field => {
        if (field.value === '') {
            error(field, `${capitalised(field)} is required`);
        } else {
            success(field);
        }
    });
}

function capitalised(field) {
    return field.id.charAt(0).toUpperCase() + field.id.slice(1);
}

// Checking whether password values match.

function checkPasswordsMatch(field1, field2) {
    if (field1.value !== field2.value) {
        error(field2, 'Passwords do not match');
    }
}

// Checking whether character length matches predefined function lengths.

function checkCharLength(field, min, max) {
    if (field.value.length < min) {
        error(field, `${capitalised(field)} must be at least ${min} characters long`);
    } else if (field.value.length > max) {
        error(field, `${capitalised(field)} must be less than ${max} characters long`);
    } else{
        success(field)
    }
}

// ----------------------------- EVENT LISTENER --------------------------- //

form.addEventListener('submit', e => {
    e.preventDefault();

    checkIfEmpty([username, email, password, password2]);

    checkCharLength(username, 5, 15);
    checkCharLength(password, 8, 15);

    emailValidation(email);

    checkPasswordsMatch(password, password2);
});