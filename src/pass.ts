import { error } from "./error";

//проверка поля с паролем
export const checkPass = (): boolean => {
    const form: HTMLFormElement = document.forms[0];
    const password = form.elements[3] as HTMLInputElement;    
    const passRegexp: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#])[a-zA-Z0-9-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]{8,}$/;
    const passCheckRes: boolean = passRegexp.test(password.value);
    if (!passCheckRes) {
        password.focus();
        error();
        return passCheckRes;
    }
    return passCheckRes;
};