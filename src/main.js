const error = () => {
    let targetInp = document.activeElement;
    let targetEl = document.activeElement.name;
    let hiddenInp = document.getElementById(targetEl);
    targetInp.classList.add('error');
    hiddenInp.style.visibility = 'visible';
}

const checkName = () => {
    let form = document.forms.register;
    let firstName = form.elements.firstname;
    const firstNameRegexp = /^[^\s]+$/;
    let firstNameCheckRes = firstNameRegexp.test(firstName.value);
    if (!firstNameCheckRes) {
        firstName.focus();
        error();
    }
    return firstNameCheckRes;
}

const checkSurname = () => {
    let form = document.forms.register;
    let surname = form.elements.surname;
    const surnameRegexp = /^[^\s]+$/;
    let surnameCheckRes = surnameRegexp.test(surname.value);
    if (!surnameCheckRes) {
        surname.focus();
        error();
    }
    return surnameCheckRes;
}

const checkMail = () => {
    let form = document.forms.register;
    let email = form.elements.email;
    const emailRegexp = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]{0,63}@(?:[a-zA-Z0-9-]{1,63}\.){1,125}[a-zA-Z]{2,63}$/;
    let mailCheckRes = emailRegexp.test(email.value);
    if (!mailCheckRes) {
        email.focus();
        error();
    }
    return mailCheckRes;
};


const checkPass = () => {
    let form = document.forms.register;
    let password = form.elements.password;
    const passRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]{8,}$/;
    let passCheckRes = passRegexp.test(password.value);
    if (!passCheckRes) {
        password.focus();
        error();
    }
    return passCheckRes;
};

const validPass = () => {
    let form = document.forms.register;
    let password = form.elements.password;
    let val_pass = form.elements.valpass;
    if (val_pass.value !== password.value) {
        val_pass.focus();
        error();
        return false;
    }
    return true; //проверить
};

const togglePass = () => {
    const form = document.forms.register;
    let password = form.elements.password;
    password.type === 'password' ? password.type = 'text' : password.type = 'password';
}

const toggleValPass = () => {
    const form = document.forms.register;
    let val_pass = form.elements.valpass;
    val_pass.type === 'password' ? val_pass.type = 'text' : val_pass.type = 'password';
}


const removeForm = () => {
    const wrapper = document.getElementById('wrapper');
    wrapper.remove();
}

const createReg = () => {
    const registered = document.createElement('div');
    let regText = document.createTextNode('Спасибо за регистрацию :-)');
    registered.classList.add('wrapper-reg');
    registered.appendChild(regText);
    document.body.appendChild(registered);
}

const clearForm = () => {
    let form = document.forms.register;
    let inputs = document.querySelectorAll('input.input, input.error');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}


const thanksRegister = () => {
    removeForm();
    createReg();
}

const checkInputs = (evt) => {
    evt.preventDefault();
    let name = checkName(),
        surname = checkSurname(),
        email = checkMail(),
        pass = checkPass(),
        v_pass = validPass();
    if (name && surname && email && pass && v_pass) {
        thanksRegister();
    }
}



let submit = document.getElementById('submit');
submit.addEventListener('click', checkInputs);

let reset = document.getElementById("reset");
reset.addEventListener("click", clearForm);

let showPass = document.getElementById('check1');
showPass.addEventListener("click", togglePass);

let showValPass = document.getElementById('check2');
showValPass.addEventListener("click", toggleValPass);