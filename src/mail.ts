import { error } from "./error";

//проверка поля с имейлом
export const checkMail = (): boolean => {
    const form: HTMLFormElement = document.forms[0];
    const email = form.elements[2] as HTMLInputElement;
    const emailRegexp: RegExp = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]{0,63}@(?:[a-zA-Z0-9-]{1,63}\.){1,125}[a-zA-Z]{2,63}$/;
    const mailCheckRes: boolean = emailRegexp.test(email.value);
    if (!mailCheckRes) {
        email.focus();
        error();
        return mailCheckRes;
    }
    return mailCheckRes;
};