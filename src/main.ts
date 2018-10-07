import { error } from "./error";
import { refresh } from './refresh';
import { checkName } from './name';
import { checkSurname } from './surname';
import { checkMail } from './mail';
import { checkPass } from './pass';
import { validPass } from './v_pass';
import { togglePass } from './toggle_pass';
import { toggleValPass } from './toggle_v_pass';
import { removeForm } from './remove';
import { createReg} from './create';
import { clearForm } from './clear';
import {nameRegexp} from './regexps';
import {emailRegexp} from './regexps';
import {passRegexp} from './regexps';


//проверка полей формы
const checkInputs = (evt: Event): void => {
    evt.preventDefault();
    const name: boolean = checkName(nameRegexp),
        surname: boolean = checkSurname(nameRegexp),
        email: boolean = checkMail(emailRegexp),
        pass: boolean = checkPass(passRegexp),
        v_pass: boolean = validPass();

    if (name && surname && email && pass && v_pass) {
        removeForm();
        createReg();
    }
};

const submit = document.getElementById("submit") as HTMLDivElement;
submit.addEventListener("click", checkInputs);

const reset = document.getElementById("reset") as HTMLDivElement;
reset.addEventListener("click", clearForm);

const showPass = document.getElementById("check1") as HTMLInputElement;
showPass.addEventListener("click", togglePass);

const showValPass = document.getElementById("check2") as HTMLInputElement;
showValPass.addEventListener("click", toggleValPass);

const form: HTMLFormElement = document.forms[0];
form.addEventListener("keypress", refresh);