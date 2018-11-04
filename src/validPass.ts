import { highlightError } from "./highlightError";
//проверка поля с подтверждением пароля на соответствие паролю
export const validPass = (passField: HTMLInputElement, valPassField: HTMLInputElement): boolean => {
    const val_passCheckRes: boolean = (valPassField.value === passField.value);
    if (!val_passCheckRes) {
        valPassField.focus();
        highlightError(document.getElementById((document.activeElement as HTMLFormElement).name) as HTMLDivElement, document.activeElement as HTMLInputElement);
        return val_passCheckRes;
    }
    return val_passCheckRes;
};