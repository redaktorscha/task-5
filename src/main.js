//подсвечивает неправильно заполненное поле формы, показывает скрытую надпись слева
const error = () => {
    let targetInp = document.activeElement;
    let targetEl = document.activeElement.name;
    let hiddenDiv = document.getElementById(targetEl);
    targetInp.classList.add("error");
    hiddenDiv.style.visibility = "visible";
    targetInp.blur();
};

//при нажатии на клавишу, когда поле формы заполняется, подсветка и надпись пропадают
const refresh = () => {
    let targetInp = document.activeElement;
    let targetEl = document.activeElement.name;
    let hiddenDiv = document.getElementById(targetEl);
    targetInp.classList.remove("error");
    hiddenDiv.style.visibility = "hidden";
  };

//проверка поля с именем
const checkName = () => {
    let form = document.forms.register;
    let firstName = form.elements.firstname;   
    const firstNameRegexp = /^[^\s]+$/;
    let firstNameCheckRes = firstNameRegexp.test(firstName.value);
    if (!firstNameCheckRes) {
        firstName.focus();
        error();
        return firstNameCheckRes;
    }
    return firstNameCheckRes;
};

//проверка поля с фамилией
const checkSurname = () => {
    let form = document.forms.register;
    let surname = form.elements.surname;
    const surnameRegexp = /^[^\s]+$/;
    let surnameCheckRes = surnameRegexp.test(surname.value);
    if (!surnameCheckRes) {
        surname.focus();
        error();
        return surnameCheckRes;
    }
    return surnameCheckRes;
};

//проверка поля с имейлом
const checkMail = () => {
    let form = document.forms.register;
    let email = form.elements.email;
    const emailRegexp = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]{0,63}@(?:[a-zA-Z0-9-]{1,63}\.){1,125}[a-zA-Z]{2,63}$/;
    let mailCheckRes = emailRegexp.test(email.value);
    if (!mailCheckRes) {
        email.focus();
        error();
        return mailCheckRes;
    }
    return mailCheckRes;
};

//проверка поля с паролем
const checkPass = () => {
    let form = document.forms.register;
    let password = form.elements.password;    
    const passRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#])[a-zA-Z0-9-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]{8,}$/;
    let passCheckRes = passRegexp.test(password.value);
    if (!passCheckRes) {
        password.focus();
        error();
        return passCheckRes;
    }
    return passCheckRes;
};

//проверка поля с подтверждением пароля
const validPass = () => {
    let form = document.forms.register;
    let password = form.elements.password;
    let val_pass = form.elements.valpass;
    let val_passCheckRes = (val_pass.value === password.value);
    if (!val_passCheckRes) {
        val_pass.focus();
        error();
        return val_passCheckRes;
    }
    return val_passCheckRes;
};

//открывает и закрывает пароль
const togglePass = () => {
    const form = document.forms.register;
    let password = form.elements.password;
    password.type === "password" ?
        (password.type = "text") :
        (password.type = "password");
};

//открывает и закрывает подтверждение пароля
const toggleValPass = () => {
    const form = document.forms.register;
    let val_pass = form.elements.valpass;
    val_pass.type === "password" ?
        (val_pass.type = "text") :
        (val_pass.type = "password");
};

//удаление формы
const removeForm = () => {
    const wrapper = document.getElementById("wrapper");
    wrapper.remove();
};

//создает приветствие в случае успешной регистрации
const createReg = () => {
    const registered = document.createElement("div");
    let regText = document.createTextNode("Спасибо за регистрацию :-)");
    registered.classList.add("wrapper-reg");
    registered.appendChild(regText);
    document.body.appendChild(registered);
};

//очистка формы
const clearForm = () => {
    let form = document.forms.register;
    let inputs = document.querySelectorAll("input.input, input.error");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
        inputs[i].classList.remove("error");
    }
    let hiddenDivs = document.getElementsByClassName("er_group");
    for (let k = 0; k < hiddenDivs.length; k++) {
        hiddenDivs[k].style.visibility = "hidden";
    }
};

//проверка полей формы
const checkInputs = evt => {
    evt.preventDefault();
    let name = checkName(),
        surname = checkSurname(),
        email = checkMail(),
        pass = checkPass(),
        v_pass = validPass();

    if (name && surname && email && pass && v_pass) {
        removeForm();
        createReg();
    }
};

let submit = document.getElementById("submit");
submit.addEventListener("click", checkInputs);

let reset = document.getElementById("reset");
reset.addEventListener("click", clearForm);

let showPass = document.getElementById("check1");
showPass.addEventListener("click", togglePass);

let showValPass = document.getElementById("check2");
showValPass.addEventListener("click", toggleValPass);

let inputsField = document.getElementById("inputs");
inputsField.addEventListener("keypress", refresh);