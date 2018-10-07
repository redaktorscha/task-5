import { error } from "./error";

//проверка поля с именем
export const checkName = (): boolean => {
    const form: HTMLFormElement = document.forms[0];
    const firstName = form.elements[0] as HTMLInputElement;   
    const firstNameRegexp: RegExp = /^[^\s]+$/;
    const firstNameCheckRes: boolean = firstNameRegexp.test(firstName.value);
    if (!firstNameCheckRes) {
        firstName.focus();
        error();
        return firstNameCheckRes;
    }
    return firstNameCheckRes;
};