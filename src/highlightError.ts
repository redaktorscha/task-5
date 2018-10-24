
//подсвечивает неправильно заполненное поле формы, показывает скрытую надпись слева
export const highlightError = (): void => { 
    const targetInp = document.activeElement as HTMLInputElement;
    const targetElName: string = (document.activeElement as HTMLFormElement).name;
    const ErrorMsgDiv = document.getElementById(targetElName) as HTMLDivElement;
    targetInp.classList.add("error");
    ErrorMsgDiv.style.visibility = "visible";
    targetInp.blur();
};