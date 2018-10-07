import { error } from "./error";

//проверка поля с именем
export const checkName = (regex: RegExp): boolean => {
    const form: HTMLFormElement = document.forms[0];
    const firstName = form.elements[0] as HTMLInputElement;   
    const firstNameCheckRes: boolean = regex.test(firstName.value);
    if (!firstNameCheckRes) {
        firstName.focus();
        error();
        return firstNameCheckRes;
    }
    return firstNameCheckRes;
};