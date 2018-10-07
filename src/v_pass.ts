import { error } from "./error";
//проверка поля с подтверждением пароля
export const validPass = (): boolean => {
    const form: HTMLFormElement = document.forms[0];
    const password = form.elements[3] as HTMLInputElement;
    const val_pass = form.elements[5] as HTMLInputElement;
    const val_passCheckRes: boolean = (val_pass.value === password.value);
    if (!val_passCheckRes) {
        val_pass.focus();
        error();
        return val_passCheckRes;
    }
    return val_passCheckRes;
};