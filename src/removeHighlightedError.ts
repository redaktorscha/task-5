//при нажатии на клавишу, когда поле формы заполняется, подсветка и надпись пропадают
export const removeHighlightedError = (): void => { 
    const targetInp = document.activeElement as HTMLInputElement;
    const targetElName: string = (document.activeElement as HTMLFormElement).name;
    const ErrorMsgDiv = document.getElementById(targetElName) as HTMLDivElement;
    targetInp.classList.remove("error");
    ErrorMsgDiv.style.visibility = "hidden";
  };
