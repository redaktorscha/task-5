//открывает и закрывает пароль
export const togglePass = (): void => {
    const form = document.forms[0];
    const password = form.elements[3] as HTMLInputElement;
    password.type === "password" ?
        (password.type = "text") :
        (password.type = "password");
};