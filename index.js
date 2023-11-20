const form = document.forms.registrationForm;
const name = form.elements.name;
const email = form.elements.email;
const age = form.elements.age;
const gender = form.elements.select;
const profession = form.elements.profession;
const password = form.elements.password;
const password2 = form.elements.password2;

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const inputs = getInputs(form);

    clearErrors();
    if (isFormValid(inputs)) {
        outputData(inputs);
        form.reset();
    }
});

function getInputs(form) {
    const inputs = [];
    inputs.push(...form.querySelectorAll('input'));
    inputs.push(...form.querySelectorAll('select'));
    return inputs;
}

function outputData(inputs) {
    const data = {};
    for (let input of inputs) {
        data[input.name] = input.value;
    }
    console.log(data);
}

function isFormValid(inputs) {
    let isValid = true;

    for (let input of inputs) {
        const errorMsg = input.validationMessage;
        if (errorMsg) {
            isValid = false;

            input.classList.add('error');

            // для radio input должна выводиться только одна ошибка
            const alreadyHasError = input.parentElement.getElementsByClassName('error-message').length > 0;
            if (alreadyHasError) {
                continue;
            }

            const errorMsgElement = document.createElement('span');
            errorMsgElement.innerText = errorMsg;
            errorMsgElement.classList.add('error-message');
            input.parentElement.insertAdjacentElement('beforeend', errorMsgElement);
        }
    }
    return isValid;
}

function clearErrors() {
    const errors = document.getElementsByClassName('error-message');
    for (var i = errors.length - 1; i >= 0; i--) {
        errors[i].remove();
    }
}
