import { error } from "./error";

//проверка поля с фамилией
export const checkSurname = (): boolean => {
    const form: HTMLFormElement = document.forms[0];
    const surname = form.elements[1] as HTMLInputElement;
    const surnameRegexp: RegExp = /^[^\s]+$/;
    const surnameCheckRes: boolean = surnameRegexp.test(surname.value);
    if (!surnameCheckRes) {
        surname.focus();
        error();
        return surnameCheckRes;
    }
    return surnameCheckRes;
};
