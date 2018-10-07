import { error } from "./error";

//проверка поля с фамилией
export const checkSurname = (regex: RegExp): boolean => {
    const form: HTMLFormElement = document.forms[0];
    const surname = form.elements[1] as HTMLInputElement;
    const surnameCheckRes: boolean = regex.test(surname.value);
    if (!surnameCheckRes) {
        surname.focus();
        error();
        return surnameCheckRes;
    }
    return surnameCheckRes;
};
