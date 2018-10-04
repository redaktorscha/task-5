//подсвечивает неправильно заполненное поле формы, показывает скрытую надпись слева
var error = function () {
    var targetInp = document.activeElement;
    var targetEl = document.activeElement.name;
    var hiddenDiv = document.getElementById(targetEl);
    targetInp.classList.add("error");
    hiddenDiv.style.visibility = "visible";
    targetInp.blur();
};
//при нажатии на клавишу, когда поле формы заполняется, подсветка и надпись пропадают
var refresh = function () {
    var targetInp = document.activeElement;
    var targetEl = document.activeElement.name;
    var hiddenDiv = document.getElementById(targetEl);
    targetInp.classList.remove("error");
    hiddenDiv.style.visibility = "hidden";
};
//проверка поля с именем
var checkName = function () {
    var form = document.forms[0];
    var firstName = form.elements[0];
    var firstNameRegexp = /^[^\s]+$/;
    var firstNameCheckRes = firstNameRegexp.test(firstName.value);
    if (!firstNameCheckRes) {
        firstName.focus();
        error();
        return firstNameCheckRes;
    }
    return firstNameCheckRes;
};
//проверка поля с фамилией
var checkSurname = function () {
    var form = document.forms[0];
    var surname = form.elements[1];
    var surnameRegexp = /^[^\s]+$/;
    var surnameCheckRes = surnameRegexp.test(surname.value);
    if (!surnameCheckRes) {
        surname.focus();
        error();
        return surnameCheckRes;
    }
    return surnameCheckRes;
};
//проверка поля с имейлом
var checkMail = function () {
    var form = document.forms[0];
    var email = form.elements[2];
    var emailRegexp = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]{0,63}@(?:[a-zA-Z0-9-]{1,63}\.){1,125}[a-zA-Z]{2,63}$/;
    var mailCheckRes = emailRegexp.test(email.value);
    if (!mailCheckRes) {
        email.focus();
        error();
        return mailCheckRes;
    }
    return mailCheckRes;
};
//проверка поля с паролем
var checkPass = function () {
    var form = document.forms[0];
    var password = form.elements[3];
    var passRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#])[a-zA-Z0-9-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]{8,}$/;
    var passCheckRes = passRegexp.test(password.value);
    if (!passCheckRes) {
        password.focus();
        error();
        return passCheckRes;
    }
    return passCheckRes;
};
//проверка поля с подтверждением пароля
var validPass = function () {
    var form = document.forms[0];
    var password = form.elements[3];
    var val_pass = form.elements[5];
    var val_passCheckRes = (val_pass.value === password.value);
    if (!val_passCheckRes) {
        val_pass.focus();
        error();
        return val_passCheckRes;
    }
    return val_passCheckRes;
};
//открывает и закрывает пароль
var togglePass = function () {
    var form = document.forms[0];
    var password = form.elements[3];
    password.type === "password" ?
        (password.type = "text") :
        (password.type = "password");
};
//открывает и закрывает подтверждение пароля
var toggleValPass = function () {
    var form = document.forms[0];
    var val_pass = form.elements[5];
    val_pass.type === "password" ?
        (val_pass.type = "text") :
        (val_pass.type = "password");
};
//удаление формы
var removeForm = function () {
    var wrapper = document.getElementById("wrapper");
    wrapper.remove();
};
//создает приветствие в случае успешной регистрации
var createReg = function () {
    var registered = document.createElement("div");
    var regText = document.createTextNode("Спасибо за регистрацию :-)");
    registered.classList.add("wrapper-reg");
    registered.appendChild(regText);
    document.body.appendChild(registered);
};
//очистка формы
var clearForm = function () {
    var form = document.forms[0];
    var inputs = document.querySelectorAll("input.input, input.error");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
        inputs[i].classList.remove("error");
    }
    var hiddenDivs = document.getElementsByClassName("er_group");
    for (var k = 0; k < hiddenDivs.length; k++) {
        hiddenDivs[k].style.visibility = "hidden";
    }
};
//проверка полей формы
var checkInputs = function (evt) {
    evt.preventDefault();
    var name = checkName(), surname = checkSurname(), email = checkMail(), pass = checkPass(), v_pass = validPass();
    if (name && surname && email && pass && v_pass) {
        removeForm();
        createReg();
    }
};
var submit = document.getElementById("submit");
submit.addEventListener("click", checkInputs);
var reset = document.getElementById("reset");
reset.addEventListener("click", clearForm);
var showPass = document.getElementById("check1");
showPass.addEventListener("click", togglePass);
var showValPass = document.getElementById("check2");
showValPass.addEventListener("click", toggleValPass);
var form = document.forms[0];
form.addEventListener("keypress", refresh);
