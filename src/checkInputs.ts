import { highlightError } from './highlightError';

//проверка инпутов (имя, фамилия, пароль)
export const checkInputs = (inputToCheck: HTMLInputElement, regex: RegExp): boolean => {
    const checkRes = regex.test(inputToCheck.value.trim());

    if (!checkRes) {
        inputToCheck.focus();
        highlightError(document.getElementById((document.activeElement as HTMLFormElement).name) as HTMLDivElement, document.activeElement as HTMLInputElement);
        return checkRes;
    }
    return checkRes;
};