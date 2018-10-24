import { highlightError } from './highlightError';

//проверка инпутов (имя, фамилия, пароль)
export const checkInputs = (inputToCheck: HTMLInputElement, regex: RegExp): boolean => {
const checkRes = regex.test(inputToCheck.value);
  
     if (!checkRes) {
        inputToCheck.focus();
        highlightError();
        return checkRes;
    }
    return checkRes;
};