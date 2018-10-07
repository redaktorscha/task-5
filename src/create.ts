//создает приветствие в случае успешной регистрации
export const createReg = (): void => {
    const registered: HTMLDivElement = document.createElement("div");
    const regText: Text = document.createTextNode("Спасибо за регистрацию :-)");
    registered.classList.add("wrapper-reg");
    registered.appendChild(regText);
    document.body.appendChild(registered);
};