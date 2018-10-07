import { error } from "./error";

//проверка поля с паролем
export const checkPass = (regex: RegExp): boolean => {
    const form: HTMLFormElement = document.forms[0];
    const password = form.elements[3] as HTMLInputElement;    
    const passCheckRes: boolean = regex.test(password.value);
    if (!passCheckRes) {
        password.focus();
        error();
        return passCheckRes;
    }
    return passCheckRes;
};