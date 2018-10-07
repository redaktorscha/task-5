//открывает и закрывает подтверждение пароля
export const toggleValPass = (): void => {
    const form = document.forms[0];
    const val_pass = form.elements[5] as HTMLInputElement;
    val_pass.type === "password" ?
        (val_pass.type = "text") :
        (val_pass.type = "password");
};