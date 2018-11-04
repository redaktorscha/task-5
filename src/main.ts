import { checkInputs } from './checkInputs';
import { removeHighlightedError } from './removeHighlightedError';
import { validPass } from './validPass';
import { togglePass } from './togglePass';
import { removeForm } from './removeForm';
import { createReg} from './createReg';
import { clearForm } from './clearForm';
import { nameRegexp} from './regexps';
import { emailRegexp } from './regexps';
import { passRegexp } from './regexps';


//валидация формы
const validateForm = (evt: Event): void => {
    evt.preventDefault();
    const fName = checkInputs(document.getElementById('f_name') as HTMLInputElement, nameRegexp),
        sName = checkInputs(document.getElementById('s_name') as HTMLInputElement, nameRegexp),
        mail = checkInputs(document.getElementById('mail') as HTMLInputElement, emailRegexp),
        pass = checkInputs(document.getElementById('psw') as HTMLInputElement, passRegexp),
        v_pass = validPass(document.getElementById('psw') as HTMLInputElement, document.getElementById('valpsw') as HTMLInputElement);

    if (fName && sName && mail && pass && v_pass) {
        removeForm();
        createReg();
    }
};

const submitForm = document.getElementById('sbm') as HTMLDivElement;
submitForm.addEventListener('click', validateForm);

const resetForm = document.getElementById('rst') as HTMLDivElement;
resetForm.addEventListener('click', () => clearForm(document.querySelectorAll("input.input, input.error"), document.getElementsByClassName("er_group") as HTMLCollectionOf<HTMLDivElement>));

const showPass = document.getElementById('check1') as HTMLInputElement;
showPass.addEventListener('click', () => togglePass(document.getElementById('psw') as HTMLInputElement));

const showValPass = document.getElementById('check2') as HTMLInputElement;
showValPass.addEventListener('click', () => togglePass(document.getElementById('valpsw') as HTMLInputElement));

const form: HTMLFormElement = document.getElementById('register') as HTMLFormElement;
form.addEventListener('keypress', () => removeHighlightedError(document.getElementById((document.activeElement as HTMLFormElement).name) as HTMLDivElement, document.activeElement as HTMLInputElement));