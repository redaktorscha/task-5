
//подсвечивает неправильно заполненное поле формы, показывает скрытую надпись слева
const error = (): void => {
    let targetInp = document.activeElement as HTMLInputElement;
    let targetEl: string = document.activeElement[name];
    let hiddenDiv = document.getElementById(targetEl) as HTMLDivElement;
    targetInp.classList.add("error");
    hiddenDiv.style.visibility = "visible";
    targetInp.blur();
};

//при нажатии на клавишу, когда поле формы заполняется, подсветка и надпись пропадают
const refresh = (): void => {
    let targetInp = document.activeElement;
    let targetEl: string = document.activeElement[name];
    let hiddenDiv = document.getElementById(targetEl) as HTMLDivElement;
    targetInp.classList.remove("error");
    hiddenDiv.style.visibility = "hidden";
  };

//проверка поля с именем
const checkName = (): boolean => {
    const form: HTMLFormElement = document.forms[0];
    let firstName = form.elements[0] as HTMLInputElement;   
    const firstNameRegexp: RegExp = /^[^\s]+$/;
    let firstNameCheckRes: boolean = firstNameRegexp.test(firstName.value);
    if (!firstNameCheckRes) {
        firstName.focus();
        error();
        return firstNameCheckRes;
    }
    return firstNameCheckRes;
};

//проверка поля с фамилией
const checkSurname = (): boolean => {
    const form: HTMLFormElement = document.forms[0];
    let surname = form.elements[1] as HTMLInputElement;
    const surnameRegexp: RegExp = /^[^\s]+$/;
    let surnameCheckRes: boolean = surnameRegexp.test(surname.value);
    if (!surnameCheckRes) {
        surname.focus();
        error();
        return surnameCheckRes;
    }
    return surnameCheckRes;
};

//проверка поля с имейлом
const checkMail = (): boolean => {
    const form: HTMLFormElement = document.forms[0];
    let email = form.elements[2] as HTMLInputElement;
    const emailRegexp: RegExp = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]{0,63}@(?:[a-zA-Z0-9-]{1,63}\.){1,125}[a-zA-Z]{2,63}$/;
    let mailCheckRes: boolean = emailRegexp.test(email.value);
    if (!mailCheckRes) {
        email.focus();
        error();
        return mailCheckRes;
    }
    return mailCheckRes;
};

//проверка поля с паролем
const checkPass = (): boolean => {
    const form: HTMLFormElement = document.forms[0];
    let password = form.elements[3] as HTMLInputElement;    
    const passRegexp: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#])[a-zA-Z0-9-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]{8,}$/;
    let passCheckRes: boolean = passRegexp.test(password.value);
    if (!passCheckRes) {
        password.focus();
        error();
        return passCheckRes;
    }
    return passCheckRes;
};

//проверка поля с подтверждением пароля
const validPass = (): boolean => {
    const form: HTMLFormElement = document.forms[0];
    let password = form.elements[3] as HTMLInputElement;
    let val_pass = form.elements[5] as HTMLInputElement;
    let val_passCheckRes: boolean = (val_pass.value === password.value);
    if (!val_passCheckRes) {
        val_pass.focus();
        error();
        return val_passCheckRes;
    }
    return val_passCheckRes;
};

//открывает и закрывает пароль
const togglePass = (): void => {
    const form = document.forms[0];
    let password = form.elements[3] as HTMLInputElement;
    password.type === "password" ?
        (password.type = "text") :
        (password.type = "password");
};

//открывает и закрывает подтверждение пароля
const toggleValPass = (): void => {
    const form = document.forms[0];
    let val_pass = form.elements[5] as HTMLInputElement;
    val_pass.type === "password" ?
        (val_pass.type = "text") :
        (val_pass.type = "password");
};

//удаление формы
const removeForm = (): void => {
    const wrapper = document.getElementById("wrapper") as HTMLDivElement;
    wrapper.remove();
};

//создает приветствие в случае успешной регистрации
const createReg = (): void => {
    const registered: HTMLDivElement = document.createElement("div");
    let regText: Text = document.createTextNode("Спасибо за регистрацию :-)");
    registered.classList.add("wrapper-reg");
    registered.appendChild(regText);
    document.body.appendChild(registered);
};

//очистка формы
const clearForm = (): void => {
    const form: HTMLFormElement = document.forms[0];
    let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input.input, input.error");
    for (let i: number = 0; i < inputs.length; i++) {
        inputs[i].value = "";
        inputs[i].classList.remove("error");
    }
    let hiddenDivs = document.getElementsByClassName("er_group") as HTMLCollectionOf<HTMLDivElement>;
    for (let k: number = 0; k < hiddenDivs.length; k++) {
        hiddenDivs[k].style.visibility = "hidden";
    }
};

//проверка полей формы
const checkInputs = (evt: Event): void => {
    evt.preventDefault();
    let name: boolean = checkName(),
        surname: boolean = checkSurname(),
        email: boolean = checkMail(),
        pass: boolean = checkPass(),
        v_pass: boolean = validPass();

    if (name && surname && email && pass && v_pass) {
        removeForm();
        createReg();
    }
};

let submit = document.getElementById("submit") as HTMLDivElement;
submit.addEventListener("click", checkInputs);

let reset = document.getElementById("reset") as HTMLDivElement;
reset.addEventListener("click", clearForm);

let showPass = document.getElementById("check1") as HTMLInputElement;
showPass.addEventListener("click", togglePass);

let showValPass = document.getElementById("check2") as HTMLInputElement;
showValPass.addEventListener("click", toggleValPass);

const form: HTMLFormElement = document.forms[0];
form.addEventListener("keypress", refresh);