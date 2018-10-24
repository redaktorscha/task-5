import { highlightError } from "./highlightError";
//проверка поля с подтверждением пароля на соответствие паролю
export const validPass = (passField: HTMLInputElement, valPassField: HTMLInputElement): boolean => {
    const val_passCheckRes: boolean = (valPassField.value === passField.value);
    if (!val_passCheckRes) {
        valPassField.focus();
        highlightError();
        return val_passCheckRes;
    }
    return val_passCheckRes;
};