import { error } from "./error";

//проверка поля с имейлом
export const checkMail = (regex: RegExp): boolean => {
    const form: HTMLFormElement = document.forms[0];
    const email = form.elements[2] as HTMLInputElement;
    const mailCheckRes: boolean = regex.test(email.value);
    if (!mailCheckRes) {
        email.focus();
        error();
        return mailCheckRes;
    }
    return mailCheckRes;
};