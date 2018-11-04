
//подсвечивает неправильно заполненное поле формы, показывает скрытую надпись слева
export const highlightError = (errorMsgDiv: HTMLDivElement, targetInp: HTMLInputElement): void => { 
    //const targetInp = document.activeElement as HTMLInputElement;
    //const targetElName: string = (document.activeElement as HTMLFormElement).name;
    //const errorMsgDiv = document.getElementById(targetElName) as HTMLDivElement;
    targetInp.classList.add("error");
    errorMsgDiv.style.visibility = "visible";
    targetInp.blur();
};