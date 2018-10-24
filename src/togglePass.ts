//открывает и закрывает пароль
export const togglePass = (passwordInput: HTMLInputElement): void => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
};