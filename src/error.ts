
//подсвечивает неправильно заполненное поле формы, показывает скрытую надпись слева
export const error = (): void => {
    const targetInp = document.activeElement as HTMLInputElement;
    const targetEl: string = (document.activeElement as HTMLFormElement).name;
    const hiddenDiv = document.getElementById(targetEl) as HTMLDivElement;
    targetInp.classList.add("error");
    hiddenDiv.style.visibility = "visible";
    targetInp.blur();
};